import { jurisdictionBallots, type Race, type Candidate } from "@/data/ballot"

type ResearchRace = {
  id: string
  title: string
  subtitle?: string
  party?: string
  scope: "state" | "congressional" | "legislative-local" | "judicial"
  candidates: { name: string; website?: string }[]
}

function scopeOf(race: Race): ResearchRace["scope"] {
  const title = race.title.toLowerCase()
  if (
    title.includes("governor") ||
    title.includes("attorney general") ||
    title.includes("treasurer") ||
    title.includes("superintendent") ||
    title.includes("commissioner") ||
    title.includes("corporation commissioner")
  )
    return "state"
  if (
    title.includes("united states senator") ||
    title.includes("united states representative")
  )
    return "congressional"
  if (title.includes("judge") || title.includes("justice")) return "judicial"
  return "legislative-local"
}

function isStateOfficerRace(race: Race): boolean {
  const title = race.title.toLowerCase()
  const stateOfficerTitles = [
    "for governor",
    "for lieutenant governor",
    "for attorney general",
    "for state treasurer",
    "for superintendent of public instruction",
    "for commissioner of labor",
    "for insurance commissioner",
    "for corporation commissioner",
  ]
  return stateOfficerTitles.some((t) => title.startsWith(t))
}

const seen = new Map<string, ResearchRace>()
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
          candidates: race.candidates.map((c) => ({
            name: c.name,
            website: c.website,
          })),
        })
      }
    }
  }
}

const allRaces = Array.from(seen.values())

const stateOfficers = allRaces.filter(
  (r) => r.scope === "state" && isStateOfficerRace(r as unknown as Race)
)
const stateCommissions = allRaces.filter(
  (r) => r.scope === "state" && !isStateOfficerRace(r as unknown as Race)
)
const congressional = allRaces.filter((r) => r.scope === "congressional")
const legislativeLocal = allRaces.filter((r) => r.scope === "legislative-local")
const judicial = allRaces.filter((r) => r.scope === "judicial")

const batches = [
  { name: "state-officers", races: stateOfficers },
  { name: "state-commissions", races: stateCommissions },
  { name: "congressional", races: congressional },
  { name: "legislative-local", races: legislativeLocal },
  { name: "judicial", races: judicial },
]

const outPath = process.argv[2] ?? "/tmp/opencode/research-batches.json"
await Bun.write(
  outPath,
  JSON.stringify({ batches, totalRaces: allRaces.length }, null, 2)
)

console.log(`Wrote ${outPath}`)
for (const batch of batches) {
  console.log(
    `${batch.name}: ${batch.races.length} races, ${batch.races.reduce(
      (acc, r) => acc + r.candidates.length,
      0
    )} candidates`
  )
}
