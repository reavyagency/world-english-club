import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Tone = "dark" | "light";

/**
 * Kicker editorial: número da seção ("01") + traço + eyebrow.
 * Assinatura visual da V2 (numeração tipo revista). Acento dourado.
 * `tone` adapta a cor do eyebrow ao fundo (dark = muted, light = neutro).
 */
export function SectionKicker({
  number,
  eyebrow,
  tone = "dark",
  className = "",
}: {
  number: string;
  eyebrow: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono text-sm font-semibold tabular-nums text-gold">
        {number}
      </span>
      <span className="h-px w-8 bg-gradient-to-r from-gold/60 to-transparent" aria-hidden />
      <span
        className={`text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
          tone === "light" ? "text-neutral-500" : "text-muted"
        }`}
      >
        {eyebrow}
      </span>
    </div>
  );
}

/**
 * Cabeçalho editorial assimétrico: título grande alinhado à esquerda,
 * subtítulo deslocado para a coluna direita (empilha no mobile).
 * `tone` adapta título/subtítulo/borda ao fundo da seção.
 */
export function EditorialHeading({
  number,
  eyebrow,
  title,
  subtitle,
  tone = "dark",
  className = "",
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <Reveal
      className={`grid gap-6 border-b pb-8 lg:grid-cols-[1.6fr_1fr] lg:items-end ${
        isLight ? "border-neutral-900/10" : "border-line"
      } ${className}`}
    >
      <div>
        <SectionKicker number={number} eyebrow={eyebrow} tone={tone} className="mb-5" />
        <h2
          className={`font-display text-3xl font-bold leading-[1.06] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
            isLight ? "text-neutral-900" : ""
          }`}
        >
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p
          className={`text-base lg:pb-1 lg:text-right lg:text-[0.95rem] ${
            isLight ? "text-neutral-600" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
