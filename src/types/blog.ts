export interface PostMeta {
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  author?: string;
  slug: string;
  tags?: string[];
  category?: string;
  readingTime?: number;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}