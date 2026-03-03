// ─────────────────────────────────────────────────────────────
//  OCBC RM CLIENT PROFILE — Dr Zhao Jingyuan
//  Prepared: March 2026  |  Classification: INTERNAL ONLY
// ─────────────────────────────────────────────────────────────

export const client = {
  name: "Dr Zhao Jingyuan",
  title: "Managing Director, Data & AI",
  employer: "Great Eastern Holdings (88% owned by OCBC)",
  location: "Singapore",
  linkedin: "https://www.linkedin.com/in/jingyuan-zhao-phd-24347853/",
  nationality: "Chinese national · Singapore PR / Citizen (est.)",
  education: "PhD in Statistics & Applied Probability, NUS (2004–2008)",
  languages: ["English", "Mandarin Chinese"],
  familyStatus: "Mother of one son (~20–21 yrs). Marital status unknown.",
  hobbies: ["Yoga", "Swimming", "Drawing / Sketching"],
  recognition: "Singapore 100 Women in Tech (2021)",
  adjunct: "Adjunct Associate Professor, NUS Business School",

  // ── Banking Tier ──────────────────────────────────────────
  bankingTier: "Premier Private Client",
  accreditedInvestor: true,
  relationshipAngle:
    "Great Eastern is 88% owned by OCBC — Dr Zhao is effectively a Group executive. Natural warm entry point via the institutional relationship.",

  // ── Income Snapshot ───────────────────────────────────────
  income: {
    base: { low: 420_000, high: 550_000 },
    bonus: { low: 126_000, high: 275_000 },
    benefits: { low: 30_000, high: 60_000 },
    adjunct: { low: 20_000, high: 40_000 },
    totalLow: 596_000,
    totalHigh: 925_000,
    midpoint: 760_000,
    note: "Benchmark: MD/CDO-level at SGX-listed insurer. OCBC Deferred Share Plan likely extends to GEH senior management.",
  },

  // ── Net Worth Breakdown ───────────────────────────────────
  netWorth: {
    property: { label: "Private Condo (net equity)", low: 1_400_000, high: 2_200_000 },
    cpf: { label: "CPF (OA + SA + MA)", low: 500_000, high: 700_000 },
    equities: { label: "Equities / Unit Trusts", low: 400_000, high: 800_000 },
    cash: { label: "Cash / Fixed Deposits", low: 200_000, high: 500_000 },
    insurance: { label: "Insurance (surrender value)", low: 100_000, high: 300_000 },
    ocbcShares: { label: "OCBC Shares (Deferred Share Plan est.)", low: 50_000, high: 200_000 },
    other: { label: "Other Assets", low: 50_000, high: 100_000 },
    totalLow: 2_700_000,
    totalHigh: 4_800_000,
    midpoint: 3_750_000,
  },

  // ── Portfolio Allocation ──────────────────────────────────
  currentAllocation: [
    { label: "Real Estate", pct: 47, color: "#C8102E" },
    { label: "CPF", pct: 18, color: "#e85d75" },
    { label: "Equities", pct: 14, color: "#1e3a5f" },
    { label: "Cash / FD", pct: 11, color: "#6b7280" },
    { label: "Insurance", pct: 6, color: "#f59e0b" },
    { label: "OCBC Shares", pct: 3, color: "#10b981" },
    { label: "Other", pct: 1, color: "#d1d5db" },
  ],
  targetAllocation: [
    { label: "Real Estate", pct: 38, color: "#C8102E" },
    { label: "CPF / CPFIS", pct: 17, color: "#e85d75" },
    { label: "Equities", pct: 27, color: "#1e3a5f" },
    { label: "Bonds / Fixed Income", pct: 12, color: "#6b7280" },
    { label: "Insurance", pct: 6, color: "#f59e0b" },
    { label: "Alternatives", pct: 0, color: "#10b981", targetPct: 7 },
    { label: "Cash", pct: 0, color: "#d1d5db", targetPct: 3 },
  ],

  // ── OCBC Share Equity ─────────────────────────────────────
  equityNote: {
    scheme: "OCBC Deferred Share Plan (3-year cliff vesting)",
    detail:
      "GEH senior management receive OCBC shares (not GEH shares) — fostering 'One OCBC Group' spirit. As MD, Dr Zhao likely participates in the OCBC Deferred Share Plan, receiving a portion of variable pay as deferred OCBC shares vesting by Mar 2027. At current OCBC price ~S$15–16/share, annual award for MD-level estimated at S$50K–200K in OCBC equity.",
    vesting: "March 2027 (3-year cliff)",
    metrics: ["Return on Equity ≥12–14%", "Cost-to-Income ≤45–48%", "Sustainable Banking Revenue S$1.2–1.5B"],
  },

  // ── Career History ────────────────────────────────────────
  career: [
    { period: "2022–present", employer: "Great Eastern Holdings", role: "MD, Data & AI", level: "C-suite" },
    { period: "~2020–2022", employer: "Capgemini", role: "VP, Data & AI APAC", level: "Senior" },
    { period: "~2018–2020", employer: "NTUC Enterprise", role: "SVP, Group Advanced Analytics", level: "Senior" },
    { period: "~2016–2018", employer: "Lazada / Alibaba Group", role: "VP, Data Science", level: "Senior" },
    { period: "~2014–2016", employer: "SingTel", role: "Data Leadership", level: "Director" },
    { period: "~2012–2014", employer: "Nielsen", role: "Analytics", level: "Mid" },
    { period: "~2008–2012", employer: "A*STAR", role: "Research Scientist", level: "Research" },
    { period: "2004–2008", employer: "NUS", role: "PhD Statistics", level: "Education" },
  ],

  // ── Next Best Conversations ───────────────────────────────
  nextBestConversations: [
    {
      priority: "HIGH",
      tag: "Relationship Hook",
      title: "The OCBC–Great Eastern Connection",
      opener:
        "\"Dr Zhao, as part of the same OCBC Group family, I'd love to ensure your personal banking reflects the strong institutional partnership between OCBC and GE — you deserve the same excellence you're delivering for GE's customers.\"",
      why: "She works at an OCBC subsidiary — this is the warmest possible entry point. Avoids a cold pitch entirely.",
      followUp: "Ask about her experience with OCBC products so far and identify any gaps.",
    },
    {
      priority: "HIGH",
      tag: "Portfolio Optimisation",
      title: "Concentration Risk in Property",
      opener:
        "\"Based on your career stage and income profile, a large share of net worth is likely tied to your property. Have you thought about systematic wealth diversification to grow your liquid investment portfolio alongside it?\"",
      why: "Typical Singapore executive has ~45–50% in real estate. Diversification opens door to unit trusts, equities, and structured products.",
      followUp: "Propose a portfolio review session — introduce OCBC Wealth Panel or RoboInvest.",
    },
    {
      priority: "HIGH",
      tag: "OCBC Deferred Share Plan",
      title: "Vesting Shares & Windfall Planning",
      opener:
        "\"Your OCBC shares from the Deferred Share Plan are likely vesting by March 2027. Have you thought about what to do with those proceeds — reinvest, diversify, or deploy into property? We can plan that now.\"",
      why: "Proactively addresses a known liquidity event. Creates an urgency hook and demonstrates RM knowledge of her compensation structure.",
      followUp: "Discuss tax-efficient deployment, diversification, and timing.",
    },
    {
      priority: "MEDIUM",
      tag: "Life Stage",
      title: "Son's University / Education Planning",
      opener:
        "\"With your son reaching university age, have you set aside a dedicated education fund? Overseas university costs can reach S$150K–300K — we have endowment and structured savings solutions that could cover this efficiently.\"",
      why: "Her son is ~20–21 — university is imminent or underway. Emotional relevance + concrete product fit (endowment, FD laddering).",
      followUp: "Understand if he is studying locally or abroad. Tailor product accordingly.",
    },
    {
      priority: "MEDIUM",
      tag: "Legacy & Protection",
      title: "Legacy Planning as a Senior Executive",
      opener:
        "\"At your level, have you reviewed your personal protection and estate planning? A proper legacy plan — Will, LPA, insurance coverage review — gives your family security proportional to your career success.\"",
      why: "High-income professional with dependent child — legacy and protection are emotionally resonant topics with real product implications.",
      followUp: "Introduce OCBC's estate planning and Great Eastern insurance review (via existing GE relationship).",
    },
    {
      priority: "MEDIUM",
      tag: "AI & Digital",
      title: "Shared Language: Data & AI at OCBC",
      opener:
        "\"I know you're leading data & AI transformation at GE — OCBC is on a similar journey. Our OCBC RoboInvest and AI-powered wealth dashboard might actually interest you, not just as a client but as someone who can appreciate the underlying models.\"",
      why: "Appeals to her professional identity. Breaks the banker–client dynamic and builds genuine rapport.",
      followUp: "Demo OCBC digital tools. Ask for her perspective on GE's vs OCBC's data use.",
    },
    {
      priority: "LOW",
      tag: "FX & Travel",
      title: "Regional Travel & FX Needs",
      opener:
        "\"As a frequent conference speaker across Asia — ITC Asia, CDO Summits — do you have an efficient multi-currency setup? We can offer preferential FX rates and a global card with meaningful travel benefits.\"",
      why: "She speaks at major Asia-Pacific tech conferences regularly. FX and travel product pitch is natural and low-friction.",
      followUp: "Introduce OCBC 90°N Visa Infinite or Premier Visa Infinite card. Ask about China remittances.",
    },
    {
      priority: "LOW",
      tag: "Home Loan",
      title: "Mortgage Refinancing Review",
      opener:
        "\"If you purchased your property 5+ years ago, your mortgage rate has likely changed significantly. A refinancing review could save you thousands — worth a 20-minute chat.\"",
      why: "Standard property play — if she bought pre-2020, her rate may be uncompetitive.",
      followUp: "Introduce OCBC property loan team or home equity line for investment capital.",
    },
  ],

  // ── Product Recommendations ───────────────────────────────
  products: [
    {
      category: "Wealth & Investment",
      priority: "PRIMARY",
      items: [
        {
          name: "OCBC Premier Private Client (PPC)",
          description: "Full PPC onboarding — dedicated RM, bespoke portfolio, access to non-retail investment products.",
          urgency: "Immediate",
          fit: "She meets SGD 1.5M AUM threshold + Accredited Investor status.",
        },
        {
          name: "Diversified Investment Portfolio (Unit Trusts / ETFs)",
          description: "Systematic monthly investment plan (SIP) to reduce cash drag and rebalance away from property concentration.",
          urgency: "Short-term",
          fit: "Current portfolio likely over-indexed on real estate. Equities allocation is under-target.",
        },
        {
          name: "OCBC Structured Deposits / Structured Notes",
          description: "Principal-protected or yield-enhanced structures for Accredited Investors.",
          urgency: "Short-term",
          fit: "High income, risk-aware professional — structured products offer yield pickup over FD.",
        },
        {
          name: "Singapore Government Securities / Corporate Bonds",
          description: "SGS T-bills, SSBs, and investment-grade corporate bonds for capital preservation and income.",
          urgency: "Medium-term",
          fit: "Mid-career executive building towards retirement — fixed income provides ballast.",
        },
        {
          name: "Alternative Investments (Private Equity / Private Credit)",
          description: "Exclusive PPC-only access to PE/VC funds and private credit structures.",
          urgency: "Medium-term",
          fit: "As an Accredited Investor, she can access illiquid premium alternatives not available to retail clients.",
        },
      ],
    },
    {
      category: "Insurance & Protection",
      priority: "SECONDARY",
      items: [
        {
          name: "Life & CI Coverage Review",
          description: "Review and right-size critical illness and life coverage relative to income and dependant needs.",
          urgency: "Short-term",
          fit: "High earner with dependent — coverage should be proportional to S$700K+ income.",
        },
        {
          name: "Legacy / Estate Planning",
          description: "Wills, LPA, trust structures, and cross-border estate considerations (SG + China assets).",
          urgency: "Medium-term",
          fit: "Net worth ~S$3–5M and a dependant child make estate planning highly relevant.",
        },
        {
          name: "Endowment / Education Savings Plan",
          description: "Savings-linked insurance plan earmarked for son's education or milestone needs.",
          urgency: "Immediate",
          fit: "Son is ~20–21 — overseas university costs are imminent if not already underway.",
        },
      ],
    },
    {
      category: "Banking & Credit",
      priority: "SECONDARY",
      items: [
        {
          name: "OCBC Premier Visa Infinite / 90°N Card",
          description: "Premium travel card with air miles, lounge access, and preferential FX rates.",
          urgency: "Immediate",
          fit: "Frequent regional conference speaker; high monthly spend capacity.",
        },
        {
          name: "Multi-Currency Account (MCA)",
          description: "Hold and transact in SGD, USD, CNY, MYR, HKD with preferential conversion.",
          urgency: "Short-term",
          fit: "Likely remits to China; attends regional conferences in MYR/HKD markets.",
        },
        {
          name: "Home Loan Refinancing",
          description: "Review existing mortgage for competitive OCBC rate or switch to OCBC flexi-loan.",
          urgency: "Medium-term",
          fit: "If property purchased pre-2020, refinancing may unlock significant savings.",
        },
        {
          name: "OCBC Premier Dividend+ Savings Account",
          description: "High-yield savings account with SGD 800 bonus for SGD 350K+ deposits.",
          urgency: "Short-term",
          fit: "Park cash efficiently while maintaining liquidity.",
        },
      ],
    },
    {
      category: "Digital & Lifestyle",
      priority: "TERTIARY",
      items: [
        {
          name: "OCBC RoboInvest",
          description: "AI-powered automated portfolio rebalancing — appeals to her data-driven mindset.",
          urgency: "Demo opportunity",
          fit: "As a Data & AI MD, she will appreciate and evaluate OCBC's AI use in banking.",
        },
        {
          name: "OCBC Digital Wealth Dashboard",
          description: "360° view of portfolio performance, goal tracking, and RM collaboration tools.",
          urgency: "Onboarding",
          fit: "Tech-savvy executive who prefers data visibility over black-box banking.",
        },
      ],
    },
  ],
};
