import Image from "next/image";
import { brand } from "@/config/brand";

/**
 * Logo do World English Club. Escolhe automaticamente a versão certa
 * conforme o fundo:
 *  - `variant="dark"`  → logo com "WORLD" branco (fundos escuros: v1, v2)
 *  - `variant="light"` → logo com "WORLD" navy (fundos claros: v3)
 *
 * Dimensões intrínsecas informadas para evitar layout shift; o tamanho
 * final é controlado por `className` (ex.: `h-9 w-auto`).
 */
const VARIANTS = {
  dark: { src: brand.assets.logoDark, width: 2309, height: 598 },
  light: { src: brand.assets.logoLight, width: 2220, height: 575 },
} as const;

export function BrandLogo({
  variant = "dark",
  className = "",
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const logo = VARIANTS[variant];
  return (
    <Image
      src={logo.src}
      alt={brand.name}
      width={logo.width}
      height={logo.height}
      className={className}
      priority={priority}
    />
  );
}
