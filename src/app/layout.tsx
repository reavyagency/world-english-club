import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { brand } from "@/config/brand";

// Fontes trocáveis por token (--font-display / --font-sans em globals.css)
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.seo.url),
  title: "World English Club — Inglês do zero ao intermediário (A1 → B1)",
  description:
    "Curso de inglês online para brasileiros. Método claro, prática orientada e plano de estudos semana a semana. Do zero à conversação, sem promessas mágicas. 7 dias de garantia.",
  keywords: [
    "curso de inglês online",
    "inglês do zero",
    "aprender inglês",
    "inglês para iniciantes",
    "World English Club",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: brand.name,
    title: "World English Club — Inglês do zero ao intermediário (A1 → B1)",
    description:
      "Método claro, prática orientada e plano de estudos semana a semana. Do zero à conversação, sem promessas mágicas.",
    images: [{ url: brand.seo.ogImage, width: 1200, height: 630, alt: brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "World English Club — Inglês do zero ao intermediário (A1 → B1)",
    description:
      "Do zero à conversação, sem promessas mágicas. Método, prática e garantia de 7 dias.",
    images: [brand.seo.ogImage],
  },
};

// Structured data (JSON-LD) — Course + Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: brand.name,
      url: brand.seo.url,
      description: "Curso de inglês online para brasileiros — do A1 ao B1.",
    },
    {
      "@type": "Course",
      name: "World English Club — Inglês A1 → B1",
      description:
        "Curso de inglês online do zero à conversação, com método em 3 passos, 3 módulos, 50+ aulas, PDFs, MP3s, quizzes e certificado.",
      provider: {
        "@type": "Organization",
        name: brand.name,
        url: brand.seo.url,
      },
      inLanguage: "pt-BR",
      teaches: "Inglês do nível A1 ao B1 (conversação)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
