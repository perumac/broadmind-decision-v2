import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://broadmind-decision.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "BroadMind Decision | Neurociencia para decisiones ejecutivas",
  description: "Programas ejecutivos de neurociencia aplicada, neuroliderazgo y neuromanagement para CEOs y equipos de alta dirección.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    title: "BroadMind Decision",
    description: "Tu cerebro es tu ventaja competitiva. Lidera desde el cerebro y decide con propósito.",
    type: "website",
    locale: "es_ES",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "BroadMind Decision - neurociencia aplicada a decisiones ejecutivas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BroadMind Decision",
    description: "Tu cerebro es tu ventaja competitiva. Lidera desde el cerebro y decide con propósito.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
