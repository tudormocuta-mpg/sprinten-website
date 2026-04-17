import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SPRINTEN — sportul ca instrument de incluziune",
  description:
    "Un proiect conex al evenimentelor sportive MPG, dedicat copiilor cu dizabilități locomotorii.",
  metadataBase: new URL("https://sprinten.org"),
  openGraph: {
    title: "SPRINTEN — sportul ca instrument de incluziune",
    description:
      "Un proiect conex al evenimentelor sportive MPG, dedicat copiilor cu dizabilități locomotorii.",
    url: "https://sprinten.org",
    siteName: "SPRINTEN",
    locale: "ro_RO",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "SPRINTEN" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
