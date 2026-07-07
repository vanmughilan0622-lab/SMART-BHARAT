// Seeded, verified civic knowledge base for RAG.
// Every record has a sourceUrl and lastVerifiedAt.
// The AI explains this data — it never invents civic facts.

export interface SchemeRecord {
  id: string
  name: string
  description: string
  benefits: string
  eligibilityRules: string
  sourceUrl: string
  lastVerifiedAt: string
}

export interface ServiceRecord {
  id: string
  name: string
  description: string
  eligibility: string
  documentsRequired: string
  fees: string
  timeline: string
  sourceUrl: string
  lastVerifiedAt: string
}

export const schemes: SchemeRecord[] = [
  {
    id: "pm-kisan",
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "Income support scheme for all landholding farmer families in India to supplement their financial needs for procuring various inputs related to agriculture.",
    benefits: "₹6,000 per year payable in three equal installments of ₹2,000 each, directly transferred to the bank account of the beneficiary.",
    eligibilityRules: "All landholding farmer families with cultivable land. Exclusions: institutional landholders, farmer families where one or more members are (a) income tax payers, (b) serving/retired government employees with pension ≥₹10,000/month, (c) professionals like doctors, engineers, lawyers, CAs registered with professional bodies.",
    sourceUrl: "https://pmkisan.gov.in/",
    lastVerifiedAt: "2025-01-15",
  },
  {
    id: "ab-pmjay",
    name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
    description: "National public health insurance scheme providing free health cover to economically vulnerable families.",
    benefits: "Health cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization across public and empanelled private hospitals.",
    eligibilityRules: "Targeted at poor, deprived rural families and identified occupational category of urban workers as per SECC 2011 data. No restriction on family size, age, or gender. Pre-existing conditions are covered from day one.",
    sourceUrl: "https://pmjay.gov.in/",
    lastVerifiedAt: "2025-01-15",
  },
  {
    id: "pm-awas-yojana",
    name: "Pradhan Mantri Awas Yojana (PMAY)",
    description: "Housing for All scheme providing affordable housing to the urban and rural poor.",
    benefits: "Interest subsidy of 6.5% on home loans up to ₹6 lakh for 20 years for EWS/LIG category. Direct financial assistance of ₹1.2 lakh to ₹2.67 lakh for house construction/enhancement in rural areas.",
    eligibilityRules: "EWS: Annual household income up to ₹3 lakh. LIG: ₹3–6 lakh. MIG-I: ₹6–12 lakh. MIG-II: ₹12–18 lakh. Beneficiary family should not own a pucca house anywhere in India. Women ownership or co-ownership mandatory for EWS/LIG.",
    sourceUrl: "https://pmaymis.gov.in/",
    lastVerifiedAt: "2025-01-10",
  },
  {
    id: "pm-ujjwala",
    name: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    description: "Scheme to provide LPG connections to women from Below Poverty Line (BPL) households.",
    benefits: "Free LPG connection with a financial support of ₹1,600 per connection. Free first refill and stove provided under Ujjwala 2.0.",
    eligibilityRules: "Women aged 18+ belonging to BPL household as per SECC-2011 data. No existing LPG connection in the household. SC/ST, Pradhan Mantri Awas Yojana (PMAY) beneficiaries, Antyodaya Anna Yojana (AAY) beneficiaries, most backward classes, tea & ex-tea garden tribes, forest dwellers, and people residing in islands/river islands are also eligible.",
    sourceUrl: "https://www.pmuy.gov.in/",
    lastVerifiedAt: "2025-01-12",
  },
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana (SSY)",
    description: "Small savings scheme for the girl child under the Beti Bachao Beti Padhao campaign.",
    benefits: "Current interest rate: 8.2% per annum (Q1 FY 2024-25), compounded annually. Tax benefits under Section 80C. Maturity after 21 years from account opening or marriage after age 18. Partial withdrawal of 50% allowed after age 18 for higher education.",
    eligibilityRules: "Account can be opened by natural or legal guardian in the name of a girl child until she turns 10. Maximum two accounts for two girl children per family (exception for twins/triplets). Minimum deposit ₹250/year, maximum ₹1.5 lakh/year.",
    sourceUrl: "https://www.india.gov.in/sukanya-samriddhi-yojna",
    lastVerifiedAt: "2025-01-08",
  },
  {
    id: "pm-mudra",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    description: "Scheme for providing loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.",
    benefits: "Shishu: loans up to ₹50,000. Kishor: loans from ₹50,001 to ₹5 lakh. Tarun: loans from ₹5,00,001 to ₹10 lakh. No collateral required. No processing fee.",
    eligibilityRules: "Any Indian citizen with a business plan for a non-farm income generating activity such as manufacturing, processing, trading, or service sector. Small and micro enterprises, sole proprietorships, partnerships, and individuals are eligible.",
    sourceUrl: "https://www.mudra.org.in/",
    lastVerifiedAt: "2025-01-10",
  },
  {
    id: "pm-scholarship",
    name: "Prime Minister's Scholarship Scheme (PMSS)",
    description: "Scholarship for the wards and widows of ex-servicemen and ex-coast guard personnel.",
    benefits: "₹3,000/month for boys and ₹3,000/month for girls pursuing professional degree courses. ₹2,500/month for other degree courses.",
    eligibilityRules: "Wards and widows of ex-servicemen/ex-coast guard personnel. Minimum 60% marks in the qualifying examination. Students must be studying in first professional degree course only. Family income ceiling applicable as per scheme guidelines.",
    sourceUrl: "https://ksb.gov.in/pm-scholarship.htm",
    lastVerifiedAt: "2025-01-14",
  },
  {
    id: "atal-pension",
    name: "Atal Pension Yojana (APY)",
    description: "Government-backed pension scheme targeted at unorganized sector workers.",
    benefits: "Guaranteed minimum monthly pension of ₹1,000 to ₹5,000 after age 60, depending on contribution. Government co-contributes 50% of the subscriber's contribution (max ₹1,000/year) for 5 years for those who joined before March 2016.",
    eligibilityRules: "Indian citizens aged 18–40 years. Must have a savings bank account. Not a member of any statutory social security scheme. Aadhaar is the primary KYC document.",
    sourceUrl: "https://www.npscra.nsdl.co.in/scheme-details.php",
    lastVerifiedAt: "2025-01-11",
  },
  {
    id: "stand-up-india",
    name: "Stand-Up India Scheme",
    description: "Facilitates bank loans between ₹10 lakh and ₹1 crore to SC/ST and women entrepreneurs for setting up a greenfield enterprise.",
    benefits: "Composite loan (including term loan and working capital) between ₹10 lakh and ₹1 crore. Repayment period up to 7 years with a maximum moratorium period of 18 months.",
    eligibilityRules: "SC/ST and/or women entrepreneurs, age 18+. Greenfield enterprise only (first-time venture) in manufacturing, services, or trading sector. In case of non-individual enterprise, at least 51% shareholding must be held by SC/ST or woman entrepreneur.",
    sourceUrl: "https://www.standupmitra.in/",
    lastVerifiedAt: "2025-01-09",
  },
  {
    id: "jan-dhan",
    name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    description: "National mission for financial inclusion to ensure access to financial services for all households.",
    benefits: "Zero balance savings account with RuPay debit card. Accidental insurance cover of ₹2 lakh. Life insurance cover of ₹30,000 for accounts opened before January 26, 2015. Overdraft facility up to ₹10,000 for eligible accounts.",
    eligibilityRules: "Any Indian citizen aged 10+ who does not have a bank account. Minor accounts (10–18) can be opened. Accounts can be opened with zero balance.",
    sourceUrl: "https://pmjdy.gov.in/",
    lastVerifiedAt: "2025-01-13",
  },
]

