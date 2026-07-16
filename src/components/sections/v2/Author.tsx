import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2, tone } from "./_ui";

/**
 * V2, Autoridade (John Silva) — navy.
 *
 * Texto à esquerda, retrato à direita numa moldura sóbria: hairline + raio,
 * sem sombra (no escuro a elevação vem de superfície + filete, não de blur).
 */
export function Author() {
  const { author } = site;
  return (
    <V2Section id={author.id} tone="navy">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.7fr]">
        <div className="order-2 lg:order-1">
          <Reveal>
            <Kicker tone="navy">Quem ensina</Kicker>
          </Reveal>

          <Reveal delay={0.05}>
            <span
              className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${tone.navy.iconWrap}`}
            >
              <BadgeCheck size={14} aria-hidden />
              {author.badge}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <H2 tone="navy" className="mt-5 text-balance">
              {author.title}
            </H2>
          </Reveal>

          {author.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}>
              <p className={`mt-4 text-lg leading-relaxed ${tone.navy.body}`}>
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <p
              className={`mt-6 flex items-center gap-3 font-display text-lg font-semibold ${tone.navy.title}`}
            >
              <span className={`h-px w-8 ${tone.navy.rule}`} aria-hidden />
              {author.name}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-hairline bg-navy-800">
            <Image
              src={brand.assets.author}
              alt="John Silva"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </V2Section>
  );
}
