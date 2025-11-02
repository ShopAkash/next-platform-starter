# MDX Blog Setup Instructions

## 🚀 Getting Started

This is a complete Next.js blog system using MDX files for content management.

### Installation

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

You can add new blog posts in two ways:

### Method 1: Using the Admin Panel (Recommended)

1. **Login to Admin:**
   - Navigate to `/login` or click "Admin" in the navigation
   - Use default credentials: `tempacc.akash@gmail.com` / `Akrsh@gmail.com`
   - Change these in production using environment variables

2. **Create New Post:**
   - Fill in basic information: title, description, date, author, cover image
   - Add tags (comma-separated) and category for organization
   - Configure SEO settings: custom title, description, canonical URL
   - Write your content using Markdown/MDX syntax with React components
   - Click "Create Blog Post" to publish

3. **Manage Existing Posts:**
   - Switch to the "Manage Posts" tab to view all existing posts
   - View or delete posts as needed
   - Logout when finished

### Method 2: Manual File Creation

1. **Create a new MDX file:**
   Create a new `.mdx` file in the `src/content/posts/` directory:
   ```bash
   src/content/posts/my-new-post.mdx
   ```

2. **Add frontmatter:**
   Start your MDX file with YAML frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   description: "A brief description of your post"
   date: "2024-11-01"
   coverImage: "/images/your-cover-image.jpg" # Optional
   author: "Your Name" # Optional
   category: "Tutorial" # Optional
   tags: ["nextjs", "react", "javascript"] # Optional
   seoTitle: "Custom SEO Title" # Optional
   seoDescription: "Custom SEO description" # Optional
   canonicalUrl: "https://example.com/original" # Optional
   noIndex: false # Optional - prevents search indexing
   ---
   ```

3. **Write your content:**
   After the frontmatter, write your content in Markdown with React components:
   ```markdown
   # Your Post Title

   This is your post content written in **Markdown**.

   <Alert type="info">
   You can use custom React components inside your MDX!
   </Alert>

   ## Code Examples

   ```javascript
   const greeting = "Hello, World!";
   console.log(greeting);
   ```

   <Button href="/blog">
   Back to Blog
   </Button>
   ```

4. **Add images (optional):**
   Place your cover images in the `public/images/` directory and reference them in the frontmatter:
   ```yaml
   coverImage: "/images/my-post-cover.jpg"
   ```

## 🎨 Available Components

You can use these React components inside your MDX files:

### Alert Component

```jsx
<Alert type="info">This is an info alert</Alert>
<Alert type="warning">This is a warning alert</Alert>
<Alert type="success">This is a success alert</Alert>
<Alert type="error">This is an error alert</Alert>
```

### Button Component

```jsx
<Button href="/blog">Link Button</Button>
<Button onClick={() => alert('Clicked!')} variant="secondary">
  Click Me
</Button>
```

## 🛠 Customization

### Adding New Components

1. Create your component in `src/components/`
2. Import it in `src/app/blog/[slug]/page.tsx`
3. Add it to the `components` object:

```typescript
const components = {
  Alert,
  Button,
  YourNewComponent, // Add here
};
```

### Styling

- The blog uses **Tailwind CSS** for styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Prose styles are handled by `@tailwindcss/typography`

### Layout Customization

- Edit `src/components/Layout.tsx` to modify the overall layout
- Update `src/components/BlogCard.tsx` to change blog post cards
- Modify page components in `src/app/` for specific page layouts

## 📁 Project Structure

```
nextjs-mdx-blog/
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx      # Individual blog post page
│   │   │   └── page.tsx          # Blog listing page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   ├── Alert.tsx             # Alert component for MDX
│   │   ├── BlogCard.tsx          # Blog post card component
│   │   ├── Button.tsx            # Button component for MDX
│   │   └── Layout.tsx            # Main layout component
│   ├── content/
│   │   └── posts/                # Your MDX blog posts go here
│   │       ├── getting-started-with-nextjs.mdx
│   │       ├── mastering-react-hooks.mdx
│   │       └── tailwind-css-tips.mdx
│   └── lib/
│       └── mdx.ts                # MDX parsing utilities
├── public/
│   └── images/                   # Blog post images
└── tailwind.config.ts            # Tailwind configuration
```

## 🔧 Advanced Configuration

### Authentication & Security

1. **Change Default Credentials:**
   ```bash
   # Generate password hash
   node -e "console.log(require('bcryptjs').hashSync('your-new-password', 12))"
   
   # Set environment variables
   ADMIN_USERNAME=your-username
   ADMIN_PASSWORD_HASH=generated-hash-from-above
   JWT_SECRET=your-super-secret-jwt-key
   ```

2. **Environment Variables:**
   Copy `.env.example` to `.env.local` and update values:
   ```bash
   cp .env.example .env.local
   ```

### SEO Optimization

The blog includes comprehensive SEO features:

**Basic SEO:**
- `title` → Page title and Open Graph title
- `description` → Meta description and Open Graph description
- `coverImage` → Open Graph image

**Advanced SEO:**
- `seoTitle` → Custom search engine title
- `seoDescription` → Custom search engine description
- `tags` → Keywords and article tags
- `category` → Article section classification
- `canonicalUrl` → Prevent duplicate content issues
- `noIndex` → Control search engine indexing
- **Structured Data** → Automatic JSON-LD for rich snippets
- **Reading Time** → Automatic calculation and display

### Static Generation

All blog posts are statically generated at build time for optimal performance:

- Blog listing page: `/blog`
- Individual posts: `/blog/[slug]`

### Deployment

Deploy to Vercel, Netlify, or any static hosting service:

```bash
npm run build
npm run start
```

## 🎯 Features

- ✅ Static site generation with Next.js App Router
- ✅ MDX support with React components
- ✅ Responsive design with Tailwind CSS
- ✅ SEO optimization with metadata
- ✅ Automatic blog post sorting by date
- ✅ Clean, modern UI design
- ✅ TypeScript support
- ✅ Fast performance and loading times
- ✅ **Admin Panel** - Create and manage blog posts via web interface
- ✅ **Authentication System** - Secure login for admin access
- ✅ **Enhanced SEO** - Advanced metadata, structured data, and social sharing
- ✅ **API Routes** - RESTful API for blog post management
- ✅ **File Management** - Automatic MDX file creation and deletion
- ✅ **Tags & Categories** - Organize posts with tags and categories
- ✅ **Reading Time** - Automatic reading time calculation

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)

Happy blogging! 🎉