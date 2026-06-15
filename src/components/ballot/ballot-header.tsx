import type { BallotInfo } from "@/data/ballot"

type BallotHeaderProps = {
  info: BallotInfo
}

export function BallotHeader({ info }: BallotHeaderProps) {
  return (
    <header className="mb-8 text-center" aria-label="Ballot Heading">
      <h1 className="border-b-2 border-ballot-heading pb-2 text-2xl font-bold tracking-wide text-ballot-heading-foreground">
        {info.title}
      </h1>
      <div className="mt-4 space-y-1 text-sm font-bold text-foreground">
        <p>OFFICIAL {info.party} BALLOT</p>
        <div className="space-y-0.5">
          <p>{info.electionType}</p>
          {info.additionalType && <p>{info.additionalType}</p>}
        </div>
        <p>{info.date}</p>
        <p>{info.county}</p>
        <p>PRECINCT {info.precincts.join(" / ")}</p>
      </div>
    </header>
  )
}
