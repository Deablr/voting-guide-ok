import fs from "node:fs"
import path from "node:path"
import type {
  ParsedCandidate,
  ParsedCounty,
  ParsedRace,
  ParsedSection,
} from "./parse-elections"

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
    endorsements?: { name: string; url?: string }[]
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

const existingEndorsements: Record<string, { name: string; url?: string }[]> = {
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
  "JAKE A. MERRICK": [
    {
      name: "Deab Endorsed",
    },
  ],
  "JUSTIN JJ HUMPHREY": [
    {
      name: "Deab Endorsed",
    },
  ],
  "MARK TEDFORD": [
    {
      name: "Deab Endorsed",
    },
  ],
}

const existingPositions: Record<
  string,
  {
    supports?: { label: string; url?: string }[]
    against?: { label: string; url?: string }[]
  }
> = {
  "CONNIE JOHNSON": {
    supports: [
      {
        label: "Childhood Hunger",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-democrat/",
      },
      {
        label: "Veterans",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-democrat/",
      },
      {
        label: "Cannabis Access",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-democrat/",
      },
    ],
  },
  "CYNDI MUNSON": {
    supports: [
      {
        label: "Public Schools",
        url: "https://www.cyndimunson.com/Priorities",
      },
      {
        label: "Teacher Pay",
        url: "https://www.cyndimunson.com/Priorities",
      },
      {
        label: "Lower Taxes (Families)",
        url: "https://www.cyndimunson.com/Priorities",
      },
      {
        label: "Healthcare Costs",
        url: "https://www.cyndimunson.com/Priorities",
      },
    ],
    against: [
      {
        label: "Abortion Ban",
        url: "https://www.cyndimunson.com/Priorities",
      },
      {
        label: "School Vouchers",
        url: "https://www.cyndimunson.com/Priorities",
      },
    ],
  },
  "CALUP ANTHONY TAYLOR": {
    supports: [
      {
        label: "Healthcare Access",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
      {
        label: "College Affordability",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
      {
        label: "Local Roads",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
    ],
  },
  "JENNIFER DOMENICO": {
    supports: [
      {
        label: "Education",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
      {
        label: "Healthcare",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
      {
        label: "Tourism",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
    ],
  },
  "GENTNER DRUMMOND": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Property Tax Relief",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Insurance Accountability",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Law Enforcement",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Border Security",
        url: "https://drummondok.com/",
      },
      {
        label: "CareerTech",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Tribal Partnerships",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Rural Roads",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Healthcare Access",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Mental Health",
        url: "https://drummondok.com/issues/",
      },
      {
        label: "Government Accountability",
        url: "https://drummondok.com/issues/",
      },
    ],
  },
  "KENNETH STURGELL": {
    supports: [
      {
        label: "Second Amendment",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
      {
        label: "Homelessness",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
    ],
    against: [
      {
        label: "Abortion",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
      {
        label: "Vaccine Mandates",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
    ],
  },
  "CHIP KEATING": {
    supports: [
      {
        label: "Back the Blue",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Border Security",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Combat Illegal Marijuana",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Fentanyl Crisis",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Energy Dominance",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Teacher Pay",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Workforce Development",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Pro-Life",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Second Amendment",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Women's Sports",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Government Accountability",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Digital Assets",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Agriculture",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Domestic Manufacturing",
        url: "https://www.keating2026.com/issues",
      },
    ],
    against: [
      {
        label: "CBDCs",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Gender Ideology",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Cashless Bail",
        url: "https://www.keating2026.com/issues",
      },
      {
        label: "Foreign Land Ownership",
        url: "https://www.keating2026.com/issues",
      },
    ],
  },
  "MIKE MAZZEI": {
    supports: [
      {
        label: "Lower Taxes (Seniors/Veterans)",
        url: "https://mikeforok.com/",
      },
      {
        label: "Land Ownership Restrictions",
        url: "https://mikeforok.com/",
      },
      {
        label: "Education Reform",
        url: "https://mikeforok.com/",
      },
      {
        label: "High-Paying Jobs",
        url: "https://mikeforok.com/",
      },
      {
        label: "Government Accountability",
        url: "https://mikeforok.com/",
      },
    ],
  },
  "JAKE A. MERRICK": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://jakemerrickforgovernor.com/",
      },
      {
        label: "DHS Reform",
        url: "https://jakemerrickforgovernor.com/",
      },
      {
        label: "Teacher Pay",
        url: "https://jakemerrickforgovernor.com/",
      },
      {
        label: "School Choice",
        url: "https://jakemerrickforgovernor.com/",
      },
      {
        label: "Parental Rights",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
    ],
    against: [
      {
        label: "Vaccine Mandates",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
      {
        label: "Gender Ideology",
        url: "https://oklahomavoice.com/voter-guides/contests/governor-republican/",
      },
    ],
  },
  "CHARLES MCCALL": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://mccallforoklahoma.com/",
      },
      {
        label: "School Choice",
        url: "https://mccallforoklahoma.com/",
      },
      {
        label: "Parental Rights",
        url: "https://mccallforoklahoma.com/",
      },
      {
        label: "Rural Development",
        url: "https://mccallforoklahoma.com/",
      },
      {
        label: "Agriculture",
        url: "https://mccallforoklahoma.com/",
      },
      {
        label: "Energy",
        url: "https://mccallforoklahoma.com/",
      },
    ],
    against: [
      {
        label: "Critical Race Theory",
        url: "https://mccallforoklahoma.com/",
      },
      {
        label: "Renewable Subsidies",
        url: "https://mccallforoklahoma.com/",
      },
      {
        label: "Foreign Land Ownership",
        url: "https://mccallforoklahoma.com/",
      },
    ],
  },
  "LEISA MITCHELL HAYNES": {
    supports: [
      {
        label: "Infrastructure",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Education Reform",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Tribal Partnerships",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Law Enforcement",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Border Security",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Nursing Homes",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Special Needs Adults",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Women's Sports",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Oil Drilling",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Business Recruitment",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Movie Incentives",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Religious Freedom",
        url: "https://mitchellhaynes.us/the-vision/",
      },
    ],
    against: [
      {
        label: "Critical Race Theory",
        url: "https://mitchellhaynes.us/the-vision/",
      },
      {
        label: "Corruption",
        url: "https://mitchellhaynes.us/the-vision/",
      },
    ],
  },
  "H. VICTOR FLORES": {
    supports: [
      {
        label: "Lower Taxes",
        url: "https://www.victor4oklahoma.com",
      },
      {
        label: "Small Business",
        url: "https://www.victor4oklahoma.com",
      },
      {
        label: "Energy",
        url: "https://www.victor4oklahoma.com",
      },
      {
        label: "Tribal Partnerships",
        url: "https://www.victor4oklahoma.com",
      },
      {
        label: "Veterans",
        url: "https://www.victor4oklahoma.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.victor4oklahoma.com",
      },
      {
        label: "Border Security",
        url: "https://www.victor4oklahoma.com",
      },
      {
        label: "Tourism",
        url: "https://www.victor4oklahoma.com",
      },
      {
        label: "Religious Freedom",
        url: "https://www.victor4oklahoma.com",
      },
    ],
    against: [
      {
        label: "Federal Overreach",
        url: "https://www.victor4oklahoma.com",
      },
    ],
  },
  "T. W. SHANNON": {
    supports: [
      {
        label: "Cut Red Tape",
        url: "https://oklahomavoice.com/voter-guides/contests/lieutenant-governor-republican/",
      },
      {
        label: "Merit",
        url: "https://oklahomavoice.com/voter-guides/contests/lieutenant-governor-republican/",
      },
      {
        label: "America First",
        url: "https://votetwshannon.com/",
      },
    ],
    against: [
      {
        label: "Leftist Policies",
        url: "https://oklahomavoice.com/voter-guides/contests/lieutenant-governor-republican/",
      },
    ],
  },
  "DARRELL WEAVER": {
    supports: [
      {
        label: "Law Enforcement",
        url: "https://darrellweaverforltgov.com/",
      },
      {
        label: "Small Business",
        url: "https://darrellweaverforltgov.com/",
      },
      {
        label: "Public Safety",
        url: "https://darrellweaverforltgov.com/",
      },
      {
        label: "Aerospace",
        url: "https://darrellweaverforltgov.com/",
      },
      {
        label: "Tourism",
        url: "https://darrellweaverforltgov.com/",
      },
    ],
    against: [
      {
        label: "Human Trafficking",
        url: "https://darrellweaverforltgov.com/",
      },
      {
        label: "Drug Cartels",
        url: "https://darrellweaverforltgov.com/",
      },
    ],
  },
  "DAVID OSTROWE": {
    supports: [
      {
        label: "Economic Development",
        url: "https://www.ostroweok.com",
      },
      {
        label: "Manufacturing Jobs",
        url: "https://www.ostroweok.com",
      },
      {
        label: "Government Accountability",
        url: "https://www.ostroweok.com",
      },
      {
        label: "Veterans",
        url: "https://www.ostroweok.com",
      },
    ],
    against: [
      {
        label: "Government Waste",
        url: "https://www.ostroweok.com",
      },
    ],
  },
  "JUSTIN JJ HUMPHREY": {
    supports: [
      {
        label: "DHS Reform",
        url: "https://jj4ltgov.com/issues",
      },
      {
        label: "DOC Reform",
        url: "https://jj4ltgov.com/issues",
      },
      {
        label: "Broadband Expansion",
        url: "https://jj4ltgov.com/issues",
      },
      {
        label: "District Attorney Reform",
        url: "https://jj4ltgov.com/issues",
      },
    ],
    against: [
      {
        label: "Data Centers",
        url: "https://jj4ltgov.com/issues",
      },
      {
        label: "Big Agriculture",
        url: "https://jj4ltgov.com/issues",
      },
    ],
  },
  "BRIAN HILL": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "Second Amendment",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "Border Security",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "School Choice",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "Economic Opportunity",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "Energy",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "Religious Freedom",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "Workforce Reentry",
        url: "https://www.hillforlg.com/",
      },
    ],
    against: [
      {
        label: "Government Bloat",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "CCP Influence",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "Transgender Athletes",
        url: "https://www.hillforlg.com/",
      },
      {
        label: "COVID Mandates",
        url: "https://www.hillforlg.com/",
      },
    ],
  },
  "JON ECHOLS": {
    supports: [
      {
        label: "Law Enforcement",
        url: "https://jonechols.com/",
      },
      {
        label: "Tribal Partnerships",
        url: "https://oklahomavoice.com/voter-guides/contests/attorney-general-republican/",
      },
    ],
    against: [
      {
        label: "DEI Programs",
        url: "https://oklahomavoice.com/voter-guides/contests/attorney-general-republican/",
      },
    ],
  },
  "JEFF STARLING": {
    supports: [
      {
        label: "Law Enforcement",
        url: "https://jeffstarling.com/",
      },
      {
        label: "Second Amendment",
        url: "https://jeffstarling.com/",
      },
      {
        label: "Pro-Life",
        url: "https://jeffstarling.com/",
      },
      {
        label: "Border Security",
        url: "https://jeffstarling.com/",
      },
      {
        label: "Energy",
        url: "https://jeffstarling.com/",
      },
      {
        label: "Fentanyl Crisis",
        url: "https://jeffstarling.com/",
      },
    ],
    against: [
      {
        label: "CCP Influence",
        url: "https://jeffstarling.com/",
      },
      {
        label: "Green Energy Subsidies",
        url: "https://jeffstarling.com/",
      },
    ],
  },
  "TODD RUSS": {
    supports: [
      {
        label: "Fiscal Responsibility",
        url: "https://toddrussforstatetreasurer.com/",
      },
      {
        label: "Transparency",
        url: "https://toddrussforstatetreasurer.com/",
      },
      {
        label: "Financial Literacy",
        url: "https://toddrussforstatetreasurer.com/",
      },
    ],
    against: [
      {
        label: "Government Waste",
        url: "https://toddrussforstatetreasurer.com/",
      },
    ],
  },
  "CINDY BYRD": {
    supports: [
      {
        label: "Government Accountability",
        url: "https://www.cindybyrd.com/platform",
      },
      {
        label: "Tourism",
        url: "https://www.cindybyrd.com/platform",
      },
      {
        label: "Education",
        url: "https://www.cindybyrd.com/platform",
      },
      {
        label: "Healthcare",
        url: "https://www.cindybyrd.com/platform",
      },
      {
        label: "Business Growth",
        url: "https://www.cindybyrd.com/platform",
      },
    ],
    against: [
      {
        label: "Government Waste",
        url: "https://www.cindybyrd.com/platform",
      },
      {
        label: "Corruption",
        url: "https://www.cindybyrd.com/",
      },
    ],
  },
  "JENNETTIE MARSHALL": {
    supports: [
      {
        label: "Teacher Retention",
        url: "https://www.marshallforoklahoma.com/",
      },
      {
        label: "Special Education",
        url: "https://www.marshallforoklahoma.com/",
      },
      {
        label: "District Accountability",
        url: "https://www.marshallforoklahoma.com/",
      },
      {
        label: "Parental Involvement",
        url: "https://www.marshallforoklahoma.com/",
      },
    ],
    against: [
      {
        label: "Education Bureaucracy",
        url: "https://www.marshallforoklahoma.com/",
      },
    ],
  },
  "CRAIG MCVAY": {
    supports: [
      {
        label: "Public Schools",
        url: "https://craigforkids.com/issues/",
      },
      {
        label: "Teacher Support",
        url: "https://craigforkids.com/issues/",
      },
      {
        label: "Rural Schools",
        url: "https://craigforkids.com/issues/",
      },
      {
        label: "School Safety",
        url: "https://craigforkids.com/issues/",
      },
    ],
  },
  "TONI HASENBECK": {
    supports: [
      {
        label: "School Choice",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Parental Rights",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Pro-Life",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Second Amendment",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Religious Freedom",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Teacher Pay",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Workforce Training",
        url: "https://www.toniforok.com/",
      },
      {
        label: "School Safety",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Women's Sports",
        url: "https://www.toniforok.com/",
      },
    ],
    against: [
      {
        label: "DEI Programs",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Critical Race Theory",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Gender Ideology",
        url: "https://www.toniforok.com/",
      },
      {
        label: "Transgender Care",
        url: "https://www.toniforok.com/",
      },
    ],
  },
  "JOHN COX": {
    supports: [
      {
        label: "School Safety",
        url: "https://coxforok.com/",
      },
      {
        label: "Academic Achievement",
        url: "https://coxforok.com/",
      },
      {
        label: "Parental Involvement",
        url: "https://coxforok.com/",
      },
      {
        label: "Teacher Support",
        url: "https://coxforok.com/",
      },
    ],
  },
  "ROBERT FRANKLIN": {
    supports: [
      {
        label: "Back to Basics",
        url: "https://voterobertfranklin.com/",
      },
      {
        label: "Parental Involvement",
        url: "https://voterobertfranklin.com/",
      },
      {
        label: "School Choice",
        url: "https://voterobertfranklin.com/",
      },
      {
        label: "Career Pathways",
        url: "https://voterobertfranklin.com/",
      },
      {
        label: "Teacher Support",
        url: "https://voterobertfranklin.com/",
      },
    ],
  },
  "JAMES TAYLOR": {
    supports: [
      {
        label: "Teacher Recruitment",
        url: "https://www.taylor4ok.org/",
      },
      {
        label: "Academic Excellence",
        url: "https://www.taylor4ok.org/",
      },
      {
        label: "Parent Partnership",
        url: "https://www.taylor4ok.org/",
      },
      {
        label: "School Safety",
        url: "https://www.taylor4ok.org/",
      },
      {
        label: "Civic Instruction",
        url: "https://www.taylor4ok.org/",
      },
      {
        label: "Budget Accountability",
        url: "https://www.taylor4ok.org/",
      },
      {
        label: "CareerTech",
        url: "https://www.taylor4ok.org/",
      },
    ],
  },
  "ADAM PUGH": {
    supports: [
      {
        label: "Teacher Pay",
        url: "https://www.adampugh.com/issues/",
      },
      {
        label: "School Choice",
        url: "https://www.adampugh.com/issues/",
      },
      {
        label: "Parental Rights",
        url: "https://www.adampugh.com/issues/",
      },
      {
        label: "School Safety",
        url: "https://www.adampugh.com/issues/",
      },
      {
        label: "Fiscal Responsibility",
        url: "https://www.adampugh.com/issues/",
      },
    ],
    against: [
      {
        label: "Woke Indoctrination",
        url: "https://www.adampugh.com/issues/",
      },
      {
        label: "Explicit Materials",
        url: "https://www.adampugh.com/issues/",
      },
    ],
  },
  "DEBRA A. HERLIHY": {
    supports: [
      {
        label: "Early Literacy",
        url: "https://oklahomavoice.com/voter-guides/contests/superintendent-of-public-instruction-republican/",
      },
      {
        label: "Teacher Retention",
        url: "https://oklahomavoice.com/voter-guides/contests/superintendent-of-public-instruction-republican/",
      },
    ],
    against: [
      {
        label: "Teachers' Unions",
        url: "https://www.debraherlihyforstatesuperintendent.com/",
      },
    ],
  },
  "WILLIAM E CROZIER": {
    supports: [
      {
        label: "Neighborhood Schools",
        url: "https://www.kosu.org/william-crozier-oklahoma-2026-superintendent-election",
      },
      {
        label: "School Safety",
        url: "https://www.kosu.org/william-crozier-oklahoma-2026-superintendent-election",
      },
      {
        label: "Reading Instruction",
        url: "https://www.kosu.org/william-crozier-oklahoma-2026-superintendent-election",
      },
    ],
    against: [
      {
        label: "School Buses",
        url: "https://www.kosu.org/william-crozier-oklahoma-2026-superintendent-election",
      },
    ],
  },
  "JOHN PFEIFFER": {
    supports: [
      {
        label: "Small Business",
        url: "https://votejohnpfeiffer.com",
      },
      {
        label: "Workforce Development",
        url: "https://votejohnpfeiffer.com",
      },
      {
        label: "Right to Work",
        url: "https://votejohnpfeiffer.com",
      },
      {
        label: "Second Amendment",
        url: "https://votejohnpfeiffer.com",
      },
      {
        label: "Combat Fraud",
        url: "https://votejohnpfeiffer.com",
      },
    ],
    against: [
      {
        label: "Federal Overreach",
        url: "https://votejohnpfeiffer.com",
      },
      {
        label: "Red Tape",
        url: "https://votejohnpfeiffer.com",
      },
    ],
  },
  "LISA JANLOO": {
    supports: [
      {
        label: "Youth Workforce",
        url: "https://www.janlooforoklabor.com",
      },
      {
        label: "Workplace Safety",
        url: "https://www.janlooforoklabor.com",
      },
      {
        label: "Reentry Programs",
        url: "https://www.janlooforoklabor.com",
      },
      {
        label: "Small Business",
        url: "https://www.janlooforoklabor.com",
      },
    ],
    against: [
      {
        label: "Minimum Wage",
        url: "https://oklahomavoice.com/2026/05/25/meet-the-republicans-running-for-oklahoma-labor-commissioner/",
      },
    ],
  },
  "KEITH SWINTON": {
    supports: [
      {
        label: "Workplace Safety",
        url: "https://oklahomavoice.com/2026/05/25/meet-the-republicans-running-for-oklahoma-labor-commissioner/",
      },
      {
        label: "Workforce Development",
        url: "https://oklahomavoice.com/2026/05/25/meet-the-republicans-running-for-oklahoma-labor-commissioner/",
      },
      {
        label: "Higher Pay",
        url: "https://oklahomavoice.com/2026/05/25/meet-the-republicans-running-for-oklahoma-labor-commissioner/",
      },
    ],
  },
  "KEVIN WEST": {
    supports: [
      {
        label: "Skilled Trades",
        url: "https://www.votekevinwest.com",
      },
      {
        label: "Workplace Safety",
        url: "https://www.votekevinwest.com",
      },
      {
        label: "Small Business",
        url: "https://www.votekevinwest.com",
      },
      {
        label: "Apprenticeships",
        url: "https://www.votekevinwest.com",
      },
      {
        label: "AI and Automation",
        url: "https://www.votekevinwest.com",
      },
    ],
    against: [
      {
        label: "Pandemic Lockdowns",
        url: "https://oklahomavoice.com/2026/05/25/meet-the-republicans-running-for-oklahoma-labor-commissioner/",
      },
      {
        label: "Gender Transition",
        url: "https://oklahomavoice.com/2026/05/25/meet-the-republicans-running-for-oklahoma-labor-commissioner/",
      },
      {
        label: "Drag Shows",
        url: "https://oklahomavoice.com/2026/05/25/meet-the-republicans-running-for-oklahoma-labor-commissioner/",
      },
      {
        label: "Pride Flags",
        url: "https://oklahomavoice.com/2026/05/25/meet-the-republicans-running-for-oklahoma-labor-commissioner/",
      },
    ],
  },
  "CHRIS MERIDETH": {
    supports: [
      {
        label: "Consumer Protection",
        url: "https://www.chrismeridethforok.com/issues",
      },
      {
        label: "Business-Friendly Reforms",
        url: "https://www.chrismeridethforok.com/issues",
      },
      {
        label: "Lower Insurance Rates",
        url: "https://www.chrismeridethforok.com/issues",
      },
      {
        label: "State Sovereignty",
        url: "https://www.chrismeridethforok.com/issues",
      },
    ],
    against: [
      {
        label: "Federal Overreach",
        url: "https://www.chrismeridethforok.com/issues",
      },
    ],
  },
  "GRETA SHULER": {
    supports: [
      {
        label: "ISO Ratings",
        url: "https://www.votegretaok.com/priorities",
      },
      {
        label: "Consumer Education",
        url: "https://www.votegretaok.com/priorities",
      },
      {
        label: "Disaster Preparedness",
        url: "https://www.votegretaok.com/priorities",
      },
      {
        label: "Rate Fairness",
        url: "https://www.votegretaok.com/priorities",
      },
      {
        label: "Community Partnerships",
        url: "https://www.votegretaok.com/priorities",
      },
    ],
    against: [
      {
        label: "Pricing Optimization",
        url: "https://www.votegretaok.com/priorities",
      },
    ],
  },
  "MARTY L QUINN": {
    supports: [
      {
        label: "Insurance Competition",
        url: "https://martyquinnforok.com/priorities/",
      },
      {
        label: "Claims Accountability",
        url: "https://martyquinnforok.com/priorities/",
      },
      {
        label: "Tort Reform",
        url: "https://martyquinnforok.com/priorities/",
      },
      {
        label: "Homeowner Protection",
        url: "https://martyquinnforok.com/priorities/",
      },
    ],
    against: [
      {
        label: "Rate Hikes",
        url: "https://martyquinnforok.com/priorities/",
      },
    ],
  },
  "BOB SULLIVAN": {
    supports: [
      {
        label: "Lower Insurance Rates",
        url: "https://votebobsullivan.com",
      },
      {
        label: "Insurance Competition",
        url: "https://votebobsullivan.com",
      },
      {
        label: "Homeowner Protection",
        url: "https://votebobsullivan.com",
      },
      {
        label: "Pro-Life",
        url: "https://votebobsullivan.com",
      },
      {
        label: "Second Amendment",
        url: "https://votebobsullivan.com",
      },
    ],
    against: [
      {
        label: "Big Insurance",
        url: "https://votebobsullivan.com",
      },
      {
        label: "Price Gouging",
        url: "https://votebobsullivan.com",
      },
    ],
  },
  "DONALD ANTHONY CLYTUS": {
    supports: [
      {
        label: "Regulatory Modernization",
        url: "https://oklahomavoice.com/voter-guides/contests/corporation-commissioner-democrat/",
      },
      {
        label: "Energy Innovation",
        url: "https://oklahomavoice.com/voter-guides/contests/corporation-commissioner-democrat/",
      },
      {
        label: "Natural Resources",
        url: "https://oklahomavoice.com/voter-guides/contests/corporation-commissioner-democrat/",
      },
    ],
  },
  "RHONDA EASTMAN": {
    supports: [
      {
        label: "Lower Utility Rates",
        url: "https://www.eastman2026.com/",
      },
      {
        label: "Orphan Well Cleanup",
        url: "https://www.eastman2026.com/",
      },
      {
        label: "Water Protection",
        url: "https://www.eastman2026.com/",
      },
    ],
    against: [
      {
        label: "Data Centers",
        url: "https://www.eastman2026.com/",
      },
      {
        label: "Injection Wells",
        url: "https://www.eastman2026.com/",
      },
      {
        label: "Nuclear Power",
        url: "https://www.eastman2026.com/",
      },
    ],
  },
  "BRAD BOLES": {
    supports: [
      {
        label: "Utility Rate Protection",
        url: "https://bolesforok.com/",
      },
      {
        label: "Energy Independence",
        url: "https://bolesforok.com/",
      },
      {
        label: "Economic Growth",
        url: "https://bolesforok.com/",
      },
      {
        label: "Regulatory Reform",
        url: "https://bolesforok.com/",
      },
    ],
    against: [
      {
        label: "Federal Overreach",
        url: "https://bolesforok.com/",
      },
    ],
  },
  "JUSTIN HORNBACK": {
    supports: [
      {
        label: "Consumer Protection",
        url: "https://hornback2026.com/",
      },
      {
        label: "Transparency",
        url: "https://hornback2026.com/",
      },
      {
        label: "Energy Infrastructure",
        url: "https://hornback2026.com/",
      },
    ],
  },
  "ROSITA GALLARDO": {
    supports: [
      {
        label: "Transparency",
        url: "https://www.findglocal.com/US/Stilwell/1022575210928419/Rosita-For-Adair-County-Treasurer",
      },
      {
        label: "Accountability",
        url: "https://www.findglocal.com/US/Stilwell/1022575210928419/Rosita-For-Adair-County-Treasurer",
      },
      {
        label: "Youth Programs",
        url: "https://www.findglocal.com/US/Stilwell/1022575210928419/Rosita-For-Adair-County-Treasurer",
      },
      {
        label: "Community Events",
        url: "https://www.findglocal.com/US/Stilwell/1022575210928419/Rosita-For-Adair-County-Treasurer",
      },
    ],
  },
  "MIKE WININGER": {
    supports: [
      {
        label: "Road Maintenance",
        url: "https://www.stilwelldemocrat.com/news/county-commissioner-grateful-for-opportunity-to-serve/article_cd7adc0c-2837-11eb-b6c6-7bb05bd05943.html",
      },
      {
        label: "Infrastructure",
        url: "https://www.stilwelldemocrat.com/news/county-commissioner-grateful-for-opportunity-to-serve/article_cd7adc0c-2837-11eb-b6c6-7bb05bd05943.html",
      },
    ],
  },
  "CHARLES E.W. BOECHER": {
    supports: [
      {
        label: "Fiscal Responsibility",
        url: "https://www.stilwelldemocrat.com/community/boecher-announces-candidacy-for-county-commissioner/article_bf06275e-5705-11ed-b62b-6f149696c1f1.html",
      },
    ],
  },
  "RODD DUFF": {
    supports: [
      {
        label: "Transparency",
        url: "https://www.youtube.com/watch?v=APGGy9wi1m0",
      },
      {
        label: "Accountability",
        url: "https://www.youtube.com/watch?v=APGGy9wi1m0",
      },
      {
        label: "Local Businesses",
        url: "https://www.linkedin.com/posts/rodd-duff-94878a45_why-im-running-for-mangum-city-commissioner-activity-7465109011781165056-LlqF",
      },
      {
        label: "Remote Work",
        url: "https://www.youtube.com/watch?v=APGGy9wi1m0",
      },
      {
        label: "Infrastructure",
        url: "https://www.youtube.com/watch?v=APGGy9wi1m0",
      },
      {
        label: "Public Services",
        url: "https://www.youtube.com/watch?v=APGGy9wi1m0",
      },
      {
        label: "Youth Programs",
        url: "https://www.youtube.com/watch?v=APGGy9wi1m0",
      },
    ],
    against: [
      {
        label: "Electric Meter Fee",
        url: "https://www.youtube.com/watch?v=APGGy9wi1m0",
      },
      {
        label: "Oppose Tax Increases",
        url: "https://www.youtube.com/watch?v=APGGy9wi1m0",
      },
    ],
  },
  "DANIEL J. MATTHEWS": {
    supports: [
      {
        label: "Economic Development",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Business Liaison",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Public Safety",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Infrastructure",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Airport Development",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Budget Reserve",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
    against: [
      {
        label: "City-Funded Shelter",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
  },
  "KENNETH R. CRAWFORD": {
    supports: [
      {
        label: "Transparency",
        url: "https://www.baseballheaven.net/shawnee-ward-1-campaign/",
      },
      {
        label: "Accountability",
        url: "https://www.baseballheaven.net/shawnee-ward-1-campaign/",
      },
      {
        label: "Public Safety",
        url: "https://www.baseballheaven.net/shawnee-ward-1-campaign/",
      },
      {
        label: "Smart Growth",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Forensic Audit",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Homeless Reintegration",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Veterans Services",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Mental Health Services",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Historic Preservation",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
    against: [
      {
        label: "Public Safety Fee",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Contracting Out Staff",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "NDA Restrictions",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Paul Ballpark Sale",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
  },
  "LEVI ANNIS": {
    supports: [
      {
        label: "Homeless Shelter",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Homeless Reintegration",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Infrastructure",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Small Businesses",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Broken Window Theory",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Historic Preservation",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
    against: [
      {
        label: "Big Corporations",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Data Centers",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
  },
  "JOEY WARD": {
    supports: [
      {
        label: "Public Safety",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Back the Blue",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Infrastructure",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Transparency",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "501c3 Accountability",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "I-40 Expansion",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "House Rehabilitation",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Drug Treatment",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
    against: [
      {
        label: "NDA Restrictions",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Paul Ballpark Sale",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
  },
  "JOHNNA ERVIN": {
    supports: [
      {
        label: "Public Safety",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Community Involvement",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Affordable Housing",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Infrastructure",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Economic Development",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Historic Preservation",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
  },
  "CHARLES CRANSTON": {
    supports: [
      {
        label: "Public Safety",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "More Police",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Small Businesses",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Park Cameras",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Drug Prosecution",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Lower Taxes (Homeowners)",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
    against: [
      {
        label: "Book and Release",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Big Corporations",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
  },
  "LAUREN RICHTER": {
    supports: [
      {
        label: "Airport Development",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Public Safety",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Parks and Recreation",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Shop Local",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Future Land Use",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Sports Complex",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
      {
        label: "Economic Development",
        url: "https://www.youtube.com/watch?v=OB9HMKCUAg4",
      },
    ],
  },
  "TROY W. GREEN": {
    supports: [
      {
        label: "Expand Rural Healthcare",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Affordable Housing",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Worker Protections",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Childcare Access",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Labor Rights",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Fight Human Trafficking",
        url: "https://www.troygreenforsenate.com/",
      },
      {
        label: "Foster Care Reform",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Higher Wages",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Affordable Higher Education",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Fair Trade",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Release Epstein Files",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Government Transparency",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
    ],
  },
  "ERVIN STONE YEN": {
    supports: [
      {
        label: "Protect Abortion Rights",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Defend Medical Autonomy",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Rural Hospital Funding",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Lower Healthcare Costs",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Raise Teacher Pay",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Protect Public Schools",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Mental Health Treatment",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Addiction Treatment",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Rehabilitation Programs",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Mental Health Units",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Reduce Recidivism",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Protect Voting Rights",
        url: "https://yenforsenate.com/",
      },
      {
        label: "ICE Body Cameras",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Federal Accountability",
        url: "https://yenforsenate.com/",
      },
    ],
    against: [
      {
        label: "SAVE Act",
        url: "https://yenforsenate.com/",
      },
      {
        label: "Sweeping ICE Raids",
        url: "https://yenforsenate.com/",
      },
    ],
  },
  "R.O. JOE CASSITY JR.": {
    supports: [
      {
        label: "Expand Medicare",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Expand Medicaid",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Expand SNAP",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Protect Social Security",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Strong National Defense",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Tax Billionaires",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Support Israel",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Support NATO",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
    ],
  },
  "N'KIYLA JASMINE THOMAS": {
    supports: [
      {
        label: "Protect ACA",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Rural Healthcare",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Regulate Private Insurers",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Reduce Class Sizes",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Fund Special Education",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Free School Meals",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Competitive Teacher Pay",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Living Wage",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Price Gouging Protections",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Affordable Housing",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Restore Abortion Rights",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Autism Services",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Disability Services",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Foster Care Oversight",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Tribal Water Sovereignty",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Marriage Equality",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "Expand House Seats",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
      {
        label: "LGBTQ Rights",
        url: "https://nondoc.com/2026/05/27/cheat-sheet-5-oklahoma-democrats-compete-in-u-s-senate-primary/",
      },
    ],
  },
  "JIM PRIEST": {
    supports: [
      {
        label: "Lower Grocery Costs",
        url: "https://jimpriest.com/",
      },
      {
        label: "Expand Childcare",
        url: "https://jimpriest.com/",
      },
      {
        label: "Workforce Housing",
        url: "https://jimpriest.com/",
      },
      {
        label: "Protect Seniors",
        url: "https://jimpriest.com/",
      },
      {
        label: "Better-Paying Jobs",
        url: "https://jimpriest.com/",
      },
      {
        label: "Rural Hospitals",
        url: "https://jimpriest.com/",
      },
      {
        label: "Mental Health Care",
        url: "https://jimpriest.com/",
      },
      {
        label: "Addiction Care",
        url: "https://jimpriest.com/",
      },
      {
        label: "Fund Public Schools",
        url: "https://jimpriest.com/",
      },
      {
        label: "Raise Teacher Pay",
        url: "https://jimpriest.com/",
      },
      {
        label: "Rural Broadband",
        url: "https://jimpriest.com/",
      },
      {
        label: "Ban Stock Trading",
        url: "https://jimpriest.com/",
      },
      {
        label: "Police Accountability",
        url: "https://jimpriest.com/",
      },
      {
        label: "National Service Programs",
        url: "https://jimpriest.com/",
      },
      {
        label: "End Reckless Tariffs",
        url: "https://jimpriest.com/",
      },
      {
        label: "Restore Congress Authority",
        url: "https://jimpriest.com/",
      },
      {
        label: "Rebuild Alliances",
        url: "https://jimpriest.com/",
      },
    ],
  },
  "NICK HANKINS": {
    supports: [
      {
        label: "Government Accountability",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "America First Policy",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Single-Subject Bills",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Line-Item Veto",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Congressional Transparency",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Term Limits",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Mass Deportation",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "End Birthright Citizenship",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Pause Immigration",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Abolish ATF",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Second Amendment Rights",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
    ],
    against: [
      {
        label: "Ukraine Aid",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "NATO Membership",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "UN Membership",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "WHO Membership",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
    ],
  },
  "GARY TY ENGLAND": {
    supports: [
      {
        label: "Limited Government",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Citizen-Only Elections",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Free Market Healthcare",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Strong Military",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "State-Based Education",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Homeschooling Support",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Secure Border",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
    ],
  },
  "KEVIN HERN": {
    supports: [
      {
        label: "Trump Agenda",
        url: "https://hernforsenate.com/",
      },
      {
        label: "Big Beautiful Bill",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "529 Education Accounts",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Domestic Manufacturing",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Balanced Budget Amendment",
        url: "https://hernforsenate.com/",
      },
      {
        label: "Term Limits",
        url: "https://hernforsenate.com/",
      },
      {
        label: "SAVE America Act",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Pro-Life",
        url: "https://hernforsenate.com/",
      },
      {
        label: "Born-Alive Protection",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Women's Sports Protection",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "CCP Influence Ban",
        url: "https://nondoc.com/2026/05/26/cheat-sheet-5-gop-candidates-seek-oklahoma-u-s-senate-seat/",
      },
      {
        label: "Border Security",
        url: "https://hernforsenate.com/",
      },
      {
        label: "Support Veterans",
        url: "https://hernforsenate.com/",
      },
      {
        label: "Second Amendment",
        url: "https://hernforsenate.com/",
      },
    ],
  },
  "SEAN BUCKNER": {
    supports: [
      {
        label: "Seal the Border",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Stop Fentanyl",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Housing Affordability",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Lower Taxes (Homeowners)",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Ban Investment Homes",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Energy Dominance",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Domestic Refining",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Manufacturing Revival",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Tribal Health Compact",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Fund Indian Health",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Tribal Sovereign Wealth",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Second Amendment",
        url: "https://auditthesenate.com/",
      },
      {
        label: "No PAC Money",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Audit the Senate",
        url: "https://auditthesenate.com/",
      },
      {
        label: "Oklahoma First",
        url: "https://auditthesenate.com/",
      },
    ],
  },
  "BRIAN RAGAIN": {
    supports: [
      {
        label: "Government Accountability",
        url: "https://ragainforsenate.com/",
      },
      {
        label: "Patient-First Healthcare",
        url: "https://ragainforsenate.com/",
      },
      {
        label: "Veterans Mental Health",
        url: "https://ragainforsenate.com/",
      },
      {
        label: "Mental Health Access",
        url: "https://ragainforsenate.com/",
      },
      {
        label: "Veterans Care",
        url: "https://ragainforsenate.com/",
      },
      {
        label: "Oklahoma Energy",
        url: "https://ragainforsenate.com/",
      },
      {
        label: "No PAC Money",
        url: "https://ragainforsenate.com/",
      },
    ],
  },
  "ERIK TERWEY": {
    supports: [
      {
        label: "Better-Paying Jobs",
        url: "https://www.terweyforcongress.com/",
      },
      {
        label: "Expand Healthcare Access",
        url: "https://www.terweyforcongress.com/",
      },
      {
        label: "Increase Education",
        url: "https://www.terweyforcongress.com/",
      },
      {
        label: "Aging with Dignity",
        url: "https://www.terweyforcongress.com/",
      },
      {
        label: "End Forever Wars",
        url: "https://www.terweyforcongress.com/",
      },
      {
        label: "No Corporate PACs",
        url: "https://www.terweyforcongress.com/",
      },
    ],
  },
  "BRANDON WADE": {
    supports: [
      {
        label: "Modernize Immigration",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Protect Abortion Rights",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Fund Public Schools",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Strengthen Social Security",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Strengthen Medicare",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Affordable Healthcare",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Workers' Rights",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Union Rights",
        url: "https://brandon4congress.com/",
      },
      {
        label: "LGBTQ Rights",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Minority Rights",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Support Veterans",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Tribal Sovereignty",
        url: "https://brandon4congress.com/",
      },
      {
        label: "Richard Star Act",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
    ],
    against: [
      {
        label: "Government Shutdowns",
        url: "https://brandon4congress.com/",
      },
      {
        label: "School Vouchers",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
    ],
  },
  "JOSH BRECHEEN": {
    supports: [
      {
        label: "Fiscal Conservatism",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Limited Federal Government",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Trump Agenda",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Term Limits",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Secure Border",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Decriminalize Cockfighting",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Parental Responsibility",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Budget Cuts",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Pro-Life",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Second Amendment",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Fund National Defense",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
    ],
    against: [
      {
        label: "Federal Education Involvement",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
    ],
  },
  "WILL WEBB": {
    supports: [
      {
        label: "Parental Rights",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Family Law Reform",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Veterans Mental Health",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "VA Overhaul",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Religious Liberty",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Medical Freedom",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "School Choice",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Curriculum Transparency",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Support Farmers",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Rural America",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Secure Border",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "End Catch-and-Release",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Streamline Citizenship",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "Social Security Reform",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
      {
        label: "No PAC Money",
        url: "https://willwebbforok.wixsite.com/willwebbforok-1",
      },
    ],
  },
  "SUZIE BYRD": {
    supports: [
      {
        label: "Universal Healthcare",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
      {
        label: "Affordable Housing",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
      {
        label: "Immigration Reform",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
      {
        label: "Education Reform",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
      {
        label: "Bipartisanship",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
    ],
  },
  "JULES ROBERSON": {
    supports: [
      {
        label: "Universal Healthcare",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Rural Hospitals",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Abolish Private Insurance",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Pro-Food Pro-Farmer",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Abolish ICE",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Mass Amnesty",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Tribal Sovereignty",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "No Iran War",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Repeal War Powers",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Oppose Big Bill",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Pro-Union",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Pro-Palestine",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Marriage Equality",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Transgender Rights",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Reproductive Rights",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Protect Democracy",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Tax System Reform",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Green Energy",
        url: "https://www.oklahomafight.com/",
      },
    ],
    against: [
      {
        label: "Big Beautiful Bill",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "Wars",
        url: "https://www.oklahomafight.com/",
      },
      {
        label: "ICE",
        url: "https://www.oklahomafight.com/",
      },
    ],
  },
  "FRANK D. LUCAS": {
    supports: [
      {
        label: "Rural America",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Agriculture Policy",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Deregulation",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Free Trade",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Strong National Defense",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Skilled Immigration",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Agricultural Worker Visas",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Secure Border",
        url: "https://frankdlucas.com/",
      },
      {
        label: "Second Amendment",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Pro-Life",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Hyde Amendment",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "SAVE America Act",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Women's Sports Protection",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Farm Bill Reform",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Fort Reno Protection",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
    ],
  },
  "WADE BURLESON": {
    supports: [
      {
        label: "Term Limits",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "No Congressional Paycheck",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "CHART Act",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Individual Liberty",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
    ],
  },
  "TREY MARTIN": {
    supports: [
      {
        label: "Protect Social Security",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Protect Medicare",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Protect Medicaid",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Medicare for All",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Raise Minimum Wage",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Support Unions",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Fund Public Schools",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Targeted Immigration Enforcement",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Border Technology",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Streamline Legal Immigration",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Tribal Sovereignty",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Workers' Rights",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
    ],
    against: [
      {
        label: "Broad ICE Sweeps",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "School Vouchers",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Trump Tariffs",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
    ],
  },
  "JENA NELSON": {
    supports: [
      {
        label: "Protect Social Security",
        url: "https://jenanelson.com/",
      },
      {
        label: "Protect Medicare",
        url: "https://jenanelson.com/",
      },
      {
        label: "Protect Medicaid",
        url: "https://jenanelson.com/",
      },
      {
        label: "Lower Drug Prices",
        url: "https://jenanelson.com/",
      },
      {
        label: "Medicare Negotiation",
        url: "https://jenanelson.com/",
      },
      {
        label: "Smart Border Enforcement",
        url: "https://jenanelson.com/",
      },
      {
        label: "Fix Asylum System",
        url: "https://jenanelson.com/",
      },
      {
        label: "Expand Legal Pathways",
        url: "https://jenanelson.com/",
      },
      {
        label: "Veteran Healthcare",
        url: "https://jenanelson.com/",
      },
      {
        label: "Cap Insulin Costs",
        url: "https://jenanelson.com/",
      },
      {
        label: "Expand SNAP",
        url: "https://jenanelson.com/",
      },
      {
        label: "Free School Meals",
        url: "https://jenanelson.com/",
      },
      {
        label: "Expand WIC",
        url: "https://jenanelson.com/",
      },
      {
        label: "Housing Relief",
        url: "https://jenanelson.com/",
      },
      {
        label: "Ban Junk Fees",
        url: "https://jenanelson.com/",
      },
      {
        label: "First-Time Homebuyer Credit",
        url: "https://jenanelson.com/",
      },
      {
        label: "Raise Minimum Wage",
        url: "https://jenanelson.com/",
      },
      {
        label: "Expand Child Credit",
        url: "https://jenanelson.com/",
      },
      {
        label: "End Standardized Testing",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Invest in Teachers",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Anti-Price Gouging",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
      {
        label: "Tribal Sovereignty",
        url: "https://nondoc.com/2026/06/04/cd-5-democratic-primary-trey-martin-jena-nelson-fight-for-right-to-face-bice/",
      },
    ],
    against: [
      {
        label: "Big Billionaire Bill",
        url: "https://jenanelson.com/",
      },
    ],
  },
  "JEFF PIXLEY": {
    supports: [
      {
        label: "Restore Constitutional Balance",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
      {
        label: "Empower Working Families",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
      {
        label: "Defend National Security",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
      {
        label: "Congressional War Powers",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
    ],
    against: [
      {
        label: "ICE Actions",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-democrats-go-head-to-head-in-2nd-3rd-4th-congressional-district-primaries/",
      },
    ],
  },
  "MITCHELL JACOB": {
    supports: [
      {
        label: "Quality Education",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Healthcare Access",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Cruelty-Free Immigration",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Fiscal Responsibility",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Criminal Justice Reform",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Abolish Private Prisons",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Living Wage",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Public Education",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Rural Investment",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Medical Autonomy",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Pro-Choice",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Tribal Sovereignty",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "HOPE Act",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Release Epstein Files",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Single-Subject Bills",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "No PAC Money",
        url: "https://www.mitchelljacob.com/",
      },
    ],
    against: [
      {
        label: "Mass Deportation",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Private Prisons",
        url: "https://www.mitchelljacob.com/",
      },
      {
        label: "Fund Israel Military",
        url: "https://www.mitchelljacob.com/",
      },
    ],
  },
  "MARCIE EVERHART": {
    supports: [
      {
        label: "Paper Ballots",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Voter ID",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Full Audits",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Term Limits",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Single-Subject Bills",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Single-Citizenship Congress",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Judicial Reform",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "No Nationwide Injunctions",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "One-Page Bills",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Omnibus Ban",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "No NGO Funding",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Protect Social Security",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Citizens Spending Panel",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Restore DOGE",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Abolish Federal Reserve",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "End Foreign Aid",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Deport All Illegals",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "End Tech Spying",
        url: "https://everhartforcongress.com/her-stances/",
      },
    ],
    against: [
      {
        label: "Foreign Aid",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "NGO Funding",
        url: "https://everhartforcongress.com/her-stances/",
      },
      {
        label: "Big Tech Surveillance",
        url: "https://everhartforcongress.com/her-stances/",
      },
    ],
  },
  "TOM COLE": {
    supports: [
      {
        label: "Big Beautiful Bill",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Medicaid Reform",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "SNAP Reform",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Rescissions Package",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Border Security",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "SAVE America Act",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Second Amendment",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Military Pay Raises",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Pro-Life",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Truth Commission",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Trump Agenda",
        url: "https://tomcoleforcongress.com/",
      },
    ],
    against: [
      {
        label: "Planned Parenthood Funding",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
      {
        label: "Iran Nuclear Deal",
        url: "https://nondoc.com/2026/06/01/cheat-sheet-brecheen-lucas-cole-try-to-defend-cd-2-cd-3-cd-4-seats-in-okgop-primary/",
      },
    ],
  },
  "TODD WOODS": {
    supports: [
      {
        label: "Working People First",
        url: "https://woods4congress.com/",
      },
      {
        label: "Job Growth",
        url: "https://woods4congress.com/",
      },
      {
        label: "Simplify Taxes",
        url: "https://woods4congress.com/",
      },
      {
        label: "Limit Regulations",
        url: "https://woods4congress.com/",
      },
      {
        label: "Support Farmers",
        url: "https://woods4congress.com/",
      },
      {
        label: "Support Ranchers",
        url: "https://woods4congress.com/",
      },
      {
        label: "Stop Reckless Spending",
        url: "https://woods4congress.com/",
      },
      {
        label: "Small Business Support",
        url: "https://woods4congress.com/",
      },
      {
        label: "Oklahoma Energy",
        url: "https://woods4congress.com/",
      },
      {
        label: "Agriculture Jobs",
        url: "https://woods4congress.com/",
      },
      {
        label: "Aviation Jobs",
        url: "https://woods4congress.com/",
      },
      {
        label: "Energy Jobs",
        url: "https://woods4congress.com/",
      },
      {
        label: "Term Limits",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
    ],
  },
  "NANCY DYSON": {
    supports: [
      {
        label: "Term Limits",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Town Halls",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Trump Agenda",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
    ],
  },
  "PAUL ROYSE": {
    supports: [
      {
        label: "Strengthen Social Security",
        url: "https://paulroyse.com",
      },
      {
        label: "Strengthen Medicare",
        url: "https://paulroyse.com",
      },
      {
        label: "Pro-Life",
        url: "https://paulroyse.com",
      },
      {
        label: "Religious Liberty",
        url: "https://paulroyse.com",
      },
      {
        label: "Term Limits",
        url: "https://paulroyse.com",
      },
      {
        label: "Eight-Year Limit",
        url: "https://paulroyse.com",
      },
      {
        label: "Veterans Support",
        url: "https://paulroyse.com",
      },
      {
        label: "National Debt Reduction",
        url: "https://paulroyse.com",
      },
    ],
    against: [
      {
        label: "FISA Surveillance",
        url: "https://paulroyse.com",
      },
    ],
  },
  "COURTNEY GILL": {
    supports: [
      {
        label: "Lower Living Costs",
        url: "https://okgill.com/",
      },
      {
        label: "Rule of Law",
        url: "https://okgill.com/",
      },
      {
        label: "AI Regulation",
        url: "https://okgill.com/",
      },
      {
        label: "Balance Budget",
        url: "https://okgill.com/",
      },
      {
        label: "Term Limits",
        url: "https://okgill.com/",
      },
      {
        label: "Affordable Healthcare",
        url: "https://okgill.com/",
      },
    ],
  },
  "JACKSON LAHMEYER": {
    supports: [
      {
        label: "Secure Border",
        url: "https://www.jacksonlahmeyer.com/",
      },
      {
        label: "Religious Liberty",
        url: "https://www.jacksonlahmeyer.com/",
      },
      {
        label: "First Amendment",
        url: "https://www.jacksonlahmeyer.com/",
      },
      {
        label: "Fight Inflation",
        url: "https://www.jacksonlahmeyer.com/",
      },
      {
        label: "America First",
        url: "https://www.jacksonlahmeyer.com/",
      },
      {
        label: "Trump Agenda",
        url: "https://www.jacksonlahmeyer.com/",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Energy Dominance",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Made in USA",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Strengthen Military",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Veterans Support",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Safeguard Elections",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Second Amendment",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Ban China Farmland",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Support Farmers",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Support Ranchers",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
    ],
  },
  "MARK TEDFORD": {
    supports: [
      {
        label: "Lower Living Costs",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Reduce Inflationary Spending",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Cut Red Tape",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Lower Energy Costs",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Fiscal Discipline",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Immigration Enforcement",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Deport Criminal Aliens",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Put Americans First",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Cut Waste Fraud",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Protect Social Security",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "American Energy Production",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Grow Manufacturing",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Skilled Trades",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Pro-Life",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Second Amendment",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Parental Rights",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Religious Liberty",
        url: "https://www.tedfordforcongress.com/",
      },
      {
        label: "Veterans Support",
        url: "https://www.tedfordforcongress.com/",
      },
    ],
  },
  "KIM DAVID": {
    supports: [
      {
        label: "Secure Border",
        url: "https://votekimdavid.com",
      },
      {
        label: "Election Integrity",
        url: "https://votekimdavid.com",
      },
      {
        label: "Voter ID",
        url: "https://votekimdavid.com",
      },
      {
        label: "SAVE Act",
        url: "https://votekimdavid.com",
      },
      {
        label: "All-of-Above Energy",
        url: "https://votekimdavid.com",
      },
      {
        label: "Energy Independence",
        url: "https://votekimdavid.com",
      },
      {
        label: "Lower Living Costs",
        url: "https://votekimdavid.com",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://votekimdavid.com",
      },
      {
        label: "Fiscal Responsibility",
        url: "https://votekimdavid.com",
      },
      {
        label: "Second Amendment",
        url: "https://votekimdavid.com",
      },
      {
        label: "Religious Liberty",
        url: "https://votekimdavid.com",
      },
      {
        label: "Constitutional Carry",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Pro-Life",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Ban CRT",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Trump Agenda",
        url: "https://votekimdavid.com",
      },
    ],
  },
  "JED COCHRAN": {
    supports: [
      {
        label: "Term Limits",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Ban Insider Trading",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "America First Policies",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Economic Growth",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Strong Communities",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Oklahoma Future",
        url: "https://jedcochran.com",
      },
    ],
  },
  "KELLY B. WALSH": {
    supports: [
      {
        label: "End Foreign Conflicts",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Release Epstein Files",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Cannabis User Protections",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Constitutional Protections",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
      {
        label: "Principles Over Politics",
        url: "https://nondoc.com/2026/05/25/cheat-sheet-hern-decision-draws-9-to-oklahomas-1st-congressional-district-gop-primary/",
      },
    ],
  },
  "NATHAN BUTTERFIELD": {
    supports: [
      {
        label: "Fund the Police",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Secure Border",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Second Amendment",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Pro-Life",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Small Government",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Support Small Business",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Energy Independence",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Parental Rights",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Made in America",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Fix Education",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Bring Jobs Home",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Local Control",
        url: "https://nathanbutterfield.com",
      },
    ],
    against: [
      {
        label: "Defund the Police",
        url: "https://nathanbutterfield.com",
      },
      {
        label: "Green New Deal",
        url: "https://nathanbutterfield.com",
      },
    ],
  },
  "TOM WOODS": {
    supports: [
      {
        label: "Agriculture Support",
        url: "https://oksenate.gov/senator-press-releases/tom-woods",
      },
      {
        label: "Lower Taxes (Seniors)",
        url: "https://oksenate.gov/press-releases/senate-advances-bill-provide-property-tax-credit-oklahoma-seniors",
      },
      {
        label: "Medicaid Restrictions",
        url: "https://oksenate.gov/press-releases/senator-woods-addresses-misinformation-regarding-vote-bill-prohibiting-illegals",
      },
      {
        label: "Rural Healthcare",
        url: "https://oksenate.gov/press-releases/senate-advances-woods-bill-help-public-ems-agencies-secure-federal-funding",
      },
      {
        label: "Property Rights",
        url: "https://oksenate.gov/press-releases/sen-tom-woods-commends-oklahomans-who-opposed-proposed-federal-electric-transmission",
      },
    ],
  },
  "DAVID HARDIN": {
    supports: [
      {
        label: "Agriculture Support",
        url: "https://okhouse.gov/representatives/david-hardin",
      },
      {
        label: "Second Amendment",
        url: "https://okhouse.gov/representatives/david-hardin",
      },
      {
        label: "Law Enforcement Support",
        url: "https://okhouse.gov/representatives/david-hardin",
      },
    ],
  },
  "JACK STEWART": {
    supports: [
      {
        label: "Child Advocacy",
        url: "https://oksenate.gov/press-releases/stewart-honored-2024-champion-children-oklahoma-institute-child-advocacy",
      },
      {
        label: "Conservative Values",
        url: "https://oksenate.gov/press-releases/stewart-honored-cpacs-award-conservative-achievement",
      },
    ],
  },
  "MIKE KELLEY": {
    supports: [
      {
        label: "Immigration Enforcement",
        url: "https://okhouse.gov/representatives/mike-kelley",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://okhouse.gov/representatives/mike-kelley",
      },
      {
        label: "Second Amendment",
        url: "https://okhouse.gov/representatives/mike-kelley",
      },
      {
        label: "Education Funding",
        url: "https://okhouse.gov/representatives/mike-kelley",
      },
      {
        label: "Pro-Life",
        url: "https://okhouse.gov/representatives/mike-kelley",
      },
      {
        label: "Property Rights",
        url: "https://okhouse.gov/representatives/mike-kelley",
      },
      {
        label: "Law Enforcement Support",
        url: "https://okhouse.gov/representatives/mike-kelley",
      },
    ],
  },
  "CHRIS SNEED": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://okhouse.gov/representatives/chris-sneed",
      },
      {
        label: "Utility Rate Protection",
        url: "https://okhouse.gov/representatives/chris-sneed",
      },
      {
        label: "Law Enforcement Support",
        url: "https://okhouse.gov/representatives/chris-sneed",
      },
    ],
  },
  "JONATHAN WILK": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://okhouse.gov/representatives/jonathan-wilk",
      },
      {
        label: "Pro-Life",
        url: "https://okhouse.gov/representatives/jonathan-wilk",
      },
      {
        label: "Energy Development",
        url: "https://okhouse.gov/representatives/jonathan-wilk",
      },
      {
        label: "Law Enforcement Support",
        url: "https://okhouse.gov/representatives/jonathan-wilk",
      },
    ],
  },
  "DANNY STERLING": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://okhouse.gov/representatives/danny-sterling",
      },
      {
        label: "Agriculture Support",
        url: "https://okhouse.gov/representatives/danny-sterling",
      },
      {
        label: "Law Enforcement Support",
        url: "https://okhouse.gov/representatives/danny-sterling",
      },
    ],
  },
  "JOHN GEORGE": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://okhouse.gov/representatives/john-george",
      },
      {
        label: "Law Enforcement Support",
        url: "https://okhouse.gov/representatives/john-george",
      },
    ],
  },
  "CINDY ROE": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://okhouse.gov/representatives/cynthia-roe",
      },
      {
        label: "Rural Healthcare",
        url: "https://okhouse.gov/representatives/cynthia-roe",
      },
      {
        label: "Agriculture Support",
        url: "https://okhouse.gov/representatives/cynthia-roe",
      },
      {
        label: "Energy Development",
        url: "https://okhouse.gov/representatives/cynthia-roe",
      },
    ],
  },
  "ANNIE MENZ": {
    supports: [
      {
        label: "Energy Development",
        url: "https://okhouse.gov/representatives/annie-menz",
      },
      {
        label: "Natural Resources Protection",
        url: "https://www.normantranscript.com/news/menz-shepard-look-to-win-democratic-ticket-for-oklahoma-house-of-representative-district-45/article_ce763e88-1f17-4ff5-8503-9795faaad488.html",
      },
    ],
  },
  "JASON BLAIR": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://okhouse.gov/representatives/jason-blair",
      },
      {
        label: "Second Amendment",
        url: "https://okhouse.gov/representatives/jason-blair",
      },
      {
        label: "Energy Development",
        url: "https://okhouse.gov/representatives/jason-blair",
      },
      {
        label: "Law Enforcement Support",
        url: "https://okhouse.gov/representatives/jason-blair",
      },
    ],
  },
  "MAX WOLFLEY": {
    supports: [
      {
        label: "Lower Taxes (Property)",
        url: "https://okhouse.gov/representatives/max-wolfley",
      },
    ],
  },
  "DAVID SMITH": {
    supports: [
      {
        label: "Lower Taxes (Property)",
        url: "https://okhouse.gov/representatives/david-smith",
      },
    ],
  },
  "KENNY SMITH": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Girls Sports Protection",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Agriculture Support",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Property Rights",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Religious Freedom",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Election Integrity",
        url: "https://www.kennysmithforsenate.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.kennysmithforsenate.com",
      },
    ],
  },
  "MICHAEL A. BRITTINGHAM": {
    supports: [
      {
        label: "Law Enforcement Support",
        url: "https://www.brittinghamforok.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://www.brittinghamforok.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.brittinghamforok.com",
      },
    ],
  },
  "ANTHONY DEVORE": {
    supports: [
      {
        label: "Education Funding",
        url: "https://anthonydevoreforok.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://anthonydevoreforok.com",
      },
      {
        label: "Agriculture Support",
        url: "https://anthonydevoreforok.com",
      },
      {
        label: "Government Efficiency",
        url: "https://anthonydevoreforok.com",
      },
      {
        label: "Small Business Support",
        url: "https://anthonydevoreforok.com",
      },
      {
        label: "Energy Development",
        url: "https://anthonydevoreforok.com",
      },
      {
        label: "Second Amendment",
        url: "https://anthonydevoreforok.com",
      },
      {
        label: "Tougher Sentencing",
        url: "https://anthonydevoreforok.com",
      },
      {
        label: "Religious Freedom",
        url: "https://anthonydevoreforok.com",
      },
    ],
  },
  "DEREK PORTER": {
    supports: [
      {
        label: "Education Funding",
        url: "https://votederekporter.com",
      },
      {
        label: "Pro-Life",
        url: "https://votederekporter.com",
      },
      {
        label: "Second Amendment",
        url: "https://votederekporter.com",
      },
      {
        label: "Government Efficiency",
        url: "https://votederekporter.com",
      },
      {
        label: "Small Business Support",
        url: "https://votederekporter.com",
      },
    ],
  },
  "RICK VERNON": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://vernonforok.com",
      },
      {
        label: "Agriculture Support",
        url: "https://vernonforok.com",
      },
      {
        label: "Property Rights",
        url: "https://vernonforok.com",
      },
      {
        label: "Natural Resources Protection",
        url: "https://vernonforok.com",
      },
    ],
  },
  "RICK KOCH": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://rickkoch.com",
      },
      {
        label: "Pro-Life",
        url: "https://rickkoch.com",
      },
      {
        label: "Second Amendment",
        url: "https://rickkoch.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://rickkoch.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://rickkoch.com",
      },
      {
        label: "Election Integrity",
        url: "https://rickkoch.com",
      },
      {
        label: "Small Business Support",
        url: "https://rickkoch.com",
      },
      {
        label: "Conservative Values",
        url: "https://rickkoch.com",
      },
    ],
  },
  "BRADY BUTLER": {
    supports: [
      {
        label: "Agriculture Support",
        url: "https://www.bradybutler26.com",
      },
      {
        label: "Energy Development",
        url: "https://www.bradybutler26.com",
      },
    ],
  },
  "CARLA BLUE WEAVER": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://carlaforhouse.com",
      },
      {
        label: "Education Funding",
        url: "https://carlaforhouse.com",
      },
      {
        label: "Pro-Life",
        url: "https://carlaforhouse.com",
      },
      {
        label: "Second Amendment",
        url: "https://carlaforhouse.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://carlaforhouse.com",
      },
      {
        label: "Small Business Support",
        url: "https://carlaforhouse.com",
      },
      {
        label: "Conservative Values",
        url: "https://carlaforhouse.com",
      },
    ],
  },
  "SAM MITCHELL": {
    supports: [
      {
        label: "Agriculture Support",
        url: "https://mitchellforok.com",
      },
      {
        label: "Small Business Support",
        url: "https://mitchellforok.com",
      },
      {
        label: "Conservative Values",
        url: "https://mitchellforok.com",
      },
    ],
  },
  "TYLER HERRING": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://tylerherring.com",
      },
      {
        label: "Parental Rights",
        url: "https://tylerherring.com",
      },
      {
        label: "Pro-Life",
        url: "https://tylerherring.com",
      },
      {
        label: "Second Amendment",
        url: "https://tylerherring.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://tylerherring.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://tylerherring.com",
      },
      {
        label: "Religious Freedom",
        url: "https://tylerherring.com",
      },
      {
        label: "Election Integrity",
        url: "https://tylerherring.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://tylerherring.com",
      },
    ],
  },
  "KEVIN SIMONS": {
    supports: [
      {
        label: "Law Enforcement Support",
        url: "https://ks4ok.com",
      },
    ],
  },
  "KEVIN WARNEMUENDE": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.kevinwforok.com",
      },
      {
        label: "Property Rights",
        url: "https://www.kevinwforok.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://www.kevinwforok.com",
      },
    ],
  },
  "TOBY THOMPSON": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.tobyforthehouse.com",
      },
      {
        label: "Education Funding",
        url: "https://www.tobyforthehouse.com",
      },
      {
        label: "Parental Rights",
        url: "https://www.tobyforthehouse.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.tobyforthehouse.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.tobyforthehouse.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://www.tobyforthehouse.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.tobyforthehouse.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.tobyforthehouse.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.tobyforthehouse.com",
      },
    ],
  },
  "KEVAN GENTRY": {
    supports: [
      {
        label: "Education Funding",
        url: "https://kevangentryforhouse47.com",
      },
      {
        label: "Government Efficiency",
        url: "https://kevangentryforhouse47.com",
      },
      {
        label: "Small Business Support",
        url: "https://kevangentryforhouse47.com",
      },
      {
        label: "Conservative Values",
        url: "https://kevangentryforhouse47.com",
      },
    ],
  },
  "ROY TIMMONS": {
    supports: [
      {
        label: "Lower Taxes (Property)",
        url: "https://roytimmons.com",
      },
      {
        label: "Parental Rights",
        url: "https://roytimmons.com",
      },
      {
        label: "Pro-Life",
        url: "https://roytimmons.com",
      },
      {
        label: "Second Amendment",
        url: "https://roytimmons.com",
      },
      {
        label: "Property Rights",
        url: "https://roytimmons.com",
      },
      {
        label: "Utility Rate Protection",
        url: "https://roytimmons.com",
      },
    ],
  },
  "ABBY THOMPSON": {
    supports: [
      {
        label: "Lower Taxes (Property)",
        url: "http://abbyforsenate.com",
      },
      {
        label: "Lower Taxes (Seniors)",
        url: "http://abbyforsenate.com",
      },
      {
        label: "Rural Healthcare",
        url: "http://abbyforsenate.com",
      },
      {
        label: "Term Limits",
        url: "http://abbyforsenate.com",
      },
    ],
  },
  "STEVE KING": {
    supports: [
      {
        label: "Education Funding",
        url: "https://www.votesteveking.com",
      },
      {
        label: "Veterans Support",
        url: "https://www.votesteveking.com",
      },
      {
        label: "Economic Growth",
        url: "https://www.votesteveking.com",
      },
    ],
  },
  "RANDY CORNELIUS": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.corneliusforsenate.com",
      },
      {
        label: "Lower Taxes (Property)",
        url: "https://www.corneliusforsenate.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.corneliusforsenate.com",
      },
      {
        label: "Agriculture Support",
        url: "https://www.corneliusforsenate.com",
      },
      {
        label: "Property Rights",
        url: "https://www.corneliusforsenate.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.corneliusforsenate.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://www.corneliusforsenate.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.corneliusforsenate.com",
      },
    ],
  },
  "TAMMI DIDLOT": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://tammididlot.com",
      },
      {
        label: "School Choice",
        url: "https://tammididlot.com",
      },
      {
        label: "Education Funding",
        url: "https://tammididlot.com",
      },
      {
        label: "Parental Rights",
        url: "https://tammididlot.com",
      },
      {
        label: "Pro-Life",
        url: "https://tammididlot.com",
      },
      {
        label: "Agriculture Support",
        url: "https://tammididlot.com",
      },
      {
        label: "Property Rights",
        url: "https://tammididlot.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://tammididlot.com",
      },
      {
        label: "Religious Freedom",
        url: "https://tammididlot.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://tammididlot.com",
      },
      {
        label: "Small Business Support",
        url: "https://tammididlot.com",
      },
    ],
  },
  "JON PAINTER": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "http://drjohnpainter.com",
      },
      {
        label: "Education Funding",
        url: "http://drjohnpainter.com",
      },
      {
        label: "Parental Rights",
        url: "http://drjohnpainter.com",
      },
      {
        label: "Pro-Life",
        url: "http://drjohnpainter.com",
      },
      {
        label: "Second Amendment",
        url: "http://drjohnpainter.com",
      },
      {
        label: "Government Efficiency",
        url: "http://drjohnpainter.com",
      },
      {
        label: "Religious Freedom",
        url: "http://drjohnpainter.com",
      },
      {
        label: "Small Business Support",
        url: "http://drjohnpainter.com",
      },
      {
        label: "Conservative Values",
        url: "http://drjohnpainter.com",
      },
    ],
  },
  "HEATHER BOSS": {
    supports: [
      {
        label: "Parental Rights",
        url: "https://www.voteboss.com",
      },
      {
        label: "Religious Freedom",
        url: "https://www.voteboss.com",
      },
    ],
  },
  "BRYAN HUSTED": {
    supports: [
      {
        label: "Law Enforcement Support",
        url: "https://www.bryanhusted.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://www.bryanhusted.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.bryanhusted.com",
      },
    ],
  },
  "ROBERT KEYES": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.keyesforstatesenate.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.keyesforstatesenate.com",
      },
      {
        label: "Government Efficiency",
        url: "https://www.keyesforstatesenate.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.keyesforstatesenate.com",
      },
    ],
  },
  "ROBERTA LEWIS": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.lewisfor27.com",
      },
      {
        label: "Lower Taxes (Property)",
        url: "https://www.lewisfor27.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.lewisfor27.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.lewisfor27.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.lewisfor27.com",
      },
    ],
  },
  "SHONEY QUALLS": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.voteshoneyqualls.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.voteshoneyqualls.com",
      },
      {
        label: "Agriculture Support",
        url: "https://www.voteshoneyqualls.com",
      },
      {
        label: "Property Rights",
        url: "https://www.voteshoneyqualls.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.voteshoneyqualls.com",
      },
    ],
  },
  "JENNI WHITE": {
    supports: [
      {
        label: "School Choice",
        url: "https://www.jenniwhiteforhd36.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.jenniwhiteforhd36.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.jenniwhiteforhd36.com",
      },
      {
        label: "Agriculture Support",
        url: "https://www.jenniwhiteforhd36.com",
      },
      {
        label: "Property Rights",
        url: "https://www.jenniwhiteforhd36.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.jenniwhiteforhd36.com",
      },
      {
        label: "Government Efficiency",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-36-republican/",
      },
    ],
  },
  "KAITY KEITH": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://kaitykeithforoklahoma.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://kaitykeithforoklahoma.com",
      },
      {
        label: "Tougher Sentencing",
        url: "https://kaitykeithforoklahoma.com",
      },
      {
        label: "Religious Freedom",
        url: "https://kaitykeithforoklahoma.com",
      },
    ],
  },
  "GRANT WORLEY": {
    supports: [
      {
        label: "Conservative Values",
        url: "https://worley4ok.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://worley4ok.com",
      },
    ],
  },
  "HEATH KUFAHL": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://heathkufahl.com",
      },
      {
        label: "Second Amendment",
        url: "https://heathkufahl.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://heathkufahl.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://heathkufahl.com",
      },
      {
        label: "Religious Freedom",
        url: "https://heathkufahl.com",
      },
      {
        label: "Conservative Values",
        url: "https://heathkufahl.com",
      },
    ],
  },
  "DEBBIE SHULTZ": {
    supports: [
      {
        label: "Religious Freedom",
        url: "https://shultzfor91.com",
      },
      {
        label: "Conservative Values",
        url: "https://shultzfor91.com",
      },
    ],
  },
  "TERESA STERLING": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://teresasterling.com",
      },
      {
        label: "Girls Sports Protection",
        url: "https://teresasterling.com",
      },
      {
        label: "Second Amendment",
        url: "https://teresasterling.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://teresasterling.com",
      },
      {
        label: "Tougher Sentencing",
        url: "https://teresasterling.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://teresasterling.com",
      },
      {
        label: "Parental Rights",
        url: "https://teresasterling.com",
      },
      {
        label: "Nursing Home Reform",
        url: "https://teresasterling.com",
      },
    ],
  },
  "BRENT RINEHART": {
    supports: [
      {
        label: "Lower Taxes (Property)",
        url: "https://www.rinehartforhouse.com",
      },
      {
        label: "Parental Rights",
        url: "https://www.rinehartforhouse.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.rinehartforhouse.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.rinehartforhouse.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://www.rinehartforhouse.com",
      },
      {
        label: "Energy Development",
        url: "https://www.rinehartforhouse.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.rinehartforhouse.com",
      },
      {
        label: "Government Efficiency",
        url: "https://www.rinehartforhouse.com",
      },
      {
        label: "Girls Sports Protection",
        url: "https://www.rinehartforhouse.com",
      },
    ],
  },
  "PAMELA GORDON": {
    supports: [
      {
        label: "School Choice",
        url: "https://gordonforhouse.com",
      },
      {
        label: "Education Funding",
        url: "https://gordonforhouse.com",
      },
      {
        label: "Agriculture Support",
        url: "https://gordonforhouse.com",
      },
      {
        label: "Property Rights",
        url: "https://gordonforhouse.com",
      },
      {
        label: "Small Business Support",
        url: "https://gordonforhouse.com",
      },
    ],
  },
  "ROBERTO SEDA": {
    supports: [
      {
        label: "Government Efficiency",
        url: "https://www.sedaforok.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.sedaforok.com",
      },
    ],
  },
  "JAMES R. GILMARTIN": {
    supports: [
      {
        label: "Law Enforcement Support",
        url: "https://www.ardmoreite.com/district-attorney-qa-james-gilmartin/",
      },
      {
        label: "Child Protection",
        url: "https://www.ardmoreite.com/district-attorney-qa-james-gilmartin/",
      },
    ],
  },
  "MELISSA HANDKE": {
    supports: [
      {
        label: "Law Enforcement Support",
        url: "https://www.ardmoreite.com/district-attorney-qa-melissa-handke/",
      },
      {
        label: "Child Protection",
        url: "https://www.ardmoreite.com/district-attorney-qa-melissa-handke/",
      },
    ],
  },
  "MISTY SHANNON": {
    supports: [
      {
        label: "Education Funding",
        url: "https://oklahomavoice.com/voter-guides/contests/state-senator-district-18-republican/",
      },
      {
        label: "Child Advocacy",
        url: "https://oklahomavoice.com/voter-guides/contests/state-senator-district-18-republican/",
      },
    ],
  },
  "JEAN HAUSHEER": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://www.drjeanhausheerforsenate.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.drjeanhausheerforsenate.com",
      },
      {
        label: "Lower Income Tax",
        url: "https://www.drjeanhausheerforsenate.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://www.drjeanhausheerforsenate.com",
      },
      {
        label: "School Choice",
        url: "https://www.drjeanhausheerforsenate.com",
      },
      {
        label: "Parental Rights",
        url: "https://www.drjeanhausheerforsenate.com",
      },
      {
        label: "Secure Borders",
        url: "https://www.drjeanhausheerforsenate.com",
      },
      {
        label: "Support Trump",
        url: "https://www.drjeanhausheerforsenate.com",
      },
    ],
  },
  "DUSTY DEEVERS": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
      {
        label: "Support Small Business",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
      {
        label: "Fort Sill Advocacy",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
      {
        label: "Public Safety",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
      {
        label: "Christian Values",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
    ],
    against: [
      {
        label: "Corporate Welfare",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
    ],
  },
  "CURTIS W. ERWIN": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
      {
        label: "Economic Development",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
      {
        label: "Fort Sill Advocacy",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
      {
        label: "Public Safety",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
      {
        label: "Small Business",
        url: "https://www.kswo.com/2026/06/03/oklahoma-senate-district-32-candidates-share-priorities-ahead-republican-primary/",
      },
    ],
  },
  "AMBER DAWN ELLIS": {
    supports: [
      {
        label: "Protect Children",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-6-republican/",
      },
      {
        label: "Lower Taxes (Homeowners)",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-6-republican/",
      },
    ],
    against: [
      {
        label: "Woke Ideology",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-6-republican/",
      },
      {
        label: "Abolish DHS",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-6-republican/",
      },
      {
        label: "Biosolid Waste",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-6-republican/",
      },
    ],
  },
  "ELI RICHARD": {
    supports: [
      {
        label: "Education Reform",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-6-republican/",
      },
      {
        label: "Balanced Budget",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-6-republican/",
      },
      {
        label: "Lower Property Tax",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-6-republican/",
      },
    ],
  },
  "TODD GOLLIHARE": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://gollihare.com",
      },
      {
        label: "Anti-Illegal Immigration",
        url: "https://gollihare.com",
      },
      {
        label: "Religious Liberty",
        url: "https://gollihare.com",
      },
      {
        label: "Education Accountability",
        url: "https://gollihare.com",
      },
      {
        label: "Insurance Reform",
        url: "https://gollihare.com",
      },
      {
        label: "Pro-Life",
        url: "https://gollihare.com",
      },
      {
        label: "Second Amendment",
        url: "https://gollihare.com",
      },
    ],
  },
  "WM CRAIG STUMP": {
    supports: [
      {
        label: "Traditional Values",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Government Transparency",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Criminalize Abortion",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "State Rights",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Tax Reform",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Second Amendment",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Lower Property Tax",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Medical Conscience",
        url: "https://www.craigstump2026.com/issues",
      },
    ],
    against: [
      {
        label: "Government Surveillance",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Data Center Breaks",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Wind/Solar Subsidies",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Federal Overreach",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Red Flag Laws",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Mask/Vaccine Mandates",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Open Primaries",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "Gender Indoctrination",
        url: "https://www.craigstump2026.com/issues",
      },
      {
        label: "DEI",
        url: "https://www.craigstump2026.com/issues",
      },
    ],
  },
  "CHRIS BANNING": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://www.banningforoklahoma.com/issues",
      },
      {
        label: "Second Amendment",
        url: "https://www.banningforoklahoma.com/issues",
      },
      {
        label: "Anti-CRT",
        url: "https://www.banningforoklahoma.com/issues",
      },
      {
        label: "Economic Growth",
        url: "https://www.banningforoklahoma.com/issues",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.banningforoklahoma.com/issues",
      },
    ],
    against: [
      {
        label: "Critical Race Theory",
        url: "https://www.banningforoklahoma.com/issues",
      },
      {
        label: "Biden Mandates",
        url: "https://www.banningforoklahoma.com/issues",
      },
      {
        label: "Tax Increases",
        url: "https://www.banningforoklahoma.com/issues",
      },
    ],
  },
  "CASEY FIXICO SUTTERFIELD": {
    supports: [
      {
        label: "Oklahoma Families",
        url: "https://sites.google.com/view/caseyfixicosutterfield/home/issues",
      },
      {
        label: "Personal Freedom",
        url: "https://sites.google.com/view/caseyfixicosutterfield/home/issues",
      },
      {
        label: "Government Accountability",
        url: "https://sites.google.com/view/caseyfixicosutterfield/home/issues",
      },
      {
        label: "Small Business",
        url: "https://sites.google.com/view/caseyfixicosutterfield/home/issues",
      },
      {
        label: "Property Rights",
        url: "https://sites.google.com/view/caseyfixicosutterfield/home/issues",
      },
      {
        label: "Natural Resources",
        url: "https://sites.google.com/view/caseyfixicosutterfield/home/issues",
      },
      {
        label: "Agriculture",
        url: "https://sites.google.com/view/caseyfixicosutterfield/home/issues",
      },
    ],
  },
  "BRIAN JACKSON": {
    supports: [
      {
        label: "Child Care",
        url: "https://www.brianjacksontakesaction.com",
      },
      {
        label: "Public Education",
        url: "https://www.brianjacksontakesaction.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.brianjacksontakesaction.com",
      },
      {
        label: "Economic Opportunity",
        url: "https://www.brianjacksontakesaction.com",
      },
      {
        label: "Local Leadership",
        url: "https://www.brianjacksontakesaction.com",
      },
    ],
    against: [
      {
        label: "School Vouchers",
        url: "https://www.brianjacksontakesaction.com",
      },
    ],
  },
  "KYLE HILBERT": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://kylehilbert.com",
      },
      {
        label: "School Choice",
        url: "https://kylehilbert.com",
      },
      {
        label: "Protect Girls Sports",
        url: "https://kylehilbert.com",
      },
      {
        label: "Anti-Illegal Immigration",
        url: "https://kylehilbert.com",
      },
      {
        label: "Law Enforcement",
        url: "https://kylehilbert.com",
      },
      {
        label: "Second Amendment",
        url: "https://kylehilbert.com",
      },
      {
        label: "Rural Oklahoma",
        url: "https://kylehilbert.com",
      },
    ],
    against: [
      {
        label: "Sanctuary Cities",
        url: "https://kylehilbert.com",
      },
      {
        label: "Radical Agendas",
        url: "https://kylehilbert.com",
      },
    ],
  },
  "KEVIN WRIGHT": {
    supports: [
      {
        label: "Lower Income Tax",
        url: "https://www.wrightforstaterep.com",
      },
      {
        label: "End Taxpayer Lobbying",
        url: "https://www.wrightforstaterep.com",
      },
      {
        label: "Reduce Regulations",
        url: "https://www.wrightforstaterep.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.wrightforstaterep.com",
      },
      {
        label: "Property Rights",
        url: "https://www.wrightforstaterep.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.wrightforstaterep.com",
      },
      {
        label: "Law Enforcement",
        url: "https://www.wrightforstaterep.com",
      },
      {
        label: "Education Reform",
        url: "https://www.wrightforstaterep.com",
      },
    ],
  },
  "DILLON TRAVIS": {
    supports: [
      {
        label: "Rural Roads",
        url: "https://votedillontravis.com",
      },
      {
        label: "Protect Schools",
        url: "https://votedillontravis.com",
      },
      {
        label: "Drug Crisis Enforcement",
        url: "https://votedillontravis.com",
      },
      {
        label: "Agriculture",
        url: "https://votedillontravis.com",
      },
      {
        label: "Second Amendment",
        url: "https://votedillontravis.com",
      },
      {
        label: "Families First",
        url: "https://votedillontravis.com",
      },
      {
        label: "Trump Agenda",
        url: "https://votedillontravis.com",
      },
    ],
  },
  "DANIELLE DETERDING": {
    supports: [
      {
        label: "Rural Schools",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Rural Healthcare",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Transportation Funding",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
    ],
  },
  "MICHAEL NORMAN": {
    supports: [
      {
        label: "Lower Property Tax",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Lower Insurance Costs",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Anti-Corporate Welfare",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Protect Families",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Limit Government",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
    ],
    against: [
      {
        label: "Lobbyist Money",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
    ],
  },
  "SUZANNE CALLIHAN": {
    supports: [
      {
        label: "Government Accountability",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Reduce Regulations",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Education Outcomes",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
    ],
  },
  "MADISON BOLAY": {
    supports: [
      {
        label: "Education",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Rural Communities",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Property Rights",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
      {
        label: "Agriculture",
        url: "https://oklahomavoice.com/voter-guides/contests/state-representative-district-38-republican/",
      },
    ],
  },
  "KINSLEY JORDAN": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Pro-Life",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Second Amendment",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Pro-Business Growth",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Education",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Transportation Funding",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Public Safety",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Welfare Reform",
        url: "https://jordanforoklahoma.com",
      },
      {
        label: "Law Enforcement",
        url: "https://jordanforoklahoma.com",
      },
    ],
  },
  "TORRY TURNBOW": {
    supports: [
      {
        label: "Secure Borders",
        url: "https://torryforhouse.com",
      },
      {
        label: "Parental Rights",
        url: "https://torryforhouse.com",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://torryforhouse.com",
      },
      {
        label: "Medical Freedom",
        url: "https://torryforhouse.com",
      },
      {
        label: "Second Amendment",
        url: "https://torryforhouse.com",
      },
      {
        label: "Pro-Life",
        url: "https://torryforhouse.com",
      },
      {
        label: "Trump Agenda",
        url: "https://torryforhouse.com",
      },
    ],
  },
  "JADAN A. TERRAZAS": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://jadanterrazas.com",
      },
      {
        label: "Lower Income Tax",
        url: "https://jadanterrazas.com",
      },
      {
        label: "Property Tax Reform",
        url: "https://jadanterrazas.com",
      },
      {
        label: "Second Amendment",
        url: "https://jadanterrazas.com",
      },
      {
        label: "Education Reform",
        url: "https://jadanterrazas.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://jadanterrazas.com",
      },
    ],
    against: [
      {
        label: "Lobbyist Money",
        url: "https://jadanterrazas.com",
      },
    ],
  },
  "BILL COLEMAN": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://colemanforoklahoma.com",
      },
      {
        label: "Pro-Life",
        url: "https://colemanforoklahoma.com",
      },
      {
        label: "Second Amendment",
        url: "https://colemanforoklahoma.com",
      },
      {
        label: "Protect Girls Sports",
        url: "https://colemanforoklahoma.com",
      },
      {
        label: "Anti-Illegal Immigration",
        url: "https://colemanforoklahoma.com",
      },
      {
        label: "Rural Schools",
        url: "https://colemanforoklahoma.com",
      },
      {
        label: "Rural Infrastructure",
        url: "https://colemanforoklahoma.com",
      },
      {
        label: "Law Enforcement",
        url: "https://colemanforoklahoma.com",
      },
    ],
    against: [
      {
        label: "Radical Gender Ideology",
        url: "https://colemanforoklahoma.com",
      },
    ],
  },
  "SPENCER GRACE": {
    supports: [
      {
        label: "Law Enforcement",
        url: "https://votespencergrace.com",
      },
      {
        label: "Second Amendment",
        url: "https://votespencergrace.com",
      },
      {
        label: "Pro-Life",
        url: "https://votespencergrace.com",
      },
      {
        label: "Special Needs Families",
        url: "https://votespencergrace.com",
      },
      {
        label: "Pro-Business Growth",
        url: "https://votespencergrace.com",
      },
      {
        label: "Parental Rights",
        url: "https://votespencergrace.com",
      },
      {
        label: "Property Rights",
        url: "https://votespencergrace.com",
      },
    ],
  },
  "ADAM PANTER": {
    supports: [
      {
        label: "Law Enforcement",
        url: "https://districtattorneyadampanter.com",
      },
      {
        label: "Tough on Crime",
        url: "https://districtattorneyadampanter.com",
      },
      {
        label: "Victims' Rights",
        url: "https://districtattorneyadampanter.com",
      },
    ],
  },
  "ROBERT TRIMBLE": {
    supports: [
      {
        label: "Clean Government",
        url: "https://r.jina.ai/http://search.yahoo.com/search?p=Robert+Trimble+Oklahoma+State+Senate+District+28+campaign+website",
      },
    ],
    against: [
      {
        label: "PAC Money",
        url: "https://r.jina.ai/http://search.yahoo.com/search?p=Robert+Trimble+Oklahoma+State+Senate+District+28+campaign+website",
      },
      {
        label: "Lobbyist Money",
        url: "https://r.jina.ai/http://search.yahoo.com/search?p=Robert+Trimble+Oklahoma+State+Senate+District+28+campaign+website",
      },
    ],
  },
  "JACK VAUGHAN": {
    supports: [
      {
        label: "Landowner Rights",
        url: "https://vaughanforoklahoma.com",
      },
      {
        label: "Public Education",
        url: "https://vaughanforoklahoma.com",
      },
      {
        label: "Lower Taxes (Families)",
        url: "https://vaughanforoklahoma.com",
      },
      {
        label: "Servant Leadership",
        url: "https://vaughanforoklahoma.com",
      },
    ],
  },
  "TOM GANN": {
    supports: [
      {
        label: "Clean Government",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Property Tax Relief",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Property Rights",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Anti-Corporate Welfare",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Agriculture",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Rural Public Safety",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Transparency",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Local Control",
        url: "https://www.gannforhouse.com",
      },
    ],
    against: [
      {
        label: "Lobbyist Money",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Corporate Welfare",
        url: "https://www.gannforhouse.com",
      },
      {
        label: "Utility Rate Hikes",
        url: "https://www.gannforhouse.com",
      },
    ],
  },
  "TODD RICE": {
    supports: [
      {
        label: "Fiscal Responsibility",
        url: "https://r.jina.ai/http://search.yahoo.com/search?p=Todd+Rice+Oklahoma+House+District+8+campaign+website",
      },
      {
        label: "Pro-Business Growth",
        url: "https://r.jina.ai/http://search.yahoo.com/search?p=Todd+Rice+Oklahoma+House+District+8+campaign+website",
      },
      {
        label: "Strong Schools",
        url: "https://r.jina.ai/http://search.yahoo.com/search?p=Todd+Rice+Oklahoma+House+District+8+campaign+website",
      },
      {
        label: "Local Control",
        url: "https://r.jina.ai/http://search.yahoo.com/search?p=Todd+Rice+Oklahoma+House+District+8+campaign+website",
      },
    ],
  },
  "BRENDA STANLEY": {
    supports: [
      {
        label: "Veterans",
        url: "http://senatorbrendastanley.com",
      },
      {
        label: "Lower Taxes (Veterans)",
        url: "http://senatorbrendastanley.com",
      },
      {
        label: "Lower Income Tax",
        url: "http://senatorbrendastanley.com",
      },
      {
        label: "Lower Grocery Tax",
        url: "http://senatorbrendastanley.com",
      },
      {
        label: "Healthcare Workforce",
        url: "http://senatorbrendastanley.com",
      },
      {
        label: "Education",
        url: "http://senatorbrendastanley.com",
      },
      {
        label: "Breast Cancer Screening",
        url: "http://senatorbrendastanley.com",
      },
      {
        label: "Pro-Life",
        url: "http://senatorbrendastanley.com",
      },
      {
        label: "Energy Independence",
        url: "http://senatorbrendastanley.com",
      },
    ],
  },
  "MALANA BRACHT": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://www.centraloklahomaweeklies.com/2026/06/12/stanley-bracht-face-off-in-district-42-gop-primary/",
      },
      {
        label: "Law and Order",
        url: "https://www.centraloklahomaweeklies.com/2026/06/12/stanley-bracht-face-off-in-district-42-gop-primary/",
      },
      {
        label: "Lower Taxes (Seniors)",
        url: "https://www.centraloklahomaweeklies.com/2026/06/12/stanley-bracht-face-off-in-district-42-gop-primary/",
      },
      {
        label: "Lower Property Tax",
        url: "https://www.centraloklahomaweeklies.com/2026/06/12/stanley-bracht-face-off-in-district-42-gop-primary/",
      },
      {
        label: "Support Trump",
        url: "https://www.centraloklahomaweeklies.com/2026/06/12/stanley-bracht-face-off-in-district-42-gop-primary/",
      },
      {
        label: "Road Repairs",
        url: "https://www.centraloklahomaweeklies.com/2026/06/12/stanley-bracht-face-off-in-district-42-gop-primary/",
      },
    ],
    against: [
      {
        label: "Undocumented Licenses",
        url: "https://www.centraloklahomaweeklies.com/2026/06/12/stanley-bracht-face-off-in-district-42-gop-primary/",
      },
    ],
  },
  "MEGAN HORNBEEK ALLEN": {
    supports: [
      {
        label: "Fund Public Schools",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
      {
        label: "Lower Drug Costs",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
      {
        label: "Healthcare Access",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
      {
        label: "Economic Innovation",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
    ],
  },
  "JASON LANKFORD": {
    supports: [
      {
        label: "Quality Education",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
      {
        label: "Hands-On Training",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
      {
        label: "Lower Living Costs",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
      {
        label: "Disease Prevention",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
      {
        label: "Walkable Infrastructure",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-hd-81-democratic-candidates-prioritize-education-in-open-race/",
      },
    ],
  },
  "RUSTY RAINS": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Cut Red Tape",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Business-Friendly Policies",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Educated Workforce",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Eliminate Waste",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
    ],
  },
  "AMBER CANARY": {
    supports: [
      {
        label: "Support Teachers",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Increase Education Funding",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Literacy Focus",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Jail Reform",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Job Creation",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Veterans Support",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Limited Government",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Pro-Life",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Second Amendment",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Parental Choice",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
    ],
  },
  "TROY TALLEY": {
    supports: [
      {
        label: "Veterans Support",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Law Enforcement Support",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Lower Taxes (Everyone)",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Welfare Restrictions",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Small Business Support",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
      {
        label: "Economic Opportunity",
        url: "https://nondoc.com/2026/05/23/cheat-sheet-republicans-running-for-hd-81-open-seat-talk-taxes-education/",
      },
    ],
  },
  "ESTEFANIA GRUENSTEIN": {
    supports: [
      {
        label: "Fair Wages",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Paid Family Leave",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Affordable Healthcare",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Reproductive Rights",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Affordable Childcare",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Workforce Training",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Raise Teacher Pay",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Reduce Class Sizes",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Fund Classrooms",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Oppose ICE Detention",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
    ],
  },
  "CHELSEY BRANHAM": {
    supports: [
      {
        label: "Support Survivors",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Youth Opportunities",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Restore School Funding",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Diversify Economy",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Entrepreneur Tax Incentives",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Affordable Higher Ed",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Job Training Programs",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Expand Healthcare Access",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
    ],
  },
  "BRAXTON BANKS": {
    supports: [
      {
        label: "LGBTQ Rights",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Trade Worker Investment",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Safety Standards",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Lower Drug Costs",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
      {
        label: "Fund Public Schools",
        url: "https://nondoc.com/2026/06/10/cheat-sheet-3-democrats-run-to-succeed-cyndi-munson-in-hd-85/",
      },
    ],
  },
  "SAM WARGIN GRIMALDO": {
    supports: [
      {
        label: "Medicaid Expansion",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Protect Medicaid Expansion",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Cap Insurance Rates",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Fund Public Schools",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Teacher Pipelines",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Public Legislative Input",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
    ],
  },
  "VICKI RUTH WERNEKE": {
    supports: [
      {
        label: "Healthcare Access",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Retain Doctors",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Medical Autonomy",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Equal Rights Amendment",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Fund Public Schools",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Reduce Class Sizes",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Raise Teacher Pay",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
      {
        label: "Renter Protections",
        url: "https://nondoc.com/2026/06/12/attorneys-sam-wargin-grimaldo-vicki-werneke-seek-hd-92-seat-in-double-ballot-duel/",
      },
    ],
  },
  "ASHTYN SMITH": {
    supports: [
      {
        label: "Early Literacy",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Thoughtful Tax Relief",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Education Options",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
    ],
  },
  "PHILLIP MASSAD": {
    supports: [
      {
        label: "Mental Health Care",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Addiction Treatment",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Housing Support",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Reentry Support",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Targeted Deportation",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Strong Borders",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
    ],
    against: [
      {
        label: "Oppose Tax Elimination",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Oppose School Vouchers",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Oppose Detention Centers",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
    ],
  },
  "AUSTIN REAMS": {
    supports: [
      {
        label: "Tax Code Reform",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Require Corporate Taxes",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Better Teacher Pay",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Insurance Lawsuit Rights",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
      {
        label: "Fight Gerrymandering",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-3-democrats-hoping-to-flip-house-district-96-seat/",
      },
    ],
  },
  "JOHN BACHMAN": {
    supports: [
      {
        label: "Reduce Government Spending",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "Refuse Lobbyist Money",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "Fiscal Responsibility",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "Accountable Leadership",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
    ],
  },
  "PRESTON STINSON": {
    supports: [
      {
        label: "Lower Taxes (Groceries)",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "Lower Taxes (Business)",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "Immigration Enforcement",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "School Choice",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "Reading Proficiency",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "Affordable Insulin",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
      {
        label: "Domestic Drug Manufacturing",
        url: "https://nondoc.com/2026/06/09/cheat-sheet-hd-96-rep-preston-stinson-challenged-by-john-bachman-mailers-mock-both/",
      },
    ],
  },
  "CARLOS M. ROBINSON": {
    supports: [
      {
        label: "Workforce Development",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Education Partnerships",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Affordable Healthcare",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Healthcare Workforce",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
    ],
  },
  "HERSCHEL L. BROWN": {
    supports: [
      {
        label: "Healthcare Access",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Protect Medicare",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Protect Medicaid",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Mental Health Care",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Fund Public Schools",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Raise Teacher Pay",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
    ],
  },
  "DERRICK SIER": {
    supports: [
      {
        label: "Mental Health Services",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Substance Abuse Services",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Affordable Healthcare",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Raise Teacher Pay",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Reduce Class Sizes",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Afterschool Programming",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Student Mental Health",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
    ],
  },
  "STEVE DAVIS": {
    supports: [
      {
        label: "Childcare Emergency Fund",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Raise Minimum Wage",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Quality Education",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
      {
        label: "Affordable Healthcare",
        url: "https://nondoc.com/2026/06/02/cheat-sheet-hd-99-democratic-candidates-race-to-replace-ajay-pittman/",
      },
    ],
  },
  "RON STEWART": {
    supports: [
      {
        label: "Law Enforcement Support",
        url: "https://www.stewartforok.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.stewartforok.com",
      },
    ],
  },
  "ED ROSS": {
    supports: [
      {
        label: "Economic Growth",
        url: "https://www.rossfordistrict73.com/priorities",
      },
      {
        label: "Affordable Healthcare",
        url: "https://www.rossfordistrict73.com/priorities",
      },
      {
        label: "Quality Education",
        url: "https://www.rossfordistrict73.com/priorities",
      },
      {
        label: "Accountable Justice",
        url: "https://www.rossfordistrict73.com/priorities",
      },
    ],
  },
  "ALLY SEIFRIED": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://allyseifried.com",
      },
      {
        label: "School Choice",
        url: "https://allyseifried.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://allyseifried.com",
      },
      {
        label: "Religious Freedom",
        url: "https://allyseifried.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://allyseifried.com",
      },
      {
        label: "Small Business Support",
        url: "https://allyseifried.com",
      },
      {
        label: "Conservative Values",
        url: "https://allyseifried.com",
      },
    ],
  },
  "PAYTON PEPIN": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.pepinforsenate.com",
      },
      {
        label: "Lower Taxes (Property)",
        url: "https://www.pepinforsenate.com",
      },
      {
        label: "Child Advocacy",
        url: "https://www.pepinforsenate.com",
      },
    ],
  },
  "DEBBIE LONG": {
    supports: [
      {
        label: "School Choice",
        url: "https://www.longforstatehouse.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.longforstatehouse.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.longforstatehouse.com",
      },
      {
        label: "Government Efficiency",
        url: "https://www.longforstatehouse.com",
      },
      {
        label: "Religious Freedom",
        url: "https://www.longforstatehouse.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.longforstatehouse.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.longforstatehouse.com",
      },
      {
        label: "Disaster Relief Fund",
        url: "https://nondoc.com/2026/06/06/cheat-sheet-3-republicans-compete-for-open-seat-in-northeast-oklahomas-hd-9/",
      },
      {
        label: "Parental Choice",
        url: "https://nondoc.com/2026/06/06/cheat-sheet-3-republicans-compete-for-open-seat-in-northeast-oklahomas-hd-9/",
      },
      {
        label: "Public Schools",
        url: "https://nondoc.com/2026/06/06/cheat-sheet-3-republicans-compete-for-open-seat-in-northeast-oklahomas-hd-9/",
      },
      {
        label: "Rural Funding",
        url: "https://nondoc.com/2026/06/06/cheat-sheet-3-republicans-compete-for-open-seat-in-northeast-oklahomas-hd-9/",
      },
    ],
  },
  "CRYSTAL CAMPBELL": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "School Choice",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "Parental Rights",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "Pro-Life",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "Religious Freedom",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "Small Business Support",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "Natural Resources Protection",
        url: "https://votecrystalcampbell.com",
      },
      {
        label: "Roads Infrastructure",
        url: "https://nondoc.com/2026/06/06/cheat-sheet-3-republicans-compete-for-open-seat-in-northeast-oklahomas-hd-9/",
      },
    ],
  },
  "SCOTTY STOKES": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://scottystokes.com",
      },
      {
        label: "Parental Rights",
        url: "https://scottystokes.com",
      },
      {
        label: "Agriculture Support",
        url: "https://scottystokes.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://scottystokes.com",
      },
      {
        label: "Religious Freedom",
        url: "https://scottystokes.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://scottystokes.com",
      },
      {
        label: "Small Business Support",
        url: "https://scottystokes.com",
      },
      {
        label: "Conservative Values",
        url: "https://scottystokes.com",
      },
      {
        label: "Disaster Preparedness",
        url: "https://nondoc.com/2026/06/06/cheat-sheet-3-republicans-compete-for-open-seat-in-northeast-oklahomas-hd-9/",
      },
      {
        label: "Tougher Sentencing",
        url: "https://nondoc.com/2026/06/06/cheat-sheet-3-republicans-compete-for-open-seat-in-northeast-oklahomas-hd-9/",
      },
      {
        label: "Public Schools",
        url: "https://nondoc.com/2026/06/06/cheat-sheet-3-republicans-compete-for-open-seat-in-northeast-oklahomas-hd-9/",
      },
    ],
  },
  "KEVIN W. NORWOOD": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.norwoodforok.com",
      },
      {
        label: "School Choice",
        url: "https://www.norwoodforok.com",
      },
      {
        label: "Education Funding",
        url: "https://www.norwoodforok.com",
      },
    ],
  },
  "SHEILA VANCUREN": {
    supports: [
      {
        label: "Pro-Life",
        url: "https://votevancuren.com",
      },
      {
        label: "Second Amendment",
        url: "https://votevancuren.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://votevancuren.com",
      },
      {
        label: "Child Advocacy",
        url: "https://votevancuren.com",
      },
    ],
  },
  "STEVE KUNZWEILER": {
    supports: [
      {
        label: "Second Amendment",
        url: "https://www.stevek4da.com/",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.stevek4da.com/",
      },
      {
        label: "Tougher Sentencing",
        url: "https://www.stevek4da.com/",
      },
      {
        label: "Child Advocacy",
        url: "https://www.stevek4da.com/",
      },
    ],
  },
  "COLLEEN MCCARTY": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.mccartyforda.com/",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.mccartyforda.com/",
      },
      {
        label: "Tougher Sentencing",
        url: "https://www.mccartyforda.com/",
      },
      {
        label: "Government Efficiency",
        url: "https://www.mccartyforda.com/",
      },
      {
        label: "Rural Healthcare",
        url: "https://www.mccartyforda.com/",
      },
      {
        label: "Child Advocacy",
        url: "https://www.mccartyforda.com/",
      },
    ],
  },
  "DANA PRIETO": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://danaprietoforoksenate.com",
      },
      {
        label: "Religious Freedom",
        url: "https://danaprietoforoksenate.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://danaprietoforoksenate.com",
      },
      {
        label: "Conservative Values",
        url: "https://danaprietoforoksenate.com",
      },
      {
        label: "Child Advocacy",
        url: "https://danaprietoforoksenate.com",
      },
    ],
  },
  "KENT TAYLOR": {
    supports: [
      {
        label: "Education Funding",
        url: "http://kenttaylorok.com",
      },
      {
        label: "Pro-Life",
        url: "http://kenttaylorok.com",
      },
      {
        label: "Second Amendment",
        url: "http://kenttaylorok.com",
      },
      {
        label: "Law Enforcement Support",
        url: "http://kenttaylorok.com",
      },
      {
        label: "Rural Healthcare",
        url: "http://kenttaylorok.com",
      },
    ],
  },
  "BRENT DRISKILL": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://brentdriskill.com",
      },
      {
        label: "Parental Rights",
        url: "https://brentdriskill.com",
      },
      {
        label: "Pro-Life",
        url: "https://brentdriskill.com",
      },
      {
        label: "Second Amendment",
        url: "https://brentdriskill.com",
      },
      {
        label: "Energy Development",
        url: "https://brentdriskill.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://brentdriskill.com",
      },
      {
        label: "Government Efficiency",
        url: "https://brentdriskill.com",
      },
      {
        label: "Religious Freedom",
        url: "https://brentdriskill.com",
      },
      {
        label: "Small Business Support",
        url: "https://brentdriskill.com",
      },
      {
        label: "Child Advocacy",
        url: "https://brentdriskill.com",
      },
    ],
  },
  "JOHN HASTE": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Girls Sports Protection",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Pro-Life",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Second Amendment",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Agriculture Support",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Religious Freedom",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Small Business Support",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Conservative Values",
        url: "https://hasteforsenate.com",
      },
      {
        label: "Water Infrastructure",
        url: "https://nondoc.com/2026/06/14/senate-district-36-incumbent-john-haste-faces-phillip-weiland-republican-primary/",
      },
      {
        label: "Reading Proficiency",
        url: "https://nondoc.com/2026/06/14/senate-district-36-incumbent-john-haste-faces-phillip-weiland-republican-primary/",
      },
    ],
  },
  "JOHN B. KANE": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://johnkaneforok.com",
      },
      {
        label: "Girls Sports Protection",
        url: "https://johnkaneforok.com",
      },
      {
        label: "Second Amendment",
        url: "https://johnkaneforok.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://johnkaneforok.com",
      },
      {
        label: "Agriculture Support",
        url: "https://johnkaneforok.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://johnkaneforok.com",
      },
    ],
  },
  "WENDI STEARMAN": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://stearmanforhouse.vote",
      },
      {
        label: "Parental Rights",
        url: "https://stearmanforhouse.vote",
      },
      {
        label: "Pro-Life",
        url: "https://stearmanforhouse.vote",
      },
      {
        label: "Second Amendment",
        url: "https://stearmanforhouse.vote",
      },
      {
        label: "Immigration Enforcement",
        url: "https://stearmanforhouse.vote",
      },
      {
        label: "Property Rights",
        url: "https://stearmanforhouse.vote",
      },
    ],
  },
  "SHEILA DILLS": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.votesheiladills.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.votesheiladills.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://www.votesheiladills.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.votesheiladills.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.votesheiladills.com",
      },
      {
        label: "Early Literacy",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Charter School Reform",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Strengthen Economy",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
    ],
  },
  "ANGELA STROHM": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Agriculture Support",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Property Rights",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Religious Freedom",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Natural Resources Protection",
        url: "https://www.angelastrohm.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.angelastrohm.com",
      },
    ],
  },
  "CODY NICHOLS": {
    supports: [
      {
        label: "Religious Liberty",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Pro-Life",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Parental Choice",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Teacher Compensation",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Academic Screeners",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Second Amendment",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Limit Government",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
    ],
    against: [
      {
        label: "Wasteful Education Spending",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
    ],
  },
  "CARRIE DEWEESE": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Education Funding",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Energy Development",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Law Enforcement Support",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Religious Freedom",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Rural Healthcare",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.carrieforthehouse.com",
      },
      {
        label: "Protect Seniors",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Safer Neighborhoods",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Stronger Schools",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
      {
        label: "Responsible Government",
        url: "https://nondoc.com/2026/06/03/cheat-sheet-familiar-faces-newcomers-seek-open-hd-69-republican-primary/",
      },
    ],
  },
  "KRISTINA GABRIEL": {
    supports: [
      {
        label: "Rural Healthcare",
        url: "https://kristinaforoklahoma.com",
      },
    ],
  },
  "GABE WOOLLEY": {
    supports: [
      {
        label: "Lower Taxes (Everyone)",
        url: "https://www.woolleyforstatehouse.com",
      },
      {
        label: "Pro-Life",
        url: "https://www.woolleyforstatehouse.com",
      },
      {
        label: "Second Amendment",
        url: "https://www.woolleyforstatehouse.com",
      },
      {
        label: "Immigration Enforcement",
        url: "https://www.woolleyforstatehouse.com",
      },
      {
        label: "Religious Freedom",
        url: "https://www.woolleyforstatehouse.com",
      },
      {
        label: "Small Business Support",
        url: "https://www.woolleyforstatehouse.com",
      },
      {
        label: "Conservative Values",
        url: "https://www.woolleyforstatehouse.com",
      },
    ],
  },
  "PHILLIP PEAK": {
    supports: [
      {
        label: "Public Service",
        url: "https://peakforjudge.com/meet-the-candidate",
      },
      {
        label: "Accessible Courtroom",
        url: "https://peakforjudge.com/meet-the-candidate",
      },
      {
        label: "Judicial Fairness",
        url: "https://peakforjudge.com/meet-the-candidate",
      },
      {
        label: "Court Efficiency",
        url: "https://peakforjudge.com/meet-the-candidate",
      },
      {
        label: "Open Door Policy",
        url: "https://peakforjudge.com/meet-the-candidate",
      },
      {
        label: "Prosecution Experience",
        url: "https://peakforjudge.com/meet-the-candidate",
      },
      {
        label: "Prosecutor Awards",
        url: "https://peakforjudge.com/meet-the-candidate",
      },
      {
        label: "Balanced Experience",
        url: "https://peakforjudge.com/meet-the-candidate",
      },
    ],
  },
  "DUSTIN ALLEN": {
    supports: [
      {
        label: "Law As Written",
        url: "https://dustinallenforjudge.com/",
      },
      {
        label: "Public Safety",
        url: "https://dustinallenforjudge.com/",
      },
      {
        label: "Victim Advocacy",
        url: "https://dustinallenforjudge.com/",
      },
      {
        label: "Court Efficiency",
        url: "https://dustinallenforjudge.com/",
      },
      {
        label: "Respectful Courtroom",
        url: "https://dustinallenforjudge.com/",
      },
      {
        label: "Law Enforcement Support",
        url: "https://dustinallenforjudge.com/",
      },
      {
        label: "Prosecution Experience",
        url: "https://dustinallenforjudge.com/",
      },
      {
        label: "Offender Accountability",
        url: "https://dustinallenforjudge.com/",
      },
    ],
  },
}
// ---------------------------------------------------------------------------
// Build structured ballot data in memory so we can detect shared sections.
// ---------------------------------------------------------------------------

