import { PortfolioClient } from "@/components/PortfolioClient";
import { Language } from "@/types/definitions";
import { getDictionary } from "./dictionaries";

export default async function HomePage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <PortfolioClient dict={dict} lang={lang} />;
}
