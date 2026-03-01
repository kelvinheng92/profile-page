import { profile } from "@/data/profile";
import { ExternalLink, Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
        <div className="space-y-3">
          {profile.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:shadow-sm transition-shadow"
            >
              <Award size={20} className="text-blue-700 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-sm font-semibold text-gray-900 truncate">
                    {cert.name}
                  </span>
                  <span className="text-xs text-gray-500 shrink-0">
                    {cert.issuer} · {cert.date}
                  </span>
                </div>
                {cert.licenseNumber && (
                  <p className="text-xs text-gray-400 mt-0.5">
                    License: {cert.licenseNumber}
                  </p>
                )}
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 shrink-0"
                  title="View certificate"
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
