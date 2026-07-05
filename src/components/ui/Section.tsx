import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Wrapper de seção: padding vertical consistente + container centralizado. */
export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-20 sm:py-28 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

/** Cabeçalho padrão de seção (eyebrow + título + subtítulo). */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
