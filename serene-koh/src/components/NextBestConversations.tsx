import { MessageCircle, ChevronRight } from "lucide-react";
import { client } from "@/data/client";

const priorityConfig = {
  HIGH: { bg: "bg-[#C8102E]", text: "text-white", border: "border-[#C8102E]", glow: "shadow-[0_0_0_3px_rgba(200,16,46,0.12)]" },
  MEDIUM: { bg: "bg-[#1a1a2e]", text: "text-white", border: "border-[#1a1a2e]", glow: "" },
  LOW: { bg: "bg-gray-400", text: "text-white", border: "border-gray-300", glow: "" },
};

export default function NextBestConversations() {
  const { nextBestConversations } = client;
  const grouped = {
    HIGH: nextBestConversations.filter((c) => c.priority === "HIGH"),
    MEDIUM: nextBestConversations.filter((c) => c.priority === "MEDIUM"),
    LOW: nextBestConversations.filter((c) => c.priority === "LOW"),
  };

  return (
    <section id="conversations" className="max-w-6xl mx-auto px-6 pb-10">
      <div className="flex items-center gap-3 mb-5">
        <MessageCircle className="w-4 h-4 text-[#C8102E]" />
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">Next Best Conversations</h2>
      </div>

      {(["HIGH", "MEDIUM", "LOW"] as const).map((level) => (
        <div key={level} className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${priorityConfig[level].bg} ${priorityConfig[level].text}`}>
              {level} PRIORITY
            </span>
            <span className="text-xs text-gray-400">{grouped[level].length} conversation{grouped[level].length !== 1 ? "s" : ""}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {grouped[level].map((conv, i) => (
              <div key={i} className={`bg-white rounded-2xl border p-5 shadow-sm ${priorityConfig[level].border} ${priorityConfig[level].glow}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{conv.tag}</span>
                    <h3 className="text-sm font-bold text-gray-900 mt-0.5">{conv.title}</h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 shrink-0 mt-1" />
                </div>
                <div className="bg-gray-50 rounded-xl p-3 mb-3 border border-gray-100">
                  <p className="text-xs text-gray-700 italic leading-relaxed">{conv.opener}</p>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Why this works</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{conv.why}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Follow-up</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{conv.followUp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
