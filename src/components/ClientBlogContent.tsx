"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { BookOpen, PlusCircle, ArrowRight } from 'lucide-react';
import { PostMeta } from '@/types/blog';
import FinalCTA from './FinalCTA';

interface ClientBlogContentProps {
  posts: PostMeta[];
}

export default function ClientBlogContent({ posts }: ClientBlogContentProps) {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: postsRef, isVisible: postsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroRef}
            className={`text-center transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-600 mb-4 block">Brocan Blog</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Insights & Stories
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover the latest insights, tutorials, and stories about modern web development, 
              business growth, and technology trends that matter to your success.
            </p>
            
            {posts.length === 0 ? (
              <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8">
                <BookOpen className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-600 mb-6">
                  Be the first to share your insights with the world.
                </p>
                {/* <Button 
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() => window.location.href = '/admin'}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create First Post
                </Button> */}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="outline"
                  className="px-8 py-3 text-lg border-gray-300 text-gray-900 hover:bg-gray-100"
                  onClick={() => {
                    const el = document.getElementById("latest-posts");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Articles
                </Button>
                {/* <Button
                  className="px-8 py-3 text-lg bg-black text-white hover:bg-gray-800"
                  onClick={() => window.location.href = '/admin'}
                >
                  Write a Post
                </Button> */}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Posts Section */}
      {posts.length > 0 && (
        <section id="latest-posts" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              ref={postsRef}
              className={`transition-all duration-1000 ${
                postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Latest Articles
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Stay updated with our latest thoughts, tutorials, and insights on technology and business.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <div
                    key={post.slug}
                    className={`transition-all duration-1000 ${
                      postsVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
              
              {posts.length > 6 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    className="px-8 py-3 text-lg border-gray-300 text-gray-900 hover:bg-gray-100"
                  >
                    Load More Articles
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {/* <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Share Your Story?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of writers and share your insights with developers and entrepreneurs worldwide.
          </p>
          <Button
            className="px-8 py-3 text-lg bg-white text-black hover:bg-gray-100"
            onClick={() => window.location.href = '/admin'}
          >
            Start Writing Today
          </Button>
        </div>
      </section> */}
      <FinalCTA />
    </>
  );
}