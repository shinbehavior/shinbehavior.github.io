import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbItem } from '../types/blog';
import { Icons } from './icons';
import { ThemeToggle } from './ui/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
}

export const Layout: React.FC<LayoutProps> = ({ children, breadcrumbs }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-muted bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <Icons.Book className="w-6 h-6 text-foreground" />
              <span className="font-serif text-xl text-foreground">Personal Blog</span>
            </a>
            <ThemeToggle />
          </div>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-8">
        {children}
      </main>
      <footer className="border-t border-muted py-6 text-center text-sm text-muted-foreground">
        <div className="max-w-3xl mx-auto px-6">
          © {new Date().getFullYear()} Personal Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};