import fs from "node:fs"
import path from "node:path"
import type { ParsedCounty } from "./parse-elections"

const parsedPath =
  process.argv[2] || path.join("/tmp/opencode", "parsed-elections.json")
const outputPath = process.argv[3] || path.join("src", "data", "ballot.ts")

const parsed: ParsedCounty[] = JSON.parse(fs.readFileSync(parsedPath, "utf-8"))

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function raceId(
  title: string,
  subtitle: string | undefined,
  party: string | undefined
): string {
  const parts = [slugify(title)]
  if (subtitle) parts.push(slugify(subtitle))
  if (party) parts.push(slugify(party))
  return parts.join("-")
}

function normalizeName(name: string): string {
  return name
    .toUpperCase()
    .replace(/\s+/g, " ")
    .replace(/\s*\.\s*/g, ". ")
    .trim()
}

// Existing manual research that should be preserved when candidate/race matches.
const existingResearch: Record<
  string,
  {
    website?: string
    endorsements?: { name: string; url: string }[]
    debates?: { label: string; url: string }[]
  }
> = {
  // State officers
  "governor-republican": {
    debates: [
      {
        label: "Gubernatorial Debate",
        url: "https://www.youtube.com/live/Z1dHIAKW12g",
      },
      {
        label: "Gubernatorial Debate",
        url: "https://www.youtube.com/live/hr97B9d6Ut8",
      },
      {
        label: "Oklahoma Governor's Race: GOP Forum",
        url: "https://www.youtube.com/watch?v=H5kMDvgW3Dc",
      },
      {
        label: "Southeast Oklahoma Republican Governor Primary Forum",
        url: "https://www.youtube.com/watch?v=0YAj8kLHQFo",
      },
      {
        label: "Official OKGOP 2026 Gubernatorial Forum",
        url: "https://www.youtube.com/watch?v=JFiuh1O5fX8",
      },
      {
        label: "Watch Republican candidates for governor in latest debate",
        url: "https://www.youtube.com/watch?v=XLbtcRUDPC8",
      },
    ],
  },
  "lieutenant-governor-republican": {
    debates: [
      {
        label: "Lt. Governor Debate",
        url: "https://www.youtube.com/watch?v=uAqQjJ6bd2k",
      },
      {
        label: "Oklahoma Superintendent & Lieutenant Governor Candidate Forum",
        url: "https://www.youtube.com/watch?v=-LEl3oiDsdA",
      },
    ],
  },
  "attorney-general-republican": {
    debates: [
      {
        label: "Oklahoma GOP Attorney General Debate",
        url: "https://www.youtube.com/watch?v=W-OhMRxUoF8",
      },
    ],
  },
  "state-treasurer-republican": {
    debates: [
      {
        label: "Candidate Forum (includes State Treasurer)",
        url: "https://www.youtube.com/watch?v=3EQit69Txnc",
      },
    ],
  },
  "superintendent-of-public-instruction-republican": {
    debates: [
      {
        label: "Oklahoma GOP State Superintendent Debate",
        url: "https://www.youtube.com/watch?v=hHL51vp-x3I",
      },
      {
        label: "Republican Primary Debate: Oklahoma State Superintendent",
        url: "https://www.youtube.com/watch?v=wRV-lbk4970",
      },
      {
        label: "Oklahoma Superintendent & Lieutenant Governor Candidate Forum",
        url: "https://www.youtube.com/watch?v=-LEl3oiDsdA",
      },
      {
        label: "OK Superintendent Candidate Forum - Elgin, OK",
        url: "https://www.youtube.com/watch?v=kwVRTk_mpgk",
      },
    ],
  },
  "district-attorney-district-14-republican": {
    debates: [
      {
        label: "Tulsa Candidate Forum: Attorney General & District Attorney",
        url: "https://www.youtube.com/watch?v=YP64eQFJfdo",
      },
      {
        label:
          "Tulsa County District Attorney Debate and Attorney General Forum",
        url: "https://www.youtube.com/watch?v=JgghpNcYUz0",
      },
      {
        label: "Tulsa County District Attorney Debate Recap",
        url: "https://www.youtube.com/watch?v=19DexE-eU7I",
      },
      {
        label: "Tulsa County District Attorney Republican Primary Debate",
        url: "https://www.youtube.com/watch?v=1Ql_h-bhDo8",
      },
    ],
  },
  // Democrat statewide races (agent research)
  "governor-democrat": {
    debates: [
      {
        label:
          "Oklahoma Chronicle: Meet the Democratic gubernatorial candidates",
        url: "https://www.youtube.com/watch?v=NMeFy6dUg_4",
      },
      {
        label:
          "Democratic candidate for OK governor Connie Johnson explains her platform",
        url: "https://www.youtube.com/watch?v=_xraQuYs4Ss",
      },
      {
        label:
          "Can Cyndi Munson Flip Oklahoma? | The Future of Education, Families & Rural America",
        url: "https://www.youtube.com/watch?v=EKGJb4UMLLk",
      },
    ],
  },
  "superintendent-of-public-instruction-democrat": {
    debates: [
      {
        label: "Oklahoma Democratic State Superintendent Debate",
        url: "https://www.youtube.com/watch?v=BePTviWer6Y",
      },
    ],
  },
  "corporation-commissioner-democrat": {
    debates: [
      {
        label: "Oklahoma Corporation Commission candidate Harold Spradling",
        url: "https://www.youtube.com/watch?v=zdB8vsyZr5U",
      },
    ],
  },
  "united-states-senator-democrat": {
    debates: [
      {
        label:
          "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!",
        url: "https://www.youtube.com/watch?v=W1FeIWmdZOE",
      },
      {
        label:
          "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma",
        url: "https://www.youtube.com/watch?v=JJ60SNDrDrs",
      },
      {
        label:
          "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas",
        url: "https://www.youtube.com/watch?v=AphyHV1AGQQ",
      },
    ],
  },
  // Republican statewide races (agent research)
  "commissioner-of-labor-republican": {
    debates: [
      {
        label: "GOP Labor Commissioner debate recap (Let's Fix This)",
        url: "https://www.youtube.com/watch?v=3VYqAOlbhik",
      },
      {
        label: "State Chamber candidate interview - Lisa Janloo",
        url: "https://www.youtube.com/watch?v=vWPW5II2rNY",
      },
      {
        label: "State Chamber candidate interview - Kevin West",
        url: "https://www.youtube.com/watch?v=7vtvwpbi7tE",
      },
      {
        label: "State Chamber candidate interview - John Pfeiffer",
        url: "https://www.youtube.com/watch?v=pzMYxklYrGY",
      },
    ],
  },
  "insurance-commissioner-republican": {
    debates: [
      {
        label: "Oklahoma Insurance Commissioner GOP Primary Debate (6/8/26)",
        url: "https://www.youtube.com/watch?v=9jw-B6csLwY",
      },
      {
        label: "OETA GOP Insurance Commissioner Forum",
        url: "https://www.youtube.com/watch?v=q1Z_Vgu07qo",
      },
    ],
  },
  "corporation-commissioner-republican": {
    debates: [
      {
        label: "State Chamber candidate interview - Brad Boles",
        url: "https://www.youtube.com/watch?v=seN89eMU8IQ",
      },
      {
        label: "State Chamber candidate interview - Justin Hornback",
        url: "https://www.youtube.com/watch?v=ZxJd754vm90",
      },
    ],
  },
  "lieutenant-governor-republican": {
    debates: [
      {
        label: "Lt. Governor Debate",
        url: "https://www.youtube.com/watch?v=uAqQjJ6bd2k",
      },
      {
        label:
          "Oklahoma Superintendent & Lieutenant Governor Candidate Forum - May 26, 2026",
        url: "https://www.youtube.com/watch?v=-LEl3oiDsdA",
      },
      {
        label: "State Chamber candidate interview - Brian Hill",
        url: "https://www.youtube.com/watch?v=0KuxKC86fzU",
      },
      {
        label: "Lawton Town Crier interview - T.W. Shannon",
        url: "https://www.youtube.com/watch?v=FwlRpcYcKi8",
      },
    ],
  },
  // US House races (agent research)
  "united-states-representative-district-02-democrat": {
    debates: [
      {
        label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade",
        url: "https://www.youtube.com/watch?v=D6dWeU3-JCs",
      },
    ],
  },
  "united-states-representative-district-04-democrat": {
    debates: [
      {
        label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob",
        url: "https://www.youtube.com/watch?v=l9RNmi9ilSc",
      },
    ],
  },
  "united-states-representative-district-05-democrat": {
    debates: [
      {
        label: "2026 Democratic 5th Congressional District Forum",
        url: "https://www.youtube.com/watch?v=IF4zkyym8FA",
      },
    ],
  },
  "united-states-representative-district-05-republican": {
    debates: [
      {
        label: "2026 Republican 5th Congressional District Forum",
        url: "https://www.youtube.com/watch?v=ydwHBsIiGOs",
      },
    ],
  },
  // Tulsa local/legislative races (agent research)
  "state-senator-district-2-republican": {
    debates: [
      {
        label: "Cherokee 411 interview with Sen. Ally Seifried (District 2)",
        url: "https://www.youtube.com/watch?v=18IuLEizOEc",
      },
    ],
  },
  "state-senator-district-10-republican": {
    debates: [
      {
        label: "2026 Oklahoma State Senate District 10 GOP Candidate Forum",
        url: "https://www.youtube.com/watch?v=vooeJWp6o_A",
      },
      {
        label: "Bill Coleman interview",
        url: "https://www.youtube.com/watch?v=A_IiBQuZzS8",
      },
    ],
  },
  "state-senator-district-12-republican": {
    debates: [
      {
        label: "FOX23 In Depth: State Senator Todd Gollihare",
        url: "https://www.youtube.com/watch?v=TizAaayqRkw",
      },
    ],
  },
  "state-senator-district-34-republican": {
    debates: [
      {
        label: "Owasso Live: Aaron Forst Returns (Oklahoma Senate District 34)",
        url: "https://www.youtube.com/watch?v=dv1vRQ4ci5w",
      },
      {
        label: "Owasso Live: Aaron Forst Oklahoma Senate Candidate District 34",
        url: "https://www.youtube.com/watch?v=2_FPx63Kd58",
      },
    ],
  },
  "state-senator-district-36-republican": {
    debates: [
      {
        label: "Senator John Haste interview",
        url: "https://www.youtube.com/watch?v=_LtPlUCXN-Y",
      },
    ],
  },
  "state-representative-district-69-republican": {
    debates: [
      {
        label: "Meet Sheila Dills, Republican for House District 69",
        url: "https://www.youtube.com/watch?v=pN5N5uzgdW4",
      },
    ],
  },
  "state-representative-district-77-democrat": {
    debates: [
      {
        label: "John Waldron: The Heart of Oklahoma's Education Crisis",
        url: "https://www.youtube.com/watch?v=OxOnRFN-nsw",
      },
    ],
  },
  "county-commissioner-district-no-1-republican": {
    debates: [
      {
        label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee",
        url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc",
      },
    ],
  },
}

