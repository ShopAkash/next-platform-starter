# MDX Blog - Next.js Blog System

A complete, modern blog system built with Next.js, MDX, and Tailwind CSS. Write your blog posts in Markdown with React components embedded right inside!

## ✨ Features

- 🚀 **Next.js App Router** - Latest Next.js with App Router for optimal performance
- 📝 **MDX Support** - Write in Markdown with React components embedded
- 🎨 **Tailwind CSS** - Beautiful, responsive design out of the box
- ⚡ **Static Generation** - Lightning-fast loading with SSG
- 🔍 **SEO Optimized** - Automatic metadata generation from frontmatter
- 📱 **Responsive Design** - Works perfectly on mobile and desktop
- 🧩 **Custom Components** - Alert and Button components ready to use in MDX
- 📂 **File-based Routing** - Automatic page generation from MDX files
- 🔧 **Admin Panel** - Secure web-based interface to create and manage blog posts
- 🔐 **Authentication** - JWT-based login system with bcrypt password hashing
- 🎯 **Advanced SEO** - Structured data, custom meta tags, and social sharing optimization
- 🏷️ **Tags & Categories** - Organize content with flexible tagging and categorization
- ⏱️ **Reading Time** - Automatic reading time calculation and display
- 🗂️ **API Routes** - RESTful API for blog post management

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Adding New Blog Posts

### Option 1: Admin Panel (Recommended)
1. Login at `/login` (default: tempacc.akash@gmail.com/Akrsh@gmail.com)
2. Navigate to `/admin` and use the web interface
3. Create posts with advanced SEO settings and metadata

### Option 2: Manual Creation
Create a new `.mdx` file in `src/content/posts/`:

```yaml
---
title: "Your Amazing Post"
description: "A brief description of your post"
date: "2024-11-01"
coverImage: "/images/cover.jpg" # Optional
author: "Your Name" # Optional
category: "Tutorial" # Optional
tags: ["nextjs", "react"] # Optional
seoTitle: "Custom SEO Title" # Optional
---

# Your Post Content

Write your content in **Markdown** with React components:

<Alert type="info">
This is a custom Alert component!
</Alert>

<Button href="/blog">
Back to Blog
</Button>
```

## 🎯 Project Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── [slug]/page.tsx    # Individual blog post
│   │   └── page.tsx           # Blog listing
│   └── page.tsx               # Homepage
├── components/
│   ├── Alert.tsx              # Custom Alert component
│   ├── Button.tsx             # Custom Button component
│   ├── BlogCard.tsx           # Blog post cards
│   └── Layout.tsx             # Main layout
├── content/
│   └── posts/                 # Your MDX blog posts
└── lib/
    └── mdx.ts                 # MDX parsing utilities
```

## 📚 Documentation

For detailed setup instructions, customization guide, and advanced features, see [SETUP.md](./SETUP.md).

## 🛠 Built With

- [Next.js 16](https://nextjs.org/) - React framework
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - MDX rendering

## 🚀 Deploy

Deploy easily to Vercel, Netlify, or any static hosting service:

```bash
npm run build
```

The blog generates static pages for optimal performance and SEO.

---

**Ready to start blogging?** Check out the example posts and start writing your own content! 🎉