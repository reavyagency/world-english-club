/**
 * Ponto único de configuração de MARCA e URLs.
 *
 * - Cores: editar os tokens em `src/app/globals.css` (bloco @theme) quando o
 *   brandbook real chegar (--color-brand, --color-brand-2, --color-accent).
 * - Assets (logo, fotos, vídeos): colocar em `public/brand/` e referenciar aqui.
 * - URLs (checkout, WhatsApp, Instagram): definir via variáveis de ambiente
 *   (.env) — enquanto não existirem, caem em placeholders seguros.
 */

export const brand = {
  name: "World English Club",
  shortName: "WEC",

  // Assets — substituir pelos arquivos reais em /public/brand
  assets: {
    // logo: "/brand/logo.svg",
    // logoMark: "/brand/logo-mark.svg",
    // heroMedia: "/brand/hero.mp4",
    // author: "/brand/john-silva.jpg",
  },

  // URLs configuráveis — NEXT_PUBLIC_* ficam disponíveis no client
  urls: {
    checkoutAutoestudo: process.env.NEXT_PUBLIC_CHECKOUT_AUTOESTUDO || "#planos",
    checkoutMentoria: process.env.NEXT_PUBLIC_CHECKOUT_MENTORIA || "#planos",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "#",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
  },

  seo: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://worldenglishclub.com.br",
    ogImage: "/brand/og-image.png",
  },
} as const;
