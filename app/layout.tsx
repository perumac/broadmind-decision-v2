import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "BroadMind Decision | Neurociencia para decisiones ejecutivas",
    description: "Acompañamiento neuro-estratégico para CEOs y altos directivos que enfrentan decisiones complejas.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      title: "BroadMind Decision",
      description: "La ciencia de decidir. La claridad de liderar.",
      type: "website",
      locale: "es_ES",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 910, alt: "BroadMind Decision — La ciencia de decidir" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "BroadMind Decision",
      description: "La ciencia de decidir. La claridad de liderar.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
