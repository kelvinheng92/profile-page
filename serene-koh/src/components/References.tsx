import { BookOpen, ExternalLink } from "lucide-react";
import { client } from "@/data/client";

export default function References() {
  return (
    <section id="references" className="max-w-6xl mx-auto px-6 pb-12">
      <div className="flex items-center gap-3 mb-5">
        <BookOpen className="w-4 h-4 text-[#C8102E]" />
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">Sources & References</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          The following publicly available sources were used to compile this profile. Financial estimates are derived from industry benchmarks and disclosed data — they are approximations only.
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {client.sources.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-xs text-blue-700 hover:text-[#C8102E] transition-colors group"
            >
              <ExternalLink className="w-3 h-3 shrink-0 mt-0.5 group-hover:text-[#C8102E]" />
              <span className="underline underline-offset-2 leading-relaxed">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
