import { client } from "@/data/client";

function fmt(n: number) {
  return "S$" + (n >= 1_000_000
    ? (n / 1_000_000).toFixed(1) + "M"
    : (n / 1_000).toFixed(0) + "K");
}

function AllocationBar({
  items,
}: {
  items: { label: string; pct: number; color: string }[];
}) {
  return (
    <div className="flex h-4 rounded-full overflow-hidden w-full">
      {items.map((item) => (
        <div
          key={item.label}
          style={{ width: `${item.pct}%`, backgroundColor: item.color }}
          title={`${item.label}: ${item.pct}%`}
        />
      ))}
    </div>
  );
}

export default function PortfolioAllocation() {
  const { currentAllocation, netWorth } = client;

  const netWorthItems = [
    netWorth.property,
    netWorth.cpf,
    netWorth.equities,
    netWorth.cash,
    netWorth.insurance,
    netWorth.ocbcShares,
    netWorth.other,
  ];

  const targetAlloc = [
    { label: "Real Estate", current: 47, target: 38, color: "#C8102E" },
    { label: "CPF / CPFIS", current: 18, target: 17, color: "#e85d75" },
    { label: "Equities", current: 14, target: 27, color: "#1e3a5f" },
    { label: "Bonds / Fixed Income", current: 3, target: 12, color: "#6b7280" },
    { label: "Insurance", current: 6, target: 6, color: "#f59e0b" },
    { label: "Alternatives", current: 0, target: 7, color: "#10b981" },
    { label: "Cash", current: 12, target: 3, color: "#d1d5db" },
  ];

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 pb-10">
      <h2 className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-5">Portfolio Allocation</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Current (Estimated)</h3>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
              ~{fmt(netWorth.midpoint)} total
            </span>
          </div>
          <AllocationBar items={currentAllocation} />
          <div className="mt-4 space-y-2">
            {netWorthItems.map((item, i) => (
              <div key={item.label} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: currentAllocation[i]?.color ?? "#ccc" }}
                  />
                  <span className="text-gray-600">{item.label}</span>
                </div>
                <span className="font-semibold text-gray-800">
                  {fmt(item.low)} – {fmt(item.high)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current vs Target */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Current vs Recommended Target</h3>
            <span className="text-xs bg-[#C8102E]/10 text-[#C8102E] px-2 py-1 rounded-full font-medium">OCBC View</span>
          </div>
          <div className="space-y-3">
            {targetAlloc.map((row) => {
              const gap = row.target - row.current;
              return (
                <div key={row.label}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: row.color }} />
                      <span className="text-xs text-gray-600">{row.label}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-500">{row.current}%</span>
                      <span className="text-gray-300">→</span>
                      <span className="font-bold text-gray-800">{row.target}%</span>
                      {gap !== 0 && (
                        <span className={`font-semibold ${gap > 0 ? "text-emerald-600" : "text-[#C8102E]"}`}>
                          {gap > 0 ? `+${gap}%` : `${gap}%`}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full relative overflow-hidden">
                    <div
                      className="h-full rounded-full opacity-30"
                      style={{ width: `${row.current}%`, backgroundColor: row.color }}
                    />
                    <div
                      className="h-full rounded-full absolute top-0 left-0"
                      style={{ width: `${row.target}%`, backgroundColor: row.color, opacity: 0.9 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">
            Key rebalancing opportunity: reduce real estate concentration, grow equities and introduce alternative investments.
          </p>
        </div>
      </div>
    </section>
  );
}
