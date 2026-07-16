import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { tone } from "./_ui";

// Resolve href real dos canais sociais a partir do .env
function socialHref(label: string) {
  const l = label.toLowerCase();
  if (l.includes("whats")) return brand.urls.whatsapp;
  if (l.includes("insta")) return brand.urls.instagram;
  if (l.includes("you")) return brand.urls.youtube;
  return "#";
}

/** V2, Footer (navy): wordmark à esquerda, colunas de links à direita. */
export function Footer() {
  const { footer } = site;
  return (
    <footer className="border-t border-hairline bg-navy-900 px-6 py-14 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <BrandLogo variant="dark" className="h-10 w-auto" />
            <p className={`mt-4 text-sm leading-relaxed ${tone.navy.muted}`}>
              {site.brand.tagline}
            </p>
          </div>

          <nav>
            <h3 className={`text-xs font-semibold uppercase tracking-[0.2em] ${tone.navy.muted}`}>
              Links
            </h3>
            <ul className={`mt-4 space-y-2.5 text-sm ${tone.navy.muted}`}>
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h3 className={`text-xs font-semibold uppercase tracking-[0.2em] ${tone.navy.muted}`}>
              Redes
            </h3>
            <ul className={`mt-4 space-y-2.5 text-sm ${tone.navy.muted}`}>
              {footer.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={socialHref(link.label)}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <SocialIcon label={link.label} size={18} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 text-sm text-slate-500">
          <p>{footer.legal}</p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
