import { profile } from "@/data/profile";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Testimonials</h2>
        <p className="text-sm text-gray-500 mb-8">
          {profile.testimonials.length} recommendations from LinkedIn
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-5 bg-white flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                <span className="text-blue-300 text-2xl font-serif leading-none mr-1">&ldquo;</span>
                {t.text}
                <span className="text-blue-300 text-2xl font-serif leading-none ml-1">&rdquo;</span>
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-3 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.title} · {t.company}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-gray-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
