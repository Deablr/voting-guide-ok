import { useMemo, useState } from "react"
import { createFileRoute, Link } from "@tanstack/react-router"

import { BallotHeader } from "@/components/ballot/ballot-header"
import { BallotLegend } from "@/components/ballot/ballot-legend"
import { BallotRace } from "@/components/ballot/ballot-race"
import { BallotSection as BallotSectionUi } from "@/components/ballot/ballot-section"
import { StateQuestion } from "@/components/ballot/state-question"
import { electionInfo, jurisdictionBallots } from "@/data/ballot"
import type { BallotSection } from "@/data/ballot"

export const Route = createFileRoute("/")({ component: VoterGuide })

const COUNTIES = Object.keys(jurisdictionBallots).sort()
const PARTIES = ["DEMOCRAT", "REPUBLICAN"]

function filterSections(
  sections: BallotSection[],
  party: string
): BallotSection[] {
  return sections
    .map((section) => {
      const races = section.races?.filter(
        (race) => !race.party || race.party === party
      )
      if (
        (!races || races.length === 0) &&
        (!section.questions || section.questions.length === 0)
      ) {
        return null
      }
      const next: BallotSection = { ...section }
      if (races) next.races = races
      return next
    })
    .filter((section): section is BallotSection => section !== null)
}

function VoterGuide() {
  const [county, setCounty] = useState("TULSA")
  const [party, setParty] = useState("REPUBLICAN")

  const ballot = jurisdictionBallots[county]
  const filteredSections = useMemo(
    () => filterSections(ballot.sections, party),
    [ballot, party]
  )

  const ballotInfo = useMemo(
    () => ({
      title: electionInfo.title,
      electionType: electionInfo.electionType,
      additionalType: electionInfo.additionalType,
      date: electionInfo.date,
      county: `${ballot.county} COUNTY, OKLAHOMA`,
      party,
      precincts:
        county === "TULSA" ? ["720136-REG", "720136-REGNP"] : undefined,
    }),
    [ballot.county, county, party]
  )

  return (
    <main className="mx-auto min-h-svh max-w-3xl px-4 py-8">
      <BallotHeader info={ballotInfo} />

      <div className="mb-6 flex justify-end">
        <Link
          to="/pac-spending"
          className="text-sm font-semibold text-primary hover:underline"
        >
          View PAC spending report →
        </Link>
      </div>

      <div className="mb-6 grid gap-4 rounded-lg border border-border bg-card p-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="county-filter"
            className="text-sm font-semibold text-foreground"
          >
            Jurisdiction (County)
          </label>
          <select
            id="county-filter"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {COUNTIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="party-filter"
            className="text-sm font-semibold text-foreground"
          >
            Party
          </label>
          <select
            id="party-filter"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {PARTIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <BallotLegend
        items={[
          {
            label: "Trump Endorsed",
            url: "https://ballotpedia.org/Endorsements_by_Donald_Trump#2026",
          },
          {
            label: 'Deab Endorsed',
            url: 'https://deablr.com'
          }
        ]}
      />

      {filteredSections.map((section) => (
        <BallotSectionUi key={section.id} heading={section.heading}>
          {section.races?.map((race) => (
            <BallotRace key={race.id} race={race} />
          ))}
          {section.questions?.map((question) => (
            <StateQuestion key={question.id} question={question} />
          ))}
        </BallotSectionUi>
      ))}
    </main>
  )
}
