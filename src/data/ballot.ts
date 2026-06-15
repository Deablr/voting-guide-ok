export type Endorsement = {
  name: string
  url: string
}

export type Candidate = {
  name: string
  party: string
  website?: string
  endorsements?: Endorsement[]
}

export type Debate = {
  label: string
  url: string
}

export type Race = {
  id: string
  title: string
  subtitle?: string
  instruction: string
  candidates: Candidate[]
  debates?: Debate[]
}

export type StateQuestion = {
  id: string
  title: string
  subtitle?: string
  text: string
  choices: string[]
}

export type BallotSection = {
  id: string
  heading: string
  races?: Race[]
  questions?: StateQuestion[]
}

export type BallotInfo = {
  title: string
  electionType: string
  additionalType?: string
  date: string
  county: string
  precincts: string[]
  party?: string
}

export const ballotInfo: BallotInfo = {
  title: "SAMPLE BALLOT",
  electionType: "PRIMARY ELECTION",
  additionalType: "SPECIAL ELECTION",
  date: "June 16, 2026",
  county: "TULSA COUNTY, OKLAHOMA",
  precincts: ["720136-REG", "720136-REGNP"],
  party: "REPUBLICAN",
}

export const ballotSections: BallotSection[] = [
  {
    id: "state-officers",
    heading: "STATE OFFICERS",
    races: [
      {
        id: "governor",
        title: "FOR GOVERNOR",
        instruction: "Vote for One",
        candidates: [
          {
            name: "MIKE MAZZEI",
            party: "REPUBLICAN",
            website: "https://mikeforok.com/",
            endorsements: [
              {
                name: "Trump Endorsed",
                url: "https://truthsocial.com/@realDonaldTrump/116660095799513934",
              },
            ],
          },
          {
            name: "JAKE A. MERRICK",
            party: "REPUBLICAN",
            website: "https://jakemerrickforgovernor.com/",
          },
          {
            name: "CHARLES MCCALL",
            party: "REPUBLICAN",
            website: "https://mccallforoklahoma.com/",
          },
          {
            name: "LEISA MITCHELL HAYNES",
            party: "REPUBLICAN",
            website: "https://mitchellhaynes.us/",
          },
          { name: "CALUP ANTHONY TAYLOR", party: "REPUBLICAN" },
          { name: "JENNIFER DOMENICO", party: "REPUBLICAN" },
          {
            name: "GENTNER DRUMMOND",
            party: "REPUBLICAN",
            website: "https://drummondok.com/",
          },
          { name: "KENNETH STURGELL", party: "REPUBLICAN" },
          {
            name: "CHIP KEATING",
            party: "REPUBLICAN",
            website: "https://www.keating2026.com/",
          },
        ],
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
      {
        id: "lieutenant-governor",
        title: "FOR LIEUTENANT GOVERNOR",
        instruction: "Vote for One",
        candidates: [
          { name: "DAVID OSTROWE", party: "REPUBLICAN" },
          { name: "JUSTIN JJ HUMPHREY", party: "REPUBLICAN" },
          {
            name: "BRIAN HILL",
            party: "REPUBLICAN",
            website: "https://www.hillforlg.com/",
          },
          { name: "H. VICTOR FLORES", party: "REPUBLICAN" },
          {
            name: "T. W. SHANNON",
            party: "REPUBLICAN",
            website: "https://votetwshannon.com/",
            endorsements: [
              {
                name: "Trump Endorsed",
                url: "https://truthsocial.com/@realDonaldTrump/116285916990204668",
              },
            ],
          },
          {
            name: "DARRELL WEAVER",
            party: "REPUBLICAN",
            website: "https://darrellweaverforltgov.com/",
          },
        ],
        debates: [
          {
            label: "Lt. Governor Debate",
            url: "https://www.youtube.com/watch?v=uAqQjJ6bd2k",
          },
          {
            label:
              "Oklahoma Superintendent & Lieutenant Governor Candidate Forum",
            url: "https://www.youtube.com/watch?v=-LEl3oiDsdA",
          },
        ],
      },
      {
        id: "attorney-general",
        title: "FOR ATTORNEY GENERAL",
        instruction: "Vote for One",
        candidates: [
          {
            name: "JEFF STARLING",
            party: "REPUBLICAN",
            website: "https://jeffstarling.com/",
          },
          {
            name: "JON ECHOLS",
            party: "REPUBLICAN",
            website: "https://jonechols.com/",
          },
        ],
        debates: [
          {
            label: "Oklahoma GOP Attorney General Debate",
            url: "https://www.youtube.com/watch?v=W-OhMRxUoF8",
          },
        ],
      },
      {
        id: "state-treasurer",
        title: "FOR STATE TREASURER",
        instruction: "Vote for One",
        candidates: [
          {
            name: "CINDY BYRD",
            party: "REPUBLICAN",
            website: "https://www.cindybyrd.com/",
          },
          {
            name: "TODD RUSS",
            party: "REPUBLICAN",
            website: "https://toddrussforstatetreasurer.com/",
          },
        ],
        debates: [
          {
            label: "Candidate Forum (includes State Treasurer)",
            url: "https://www.youtube.com/watch?v=3EQit69Txnc",
          },
        ],
      },
      {
        id: "superintendent",
        title: "FOR SUPERINTENDENT OF PUBLIC INSTRUCTION",
        instruction: "Vote for One",
        candidates: [
          {
            name: "ADAM PUGH",
            party: "REPUBLICAN",
            website: "https://www.adampugh.com/",
          },
          {
            name: "DEBRA A. HERLIHY",
            party: "REPUBLICAN",
            website: "https://www.debraherlihyforstatesuperintendent.com/",
          },
          { name: "WILLIAM E CROZIER", party: "REPUBLICAN" },
          {
            name: "TONI HASENBECK",
            party: "REPUBLICAN",
            website: "https://www.toniforok.com/",
          },
          {
            name: "JOHN COX",
            party: "REPUBLICAN",
            website: "https://coxforok.com/",
          },
          {
            name: "ROBERT FRANKLIN",
            party: "REPUBLICAN",
            website: "https://voterobertfranklin.com/",
          },
          {
            name: "JAMES TAYLOR",
            party: "REPUBLICAN",
            website: "https://www.taylor4ok.org/",
          },
        ],
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
            label:
              "Oklahoma Superintendent & Lieutenant Governor Candidate Forum",
            url: "https://www.youtube.com/watch?v=-LEl3oiDsdA",
          },
          {
            label: "OK Superintendent Candidate Forum - Elgin, OK",
            url: "https://www.youtube.com/watch?v=kwVRTk_mpgk",
          },
        ],
      },
      {
        id: "commissioner-of-labor",
        title: "FOR COMMISSIONER OF LABOR",
        instruction: "Vote for One",
        candidates: [
          { name: "KEITH SWINTON", party: "REPUBLICAN" },
          { name: "KEVIN WEST", party: "REPUBLICAN" },
          { name: "JOHN PFEIFFER", party: "REPUBLICAN" },
          { name: "LISA JANLOO", party: "REPUBLICAN" },
        ],
      },
      {
        id: "insurance-commissioner",
        title: "FOR INSURANCE COMMISSIONER",
        instruction: "Vote for One",
        candidates: [
          {
            name: "MARTY L QUINN",
            party: "REPUBLICAN",
            website: "https://martyquinnforok.com",
          },
          {
            name: "BOB SULLIVAN",
            party: "REPUBLICAN",
            website: "https://votebobsullivan.com",
          },
          {
            name: "CHRIS MERIDETH",
            party: "REPUBLICAN",
            website: "https://www.chrismeridethforok.com",
          },
          {
            name: "GRETA SHULER",
            party: "REPUBLICAN",
            website: "https://www.votegretaok.com",
          },
        ],
      },
      {
        id: "corporation-commissioner",
        title: "FOR CORPORATION COMMISSIONER",
        instruction: "Vote for One",
        candidates: [
          {
            name: "JUSTIN HORNBACK",
            party: "REPUBLICAN",
            website: "https://hornback2026.com/",
          },
          {
            name: "BRAD BOLES",
            party: "REPUBLICAN",
            website: "https://bolesforok.com/",
          },
        ],
      },
    ],
  },
  {
    id: "congressional-officers",
    heading: "CONGRESSIONAL OFFICERS",
    races: [
      {
        id: "us-senator",
        title: "FOR UNITED STATES SENATOR",
        instruction: "Vote for One",
        candidates: [
          {
            name: "SEAN BUCKNER",
            party: "REPUBLICAN",
            website: "https://bucknerforsenate.com/",
          },
          {
            name: "BRIAN RAGAIN",
            party: "REPUBLICAN",
            website: "https://ragainforsenate.com/",
          },
          { name: "NICK HANKINS", party: "REPUBLICAN" },
          { name: "GARY TY ENGLAND", party: "REPUBLICAN" },
          {
            name: "KEVIN HERN",
            party: "REPUBLICAN",
            website: "https://hernforsenate.com/",
            endorsements: [
              {
                name: "Trump Endorsed",
                url: "https://truthsocial.com/@realDonaldTrump/116224634088762061",
              },
            ],
          },
        ],
      },
      {
        id: "us-representative-d1",
        title: "FOR UNITED STATES REPRESENTATIVE",
        subtitle: "DISTRICT 01",
        instruction: "Vote for One",
        candidates: [
          {
            name: "JED COCHRAN",
            party: "REPUBLICAN",
            website: "https://jedcochran.com",
          },
          { name: "KELLY B. WALSH", party: "REPUBLICAN" },
          { name: "DAN ROONEY", party: "REPUBLICAN" },
          {
            name: "NATHAN BUTTERFIELD",
            party: "REPUBLICAN",
            website: "https://nathanbutterfield.com",
          },
          { name: "TODD WOODS", party: "REPUBLICAN" },
          { name: "NANCY DYSON", party: "REPUBLICAN" },
          {
            name: "PAUL ROYSE",
            party: "REPUBLICAN",
            website: "https://paulroyse.com",
          },
          { name: "COURTNEY GILL", party: "REPUBLICAN" },
          {
            name: "JACKSON LAHMEYER",
            party: "REPUBLICAN",
            website: "https://www.jacksonlahmeyer.com/",
            endorsements: [
              {
                name: "Trump Endorsed",
                url: "https://truthsocial.com/@realDonaldTrump/116534955446755104",
              },
            ],
          },
          {
            name: "MARK TEDFORD",
            party: "REPUBLICAN",
            website: "https://marktedfordforcongress.com",
          },
          {
            name: "KIM DAVID",
            party: "REPUBLICAN",
            website: "https://votekimdavid.com",
          },
        ],
      },
    ],
  },
  {
    id: "legislative-district-county",
    heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
    races: [
      {
        id: "district-attorney-d14",
        title: "FOR DISTRICT ATTORNEY",
        subtitle: "DISTRICT 14",
        instruction: "Vote for One",
        candidates: [
          {
            name: "COLLEEN MCCARTY",
            party: "REPUBLICAN",
            website: "https://www.mccartyforda.com/",
          },
          {
            name: "STEVE KUNZWEILER",
            party: "REPUBLICAN",
            website: "https://www.stevek4da.com/",
          },
        ],
        debates: [
          {
            label:
              "Tulsa Candidate Forum: Attorney General & District Attorney",
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
      {
        id: "county-treasurer",
        title: "FOR COUNTY TREASURER",
        instruction: "Vote for One",
        candidates: [
          {
            name: "JOHN M. FOTHERGILL",
            party: "REPUBLICAN",
            website: "https://votejohnfothergill.com/",
          },
          {
            name: "BRANDON L SHREFFLER",
            party: "REPUBLICAN",
            website: "https://www.shrefflerfortulsa.com/",
          },
        ],
      },
      {
        id: "county-commissioner-d1",
        title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
        instruction: "Vote for One",
        candidates: [
          {
            name: "STAN SALLEE",
            party: "REPUBLICAN",
            website: "https://stansallee.com",
          },
          {
            name: "IDRIS SHELBY",
            party: "REPUBLICAN",
            website: "https://idrisshelby.com",
          },
        ],
      },
    ],
  },
  {
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
  },
]
