import Disclaimer from "@/components/Disclaimer";
import ClientHeader from "@/components/ClientHeader";
import FinancialSnapshot from "@/components/FinancialSnapshot";
import PortfolioAllocation from "@/components/PortfolioAllocation";
import CareerAndEquity from "@/components/CareerAndEquity";
import NextBestConversations from "@/components/NextBestConversations";
import ProductRecommendations from "@/components/ProductRecommendations";
import References from "@/components/References";

const NAV = [
  { href: "#snapshot", label: "Financial Snapshot" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#career", label: "Career & Equity" },
  { href: "#conversations", label: "Conversations" },
  { href: "#products", label: "Products" },
  { href: "#references", label: "References" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f6f9]">
      <Disclaimer />
      <ClientHeader />

      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex gap-6 py-3 text-sm font-medium text-gray-500 overflow-x-auto">
            {NAV.map((link) => (
              <li key={link.href} className="shrink-0">
                <a href={link.href} className="hover:text-[#C8102E] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="pt-8">
        <FinancialSnapshot />
        <PortfolioAllocation />
        <CareerAndEquity />
        <NextBestConversations />
        <ProductRecommendations />
        <References />
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-6 mt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-400">
        <span>OCBC Bank · Relationship Manager Intelligence · <strong className="text-gray-500">INTERNAL USE ONLY</strong></span>
        <span>Profile prepared March 2026</span>
      </footer>
    </div>
  );
}
