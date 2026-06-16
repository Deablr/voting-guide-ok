type LegendItem = {
  label: string
  url?: string
}

type BallotLegendProps = {
  items: LegendItem[]
}

const DEAB_BG = "oklch(0.18 0.05 264.5)"

function isDeab(label: string): boolean {
  return label.toLowerCase().includes("deab")
}

export function BallotLegend({ items }: BallotLegendProps) {
  return (
    <div
      className="mb-6 rounded-lg border border-border bg-card p-4"
      aria-label="Ballot legend"
    >
      <h2 className="mb-2 text-sm font-semibold text-foreground">Legend</h2>
      <ul className="flex flex-wrap gap-3">
        {items.map((item) => {
          const deab = isDeab(item.label)
          const className = deab
            ? "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-white hover:underline"
            : item.url
              ? "inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground hover:underline"
              : "inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
          const style = deab ? { backgroundColor: DEAB_BG } : undefined
          const dotClass = deab
            ? "size-2 rounded-full bg-white"
            : item.url
              ? "size-2 rounded-full bg-accent-foreground"
              : "size-2 rounded-full bg-muted-foreground"

          if (item.url) {
            return (
              <li key={item.label}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={style}
                >
                  <span className={dotClass} />
                  {item.label}
                </a>
              </li>
            )
          }

          return (
            <li key={item.label}>
              <span className={className} style={style}>
                <span className={dotClass} />
                {item.label}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
