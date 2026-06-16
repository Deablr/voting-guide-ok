export type Endorsement = {
  name: string
  url?: string
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
  party?: string
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
  precincts?: string[]
  party?: string
}

export type JurisdictionBallot = {
  county: string
  sections: BallotSection[]
}

export const electionInfo = {
  title: "SAMPLE BALLOT",
  electionType: "PRIMARY ELECTION",
  additionalType: "SPECIAL ELECTION",
  date: "June 16, 2026",
}

const state_officersSection: BallotSection = {
  id: "state-officers",
  heading: "STATE OFFICERS",
  races: [
    {
      id: "for-governor-democrat",
      title: "FOR GOVERNOR",
      party: "DEMOCRAT",
      instruction: "Vote for One",
      candidates: [
        {
          name: "CONNIE JOHNSON",
          party: "DEMOCRAT",
          website: "https://connieforgov.com/",
        },
        {
          name: "ARYA",
          party: "DEMOCRAT",
          website: "https://aa4ok.com/",
        },
        {
          name: "CYNDI MUNSON",
          party: "DEMOCRAT",
          website: "https://www.cyndimunson.com/",
        },
      ],
      debates: [
        { label: "Oklahoma Chronicle: Meet the Democratic gubernatorial candidates", url: "https://www.youtube.com/watch?v=NMeFy6dUg_4" },
        { label: "Democratic candidate for OK governor Connie Johnson explains her platform", url: "https://www.youtube.com/watch?v=_xraQuYs4Ss" },
        { label: "Can Cyndi Munson Flip Oklahoma? | The Future of Education, Families & Rural America", url: "https://www.youtube.com/watch?v=EKGJb4UMLLk" },
      ],
    },
    {
      id: "for-governor-republican",
      title: "FOR GOVERNOR",
      party: "REPUBLICAN",
      instruction: "Vote for One",
      candidates: [
        {
          name: "CALUP ANTHONY TAYLOR",
          party: "REPUBLICAN",
        },
        {
          name: "JENNIFER DOMENICO",
          party: "REPUBLICAN",
        },
        {
          name: "GENTNER DRUMMOND",
          party: "REPUBLICAN",
          website: "https://drummondok.com/",
        },
        {
          name: "KENNETH STURGELL",
          party: "REPUBLICAN",
        },
        {
          name: "CHIP KEATING",
          party: "REPUBLICAN",
          website: "https://www.keating2026.com/",
        },
        {
          name: "MIKE MAZZEI",
          party: "REPUBLICAN",
          website: "https://mikeforok.com/",
          endorsements: [
            { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116660095799513934" },
          ],
        },
        {
          name: "JAKE A. MERRICK",
          party: "REPUBLICAN",
          website: "https://jakemerrickforgovernor.com/",
          endorsements: [
            { name: "Deab Endorsed" },
          ],
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
      ],
      debates: [
        { label: "Gubernatorial Debate", url: "https://www.youtube.com/live/Z1dHIAKW12g" },
        { label: "Gubernatorial Debate", url: "https://www.youtube.com/live/hr97B9d6Ut8" },
        { label: "Oklahoma Governor's Race: GOP Forum", url: "https://www.youtube.com/watch?v=H5kMDvgW3Dc" },
        { label: "Southeast Oklahoma Republican Governor Primary Forum", url: "https://www.youtube.com/watch?v=0YAj8kLHQFo" },
        { label: "Official OKGOP 2026 Gubernatorial Forum", url: "https://www.youtube.com/watch?v=JFiuh1O5fX8" },
        { label: "Watch Republican candidates for governor in latest debate", url: "https://www.youtube.com/watch?v=XLbtcRUDPC8" },
      ],
    },
    {
      id: "for-lieutenant-governor-republican",
      title: "FOR LIEUTENANT GOVERNOR",
      party: "REPUBLICAN",
      instruction: "Vote for One",
      candidates: [
        {
          name: "H. VICTOR FLORES",
          party: "REPUBLICAN",
          website: "https://www.victor4oklahoma.com",
        },
        {
          name: "T. W. SHANNON",
          party: "REPUBLICAN",
          website: "https://votetwshannon.com/",
          endorsements: [
            { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116285916990204668" },
          ],
        },
        {
          name: "DARRELL WEAVER",
          party: "REPUBLICAN",
          website: "https://darrellweaverforltgov.com/",
        },
        {
          name: "DAVID OSTROWE",
          party: "REPUBLICAN",
          website: "https://www.ostroweok.com",
        },
        {
          name: "JUSTIN JJ HUMPHREY",
          party: "REPUBLICAN",
          website: "https://jj4ltgov.com",
          endorsements: [
            { name: "Deab Endorsed" },
          ],
        },
        {
          name: "BRIAN HILL",
          party: "REPUBLICAN",
          website: "https://www.hillforlg.com/",
        },
      ],
      debates: [
        { label: "Lt. Governor Debate", url: "https://www.youtube.com/watch?v=uAqQjJ6bd2k" },
        { label: "Oklahoma Superintendent & Lieutenant Governor Candidate Forum - May 26, 2026", url: "https://www.youtube.com/watch?v=-LEl3oiDsdA" },
        { label: "State Chamber candidate interview - Brian Hill", url: "https://www.youtube.com/watch?v=0KuxKC86fzU" },
        { label: "Lawton Town Crier interview - T.W. Shannon", url: "https://www.youtube.com/watch?v=FwlRpcYcKi8" },
      ],
    },
    {
      id: "for-attorney-general-republican",
      title: "FOR ATTORNEY GENERAL",
      party: "REPUBLICAN",
      instruction: "Vote for One",
      candidates: [
        {
          name: "JON ECHOLS",
          party: "REPUBLICAN",
          website: "https://jonechols.com/",
        },
        {
          name: "JEFF STARLING",
          party: "REPUBLICAN",
          website: "https://jeffstarling.com/",
        },
      ],
      debates: [
        { label: "Oklahoma GOP Attorney General Debate", url: "https://www.youtube.com/watch?v=W-OhMRxUoF8" },
      ],
    },
    {
      id: "for-state-treasurer-republican",
      title: "FOR STATE TREASURER",
      party: "REPUBLICAN",
      instruction: "Vote for One",
      candidates: [
        {
          name: "TODD RUSS",
          party: "REPUBLICAN",
          website: "https://toddrussforstatetreasurer.com/",
        },
        {
          name: "CINDY BYRD",
          party: "REPUBLICAN",
          website: "https://www.cindybyrd.com/",
        },
      ],
      debates: [
        { label: "Candidate Forum (includes State Treasurer)", url: "https://www.youtube.com/watch?v=3EQit69Txnc" },
      ],
    },
    {
      id: "for-superintendent-of-public-instruction-democrat",
      title: "FOR SUPERINTENDENT OF PUBLIC INSTRUCTION",
      party: "DEMOCRAT",
      instruction: "Vote for One",
      candidates: [
        {
          name: "JENNETTIE MARSHALL",
          party: "DEMOCRAT",
          website: "https://www.marshallforoklahoma.com/",
        },
        {
          name: "CRAIG MCVAY",
          party: "DEMOCRAT",
          website: "https://craigforkids.com/",
        },
      ],
      debates: [
        { label: "Oklahoma Democratic State Superintendent Debate", url: "https://www.youtube.com/watch?v=BePTviWer6Y" },
      ],
    },
    {
      id: "for-superintendent-of-public-instruction-republican",
      title: "FOR SUPERINTENDENT OF PUBLIC INSTRUCTION",
      party: "REPUBLICAN",
      instruction: "Vote for One",
      candidates: [
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
        {
          name: "WILLIAM E CROZIER",
          party: "REPUBLICAN",
        },
      ],
      debates: [
        { label: "Oklahoma GOP State Superintendent Debate", url: "https://www.youtube.com/watch?v=hHL51vp-x3I" },
        { label: "Republican Primary Debate: Oklahoma State Superintendent", url: "https://www.youtube.com/watch?v=wRV-lbk4970" },
        { label: "Oklahoma Superintendent & Lieutenant Governor Candidate Forum", url: "https://www.youtube.com/watch?v=-LEl3oiDsdA" },
        { label: "OK Superintendent Candidate Forum - Elgin, OK", url: "https://www.youtube.com/watch?v=kwVRTk_mpgk" },
      ],
    },
    {
      id: "for-commissioner-of-labor-republican",
      title: "FOR COMMISSIONER OF LABOR",
      party: "REPUBLICAN",
      instruction: "Vote for One",
      candidates: [
        {
          name: "JOHN PFEIFFER",
          party: "REPUBLICAN",
          website: "https://votejohnpfeiffer.com",
        },
        {
          name: "LISA JANLOO",
          party: "REPUBLICAN",
          website: "https://www.janlooforoklabor.com",
        },
        {
          name: "KEITH SWINTON",
          party: "REPUBLICAN",
        },
        {
          name: "KEVIN WEST",
          party: "REPUBLICAN",
          website: "https://www.votekevinwest.com",
        },
      ],
      debates: [
        { label: "GOP Labor Commissioner debate recap (Let's Fix This)", url: "https://www.youtube.com/watch?v=3VYqAOlbhik" },
        { label: "State Chamber candidate interview - Lisa Janloo", url: "https://www.youtube.com/watch?v=vWPW5II2rNY" },
        { label: "State Chamber candidate interview - Kevin West", url: "https://www.youtube.com/watch?v=7vtvwpbi7tE" },
        { label: "State Chamber candidate interview - John Pfeiffer", url: "https://www.youtube.com/watch?v=pzMYxklYrGY" },
      ],
    },
    {
      id: "for-insurance-commissioner-republican",
      title: "FOR INSURANCE COMMISSIONER",
      party: "REPUBLICAN",
      instruction: "Vote for One",
      candidates: [
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
      ],
      debates: [
        { label: "Oklahoma Insurance Commissioner GOP Primary Debate (6/8/26)", url: "https://www.youtube.com/watch?v=9jw-B6csLwY" },
        { label: "OETA GOP Insurance Commissioner Forum", url: "https://www.youtube.com/watch?v=q1Z_Vgu07qo" },
      ],
    },
    {
      id: "for-corporation-commissioner-democrat",
      title: "FOR CORPORATION COMMISSIONER",
      party: "DEMOCRAT",
      instruction: "Vote for One",
      candidates: [
        {
          name: "DONALD ANTHONY CLYTUS",
          party: "DEMOCRAT",
        },
        {
          name: "RHONDA EASTMAN",
          party: "DEMOCRAT",
          website: "https://www.eastman2026.com/",
        },
        {
          name: "HAROLD D. SPRADLING",
          party: "DEMOCRAT",
        },
      ],
      debates: [
        { label: "Oklahoma Corporation Commission candidate Harold Spradling", url: "https://www.youtube.com/watch?v=zdB8vsyZr5U" },
      ],
    },
    {
      id: "for-corporation-commissioner-republican",
      title: "FOR CORPORATION COMMISSIONER",
      party: "REPUBLICAN",
      instruction: "Vote for One",
      candidates: [
        {
          name: "BRAD BOLES",
          party: "REPUBLICAN",
          website: "https://bolesforok.com/",
        },
        {
          name: "JUSTIN HORNBACK",
          party: "REPUBLICAN",
          website: "https://hornback2026.com/",
        },
      ],
      debates: [
        { label: "State Chamber candidate interview - Brad Boles", url: "https://www.youtube.com/watch?v=seN89eMU8IQ" },
        { label: "State Chamber candidate interview - Justin Hornback", url: "https://www.youtube.com/watch?v=ZxJd754vm90" },
      ],
    },
  ],
}

const state_questionsSection: BallotSection = {
  id: "state-questions",
  heading: "STATE QUESTIONS",
  questions: [
    {
      id: "sq-832",
      title: "STATE QUESTION NO. 832",
      subtitle: "INITIATIVE PETITION NO. 446",
      text: "This measure amends the Oklahoma Minimum Wage Act (OMWA) under the Oklahoma Statutes to increase the state minimum wage. Employers must pay employees at least $9 per hour beginning in 2025, increasing $1.50 annually for a final rate of $15 per hour in 2029. Beginning in 2030 and continuing indefinitely, the minimum wage would automatically increase annually based on the increase in the cost of living, if any, as measured by the U.S. Department of Labor's Consumer Price Index for Urban Wage Earners and Clerical Workers; the minimum wage increase would continue with any successor agency or index. Such increase would also not require approval from Congress or the Oklahoma Legislature. This measure eliminates several exemptions in the current OMWA, including the exemptions for employers subject to the federal Fair Labor Standards Act; part-time employees; certain students and individuals under age 18; farm and agricultural workers; domestic service workers; newspaper vendors or carriers; and feedstore employees. Effectively, eliminating these exemptions results in current employees not covered by the OMWA now being entitled to the minimum wage. The measure also repeals title 40, section 197.5. |Federal and state employees will not be covered under the OMWA. Volunteers; employers with ten or fewer employees and grossing $100,000 or less; some employees of carriers engaged in interstate commerce; employees working in a bona fide executive, administrative, or professional capacity; outside salesmen; and reserve deputy sheriffs will remain excluded from the OMWA's coverage. Because counties, municipalities, and school districts are not excluded, a fiscal impact on the State will result, possibly necessitating a revenue increase by new taxes or elimination of existing services. The measure will be effective the January 1 following approval and will not apply retroactively. |Shall the proposal be approved?",
      choices: [
        "FOR THE PROPOSAL - YES",
        "AGAINST THE PROPOSAL - NO"
      ],
    },
  ],
}

export const jurisdictionBallots: Record<string, JurisdictionBallot> = {
  "ADAIR": {
    county: "ADAIR",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-4-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 4",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KENNY SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "TOM WOODS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-86-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 86",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DAVID HARDIN",
                party: "REPUBLICAN",
              },
              {
                name: "RYAN MARTIN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DIANNA DAWN YELL",
                party: "REPUBLICAN",
              },
              {
                name: "TERESA TURNER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-treasurer-republican",
            title: "FOR COUNTY TREASURER",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ANN BISHOP",
                party: "REPUBLICAN",
              },
              {
                name: "ROSITA GALLARDO",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-democrat",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SHELBY EUBANKS",
                party: "DEMOCRAT",
              },
              {
                name: "BRAD KIMBLE",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MIKE WININGER",
                party: "REPUBLICAN",
              },
              {
                name: "CHARLES E.W. BOECHER",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "ALFALFA": {
    county: "ALFALFA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-associate-district-judge-alfalfa-county",
            title: "FOR ASSOCIATE DISTRICT JUDGE - ALFALFA COUNTY",
            instruction: "Vote for One",
            candidates: [
              {
                name: "LOREN E. ANGLE",
                party: "NONPARTISAN",
              },
              {
                name: "BRIAN E. MITCHELL",
                party: "NONPARTISAN",
              },
              {
                name: "MEGAN HICKMAN",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "ATOKA": {
    county: "ATOKA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-19-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 19",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MICHAEL A. BRITTINGHAM",
                party: "REPUBLICAN",
              },
              {
                name: "ANTHONY DEVORE",
                party: "REPUBLICAN",
              },
              {
                name: "DEREK PORTER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BREE SETTLEMIRE",
                party: "REPUBLICAN",
              },
              {
                name: "TREY HARBIN",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN POTTS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JON EDWIN HOLSTINE",
                party: "REPUBLICAN",
              },
              {
                name: "JOE DON PARTIN",
                party: "REPUBLICAN",
              },
              {
                name: "KEEGAN HEARD",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSHUA CIRKLES",
                party: "REPUBLICAN",
              },
              {
                name: "ETHAN SETTLEMIRE",
                party: "REPUBLICAN",
              },
              {
                name: "SHANE TOMLINSON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "BEAVER": {
    county: "BEAVER",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "BECKHAM": {
    county: "BECKHAM",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-38-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK VERNON",
                party: "REPUBLICAN",
              },
              {
                name: "BARRY DWAINE CHRISTIAN",
                party: "REPUBLICAN",
              },
              {
                name: "JOE B. BUCHANAN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DRAKE MCKENNON",
                party: "REPUBLICAN",
              },
              {
                name: "BUTCH GOLDESBERRY",
                party: "REPUBLICAN",
              },
              {
                name: "LONNIE RISENHOOVER",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "COLBY ROBINSON",
                party: "REPUBLICAN",
              },
              {
                name: "SAMMY CARNES",
                party: "REPUBLICAN",
              },
              {
                name: "JAMES E. GREER",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "BLAINE": {
    county: "BLAINE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-26-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 26",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK KOCH",
                party: "REPUBLICAN",
              },
              {
                name: "JESSICA WINEGEART",
                party: "REPUBLICAN",
              },
              {
                name: "BRADY BUTLER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-treasurer-republican",
            title: "FOR COUNTY TREASURER",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CRYSTAL CAMPOS-PEREZ",
                party: "REPUBLICAN",
              },
              {
                name: "SABRA BARNES",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DARRYL HICKS",
                party: "REPUBLICAN",
              },
              {
                name: "CHAD SCHEIHING",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TRACY MATLI",
                party: "REPUBLICAN",
              },
              {
                name: "THAD SCHENK",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "BRYAN": {
    county: "BRYAN",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-19-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 19",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MICHAEL A. BRITTINGHAM",
                party: "REPUBLICAN",
              },
              {
                name: "ANTHONY DEVORE",
                party: "REPUBLICAN",
              },
              {
                name: "DEREK PORTER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICHARD NIX",
                party: "REPUBLICAN",
              },
              {
                name: "LANCE BILLINGS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRANDON CARR",
                party: "REPUBLICAN",
              },
              {
                name: "JOSH CROSS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CADDO": {
    county: "CADDO",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-26-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 26",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK KOCH",
                party: "REPUBLICAN",
              },
              {
                name: "JESSICA WINEGEART",
                party: "REPUBLICAN",
              },
              {
                name: "BRADY BUTLER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-65-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 65",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CARLA BLUE WEAVER",
                party: "REPUBLICAN",
              },
              {
                name: "SAM MITCHELL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-democrat",
            title: "FOR COUNTY ASSESSOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "PATRICK MICHAEL HAYES",
                party: "DEMOCRAT",
              },
              {
                name: "TAYLOR ALLEN",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MIKE BELTER",
                party: "REPUBLICAN",
              },
              {
                name: "BUCKY BROWN",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CANADIAN": {
    county: "CANADIAN",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-05-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 05",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TREY MARTIN",
                party: "DEMOCRAT",
              },
              {
                name: "JENA NELSON",
                party: "DEMOCRAT",
                website: "https://jenanelson.com/",
              },
            ],
            debates: [
              { label: "2026 Democratic 5th Congressional District Forum", url: "https://www.youtube.com/watch?v=IF4zkyym8FA" },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-18-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 18",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TYLER HERRING",
                party: "REPUBLICAN",
              },
              {
                name: "JACK STEWART",
                party: "REPUBLICAN",
              },
              {
                name: "MISTY SHANNON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-26-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 26",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK KOCH",
                party: "REPUBLICAN",
              },
              {
                name: "JESSICA WINEGEART",
                party: "REPUBLICAN",
              },
              {
                name: "BRADY BUTLER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-47-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 47",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN SIMONS",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN WARNEMUENDE",
                party: "REPUBLICAN",
              },
              {
                name: "TOBY THOMPSON",
                party: "REPUBLICAN",
              },
              {
                name: "KEVAN GENTRY",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-60-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 60",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KADE RENFRO",
                party: "REPUBLICAN",
              },
              {
                name: "MIKE KELLEY",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TOM MANSKE",
                party: "REPUBLICAN",
              },
              {
                name: "MARC HADER",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CARTER": {
    county: "CARTER",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-20-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES R. GILMARTIN",
                party: "REPUBLICAN",
              },
              {
                name: "MELISSA HANDKE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KERRY ROSS",
                party: "REPUBLICAN",
              },
              {
                name: "CHAD EUBANKS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KENNY LEON EMERSON",
                party: "REPUBLICAN",
              },
              {
                name: "BERRY LEE-BRINKMAN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CHEROKEE": {
    county: "CHEROKEE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-4-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 4",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KENNY SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "TOM WOODS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-14-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 14",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS SNEED",
                party: "REPUBLICAN",
              },
              {
                name: "ROY TIMMONS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-86-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 86",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DAVID HARDIN",
                party: "REPUBLICAN",
              },
              {
                name: "RYAN MARTIN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SCOTT KIRK",
                party: "REPUBLICAN",
              },
              {
                name: "JAKE GREEN",
                party: "REPUBLICAN",
              },
              {
                name: "JAMIE THOMPSON",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN STILWELL",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CHOCTAW": {
    county: "CHOCTAW",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-19-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 19",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MICHAEL A. BRITTINGHAM",
                party: "REPUBLICAN",
              },
              {
                name: "ANTHONY DEVORE",
                party: "REPUBLICAN",
              },
              {
                name: "DEREK PORTER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-democrat",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEROME MICK",
                party: "DEMOCRAT",
              },
              {
                name: "STEVEN M SMITH",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "AARON YOUNG",
                party: "REPUBLICAN",
              },
              {
                name: "JEFF DAVIS",
                party: "REPUBLICAN",
              },
              {
                name: "C. SHANE MILLER",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CIMARRON": {
    county: "CIMARRON",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KENT TOOLEY",
                party: "REPUBLICAN",
              },
              {
                name: "RANDY LYNN ESLINGER",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CLEVELAND": {
    county: "CLEVELAND",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-17",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 17",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ABBY THOMPSON",
                party: "NONPARTISAN",
              },
              {
                name: "STEVE KING",
                party: "NONPARTISAN",
              },
              {
                name: "RANDY CORNELIUS",
                party: "NONPARTISAN",
              },
              {
                name: "JUSTIN FREELAND WOOD",
                party: "NONPARTISAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-24-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 24",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TAMMI DIDLOT",
                party: "REPUBLICAN",
              },
              {
                name: "JON PAINTER",
                party: "REPUBLICAN",
              },
              {
                name: "HEATHER BOSS",
                party: "REPUBLICAN",
              },
              {
                name: "BRYAN HUSTED",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERT KEYES",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-20-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JONATHAN WILK",
                party: "REPUBLICAN",
              },
              {
                name: "MIKE FULLERTON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-27-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 27",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DANNY STERLING",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERTA LEWIS",
                party: "REPUBLICAN",
              },
              {
                name: "SHONEY QUALLS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-36-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 36",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOE SARGE NELSON",
                party: "REPUBLICAN",
              },
              {
                name: "JENNI WHITE",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN GEORGE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-42-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 42",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CINDY ROE",
                party: "REPUBLICAN",
              },
              {
                name: "KAITY KEITH",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-45-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 45",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ANNIE MENZ",
                party: "DEMOCRAT",
              },
              {
                name: "EVAN NATHANIEL SHEPHERD",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-state-representative-district-53-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 53",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GRANT WORLEY",
                party: "REPUBLICAN",
              },
              {
                name: "JASON BLAIR",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-54-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 54",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "HEATH KUFAHL",
                party: "REPUBLICAN",
              },
              {
                name: "ALEXANDER TORVI",
                party: "REPUBLICAN",
              },
              {
                name: "PHILIP C. LANCASTER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-91-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 91",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TERESA STERLING",
                party: "REPUBLICAN",
              },
              {
                name: "DEBBIE SHULTZ",
                party: "REPUBLICAN",
              },
              {
                name: "MICHAEL FREEMAN",
                party: "REPUBLICAN",
              },
              {
                name: "BRUCE FLEMING",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERTO SEDA",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-95-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 95",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRENT RINEHART",
                party: "REPUBLICAN",
              },
              {
                name: "MAX WOLFLEY",
                party: "REPUBLICAN",
              },
              {
                name: "ALEXANDER YODER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MICHAEL DAVID NASH",
                party: "REPUBLICAN",
              },
              {
                name: "RUSTY GRISSOM",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "COAL": {
    county: "COAL",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-18-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 18",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SHELTON FOSTER",
                party: "REPUBLICAN",
              },
              {
                name: "DAVID SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "PAMELA GORDON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DEE HENSLEY",
                party: "REPUBLICAN",
              },
              {
                name: "KELLY CAMPBELL",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "COMANCHE": {
    county: "COMANCHE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-32-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 32",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEAN HAUSHEER",
                party: "REPUBLICAN",
              },
              {
                name: "DUSTY DEEVERS",
                party: "REPUBLICAN",
              },
              {
                name: "CURTIS W. ERWIN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-65-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 65",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CARLA BLUE WEAVER",
                party: "REPUBLICAN",
              },
              {
                name: "SAM MITCHELL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN T TURPIN",
                party: "REPUBLICAN",
              },
              {
                name: "GEORGE GILL",
                party: "REPUBLICAN",
              },
              {
                name: "RYAN JOHN",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "LANDON COCHRANE",
                party: "REPUBLICAN",
              },
              {
                name: "JOSH POWERS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-district-judge-district-5-office-1",
            title: "FOR DISTRICT JUDGE - DISTRICT 5, OFFICE 1",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NEIL WEST",
                party: "NONPARTISAN",
              },
              {
                name: "STEVEN W. CROW",
                party: "NONPARTISAN",
              },
              {
                name: "TOMMY SIMS",
                party: "NONPARTISAN",
              },
              {
                name: "CHRISTINE GALBRAITH",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "COTTON": {
    county: "COTTON",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DAVID EDGMON",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN ANDERSON",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SCOOTER PARK",
                party: "REPUBLICAN",
              },
              {
                name: "MILTON HONEYCUTT",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-district-judge-district-5-office-1",
            title: "FOR DISTRICT JUDGE - DISTRICT 5, OFFICE 1",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NEIL WEST",
                party: "NONPARTISAN",
              },
              {
                name: "STEVEN W. CROW",
                party: "NONPARTISAN",
              },
              {
                name: "TOMMY SIMS",
                party: "NONPARTISAN",
              },
              {
                name: "CHRISTINE GALBRAITH",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CRAIG": {
    county: "CRAIG",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-6-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 6",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "AMBER DAWN ELLIS",
                party: "REPUBLICAN",
              },
              {
                name: "ELI RICHARD",
                party: "REPUBLICAN",
              },
              {
                name: "RUSTY CORNWELL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "LOWELL WALKER",
                party: "REPUBLICAN",
              },
              {
                name: "TODD TAYLOR",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TRENTON LANGLEY",
                party: "REPUBLICAN",
              },
              {
                name: "WILLIS SONNY UNDERWOOD",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CREEK": {
    county: "CREEK",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-01-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 01",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TODD WOODS",
                party: "REPUBLICAN",
                website: "https://woods4congress.com/",
              },
              {
                name: "NANCY DYSON",
                party: "REPUBLICAN",
              },
              {
                name: "PAUL ROYSE",
                party: "REPUBLICAN",
                website: "https://paulroyse.com",
              },
              {
                name: "COURTNEY GILL",
                party: "REPUBLICAN",
                website: "https://okgill.com/",
              },
              {
                name: "JACKSON LAHMEYER",
                party: "REPUBLICAN",
                website: "https://www.jacksonlahmeyer.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116534955446755104" },
                ],
              },
              {
                name: "MARK TEDFORD",
                party: "REPUBLICAN",
                website: "https://www.tedfordforcongress.com/",
                endorsements: [
                  { name: "Deab Endorsed" },
                ],
              },
              {
                name: "KIM DAVID",
                party: "REPUBLICAN",
                website: "https://votekimdavid.com",
              },
              {
                name: "JED COCHRAN",
                party: "REPUBLICAN",
                website: "https://jedcochran.com",
              },
              {
                name: "KELLY B. WALSH",
                party: "REPUBLICAN",
                website: "https://www.walsh2026.com/",
              },
              {
                name: "DAN ROONEY",
                party: "REPUBLICAN",
              },
              {
                name: "NATHAN BUTTERFIELD",
                party: "REPUBLICAN",
                website: "https://nathanbutterfield.com",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-12-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 12",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TODD GOLLIHARE",
                party: "REPUBLICAN",
                website: "https://gollihare.com",
              },
              {
                name: "WM CRAIG STUMP",
                party: "REPUBLICAN",
                website: "https://www.craigstump2026.com",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: State Senator Todd Gollihare", url: "https://www.youtube.com/watch?v=TizAaayqRkw" },
            ],
          },
          {
            id: "for-state-representative-district-24-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 24",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS BANNING",
                party: "REPUBLICAN",
                website: "https://www.banningforoklahoma.com",
              },
              {
                name: "CASEY FIXICO SUTTERFIELD",
                party: "REPUBLICAN",
                website: "https://sites.google.com/view/caseyfixicosutterfield",
              },
            ],
          },
          {
            id: "for-state-representative-district-29-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 29",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRIAN JACKSON",
                party: "REPUBLICAN",
                website: "https://www.brianjacksontakesaction.com",
              },
              {
                name: "KYLE HILBERT",
                party: "REPUBLICAN",
                website: "https://kylehilbert.com",
              },
            ],
          },
          {
            id: "for-state-representative-district-35-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 35",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN WRIGHT",
                party: "REPUBLICAN",
              },
              {
                name: "DILLON TRAVIS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "HALEY ANDERSON",
                party: "REPUBLICAN",
              },
              {
                name: "CARL PRESCOTT",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JARROD WHITEHOUSE",
                party: "REPUBLICAN",
              },
              {
                name: "DANNY GANN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "CUSTER": {
    county: "CUSTER",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-26-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 26",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK KOCH",
                party: "REPUBLICAN",
              },
              {
                name: "JESSICA WINEGEART",
                party: "REPUBLICAN",
              },
              {
                name: "BRADY BUTLER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "WADE ANDERS",
                party: "REPUBLICAN",
              },
              {
                name: "JEREMIAH TRENT",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "DELAWARE": {
    county: "DELAWARE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-4-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 4",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KENNY SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "TOM WOODS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-86-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 86",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DAVID HARDIN",
                party: "REPUBLICAN",
              },
              {
                name: "RYAN MARTIN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DAVID BECK",
                party: "REPUBLICAN",
              },
              {
                name: "DANNY DAVID DUNCAN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "DEWEY": {
    county: "DEWEY",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHUCK HURT",
                party: "REPUBLICAN",
              },
              {
                name: "TODD VAUGHAN",
                party: "REPUBLICAN",
              },
              {
                name: "DILLON BERRY",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "ELLIS": {
    county: "ELLIS",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "WYATT CAMPBELL",
                party: "REPUBLICAN",
              },
              {
                name: "BLAKE SUTHERS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "GARFIELD": {
    county: "GARFIELD",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-38-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRIAN HOBBS",
                party: "REPUBLICAN",
              },
              {
                name: "DANIELLE DETERDING",
                party: "REPUBLICAN",
              },
              {
                name: "MICHAEL NORMAN",
                party: "REPUBLICAN",
              },
              {
                name: "SUZANNE CALLIHAN",
                party: "REPUBLICAN",
              },
              {
                name: "MADISON BOLAY",
                party: "REPUBLICAN",
              },
              {
                name: "JIM NEAL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-40-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 40",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KINSLEY JORDAN",
                party: "REPUBLICAN",
              },
              {
                name: "TORRY TURNBOW",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SAM STRECKER",
                party: "REPUBLICAN",
              },
              {
                name: "JOE KEGIN",
                party: "REPUBLICAN",
              },
              {
                name: "MIKE UMSTEAD",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CLARENCE OTIE MALY",
                party: "REPUBLICAN",
              },
              {
                name: "NEANNE CLINTON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "GARVIN": {
    county: "GARVIN",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-42-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 42",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CINDY ROE",
                party: "REPUBLICAN",
              },
              {
                name: "KAITY KEITH",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MELISSA MULLETT",
                party: "REPUBLICAN",
              },
              {
                name: "BECKY DENNIS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "GRADY": {
    county: "GRADY",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-51-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 51",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "COLE STEVENS",
                party: "REPUBLICAN",
              },
              {
                name: "CODY ELLIOTT",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CINDY GELNAR",
                party: "REPUBLICAN",
              },
              {
                name: "KRISSI JENSEN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-treasurer-republican",
            title: "FOR COUNTY TREASURER",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CAROLYN BOWEN",
                party: "REPUBLICAN",
              },
              {
                name: "BRAD HOLLOWELL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ZACHARY DAVIS",
                party: "REPUBLICAN",
              },
              {
                name: "RICHARD SHUCK",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-democrat",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SCOTT NICHOLS",
                party: "DEMOCRAT",
              },
              {
                name: "LORENZO GARZA",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GARY BRAY",
                party: "REPUBLICAN",
              },
              {
                name: "JUSTIN MCWILLIAMS",
                party: "REPUBLICAN",
              },
              {
                name: "WILLIAM BILLY WESOLOWSKI",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "GRANT": {
    county: "GRANT",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-38-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRIAN HOBBS",
                party: "REPUBLICAN",
              },
              {
                name: "DANIELLE DETERDING",
                party: "REPUBLICAN",
              },
              {
                name: "MICHAEL NORMAN",
                party: "REPUBLICAN",
              },
              {
                name: "SUZANNE CALLIHAN",
                party: "REPUBLICAN",
              },
              {
                name: "MADISON BOLAY",
                party: "REPUBLICAN",
              },
              {
                name: "JIM NEAL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ROBIN HEROD",
                party: "REPUBLICAN",
              },
              {
                name: "LORI CRIPE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ROD HASKINS",
                party: "REPUBLICAN",
              },
              {
                name: "KEITH J. MCCLURE",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "GREER": {
    county: "GREER",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-38-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK VERNON",
                party: "REPUBLICAN",
              },
              {
                name: "BARRY DWAINE CHRISTIAN",
                party: "REPUBLICAN",
              },
              {
                name: "JOE B. BUCHANAN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-democrat",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BERT DYER",
                party: "DEMOCRAT",
              },
              {
                name: "DALE ROGERS",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KENNETH SLATON",
                party: "REPUBLICAN",
              },
              {
                name: "LARRY G. MILLER",
                party: "REPUBLICAN",
              },
              {
                name: "ANDY SCOTT",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RODNEY ROGERS JR",
                party: "REPUBLICAN",
              },
              {
                name: "DENNIS HALFORD",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "city-of-mangum",
        heading: "CITY OF MANGUM",
        races: [
          {
            id: "for-board-of-trustees-commissioner-3-unexpired-term",
            title: "FOR BOARD OF TRUSTEES - COMMISSIONER #3 (UNEXPIRED TERM)",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RODD DUFF",
                party: "NONPARTISAN",
              },
              {
                name: "TRAVIS MAYABB",
                party: "NONPARTISAN",
              },
              {
                name: "RENEE CLARK",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "HARMON": {
    county: "HARMON",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-38-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK VERNON",
                party: "REPUBLICAN",
              },
              {
                name: "BARRY DWAINE CHRISTIAN",
                party: "REPUBLICAN",
              },
              {
                name: "JOE B. BUCHANAN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "HARPER": {
    county: "HARPER",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS MCMINN",
                party: "REPUBLICAN",
              },
              {
                name: "BRET COSBY",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "HASKELL": {
    county: "HASKELL",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-18-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 18",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES M. GREEN",
                party: "REPUBLICAN",
              },
              {
                name: "J. B. MILLER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-treasurer-republican",
            title: "FOR COUNTY TREASURER",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BAILEY WATKINS",
                party: "REPUBLICAN",
              },
              {
                name: "HOLLY R HINTON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRIAN KNOWLES",
                party: "REPUBLICAN",
              },
              {
                name: "SCOTT WELCH",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NEIL SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "JACK K DENNY",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "HUGHES": {
    county: "HUGHES",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-18-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 18",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SHELTON FOSTER",
                party: "REPUBLICAN",
              },
              {
                name: "DAVID SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "PAMELA GORDON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DWIGHT H BARNETT",
                party: "REPUBLICAN",
              },
              {
                name: "MALCOLM HARDEN",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "JACKSON": {
    county: "JACKSON",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-38-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK VERNON",
                party: "REPUBLICAN",
              },
              {
                name: "BARRY DWAINE CHRISTIAN",
                party: "REPUBLICAN",
              },
              {
                name: "JOE B. BUCHANAN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRENT PANNELL",
                party: "REPUBLICAN",
              },
              {
                name: "TANDY JOHNS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "JEFFERSON": {
    county: "JEFFERSON",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-3-democrat",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICKY MARTIN",
                party: "DEMOCRAT",
              },
              {
                name: "MIKE BUSSY",
                party: "DEMOCRAT",
              },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-district-judge-district-5-office-1",
            title: "FOR DISTRICT JUDGE - DISTRICT 5, OFFICE 1",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NEIL WEST",
                party: "NONPARTISAN",
              },
              {
                name: "STEVEN W. CROW",
                party: "NONPARTISAN",
              },
              {
                name: "TOMMY SIMS",
                party: "NONPARTISAN",
              },
              {
                name: "CHRISTINE GALBRAITH",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "JOHNSTON": {
    county: "JOHNSTON",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-20-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES R. GILMARTIN",
                party: "REPUBLICAN",
              },
              {
                name: "MELISSA HANDKE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MIKE NIBLETT",
                party: "REPUBLICAN",
              },
              {
                name: "DEREK GRAY",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "KAY": {
    county: "KAY",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-10-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 10",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JADAN A. TERRAZAS",
                party: "REPUBLICAN",
                website: "https://jadanterrazas.com",
              },
              {
                name: "BILL COLEMAN",
                party: "REPUBLICAN",
                website: "https://colemanforoklahoma.com",
              },
            ],
            debates: [
              { label: "2026 Oklahoma State Senate District 10 GOP Candidate Forum", url: "https://www.youtube.com/watch?v=vooeJWp6o_A" },
              { label: "Bill Coleman interview", url: "https://www.youtube.com/watch?v=A_IiBQuZzS8" },
            ],
          },
          {
            id: "for-state-representative-district-37-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 37",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SPENCER GRACE",
                party: "REPUBLICAN",
              },
              {
                name: "JEREMY SACKET",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-38-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRIAN HOBBS",
                party: "REPUBLICAN",
              },
              {
                name: "DANIELLE DETERDING",
                party: "REPUBLICAN",
              },
              {
                name: "MICHAEL NORMAN",
                party: "REPUBLICAN",
              },
              {
                name: "SUZANNE CALLIHAN",
                party: "REPUBLICAN",
              },
              {
                name: "MADISON BOLAY",
                party: "REPUBLICAN",
              },
              {
                name: "JIM NEAL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SHANE JONES",
                party: "REPUBLICAN",
              },
              {
                name: "DUSTIN SCHICKRAM",
                party: "REPUBLICAN",
              },
              {
                name: "MARION HARRIS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-district-judge-district-8-office-1",
            title: "FOR DISTRICT JUDGE - DISTRICT 8, OFFICE 1",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ROB DAVIS",
                party: "NONPARTISAN",
              },
              {
                name: "SCOTT LOFTIS",
                party: "NONPARTISAN",
              },
              {
                name: "LEE TURNER",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "KINGFISHER": {
    county: "KINGFISHER",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-20-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARK LEMARR",
                party: "REPUBLICAN",
              },
              {
                name: "CHUCK HALL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-26-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 26",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK KOCH",
                party: "REPUBLICAN",
              },
              {
                name: "JESSICA WINEGEART",
                party: "REPUBLICAN",
              },
              {
                name: "BRADY BUTLER",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "KIOWA": {
    county: "KIOWA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-38-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK VERNON",
                party: "REPUBLICAN",
              },
              {
                name: "BARRY DWAINE CHRISTIAN",
                party: "REPUBLICAN",
              },
              {
                name: "JOE B. BUCHANAN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "city-of-snyder",
        heading: "CITY OF SNYDER",
        races: [
          {
            id: "for-councilmember-councilmember-ward-no-2-unexpired-term",
            title: "FOR COUNCILMEMBER - COUNCILMEMBER, WARD NO. 2 (UNEXPIRED TERM)",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KARL R LANG JR.",
                party: "NONPARTISAN",
              },
              {
                name: "CONNIE J TUBBS",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "LATIMER": {
    county: "LATIMER",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "LEFLORE": {
    county: "LEFLORE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-1-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS WHITE",
                party: "REPUBLICAN",
              },
              {
                name: "GEORGE PHIPPS",
                party: "REPUBLICAN",
              },
              {
                name: "WES WATSON",
                party: "REPUBLICAN",
              },
              {
                name: "AUSTIN LOARD",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-3-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK WEST",
                party: "REPUBLICAN",
              },
              {
                name: "DALTON STALEY",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DAVID HONEYCUTT",
                party: "REPUBLICAN",
              },
              {
                name: "JAMES EUGENE BROWN",
                party: "REPUBLICAN",
              },
              {
                name: "MIKE PARKER",
                party: "REPUBLICAN",
              },
              {
                name: "CARROLL WAYNE ROGERS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMIE OLIVER",
                party: "REPUBLICAN",
              },
              {
                name: "JAMES LOCKHART",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "LINCOLN": {
    county: "LINCOLN",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-05-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 05",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TREY MARTIN",
                party: "DEMOCRAT",
              },
              {
                name: "JENA NELSON",
                party: "DEMOCRAT",
                website: "https://jenanelson.com/",
              },
            ],
            debates: [
              { label: "2026 Democratic 5th Congressional District Forum", url: "https://www.youtube.com/watch?v=IF4zkyym8FA" },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-23-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 23",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DANIEL MCCLURE",
                party: "REPUBLICAN",
              },
              {
                name: "ADAM PANTER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-28-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 28",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GRANT GREEN",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERT TRIMBLE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-32-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 32",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JACK VAUGHAN",
                party: "REPUBLICAN",
              },
              {
                name: "JIM SHAW",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JIM RACKLEY",
                party: "REPUBLICAN",
              },
              {
                name: "LEE DOOLEN",
                party: "REPUBLICAN",
              },
              {
                name: "DAVID ARMITAGE",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "LOGAN": {
    county: "LOGAN",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-05-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 05",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TREY MARTIN",
                party: "DEMOCRAT",
              },
              {
                name: "JENA NELSON",
                party: "DEMOCRAT",
                website: "https://jenanelson.com/",
              },
            ],
            debates: [
              { label: "2026 Democratic 5th Congressional District Forum", url: "https://www.youtube.com/watch?v=IF4zkyym8FA" },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-20-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARK LEMARR",
                party: "REPUBLICAN",
              },
              {
                name: "CHUCK HALL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-28-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 28",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GRANT GREEN",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERT TRIMBLE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-31-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 31",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KARMIN GRIDER",
                party: "REPUBLICAN",
              },
              {
                name: "COLLIN DUEL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-32-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 32",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JACK VAUGHAN",
                party: "REPUBLICAN",
              },
              {
                name: "JIM SHAW",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-33-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 33",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "B. J. ROBERSON",
                party: "REPUBLICAN",
              },
              {
                name: "MOLLY JENKINS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-38-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRIAN HOBBS",
                party: "REPUBLICAN",
              },
              {
                name: "DANIELLE DETERDING",
                party: "REPUBLICAN",
              },
              {
                name: "MICHAEL NORMAN",
                party: "REPUBLICAN",
              },
              {
                name: "SUZANNE CALLIHAN",
                party: "REPUBLICAN",
              },
              {
                name: "MADISON BOLAY",
                party: "REPUBLICAN",
              },
              {
                name: "JIM NEAL",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "LOVE": {
    county: "LOVE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-20-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES R. GILMARTIN",
                party: "REPUBLICAN",
              },
              {
                name: "MELISSA HANDKE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JASON TIPTON",
                party: "REPUBLICAN",
              },
              {
                name: "JOHNNY R JACOBS JR",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "MCCLAIN": {
    county: "MCCLAIN",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-20-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JONATHAN WILK",
                party: "REPUBLICAN",
              },
              {
                name: "MIKE FULLERTON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-42-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 42",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CINDY ROE",
                party: "REPUBLICAN",
              },
              {
                name: "KAITY KEITH",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TERRY DWAIN HILLIS JR.",
                party: "REPUBLICAN",
              },
              {
                name: "GLEN MURRAY",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOE SOUTHERN",
                party: "REPUBLICAN",
              },
              {
                name: "SCOTT CARROLL",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "MCCURTAIN": {
    county: "MCCURTAIN",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-1-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS WHITE",
                party: "REPUBLICAN",
              },
              {
                name: "GEORGE PHIPPS",
                party: "REPUBLICAN",
              },
              {
                name: "WES WATSON",
                party: "REPUBLICAN",
              },
              {
                name: "AUSTIN LOARD",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JUSTIN GRAHAM",
                party: "REPUBLICAN",
              },
              {
                name: "JUSTIN MCCARRELL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JESSE JONES",
                party: "REPUBLICAN",
              },
              {
                name: "CRISTAL JOSLIN",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN WAYNE WILLIAMS",
                party: "REPUBLICAN",
              },
              {
                name: "CLINT BRAY",
                party: "REPUBLICAN",
              },
              {
                name: "DALE BROUSSARD",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BILL MOORE",
                party: "REPUBLICAN",
              },
              {
                name: "DUG ELLEDGE",
                party: "REPUBLICAN",
              },
              {
                name: "JOHNNY CALDWELL",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN PEE WEE LOWERY",
                party: "REPUBLICAN",
              },
              {
                name: "MITCH BISHOP",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERT BECK",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "MCINTOSH": {
    county: "MCINTOSH",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF BOYD",
                party: "REPUBLICAN",
              },
              {
                name: "JEFF COLEMAN",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAYMN BURDINE",
                party: "REPUBLICAN",
              },
              {
                name: "GUNNER FORD",
                party: "REPUBLICAN",
              },
              {
                name: "CHIP COLLINS",
                party: "REPUBLICAN",
              },
              {
                name: "BOBBY ZIEGLER",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "MAJOR": {
    county: "MAJOR",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TRAVIS DARR",
                party: "REPUBLICAN",
              },
              {
                name: "DAVIS WEBB",
                party: "REPUBLICAN",
              },
              {
                name: "TOM NICHOLS",
                party: "REPUBLICAN",
              },
              {
                name: "TANNER MCBRIDE",
                party: "REPUBLICAN",
              },
              {
                name: "CHRISTOPHER WOODS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "MARSHALL": {
    county: "MARSHALL",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-20-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES R. GILMARTIN",
                party: "REPUBLICAN",
              },
              {
                name: "MELISSA HANDKE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-treasurer-republican",
            title: "FOR COUNTY TREASURER",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "LAURA LARKIN",
                party: "REPUBLICAN",
              },
              {
                name: "MARY ANN HALE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JERRY DON STUCKEY",
                party: "REPUBLICAN",
              },
              {
                name: "JUSTIN WORMY AYRES",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERT CHANEY",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "MAYES": {
    county: "MAYES",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-6-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 6",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "AMBER DAWN ELLIS",
                party: "REPUBLICAN",
              },
              {
                name: "ELI RICHARD",
                party: "REPUBLICAN",
              },
              {
                name: "RUSTY CORNWELL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-8-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 8",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TOM GANN",
                party: "REPUBLICAN",
              },
              {
                name: "TODD RICE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-86-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 86",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DAVID HARDIN",
                party: "REPUBLICAN",
              },
              {
                name: "RYAN MARTIN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JENNY PEPER",
                party: "REPUBLICAN",
              },
              {
                name: "YOLANDA THOMPSON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TOBY GRAVES",
                party: "REPUBLICAN",
              },
              {
                name: "MATT SWIFT",
                party: "REPUBLICAN",
              },
              {
                name: "FRANK R. PHILLIPS",
                party: "REPUBLICAN",
              },
              {
                name: "DENNIS TROYER",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "MURRAY": {
    county: "MURRAY",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-20-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES R. GILMARTIN",
                party: "REPUBLICAN",
              },
              {
                name: "MELISSA HANDKE",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "MUSKOGEE": {
    county: "MUSKOGEE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-14-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 14",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS SNEED",
                party: "REPUBLICAN",
              },
              {
                name: "ROY TIMMONS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "REYNA BENAVIDES",
                party: "REPUBLICAN",
              },
              {
                name: "BILLY DELAY",
                party: "REPUBLICAN",
              },
              {
                name: "JEFFREY SMITH",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GREG TAYLOR",
                party: "REPUBLICAN",
              },
              {
                name: "MATT MUSKRAT",
                party: "REPUBLICAN",
              },
              {
                name: "STEVE GOAD",
                party: "REPUBLICAN",
              },
              {
                name: "KEN DOKE",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KENNY PAYNE",
                party: "REPUBLICAN",
              },
              {
                name: "CHADWIC COCHRAN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "NOBLE": {
    county: "NOBLE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-20-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARK LEMARR",
                party: "REPUBLICAN",
              },
              {
                name: "CHUCK HALL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-35-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 35",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN WRIGHT",
                party: "REPUBLICAN",
              },
              {
                name: "DILLON TRAVIS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-38-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRIAN HOBBS",
                party: "REPUBLICAN",
              },
              {
                name: "DANIELLE DETERDING",
                party: "REPUBLICAN",
              },
              {
                name: "MICHAEL NORMAN",
                party: "REPUBLICAN",
              },
              {
                name: "SUZANNE CALLIHAN",
                party: "REPUBLICAN",
              },
              {
                name: "MADISON BOLAY",
                party: "REPUBLICAN",
              },
              {
                name: "JIM NEAL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HUGHES",
                party: "REPUBLICAN",
              },
              {
                name: "DARRELL NEWELL",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-district-judge-district-8-office-1",
            title: "FOR DISTRICT JUDGE - DISTRICT 8, OFFICE 1",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ROB DAVIS",
                party: "NONPARTISAN",
              },
              {
                name: "SCOTT LOFTIS",
                party: "NONPARTISAN",
              },
              {
                name: "LEE TURNER",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "NOWATA": {
    county: "NOWATA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-6-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 6",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "AMBER DAWN ELLIS",
                party: "REPUBLICAN",
              },
              {
                name: "ELI RICHARD",
                party: "REPUBLICAN",
              },
              {
                name: "RUSTY CORNWELL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-10-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 10",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAKE BAIR",
                party: "REPUBLICAN",
              },
              {
                name: "JUDD STROM",
                party: "REPUBLICAN",
              },
              {
                name: "CUEN FUNDERBURKE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS CLOUSE",
                party: "REPUBLICAN",
              },
              {
                name: "ARTHUR DEVON FRIDDLE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOHN DAVID HULTZ",
                party: "REPUBLICAN",
              },
              {
                name: "PAUL CRUPPER",
                party: "REPUBLICAN",
              },
              {
                name: "ELIZABETH PRAVEL",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-associate-district-judge-nowata-county",
            title: "FOR ASSOCIATE DISTRICT JUDGE - NOWATA COUNTY",
            instruction: "Vote for One",
            candidates: [
              {
                name: "LINDA MICHELLE BRANSTETTER",
                party: "NONPARTISAN",
              },
              {
                name: "TANAYIA HUBLER",
                party: "NONPARTISAN",
              },
              {
                name: "JAMES M PFEFFER",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "OKFUSKEE": {
    county: "OKFUSKEE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-18-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 18",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SHELTON FOSTER",
                party: "REPUBLICAN",
              },
              {
                name: "DAVID SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "PAMELA GORDON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RANDY STUBBLEFIELD",
                party: "REPUBLICAN",
              },
              {
                name: "HEATH HENRY",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES YANDELL",
                party: "REPUBLICAN",
              },
              {
                name: "MCCOY JOSLIN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "OKLAHOMA": {
    county: "OKLAHOMA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-05-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 05",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TREY MARTIN",
                party: "DEMOCRAT",
              },
              {
                name: "JENA NELSON",
                party: "DEMOCRAT",
                website: "https://jenanelson.com/",
              },
            ],
            debates: [
              { label: "2026 Democratic 5th Congressional District Forum", url: "https://www.youtube.com/watch?v=IF4zkyym8FA" },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-17",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 17",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ABBY THOMPSON",
                party: "NONPARTISAN",
              },
              {
                name: "STEVE KING",
                party: "NONPARTISAN",
              },
              {
                name: "RANDY CORNELIUS",
                party: "NONPARTISAN",
              },
              {
                name: "JUSTIN FREELAND WOOD",
                party: "NONPARTISAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-18-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 18",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TYLER HERRING",
                party: "REPUBLICAN",
              },
              {
                name: "JACK STEWART",
                party: "REPUBLICAN",
              },
              {
                name: "MISTY SHANNON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-28-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 28",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GRANT GREEN",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERT TRIMBLE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-42-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 42",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRENDA STANLEY",
                party: "REPUBLICAN",
              },
              {
                name: "MALANA BRACHT",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-31-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 31",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KARMIN GRIDER",
                party: "REPUBLICAN",
              },
              {
                name: "COLLIN DUEL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-36-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 36",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOE SARGE NELSON",
                party: "REPUBLICAN",
              },
              {
                name: "JENNI WHITE",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN GEORGE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-39-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 39",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERICK HARRIS",
                party: "REPUBLICAN",
              },
              {
                name: "RONDA PETERSON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-54-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 54",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "HEATH KUFAHL",
                party: "REPUBLICAN",
              },
              {
                name: "ALEXANDER TORVI",
                party: "REPUBLICAN",
              },
              {
                name: "PHILIP C. LANCASTER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-81-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 81",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MEGAN HORNBEEK ALLEN",
                party: "DEMOCRAT",
              },
              {
                name: "JASON LANKFORD",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-state-representative-district-81-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 81",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RUSTY RAINS",
                party: "REPUBLICAN",
              },
              {
                name: "AMBER CANARY",
                party: "REPUBLICAN",
              },
              {
                name: "TROY TALLEY",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-85-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 85",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ESTEFANIA GRUENSTEIN",
                party: "DEMOCRAT",
              },
              {
                name: "CHELSEY BRANHAM",
                party: "DEMOCRAT",
              },
              {
                name: "BRAXTON BANKS",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-state-representative-district-92-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 92",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SAM WARGIN GRIMALDO",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-state-representative-district-92",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 92",
            instruction: "Vote for One",
            candidates: [
              {
                name: "VICKI RUTH WERNEKE",
                party: "NONPARTISAN",
              },
              {
                name: "SAM WARGIN GRIMALDO",
                party: "NONPARTISAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-92-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 92",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "VICKI RUTH WERNEKE",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-state-representative-district-95-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 95",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRENT RINEHART",
                party: "REPUBLICAN",
              },
              {
                name: "MAX WOLFLEY",
                party: "REPUBLICAN",
              },
              {
                name: "ALEXANDER YODER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-96-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 96",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ASHTYN SMITH",
                party: "DEMOCRAT",
              },
              {
                name: "PHILLIP MASSAD",
                party: "DEMOCRAT",
              },
              {
                name: "AUSTIN REAMS",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-state-representative-district-96-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 96",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOHN BACHMAN",
                party: "REPUBLICAN",
              },
              {
                name: "PRESTON STINSON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-97-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 97",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ALETIA HAYNES TIMMONS",
                party: "DEMOCRAT",
              },
              {
                name: "CHIMERE GRANT",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-state-representative-district-99-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 99",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CARLOS M. ROBINSON",
                party: "DEMOCRAT",
              },
              {
                name: "HERSCHEL L. BROWN",
                party: "DEMOCRAT",
              },
              {
                name: "DERRICK SIER",
                party: "DEMOCRAT",
              },
              {
                name: "STEVE DAVIS",
                party: "DEMOCRAT",
              },
              {
                name: "ALAN WASHINGTON",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "LARRY STEIN",
                party: "REPUBLICAN",
              },
              {
                name: "FERLIN KEARNS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-democrat",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "HARRY MEISTER",
                party: "DEMOCRAT",
              },
              {
                name: "KAYLA BAKER",
                party: "DEMOCRAT",
              },
              {
                name: "MARK FAULK",
                party: "DEMOCRAT",
              },
              {
                name: "JASON LOWE",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-democrat",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "THOMAS GUILD",
                party: "DEMOCRAT",
              },
              {
                name: "COREY WINSTON",
                party: "DEMOCRAT",
              },
              {
                name: "JENNIFER MAYO",
                party: "DEMOCRAT",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "THOMAS GERALD PARKHURST",
                party: "REPUBLICAN",
              },
              {
                name: "WENDY JO HAMPTON",
                party: "REPUBLICAN",
              },
              {
                name: "ALEX WARREN",
                party: "REPUBLICAN",
              },
              {
                name: "SCOTT WESLEY ERMIS",
                party: "REPUBLICAN",
              },
              {
                name: "JESSICA CLAYTON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "OKMULGEE": {
    county: "OKMULGEE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-24-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 24",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS BANNING",
                party: "REPUBLICAN",
                website: "https://www.banningforoklahoma.com",
              },
              {
                name: "CASEY FIXICO SUTTERFIELD",
                party: "REPUBLICAN",
                website: "https://sites.google.com/view/caseyfixicosutterfield",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERNIE FERREIRA",
                party: "REPUBLICAN",
              },
              {
                name: "BRECK TAYLOR",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MICHAEL WALLACE",
                party: "REPUBLICAN",
              },
              {
                name: "STEVE SANFORD",
                party: "REPUBLICAN",
              },
              {
                name: "BRANDON ENGLAND",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "OSAGE": {
    county: "OSAGE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-10-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 10",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JADAN A. TERRAZAS",
                party: "REPUBLICAN",
                website: "https://jadanterrazas.com",
              },
              {
                name: "BILL COLEMAN",
                party: "REPUBLICAN",
                website: "https://colemanforoklahoma.com",
              },
            ],
            debates: [
              { label: "2026 Oklahoma State Senate District 10 GOP Candidate Forum", url: "https://www.youtube.com/watch?v=vooeJWp6o_A" },
              { label: "Bill Coleman interview", url: "https://www.youtube.com/watch?v=A_IiBQuZzS8" },
            ],
          },
          {
            id: "for-state-representative-district-10-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 10",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAKE BAIR",
                party: "REPUBLICAN",
              },
              {
                name: "JUDD STROM",
                party: "REPUBLICAN",
              },
              {
                name: "CUEN FUNDERBURKE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-35-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 35",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN WRIGHT",
                party: "REPUBLICAN",
              },
              {
                name: "DILLON TRAVIS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-37-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 37",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SPENCER GRACE",
                party: "REPUBLICAN",
              },
              {
                name: "JEREMY SACKET",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-73-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 73",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RON STEWART",
                party: "DEMOCRAT",
                website: "https://www.stewartforok.com",
              },
              {
                name: "ED ROSS",
                party: "DEMOCRAT",
                website: "https://www.rossfordistrict73.com",
              },
            ],
          },
          {
            id: "for-county-treasurer-republican",
            title: "FOR COUNTY TREASURER",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SHAWNA MYERS",
                party: "REPUBLICAN",
              },
              {
                name: "BRIDGET WEST",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHAD RAY",
                party: "REPUBLICAN",
              },
              {
                name: "CHARLIE EDWARD CARTWRIGHT",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "OTTAWA": {
    county: "OTTAWA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JR NEEDHAM",
                party: "REPUBLICAN",
              },
              {
                name: "MIKE FURNAS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "PAWNEE": {
    county: "PAWNEE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-20-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARK LEMARR",
                party: "REPUBLICAN",
              },
              {
                name: "CHUCK HALL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-35-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 35",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN WRIGHT",
                party: "REPUBLICAN",
              },
              {
                name: "DILLON TRAVIS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "PAYNE": {
    county: "PAYNE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-20-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 20",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARK LEMARR",
                party: "REPUBLICAN",
              },
              {
                name: "CHUCK HALL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-32-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 32",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JACK VAUGHAN",
                party: "REPUBLICAN",
              },
              {
                name: "JIM SHAW",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-33-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 33",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "B. J. ROBERSON",
                party: "REPUBLICAN",
              },
              {
                name: "MOLLY JENKINS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-35-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 35",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN WRIGHT",
                party: "REPUBLICAN",
              },
              {
                name: "DILLON TRAVIS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ZACHARY CAVETT",
                party: "REPUBLICAN",
              },
              {
                name: "RAY HARPER",
                party: "REPUBLICAN",
              },
              {
                name: "JACOB PRESUHN",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RHONDA MARKUM",
                party: "REPUBLICAN",
              },
              {
                name: "CLAYTON ESTUS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "PITTSBURG": {
    county: "PITTSBURG",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-18-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 18",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES M. GREEN",
                party: "REPUBLICAN",
              },
              {
                name: "J. B. MILLER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-18-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 18",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SHELTON FOSTER",
                party: "REPUBLICAN",
              },
              {
                name: "DAVID SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "PAMELA GORDON",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-sheriff-republican-unexpired-term",
            title: "FOR COUNTY SHERIFF - REPUBLICAN (UNEXPIRED TERM)",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANKIE MCCLENDON",
                party: "NONPARTISAN",
              },
              {
                name: "RICHARD RICK DOMINIC",
                party: "NONPARTISAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TRENT MYERS",
                party: "REPUBLICAN",
              },
              {
                name: "ROSS SELMAN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "PONTOTOC": {
    county: "PONTOTOC",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "POTTAWATOMIE": {
    county: "POTTAWATOMIE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-05-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 05",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TREY MARTIN",
                party: "DEMOCRAT",
              },
              {
                name: "JENA NELSON",
                party: "DEMOCRAT",
                website: "https://jenanelson.com/",
              },
            ],
            debates: [
              { label: "2026 Democratic 5th Congressional District Forum", url: "https://www.youtube.com/watch?v=IF4zkyym8FA" },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-23-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 23",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DANIEL MCCLURE",
                party: "REPUBLICAN",
              },
              {
                name: "ADAM PANTER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-17",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 17",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ABBY THOMPSON",
                party: "NONPARTISAN",
              },
              {
                name: "STEVE KING",
                party: "NONPARTISAN",
              },
              {
                name: "RANDY CORNELIUS",
                party: "NONPARTISAN",
              },
              {
                name: "JUSTIN FREELAND WOOD",
                party: "NONPARTISAN",
              },
            ],
          },
          {
            id: "for-state-senator-district-28-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 28",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GRANT GREEN",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERT TRIMBLE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-27-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 27",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DANNY STERLING",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERTA LEWIS",
                party: "REPUBLICAN",
              },
              {
                name: "SHONEY QUALLS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "PHIL SOLINGER SR.",
                party: "REPUBLICAN",
              },
              {
                name: "MELISSA DENNIS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TANNER SILAS",
                party: "REPUBLICAN",
              },
              {
                name: "CHAD EDWARD VOTAW",
                party: "REPUBLICAN",
              },
              {
                name: "ANGELA WILLIAMS",
                party: "REPUBLICAN",
              },
              {
                name: "DELL KERBS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "city-of-shawnee",
        heading: "CITY OF SHAWNEE",
        races: [
          {
            id: "for-councilmember-ward-one-commissioner",
            title: "FOR COUNCILMEMBER - WARD ONE COMMISSIONER",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DANIEL J. MATTHEWS",
                party: "NONPARTISAN",
              },
              {
                name: "KENNETH R. CRAWFORD",
                party: "NONPARTISAN",
              },
            ],
          },
          {
            id: "for-councilmember-ward-five-commissioner",
            title: "FOR COUNCILMEMBER - WARD FIVE COMMISSIONER",
            instruction: "Vote for One",
            candidates: [
              {
                name: "LEVI ANNIS",
                party: "NONPARTISAN",
              },
              {
                name: "JOEY WARD",
                party: "NONPARTISAN",
              },
              {
                name: "JOHNNA ERVIN",
                party: "NONPARTISAN",
              },
            ],
          },
          {
            id: "for-councilmember-ward-six-commissioner",
            title: "FOR COUNCILMEMBER - WARD SIX COMMISSIONER",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHARLES CRANSTON",
                party: "NONPARTISAN",
              },
              {
                name: "LAUREN RICHTER",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "PUSHMATAHA": {
    county: "PUSHMATAHA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-19-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 19",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MICHAEL A. BRITTINGHAM",
                party: "REPUBLICAN",
              },
              {
                name: "ANTHONY DEVORE",
                party: "REPUBLICAN",
              },
              {
                name: "DEREK PORTER",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DONNIE BROWN",
                party: "REPUBLICAN",
              },
              {
                name: "MIKE BERRYHILL",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "ROGER MILLS": {
    county: "ROGER MILLS",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RUSTY CONARD MILLER",
                party: "REPUBLICAN",
              },
              {
                name: "MIKE BAGZIS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "ROGERS": {
    county: "ROGERS",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-01-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 01",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TODD WOODS",
                party: "REPUBLICAN",
                website: "https://woods4congress.com/",
              },
              {
                name: "NANCY DYSON",
                party: "REPUBLICAN",
              },
              {
                name: "PAUL ROYSE",
                party: "REPUBLICAN",
                website: "https://paulroyse.com",
              },
              {
                name: "COURTNEY GILL",
                party: "REPUBLICAN",
                website: "https://okgill.com/",
              },
              {
                name: "JACKSON LAHMEYER",
                party: "REPUBLICAN",
                website: "https://www.jacksonlahmeyer.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116534955446755104" },
                ],
              },
              {
                name: "MARK TEDFORD",
                party: "REPUBLICAN",
                website: "https://www.tedfordforcongress.com/",
                endorsements: [
                  { name: "Deab Endorsed" },
                ],
              },
              {
                name: "KIM DAVID",
                party: "REPUBLICAN",
                website: "https://votekimdavid.com",
              },
              {
                name: "JED COCHRAN",
                party: "REPUBLICAN",
                website: "https://jedcochran.com",
              },
              {
                name: "KELLY B. WALSH",
                party: "REPUBLICAN",
                website: "https://www.walsh2026.com/",
              },
              {
                name: "DAN ROONEY",
                party: "REPUBLICAN",
              },
              {
                name: "NATHAN BUTTERFIELD",
                party: "REPUBLICAN",
                website: "https://nathanbutterfield.com",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-2-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 2",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ALLY SEIFRIED",
                party: "REPUBLICAN",
                website: "https://allyseifried.com",
              },
              {
                name: "PAYTON PEPIN",
                party: "REPUBLICAN",
                website: "https://www.pepinforsenate.com",
              },
            ],
            debates: [
              { label: "Cherokee 411 interview with Sen. Ally Seifried (District 2)", url: "https://www.youtube.com/watch?v=18IuLEizOEc" },
            ],
          },
          {
            id: "for-state-representative-district-6-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 6",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "AMBER DAWN ELLIS",
                party: "REPUBLICAN",
              },
              {
                name: "ELI RICHARD",
                party: "REPUBLICAN",
              },
              {
                name: "RUSTY CORNWELL",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-8-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 8",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TOM GANN",
                party: "REPUBLICAN",
              },
              {
                name: "TODD RICE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-9-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 9",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DEBBIE LONG",
                party: "REPUBLICAN",
                website: "https://www.longforstatehouse.com",
              },
              {
                name: "CRYSTAL CAMPBELL",
                party: "REPUBLICAN",
                website: "https://votecrystalcampbell.com",
              },
              {
                name: "SCOTTY STOKES",
                party: "REPUBLICAN",
                website: "https://scottystokes.com",
              },
            ],
          },
          {
            id: "for-state-representative-district-74-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 74",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN W. NORWOOD",
                party: "REPUBLICAN",
                website: "https://www.norwoodforok.com",
              },
              {
                name: "SHEILA VANCUREN",
                party: "REPUBLICAN",
                website: "https://votevancuren.com",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRAD PEIXOTTO",
                party: "REPUBLICAN",
              },
              {
                name: "LANE A. CARTER",
                party: "REPUBLICAN",
              },
              {
                name: "ERIC T LONG",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DARREN ANDREWS",
                party: "REPUBLICAN",
              },
              {
                name: "TEDDY SQUEAK NOLAND",
                party: "REPUBLICAN",
              },
              {
                name: "LANE BROWN",
                party: "REPUBLICAN",
              },
              {
                name: "DUANE BEAMER",
                party: "REPUBLICAN",
              },
              {
                name: "KENNY BRESHEARS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      {
        id: "town-of-inola",
        heading: "TOWN OF INOLA",
        races: [
          {
            id: "for-board-of-trustees-unexpired-term",
            title: "FOR BOARD OF TRUSTEES (UNEXPIRED TERM)",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH EASTIN",
                party: "NONPARTISAN",
              },
              {
                name: "JASON GRAHAM",
                party: "NONPARTISAN",
              },
              {
                name: "TRENT BYNUM",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "SEMINOLE": {
    county: "SEMINOLE",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-05-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 05",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TREY MARTIN",
                party: "DEMOCRAT",
              },
              {
                name: "JENA NELSON",
                party: "DEMOCRAT",
                website: "https://jenanelson.com/",
              },
            ],
            debates: [
              { label: "2026 Democratic 5th Congressional District Forum", url: "https://www.youtube.com/watch?v=IF4zkyym8FA" },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-28-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 28",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GRANT GREEN",
                party: "REPUBLICAN",
              },
              {
                name: "ROBERT TRIMBLE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BUD MOORE",
                party: "REPUBLICAN",
              },
              {
                name: "GARY CHOATE",
                party: "REPUBLICAN",
              },
              {
                name: "RUSSELL YOTT",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN GLOVER",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEITH JENNINGS",
                party: "REPUBLICAN",
              },
              {
                name: "MANUEL SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "TARAN FINDLEY",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "SEQUOYAH": {
    county: "SEQUOYAH",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-4-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 4",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KENNY SMITH",
                party: "REPUBLICAN",
              },
              {
                name: "TOM WOODS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRANDY ALLEN",
                party: "REPUBLICAN",
              },
              {
                name: "ROGER CRAWFORD",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOEL STUMP",
                party: "REPUBLICAN",
              },
              {
                name: "JASON BROOKS",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "STEPHENS": {
    county: "STEPHENS",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-51-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 51",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "COLE STEVENS",
                party: "REPUBLICAN",
              },
              {
                name: "CODY ELLIOTT",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS BILLINGS",
                party: "REPUBLICAN",
              },
              {
                name: "MACKENZIE PAYNE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-treasurer-republican",
            title: "FOR COUNTY TREASURER",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "AMANDA G. BRADY",
                party: "REPUBLICAN",
              },
              {
                name: "DEBBIE BURDEN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-district-judge-district-5-office-1",
            title: "FOR DISTRICT JUDGE - DISTRICT 5, OFFICE 1",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NEIL WEST",
                party: "NONPARTISAN",
              },
              {
                name: "STEVEN W. CROW",
                party: "NONPARTISAN",
              },
              {
                name: "TOMMY SIMS",
                party: "NONPARTISAN",
              },
              {
                name: "CHRISTINE GALBRAITH",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "TEXAS": {
    county: "TEXAS",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOHN ALLEN HUMBLE",
                party: "REPUBLICAN",
              },
              {
                name: "DAVID JOHNSON",
                party: "REPUBLICAN",
              },
              {
                name: "DARRELL EDWARDS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "LEVI BICKFORD",
                party: "REPUBLICAN",
              },
              {
                name: "RONNIE BELLAR",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "TILLMAN": {
    county: "TILLMAN",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-04-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEFF PIXLEY",
                party: "DEMOCRAT",
                website: "https://pixleyforcongress.com/",
              },
              {
                name: "MITCHELL JACOB",
                party: "DEMOCRAT",
                website: "https://www.mitchelljacob.com/",
              },
            ],
            debates: [
              { label: "OK CD4 Candidate Forum between Jeff Pixley and Mitchell Jacob", url: "https://www.youtube.com/watch?v=l9RNmi9ilSc" },
            ],
          },
          {
            id: "for-united-states-representative-district-04-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 04",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARCIE EVERHART",
                party: "REPUBLICAN",
                website: "https://everhartforcongress.com/",
              },
              {
                name: "TOM COLE",
                party: "REPUBLICAN",
                website: "https://tomcoleforcongress.com/",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-38-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK VERNON",
                party: "REPUBLICAN",
              },
              {
                name: "BARRY DWAINE CHRISTIAN",
                party: "REPUBLICAN",
              },
              {
                name: "JOE B. BUCHANAN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JASON HERRING",
                party: "REPUBLICAN",
              },
              {
                name: "MARK HUFF",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "TULSA": {
    county: "TULSA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-01-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 01",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TODD WOODS",
                party: "REPUBLICAN",
                website: "https://woods4congress.com/",
              },
              {
                name: "NANCY DYSON",
                party: "REPUBLICAN",
              },
              {
                name: "PAUL ROYSE",
                party: "REPUBLICAN",
                website: "https://paulroyse.com",
              },
              {
                name: "COURTNEY GILL",
                party: "REPUBLICAN",
                website: "https://okgill.com/",
              },
              {
                name: "JACKSON LAHMEYER",
                party: "REPUBLICAN",
                website: "https://www.jacksonlahmeyer.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116534955446755104" },
                ],
              },
              {
                name: "MARK TEDFORD",
                party: "REPUBLICAN",
                website: "https://www.tedfordforcongress.com/",
                endorsements: [
                  { name: "Deab Endorsed" },
                ],
              },
              {
                name: "KIM DAVID",
                party: "REPUBLICAN",
                website: "https://votekimdavid.com",
              },
              {
                name: "JED COCHRAN",
                party: "REPUBLICAN",
                website: "https://jedcochran.com",
              },
              {
                name: "KELLY B. WALSH",
                party: "REPUBLICAN",
                website: "https://www.walsh2026.com/",
              },
              {
                name: "DAN ROONEY",
                party: "REPUBLICAN",
              },
              {
                name: "NATHAN BUTTERFIELD",
                party: "REPUBLICAN",
                website: "https://nathanbutterfield.com",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-district-attorney-district-14-republican",
            title: "FOR DISTRICT ATTORNEY",
            subtitle: "DISTRICT 14",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "STEVE KUNZWEILER",
                party: "REPUBLICAN",
                website: "https://www.stevek4da.com/",
              },
              {
                name: "COLLEEN MCCARTY",
                party: "REPUBLICAN",
                website: "https://www.mccartyforda.com/",
              },
            ],
            debates: [
              { label: "Tulsa Candidate Forum: Attorney General & District Attorney", url: "https://www.youtube.com/watch?v=YP64eQFJfdo" },
              { label: "Tulsa County District Attorney Debate and Attorney General Forum", url: "https://www.youtube.com/watch?v=JgghpNcYUz0" },
              { label: "Tulsa County District Attorney Debate Recap", url: "https://www.youtube.com/watch?v=19DexE-eU7I" },
              { label: "Tulsa County District Attorney Republican Primary Debate", url: "https://www.youtube.com/watch?v=1Ql_h-bhDo8" },
            ],
          },
          {
            id: "for-state-senator-district-2-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 2",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ALLY SEIFRIED",
                party: "REPUBLICAN",
                website: "https://allyseifried.com",
              },
              {
                name: "PAYTON PEPIN",
                party: "REPUBLICAN",
                website: "https://www.pepinforsenate.com",
              },
            ],
            debates: [
              { label: "Cherokee 411 interview with Sen. Ally Seifried (District 2)", url: "https://www.youtube.com/watch?v=18IuLEizOEc" },
            ],
          },
          {
            id: "for-state-senator-district-10-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 10",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JADAN A. TERRAZAS",
                party: "REPUBLICAN",
                website: "https://jadanterrazas.com",
              },
              {
                name: "BILL COLEMAN",
                party: "REPUBLICAN",
                website: "https://colemanforoklahoma.com",
              },
            ],
            debates: [
              { label: "2026 Oklahoma State Senate District 10 GOP Candidate Forum", url: "https://www.youtube.com/watch?v=vooeJWp6o_A" },
              { label: "Bill Coleman interview", url: "https://www.youtube.com/watch?v=A_IiBQuZzS8" },
            ],
          },
          {
            id: "for-state-senator-district-12-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 12",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TODD GOLLIHARE",
                party: "REPUBLICAN",
                website: "https://gollihare.com",
              },
              {
                name: "WM CRAIG STUMP",
                party: "REPUBLICAN",
                website: "https://www.craigstump2026.com",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: State Senator Todd Gollihare", url: "https://www.youtube.com/watch?v=TizAaayqRkw" },
            ],
          },
          {
            id: "for-state-senator-district-34-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 34",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DANA PRIETO",
                party: "REPUBLICAN",
                website: "https://danaprietoforoksenate.com",
              },
              {
                name: "KENT TAYLOR",
                party: "REPUBLICAN",
                website: "http://kenttaylorok.com",
              },
              {
                name: "AARON FORST",
                party: "REPUBLICAN",
              },
              {
                name: "BRENT DRISKILL",
                party: "REPUBLICAN",
                website: "https://brentdriskill.com",
              },
            ],
            debates: [
              { label: "Owasso Live: Aaron Forst Returns (Oklahoma Senate District 34)", url: "https://www.youtube.com/watch?v=dv1vRQ4ci5w" },
              { label: "Owasso Live: Aaron Forst Oklahoma Senate Candidate District 34", url: "https://www.youtube.com/watch?v=2_FPx63Kd58" },
            ],
          },
          {
            id: "for-state-senator-district-36-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 36",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "PHILIP A. WEILAND",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN HASTE",
                party: "REPUBLICAN",
                website: "https://hasteforsenate.com",
              },
            ],
            debates: [
              { label: "Senator John Haste interview", url: "https://www.youtube.com/watch?v=_LtPlUCXN-Y" },
            ],
          },
          {
            id: "for-state-representative-district-9-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 9",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DEBBIE LONG",
                party: "REPUBLICAN",
                website: "https://www.longforstatehouse.com",
              },
              {
                name: "CRYSTAL CAMPBELL",
                party: "REPUBLICAN",
                website: "https://votecrystalcampbell.com",
              },
              {
                name: "SCOTTY STOKES",
                party: "REPUBLICAN",
                website: "https://scottystokes.com",
              },
            ],
          },
          {
            id: "for-state-representative-district-11-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 11",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOHN B. KANE",
                party: "REPUBLICAN",
                website: "https://johnkaneforok.com",
              },
              {
                name: "WENDI STEARMAN",
                party: "REPUBLICAN",
                website: "https://stearmanforhouse.vote",
              },
            ],
          },
          {
            id: "for-state-representative-district-24-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 24",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS BANNING",
                party: "REPUBLICAN",
                website: "https://www.banningforoklahoma.com",
              },
              {
                name: "CASEY FIXICO SUTTERFIELD",
                party: "REPUBLICAN",
                website: "https://sites.google.com/view/caseyfixicosutterfield",
              },
            ],
          },
          {
            id: "for-state-representative-district-29-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 29",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRIAN JACKSON",
                party: "REPUBLICAN",
                website: "https://www.brianjacksontakesaction.com",
              },
              {
                name: "KYLE HILBERT",
                party: "REPUBLICAN",
                website: "https://kylehilbert.com",
              },
            ],
          },
          {
            id: "for-state-representative-district-69-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 69",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SHEILA DILLS",
                party: "REPUBLICAN",
                website: "https://www.votesheiladills.com",
              },
              {
                name: "ANGELA STROHM",
                party: "REPUBLICAN",
                website: "https://www.angelastrohm.com",
              },
              {
                name: "CODY NICHOLS",
                party: "REPUBLICAN",
              },
              {
                name: "CARRIE DEWEESE",
                party: "REPUBLICAN",
                website: "https://www.carrieforthehouse.com",
              },
            ],
            debates: [
              { label: "Meet Sheila Dills, Republican for House District 69", url: "https://www.youtube.com/watch?v=pN5N5uzgdW4" },
            ],
          },
          {
            id: "for-state-representative-district-73-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 73",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RON STEWART",
                party: "DEMOCRAT",
                website: "https://www.stewartforok.com",
              },
              {
                name: "ED ROSS",
                party: "DEMOCRAT",
                website: "https://www.rossfordistrict73.com",
              },
            ],
          },
          {
            id: "for-state-representative-district-74-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 74",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KEVIN W. NORWOOD",
                party: "REPUBLICAN",
                website: "https://www.norwoodforok.com",
              },
              {
                name: "SHEILA VANCUREN",
                party: "REPUBLICAN",
                website: "https://votevancuren.com",
              },
            ],
          },
          {
            id: "for-state-representative-district-77-democrat",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 77",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KRISTINA GABRIEL",
                party: "DEMOCRAT",
                website: "https://kristinaforoklahoma.com",
              },
              {
                name: "JOHN WALDRON",
                party: "DEMOCRAT",
                website: "https://www.waldron4ok.com",
              },
            ],
            debates: [
              { label: "John Waldron: The Heart of Oklahoma's Education Crisis", url: "https://www.youtube.com/watch?v=OxOnRFN-nsw" },
            ],
          },
          {
            id: "for-state-representative-district-98-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 98",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GABE WOOLLEY",
                party: "REPUBLICAN",
                website: "https://www.woolleyforstatehouse.com",
              },
              {
                name: "DEAN DAVIS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-treasurer-republican",
            title: "FOR COUNTY TREASURER",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BRANDON L SHREFFLER",
                party: "REPUBLICAN",
                website: "https://www.shrefflerfortulsa.com/",
              },
              {
                name: "JOHN M. FOTHERGILL",
                party: "REPUBLICAN",
                website: "https://votejohnfothergill.com/",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "IDRIS SHELBY",
                party: "REPUBLICAN",
                website: "https://idrisshelby.com",
              },
              {
                name: "STAN SALLEE",
                party: "REPUBLICAN",
                website: "https://stansallee.com",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-district-judge-district-14-office-4",
            title: "FOR DISTRICT JUDGE - DISTRICT 14, OFFICE 4",
            instruction: "Vote for One",
            candidates: [
              {
                name: "PHILLIP PEAK",
                party: "NONPARTISAN",
                website: "https://peakforjudge.com",
              },
              {
                name: "DUSTIN ALLEN",
                party: "NONPARTISAN",
                website: "https://dustinallenforjudge.com",
              },
              {
                name: "LORETTA RADFORD",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "WAGONER": {
    county: "WAGONER",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-01-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 01",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TODD WOODS",
                party: "REPUBLICAN",
                website: "https://woods4congress.com/",
              },
              {
                name: "NANCY DYSON",
                party: "REPUBLICAN",
              },
              {
                name: "PAUL ROYSE",
                party: "REPUBLICAN",
                website: "https://paulroyse.com",
              },
              {
                name: "COURTNEY GILL",
                party: "REPUBLICAN",
                website: "https://okgill.com/",
              },
              {
                name: "JACKSON LAHMEYER",
                party: "REPUBLICAN",
                website: "https://www.jacksonlahmeyer.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116534955446755104" },
                ],
              },
              {
                name: "MARK TEDFORD",
                party: "REPUBLICAN",
                website: "https://www.tedfordforcongress.com/",
                endorsements: [
                  { name: "Deab Endorsed" },
                ],
              },
              {
                name: "KIM DAVID",
                party: "REPUBLICAN",
                website: "https://votekimdavid.com",
              },
              {
                name: "JED COCHRAN",
                party: "REPUBLICAN",
                website: "https://jedcochran.com",
              },
              {
                name: "KELLY B. WALSH",
                party: "REPUBLICAN",
                website: "https://www.walsh2026.com/",
              },
              {
                name: "DAN ROONEY",
                party: "REPUBLICAN",
              },
              {
                name: "NATHAN BUTTERFIELD",
                party: "REPUBLICAN",
                website: "https://nathanbutterfield.com",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-36-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 36",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "PHILIP A. WEILAND",
                party: "REPUBLICAN",
              },
              {
                name: "JOHN HASTE",
                party: "REPUBLICAN",
                website: "https://hasteforsenate.com",
              },
            ],
            debates: [
              { label: "Senator John Haste interview", url: "https://www.youtube.com/watch?v=_LtPlUCXN-Y" },
            ],
          },
          {
            id: "for-state-representative-district-8-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 8",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TOM GANN",
                party: "REPUBLICAN",
              },
              {
                name: "TODD RICE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-12-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 12",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "MARK CHAPMAN",
                party: "REPUBLICAN",
              },
              {
                name: "SANDY HODGES",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-14-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 14",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS SNEED",
                party: "REPUBLICAN",
              },
              {
                name: "ROY TIMMONS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-98-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 98",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "GABE WOOLLEY",
                party: "REPUBLICAN",
                website: "https://www.woolleyforstatehouse.com",
              },
              {
                name: "DEAN DAVIS",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAMES E HANNING",
                party: "REPUBLICAN",
              },
              {
                name: "JOSH STENROS",
                party: "REPUBLICAN",
              },
              {
                name: "TERRY OARD",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DENNIS MCCOLLOUGH",
                party: "REPUBLICAN",
              },
              {
                name: "DONNIE YOCHAM",
                party: "REPUBLICAN",
              },
              {
                name: "JOHNNY WALKER",
                party: "REPUBLICAN",
              },
              {
                name: "DAVID GREENO",
                party: "REPUBLICAN",
              },
              {
                name: "PATRICK SAMPSON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "WASHINGTON": {
    county: "WASHINGTON",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-02-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "ERIK TERWEY",
                party: "DEMOCRAT",
                website: "https://www.terweyforcongress.com/",
              },
              {
                name: "BRANDON WADE",
                party: "DEMOCRAT",
                website: "https://brandon4congress.com/",
              },
            ],
            debates: [
              { label: "OK CD2 Live Candidate Debate with Erik Terwey & Brandon Wade", url: "https://www.youtube.com/watch?v=D6dWeU3-JCs" },
            ],
          },
          {
            id: "for-united-states-representative-district-02-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 02",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOSH BRECHEEN",
                party: "REPUBLICAN",
                website: "https://joshbrecheen.com/",
              },
              {
                name: "WILL WEBB",
                party: "REPUBLICAN",
                website: "https://willwebbforok.wixsite.com/willwebbforok-1",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-representative-district-10-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 10",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JAKE BAIR",
                party: "REPUBLICAN",
              },
              {
                name: "JUDD STROM",
                party: "REPUBLICAN",
              },
              {
                name: "CUEN FUNDERBURKE",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-state-representative-district-11-republican",
            title: "FOR STATE REPRESENTATIVE",
            subtitle: "DISTRICT 11",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOHN B. KANE",
                party: "REPUBLICAN",
                website: "https://johnkaneforok.com",
              },
              {
                name: "WENDI STEARMAN",
                party: "REPUBLICAN",
                website: "https://stearmanforhouse.vote",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "CHRIS STANDRIDGE",
                party: "REPUBLICAN",
              },
              {
                name: "STEVE CAMPBELL",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "WASHITA": {
    county: "WASHITA",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-state-senator-district-38-republican",
            title: "FOR STATE SENATOR",
            subtitle: "DISTRICT 38",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "RICK VERNON",
                party: "REPUBLICAN",
              },
              {
                name: "BARRY DWAINE CHRISTIAN",
                party: "REPUBLICAN",
              },
              {
                name: "JOE B. BUCHANAN",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-assessor-republican",
            title: "FOR COUNTY ASSESSOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "KOLBY DOWELL",
                party: "REPUBLICAN",
              },
              {
                name: "RUSTY BOOKOUT",
                party: "REPUBLICAN",
              },
            ],
          },
          {
            id: "for-county-commissioner-district-no-1-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 1",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "BART GOSSEN",
                party: "REPUBLICAN",
              },
              {
                name: "MATTHEW MISAK",
                party: "REPUBLICAN",
              },
              {
                name: "CHRIS SHIELDS",
                party: "REPUBLICAN",
              },
            ],
            debates: [
              { label: "FOX23 In Depth: Tulsa County Commissioner Stan Sallee", url: "https://www.youtube.com/watch?v=T9Mt9ZwVEVc" },
            ],
          },
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FLOYD KING",
                party: "REPUBLICAN",
              },
              {
                name: "GREG CHANDLER",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "WOODS": {
    county: "WOODS",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JOHN D. SMILEY",
                party: "REPUBLICAN",
              },
              {
                name: "BILL HUFFMAN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "judicial-officers",
        heading: "JUDICIAL OFFICERS",
        races: [
          {
            id: "for-associate-district-judge-woods-county",
            title: "FOR ASSOCIATE DISTRICT JUDGE - WOODS COUNTY",
            instruction: "Vote for One",
            candidates: [
              {
                name: "JEREMY BAYS",
                party: "NONPARTISAN",
              },
              {
                name: "WESTLINE RITTER",
                party: "NONPARTISAN",
              },
              {
                name: "DREW PHILLIP CUNNINGHAM",
                party: "NONPARTISAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
  "WOODWARD": {
    county: "WOODWARD",
    sections: [
      state_officersSection,
      {
        id: "congressional-officers",
        heading: "CONGRESSIONAL OFFICERS",
        races: [
          {
            id: "for-united-states-senator-democrat",
            title: "FOR UNITED STATES SENATOR",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "TROY W. GREEN",
                party: "DEMOCRAT",
                website: "https://www.troygreenforsenate.com/",
              },
              {
                name: "ERVIN STONE YEN",
                party: "DEMOCRAT",
                website: "https://yenforsenate.com/",
              },
              {
                name: "R.O. JOE CASSITY JR.",
                party: "DEMOCRAT",
              },
              {
                name: "N'KIYLA JASMINE THOMAS",
                party: "DEMOCRAT",
                website: "https://www.jasmineforok.com/",
              },
              {
                name: "JIM PRIEST",
                party: "DEMOCRAT",
                website: "https://jimpriest.com/",
              },
            ],
            debates: [
              { label: "Oklahoma Senate Candidate Troy Green: Education, Child Welfare, Firearms, ICE Agents and much more!", url: "https://www.youtube.com/watch?v=W1FeIWmdZOE" },
              { label: "Interview: N'kiyla Jasmine Thomas, US Senatorial Candidate - Oklahoma", url: "https://www.youtube.com/watch?v=JJ60SNDrDrs" },
              { label: "HumpDay Exchange interview with US Senate candidate N'Kiyla Jasmine Thomas", url: "https://www.youtube.com/watch?v=AphyHV1AGQQ" },
            ],
          },
          {
            id: "for-united-states-senator-republican",
            title: "FOR UNITED STATES SENATOR",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "NICK HANKINS",
                party: "REPUBLICAN",
              },
              {
                name: "GARY TY ENGLAND",
                party: "REPUBLICAN",
              },
              {
                name: "KEVIN HERN",
                party: "REPUBLICAN",
                website: "https://hernforsenate.com/",
                endorsements: [
                  { name: "Trump Endorsed", url: "https://truthsocial.com/@realDonaldTrump/116224634088762061" },
                ],
              },
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
            ],
          },
          {
            id: "for-united-states-representative-district-03-democrat",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "DEMOCRAT",
            instruction: "Vote for One",
            candidates: [
              {
                name: "SUZIE BYRD",
                party: "DEMOCRAT",
              },
              {
                name: "JULES ROBERSON",
                party: "DEMOCRAT",
                website: "https://www.oklahomafight.com/",
              },
            ],
          },
          {
            id: "for-united-states-representative-district-03-republican",
            title: "FOR UNITED STATES REPRESENTATIVE",
            subtitle: "DISTRICT 03",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "FRANK D. LUCAS",
                party: "REPUBLICAN",
                website: "https://frankdlucas.com/",
              },
              {
                name: "WADE BURLESON",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      {
        id: "legislative-district-and-county-officers",
        heading: "LEGISLATIVE, DISTRICT AND COUNTY OFFICERS",
        races: [
          {
            id: "for-county-commissioner-district-no-3-republican",
            title: "FOR COUNTY COMMISSIONER DISTRICT NO. 3",
            party: "REPUBLICAN",
            instruction: "Vote for One",
            candidates: [
              {
                name: "DANIEL JUSTIN TURNER",
                party: "REPUBLICAN",
              },
              {
                name: "DONNY THORN",
                party: "REPUBLICAN",
              },
            ],
          },
        ],
      },
      state_questionsSection,
    ],
  },
}

export const ballotInfo: BallotInfo = {
  title: electionInfo.title,
  electionType: electionInfo.electionType,
  additionalType: electionInfo.additionalType,
  date: electionInfo.date,
  county: "TULSA",
  precincts: ["720136-REG", "720136-REGNP"],
  party: "REPUBLICAN",
}

export const ballotSections: BallotSection[] = jurisdictionBallots["TULSA"].sections
