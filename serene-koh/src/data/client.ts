// ─────────────────────────────────────────────────────────────
//  OCBC RM CLIENT PROFILE — Serene Koh
//  Prepared: March 2026  |  Classification: INTERNAL ONLY
// ─────────────────────────────────────────────────────────────

export const client = {
  name: "Serene Koh",
  title: "Managing Director, Group Digital Business & Transformation",
  employer: "OCBC Bank (Global Consumer Financial Services)",
  location: "Singapore",
  linkedin: "https://www.linkedin.com/in/serene-koh-6b08334/",
  nationality: "Singapore (est.) · NUS Graduate",
  education: "National University of Singapore (1999–2002)",
  languages: ["English", "Mandarin Chinese (est.)"],
  familyStatus: "Not publicly disclosed",
  recognition: "Led OCBC's inaugural Group Digital Townhall across 5 GCFS locations (SG, MY, ID, HK, MO)",
  previousEmployer: "Citi (prior to OCBC)",

  // ── Banking Tier ──────────────────────────────────────────
  bankingTier: "Premier Banking / Premier Private Client",
  accreditedInvestor: true,
  relationshipAngle:
    "Serene is a senior internal OCBC employee who shapes the very digital products we offer customers. She knows our product suite inside out. The RM role here is not to pitch products — it is to be a trusted financial advisor for her personal wealth journey, bringing the same excellence she drives for our customers to her own finances.",

  // ── Income Snapshot ───────────────────────────────────────
  income: {
    base: { low: 300_000, high: 420_000 },
    bonus: { low: 90_000, high: 210_000 },
    benefits: { low: 30_000, high: 60_000 },
    deferredShares: { low: 40_000, high: 120_000 },
    totalLow: 460_000,
    totalHigh: 810_000,
    midpoint: 635_000,
    note: "Benchmark: OCBC MD-level (Executive Director/Managing Director grade) in consumer digital function. OCBC Deferred Share Plan applies — vesting March 2027 contingent on ROE/CIR/Sustainable Banking Revenue targets.",
  },

  // ── Net Worth Breakdown ───────────────────────────────────
  netWorth: {
    property: { label: "Private Condo / HDB (net equity)", low: 800_000, high: 1_800_000 },
    cpf: { label: "CPF (OA + SA + MA)", low: 400_000, high: 600_000 },
    equities: { label: "Equities / Unit Trusts", low: 200_000, high: 500_000 },
    cash: { label: "Cash / Fixed Deposits", low: 150_000, high: 350_000 },
    insurance: { label: "Insurance (surrender value)", low: 80_000, high: 200_000 },
    ocbcShares: { label: "OCBC Shares (Deferred Share Plan est.)", low: 50_000, high: 150_000 },
    other: { label: "Other Assets", low: 30_000, high: 80_000 },
    totalLow: 1_710_000,
    totalHigh: 3_680_000,
    midpoint: 2_695_000,
  },

  // ── Portfolio Allocation ──────────────────────────────────
  currentAllocation: [
    { label: "Real Estate", pct: 44, color: "#C8102E" },
    { label: "CPF", pct: 21, color: "#e85d75" },
    { label: "Equities", pct: 13, color: "#1e3a5f" },
    { label: "Cash / FD", pct: 12, color: "#6b7280" },
    { label: "Insurance", pct: 6, color: "#f59e0b" },
    { label: "OCBC Shares", pct: 4, color: "#10b981" },
  ],

  targetAllocation: [
    { label: "Real Estate", pct: 44, current: 44, target: 35, color: "#C8102E" },
    { label: "CPF / CPFIS", pct: 21, current: 21, target: 18, color: "#e85d75" },
    { label: "Equities", pct: 13, current: 13, target: 28, color: "#1e3a5f" },
    { label: "Bonds / Fixed Income", pct: 0, current: 0, target: 10, color: "#6b7280" },
    { label: "Insurance", pct: 6, current: 6, target: 5, color: "#f59e0b" },
    { label: "Alternatives", pct: 0, current: 0, target: 6, color: "#10b981" },
    { label: "Cash", pct: 12, current: 12, target: 5, color: "#d1d5db" },
    { label: "OCBC Shares", pct: 4, current: 4, target: 3, color: "#0ea5e9" },
  ],

  // ── OCBC Share Equity ─────────────────────────────────────
  equityNote: {
    scheme: "OCBC Deferred Share Plan (3-year cliff vesting)",
    detail:
      "As an MD-level employee at OCBC, Serene participates in the OCBC Deferred Share Plan. A portion of her annual variable remuneration is paid as deferred OCBC shares. At the MD grade, estimated annual share award of S$40K–120K in OCBC equity, vesting March 2027. Given she is an internal employee, she has visibility into OCBC's performance metrics that determine vesting outcomes.",
    vesting: "March 2027 (3-year cliff)",
    metrics: ["Return on Equity ≥12–14%", "Cost-to-Income ≤45–48%", "Sustainable Banking Revenue S$1.2–1.5B"],
    internalInsight: "As the person driving OCBC's digital revenue and transformation, her work directly contributes to the Cost-to-Income and Sustainable Banking Revenue vesting metrics.",
  },

  // ── Career History ────────────────────────────────────────
  career: [
    { period: "~2018–present", employer: "OCBC Bank", role: "MD, Group Digital Business & Transformation", level: "MD" },
    { period: "~2015–2018", employer: "OCBC Bank", role: "Senior Director / Head, Digital Products", level: "Senior" },
    { period: "~2010–2015", employer: "OCBC Bank", role: "Director, Digital & Consumer Banking", level: "Director" },
    { period: "~2005–2010", employer: "Citi", role: "Consumer Banking / Digital roles", level: "Mid-Senior" },
    { period: "1999–2002", employer: "National University of Singapore", role: "Undergraduate Degree", level: "Education" },
  ],

  // ── Key Initiatives Led ───────────────────────────────────
  keyInitiatives: [
    "Cardless & pinless ATM withdrawals via OCBC Digital / PayAnyone app",
    "Facial recognition for government payout encashment at ATMs",
    "CPF term deposits extension — higher interest rate product",
    "SGFinDex integration — insurance gap analysis across 7 insurers via Financial OneView",
    "Remote digital account opening in China, Malaysia, Indonesia & Hong Kong",
    "Alipay+ and UnionPay cross-border payment integration",
    "OCBC–Kaplan Singapore partnership for international student banking",
    "Inaugural Group Digital Townhall across 5 GCFS markets (SG/MY/ID/HK/MO)",
  ],

  // ── Next Best Conversations ───────────────────────────────
  nextBestConversations: [
    {
      priority: "HIGH",
      tag: "Internal Client Trust",
      title: "Colleague-to-Advisor Relationship Reset",
      opener:
        "\"Serene, you've built OCBC's digital experience for millions of customers — I'd love to make sure your personal banking experience is equally exceptional. Let me be the one person who takes care of your financial picture so you can focus on everything else.\"",
      why: "She knows OCBC's products better than most RMs. The pitch cannot be transactional. Lead with relationship depth, not product breadth. Establish trust as a personal advisor, not a salesperson.",
      followUp: "Ask her what aspects of her own finances she hasn't had time to review properly — she's likely too busy driving the bank's digital agenda to tend to her own portfolio.",
    },
    {
      priority: "HIGH",
      tag: "OCBC Share Vesting",
      title: "Deferred Share Plan — March 2027 Windfall",
      opener:
        "\"Your deferred OCBC shares vest in March 2027. You probably know the vesting metrics better than most — how are you planning to deploy those proceeds? Diversify, reinvest, or deploy into property? Let's plan that now while markets are favourable.\"",
      why: "She has direct visibility into OCBC's performance trajectory and knows the vesting probability. A proactive conversation about share vesting proceeds demonstrates RM sophistication.",
      followUp: "Discuss tax-efficient deployment. Explore diversification away from OCBC stock concentration (she already gets salary + bonus from OCBC — having vesting shares adds further concentration risk).",
    },
    {
      priority: "HIGH",
      tag: "Portfolio Rebalancing",
      title: "Too Much Cash, Not Enough Invested",
      opener:
        "\"You champion digital investing at OCBC — but many senior professionals, even bankers, end up holding too much cash personally. Let's run a quick portfolio health check and put idle cash to work efficiently.\"",
      why: "Senior bank executives often accumulate cash that isn't working hard enough. The irony of knowing the products but not using them for oneself is a relatable, gentle nudge.",
      followUp: "Propose OCBC RoboInvest, systematic unit trust investment, or a structured deposit to get the conversation started.",
    },
    {
      priority: "MEDIUM",
      tag: "Property",
      title: "Home Loan Refinancing or Property Upgrade",
      opener:
        "\"With your income trajectory over the past few years, is your current property setup still the right one? Whether it's refinancing, upgrading, or unlocking equity — you deserve OCBC's best rates as an internal colleague.\"",
      why: "MD-level professionals often have scope to upsize property. Internal employee rates and staff benefits on mortgages are a strong value-add.",
      followUp: "Check existing mortgage maturity date. Propose a property equity line for investment capital.",
    },
    {
      priority: "MEDIUM",
      tag: "Retirement Planning",
      title: "CPF Optimisation & Retirement Horizon",
      opener:
        "\"You studied at NUS in 1999 — which means you're in the prime wealth accumulation decade before 55. Have you maxed your SA top-ups and reviewed your CPF investment account? The next 10 years matter the most.\"",
      why: "If she graduated ~2002, she's now ~45–48. The decade before 55 is the most impactful for CPF planning. SA shielding and CPFIS optimisation are highly relevant.",
      followUp: "Introduce CPF SA top-up (tax-deductible), CPFIS for unit trusts, and Retirement Sum scenarios.",
    },
    {
      priority: "MEDIUM",
      tag: "Legacy & Protection",
      title: "Coverage Review for a Senior Executive",
      opener:
        "\"Most OCBC employees have base group insurance, but at the MD level your personal protection needs often exceed what the firm provides. Have you independently reviewed your critical illness and life coverage recently?\"",
      why: "Company group insurance is never sufficient for MD-level income replacement. This is a relatable and non-threatening conversation starter.",
      followUp: "Offer a protection review. Introduce Great Eastern (OCBC Group) products via OCBC platform.",
    },
    {
      priority: "LOW",
      tag: "Digital Products Demo",
      title: "Walk Through Your Own App",
      opener:
        "\"You built OCBC Digital — but I'd love to walk you through your own Financial OneView and investment portfolio as a client, not just a builder. Sometimes the builder's perspective and the client's experience are different.\"",
      why: "Playful, self-aware conversation starter that acknowledges she built the tools. Creates a genuine dialogue about what she uses personally vs. what she builds.",
      followUp: "Natural segue into OCBC RoboInvest, wealth dashboard, and investment tracking features.",
    },
    {
      priority: "LOW",
      tag: "Travel & FX",
      title: "Cross-Border Lifestyle Banking",
      opener:
        "\"With OCBC's regional footprint across SG, MY, ID, HK, MO — and your role spanning all five markets — do you have a frictionless cross-border banking setup? Our Premier FX rates and multi-currency account can make travel seamless.\"",
      why: "She leads digital across 5 GCFS markets — likely travels frequently. Multi-currency and travel card benefits are highly relevant.",
      followUp: "Introduce OCBC 90°N card and multi-currency account.",
    },
  ],

  // ── Product Recommendations ───────────────────────────────
  products: [
    {
      category: "Wealth & Investment",
      priority: "PRIMARY",
      items: [
        {
          name: "OCBC Premier Banking / Premier Private Client Enrolment",
          description: "Formalise Premier Banking relationship with dedicated RM support and full wealth management suite.",
          urgency: "Immediate",
          fit: "Net worth ~S$1.7M–3.7M; income qualifies for PPC. She deserves the same tier she sells to customers.",
        },
        {
          name: "Systematic Investment Plan (Unit Trusts / ETFs)",
          description: "Monthly SIP to deploy excess cash into diversified global equity/bond portfolios.",
          urgency: "Short-term",
          fit: "High cash holdings relative to portfolio — put idle savings to work systematically.",
        },
        {
          name: "OCBC RoboInvest",
          description: "Automated portfolio rebalancing aligned to risk profile. Low friction onboarding.",
          urgency: "Immediate",
          fit: "Natural fit — she built the product. Personal adoption sends a strong signal internally too.",
        },
        {
          name: "SGS T-Bills / SSBs / Investment-Grade Bonds",
          description: "Capital-preservation fixed income. Singapore Government Securities and corporate bonds.",
          urgency: "Short-term",
          fit: "Approaching peak earning years — adding fixed income ballast to the portfolio is prudent.",
        },
        {
          name: "OCBC Structured Deposits / Notes (Accredited Investor)",
          description: "Yield-enhanced structures for Accredited Investors with principal protection options.",
          urgency: "Medium-term",
          fit: "Accredited Investor eligible. Familiar with the products from the bank's own offering.",
        },
      ],
    },
    {
      category: "Property & Mortgage",
      priority: "SECONDARY",
      items: [
        {
          name: "Home Loan Refinancing (Staff Rate)",
          description: "Review existing mortgage. OCBC staff preferential rates + flexible loan structures.",
          urgency: "Short-term",
          fit: "Internal employee benefit — staff mortgage rates are meaningfully better. Worth an annual review.",
        },
        {
          name: "Property Equity Line",
          description: "Unlock equity from existing property for investment deployment without selling.",
          urgency: "Medium-term",
          fit: "Property-heavy portfolio — a property equity line allows capital recycling efficiently.",
        },
      ],
    },
    {
      category: "Insurance & Protection",
      priority: "SECONDARY",
      items: [
        {
          name: "Critical Illness & Life Coverage Review",
          description: "Independent top-up coverage above OCBC group insurance limits.",
          urgency: "Short-term",
          fit: "MD-level income requires coverage commensurate with S$600K+ annual earnings.",
        },
        {
          name: "Retirement / Endowment Plan",
          description: "Long-term savings vehicle for retirement income supplementing CPF.",
          urgency: "Medium-term",
          fit: "Aged ~45–48, now is the optimal window for 10-year endowment maturity at 55.",
        },
      ],
    },
    {
      category: "CPF & Tax Planning",
      priority: "SECONDARY",
      items: [
        {
          name: "CPF SA / RA Top-Up (Cash Top-Up Scheme)",
          description: "Top-up CPF Special Account for tax relief up to S$8,000 + S$8,000 for family.",
          urgency: "Immediate",
          fit: "Age ~45–48 — every dollar in SA earns 4% guaranteed. Tax deduction sweetens the deal.",
        },
        {
          name: "CPF Investment Scheme (CPFIS)",
          description: "Deploy OA funds into unit trusts, ETFs, or endowment policies via CPFIS.",
          urgency: "Short-term",
          fit: "Likely has S$400K+ in CPF OA — CPFIS can put some of this to work at higher returns.",
        },
      ],
    },
    {
      category: "Banking & Lifestyle",
      priority: "TERTIARY",
      items: [
        {
          name: "OCBC 90°N Visa Infinite / Premier Visa Infinite Card",
          description: "Premium travel card with high air miles earn rate and global lounge access.",
          urgency: "Immediate",
          fit: "Travels across 5 GCFS markets regularly. High spend = high miles earning potential.",
        },
        {
          name: "Multi-Currency Account",
          description: "Hold SGD, MYR, IDR, HKD, USD in one account with preferential conversion.",
          urgency: "Short-term",
          fit: "Regional role spanning SG/MY/ID/HK/MO — cross-border FX savings are material.",
        },
        {
          name: "OCBC Premier Dividend+ Savings Account",
          description: "S$800 cash reward for S$350K deposits. High yield on short-term cash holdings.",
          urgency: "Immediate",
          fit: "Right-size cash holdings while earning competitive returns before deployment.",
        },
      ],
    },
  ],

  // ── Research Sources ──────────────────────────────────────
  sources: [
    {
      label: "Serene Koh — LinkedIn Profile",
      url: "https://www.linkedin.com/in/serene-koh-6b08334/",
    },
    {
      label: "OCBC Distinguishes Itself with Unique Innovations — The Asian Banker",
      url: "https://www.theasianbanker.com/updates-and-articles/ocbc-distinguishes-itself-with-unique-innovations",
    },
    {
      label: "OCBC Blends Innovation with Security — The Asian Banker",
      url: "https://www.theasianbanker.com/updates-and-articles/ocbc-blends-innovation-with-security-to-enhance-consumer-experience",
    },
    {
      label: "Serene Koh LinkedIn Post — An app alone does not make a bank digital",
      url: "https://www.linkedin.com/posts/serene-koh-6b08334_an-app-alone-does-not-make-a-bank-digital-activity-6993925436183375872-H4wr",
    },
    {
      label: "Serene Koh LinkedIn Post — OCBC–Kaplan Singapore Partnership",
      url: "https://www.linkedin.com/posts/serene-koh-6b08334_ocbc-ocbcdigital-activity-7183138263786819585-sr8J",
    },
    {
      label: "Serene Koh LinkedIn Post — Group Digital Townhall 2024",
      url: "https://www.linkedin.com/posts/serene-koh-6b08334_an-exciting-end-to-the-week-with-our-first-activity-7172383899665227776-cXPP",
    },
    {
      label: "OCBC Premier Banking Tiers",
      url: "https://www.ocbc.com/personal-banking/premier/en",
    },
    {
      label: "OCBC Deferred Share Plan — ainvest.com",
      url: "https://www.ainvest.com/news/ocbc-deferred-share-plan-aligning-incentives-strategic-growth-2504/",
    },
    {
      label: "OCBC Executive Director Salaries — Glassdoor",
      url: "https://www.glassdoor.sg/Salary/OCBC-Executive-Director-Singapore-Salaries-EJI_IE9773.0,4_KO5,23_IL.24,33_IM1123.htm",
    },
    {
      label: "OCBC Annual Report 2024 — Management",
      url: "https://www.ocbc.com/group/investors/annual-reports/2024-annual-report/our-management.page",
    },
    {
      label: "Singapore C-Suite Salary Guide — Michael Page 2026",
      url: "https://www.michaelpage.com.sg/salary-guide",
    },
    {
      label: "Average Condo Prices Singapore 2024",
      url: "https://condolaunch.sg/news/average-condo-price-singapore/",
    },
  ],
};
