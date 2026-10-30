import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingOverlay } from "@/components/FloatingOverlay";
import { MetaPixel } from "@/components/MetaPixel";
import { SITE } from "@/content/site";

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — Advocacia Previdenciária e Auxílio-Acidente`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "auxílio-acidente",
    "advogado previdenciário",
    "advogado previdenciário Erechim",
    "advocacia previdenciária",
    "auxílio-doença",
    "aposentadoria por invalidez",
    "BPC LOAS",
    "revisão de benefício INSS",
  ],
  authors: [{ name: SITE.fullName }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.fullName,
    title: `${SITE.fullName} — Advocacia Previdenciária e Auxílio-Acidente`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.fullName,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingOverlay />
        <MetaPixel />
      </body>
    </html>
  );
}
