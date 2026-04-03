import type { Metadata } from "next";
import { Bungee, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymSnacks | Premium Pre-Workout Gummies",
  description:
    "Pre-workout supplements, reimagined. Delicious gummies packed with 250mg caffeine, 3g beta-alanine, and 1100mg glycerol. Fuel your workout one gummy at a time.",
  keywords: ["pre-workout", "gummies", "supplements", "fitness", "gym", "caffeine", "beta-alanine"],
  openGraph: {
    title: "GymSnacks | Premium Pre-Workout Gummies",
    description: "Pre-workout supplements, reimagined. Delicious gummies packed with energy.",
    type: "website",
  },
  metadataBase: new URL("https://gymsnackinc.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GymSnacks",
    url: "https://gymsnackinc.com",
    logo: "https://gymsnackinc.com/logo.png",
    description: "Premium pre-workout gummies with 250mg caffeine, 3g beta-alanine, and 1100mg glycerol",
    sameAs: [
      "https://www.instagram.com/gymsnacksinc",
      "https://www.tiktok.com/@gymsnacksinc",
      "https://www.facebook.com/gymsnacksinc",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "Customer Support",
    },
  };

  return (
    <html lang="en" className={`${bungee.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </SmoothScroll>
      </body>
    </html>
  );
}