type Position = {
  label: string
  url?: string
}

type BuiltCandidate = {
  name: string
  party: string
  website?: string
  endorsements?: { name: string; url?: string }[]
  supports?: Position[]
  against?: Position[]
}

type BuiltRace = {
  id: string
  title: string
  subtitle?: string
  party?: string
  instruction: string
  candidates: BuiltCandidate[]
  debates?: { label: string; url: string }[]
}

type BuiltQuestion = {
  id: string
  title: string
  subtitle?: string
  text: string
  choices: string[]
}

type BuiltSection = {
  id: string
  heading: string
  races?: BuiltRace[]
  questions?: BuiltQuestion[]
}

type BuiltBallot = {
  county: string
  sections: BuiltSection[]
}

function buildCandidate(
  candidate: ParsedCandidate,
  raceParty: string | undefined
): BuiltCandidate {
  const normalized = normalizeName(candidate.name)
  const website = existingCandidateWebsites[normalized]
  const endorsements = existingEndorsements[normalized]
  const positions = existingPositions[normalized]
  const built: BuiltCandidate = {
    name: candidate.name,
    party: raceParty || "NONPARTISAN",
  }
  if (website) built.website = website
  if (endorsements) built.endorsements = endorsements
  if (positions?.supports) built.supports = positions.supports
  if (positions?.against) built.against = positions.against
  return built
}

