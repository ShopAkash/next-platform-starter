import HomePage from "@/components/HomePage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brocan - Revolutionary Retail Technology & POS Solutions',
  description: 'Transform your retail business with Brocan\'s integrated POS systems, inventory management, and omnichannel e-commerce solutions. Boost sales, streamline operations, and deliver exceptional customer experiences.',
  keywords: [
    'retail POS system',
    'point of sale software',
    'inventory management system',
    'retail technology solutions',
    'omnichannel retail platform',
    'e-commerce integration',
    'retail analytics dashboard',
    'business management software',
    'retail automation tools',
    'customer experience platform'
  ],
  openGraph: {
    title: 'Brocan - Revolutionary Retail Technology & POS Solutions',
    description: 'Transform your retail business with integrated POS systems, inventory management, and omnichannel solutions. Trusted by retailers worldwide.',
    type: 'website',
    images: [
      {
        url: '/images/home-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brocan Retail Technology Solutions Dashboard',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brocan - Revolutionary Retail Technology & POS Solutions',
    description: 'Transform your retail business with integrated POS systems, inventory management, and omnichannel solutions.',
    images: ['/images/home-twitter-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <HomePage />;
}