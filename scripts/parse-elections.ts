import { JSDOM } from "jsdom"
import fs from "node:fs"
import path from "node:path"

const htmlPath =
  process.argv[2] || path.join("/tmp/opencode", "electionlist.html")
const html = fs.readFileSync(htmlPath, "utf-8")
const dom = new JSDOM(html)
const document = dom.window.document

export type ParsedCandidate = {
  name: string
}

export type ParsedRace = {
  title: string
  subtitle?: string
  party?: string
  instruction: string
  candidates: ParsedCandidate[]
}

export type ParsedSection = {
  heading: string
  races: ParsedRace[]
}

export type ParsedCounty = {
  name: string
  sections: ParsedSection[]
}

function cleanText(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/^\s+|\s+$/g, "")
    .toUpperCase()
}

function parseRaceHeading(heading: string): {
  title: string
  subtitle?: string
  party?: string
} {
  const text = cleanText(heading)

  // Extract party suffix like " - DEMOCRAT" or " - REPUBLICAN"
  const partyMatch = text.match(
    /\s+-\s+(DEMOCRAT|REPUBLICAN|LIBERTARIAN|INDEPENDENT)$/
  )
  const party = partyMatch ? partyMatch[1] : undefined
  let title = party ? text.replace(partyMatch[0], "") : text

  // Extract district subtitle for representative races
  const districtMatch = title.match(
    /(UNITED STATES REPRESENTATIVE|STATE SENATOR|STATE REPRESENTATIVE|DISTRICT ATTORNEY|COUNTY COMMISSIONER)(?:\s*-\s*)?DISTRICT\s+(NO\.\s+)?(\d+)/i
  )
  if (districtMatch) {
    const baseTitle = districtMatch[1].toUpperCase()
    const districtNumber = districtMatch[3]
    return {
      title: baseTitle,
      subtitle: districtNumber ? `DISTRICT ${districtNumber}` : undefined,
      party,
    }
  }

  return { title, party }
}

const counties: ParsedCounty[] = []

// The body contains the election list. We walk top-level elements.
const body = document.body
let currentCounty: ParsedCounty | null = null
let currentSection: ParsedSection | null = null
let currentRace: ParsedRace | null = null

function finishRace() {
  if (currentRace && currentSection && currentRace.candidates.length > 0) {
    currentSection.races.push(currentRace)
  }
  currentRace = null
}

function finishSection() {
  finishRace()
  if (currentSection && currentCounty && currentSection.races.length > 0) {
    currentCounty.sections.push(currentSection)
  }
  currentSection = null
}

function finishCounty() {
  finishSection()
  if (currentCounty && currentCounty.sections.length > 0) {
    counties.push(currentCounty)
  }
  currentCounty = null
}

for (const node of body.childNodes) {
  if (node.nodeType !== dom.window.Node.ELEMENT_NODE) continue
  const el = node as Element
  const tag = el.tagName.toLowerCase()

  if (tag === "font") {
    const size = el.getAttribute("size")
    const text = cleanText(el.textContent || "")

    if (size === "5" && text && !text.startsWith("JUNE")) {
      // County heading
      finishCounty()
      currentCounty = { name: text, sections: [] }
      continue
    }

    if (size === "4" && currentCounty) {
      // Section heading (STATE OFFICERS, CONGRESSIONAL OFFICERS, etc.)
      finishSection()
      currentSection = { heading: text, races: [] }
      continue
    }

    if (size === "3" && currentSection) {
      // Race heading
      finishRace()
      const { title, subtitle, party } = parseRaceHeading(text)
      currentRace = {
        title: `FOR ${title}`,
        subtitle,
        party,
        instruction: "Vote for One",
        candidates: [],
      }
      continue
    }
  }

  if (tag === "table" && currentRace) {
    const cells = el.querySelectorAll("td")
    for (const cell of cells) {
      const cellText = cleanText(cell.textContent || "")
      // Candidate cells are deeply nested; the innermost cell has the name
      if (cellText && !cellText.includes("WIDTH")) {
        // Avoid duplicate by only taking the last/deepest cell in this table row
      }
    }
    // More reliable: get all leaf td text values and pick the one that looks like a name
    const leafTexts = getLeafTextValues(el)
    const name = leafTexts.find((t) => t.length > 2 && !t.match(/\d/))
    if (name) {
      currentRace.candidates.push({ name })
    }
  }
}

finishCounty()

function getLeafTextValues(el: Element): string[] {
  const results: string[] = []
  for (const td of el.querySelectorAll("td")) {
    if (td.querySelector("table")) continue // not a leaf
    const text = cleanText(td.textContent || "")
    if (text) results.push(text)
  }
  return results
}

// Deduplicate candidates within a race by name
for (const county of counties) {
  for (const section of county.sections) {
    for (const race of section.races) {
      const seen = new Set<string>()
      race.candidates = race.candidates.filter((c) => {
        if (seen.has(c.name)) return false
        seen.add(c.name)
        return true
      })
    }
  }
}

const outputPath =
  process.argv[3] || path.join("/tmp/opencode", "parsed-elections.json")
fs.writeFileSync(outputPath, JSON.stringify(counties, null, 2))

console.log(`Parsed ${counties.length} counties`)
for (const county of counties.slice(0, 3)) {
  console.log(`\n${county.name}`)
  for (const section of county.sections) {
    console.log(`  ${section.heading}: ${section.races.length} races`)
    for (const race of section.races.slice(0, 2)) {
      console.log(
        `    ${race.title}${race.subtitle ? ` (${race.subtitle})` : ""}${race.party ? ` [${race.party}]` : ""}: ${race.candidates.map((c) => c.name).join(", ")}`
      )
    }
  }
}
