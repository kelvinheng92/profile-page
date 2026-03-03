"use client";
import { TrendingUp, DollarSign, PieChart, Shield, Info } from "lucide-react";
import { client } from "@/data/client";
import { useState } from "react";

function fmt(n: number) {
  return "S$" + (n >= 1_000_000
    ? (n / 1_000_000).toFixed(1) + "M"
    : (n / 1_000).toFixed(0) + "K");
}

function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex items-center">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="ml-1 text-gray-400 hover:text-[#C8102E] transition-colors"
        aria-label="Estimation methodology"
      >
        <Info className="w-3 h-3" />
      </button>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-2.5 shadow-xl z-50 leading-relaxed">
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </span>
      )}
    </span>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
  tooltip,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  color: string;
  tooltip: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-3 border border-gray-100">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="flex items-center gap-1">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
          <Tooltip text={tooltip} />
        </div>
        <p className="text-2xl font-bold text-gray-900 mt-0.5">{value}</p>
        <p className="text-xs text-gray-400 mt-1">{sub}</p>
      </div>
    </div>
  );
}

function IncomeBar({
  label,
  low,
  high,
  pct,
  tooltip,
}: {
  label: string;
  low: number;
  high: number;
  pct: number;
  tooltip: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-600">{label}</span>
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-gray-800">
            {fmt(low)} – {fmt(high)}
          </span>
          <Tooltip text={tooltip} />
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-[#C8102E] rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function FinancialSnapshot() {
  const { income, netWorth } = client;
  return (
    <section id="snapshot" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-5">Financial Snapshot</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={DollarSign}
          label="Est. Annual Income"
          value={fmt(income.midpoint)}
          sub={`Range: ${fmt(income.totalLow)} – ${fmt(income.totalHigh)}`}
          color="bg-[#C8102E]"
          tooltip="Midpoint of base salary + bonus + benefits + NUS adjunct income. MD/CDO-level at SGX-listed insurer benchmarked against Michael Page SG Salary Guide 2026, Randstad Insurance Salary Guide 2025, and comparable CDO/MD roles at Singapore financial institutions."
        />
        <StatCard
          icon={TrendingUp}
          label="Est. Net Worth"
          value={fmt(netWorth.midpoint)}
          sub={`Range: ${fmt(netWorth.totalLow)} – ${fmt(netWorth.totalHigh)}`}
          color="bg-[#1a1a2e]"
          tooltip="Sum of estimated property equity (~S$1.4M–2.2M), CPF (~S$500K–700K after 20 yrs), equities (S$400K–800K), cash/FD (S$200K–500K), insurance surrender value (S$100K–300K), and OCBC deferred shares (S$50K–200K). Property assumed purchased 2015–2018 with partial mortgage remaining."
        />
        <StatCard
          icon={PieChart}
          label="OCBC Target AUM"
          value="S$1.5M+"
          sub="Qualifies for Premier Private Client"
          color="bg-emerald-600"
          tooltip="OCBC Premier Private Client threshold: S$1.5M fresh funds + Accredited Investor status. At net worth midpoint of ~S$3.75M, Dr Zhao comfortably exceeds this. Liquid investable assets (excl. CPF and property) estimated at S$700K–1.5M."
        />
        <StatCard
          icon={Shield}
          label="Accredited Investor"
          value="Eligible"
          sub="Net assets > S$2M or income > S$300K p.a."
          color="bg-blue-700"
          tooltip="MAS Accredited Investor definition: net personal assets exceeding S$2M, or income in past 12 months not less than S$300K. Dr Zhao satisfies both criteria: estimated net worth S$2.7M–4.8M, and total compensation S$600K–925K p.a."
        />
      </div>

      {/* Income breakdown */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Income Breakdown (Estimated)</h3>
        <div className="space-y-3">
          <IncomeBar
            label="Base Salary"
            low={income.base.low}
            high={income.base.high}
            pct={65}
            tooltip="MD/CDO-level at Great Eastern (S$2B+ GWP insurer). Benchmarked against publicly reported MD-level ranges for Singapore insurance/financial services sector. Great Eastern's 2023 annual report discloses key management remuneration bands in aggregate; S$420K–550K base is consistent with peers at Prudential, AIA, and Manulife Singapore."
          />
          <IncomeBar
            label="Performance Bonus"
            low={income.bonus.low}
            high={income.bonus.high}
            pct={22}
            tooltip="30–50% of base salary, in line with Singapore financial services MD-level norms. Bonus likely performance-linked to GE's data & AI transformation milestones. GE FY2023 NPAT grew 28% — strong performance year supports upper end of range."
          />
          <IncomeBar
            label="Benefits & Allowances"
            low={income.benefits.low}
            high={income.benefits.high}
            pct={7}
            tooltip="Includes car allowance (common at MD level in Singapore insurance), group medical, club memberships, and executive benefits. Estimated at S$30K–60K based on market norms for SGX-listed company C-suite."
          />
          <IncomeBar
            label="NUS Adjunct Professorship"
            low={income.adjunct.low}
            high={income.adjunct.high}
            pct={4}
            tooltip="NUS Adjunct Associate Professor roles typically pay S$20K–40K per annum depending on modules taught. Dr Zhao has held this role for 8+ years at NUS Business School. Publicly confirmed via her speaker profiles and LinkedIn."
          />
        </div>
        <p className="text-xs text-gray-400 mt-4 italic">{income.note}</p>
      </div>
    </section>
  );
}
