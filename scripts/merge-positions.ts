import fs from "node:fs"
import path from "node:path"

const files = [
  "/tmp/opencode/positions-state-officers.json",
  "/tmp/opencode/positions-state-commissions.json",
  "/tmp/opencode/positions-congressional.json",
  "/tmp/opencode/positions-legislative-local-1.json",
  "/tmp/opencode/positions-legislative-local-2.json",
  "/tmp/opencode/positions-legislative-local-3.json",
  "/tmp/opencode/positions-judicial.json",
]

type CandidatePositions = {
  supports?: { label: string; url?: string }[]
  against?: { label: string; url?: string }[]
}

const merged: Record<string, CandidatePositions> = {}

function normalizeLabel(label: string): string {
  return label.toLowerCase().replace(/\s+/g, " ").trim()
}

function wordCount(label: string): number {
  return label.trim().split(/\s+/).length
}

function normalizeTaxLabel(label: string): string {
  const match = label.match(/^Lower Taxes \((.+)\)$/i)
  if (!match) return label
  const inner = match[1].trim()
  const lowerInner = inner.toLowerCase()
  if (lowerInner === "income tax") return "Lower Income Tax"
  if (lowerInner === "property tax") return "Lower Property Tax"
  if (lowerInner === "grocery tax") return "Lower Grocery Tax"
  if (lowerInner === "military retirement") return "Lower Taxes (Veterans)"
  return label
}

function mergeList(
  existing: { label: string; url?: string }[] | undefined,
  incoming: { label: string; url?: string }[] | undefined
): { label: string; url?: string }[] | undefined {
  if (!incoming || incoming.length === 0) return existing
  const map = new Map<string, { label: string; url?: string }>()
  if (existing) {
    for (const item of existing) {
      const normalized = { ...item, label: normalizeTaxLabel(item.label) }
      map.set(normalizeLabel(normalized.label), normalized)
    }
  }
  for (const item of incoming) {
    const normalized = { ...item, label: normalizeTaxLabel(item.label) }
    const key = normalizeLabel(normalized.label)
    const current = map.get(key)
    if (!current || (!current.url && normalized.url)) {
      map.set(key, normalized)
    }
  }
  const result = Array.from(map.values())
  return result.length > 0 ? result : undefined
}

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.warn(`Missing file: ${file}`)
    continue
  }
  const data: Record<string, CandidatePositions> = JSON.parse(
    fs.readFileSync(file, "utf-8")
  )
  for (const [name, positions] of Object.entries(data)) {
    const normalizedName = name.toUpperCase().trim()
    const current = merged[normalizedName] || {}
    merged[normalizedName] = {
      supports: mergeList(current.supports, positions.supports),
      against: mergeList(current.against, positions.against),
    }
  }
}

// Validation
let totalChips = 0
let longLabels = 0
for (const [name, positions] of Object.entries(merged)) {
  for (const item of [...(positions.supports || []), ...(positions.against || [])]) {
    totalChips++
    const wc = wordCount(item.label)
    if (wc > 3) {
      longLabels++
      console.warn(`Label too long (${wc} words): "${item.label}" for ${name}`)
    }
  }
}

console.log(`Merged ${Object.keys(merged).length} candidates, ${totalChips} chips`)
if (longLabels > 0) {
  console.warn(`Found ${longLabels} labels longer than 3 words`)
}

// Remove empty entries
for (const [name, positions] of Object.entries(merged)) {
  if (
    (!positions.supports || positions.supports.length === 0) &&
    (!positions.against || positions.against.length === 0)
  ) {
    delete merged[name]
  }
}

console.log(
  `After removing empty entries: ${Object.keys(merged).length} candidates`
)

// Serialize as TypeScript object literal
const serialized = JSON.stringify(merged, null, 2)
  .split("\n")
  .map((line) => "  " + line)
  .join("\n")

const replacement = `const existingPositions: Record<
  string,
  {
    supports?: { label: string; url?: string }[]
    against?: { label: string; url?: string }[]
  }
> = ${serialized.trimStart()}
`

const generatorPath = path.join(
  process.cwd(),
  "scripts",
  "generate-ballot.ts"
)
let generatorSource = fs.readFileSync(generatorPath, "utf-8")

const pattern =
  /const existingPositions: Record<[\s\S]*?> = \{[\s\S]*?\}\n(?:\n)*(?=\/\/ -{10})/

if (!pattern.test(generatorSource)) {
  console.error("Could not find existingPositions block in generate-ballot.ts")
  process.exit(1)
}

generatorSource = generatorSource.replace(pattern, replacement)
fs.writeFileSync(generatorPath, generatorSource)
console.log(`Updated ${generatorPath}`)
