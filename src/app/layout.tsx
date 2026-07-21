import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { JsonLd } from "@/components/SEO/JsonLd";
import { Providers } from "./providers";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lamonarealtors.com"),
  title: {
    default: "Lamona Realtors - Find Your Dream Home in Kenya",
    template: "%s | Lamona Realtors",
  },
  description:
    "Discover exceptional properties with Lamona Realtors - Kenya's premier real estate agency. Expert guidance for buying, selling, and investing in prime real estate.",
  keywords:
    "real estate Kenya, property Nairobi, buy house Kenya, sell property, real estate agent, dream home, property investment",
  authors: [{ name: "Lamona Realtors" }],
  robots: "index, follow",
  verification: {
    google: "mHRD8aLU2QgH_aRwYA0MC7TLfE1PWQuO6_ES6ZdQb8k",
  },
  openGraph: {
    type: "website",
    url: "https://lamonarealtors.com/",
    title: "Lamona Realtors - Find Your Dream Home in Kenya",
    description:
      "Discover exceptional properties with Lamona Realtors - Kenya's premier real estate agency. Expert guidance for buying, selling, and investing in prime real estate.",
    images: [{ url: "https://lamonarealtors.com/images/logo_whitebg.png" }],
    siteName: "Lamona Realtors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamona Realtors - Find Your Dream Home in Kenya",
    description:
      "Discover exceptional properties with Lamona Realtors - Kenya's premier real estate agency. Expert guidance for buying, selling, and investing in prime real estate.",
    images: ["https://lamonarealtors.com/images/logo_whitebg.png"],
  },
  other: {
    "theme-color": "#101a15",
    "msapplication-TileColor": "#101a15",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <JsonLd />
      </head>
      <body>
        <Providers>
          <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </Providers>
        <div id="portal" />
      </body>
    </html>
  );
}
