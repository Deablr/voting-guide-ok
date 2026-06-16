import type { Candidate as CandidateType, Endorsement, Race } from "@/data/ballot"
import { getYouTubeEmbedUrl } from "@/lib/youtube"

const DEAB_BG = "oklch(0.18 0.05 264.5)"

function EndorsementBadge({ endorsement }: { endorsement: Endorsement }) {
  const isDeab = endorsement.name.toLowerCase().includes("deab")
  const className = isDeab
    ? "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium text-white hover:underline"
    : "inline-flex items-center rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground hover:underline"
  const style = isDeab ? { backgroundColor: DEAB_BG } : undefined

  if (endorsement.url) {
    return (
      <a
        key={endorsement.name}
        href={endorsement.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {endorsement.name}
      </a>
    )
  }

  return (
    <span key={endorsement.name} className={className} style={style}>
      {endorsement.name}
    </span>
  )
}

function Candidate({ candidate }: { candidate: CandidateType }) {
  return (
    <li className="py-2">
      <span className="block font-medium text-foreground">
        {candidate.name}
      </span>
      <span className="text-sm text-ballot-party">{candidate.party}</span>
      {candidate.website && (
        <a
          href={candidate.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm text-primary hover:underline"
        >
          Campaign website
        </a>
      )}
      {candidate.endorsements && candidate.endorsements.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5">
          {candidate.endorsements.map((endorsement) => (
            <EndorsementBadge key={endorsement.name} endorsement={endorsement} />
          ))}
        </div>
      )}
    </li>
  )
}

type BallotRaceProps = {
  race: Race
}

export function BallotRace({ race }: BallotRaceProps) {
  return (
    <details
      className="group overflow-hidden rounded-lg border border-border bg-card text-card-foreground"
      aria-labelledby={`race-${race.id}`}
    >
      <summary
        id={`race-${race.id}`}
        className="cursor-pointer list-none border-b border-border bg-muted px-4 py-3"
      >
        <h3 className="text-lg font-bold text-foreground">
          {race.title}
          {race.subtitle && (
            <span className="block text-base font-semibold">
              {race.subtitle}
            </span>
          )}
        </h3>
        <p
          className="mt-1 text-sm text-ballot-instruction"
          aria-label="Voting Instructions"
        >
          ({race.instruction})
        </p>
      </summary>
      <div className="px-4 py-2">
        <ul
          className="list-none space-y-1 divide-y divide-border"
          role="group"
          aria-label={`Candidates for ${race.title}${race.subtitle ? ` ${race.subtitle}` : ""}`}
        >
          {race.candidates.map((candidate) => (
            <Candidate key={candidate.name} candidate={candidate} />
          ))}
        </ul>
        {race.debates && race.debates.length > 0 && (
          <div className="mt-4 border-t border-border pt-3">
            <h4 className="mb-2 text-sm font-semibold text-foreground">
              Debates
            </h4>
            <div className="space-y-4">
              {race.debates.map((debate, index) => {
                const embedUrl = getYouTubeEmbedUrl(debate.url)
                return (
                  <div key={index}>
                    <p className="mb-1 text-sm font-medium text-foreground">
                      {debate.label}
                    </p>
                    {embedUrl ? (
                      <div className="aspect-video w-full overflow-hidden rounded-md border border-border">
                        <iframe
                          src={embedUrl}
                          title={debate.label}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="h-full w-full"
                        />
                      </div>
                    ) : (
                      <a
                        href={debate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Watch debate
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </details>
  )
}
