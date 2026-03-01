import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-blue-200" />

          <div className="space-y-8">
            {profile.experience.map((job, idx) => (
              <div key={idx} className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-blue-700 border-2 border-white shadow" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {job.company}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">{job.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5 whitespace-nowrap">
                      {job.period}
                    </span>
                    {job.location && (
                      <p className="text-xs text-gray-400 mt-1">{job.location}</p>
                    )}
                  </div>
                </div>

                {job.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {job.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 flex gap-2 leading-relaxed"
                      >
                        <span className="text-blue-400 mt-1 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
