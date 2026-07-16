import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Seção 8, Autoridade: quem é John Silva. */
export function Author() {
  const { author } = site;
  return (
    <Section id={author.id}>
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
        {/* [[FOTO John Silva]] */}
        <Reveal className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-tr from-brand/20 to-brand-2/10 blur-2xl" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
            <Image src={brand.assets.author} alt="John Silva" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-accent">
              <BadgeCheck size={14} />
              {author.badge}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {author.title}
            </h2>
          </Reveal>
          {author.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-4 text-lg text-muted">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <p className="mt-6 font-display text-lg font-semibold">
              {author.name}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
