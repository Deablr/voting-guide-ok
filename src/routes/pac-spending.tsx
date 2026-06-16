import { useMemo, useState } from "react"
import { createFileRoute, Link } from "@tanstack/react-router"

import type { PacSpendingItem } from "@/data/pac-spending"
import { pacSpendingRaces } from "@/data/pac-spending"

export const Route = createFileRoute("/pac-spending")({
  component: PacSpendingPage,
})

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)
}

function sum(items: PacSpendingItem[], position: "FOR" | "AGAINST"): number {
  return items
    .filter((i) => i.position === position)
    .reduce((acc, i) => acc + i.amount, 0)
}

const PARTIES = ["ALL", "DEMOCRAT", "REPUBLICAN"]

function PacSpendingPage() {
  const [party, setParty] = useState("ALL")

  const filteredRaces = useMemo(() => {
    if (party === "ALL") return pacSpendingRaces
    return pacSpendingRaces.filter((r) => r.party === party)
  }, [party])

  const totals = useMemo(() => {
    let forTotal = 0
    let againstTotal = 0
    for (const race of filteredRaces) {
      for (const candidate of race.candidates) {
        forTotal += sum(candidate.pacSpending, "FOR")
        againstTotal += sum(candidate.pacSpending, "AGAINST")
      }
    }
    return { forTotal, againstTotal }
  }, [filteredRaces])

  return (
    <main className="mx-auto min-h-svh max-w-4xl px-4 pb-8 pt-8">
      <div className="sticky top-0 z-50 -mx-4 mb-6 rounded-none border-y border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 shadow-sm dark:border-amber-700 dark:bg-amber-950/90 dark:text-amber-100 sm:mx-0 sm:rounded-md sm:border">
        <span className="font-semibold">⚠️ Data warning:</span> This PAC
        spending data was aggregated by Kimi K2.7 Code from public FEC and
        Oklahoma Ethics Commission filings. Amounts and committee names should
        be treated as research-grade, not official audit confirmations. Always
        verify with the linked official sources before citing.
      </div>

      <div className="mb-6">
        <Link
          to="/"
          className="text-sm text-primary hover:underline"
        >
          ← Back to voter guide
        </Link>
      </div>

      <h1 className="mb-2 text-3xl font-bold text-foreground">
        PAC Spending Report
      </h1>
      <p className="mb-6 text-muted-foreground">
        Oklahoma June 16, 2026 Primary — money spent by Political Action
        Committees for and against statewide and congressional candidates.
      </p>

      <div className="mb-6 rounded-lg border border-border bg-card p-4">
        <div className="mb-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-md bg-green-50 p-3 dark:bg-green-950/30">
            <p className="text-xs font-semibold uppercase text-green-700 dark:text-green-400">
              Total For
            </p>
            <p className="text-xl font-bold text-green-800 dark:text-green-300">
              {formatCurrency(totals.forTotal)}
            </p>
          </div>
          <div className="rounded-md bg-red-50 p-3 dark:bg-red-950/30">
            <p className="text-xs font-semibold uppercase text-red-700 dark:text-red-400">
              Total Against
            </p>
            <p className="text-xl font-bold text-red-800 dark:text-red-300">
              {formatCurrency(totals.againstTotal)}
            </p>
          </div>
          <div className="rounded-md bg-muted p-3">
            <p className="text-xs font-semibold uppercase text-muted-foreground">
              Grand Total
            </p>
            <p className="text-xl font-bold text-foreground">
              {formatCurrency(totals.forTotal + totals.againstTotal)}
            </p>
          </div>
        </div>

        <label
          htmlFor="party-filter"
          className="mb-1.5 block text-sm font-semibold text-foreground"
        >
          Filter by party
        </label>
        <select
          id="party-filter"
          value={party}
          onChange={(e) => setParty(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
        >
          {PARTIES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-8">
        {filteredRaces.map((race) => (
          <section
            key={race.raceId}
            className="rounded-lg border border-border bg-card"
          >
            <div className="border-b border-border bg-muted px-4 py-3">
              <h2 className="text-lg font-bold text-foreground">
                {race.raceTitle}
                {race.subtitle && (
                  <span className="block text-base font-semibold">
                    {race.subtitle}
                  </span>
                )}
              </h2>
              {race.party && (
                <p className="text-sm text-ballot-party">{race.party}</p>
              )}
            </div>

            <div className="divide-y divide-border">
              {race.candidates.map((candidate) => {
                const forTotal = sum(candidate.pacSpending, "FOR")
                const againstTotal = sum(candidate.pacSpending, "AGAINST")
                const hasSpending = candidate.pacSpending.length > 0

                return (
                  <div key={candidate.name} className="px-4 py-4">
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {candidate.name}
                      </h3>
                      <div className="flex gap-3 text-sm">
                        <span className="text-green-700 dark:text-green-400">
                          For {formatCurrency(forTotal)}
                        </span>
                        <span className="text-red-700 dark:text-red-400">
                          Against {formatCurrency(againstTotal)}
                        </span>
                      </div>
                    </div>

                    {!hasSpending ? (
                      <p className="text-sm italic text-muted-foreground">
                        No reported PAC spending found.
                      </p>
                    ) : (
                      <ul className="space-y-2">
                        {candidate.pacSpending.map((item, idx) => (
                          <li
                            key={idx}
                            className="rounded-md border border-border bg-background p-3 text-sm"
                          >
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                              <span className="font-semibold text-foreground">
                                {item.pacName}
                              </span>
                              <span
                                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                  item.position === "FOR"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                                    : "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                                }`}
                              >
                                {item.position}
                              </span>
                              <span className="font-medium text-foreground">
                                {formatCurrency(item.amount)}
                              </span>
                            </div>
                            <p className="mb-1 text-muted-foreground">
                              {item.description}
                            </p>
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline"
                            >
                              Source: {item.sourceName}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-10 border-t border-border pt-4 text-xs text-muted-foreground">
        <p>
          Sources: Federal Election Commission (FEC) independent expenditure
          filings and Oklahoma Ethics Commission Guardian system. Report
          covers statewide and congressional primary races. Last updated{" "}
          {new Date().toISOString().split("T")[0]}.
        </p>
      </footer>
    </main>
  )
}
