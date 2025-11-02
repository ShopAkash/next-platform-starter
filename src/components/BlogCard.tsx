import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { PostMeta } from '@/types/blog';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

interface BlogCardProps {
  post: PostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
      {/* Cover Image */}
      <div className="relative h-48 w-full overflow-hidden">
        {post.coverImage ? (
          <>
            <SafeImage
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fallback={
                <div className="text-gray-400 text-4xl font-bold">
                  {post.title.charAt(0).toUpperCase()}
                </div>
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-4xl font-bold">
              {post.title.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          {post.author && (
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{post.author}</span>
            </div>
          )}
          {post.readingTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min</span>
            </div>
          )}
        </div>
        
        {/* Category Badge */}
        {post.category && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
              {post.category}
            </span>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-md border"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Read More Link */}
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-300 group/link"
        >
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}