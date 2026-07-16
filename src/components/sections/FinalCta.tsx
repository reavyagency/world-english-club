import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/** Seção 11, Fechamento. Urgência leve e honesta ("ainda hoje"), sem contador fake. */
export function FinalCta() {
  const { finalCta } = site;
  return (
    <section id={finalCta.id} className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 -z-10 opacity-80" aria-hidden />
      <div className="bg-grid absolute inset-0 -z-10 opacity-40" aria-hidden />

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          {finalCta.subtitle}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={finalCta.primaryCta.href} size="lg">
            {finalCta.primaryCta.label}
          </Button>
          <Button href={brand.urls.whatsapp} size="lg" variant="secondary">
            <MessageCircle size={18} />
            {finalCta.secondaryCta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
