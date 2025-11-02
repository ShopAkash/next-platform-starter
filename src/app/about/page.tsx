import AboutPageContent from '@/components/AboutPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Brocan - Leading Retail Technology Innovation Since 2020',
  description: 'Discover Brocan\'s journey from startup to leading retail technology provider. Learn about our mission to revolutionize retail operations with innovative POS systems and integrated solutions for businesses worldwide.',
  keywords: [
    'about Brocan',
    'retail technology company',
    'POS system provider',
    'retail software company',
    'business solutions provider',
    'retail innovation',
    'company history',
    'retail technology team',
    'business management solutions',
    'retail industry expertise'
  ],
  openGraph: {
    title: 'About Brocan - Leading Retail Technology Innovation Since 2020',
    description: 'Discover how Brocan revolutionizes retail operations with innovative technology solutions. Serving hundreds of retailers worldwide since 2020.',
    type: 'website',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brocan Team - Retail Technology Experts',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Brocan - Leading Retail Technology Innovation',
    description: 'Discover how Brocan revolutionizes retail operations with innovative technology solutions.',
    images: ['/images/about-twitter-image.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}