import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2, Lead, CtaPrimary, CtaSecondary } from "@/components/sections/v2/_ui";
import { V2Curriculum } from "@/components/sections/v2/_curriculum";
import { Footer } from "@/components/sections/v2/Footer";

export const metadata: Metadata = {
  title: "Grade completa do curso, World English Club",
  description: site.curriculum.subtitle,
};

/**
 * V2, página da grade completa.
 *
 * Existe para tirar as 100+ linhas de conteúdo da home sem escondê-las: quem
 * quer auditar aula por aula vem aqui; a home fica com o argumento.
 * Header próprio (o da home aponta para âncoras que não existem nesta rota).
 */
export default function GradeV2() {
  const { curriculum } = site;
  return (
    <div className="flex min-h-screen flex-col bg-navy-900 text-white">
      <header className="sticky top-0 z-50 border-b border-hairline bg-navy-900/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
          <Link href="/v2" aria-label="World English Club, voltar para a home">
            <BrandLogo variant="dark" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/v2"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-gold"
            >
              <ArrowLeft size={16} aria-hidden />
              Voltar
            </Link>
            <Link
              href="/v2#planos"
              className="gold-metal inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-navy-900 transition-[filter] hover:brightness-110"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <V2Section tone="navy" className="py-16 sm:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <Kicker tone="navy">{curriculum.eyebrow}</Kicker>
              <H2 tone="navy" className="mt-4 text-balance">
                {curriculum.title}
              </H2>
              <Lead tone="navy" className="mt-4">
                {curriculum.subtitle}
              </Lead>
            </div>
          </Reveal>
        </V2Section>

        <V2Curriculum />

        <V2Section tone="navy" className="border-t border-hairline">
          <Reveal>
            <div className="max-w-2xl">
              <H2 tone="navy" className="text-balance">
                Viu tudo o que está incluído?
              </H2>
              <Lead tone="navy" className="mt-4">
                Escolha o plano que combina com o seu ritmo e comece pelo alfabeto.
              </Lead>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaPrimary href="/v2#planos" tone="navy">
                  Ver os planos
                </CtaPrimary>
                <CtaSecondary href="/v2" tone="navy">
                  Voltar para a home
                </CtaSecondary>
              </div>
            </div>
          </Reveal>
        </V2Section>
      </main>

      <Footer />
    </div>
  );
}
