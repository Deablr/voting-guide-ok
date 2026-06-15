import type { ReactNode } from "react"

type BallotSectionProps = {
  heading: string
  children: ReactNode
}

export function BallotSection({ heading, children }: BallotSectionProps) {
  return (
    <section
      className="mb-8"
      aria-labelledby={`section-${heading.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <h2
        id={`section-${heading.toLowerCase().replace(/\s+/g, "-")}`}
        className="mb-4 rounded-md bg-ballot-section px-3 py-2 text-xl font-bold text-ballot-section-foreground"
      >
        {heading}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  )
}
