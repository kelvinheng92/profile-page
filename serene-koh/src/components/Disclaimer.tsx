import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="bg-amber-50 border-b border-amber-300 px-6 py-3 flex items-start gap-3">
      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
      <p className="text-xs text-amber-800 leading-relaxed">
        <span className="font-bold">AI-Generated Content — </span>
        This profile was compiled using publicly available information and AI analysis. Financial estimates (income, net worth, portfolio allocation) are approximations based on industry benchmarks and publicly disclosed data. Details may be inaccurate or outdated. <span className="font-semibold">Please verify all information independently before use in client engagements.</span>
      </p>
    </div>
  );
}
