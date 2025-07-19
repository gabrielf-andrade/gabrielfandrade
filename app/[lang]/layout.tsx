import { Language } from "@/types/definitions";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel F. Andrade | Portfolio",
  description: "Gabriel F. Andrade - Fullstack Web Developer",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Language }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang} className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
