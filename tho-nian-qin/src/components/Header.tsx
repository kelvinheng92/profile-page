import { profile } from "@/data/profile";
import { MapPin, Linkedin, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 print:border-0">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{profile.name}</h1>
          <p className="mt-0.5 text-sm text-gray-500 font-medium">{profile.fullName}</p>
          <p className="mt-1 text-xl text-blue-700 font-medium">{profile.title}</p>
          <p className="mt-2 text-base text-gray-500 max-w-xl">{profile.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-blue-700" />{profile.location}</span>
            {profile.contact.linkedin && (
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 transition-colors">
                <Linkedin size={15} />LinkedIn
              </a>
            )}
            {profile.contact.website && (
              <a href={profile.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 transition-colors">
                <Globe size={15} />Clinic Profile
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