export const services: ServiceRecord[] = [
  {
    id: "passport-renewal",
    name: "Passport Renewal",
    description: "Renewal of Indian Passport for adults and minors through the Passport Seva portal.",
    eligibility: "Indian citizens with an expiring or expired passport. Must apply online through Passport Seva portal.",
    documentsRequired: "Old Passport (original), Proof of Address (Aadhaar Card / Utility Bill / Bank Statement), ECR/Non-ECR supporting documents, Self-attested copies of all documents.",
    fees: "Normal (36 pages): ₹1,500. Normal (60 pages): ₹2,000. Tatkaal (36 pages): ₹3,500. Tatkaal (60 pages): ₹4,000.",
    timeline: "Normal: 30 working days. Tatkaal: 1–3 working days. Police verification may add additional time.",
    sourceUrl: "https://www.passportindia.gov.in/",
    lastVerifiedAt: "2025-01-15",
  },
  {
    id: "ration-card",
    name: "Ration Card Application / Update",
    description: "Application for new ration card or updating existing ration card details under the National Food Security Act.",
    eligibility: "Indian citizens. BPL/AAY categories based on income criteria set by state government. APL cards available for above poverty line families.",
    documentsRequired: "Aadhaar Card of all family members, Proof of Address, Income Certificate, Passport-size photographs, Old ration card (if updating).",
    fees: "Varies by state. Typically ₹5–₹45 for new card issuance.",
    timeline: "15–30 working days depending on state. Some states offer online tracking.",
    sourceUrl: "https://nfsa.gov.in/",
    lastVerifiedAt: "2025-01-10",
  },
  {
    id: "income-certificate",
    name: "Income Certificate",
    description: "Certificate issued by state revenue department certifying the annual income of an individual or family.",
    eligibility: "Any Indian resident. Required for scholarship applications, fee concessions, government scheme eligibility, and legal proceedings.",
    documentsRequired: "Aadhaar Card, Salary slip / Form 16 / Income declaration, Proof of Address, Self-declaration of income (for self-employed), Application form (available at Tehsil / e-District portal).",
    fees: "₹10–₹50 depending on state. Free in some states for BPL families.",
    timeline: "7–15 working days. e-District portals may offer faster processing.",
    sourceUrl: "https://edistrict.up.gov.in/ (example: UP, varies by state)",
    lastVerifiedAt: "2025-01-12",
  },
  {
    id: "driving-license",
    name: "Driving License Application / Renewal",
    description: "Application for new driving license or renewal of expired license through the Parivahan portal.",
    eligibility: "Indian citizens. Minimum age: 18 years for motor vehicles, 16 years for motorcycles without gear up to 50cc. Must hold a valid Learner's License for at least 30 days.",
    documentsRequired: "Learner's License, Proof of Address (Aadhaar / Passport / Utility Bill), Proof of Age, Passport-size photographs, Medical certificate (Form 1A, for transport vehicles or age 40+).",
    fees: "Learner's License: ₹200. Permanent DL: ₹200. Renewal: ₹200. Smart Card fee: ₹200 additional. International Driving Permit: ₹1,000.",
    timeline: "Learner's License: Same day (online). Permanent DL: 7–30 days after test. Renewal: 7 days.",
    sourceUrl: "https://parivahan.gov.in/",
    lastVerifiedAt: "2025-01-14",
  },
  {
    id: "voter-id",
    name: "Voter ID Card (EPIC) Application",
    description: "Application for new Voter ID / Electoral Photo Identity Card through the National Voters' Service Portal.",
    eligibility: "Indian citizens aged 18+ as of January 1 of the qualifying year. Must be ordinarily resident at the registered address.",
    documentsRequired: "Proof of Age (Birth certificate / 10th marksheet / Passport), Proof of Address (Aadhaar / Utility Bill / Bank Passbook), Passport-size photograph, Form 6 (available online at NVSP).",
    fees: "Free of cost.",
    timeline: "30–45 working days. Status trackable online at NVSP portal.",
    sourceUrl: "https://www.nvsp.in/",
    lastVerifiedAt: "2025-01-11",
  },
]

// Simple keyword-based search for RAG retrieval
export function searchKnowledgeBase(query: string): (SchemeRecord | ServiceRecord)[] {
  const lowerQuery = query.toLowerCase()
  const keywords = lowerQuery.split(/\s+/).filter(w => w.length > 2)

  const allRecords = [
    ...schemes.map(s => ({ ...s, _type: "scheme" as const })),
    ...services.map(s => ({ ...s, _type: "service" as const })),
  ]

  const scored = allRecords.map(record => {
    const searchableText = Object.values(record)
      .filter(v => typeof v === "string")
      .join(" ")
      .toLowerCase()

    let score = 0
    for (const keyword of keywords) {
      if (searchableText.includes(keyword)) {
        score++
      }
    }
    return { record, score }
  })

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(s => s.record)
}
