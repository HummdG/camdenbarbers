import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camden Barbers | Book Haircuts & Beard Trims in Camden",
  description:
    "Professional barbers in Camden offering haircuts, fades, beard trims and full grooming packages. Book your appointment online.",
  metadataBase: new URL("https://camdenbarbers.co.uk"),
  openGraph: {
    title: "Camden Barbers",
    description:
      "A premium barbering experience in the heart of Camden. Expert cuts, beard trims, and full grooming packages. Book online.",
    type: "website",
    url: "https://camdenbarbers.co.uk",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Camden Barbers — Premium Barbershop in Camden, London",
      },
    ],
    siteName: "Camden Barbers",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camden Barbers | Book Haircuts & Beard Trims in Camden",
    description:
      "Professional barbers in Camden. Book haircuts, fades, beard trims and full grooming packages online.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "barber Camden",
    "haircut Camden",
    "beard trim Camden",
    "skin fade Camden",
    "barbershop London",
    "Camden barbers",
    "book barber online",
    "NW1 barber",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-navy-900 text-cream-50 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
