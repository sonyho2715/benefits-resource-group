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
  title: "Benefits Resource Group LLC | Employee Benefits & Medicare Consulting",
  description:
    "Expert benefits consulting in Hawaii, California, Nevada, Utah, and Washington. Business benefits, Medicare enrollment, retirement planning, and more since 2017.",
  keywords: [
    "employee benefits",
    "Medicare enrollment",
    "retirement planning",
    "business insurance",
    "benefits consulting",
    "Hawaii benefits",
  ],
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
