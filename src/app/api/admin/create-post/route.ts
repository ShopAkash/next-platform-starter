import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { withAuth } from '@/lib/middleware-auth';

async function createPostHandler(request: NextRequest) {
  try {
    const { slug, content } = await request.json();

    if (!slug || !content) {
      return NextResponse.json(
        { error: 'Slug and content are required' },
        { status: 400 }
      );
    }

    // Validate slug format
    const validSlug = /^[a-z0-9-]+$/.test(slug);
    if (!validSlug) {
      return NextResponse.json(
        { error: 'Invalid slug format. Use only lowercase letters, numbers, and hyphens.' },
        { status: 400 }
      );
    }

    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'A blog post with this title already exists' },
        { status: 409 }
      );
    }

    // Ensure the posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filePath, content, 'utf8');

    return NextResponse.json(
      { 
        message: 'Blog post created successfully',
        slug,
        filePath: `src/content/posts/${slug}.mdx`
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const POST = withAuth(createPostHandler);