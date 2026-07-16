import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialIcon } from "@/components/ui/SocialIcon";

// Resolve href real dos canais sociais a partir do .env
function socialHref(label: string) {
  const l = label.toLowerCase();
  if (l.includes("whats")) return brand.urls.whatsapp;
  if (l.includes("insta")) return brand.urls.instagram;
  if (l.includes("you")) return brand.urls.youtube;
  return "#";
}

/** V2, Footer editorial: wordmark grande à esquerda, colunas à direita. */
export function Footer() {
  const { footer } = site;
  return (
    <footer className="border-t border-line px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          {/* Logo */}
          <div className="max-w-sm">
            <BrandLogo variant="dark" className="h-10 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.brand.tagline}
            </p>
          </div>

          <nav>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Redes
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {footer.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={socialHref(link.label)}
                    className="group inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <SocialIcon
                      label={link.label}
                      size={18}
                      className="text-muted transition-colors group-hover:text-gold"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted">
          <p>{footer.legal}</p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
