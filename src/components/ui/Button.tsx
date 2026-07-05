import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98] disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_30px_-8px_var(--color-brand)] hover:bg-brand/90 hover:shadow-[0_10px_40px_-6px_var(--color-brand)]",
  secondary:
    "border border-line bg-surface/60 text-ink hover:border-ink/40 hover:bg-surface-2",
  ghost: "text-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/** Botão-link (renderiza `<a>`). Todos os CTAs primários apontam para #planos. */
export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
