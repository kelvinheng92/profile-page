import { BookOpen, ExternalLink } from "lucide-react";

const sources = [
  { label: "Dr Zhao Jingyuan — ITC Asia 2026 Speaker Profile", url: "https://asia.insuretechconnect.com/speakers/dr-zhao-jingyuan" },
  { label: "Jingyuan Zhao (PhD) — LinkedIn", url: "https://www.linkedin.com/in/jingyuan-zhao-phd-24347853/" },
  { label: "Zhao Jingyuan — Bloomberg Markets Profile", url: "https://www.bloomberg.com/profile/person/24645014" },
  { label: "Marie France Asia — Interview (Lazada era)", url: "https://www.mariefranceasia.com/culture/from-us-to-you/interviews/interview-zhao-jing-yuan-257153.html" },
  { label: "Dr Zhao Jingyuan — InsureTech Connect Asia 2024", url: "https://asia.insuretechconnect.com/full-speakers/dr-zhao-jingyuan" },
  { label: "CDOTrends — DataScience & AI Trends Asia Summit 2024", url: "https://www.cdotrends.com/event/datascience-ai-trends-asia-summit/2024/singapore/" },
  { label: "Bringing AI to the Enterprise — CDOTrends", url: "https://www.cdotrends.com/story/18160/bringing-ai-enterprise" },
  { label: "OCBC Premier Banking Tiers", url: "https://www.ocbc.com/personal-banking/premier/en" },
  { label: "OCBC Premier Private Client", url: "https://www.ocbc.com/personal-banking/premier-private-client/" },
  { label: "OCBC Acquires Great Eastern — S$1.4B Offer", url: "https://www.ocbc.com/group/media/release/2024/ocbc-makes-1point4-billion-offer-for-great-eastern.page" },
  { label: "Great Eastern Delisting Bid Fails — Fortune Asia", url: "https://fortune.com/asia/2025/07/09/great-eastern-ocbc-delisting-bid-fails/" },
  { label: "OCBC Deferred Share Plan — ainvest.com", url: "https://www.ainvest.com/news/ocbc-deferred-share-plan-aligning-incentives-strategic-growth-2504/" },
  { label: "OCBC Offers to Buy Out Great Eastern — Dr Wealth", url: "https://drwealth.com/ocbc-offers-to-buy-out-great-eastern-amid-minority-shareholder-complaints-but-is-the-offer-fair/" },
  { label: "Singapore C-Suite Salary Guide — Michael Page 2026", url: "https://www.michaelpage.com.sg/salary-guide" },
  { label: "Average Condo Prices Singapore 2024", url: "https://condolaunch.sg/news/average-condo-price-singapore/" },
  { label: "2025 Insurance Salary Guide Singapore — Randstad", url: "https://www.randstad.com.sg/hr-trends/workforce-trends/insurance-2025-job-market-outlook-salary-guide/" },
  { label: "Guide to Private Banking Singapore — Dollars and Sense", url: "https://dollarsandsense.sg/guide-private-banking-singapore-heres-much-need-earn-open-account/" },
];

export default function References() {
  return (
    <section id="references" className="max-w-6xl mx-auto px-6 pb-12">
      <div className="flex items-center gap-3 mb-5">
        <BookOpen className="w-4 h-4 text-[#C8102E]" />
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">Sources & References</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          The following publicly available sources were used to compile this profile. Financial estimates are derived from industry benchmarks and disclosed data — they are approximations only.
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {sources.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-xs text-blue-700 hover:text-[#C8102E] transition-colors group"
            >
              <ExternalLink className="w-3 h-3 shrink-0 mt-0.5 group-hover:text-[#C8102E]" />
              <span className="underline underline-offset-2 leading-relaxed">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
