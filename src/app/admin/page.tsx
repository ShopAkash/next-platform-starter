'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PostMeta } from '@/types/blog';
import { 
  PlusCircle, 
  FileText, 
  LogOut, 
  Calendar, 
  User, 
  Image as ImageIcon, 
  Tag, 
  Search, 
  Eye, 
  Trash2,
  CheckCircle,
  AlertCircle,
  Loader2,
  Edit
} from 'lucide-react';

interface BlogFormData {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  author: string;
  content: string;
  tags: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [user, setUser] = useState<{ email: string; username: string; role: string } | null>(null);
  
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [editingPost, setEditingPost] = useState<PostMeta | null>(null);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    coverImage: '',
    author: '',
    content: '',
    tags: '',
    category: '',
    seoTitle: '',
    seoDescription: '',
    canonicalUrl: '',
    noIndex: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const checkAuthentication = async () => {
    try {
      const response = await fetch('/api/auth/verify');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
    } catch (error) {
      router.push('/login');
    } finally {
      setIsCheckingAuth(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/posts');
      if (response.ok) {
        const postsData = await response.json();
        setPosts(postsData);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoadingPosts(false);
    }
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/posts/${slug}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Post deleted successfully!' });
        fetchPosts(); // Refresh the posts list
      } else {
        setMessage({ type: 'error', text: 'Failed to delete post' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting post' });
    }
  };

  const handleEditPost = async (slug: string) => {
    setIsLoadingPost(true);
    try {
      const response = await fetch(`/api/admin/posts/${slug}`);
      if (response.ok) {
        const postData = await response.json();
        console.log('Loaded post data for editing:', postData);
        setEditingPost(postData.meta);
        
        // The content is already parsed by gray-matter, so we can use it directly
        const content = postData.content;
        
        // Set form data for editing
        const formattedDate = postData.meta.date ? 
          new Date(postData.meta.date).toISOString().split('T')[0] : 
          new Date().toISOString().split('T')[0];
          
        setFormData({
          title: postData.meta.title || '',
          description: postData.meta.description || '',
          date: formattedDate,
          coverImage: postData.meta.coverImage || '',
          author: postData.meta.author || '',
          content: content,
          tags: postData.meta.tags ? postData.meta.tags.join(', ') : '',
          category: postData.meta.category || '',
          seoTitle: postData.meta.seoTitle || '',
          seoDescription: postData.meta.seoDescription || '',
          canonicalUrl: postData.meta.canonicalUrl || '',
          noIndex: postData.meta.noIndex || false,
        });
        
        setActiveTab('create');
        setMessage({ type: 'success', text: `Loaded "${postData.meta.title}" for editing` });
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.error || 'Failed to load post for editing' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error loading post' });
    } finally {
      setIsLoadingPost(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      coverImage: '',
      author: '',
      content: '',
      tags: '',
      category: '',
      seoTitle: '',
      seoDescription: '',
      canonicalUrl: '',
      noIndex: false,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const slug = generateSlug(formData.title);
      
      // Create the frontmatter
      const tags = formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
      
      const frontmatter = `---
title: "${formData.title}"
description: "${formData.description}"
date: "${formData.date}"${formData.coverImage ? `\ncoverImage: "${formData.coverImage}"` : ''}${formData.author ? `\nauthor: "${formData.author}"` : ''}${formData.category ? `\ncategory: "${formData.category}"` : ''}${tags.length > 0 ? `\ntags: [${tags.map(tag => `"${tag}"`).join(', ')}]` : ''}${formData.seoTitle ? `\nseoTitle: "${formData.seoTitle}"` : ''}${formData.seoDescription ? `\nseoDescription: "${formData.seoDescription}"` : ''}${formData.canonicalUrl ? `\ncanonicalUrl: "${formData.canonicalUrl}"` : ''}${formData.noIndex ? `\nnoIndex: true` : ''}
---

`;

      const fullContent = frontmatter + formData.content;

      let response;
      if (editingPost) {
        // Update existing post
        response = await fetch(`/api/admin/posts/${editingPost.slug}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: fullContent,
            newSlug: slug !== editingPost.slug ? slug : undefined,
          }),
        });
      } else {
        // Create new post
        response = await fetch('/api/admin/create-post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            slug,
            content: fullContent,
          }),
        });
      }

      if (response.ok) {
        const action = editingPost ? 'updated' : 'created';
        setMessage({ type: 'success', text: `Blog post "${formData.title}" ${action} successfully!` });
        handleCancelEdit(); // Reset form and editing state
        fetchPosts(); // Refresh the posts list
      } else {
        const error = await response.text();
        setMessage({ type: 'error', text: `Error: ${error}` });
      }
    } catch (error) {
      const action = editingPost ? 'update' : 'create';
      setMessage({ type: 'error', text: `Failed to ${action} blog post. Please try again.` });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex justify-center items-center min-h-64 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Checking authentication...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Create and manage your blog posts with ease
            </p>
            {user && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Logged in as <span className="font-medium text-foreground">{user.email}</span></span>
              </div>
            )}
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Status Messages */}
        {message && (
          <Alert className={message.type === 'success' ? 'border-green-200 bg-green-50' : 'border-destructive bg-destructive/10'}>
            {message.type === 'success' ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-destructive" />
            )}
            <AlertDescription className={message.type === 'success' ? 'text-green-800' : 'text-destructive'}>
              {message.text}
            </AlertDescription>
          </Alert>
        )}

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'create' | 'manage')} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="create" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Create New Post
            </TabsTrigger>
            <TabsTrigger value="manage" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Manage Posts ({posts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {editingPost ? (
                    <>
                      <FileText className="h-5 w-5" />
                      Edit Blog Post
                    </>
                  ) : (
                    <>
                      <PlusCircle className="h-5 w-5" />
                      Create New Blog Post
                    </>
                  )}
                </CardTitle>
                <CardDescription>
                  {editingPost 
                    ? `Editing "${editingPost.title}". Update the fields below and save your changes.`
                    : 'Fill in the details below to create a new blog post. All fields marked with * are required.'
                  }
                </CardDescription>
                {editingPost && (
                  <div className="flex gap-2 mt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleCancelEdit}
                      type="button"
                    >
                      Cancel Edit
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter blog post title"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Date *
                        </Label>
                        <Input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="author" className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Author
                        </Label>
                        <Input
                          id="author"
                          name="author"
                          value={formData.author}
                          onChange={handleInputChange}
                          placeholder="Author name (optional)"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="coverImage" className="flex items-center gap-2">
                          <ImageIcon className="h-4 w-4" />
                          Cover Image URL
                        </Label>
                        <Input
                          type="url"
                          id="coverImage"
                          name="coverImage"
                          value={formData.coverImage}
                          onChange={handleInputChange}
                          placeholder="/images/cover.jpg (optional)"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          placeholder="Technology, Tutorial, etc. (optional)"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tags" className="flex items-center gap-2">
                          <Tag className="h-4 w-4" />
                          Tags
                        </Label>
                        <Input
                          id="tags"
                          name="tags"
                          value={formData.tags}
                          onChange={handleInputChange}
                          placeholder="react, nextjs, javascript (comma-separated)"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Brief description of the blog post"
                    />
                  </div>

                  {/* SEO Settings */}
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Search className="h-4 w-4" />
                        SEO Settings
                      </CardTitle>
                      <CardDescription>
                        Optimize your post for search engines and social media
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="seoTitle">SEO Title</Label>
                          <Input
                            id="seoTitle"
                            name="seoTitle"
                            value={formData.seoTitle}
                            onChange={handleInputChange}
                            placeholder="Custom title for search engines (optional)"
                          />
                          <p className="text-xs text-muted-foreground">If empty, will use the main title</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="canonicalUrl">Canonical URL</Label>
                          <Input
                            type="url"
                            id="canonicalUrl"
                            name="canonicalUrl"
                            value={formData.canonicalUrl}
                            onChange={handleInputChange}
                            placeholder="https://example.com/original-post (optional)"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="seoDescription">SEO Description</Label>
                        <Textarea
                          id="seoDescription"
                          name="seoDescription"
                          value={formData.seoDescription}
                          onChange={handleInputChange}
                          rows={2}
                          placeholder="Custom description for search engines (optional)"
                        />
                        <p className="text-xs text-muted-foreground">If empty, will use the main description</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="noIndex"
                          name="noIndex"
                          checked={formData.noIndex}
                          onChange={handleInputChange}
                          className="h-4 w-4 rounded border-border"
                        />
                        <Label htmlFor="noIndex" className="text-sm font-normal">
                          Prevent search engines from indexing this post (noindex)
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Content */}
                  <div className="space-y-2">
                    <Label htmlFor="content">Content (Markdown/MDX) *</Label>
                    <Textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                      rows={20}
                      className="font-mono text-sm"
                      placeholder="# Your Blog Post Title

Write your content in **Markdown** with React components:

<Alert type='info'>
This is a custom Alert component!
</Alert>

## Section Title

Your content here...

<Button href='/blog'>
Back to Blog
</Button>"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {editingPost ? 'Updating...' : 'Creating...'}
                        </>
                      ) : (
                        <>
                          {editingPost ? (
                            <>
                              <FileText className="h-4 w-4" />
                              Update Blog Post
                            </>
                          ) : (
                            <>
                              <PlusCircle className="h-4 w-4" />
                              Create Blog Post
                            </>
                          )}
                        </>
                      )}
                    </Button>
                    
                    <Button variant="outline" asChild>
                      <a href="/blog" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        View Blog
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Manage Existing Posts
                </CardTitle>
                <CardDescription>
                  View, edit, and delete your published blog posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loadingPosts ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center space-y-4">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground">Loading posts...</p>
                    </div>
                  </div>
                ) : posts.length === 0 ? (
                  <div className="text-center py-12 space-y-4">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">No blog posts found</h3>
                      <p className="text-muted-foreground">Get started by creating your first blog post.</p>
                    </div>
                    <Button 
                      onClick={() => setActiveTab('create')}
                      className="flex items-center gap-2"
                    >
                      <PlusCircle className="h-4 w-4" />
                      Create Your First Post
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <Card key={post.slug} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1 space-y-3">
                              <div>
                                <h3 className="text-lg font-semibold mb-1">
                                  {post.title}
                                </h3>
                                <p className="text-muted-foreground line-clamp-2">
                                  {post.description}
                                </p>
                              </div>
                              
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                                {post.author && (
                                  <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    <span>{post.author}</span>
                                  </div>
                                )}
                              </div>

                              <div className="flex flex-wrap gap-1">
                                {post.category && (
                                  <Badge variant="secondary" className="text-xs">
                                    {post.category}
                                  </Badge>
                                )}
                                {post.tags && post.tags.slice(0, 3).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                              <Button 
                                variant="outline"
                                size="sm"
                                asChild
                              >
                                <a href={`/blog/${post.slug}`} className="flex items-center gap-2">
                                  <Eye className="h-3 w-3" />
                                  View
                                </a>
                              </Button>
                              <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => handleEditPost(post.slug)}
                                disabled={isLoadingPost}
                                className="flex items-center gap-2"
                              >
                                {isLoadingPost ? (
                                  <Loader2 className="h-3 w-3 animate-spin" />
                                ) : (
                                  <Edit className="h-3 w-3" />
                                )}
                                Edit
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDeletePost(post.slug)}
                                className="flex items-center gap-2"
                              >
                                <Trash2 className="h-3 w-3" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Tips Card */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              💡 Writing Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Use Markdown syntax for formatting (# for headers, ** for bold, etc.)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Add React components like &lt;Alert type="info"&gt; or &lt;Button&gt;
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Include code blocks with ```language syntax
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                The slug will be auto-generated from your title
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Cover images should be placed in /public/images/ directory
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}