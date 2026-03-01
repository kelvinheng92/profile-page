import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Kenneth Zhu — Executive Director, Head of Data Science",
  description: "Professional profile of Kenneth Zhu, Executive Director & Head of Data Science at OCBC. Specialist in financial crime AI — 400 models, 6M decisions daily.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}
