import { client } from "@/data/client";

function fmt(n: number) {
  return "S$" + (n >= 1_000_000
    ? (n / 1_000_000).toFixed(1) + "M"
    : (n / 1_000).toFixed(0) + "K");
}

export default function PortfolioAllocation() {
  const { currentAllocation, netWorth, targetAllocation } = client;

  const netWorthItems = [
    netWorth.property,
    netWorth.cpf,
    netWorth.equities,
    netWorth.cash,
    netWorth.insurance,
    netWorth.ocbcShares,
    netWorth.other,
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
          {/* Stacked bar */}
          <div className="flex h-4 rounded-full overflow-hidden w-full">
            {currentAllocation.map((item) => (
              <div
                key={item.label}
                style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                title={`${item.label}: ${item.pct}%`}
              />
            ))}
          </div>
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
            {targetAllocation.map((row) => {
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
                    <div className="h-full rounded-full opacity-30" style={{ width: `${row.current}%`, backgroundColor: row.color }} />
                    <div className="h-full rounded-full absolute top-0 left-0" style={{ width: `${row.target}%`, backgroundColor: row.color, opacity: 0.9 }} />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">
            Main action: shift from cash into equities, introduce bond allocation, and add alternatives to reduce concentration risk.
          </p>
        </div>
      </div>
    </section>
  );
}
