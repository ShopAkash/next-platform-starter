import * as React from 'react';
import "./globals.css";
import { brockman } from "@/lib/fonts";
import ClientProviders from "../components/ClientProviders";
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Brocan - Revolutionary Retail Technology Solutions',
    template: '%s | Brocan'
  },
  description: 'Transform your retail business with Brocan\'s integrated POS systems, inventory management, and e-commerce solutions. Streamline operations and boost sales with our cutting-edge retail technology.',
  keywords: [
    'retail technology',
    'POS systems',
    'inventory management',
    'e-commerce solutions',
    'retail software',
    'point of sale',
    'business management',
    'retail automation',
    'omnichannel retail',
    'retail analytics'
  ],
  authors: [{ name: 'Brocan Team' }],
  creator: 'Brocan',
  publisher: 'Brocan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Brocan',
    title: 'Brocan - Revolutionary Retail Technology Solutions',
    description: 'Transform your retail business with integrated POS systems, inventory management, and e-commerce solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brocan - Retail Technology Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brocan - Revolutionary Retail Technology Solutions',
    description: 'Transform your retail business with integrated POS systems, inventory management, and e-commerce solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@brocan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${brockman.variable} antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
