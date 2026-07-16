import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "./_shared";

/** V2, Autoridade (John Silva). Texto à esquerda, retrato à direita. */
export function Author() {
  const { author } = site;
  return (
    <Section id={author.id} className="bg-[#F6F3EB]">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
        <div className="order-2 lg:order-1">
          <Reveal>
            <SectionKicker number="06" eyebrow="Quem ensina" tone="light" className="mb-6" />
          </Reveal>
          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-2">
              <BadgeCheck size={14} />
              {author.badge}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance text-neutral-900 sm:text-4xl">
              {author.title}
            </h2>
          </Reveal>
          {author.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <p className="mt-6 flex items-center gap-3 font-display text-lg font-semibold text-neutral-900">
              <span className="h-px w-8 bg-gold" aria-hidden />
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
                "linear-gradient(135deg, rgba(230,193,90,0.22), rgba(198,154,60,0.12))",
            }}
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-100 shadow-[0_24px_60px_-35px_rgba(0,0,0,0.5)]">
            <Image
              src={brand.assets.author}
              alt="John Silva"
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