function buildRace(race: ParsedRace): BuiltRace {
  const id = raceId(race.title, race.subtitle, race.party)
  const researchKey = raceId(
    race.title.replace(/^FOR /, ""),
    race.subtitle,
    race.party
  )
  const research = existingResearch[researchKey]
  const built: BuiltRace = {
    id,
    title: race.title,
    instruction: race.instruction,
    candidates: race.candidates.map((c) => buildCandidate(c, race.party)),
  }
  if (race.subtitle) built.subtitle = race.subtitle
  if (race.party) built.party = race.party
  if (research?.debates) built.debates = research.debates
  return built
}

function buildSection(section: ParsedSection): BuiltSection {
  const sectionId = slugify(section.heading)
  const built: BuiltSection = {
    id: sectionId,
    heading: section.heading,
  }

  const races = section.races.filter((r) => r.candidates.length > 0)
  if (races.length > 0) {
    built.races = races.map(buildRace)
  }

  return built
}

const stateQuestionsSection: BuiltSection = {
  id: "state-questions",
  heading: "STATE QUESTIONS",
  questions: [
    {
      id: "sq-832",
      title: "STATE QUESTION NO. 832",
      subtitle: "INITIATIVE PETITION NO. 446",
      text: "This measure amends the Oklahoma Minimum Wage Act (OMWA) under the Oklahoma Statutes to increase the state minimum wage. Employers must pay employees at least $9 per hour beginning in 2025, increasing $1.50 annually for a final rate of $15 per hour in 2029. Beginning in 2030 and continuing indefinitely, the minimum wage would automatically increase annually based on the increase in the cost of living, if any, as measured by the U.S. Department of Labor's Consumer Price Index for Urban Wage Earners and Clerical Workers; the minimum wage increase would continue with any successor agency or index. Such increase would also not require approval from Congress or the Oklahoma Legislature. This measure eliminates several exemptions in the current OMWA, including the exemptions for employers subject to the federal Fair Labor Standards Act; part-time employees; certain students and individuals under age 18; farm and agricultural workers; domestic service workers; newspaper vendors or carriers; and feedstore employees. Effectively, eliminating these exemptions results in current employees not covered by the OMWA now being entitled to the minimum wage. The measure also repeals title 40, section 197.5. |Federal and state employees will not be covered under the OMWA. Volunteers; employers with ten or fewer employees and grossing $100,000 or less; some employees of carriers engaged in interstate commerce; employees working in a bona fide executive, administrative, or professional capacity; outside salesmen; and reserve deputy sheriffs will remain excluded from the OMWA's coverage. Because counties, municipalities, and school districts are not excluded, a fiscal impact on the State will result, possibly necessitating a revenue increase by new taxes or elimination of existing services. The measure will be effective the January 1 following approval and will not apply retroactively. |Shall the proposal be approved?",
      choices: ["FOR THE PROPOSAL - YES", "AGAINST THE PROPOSAL - NO"],
    },
  ],
}

