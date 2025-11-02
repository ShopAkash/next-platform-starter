import Head from 'next/head';
import { PostMeta } from '@/lib/mdx';
import { Post } from '@/types/blog';

interface SEOProps {
  post?: Post | PostMeta;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export default function SEO({ 
  post, 
  title, 
  description, 
  image, 
  url, 
  type = 'website' 
}: SEOProps) {
  const siteTitle = 'MDX Blog';
  const siteDescription = 'A modern blog built with Next.js, MDX, and Tailwind CSS';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Use post data if available, otherwise use props
  const pageTitle = post?.seoTitle || post?.title || title || siteTitle;
  const pageDescription = post?.seoDescription || post?.description || description || siteDescription;
  const pageImage = post?.coverImage || image || '/images/default-og.jpg';
  const pageUrl = post ? `${siteUrl}/blog/${post.slug}` : url || siteUrl;
  const canonical = post?.canonicalUrl || pageUrl;

  const structuredData = post ? {
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
      name: siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl
    },
    keywords: post.tags?.join(', '),
    articleSection: post.category,
    wordCount: 'content' in post && post.content ? post.content.split(' ').length : undefined,
    timeRequired: post.readingTime ? `PT${post.readingTime}M` : undefined
  } : null;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {post?.noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${siteUrl}${pageImage}`} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}${pageImage}`} />
      
      {/* Article specific */}
      {post && (
        <>
          <meta property="article:published_time" content={post.date} />
          <meta property="article:author" content={post.author || 'Anonymous'} />
          {post.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
          {post.category && <meta property="article:section" content={post.category} />}
        </>
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}