import { Building2, GraduationCap, Globe, Users, Star } from "lucide-react";
import Image from "next/image";
import { client } from "@/data/client";
import LogoutButton from "@/components/LogoutButton";

export default function ClientHeader() {
  return (
    <div className="bg-[#C8102E] text-white">
      {/* OCBC RM Bar */}
      <div className="bg-[#a00d24] px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-sm tracking-widest uppercase">OCBC</span>
          <span className="text-white/60 text-xs">|</span>
          <span className="text-white/80 text-xs font-medium tracking-wide">Relationship Manager — Client Profile</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-xs">INTERNAL USE ONLY · March 2026</span>
          <LogoutButton />
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: identity */}
          <div className="flex items-start gap-5">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 shadow-lg border-2 border-white/30">
              <Image
                src="/serene-koh.jpg"
                alt="Serene Koh"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{client.name}</h1>
              <p className="text-white/80 mt-0.5 text-sm font-medium">{client.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <Building2 className="w-3.5 h-3.5 text-white/60" />
                <span className="text-white/60 text-xs">{client.employer}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-white text-[#C8102E] text-xs font-bold px-3 py-1 rounded-full">
                  Premier Private Client
                </span>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                  Accredited Investor
                </span>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                  Internal OCBC Employee
                </span>
              </div>
            </div>
          </div>

          {/* Right: quick facts */}
          <div className="grid grid-cols-2 gap-3 text-xs text-white/75">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-white/60 shrink-0" />
              <span>NUS Undergraduate (1999–2002)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white/60 shrink-0" />
              <span>{client.nationality}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-white/60 shrink-0" />
              <span>Previous: Citi (Consumer Banking)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white/60 shrink-0" />
              <span>{client.familyStatus}</span>
            </div>
          </div>
        </div>

        {/* Relationship angle callout */}
        <div className="mt-6 bg-white/10 border border-white/25 rounded-xl p-4 flex items-start gap-3">
          <span className="text-white text-lg mt-0.5">⚡</span>
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Key Relationship Angle</p>
            <p className="text-white/75 text-xs leading-relaxed">{client.relationshipAngle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