const builtBallots: Record<string, BuiltBallot> = {}
for (const county of parsed) {
  builtBallots[county.name] = {
    county: county.name,
    sections: [...county.sections.map(buildSection), stateQuestionsSection],
  }
}

// ---------------------------------------------------------------------------
// Find sections that are identical in every county and can be shared.
// ---------------------------------------------------------------------------

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

const sectionOccurrences: Record<string, BuiltSection[]> = {}
for (const ballot of Object.values(builtBallots)) {
  for (const section of ballot.sections) {
    sectionOccurrences[section.id] ??= []
    sectionOccurrences[section.id].push(section)
  }
}

const sharedSections: Record<string, BuiltSection> = {}
for (const [id, sections] of Object.entries(sectionOccurrences)) {
  if (
    sections.length === parsed.length &&
    sections.every((s) => deepEqual(s, sections[0]))
  ) {
    sharedSections[id] = sections[0]
  }
}

function sectionConstName(id: string): string {
  return `${id.replace(/-/g, "_")}Section`
}

// ---------------------------------------------------------------------------
// TypeScript serialization helpers.
// ---------------------------------------------------------------------------

function indent(level: number): string {
  return "  ".repeat(level)
}

function serializeValue(value: unknown, level: number): string {
  if (value === undefined) return "undefined"
  return JSON.stringify(value, null, 2)
    .split("\n")
    .map((line, index) => (index === 0 ? line : indent(level) + line))
    .join("\n")
}

