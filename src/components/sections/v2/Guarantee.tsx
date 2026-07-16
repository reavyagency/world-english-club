import { ShieldCheck, CalendarClock, Smartphone, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "./_shared";

const sealIcons: Record<string, LucideIcon> = {
  "calendar-clock": CalendarClock,
  smartphone: Smartphone,
};

/** V2, Garantia. Painel dourado assimétrico: promessa à esquerda, selos à direita. */
export function Guarantee() {
  const { guarantee } = site;
  return (
    <Section className="bg-surface/30">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-3xl border border-gold/30 p-8 sm:p-12"
          style={{
            backgroundImage:
              "linear-gradient(150deg, rgba(230,193,90,0.13), rgba(198,154,60,0.05) 55%, transparent)",
          }}
        >
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl"
            aria-hidden
            style={{ background: "radial-gradient(circle, rgba(230,193,90,0.26), transparent 70%)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionKicker number="07" eyebrow="Garantia" className="mb-6" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold">
                <ShieldCheck size={30} aria-hidden />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl">
                {guarantee.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {guarantee.body}
              </p>
            </div>

            <div className="grid gap-4">
              {guarantee.seals.map((seal) => {
                const Icon = sealIcons[seal.icon] ?? ShieldCheck;
                return (
                  <div
                    key={seal.title}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-2 text-gold">
                      <Icon size={22} aria-hidden />
                    </span>
                    <span>
                      <span className="block font-semibold">{seal.title}</span>
                      <span className="block text-sm text-muted">
                        {seal.description}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
