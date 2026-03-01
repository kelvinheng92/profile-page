import { profile } from "@/data/profile";
import { ExternalLink, BookOpen } from "lucide-react";

export default function Publications() {
  const sorted = [...profile.publications].sort((a, b) => b.citations - a.citations);
  const totalCitations = profile.publications.reduce((s, p) => s + p.citations, 0);

  return (
    <section id="publications" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end gap-2 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Publications</h2>
          <div className="flex gap-3 text-xs text-gray-500 sm:mb-1">
            <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2.5 py-0.5 font-semibold">
              {profile.publications.length} papers
            </span>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2.5 py-0.5 font-semibold">
              {totalCitations} citations
            </span>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2.5 py-0.5 font-semibold">
              h-index {profile.scholarMetrics.hIndex}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {sorted.map((pub, idx) => (
            <div key={idx} className="flex gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:shadow-sm transition-shadow">
              <BookOpen size={18} className="text-blue-700 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{pub.title}</p>
                  {pub.url && (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 shrink-0">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{pub.authors}</p>
                <div className="mt-1.5 flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-gray-600 italic">{pub.venue}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-500">{pub.year}</span>
                  {pub.citations > 0 && (
                    <>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5 font-medium">
                        {pub.citations} citations
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-400 text-right">
          Source: <a href={profile.contact.scholar} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Scholar</a>
        </p>
      </div>
    </section>
  );
}
