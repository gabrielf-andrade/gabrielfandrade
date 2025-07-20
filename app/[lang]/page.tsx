import { PortfolioClient } from "@/components/portfolio-client";
import { Language } from "@/types/definitions";
import { getDictionary } from "../../lib/dictionaries";

export default async function HomePage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <PortfolioClient dict={dict} lang={lang} />;
}
