import { createFileRoute } from "@tanstack/react-router"

import { BallotHeader } from "@/components/ballot/ballot-header"
import { BallotLegend } from "@/components/ballot/ballot-legend"
import { BallotRace } from "@/components/ballot/ballot-race"
import { BallotSection } from "@/components/ballot/ballot-section"
import { StateQuestion } from "@/components/ballot/state-question"
import { ballotInfo, ballotSections } from "@/data/ballot"

export const Route = createFileRoute("/")({ component: VoterGuide })

function VoterGuide() {
  return (
    <main className="mx-auto min-h-svh max-w-3xl px-4 py-8">
      <BallotHeader info={ballotInfo} />
      <BallotLegend
        items={[
          {
            label: "Trump Endorsed",
            url: "https://ballotpedia.org/Endorsements_by_Donald_Trump#2026",
          },
        ]}
      />

      {ballotSections.map((section) => (
        <BallotSection key={section.id} heading={section.heading}>
          {section.races?.map((race) => (
            <BallotRace key={race.id} race={race} />
          ))}
          {section.questions?.map((question) => (
            <StateQuestion key={question.id} question={question} />
          ))}
        </BallotSection>
      ))}
    </main>
  )
}
