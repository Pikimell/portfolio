import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Header, Footer } from "@/components/SiteChrome";
import "./globals.css";
const sans = Geist({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
export const metadata: Metadata = {
  title: {
    default: "Volodymyr Pashchenko — Full-stack Developer",
    template: "%s — Volodymyr Pashchenko",
  },
  description:
    "Full-stack developer building web products, backend services, and iOS apps with React, Next.js, TypeScript, Node.js, and AWS. Selected projects and case studies.",
  openGraph: {
    title: "Volodymyr Pashchenko — Full-stack Developer",
    description:
      "Web products, backend services, and creative tools. Selected projects and case studies.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#0a0b0d" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
