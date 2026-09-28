import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahmi Rifki Haikal | Full-Stack Developer & AI Enthusiast",
  description: "Portofolio Fahmi Rifki Haikal - Full-Stack Web Developer & AI Enthusiast lulusan Teknik Informatika ITN Malang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}