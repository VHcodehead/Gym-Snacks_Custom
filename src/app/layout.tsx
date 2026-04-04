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
  title: "GymSnacks | Pre-Workout Gummies | Gym Snacks Pre Workout Supplement",
  description:
    "GymSnacks pre-workout gummies — the best tasting pre workout gummies with 250mg caffeine, 3g beta-alanine & 1100mg glycerol. Convenient gym snacks that fuel your workout. No powder, no shaker, just grab and go. Shop GymSnacksInc.com",
  keywords: [
    "pre workout gummies",
    "pre-workout gummies",
    "gym snacks",
    "gymsnacks",
    "gymsnacksinc",
    "preworkout gummies",
    "caffeine gummies",
    "workout gummies",
    "pre workout candy",
    "gummy pre workout",
    "best pre workout gummies",
    "pre workout supplements",
    "gym snacks pre workout",
    "fitness gummies",
    "energy gummies",
  ],
  openGraph: {
    title: "GymSnacks — Pre-Workout Gummies That Actually Taste Good",
    description: "The best pre-workout gummies with 250mg caffeine, 3g beta-alanine & 1100mg glycerol. No powder, no shaker — just grab, chew, and go.",
    type: "website",
    siteName: "GymSnacks",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymSnacks | Pre-Workout Gummies",
    description: "Pre-workout gummies with 250mg caffeine. No powder, no shaker — just grab, chew, and go.",
  },
  metadataBase: new URL("https://www.gymsnacksinc.com"),
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
    url: "https://www.gymsnacksinc.com",
    logo: "https://www.gymsnacksinc.com/logo.png",
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
