import { profile } from "@/data/profile";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {profile.education.map((edu, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={18} className="text-blue-700 shrink-0" />
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  {edu.school}
                </h3>
              </div>
              <p className="text-sm font-semibold text-blue-700">{edu.degree}</p>
              <p className="text-xs text-gray-500 mt-1">{edu.field}</p>
              <p className="text-xs text-gray-400 mt-1">{edu.period}</p>
              {edu.note && (
                <span className="mt-3 inline-block text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2.5 py-0.5 font-semibold">
                  {edu.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
