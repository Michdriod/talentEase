import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/data/site";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://talenteasehr.com"),
  title: {
    default: "TalentEase HR Services | HR Consulting for Growing Businesses",
    template: "%s | TalentEase HR Services",
  },
  description:
    "TalentEase HR Services provides accessible, affordable, people-centered HR solutions for startups and growing businesses, including recruitment, employee leasing, fractional HR, learning & development, and HR advisory.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "694x162" },
    ],
    apple: "/logo.png",
  },
};

const siteUrl = "https://talenteasehr.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  alternateName: ["TalentEase HR", "TalentEase"],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description:
    "A business-centered HR consulting firm delivering HR solutions for SMEs, startups and growing businesses in Lagos, Nigeria.",
  email: site.email,
  telephone: [site.phone, site.phone2],
  address: {
    "@type": "PostalAddress",
    streetAddress: "49 Karimu Ikotun Street, Sabo-Yaba",
    addressLocality: "Lagos",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [site.linkedin, site.instagram, site.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-body" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
