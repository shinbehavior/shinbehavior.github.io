import React from 'react';
import { BlogPost as BlogPostType } from '../types/blog';
import { Tag } from './ui/Tag';
import { PostDate } from './ui/PostDate';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="mb-12 p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-serif mb-2 text-card-foreground hover:text-accent-foreground transition-colors duration-200">
            <a href={`/post/${post.id}`}>{post.title}</a>
          </h2>
          <PostDate date={post.date} />
          <div className="prose prose-gray dark:prose-invert max-w-none mt-4">
            <p className="text-card-foreground/90 leading-relaxed">{post.content}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};