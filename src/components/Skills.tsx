import { profile } from "@/data/profile";

const CATEGORY_LABELS: Record<string, string> = {
  leadership: "Leadership",
  ml_ai: "ML & AI",
  engineering: "Engineering",
  finance: "Finance",
  other: "Other",
};

const CATEGORY_COLORS: Record<string, string> = {
  leadership: "bg-purple-50 text-purple-700 border-purple-200",
  ml_ai: "bg-blue-50 text-blue-700 border-blue-200",
  engineering: "bg-emerald-50 text-emerald-700 border-emerald-200",
  finance: "bg-amber-50 text-amber-700 border-amber-200",
  other: "bg-gray-100 text-gray-600 border-gray-200",
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.keys(profile.skills) as Array<keyof typeof profile.skills>).map(
            (category) => (
              <div key={category}>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                  {CATEGORY_LABELS[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills[category].map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs border rounded-full px-3 py-1 font-medium ${CATEGORY_COLORS[category]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
