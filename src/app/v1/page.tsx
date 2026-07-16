import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { EmotionalConnection } from "@/components/sections/EmotionalConnection";
import { Method } from "@/components/sections/Method";
import { Modules } from "@/components/sections/Modules";
import { Plans } from "@/components/sections/Plans";
import { Testimonials } from "@/components/sections/Testimonials";
import { Author } from "@/components/sections/Author";
import { Guarantee } from "@/components/sections/Guarantee";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

/**
 * VERSÃO 1, Landing premium (layout de referência).
 *
 * As 11 seções + header + footer, na ordem especificada. A copy vem de
 * `src/content/site.ts`; cores/assets/URLs em `globals.css` + `config/brand.ts`.
 */
export default function V1() {
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
