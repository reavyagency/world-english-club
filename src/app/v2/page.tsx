import { Header } from "@/components/sections/v2/Header";
import { Hero } from "@/components/sections/v2/Hero";
import { CredibilityBar } from "@/components/sections/v2/CredibilityBar";
import { EmotionalConnection } from "@/components/sections/v2/EmotionalConnection";
import { Method } from "@/components/sections/v2/Method";
import { Modules } from "@/components/sections/v2/Modules";
import { Plans } from "@/components/sections/v2/Plans";
import { Testimonials } from "@/components/sections/v2/Testimonials";
import { Author } from "@/components/sections/v2/Author";
import { Guarantee } from "@/components/sections/v2/Guarantee";
import { Faq } from "@/components/sections/v2/Faq";
import { FinalCta } from "@/components/sections/v2/FinalCta";
import { Footer } from "@/components/sections/v2/Footer";

/**
 * VERSÃO 2, Landing premium "Editorial split / dark teal".
 *
 * Mesmas 11 seções + header + footer e a MESMA copy da v1 (fonte única:
 * `src/content/site.ts`), com linguagem de layout distinta: assimétrica,
 * numerada (01/02/…), rails horizontais e paleta de acento esmeralda/teal/ciano.
 */
export default function V2() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CredibilityBar />
        <EmotionalConnection />
        <Method />
        <Modules />
        <Plans />
        <Testimonials />
        <Author />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
