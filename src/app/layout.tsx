import type { Metadata } from "next";
import { Inter, Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pastorpaulooliveira.com"),
  title: "Pr. Paulo Oliveira | Oliver Tree Ministry",
  description:
    "Pastor, mentor e lider espiritual. Restaurando identidades, fortalecendo familias e desenvolvendo homens e mulheres que vivem com proposito, carater e fe pratica.",
  icons: {
    icon: "/logo-oliver-tree/olive-tree.png",
    apple: "/logo-oliver-tree/olive-tree.png",
  },
  openGraph: {
    title: "Pr. Paulo Oliveira | Oliver Tree Ministry",
    description:
      "Restaurando identidades, fortalecendo familias, transformando geracoes.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/url-cover/main-url-cover.png",
        width: 1200,
        height: 630,
        alt: "Pr. Paulo Oliveira | Oliver Tree Ministry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pr. Paulo Oliveira | Oliver Tree Ministry",
    description:
      "Restaurando identidades, fortalecendo familias, transformando geracoes.",
    images: ["/url-cover/main-url-cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${interTight.variable} ${playfair.variable}`}
    >
      <body className="bg-[#0A0906] text-[#F5F0E8] antialiased overflow-x-hidden">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
