import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Kicker editorial: número da seção ("01") + traço + eyebrow.
 * Assinatura visual da V2 (numeração tipo revista).
 */
export function SectionKicker({
  number,
  eyebrow,
  className = "",
}: {
  number: string;
  eyebrow: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono text-sm font-semibold tabular-nums text-accent">
        {number}
      </span>
      <span className="h-px w-8 bg-gradient-to-r from-accent/60 to-transparent" aria-hidden />
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted">
        {eyebrow}
      </span>
    </div>
  );
}

/**
 * Cabeçalho editorial assimétrico: título grande alinhado à esquerda,
 * subtítulo deslocado para a coluna direita (empilha no mobile).
 */
export function EditorialHeading({
  number,
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      className={`grid gap-6 border-b border-line pb-8 lg:grid-cols-[1.6fr_1fr] lg:items-end ${className}`}
    >
      <div>
        <SectionKicker number={number} eyebrow={eyebrow} className="mb-5" />
        <h2 className="font-display text-3xl font-bold leading-[1.06] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="text-base text-muted lg:pb-1 lg:text-right lg:text-[0.95rem]">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
