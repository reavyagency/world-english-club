import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { Reveal } from "@/components/ui/Reveal";
import { V2Section, H2, Lead, CtaPrimary, CtaSecondary, tone } from "./_ui";

/**
 * V2, Fechamento — navy.
 *
 * Um único glow dourado radial, contido, ao fundo: dá foco sem virar enfeite
 * (sem grade, sem noise). Urgência honesta ("ainda hoje"), sem contador fake.
 * O reforço da garantia fica junto do CTA — é onde a objeção de risco aparece.
 */
export function FinalCta() {
  const { finalCta } = site;
  return (
    <V2Section id={finalCta.id} tone="navy" className="overflow-hidden">
      {/* Glow dourado único e contido (decorativo) */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(60% 70% at 50% 0%, rgba(212,175,55,0.10), transparent 70%)",
        }}
      />

      <Reveal className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <H2 tone="navy" className="text-balance sm:text-[3.25rem]">
              {finalCta.title}
            </H2>
            <Lead tone="navy" className="mt-5 max-w-xl">
              {finalCta.subtitle}
            </Lead>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <CtaPrimary
              href={finalCta.primaryCta.href}
              tone="navy"
              className="w-full sm:w-auto"
            >
              {finalCta.primaryCta.label}
              <ArrowRight size={18} aria-hidden />
            </CtaPrimary>

            <CtaSecondary
              href={brand.urls.whatsapp}
              tone="navy"
              className="w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden />
              {finalCta.secondaryCta.label}
            </CtaSecondary>

            <p className={`mt-2 flex items-center gap-2 text-sm ${tone.navy.muted}`}>
              <ShieldCheck size={16} aria-hidden className="shrink-0 text-success" />
              {site.guarantee.title}
            </p>
          </div>
        </div>
      </Reveal>
    </V2Section>
  );
}
