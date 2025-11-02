import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMeta } from '@/types/blog';

export type { PostMeta };

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => name.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const meta: PostMeta = {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString().split('T')[0],
      coverImage: data.coverImage || '/images/default-cover.svg',
      author: data.author || 'Anonymous',
      category: data.category || 'General',
      tags: data.tags || [],
      seoTitle: data.seoTitle || data.title || 'Untitled',
      seoDescription: data.seoDescription || data.description || '',
    };
    
    return { meta, content };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): PostMeta[] {
  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map(slug => {
        const post = getPostBySlug(slug);
        return post?.meta;
      })
      .filter((post): post is PostMeta => post !== undefined)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

export function getPostsByCategory(category: string): PostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.category?.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.tags?.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}