import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Dr. Emily Tho — Aesthetic Doctor",
  description: "Professional profile of Dr. Emily Tho (Tho Nian Qin), Aesthetic Doctor at V Medical Aesthetics & Laser Clinic. MBBS NUS, SingHealth Best Medical Officer Award.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}
