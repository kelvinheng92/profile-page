import { profile } from "@/data/profile";
import { MapPin, Linkedin, Github, BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 print:border-0">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-xl text-blue-700 font-medium">{profile.title}</p>
          <p className="mt-2 text-base text-gray-500 max-w-xl">{profile.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-blue-700" />{profile.location}</span>
            {profile.contact.linkedin && (
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 transition-colors">
                <Linkedin size={15} />LinkedIn
              </a>
            )}
            {profile.contact.github && (
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 transition-colors">
                <Github size={15} />GitHub
              </a>
            )}
            {profile.contact.scholar && (
              <a href={profile.contact.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 transition-colors">
                <BookOpen size={15} />Google Scholar
              </a>
            )}
          </div>
          <div className="mt-3 flex gap-4 text-xs">
            <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 font-semibold">{profile.scholarMetrics.totalCitations} citations</span>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 font-semibold">h-index {profile.scholarMetrics.hIndex}</span>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 font-semibold">i10-index {profile.scholarMetrics.i10Index}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
