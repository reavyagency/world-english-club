import { Luggage, Check } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Disclosure } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialHeading } from "./_shared";

/**
 * V2 — Módulos em RAIL horizontal (scroll-snap), não grid centralizado.
 * 3 módulos + card bônus Trip Tip destacado em teal + grade via Disclosure.
 */
export function Modules() {
  const { modules } = site;
  return (
    <Section id={modules.id} className="bg-surface/30">
      <EditorialHeading
        number="03"
        eyebrow="Conteúdo"
        title={modules.title}
        subtitle={modules.subtitle}
      />

      {/* Rail horizontal */}
      <Reveal delay={0.05}>
        <div
          className="-mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]"
          role="list"
          aria-label="Módulos do curso"
        >
          {modules.items.map((mod, i) => (
            <article
              key={mod.tag}
              role="listitem"
              className="group relative flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all hover:border-emerald-400/40 hover:shadow-[0_24px_60px_-30px_rgba(16,185,129,0.5)] sm:w-[360px]"
            >
              <span
                className="pointer-events-none absolute -right-3 -top-6 font-display text-8xl font-bold text-line/60 transition-colors group-hover:text-emerald-400/15"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {mod.tag}
              </span>
              <h3 className="relative mt-3 font-display text-xl font-semibold">
                {mod.title}
              </h3>
              <p className="relative mt-3 text-muted">{mod.description}</p>
            </article>
          ))}

          {/* Card bônus Trip Tip */}
          <article
            role="listitem"
            className="group relative flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-emerald-400/40 p-7 sm:w-[360px]"
            style={{
              backgroundImage:
                "linear-gradient(160deg, rgba(16,185,129,0.14), rgba(34,211,238,0.06) 60%, transparent)",
            }}
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-400/15 text-accent">
              <Luggage size={24} aria-hidden />
            </span>
            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {modules.bonus.tag}
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold">
              {modules.bonus.title}
            </h3>
            <p className="mt-3 text-muted">{modules.bonus.description}</p>
          </article>
        </div>
      </Reveal>

      {/* Grade completa (progressive disclosure) */}
      <Reveal delay={0.1} className="mt-8">
        <Disclosure label={modules.gradeToggleLabel}>
          <ul className="mt-6 grid max-w-4xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {modules.grade.map((lesson) => (
              <li key={lesson} className="flex items-start gap-2.5 text-muted">
                <Check size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </Disclosure>
      </Reveal>
    </Section>
  );
}
