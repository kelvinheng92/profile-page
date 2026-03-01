import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
        <div className="border-l-4 border-blue-700 pl-5 bg-gray-50 rounded-r-lg py-5 pr-5">
          <p className="text-gray-700 leading-relaxed text-base">
            {profile.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.languages.map((lang) => (
              <span
                key={lang}
                className="text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