function serializeCandidate(candidate: BuiltCandidate, level: number): string {
  const lines: string[] = []
  lines.push(`${indent(level)}{`)
  lines.push(
    `${indent(level + 1)}name: ${serializeValue(candidate.name, level + 1)},`
  )
  lines.push(
    `${indent(level + 1)}party: ${serializeValue(candidate.party, level + 1)},`
  )
  if (candidate.website) {
    lines.push(
      `${indent(level + 1)}website: ${serializeValue(candidate.website, level + 1)},`
    )
  }
  if (candidate.endorsements) {
    lines.push(`${indent(level + 1)}endorsements: [`)
    for (const e of candidate.endorsements) {
      if (e.url) {
        lines.push(
          `${indent(level + 2)}{ name: ${serializeValue(e.name, level + 2)}, url: ${serializeValue(e.url, level + 2)} },`
        )
      } else {
        lines.push(
          `${indent(level + 2)}{ name: ${serializeValue(e.name, level + 2)} },`
        )
      }
    }
    lines.push(`${indent(level + 1)}],`)
  }
  if (candidate.supports) {
    lines.push(`${indent(level + 1)}supports: [`)
    for (const p of candidate.supports) {
      if (p.url) {
        lines.push(
          `${indent(level + 2)}{ label: ${serializeValue(p.label, level + 2)}, url: ${serializeValue(p.url, level + 2)} },`
        )
      } else {
        lines.push(
          `${indent(level + 2)}{ label: ${serializeValue(p.label, level + 2)} },`
        )
      }
    }
    lines.push(`${indent(level + 1)}],`)
  }
  if (candidate.against) {
    lines.push(`${indent(level + 1)}against: [`)
    for (const p of candidate.against) {
      if (p.url) {
        lines.push(
          `${indent(level + 2)}{ label: ${serializeValue(p.label, level + 2)}, url: ${serializeValue(p.url, level + 2)} },`
        )
      } else {
        lines.push(
          `${indent(level + 2)}{ label: ${serializeValue(p.label, level + 2)} },`
        )
      }
    }
    lines.push(`${indent(level + 1)}],`)
  }
  lines.push(`${indent(level)}},`)
  return lines.join("\n")
}

