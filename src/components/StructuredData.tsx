import { Post } from '@/types/blog';

interface StructuredDataProps {
  post: Post;
}

export default function StructuredData({ post }: StructuredDataProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.coverImage ? `${siteUrl}${post.coverImage}` : undefined,
    author: {
      '@type': 'Person',
      name: post.author || 'Anonymous'
    },
    publisher: {
      '@type': 'Organization',
      name: 'MDX Blog',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`
    },
    keywords: post.tags?.join(', '),
    articleSection: post.category,
    wordCount: post.content ? post.content.split(' ').length : undefined,
    timeRequired: post.readingTime ? `PT${post.readingTime}M` : undefined,
    url: `${siteUrl}/blog/${post.slug}`,
    isPartOf: {
      '@type': 'Blog',
      name: 'MDX Blog',
      url: siteUrl
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}