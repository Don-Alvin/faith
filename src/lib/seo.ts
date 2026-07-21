import type { Metadata } from "next";

const SITE_NAME = "Lamona Realtors";
const SITE_URL = "https://lamonarealtors.com";
const DEFAULT_DESCRIPTION =
  "Find your dream property with Lamona Realtors - Kenya's premier real estate agency";
const DEFAULT_IMAGE = "/images/logo_whitebg.png";

interface BuildMetadataOptions {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image = DEFAULT_IMAGE,
  url = "/",
  type = "website",
}: BuildMetadataOptions): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: fullImage }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
      site: "@lamonarealtors",
      creator: "@lamonarealtors",
    },
  };
}

export const REAL_ESTATE_AGENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Lamona Realtors",
  description:
    "Premier real estate services in Kenya. Find your dream home with our expert guidance.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo_whitebg.png`,
  telephone: "+254750030357",
  email: "anadoomollo@zohomail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "Kenya",
  },
  sameAs: [
    "https://www.facebook.com/share/aQucT6BtD6U7vhy8/?mibextid=qi2Omg",
    "https://www.instagram.com/lamonarealtors",
  ],
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  serviceType: [
    "Property Sales",
    "Property Rentals",
    "Real Estate Investment",
    "Property Management",
  ],
};