function serializeRace(race: BuiltRace, level: number): string {
  const lines: string[] = []
  lines.push(`${indent(level)}{`)
  lines.push(`${indent(level + 1)}id: ${serializeValue(race.id, level + 1)},`)
  lines.push(
    `${indent(level + 1)}title: ${serializeValue(race.title, level + 1)},`
  )
  if (race.subtitle) {
    lines.push(
      `${indent(level + 1)}subtitle: ${serializeValue(race.subtitle, level + 1)},`
    )
  }
  if (race.party) {
    lines.push(
      `${indent(level + 1)}party: ${serializeValue(race.party, level + 1)},`
    )
  }
  lines.push(
    `${indent(level + 1)}instruction: ${serializeValue(race.instruction, level + 1)},`
  )
  lines.push(`${indent(level + 1)}candidates: [`)
  for (const candidate of race.candidates) {
    lines.push(serializeCandidate(candidate, level + 2))
  }
  lines.push(`${indent(level + 1)}],`)
  if (race.debates) {
    lines.push(`${indent(level + 1)}debates: [`)
    for (const debate of race.debates) {
      lines.push(
        `${indent(level + 2)}{ label: ${serializeValue(debate.label, level + 2)}, url: ${serializeValue(debate.url, level + 2)} },`
      )
    }
    lines.push(`${indent(level + 1)}],`)
  }
  lines.push(`${indent(level)}},`)
  return lines.join("\n")
}

