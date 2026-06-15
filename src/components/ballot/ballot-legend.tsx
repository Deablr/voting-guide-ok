type LegendItem = {
  label: string
  url?: string
}

type BallotLegendProps = {
  items: LegendItem[]
}

export function BallotLegend({ items }: BallotLegendProps) {
  return (
    <div
      className="mb-6 rounded-lg border border-border bg-card p-4"
      aria-label="Ballot legend"
    >
      <h2 className="mb-2 text-sm font-semibold text-foreground">Legend</h2>
      <ul className="flex flex-wrap gap-3">
        {items.map((item) => (
          <li key={item.label}>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground hover:underline"
              >
                <span className="size-2 rounded-full bg-accent-foreground" />
                {item.label}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                <span className="size-2 rounded-full bg-muted-foreground" />
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
