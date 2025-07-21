import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { DictionaryProvider } from "@/contexts/dictionary-context";
import { getDictionary } from "@/lib/dictionaries";
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
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="dark" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        <DictionaryProvider dictionary={dict} lang={lang}>
          <Navigation />
          {children}
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}
