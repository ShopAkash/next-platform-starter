import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/mdx';
import fs from 'fs';
import path from 'path';
import { withAuth } from '@/lib/middleware-auth';

async function getPostHandler(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

async function deletePostHandler(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    fs.unlinkSync(filePath);

    return NextResponse.json(
      { message: 'Post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}

async function updatePostHandler(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { content, newSlug } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    const oldFilePath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(oldFilePath)) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // If slug is changing, rename the file
    if (newSlug && newSlug !== slug) {
      // Validate new slug format
      const validSlug = /^[a-z0-9-]+$/.test(newSlug);
      if (!validSlug) {
        return NextResponse.json(
          { error: 'Invalid slug format. Use only lowercase letters, numbers, and hyphens.' },
          { status: 400 }
        );
      }

      const newFilePath = path.join(postsDirectory, `${newSlug}.mdx`);
      
      // Check if new file already exists
      if (fs.existsSync(newFilePath)) {
        return NextResponse.json(
          { error: 'A blog post with this title already exists' },
          { status: 409 }
        );
      }

      // Write new file and delete old one
      fs.writeFileSync(newFilePath, content, 'utf8');
      fs.unlinkSync(oldFilePath);

      return NextResponse.json(
        { 
          message: 'Blog post updated successfully',
          slug: newSlug,
          filePath: `src/content/posts/${newSlug}.mdx`
        },
        { status: 200 }
      );
    } else {
      // Just update the content
      fs.writeFileSync(oldFilePath, content, 'utf8');

      return NextResponse.json(
        { 
          message: 'Blog post updated successfully',
          slug,
          filePath: `src/content/posts/${slug}.mdx`
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

export const GET = withAuth(getPostHandler);
export const PUT = withAuth(updatePostHandler);
export const DELETE = withAuth(deletePostHandler);