import { jurisdictionBallots, type Race, type Candidate } from "@/data/ballot";

const TARGET_RACE_IDS = new Set([
  // Governor
  "for-governor-democrat",
  "for-governor-republican",
  // Lt Governor
  "for-lieutenant-governor-republican",
  // Attorney General
  "for-attorney-general-republican",
  // State Treasurer
  "for-state-treasurer-republican",
  // Superintendent
  "for-superintendent-of-public-instruction-democrat",
  "for-superintendent-of-public-instruction-republican",
  // Labor
  "for-commissioner-of-labor-republican",
  // Insurance
  "for-insurance-commissioner-republican",
  // Corporation Commissioner
  "for-corporation-commissioner-democrat",
  "for-corporation-commissioner-republican",
  // US Senate
  "for-united-states-senator-democrat",
  "for-united-states-senator-republican",
  // US House (all districts, both parties)
  "for-united-states-representative-district-01-democrat",
  "for-united-states-representative-district-01-republican",
  "for-united-states-representative-district-02-democrat",
  "for-united-states-representative-district-02-republican",
  "for-united-states-representative-district-03-democrat",
  "for-united-states-representative-district-03-republican",
  "for-united-states-representative-district-04-democrat",
  "for-united-states-representative-district-04-republican",
  "for-united-states-representative-district-05-democrat",
  "for-united-states-representative-district-05-republican",
]);

const seen = new Map<string, { id: string; title: string; subtitle?: string; party?: string; candidates: Candidate[] }>();
for (const ballot of Object.values(jurisdictionBallots)) {
  for (const section of ballot.sections) {
    for (const race of section.races ?? []) {
      if (TARGET_RACE_IDS.has(race.id) && !seen.has(race.id)) {
        seen.set(race.id, {
          id: race.id,
          title: race.title,
          subtitle: race.subtitle,
          party: race.party,
          candidates: race.candidates,
        });
      }
    }
  }
}

const races = Array.from(seen.values()).sort((a, b) => a.id.localeCompare(b.id));
const summary = {
  totalRaces: races.length,
  totalCandidates: races.reduce((acc, r) => acc + r.candidates.length, 0),
  races: races.map(r => ({
    id: r.id,
    title: r.title,
    subtitle: r.subtitle,
    party: r.party,
    candidateNames: r.candidates.map(c => c.name),
  })),
};

const outPath = process.argv[2] ?? "/tmp/opencode/pac-races.json";
await Bun.write(outPath, JSON.stringify(summary, null, 2));
console.log(`PAC-tracked races: ${summary.totalRaces}`);
console.log(`Total candidates: ${summary.totalCandidates}`);
