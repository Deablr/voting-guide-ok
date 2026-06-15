---
name: ok-election-research
description: Use when the user asks to research Oklahoma election candidates, campaign websites, debates, or refresh data from https://hosting.okelections.gov/electionlist.html. Covers parsing the official Oklahoma election list, generating jurisdiction/party ballots, running research agents per race, and merging campaign websites and YouTube debates back into src/data/ballot.ts.
---

# Oklahoma Election Research Pipeline

This project builds a voter guide from the Oklahoma State Election Board's
official election list. The pipeline has four stages:

1. **Fetch** `https://hosting.okelections.gov/electionlist.html`.
2. **Parse** it into structured JSON (counties → sections → races → candidates).
3. **Generate** `src/data/ballot.ts` with all jurisdictions and parties.
4. **Research** campaign websites and debates/forums with subagents, then merge
   the results and regenerate.

## Files in this pipeline

| File | Purpose |
| ---- | ------- |
| `scripts/parse-elections.ts` | Parses the raw HTML into `/tmp/opencode/parsed-elections.json`. |
| `scripts/generate-ballot.ts` | Turns parsed JSON into `src/data/ballot.ts` and merges known research. |
| `src/data/ballot.ts` | The final data file consumed by the UI. |
| `src/routes/index.tsx` | Renders the ballot and the Party / Jurisdiction filters. |

## Stage 1 — Fetch the election list

```bash
curl -L -s -o /tmp/opencode/electionlist.html \
  "https://hosting.okelections.gov/electionlist.html"
```

## Stage 2 — Parse the HTML

```bash
bun run scripts/parse-elections.ts \
  /tmp/opencode/electionlist.html \
  /tmp/opencode/parsed-elections.json
```

Output is a JSON array of counties. Each county contains sections (STATE
OFFICERS, CONGRESSIONAL OFFICERS, etc.), and each section contains races with
a title, optional subtitle/district, party, and candidate list.

## Stage 3 — Generate the ballot data file

```bash
bun run scripts/generate-ballot.ts \
  /tmp/opencode/parsed-elections.json \
  src/data/ballot.ts
```

This writes a TypeScript module exporting:

- `electionInfo` — shared election metadata.
- `jurisdictionBallots: Record<string, JurisdictionBallot>` — every county's
  full ballot.
- `ballotInfo` / `ballotSections` — backward-compatible defaults for Tulsa.

The generator also adds State Question 832 to every county and merges any
research stored in `generate-ballot.ts` itself.

## Stage 4 — Research websites and debates

For each batch of races, launch a `general` subagent with a list of candidates
and ask it to return verified campaign websites and YouTube debate/forum URLs.

### Typical agent prompt shape

```text
Research the following Oklahoma races for the June 16, 2026 primary.
For each candidate, find the official campaign website URL (if any).
For each race, find links to candidate forums, debates, or interviews on
YouTube (if any). Only include URLs you can verify. Return JSON only:

{
  "candidates": [
    { "name": "CANDIDATE NAME", "race": "race-key", "website": "..." }
  ],
  "debates": {
    "race-key": [
      { "label": "...", "url": "https://www.youtube.com/..." }
    ]
  }
}
```

Race keys are slugified from `{title}-{subtitle?}-{party?}`, e.g.:

- `governor-republican`
- `united-states-senator-democrat`
- `state-senator-district-2-republican`
- `district-attorney-district-14-republican`

### Batches that have already been researched

1. Democrat statewide races.
2. Republican statewide races (Labor, Insurance, Corporation Commissioner,
   Lieutenant Governor).
3. U.S. House races (Districts 1–5, both parties).
4. Tulsa County legislative and local races.

To research a new batch, add the findings to the lookup maps in
`scripts/generate-ballot.ts`:

- `existingCandidateWebsites` — keyed by uppercase candidate name.
- `existingResearch` — keyed by race key; value may contain `debates`.

Then rerun the generator and verify:

```bash
bun run generate-ballot.ts /tmp/opencode/parsed-elections.json src/data/ballot.ts
bun run lint && bun run check && bun run tsc --noEmit && bun run build
```

## Normalization rules

- Candidate names in the HTML are uppercase. The generator normalizes lookup
  keys with `normalizeName()` so agent-provided title-case names still match.
- Candidate websites that cannot be verified should be omitted, not added as
  empty strings.
- Debate links should be YouTube URLs when possible so the app's existing
  `getYouTubeEmbedUrl()` helper can embed them inline.

## UI filters

`src/routes/index.tsx` renders two `<select>` filters:

- **Jurisdiction (County)** — selects which `jurisdictionBallots[county]` to
  display.
- **Party** — shows only races where `race.party === selectedParty`. Races
  with no party (nonpartisan judicial races) are shown for both parties.

## Verification checklist

After any data change, run:

```bash
bun run lint
bun run check
bun run tsc --noEmit
bun run build
```

The generated `src/data/ballot.ts` is large (all 77 counties), so the build
will warn about chunk size. That is expected unless you lazy-load by county.