function serializeQuestion(question: BuiltQuestion, level: number): string {
  const lines: string[] = []
  lines.push(`${indent(level)}{`)
  lines.push(
    `${indent(level + 1)}id: ${serializeValue(question.id, level + 1)},`
  )
  lines.push(
    `${indent(level + 1)}title: ${serializeValue(question.title, level + 1)},`
  )
  if (question.subtitle) {
    lines.push(
      `${indent(level + 1)}subtitle: ${serializeValue(question.subtitle, level + 1)},`
    )
  }
  lines.push(
    `${indent(level + 1)}text: ${serializeValue(question.text, level + 1)},`
  )
  lines.push(
    `${indent(level + 1)}choices: ${serializeValue(question.choices, level + 1)},`
  )
  lines.push(`${indent(level)}},`)
  return lines.join("\n")
}

function serializeSectionBody(section: BuiltSection, level: number): string {
  const lines: string[] = []
  lines.push(`${indent(level)}id: ${serializeValue(section.id, level + 1)},`)
  lines.push(
    `${indent(level)}heading: ${serializeValue(section.heading, level + 1)},`
  )
  if (section.races) {
    lines.push(`${indent(level)}races: [`)
    for (const race of section.races) {
      lines.push(serializeRace(race, level + 1))
    }
    lines.push(`${indent(level)}],`)
  }
  if (section.questions) {
    lines.push(`${indent(level)}questions: [`)
    for (const question of section.questions) {
      lines.push(serializeQuestion(question, level + 1))
    }
    lines.push(`${indent(level)}],`)
  }
  return lines.join("\n")
}

