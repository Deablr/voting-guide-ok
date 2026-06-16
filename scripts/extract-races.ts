import { jurisdictionBallots, type Race, type Candidate } from "@/data/ballot";

type UniqueRace = {
  id: string;
  title: string;
  subtitle?: string;
  party?: string;
  scope: "state" | "congressional" | "legislative-local" | "judicial";
  candidates: Candidate[];
};

function scopeOf(race: Race): UniqueRace["scope"] {
  const title = race.title.toLowerCase();
  if (title.includes("governor") || title.includes("attorney general") || title.includes("treasurer") || title.includes("superintendent") || title.includes("commissioner") || title.includes("corporation commissioner")) return "state";
  if (title.includes("united states senator") || title.includes("united states representative")) return "congressional";
  if (title.includes("judge") || title.includes("justice")) return "judicial";
  return "legislative-local";
}

const seen = new Map<string, UniqueRace>();
for (const ballot of Object.values(jurisdictionBallots)) {
  for (const section of ballot.sections) {
    for (const race of section.races ?? []) {
      if (!seen.has(race.id)) {
        seen.set(race.id, {
          id: race.id,
          title: race.title,
          subtitle: race.subtitle,
          party: race.party,
          scope: scopeOf(race),
          candidates: race.candidates,
        });
      }
    }
  }
}

const races = Array.from(seen.values()).sort((a, b) => a.id.localeCompare(b.id));

const summary = {
  totalUniqueRaces: races.length,
  byScope: {
    state: races.filter(r => r.scope === "state").length,
    congressional: races.filter(r => r.scope === "congressional").length,
    legislativeLocal: races.filter(r => r.scope === "legislative-local").length,
    judicial: races.filter(r => r.scope === "judicial").length,
  },
  totalCandidates: races.reduce((acc, r) => acc + r.candidates.length, 0),
  races: races.map(r => ({
    id: r.id,
    title: r.title,
    subtitle: r.subtitle,
    party: r.party,
    scope: r.scope,
    candidateNames: r.candidates.map(c => c.name),
  })),
};

const outPath = process.argv[2] ?? "/tmp/opencode/unique-races.json";
await Bun.write(outPath, JSON.stringify(summary, null, 2));
console.log(`Unique races: ${summary.totalUniqueRaces}`);
console.log(JSON.stringify(summary.byScope, null, 2));
console.log(`Total candidates: ${summary.totalCandidates}`);
