import { BadgeCheck, User } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "./_shared";

/** V2 — Autoridade (John Silva). Texto à esquerda, retrato à direita. */
export function Author() {
  const { author } = site;
  return (
    <Section id={author.id}>
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
        <div className="order-2 lg:order-1">
          <Reveal>
            <SectionKicker number="06" eyebrow="Quem ensina" className="mb-6" />
          </Reveal>
          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-accent">
              <BadgeCheck size={14} />
              {author.badge}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl">
              {author.title}
            </h2>
          </Reveal>
          {author.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}>
              <p className="mt-4 text-lg leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <p className="mt-6 flex items-center gap-3 font-display text-lg font-semibold">
              <span className="h-px w-8 bg-emerald-400/50" aria-hidden />
              {author.name}
            </p>
          </Reveal>
        </div>

        {/* [[FOTO John Silva]] */}
        <Reveal delay={0.1} className="relative order-1 lg:order-2">
          <div
            className="absolute -inset-3 -z-10 rounded-[28px] blur-2xl"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(16,185,129,0.24), rgba(34,211,238,0.16))",
            }}
          />
          <MediaPlaceholder caption="Foto — John Silva" aspect="4/5" icon={User} />
        </Reveal>
      </div>
    </Section>
  );
}
