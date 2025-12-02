import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "ISSA - Italian Singapore Startup Agency | Your Bridge to Asia",
  description:
    "Launch your Italian startup in Singapore with ISSA. Physical presence, legal backing, AI-driven capital matching, and direct access to 500+ Asian investors. Founded by BCC Studio, Allix, and PugliAI.",
  keywords: [
    "Italian Startups in Singapore",
    "Singapore Business Grants for Italians",
    "Tech Visa Singapore",
    "Italian Business Network Singapore",
    "Singapore Market Entry Italy",
    "Asia Expansion Italian Companies",
    "Singapore VC Italian Startups",
    "ISSA Network",
    "Italian Singapore Startup Agency",
  ],
  authors: [{ name: "ISSA Network" }],
  creator: "ISSA - Italian Singapore Startup Agency",
  publisher: "GSPIVSGP Network",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://is-sa.it",
    siteName: "ISSA",
    title: "ISSA - The Italian Bridge to Singapore's Financial Future",
    description:
      "De-risk your international expansion into Asia with shared infrastructure and AI tools. Physical presence, legal backing, and AI-driven capital matching.",
    images: [
      {
        url: "https://is-sa.it/og-image.png",
        width: 1200,
        height: 630,
        alt: "ISSA - Italian Singapore Startup Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISSA - Italian Singapore Startup Agency",
    description:
      "Launch your Italian startup in Singapore. Physical presence, legal backing, AI-driven capital matching.",
    images: ["https://is-sa.it/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ISSA - Italian Singapore Startup Agency",
    alternateName: "Italian Singapore Strategic Access",
    description:
      "A formal Network Contract between three established Italian tech companies providing a bridge for Italian companies entering the Singaporean financial and tech market.",
    url: "https://is-sa.it",
    logo: "https://is-sa.it/logo.png",
    areaServed: ["Italy", "Singapore", "Asia"],
    serviceType: [
      "Business Consulting",
      "International Market Entry",
      "Startup Support",
      "Grant Matching",
      "Corporate Setup",
    ],
    founder: [
      {
        "@type": "Organization",
        name: "BCC Studio",
      },
      {
        "@type": "Organization",
        name: "Allix",
      },
      {
        "@type": "Organization",
        name: "PugliAI",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "GSPIVSGP Network",
    },
    knowsAbout: [
      "Italian Startups in Singapore",
      "Singapore Business Grants for Italians",
      "Tech Visa Singapore",
      "Singapore Corporate Setup",
      "Asian Investor Network",
      "Blockchain Traceability",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-navy-900 text-white">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
