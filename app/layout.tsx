import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { AIChatWidget } from "@/components/ai-chat-widget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.benefitsresourcegroupllc.com'),
  title: {
    default: "Benefits Resource Group LLC | Employee Benefits & Medicare Consulting",
    template: "%s | Benefits Resource Group LLC"
  },
  description:
    "Expert benefits consulting in Hawaii, California, Nevada, Utah, and Washington. Business benefits, Medicare enrollment, retirement planning, and more since 2017.",
  keywords: [
    "employee benefits",
    "Medicare enrollment",
    "retirement planning",
    "business insurance",
    "benefits consulting",
    "Hawaii benefits",
    "401k plans",
    "group health insurance",
    "Medicare supplement",
    "estate planning",
  ],
  authors: [{ name: "Benefits Resource Group LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.benefitsresourcegroupllc.com",
    siteName: "Benefits Resource Group LLC",
    title: "Benefits Resource Group LLC | Expert Benefits Consulting",
    description: "Serving HI, CA, NV, UT, WA with comprehensive employee benefits, Medicare, and retirement planning solutions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Benefits Resource Group LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benefits Resource Group LLC | Expert Benefits Consulting",
    description: "Serving HI, CA, NV, UT, WA with comprehensive employee benefits, Medicare, and retirement planning solutions.",
    images: ["/images/og-image.jpg"],
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
  verification: {
    // Add these when available:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AIChatWidget />
      </body>
    </html>
  );
}
