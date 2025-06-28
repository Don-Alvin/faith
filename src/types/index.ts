export interface Listing {
  id: number;
  name: string;
  location: string;
  price: string;
  bedrooms: string;
  status: 'available' | 'under construction';
  imageUrl: string;
  description?: string;
  roi?: string;
  payment_plan?: string;
  Ammenities?: string[];
  moreImages?: { imageUrl: string }[];
}

export interface Blog {
  id: string;
  title: string;
  intro: string;
  content: string;
  imageUrl: string;
  publishedAt?: string;
  readTime?: number;
  category?: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  description: string;
}

export interface NavLink {
  title: string;
  href?: string;
  to?: string;
}

export interface FormData {
  name: string;
  email: string;
  number: string;
  message?: string;
  date?: string;
  site?: string;
}

export interface MetaDataProps {
  title: string;
  subtitle?: string;
  content?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}