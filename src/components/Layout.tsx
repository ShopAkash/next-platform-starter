import Link from 'next/link';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import PerformanceMonitor from './PerformanceMonitor';
import { PenTool, Home, BookOpen, Settings } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <PerformanceMonitor />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <PenTool className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MDX Blog</span>
          </Link>
          
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>Blog</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 MDX Blog. Built with Next.js, MDX, and shadcn/ui.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}