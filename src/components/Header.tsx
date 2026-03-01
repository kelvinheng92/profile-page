import Image from "next/image";
import { profile } from "@/data/profile";
import { MapPin, Linkedin, Mail, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 print:border-0">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="shrink-0">
            <Image
              src="/avatar.jpg"
              alt={profile.name}
              width={100}
              height={100}
              className="rounded-full object-cover border-2 border-gray-200 shadow-sm"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-1 text-xl text-blue-700 font-medium">
              {profile.title}
            </p>
            <p className="mt-2 text-base text-gray-500 max-w-xl">
              {profile.tagline}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-blue-700" />
                {profile.location}
              </span>
              {profile.contact.linkedin && (
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              )}
              {profile.contact.email && (
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Mail size={15} />
                  {profile.contact.email}
                </a>
              )}
              {profile.contact.github && (
                <a
                  href={`https://github.com/${profile.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Github size={15} />
                  {profile.contact.github}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
