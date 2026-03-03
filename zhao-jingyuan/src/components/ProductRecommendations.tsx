import { ShoppingBag, Zap, Clock, Calendar } from "lucide-react";
import { client } from "@/data/client";

const urgencyConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  "Immediate": { icon: Zap, color: "text-[#C8102E]", bg: "bg-red-50 border-red-200" },
  "Short-term": { icon: Clock, color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
  "Medium-term": { icon: Calendar, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  "Demo opportunity": { icon: Zap, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
  "Onboarding": { icon: Clock, color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
};

const categoryColors: Record<string, string> = {
  "Wealth & Investment": "bg-[#C8102E]",
  "Insurance & Protection": "bg-amber-600",
  "Banking & Credit": "bg-[#1a1a2e]",
  "Digital & Lifestyle": "bg-emerald-600",
};

export default function ProductRecommendations() {
  const { products } = client;

  return (
    <section id="products" className="max-w-6xl mx-auto px-6 pb-10">
      <div className="flex items-center gap-3 mb-5">
        <ShoppingBag className="w-4 h-4 text-[#C8102E]" />
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">OCBC Product Recommendations</h2>
      </div>

      <div className="space-y-6">
        {products.map((cat) => {
          const UrgencyIcon = urgencyConfig["Immediate"].icon;
          return (
            <div key={cat.category} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Category header */}
              <div className={`${categoryColors[cat.category] ?? "bg-gray-700"} px-5 py-3 flex items-center justify-between`}>
                <h3 className="text-sm font-bold text-white">{cat.category}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  cat.priority === "PRIMARY" ? "bg-white/30 text-white" :
                  cat.priority === "SECONDARY" ? "bg-white/20 text-white/80" :
                  "bg-white/10 text-white/60"
                }`}>
                  {cat.priority}
                </span>
              </div>

              {/* Products */}
              <div className="divide-y divide-gray-50">
                {cat.items.map((item, i) => {
                  const uConf = urgencyConfig[item.urgency] ?? urgencyConfig["Short-term"];
                  const Icon = uConf.icon;
                  return (
                    <div key={i} className="px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className={`flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-full border shrink-0 ${uConf.bg} ${uConf.color}`}>
                        <Icon className="w-3 h-3" />
                        {item.urgency}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.description}</p>
                      </div>
                      <div className="sm:w-48 shrink-0">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Why it fits</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.fit}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
