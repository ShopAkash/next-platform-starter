import JsonLd from './JsonLd';

export default function OrganizationSchema() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Brocan',
    description: 'Revolutionary retail technology solutions including POS systems, inventory management, and e-commerce integration.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/images/logo.png`,
    foundingDate: '2020',
    industry: 'Retail Technology',
    numberOfEmployees: '50-100',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'CA',
      addressLocality: 'San Francisco',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://twitter.com/brocan',
      'https://linkedin.com/company/brocan',
      'https://facebook.com/brocan',
    ],
    offers: {
      '@type': 'Offer',
      category: 'Retail Technology Solutions',
      description: 'Comprehensive retail management software including POS systems, inventory management, and analytics.',
    },
  };

  return <JsonLd data={organizationData} />;
}