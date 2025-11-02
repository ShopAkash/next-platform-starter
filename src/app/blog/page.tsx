import Header from '@/components/Header';
import { PostMeta } from '@/types/blog';
import { getAllPosts } from '@/lib/mdx';
import ClientBlogContent from '@/components/ClientBlogContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail Technology Blog - Expert Insights & Industry Trends | Brocan',
  description: 'Stay ahead in retail with expert insights on POS systems, inventory management, e-commerce trends, and retail technology innovations. Read the latest from Brocan\'s retail experts.',
  keywords: [
    'retail technology blog',
    'POS system insights',
    'inventory management tips',
    'e-commerce trends',
    'retail industry news',
    'business management advice',
    'retail software guides',
    'omnichannel retail strategies',
    'retail analytics insights',
    'customer experience tips'
  ],
  openGraph: {
    title: 'Retail Technology Blog - Expert Insights & Industry Trends',
    description: 'Stay ahead in retail with expert insights on POS systems, inventory management, and e-commerce trends from Brocan\'s retail experts.',
    type: 'website',
    images: [
      {
        url: '/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brocan Retail Technology Blog',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail Technology Blog - Expert Insights & Industry Trends',
    description: 'Stay ahead in retail with expert insights on POS systems, inventory management, and e-commerce trends.',
    images: ['/images/blog-twitter-image.jpg'],
  },
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientBlogContent posts={posts} />
    </div>
  );
}