const existingCandidateWebsites: Record<string, string> = {
  "MIKE MAZZEI": "https://mikeforok.com/",
  "JAKE A. MERRICK": "https://jakemerrickforgovernor.com/",
  "CHARLES MCCALL": "https://mccallforoklahoma.com/",
  "LEISA MITCHELL HAYNES": "https://mitchellhaynes.us/",
  "GENTNER DRUMMOND": "https://drummondok.com/",
  "CHIP KEATING": "https://www.keating2026.com/",
  "BRIAN HILL": "https://www.hillforlg.com/",
  "T. W. SHANNON": "https://votetwshannon.com/",
  "DARRELL WEAVER": "https://darrellweaverforltgov.com/",
  "JEFF STARLING": "https://jeffstarling.com/",
  "JON ECHOLS": "https://jonechols.com/",
  "CINDY BYRD": "https://www.cindybyrd.com/",
  "TODD RUSS": "https://toddrussforstatetreasurer.com/",
  "ADAM PUGH": "https://www.adampugh.com/",
  "DEBRA A. HERLIHY": "https://www.debraherlihyforstatesuperintendent.com/",
  "TONI HASENBECK": "https://www.toniforok.com/",
  "JOHN COX": "https://coxforok.com/",
  "ROBERT FRANKLIN": "https://voterobertfranklin.com/",
  "JAMES TAYLOR": "https://www.taylor4ok.org/",
  "MARTY L QUINN": "https://martyquinnforok.com",
  "BOB SULLIVAN": "https://votebobsullivan.com",
  "CHRIS MERIDETH": "https://www.chrismeridethforok.com",
  "GRETA SHULER": "https://www.votegretaok.com",
  "JUSTIN HORNBACK": "https://hornback2026.com/",
  "BRAD BOLES": "https://bolesforok.com/",
  "SEAN BUCKNER": "https://bucknerforsenate.com/",
  "BRIAN RAGAIN": "https://ragainforsenate.com/",
  "KEVIN HERN": "https://hernforsenate.com/",
  "JED COCHRAN": "https://jedcochran.com",
  "NATHAN BUTTERFIELD": "https://nathanbutterfield.com",
  "PAUL ROYSE": "https://paulroyse.com",
  "JACKSON LAHMEYER": "https://www.jacksonlahmeyer.com/",
  "MARK TEDFORD": "https://marktedfordforcongress.com",
  "KIM DAVID": "https://votekimdavid.com",
  "COLLEEN MCCARTY": "https://www.mccartyforda.com/",
  "STEVE KUNZWEILER": "https://www.stevek4da.com/",
  "JOHN M. FOTHERGILL": "https://votejohnfothergill.com/",
  "BRANDON L SHREFFLER": "https://www.shrefflerfortulsa.com/",
  "STAN SALLEE": "https://stansallee.com",
  "IDRIS SHELBY": "https://idrisshelby.com",
  // Democrat statewide candidates (agent research)
  "CONNIE JOHNSON": "https://connieforgov.com/",
  ARYA: "https://aa4ok.com/",
  "CYNDI MUNSON": "https://www.cyndimunson.com/",
  "JENNETTIE MARSHALL": "https://www.marshallforoklahoma.com/",
  "CRAIG MCVAY": "https://craigforkids.com/",
  "RHONDA EASTMAN": "https://www.eastman2026.com/",
  "TROY W. GREEN": "https://www.troygreenforsenate.com/",
  "ERVIN STONE YEN": "https://yenforsenate.com/",
  "R.O. JOE CASSITY JR.": "https://joe4oklahoma.com/",
  "N'KIYLA JASMINE THOMAS": "https://www.jasmineforok.com/",
  "JIM PRIEST": "https://jimpriest.com/",
  // Republican statewide candidates (agent research)
  "LISA JANLOO": "https://www.janlooforoklabor.com",
  "KEVIN WEST": "https://www.votekevinwest.com",
  "JOHN PFEIFFER": "https://votejohnpfeiffer.com",
  "DAVID OSTROWE": "https://www.ostroweok.com",
  "JUSTIN JJ HUMPHREY": "https://jj4ltgov.com",
  "H. VICTOR FLORES": "https://www.victor4oklahoma.com",
  // US House candidates (agent research)
  "KELLY B. WALSH": "https://www.walsh2026.com/",
  "TODD WOODS": "https://woods4congress.com/",
  "COURTNEY GILL": "https://okgill.com/",
  "MARK TEDFORD": "https://www.tedfordforcongress.com/",
  "ERIK TERWEY": "https://www.terweyforcongress.com/",
  "BRANDON WADE": "https://brandon4congress.com/",
  "JOSH BRECHEEN": "https://joshbrecheen.com/",
  "WILL WEBB": "https://willwebbforok.wixsite.com/willwebbforok-1",
  "JULES ROBERSON": "https://www.oklahomafight.com/",
  "FRANK D. LUCAS": "https://frankdlucas.com/",
  "MITCHELL JACOB": "https://www.mitchelljacob.com/",
  "JEFF PIXLEY": "https://pixleyforcongress.com/",
  "TOM COLE": "https://tomcoleforcongress.com/",
  "MARCIE EVERHART": "https://everhartforcongress.com/",
  "JENA NELSON": "https://jenanelson.com/",
  "STEPHANIE BICE": "https://biceforcongress.com/",
  // Tulsa local/legislative races (agent research)
  "ALLY SEIFRIED": "https://allyseifried.com",
  "PAYTON PEPIN": "https://www.pepinforsenate.com",
  "JADAN A. TERRAZAS": "https://jadanterrazas.com",
  "BILL COLEMAN": "https://colemanforoklahoma.com",
  "TODD GOLLIHARE": "https://gollihare.com",
  "WM CRAIG STUMP": "https://www.craigstump2026.com",
  "DANA PRIETO": "https://danaprietoforoksenate.com",
  "KENT TAYLOR": "http://kenttaylorok.com",
  "BRENT DRISKILL": "https://brentdriskill.com",
  "JOHN HASTE": "https://hasteforsenate.com",
  "DEBBIE LONG": "https://www.longforstatehouse.com",
  "CRYSTAL CAMPBELL": "https://votecrystalcampbell.com",
  "SCOTTY STOKES": "https://scottystokes.com",
  "JOHN B. KANE": "https://johnkaneforok.com",
  "WENDI STEARMAN": "https://stearmanforhouse.vote",
  "CHRIS BANNING": "https://www.banningforoklahoma.com",
  "CASEY FIXICO SUTTERFIELD":
    "https://sites.google.com/view/caseyfixicosutterfield",
  "BRIAN JACKSON": "https://www.brianjacksontakesaction.com",
  "KYLE HILBERT": "https://kylehilbert.com",
  "SHEILA DILLS": "https://www.votesheiladills.com",
  "ANGELA STROHM": "https://www.angelastrohm.com",
  "CARRIE DEWEESE": "https://www.carrieforthehouse.com",
  "RON STEWART": "https://www.stewartforok.com",
  "ED ROSS": "https://www.rossfordistrict73.com",
  "KEVIN W. NORWOOD": "https://www.norwoodforok.com",
  "SHEILA VANCUREN": "https://votevancuren.com",
  "KRISTINA GABRIEL": "https://kristinaforoklahoma.com",
  "JOHN WALDRON": "https://www.waldron4ok.com",
  "GABE WOOLLEY": "https://www.woolleyforstatehouse.com",
  "PHILLIP PEAK": "https://peakforjudge.com",
  "DUSTIN ALLEN": "https://dustinallenforjudge.com",
}

