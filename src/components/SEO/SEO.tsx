import { Helmet } from 'react-helmet-async';
import { SEOProps } from '@/types';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'real estate, property, homes, Kenya, Nairobi, buy, sell, rent',
  image = '/images/logo_whitebg.png',
  url = 'https://lamonarealtors.com',
  type = 'website',
  publishedTime,
  modifiedTime
}) => {
  const siteTitle = 'Lamona Realtors';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullUrl = url.startsWith('http') ? url : `https://lamonarealtors.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://lamonarealtors.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Lamona Realtors" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@lamonarealtors" />
      <meta name="twitter:creator" content="@lamonarealtors" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#155e75" />
      <meta name="msapplication-TileColor" content="#155e75" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Lamona Realtors",
          "description": "Premier real estate services in Kenya. Find your dream home with our expert guidance.",
          "url": "https://lamonarealtors.com",
          "logo": "https://lamonarealtors.com/images/logo_whitebg.png",
          "telephone": "+254750030357",
          "email": "anadoomollo@zohomail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "Kenya"
          },
          "sameAs": [
            "https://www.facebook.com/share/aQucT6BtD6U7vhy8/?mibextid=qi2Omg",
            "https://www.instagram.com/lamonarealtors"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Kenya"
          },
          "serviceType": [
            "Property Sales",
            "Property Rentals", 
            "Real Estate Investment",
            "Property Management"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;