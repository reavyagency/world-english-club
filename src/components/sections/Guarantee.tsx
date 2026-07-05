import { ShieldCheck, CalendarClock, Smartphone, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const sealIcons: Record<string, LucideIcon> = {
  "calendar-clock": CalendarClock,
  smartphone: Smartphone,
};

/** Seção 9 — Garantia (reversão total de risco). */
export function Guarantee() {
  const { guarantee } = site;
  return (
    <Section className="bg-surface/30">
      <Reveal>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-success/30 bg-gradient-to-br from-success/10 to-transparent p-8 text-center sm:p-12">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-success/15 text-success">
            <ShieldCheck size={32} aria-hidden />
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
            {guarantee.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            {guarantee.body}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {guarantee.seals.map((seal) => {
              const Icon = sealIcons[seal.icon] ?? ShieldCheck;
              return (
                <div
                  key={seal.title}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 text-left"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">
                    <Icon size={20} aria-hidden />
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
      </Reveal>
    </Section>
  );
}