const existingEndorsements: Record<string, { name: string; url: string }[]> = {
  "MIKE MAZZEI": [
    {
      name: "Trump Endorsed",
      url: "https://truthsocial.com/@realDonaldTrump/116660095799513934",
    },
  ],
  "T. W. SHANNON": [
    {
      name: "Trump Endorsed",
      url: "https://truthsocial.com/@realDonaldTrump/116285916990204668",
    },
  ],
  "KEVIN HERN": [
    {
      name: "Trump Endorsed",
      url: "https://truthsocial.com/@realDonaldTrump/116224634088762061",
    },
  ],
  "JACKSON LAHMEYER": [
    {
      name: "Trump Endorsed",
      url: "https://truthsocial.com/@realDonaldTrump/116534955446755104",
    },
  ],
}

const lines: string[] = []
lines.push(`export type Endorsement = {`)
lines.push(`  name: string`)
lines.push(`  url: string`)
lines.push(`}`)
lines.push(``)
lines.push(`export type Candidate = {`)
lines.push(`  name: string`)
lines.push(`  party: string`)
lines.push(`  website?: string`)
lines.push(`  endorsements?: Endorsement[]`)
lines.push(`}`)
lines.push(``)
lines.push(`export type Debate = {`)
lines.push(`  label: string`)
lines.push(`  url: string`)
lines.push(`}`)
lines.push(``)
lines.push(`export type Race = {`)
lines.push(`  id: string`)
lines.push(`  title: string`)
lines.push(`  subtitle?: string`)
lines.push(`  party?: string`)
lines.push(`  instruction: string`)
lines.push(`  candidates: Candidate[]`)
lines.push(`  debates?: Debate[]`)
lines.push(`}`)
lines.push(``)
lines.push(`export type StateQuestion = {`)
lines.push(`  id: string`)
lines.push(`  title: string`)
lines.push(`  subtitle?: string`)
lines.push(`  text: string`)
lines.push(`  choices: string[]`)
lines.push(`}`)
lines.push(``)
lines.push(`export type BallotSection = {`)
lines.push(`  id: string`)
lines.push(`  heading: string`)
lines.push(`  races?: Race[]`)
lines.push(`  questions?: StateQuestion[]`)
lines.push(`}`)
lines.push(``)
lines.push(`export type BallotInfo = {`)
lines.push(`  title: string`)
lines.push(`  electionType: string`)
lines.push(`  additionalType?: string`)
lines.push(`  date: string`)
lines.push(`  county: string`)
lines.push(`  precincts?: string[]`)
lines.push(`  party?: string`)
lines.push(`}`)
lines.push(``)
lines.push(`export type JurisdictionBallot = {`)
lines.push(`  county: string`)
lines.push(`  sections: BallotSection[]`)
lines.push(`}`)
lines.push(``)
lines.push(`export const electionInfo = {`)
lines.push(`  title: "SAMPLE BALLOT",`)
lines.push(`  electionType: "PRIMARY ELECTION",`)
lines.push(`  additionalType: "SPECIAL ELECTION",`)
lines.push(`  date: "June 16, 2026",`)
lines.push(`}`)
lines.push(``)

