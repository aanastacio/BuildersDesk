
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://buildersdeskpro.com'),
  title: {
    default: "Builders Desk | Roofing Contractor Software - Manage Leads, Jobs & Payments",
    template: "%s | Builders Desk"
  },
  description: "All-in-one roofing contractor software to manage leads, jobs, scheduling, invoicing, and payments. Built by operators for operators. Start your 14-day free trial today.",
  keywords: [
    "roofing contractor software",
    "roofing CRM",
    "contractor management software",
    "roofing business software",
    "job scheduling software",
    "roofing invoicing",
    "contractor payment processing",
    "roofing lead management",
    "construction management software",
    "roofing estimate software",
    "contractor job tracking",
    "roofing crew scheduling"
  ],
  authors: [{ name: "Builders Desk" }],
  creator: "Builders Desk",
  publisher: "Builders Desk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buildersdeskpro.com',
    siteName: 'Builders Desk',
    title: 'Builders Desk | Roofing Contractor Software',
    description: 'All-in-one roofing contractor software to manage leads, jobs, scheduling, invoicing, and payments. Built by operators for operators.',
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20software%20dashboard%20showing%20lead%20management%20job%20scheduling%20and%20payment%20processing%20on%20modern%20computer%20screen%20with%20construction%20business%20analytics%20and%20workflow%20automation%20tools&width=1200&height=630&seq=ogimage1&orientation=landscape',
        width: 1200,
        height: 630,
        alt: 'Builders Desk - Roofing Contractor Software',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builders Desk | Roofing Contractor Software',
    description: 'All-in-one roofing contractor software to manage leads, jobs, scheduling, invoicing, and payments.',
    images: ['https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20software%20dashboard%20showing%20lead%20management%20job%20scheduling%20and%20payment%20processing%20on%20modern%20computer%20screen%20with%20construction%20business%20analytics%20and%20workflow%20automation%20tools&width=1200&height=630&seq=ogimage1&orientation=landscape'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://buildersdeskpro.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Builders Desk",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "199",
                "highPrice": "599",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "199",
                  "priceCurrency": "USD",
                  "billingDuration": "P1M"
                }
              },
              "description": "All-in-one roofing contractor software to manage leads, jobs, scheduling, invoicing, and payments.",
              "featureList": [
                "Lead Management",
                "Digital Estimates",
                "Smart Scheduling",
                "Job Management",
                "Invoicing & Payments",
                "Analytics & Reporting"
              ],
              "screenshot": "https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20software%20dashboard%20showing%20lead%20management%20job%20scheduling%20and%20payment%20processing%20on%20modern%20computer%20screen%20with%20construction%20business%20analytics%20and%20workflow%20automation%20tools&width=1200&height=630&seq=ogimage1&orientation=landscape"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Builders Desk",
              "url": "https://buildersdeskpro.com",
              "logo": "https://buildersdeskpro.com/logo.png",
              "description": "Roofing contractor software built by operators for operators",
              "sameAs": [
                "https://www.facebook.com/buildersdeskpro",
                "https://www.twitter.com/buildersdeskpro",
                "https://www.linkedin.com/company/buildersdeskpro"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-877-478-5356",
                "contactType": "Customer Service",
                "areaServed": "US",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
