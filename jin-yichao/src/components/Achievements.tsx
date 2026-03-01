import { profile } from "@/data/profile";

const CATEGORY_STYLES: Record<string, string> = {
  Sports: "bg-green-50 text-green-700 border border-green-200",
  Academic: "bg-blue-50 text-blue-700 border border-blue-200",
  Other: "bg-gray-100 text-gray-600 border border-gray-200",
};

export default function Achievements() {
  const grouped = profile.achievements.reduce<
    Record<string, typeof profile.achievements>
  >((acc, a) => {
    acc[a.category] = acc[a.category] ? [...acc[a.category], a] : [a];
    return acc;
  }, {});

  return (
    <section id="achievements" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
        <div className="space-y-8">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg bg-white"
                  >
                    {item.year && (
                      <span className="shrink-0 text-xs font-bold bg-blue-700 text-white rounded px-2 py-1 mt-0.5">
                        {item.year}
                      </span>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </p>
                      {item.detail && (
                        <p className="text-xs text-gray-500 mt-1">{item.detail}</p>
                      )}
                    </div>
                    <span
                      className={`shrink-0 text-xs rounded-full px-2.5 py-0.5 font-medium ${
                        CATEGORY_STYLES[category] ?? CATEGORY_STYLES.Other
                      }`}
                    >
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
