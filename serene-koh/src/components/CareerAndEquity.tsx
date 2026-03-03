import { client } from "@/data/client";

const levelColors: Record<string, string> = {
  "MD": "bg-[#C8102E] text-white",
  "Senior": "bg-[#1a1a2e] text-white",
  "Director": "bg-blue-700 text-white",
  "Mid-Senior": "bg-gray-500 text-white",
  "Education": "bg-emerald-600 text-white",
};

export default function CareerAndEquity() {
  const { career, equityNote, keyInitiatives } = client;
  return (
    <section id="career" className="max-w-6xl mx-auto px-6 pb-10">
      <h2 className="text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-5">Career, Initiatives & OCBC Equity</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Career timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Career Timeline (~20+ yrs)</h3>
          <div className="relative">
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-4">
              {career.map((job, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-xs text-gray-400 w-20 pt-0.5 shrink-0 text-right">{job.period}</span>
                  <div className="relative z-10 w-2 h-2 rounded-full bg-[#C8102E] mt-1.5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-gray-800">{job.employer}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${levelColors[job.level] ?? "bg-gray-200 text-gray-600"}`}>
                        {job.level}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{job.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OCBC Equity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">OCBC Deferred Share Plan</h3>
          <p className="text-xs text-gray-400 mb-4">MD-level OCBC employees receive deferred OCBC shares as part of variable pay</p>

          <div className="bg-[#1a1a2e] rounded-xl p-4 text-white mb-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <p className="text-sm font-semibold">{equityNote.scheme}</p>
                <p className="text-xs text-white/60 mt-1">Vesting: <span className="text-white/90 font-medium">{equityNote.vesting}</span></p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed mb-4">{equityNote.detail}</p>

          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Vesting Performance Metrics</p>
            <div className="space-y-2">
              {equityNote.metrics.map((m) => (
                <div key={m} className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0" />
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="text-xs font-semibold text-blue-800 mb-1">Insider Advantage</p>
            <p className="text-xs text-blue-700 leading-relaxed">{equityNote.internalInsight}</p>
          </div>

          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-xs font-semibold text-amber-800 mb-1">RM Opportunity</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              Shares vest March 2027. Engage now on how to diversify away from OCBC stock concentration — she already earns salary + bonus from OCBC, so holding vesting shares adds further single-stock risk.
            </p>
          </div>
        </div>
      </div>

      {/* Key Initiatives */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Key Digital Initiatives Led at OCBC</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {keyInitiatives.map((initiative, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
              <span className="w-5 h-5 rounded-full bg-[#C8102E]/10 text-[#C8102E] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              {initiative}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
