import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { BrandLogo } from "@/components/ui/BrandLogo";

// Resolve href real dos canais sociais a partir do .env
function socialHref(label: string) {
  if (label.toLowerCase().includes("whats")) return brand.urls.whatsapp;
  if (label.toLowerCase().includes("insta")) return brand.urls.instagram;
  return "#";
}

/** Footer, logo, links, redes, nota legal (CDC art. 49) e copyright. */
export function Footer() {
  const { footer } = site;
  return (
    <footer className="border-t border-line bg-surface/40 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <div className="max-w-xs">
            <BrandLogo variant="dark" className="h-10 w-auto" />
            <p className="mt-4 text-sm text-muted">{site.brand.tagline}</p>
          </div>

          <div className="flex gap-16">
            <nav>
              <h3 className="text-sm font-semibold text-ink">Links</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {footer.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <h3 className="text-sm font-semibold text-ink">Redes</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {footer.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={socialHref(link.label)}
                      className="hover:text-ink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-sm text-muted">
          <p>{footer.legal}</p>
          <p className="mt-2">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