function serializeSharedSection(section: BuiltSection): string {
  const name = sectionConstName(section.id)
  const lines: string[] = []
  lines.push(`const ${name}: BallotSection = {`)
  lines.push(serializeSectionBody(section, 1))
  lines.push(`}`)
  return lines.join("\n")
}

function serializeCountySection(section: BuiltSection, level: number): string {
  const shared = sharedSections[section.id]
  if (shared) {
    return `${indent(level)}${sectionConstName(section.id)},`
  }
  const lines: string[] = []
  lines.push(`${indent(level)}{`)
  lines.push(serializeSectionBody(section, level + 1))
  lines.push(`${indent(level)}},`)
  return lines.join("\n")
}

// ---------------------------------------------------------------------------
// Generate the output file.
// ---------------------------------------------------------------------------

const lines: string[] = []
lines.push(`export type Endorsement = {`)
lines.push(`  name: string`)
lines.push(`  url?: string`)
lines.push(`}`)
lines.push(``)
lines.push(`export type Position = {`)
lines.push(`  label: string`)
lines.push(`  url?: string`)
lines.push(`}`)
lines.push(``)
lines.push(`export type Candidate = {`)
lines.push(`  name: string`)
lines.push(`  party: string`)
lines.push(`  website?: string`)
lines.push(`  endorsements?: Endorsement[]`)
lines.push(`  supports?: Position[]`)
lines.push(`  against?: Position[]`)
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

for (const section of Object.values(sharedSections)) {
  lines.push(serializeSharedSection(section))
  lines.push(``)
}

lines.push(
  `export const jurisdictionBallots: Record<string, JurisdictionBallot> = {`
)
for (const county of parsed) {
  const ballot = builtBallots[county.name]
  lines.push(`  "${county.name}": {`)
  lines.push(`    county: "${county.name}",`)
  lines.push(`    sections: [`)
  for (const section of ballot.sections) {
    lines.push(serializeCountySection(section, 3))
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
console.log(
  `Shared sections: ${Object.keys(sharedSections).join(", ") || "none"}`
)
