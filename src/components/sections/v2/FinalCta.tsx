import { MessageCircle, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { Reveal } from "@/components/ui/Reveal";

/**
 * V2 — Fechamento. Painel editorial com glow teal, headline à esquerda e
 * CTAs deslocados. Urgência honesta ("ainda hoje"), sem contador fake.
 */
export function FinalCta() {
  const { finalCta } = site;
  return (
    <section id={finalCta.id} className="px-6 py-20 sm:py-28">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-400/30 p-8 sm:p-14">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(70% 90% at 100% 0%, rgba(16,185,129,0.22), transparent 60%), radial-gradient(60% 80% at 0% 100%, rgba(34,211,238,0.16), transparent 60%), linear-gradient(180deg, var(--color-surface), var(--color-bg))",
          }}
        />
        <div className="bg-grid absolute inset-0 -z-10 opacity-30" aria-hidden />

        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted">{finalCta.subtitle}</p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href={finalCta.primaryCta.href}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-[#04120e] shadow-[0_12px_45px_-8px_rgba(16,185,129,0.65)] transition-all hover:shadow-[0_16px_55px_-6px_rgba(16,185,129,0.8)] active:scale-[0.98] sm:w-auto"
            >
              {finalCta.primaryCta.label}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={brand.urls.whatsapp}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface/60 px-8 py-4 text-base font-semibold text-ink transition-colors hover:border-emerald-400/40 hover:bg-surface-2 sm:w-auto"
            >
              <MessageCircle size={18} className="text-accent" />
              {finalCta.secondaryCta.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
