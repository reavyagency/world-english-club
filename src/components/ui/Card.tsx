import type { ReactNode } from "react";

/**
 * Card base: superfície + borda 1px + glow suave no hover.
 * `highlight` destaca com a cor da marca (usado no plano em evidência).
 */
export function Card({
  children,
  className = "",
  highlight = false,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
  hover?: boolean;
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border p-6 transition-all duration-300",
        highlight
          ? "border-brand/60 bg-surface-2 shadow-[0_0_0_1px_var(--color-brand),0_20px_60px_-20px_var(--color-brand)]"
          : "border-line bg-surface",
        hover && !highlight
          ? "hover:border-ink/25 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)]"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
