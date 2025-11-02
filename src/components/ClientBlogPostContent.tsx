"use client";

import { Post } from '@/types/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Alert from '@/components/Alert';
import MDXButton from '@/components/MDXButton';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import FinalCTA from './FinalCTA';

const components = {
  Alert,
  Button: MDXButton,
  Image: SafeImage,
  Link,
};

interface ClientBlogPostContentProps {
  post: Post;
}

export default function ClientBlogPostContent({ post }: ClientBlogPostContentProps) {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        )}
        
        {/* Article Header */}
        <header 
          ref={headerRef}
          className={`mb-12 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Category Badge */}
          {post.category && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.description}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-6">
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
            
            <button className="flex items-center gap-2 hover:text-gray-700 transition-colors">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div 
          ref={contentRef}
          className={`transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="prose prose-lg max-w-none prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-black prose-a:font-medium hover:prose-a:text-gray-700 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100">
            <MDXRemote source={post.content} components={components} />
          </div>
        </div>
      </article>
      
      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enjoyed this article?</h3>
            <p className="text-gray-600 mb-6">
              Discover more insights and stories on our blog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              {/* <Link 
                href="/admin"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Write Your Own
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}