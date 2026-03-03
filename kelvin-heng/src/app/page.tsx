import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Teaching from "@/components/Teaching";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import LogoutButton from "@/components/LogoutButton";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#teaching", label: "Teaching" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#achievements", label: "Achievements" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Home() {
  return (
    <>
      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 print:hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ul className="flex gap-6 py-3 text-sm font-medium text-gray-600 overflow-x-auto items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="hover:text-blue-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="shrink-0 ml-auto">
              <LogoutButton />
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Header />
        <About />
        <Experience />
        <Teaching />
        <Education />
        <Skills />
        <Certifications />
        <Achievements />
        <Testimonials />
      </main>

      <footer className="py-8 text-center text-xs text-gray-400 border-t border-gray-200 print:hidden">
        © {new Date().getFullYear()} Kelvin Heng · Singapore
      </footer>
    </>
  );
}
