import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Jin Yichao — Executive Director of Data Science",
  description: "Professional profile of Jin Yichao, Executive Director of Data Science. PhD from NTU, 20+ publications, 823 citations, h-index 16.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}
