/**
 * Ponto único de configuração de MARCA e URLs.
 *
 * - Cores: editar os tokens em `src/app/globals.css` (bloco @theme) quando o
 *   brandbook real chegar (--color-brand, --color-brand-2, --color-accent).
 * - Assets (logo, fotos, vídeos): colocar em `public/brand/` e referenciar aqui.
 * - URLs (checkout, WhatsApp, Instagram): definir via variáveis de ambiente
 *   (.env), enquanto não existirem, caem em placeholders seguros.
 */

export const brand = {
  name: "World English Club",
  shortName: "WEC",

  // Assets de marca (em /public). Ponto único para trocar as logos.
  assets: {
    logoDark: "/logo-world-2.webp", // "WORLD" em branco, para FUNDOS ESCUROS (v1, v2)
    logoLight: "/logo-world-3.webp", // "WORLD" em navy, para FUNDOS CLAROS (v3)
    logoStacked: "/logo-world-1.webp", // globo + texto navy empilhados (fundo claro)
    logoStackedDark: "/logo-world-4.webp", // globo + texto branco empilhados (fundo escuro)
    favicon: "/favicon-world.webp",
    author: "/foto-jhon.webp", // foto do John Silva (seção "Quem ensina")
  },

  // URLs configuráveis, NEXT_PUBLIC_* ficam disponíveis no client
  urls: {
    checkoutAutoestudo: process.env.NEXT_PUBLIC_CHECKOUT_AUTOESTUDO || "#planos",
    checkoutMentoria: process.env.NEXT_PUBLIC_CHECKOUT_MENTORIA || "#planos",
    whatsapp:
      process.env.NEXT_PUBLIC_WHATSAPP_URL ||
      "https://api.whatsapp.com/send/?phone=5515998024251&text=Ol%C3%A1%21+Quero+saber+mais+sobre+o+World+English+Club.&type=phone_number&app_absent=0",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://www.instagram.com/worldenglishclub",
    youtube:
      process.env.NEXT_PUBLIC_YOUTUBE_URL ||
      "https://www.youtube.com/@worldenglishclub",
  },

  seo: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://worldenglishclub.com.br",
    ogImage: "/brand/og-image.png",
  },
} as const;
