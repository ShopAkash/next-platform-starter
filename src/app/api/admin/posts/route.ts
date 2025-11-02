import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/mdx';
import { withAuth } from '@/lib/middleware-auth';

async function getPostsHandler(request: NextRequest) {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export const GET = withAuth(getPostsHandler);