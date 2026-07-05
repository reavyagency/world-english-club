import { type LucideIcon, ImageIcon } from "lucide-react";

/**
 * Placeholder elegante para mídia que ainda não chegou (foto/vídeo).
 * Mantém o aspect-ratio correto para a página ficar apresentável desde já.
 * Substitua por `next/image` ou `<video>` quando o asset real existir.
 */
export function MediaPlaceholder({
  caption,
  aspect = "16/9",
  icon: Icon = ImageIcon,
  className = "",
}: {
  caption: string;
  aspect?: string;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: aspect }}
      className={[
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-line",
        "bg-[radial-gradient(120%_120%_at_50%_0%,var(--color-surface-2),var(--color-surface))]",
        className,
      ].join(" ")}
      role="img"
      aria-label={caption}
    >
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface/80 text-accent">
        <Icon size={24} aria-hidden />
      </span>
      <span className="relative text-sm text-muted">{caption}</span>
    </div>
  );
}
