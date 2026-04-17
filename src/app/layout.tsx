import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    images: [{ url: "/hero.png", width: 1587, height: 860, alt: "SPRINTEN" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
