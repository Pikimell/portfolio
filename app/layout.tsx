import type { Metadata } from "next";
import { Header, Footer } from "@/components/SiteChrome";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Volodymyr Pashchenko — Full-stack Developer",
    template: "%s — Volodymyr Pashchenko",
  },
  description:
    "Selected work in React, Next.js, TypeScript, Node.js, and AWS. Products, API integrations, and interactive tools by Volodymyr Pashchenko.",
  openGraph: {
    title: "Volodymyr Pashchenko — Full-stack Developer",
    description:
      "Thoughtful interfaces. Connected systems. Explore selected products and engineering work.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-wrap">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
