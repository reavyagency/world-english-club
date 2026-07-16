import { ShieldCheck, CalendarClock, Smartphone, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2, tone } from "./_ui";

const sealIcons: Record<string, LucideIcon> = {
  "calendar-clock": CalendarClock,
  smartphone: Smartphone,
};

/**
 * V2, Garantia — navy.
 *
 * Card isolado com filete dourado: a promessa de reversão de risco merece
 * destaque, mas por contenção (borda + superfície), não por gradiente.
 * Ícone em `success` — verde comunica "sem risco" melhor que ouro aqui.
 */
export function Guarantee() {
  const { guarantee } = site;
  return (
    <V2Section tone="navy">
      <Reveal>
        <div className="rounded-2xl border border-gold/40 bg-navy-800 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Kicker tone="navy">Garantia</Kicker>

              <span className="mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-navy-700 text-success">
                <ShieldCheck size={28} aria-hidden />
              </span>

              <H2 tone="navy" className="mt-6 text-balance">
                {guarantee.title}
              </H2>

              <p className={`mt-4 max-w-xl text-lg leading-relaxed ${tone.navy.body}`}>
                {guarantee.body}
              </p>
            </div>

            <div className="grid gap-4">
              {guarantee.seals.map((seal) => {
                const Icon = sealIcons[seal.icon] ?? ShieldCheck;
                return (
                  <div
                    key={seal.title}
                    className="flex items-center gap-4 rounded-2xl border border-hairline bg-navy-700 p-5"
                  >
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${tone.navy.iconWrap}`}>
                      <Icon size={22} aria-hidden />
                    </span>
                    <span>
                      <span className={`block font-semibold ${tone.navy.title}`}>
                        {seal.title}
                      </span>
                      <span className={`block text-sm ${tone.navy.muted}`}>
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
    </V2Section>
  );
}
