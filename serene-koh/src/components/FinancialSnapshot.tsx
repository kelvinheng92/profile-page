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
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-600">{label}</span>
        </div>
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
          tooltip="Midpoint of base salary + bonus + benefits + deferred shares. OCBC MD-grade benchmarked against Glassdoor, eFinancialCareers, and Michael Page SG Salary Guide 2026. Assumes ~15+ years at OCBC with seniority progression."
        />
        <StatCard
          icon={TrendingUp}
          label="Est. Net Worth"
          value={fmt(netWorth.midpoint)}
          sub={`Range: ${fmt(netWorth.totalLow)} – ${fmt(netWorth.totalHigh)}`}
          color="bg-[#1a1a2e]"
          tooltip="Sum of estimated property equity, CPF, equities, cash, insurance surrender value, and deferred OCBC shares. Assumes ~20+ years of working life, property purchased in 2015–2020 range, with partial mortgage outstanding."
        />
        <StatCard
          icon={PieChart}
          label="OCBC Target AUM"
          value="S$1.5M+"
          sub="Premier Private Client eligible"
          color="bg-emerald-600"
          tooltip="OCBC PPC threshold is S$1.5M fresh funds + Accredited Investor status. Net worth midpoint of ~S$2.7M suggests she qualifies. Staff benefit banking further supports full PPC enrolment."
        />
        <StatCard
          icon={Shield}
          label="Accredited Investor"
          value="Eligible"
          sub="Net assets > S$2M or income > S$300K"
          color="bg-blue-700"
          tooltip="MAS Accredited Investor: net personal assets > S$2M or income > S$300K p.a. At MD level with S$460K–810K total comp, she satisfies the income threshold. Net worth also likely clears the asset threshold."
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
            pct={62}
            tooltip="OCBC MD-grade base: S$300K–420K. Benchmarked against Glassdoor (OCBC Executive Director S$250K–530K p.a.) and eFinancialCareers Singapore bank MD salary data. Seniority of ~8+ years at MD-equivalent grade assumed."
          />
          <IncomeBar
            label="Performance Bonus"
            low={income.bonus.low}
            high={income.bonus.high}
            pct={23}
            tooltip="30–50% of base salary. OCBC's bonus structure for MD-level in consumer banking functions. Digital business unit performance likely tracks well given OCBC's strong 2023–2024 earnings (ROE >14%)."
          />
          <IncomeBar
            label="Benefits & Allowances"
            low={income.benefits.low}
            high={income.benefits.high}
            pct={9}
            tooltip="Includes car allowance (~S$1,500–3,000/month), health benefits, staff banking perks, and other executive benefits standard at OCBC MD grade."
          />
          <IncomeBar
            label="OCBC Deferred Shares (est. annual accrual)"
            low={income.deferredShares.low}
            high={income.deferredShares.high}
            pct={12}
            tooltip="OCBC Deferred Share Plan — MD-level participants receive a portion of variable pay as deferred OCBC shares. Estimated at S$40K–120K annual award based on reported share scheme participation rates from OCBC's 2023 remuneration disclosures. Vests March 2027."
          />
        </div>
        <p className="text-xs text-gray-400 mt-4 italic">{income.note}</p>
      </div>
    </section>
  );
}
