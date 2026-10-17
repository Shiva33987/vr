import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  ogType?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'VR Media & Advertising — Premier outdoor advertising, LED video walls, railway station branding, digital marketing, and event promotions across South India.',
  canonicalPath = '',
  schema,
  ogType = 'website',
}) => {
  const fullTitle = title
    ? `${title} | VR Media & Advertising`
    : 'VR Media & Advertising — Connecting Brands with People';

  const siteUrl = 'https://www.vrmediaadvertising.com'; // TODO: replace with production domain
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  // Default Organization & LocalBusiness JSON-LD schema
  const defaultLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.brand.name,
    legalName: SITE_CONFIG.brand.legalName,
    alternateName: 'VR Media',
    slogan: SITE_CONFIG.brand.tagline,
    url: siteUrl,
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.brand.founder.name,
      jobTitle: SITE_CONFIG.brand.founder.title,
    },
    telephone: [SITE_CONFIG.contact.phone1, SITE_CONFIG.contact.phone2],
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      addressRegion: SITE_CONFIG.contact.address.state,
      addressCountry: 'IN',
    },
    areaServed: ['Telangana', 'Andhra Pradesh', 'South India', 'India'],
    priceRange: '₹₹₹',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-20:00',
  };

  const finalSchema = schema ? schema : defaultLocalBusinessSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_CONFIG.brand.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};