lines.push(
  `export const jurisdictionBallots: Record<string, JurisdictionBallot> = {`
)

for (const county of parsed) {
  lines.push(`  "${county.name}": {`)
  lines.push(`    county: "${county.name}",`)
  lines.push(`    sections: [`)

  for (const section of county.sections) {
    const sectionId = slugify(section.heading)
    lines.push(`      {`)
    lines.push(`        id: "${sectionId}",`)
    lines.push(`        heading: "${section.heading}",`)

    const races = section.races.filter((r) => r.candidates.length > 0)
    if (section.heading === "STATE QUESTIONS") {
      lines.push(`        questions: [`)
      lines.push(`          {`)
      lines.push(`            id: "sq-832",`)
      lines.push(`            title: "STATE QUESTION NO. 832",`)
      lines.push(`            subtitle: "INITIATIVE PETITION NO. 446",`)
      lines.push(
        `            text: "This measure amends the Oklahoma Minimum Wage Act (OMWA) under the Oklahoma Statutes to increase the state minimum wage. Employers must pay employees at least $9 per hour beginning in 2025, increasing $1.50 annually for a final rate of $15 per hour in 2029. Beginning in 2030 and continuing indefinitely, the minimum wage would automatically increase annually based on the increase in the cost of living, if any, as measured by the U.S. Department of Labor's Consumer Price Index for Urban Wage Earners and Clerical Workers; the minimum wage increase would continue with any successor agency or index. Such increase would also not require approval from Congress or the Oklahoma Legislature. This measure eliminates several exemptions in the current OMWA, including the exemptions for employers subject to the federal Fair Labor Standards Act; part-time employees; certain students and individuals under age 18; farm and agricultural workers; domestic service workers; newspaper vendors or carriers; and feedstore employees. Effectively, eliminating these exemptions results in current employees not covered by the OMWA now being entitled to the minimum wage. The measure also repeals title 40, section 197.5. |Federal and state employees will not be covered under the OMWA. Volunteers; employers with ten or fewer employees and grossing $100,000 or less; some employees of carriers engaged in interstate commerce; employees working in a bona fide executive, administrative, or professional capacity; outside salesmen; and reserve deputy sheriffs will remain excluded from the OMWA's coverage. Because counties, municipalities, and school districts are not excluded, a fiscal impact on the State will result, possibly necessitating a revenue increase by new taxes or elimination of existing services. The measure will be effective the January 1 following approval and will not apply retroactively. |Shall the proposal be approved?",`
      )
      lines.push(
        `            choices: ["FOR THE PROPOSAL - YES", "AGAINST THE PROPOSAL - NO"],`
      )
      lines.push(`          },`)
      lines.push(`        ],`)
    }

    if (races.length > 0) {
      lines.push(`        races: [`)
      for (const race of races) {
        const id = raceId(race.title, race.subtitle, race.party)
        const researchKey = raceId(
          race.title.replace(/^FOR /, ""),
          race.subtitle,
          race.party
        )
        const research = existingResearch[researchKey]

        lines.push(`          {`)
        lines.push(`            id: "${id}",`)
        lines.push(`            title: "${race.title}",`)
        if (race.subtitle)
          lines.push(`            subtitle: "${race.subtitle}",`)
        if (race.party) lines.push(`            party: "${race.party}",`)
        lines.push(`            instruction: "${race.instruction}",`)
        lines.push(`            candidates: [`)
        for (const candidate of race.candidates) {
          const normalized = normalizeName(candidate.name)
          const website = existingCandidateWebsites[normalized]
          const endorsements = existingEndorsements[normalized]
          lines.push(`              {`)
          lines.push(`                name: "${candidate.name}",`)
          lines.push(`                party: "${race.party || "NONPARTISAN"}",`)
          if (website) lines.push(`                website: "${website}",`)
          if (endorsements) {
            lines.push(`                endorsements: [`)
            for (const e of endorsements) {
              lines.push(
                `                  { name: "${e.name}", url: "${e.url}" },`
              )
            }
            lines.push(`                ],`)
          }
          lines.push(`              },`)
        }
        lines.push(`            ],`)
        if (research?.debates) {
          lines.push(`            debates: [`)
          for (const debate of research.debates) {
            lines.push(
              `              { label: "${debate.label}", url: "${debate.url}" },`
            )
          }
          lines.push(`            ],`)
        }
        lines.push(`          },`)
      }
      lines.push(`        ],`)
    }
    lines.push(`      },`)
  }

  lines.push(`    ],`)
  lines.push(`  },`)
}

lines.push(`}`)
lines.push(``)

// Keep a default ballotInfo for backward compatibility if needed
lines.push(`export const ballotInfo: BallotInfo = {`)
lines.push(`  title: electionInfo.title,`)
lines.push(`  electionType: electionInfo.electionType,`)
lines.push(`  additionalType: electionInfo.additionalType,`)
lines.push(`  date: electionInfo.date,`)
lines.push(`  county: "TULSA",`)
lines.push(`  precincts: ["720136-REG", "720136-REGNP"],`)
lines.push(`  party: "REPUBLICAN",`)
lines.push(`}`)
lines.push(``)

lines.push(
  `export const ballotSections: BallotSection[] = jurisdictionBallots["TULSA"].sections`
)
lines.push(``)

fs.writeFileSync(outputPath, lines.join("\n"))
console.log(`Wrote ${outputPath}`)
console.log(`Counties: ${parsed.length}`)
