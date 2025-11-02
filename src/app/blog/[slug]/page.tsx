import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Layout from '@/components/Layout';
import Alert from '@/components/Alert';
import MDXButton from '@/components/MDXButton';
import StructuredData from '@/components/StructuredData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const components = {};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const postData = getPostBySlug(slug);
    
    if (!postData) {
      return {
        title: 'Post Not Found',
      };
    }

    const { meta: post } = postData;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    
    return {
      title: post.seoTitle || `${post.title} - MDX Blog`,
      description: post.seoDescription || post.description,
      keywords: post.tags?.join(', '),
      authors: post.author ? [{ name: post.author }] : undefined,
      openGraph: {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.description,
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
        tags: post.tags,
        images: post.coverImage ? [{
          url: `${siteUrl}${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.description,
        images: post.coverImage ? [`${siteUrl}${post.coverImage}`] : [],
      },
      alternates: {
        canonical: post.canonicalUrl || `${siteUrl}/blog/${post.slug}`,
      },
      robots: {
        index: !post.noIndex,
        follow: !post.noIndex,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const postData = getPostBySlug(slug);

    if (!postData) {
      notFound();
    }

    const { meta: post, content } = postData;

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <Layout>
        <StructuredData post={{ ...post, content }} />
        <article className="max-w-4xl mx-auto space-y-8">
          {/* Back Navigation */}
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          
          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          {/* Article Header */}
          <header className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </div>
            
            {/* Meta Information */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{formattedDate}</time>
                  </div>
                  
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  )}
                  
                  {post.readingTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  )}
                </div>
                
                {/* Category and Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {post.category && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </Badge>
                  )}
                  
                  {post.tags && post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: content.replace(/---[\s\S]*?---/, '') }} />
          </div>
          
          {/* Back to Blog CTA */}
          <Card className="bg-muted/50">
            <CardContent className="text-center py-8">
              <h3 className="text-lg font-semibold mb-2">Enjoyed this post?</h3>
              <p className="text-muted-foreground mb-4">
                Check out more articles on our blog
              </p>
              <Button asChild>
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </CardContent>
          </Card>
        </article>
      </Layout>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    notFound();
  }
}