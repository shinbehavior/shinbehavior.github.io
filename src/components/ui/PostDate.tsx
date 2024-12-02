import React from 'react';
import { Icons } from '../icons';

interface PostDateProps {
  date: string;
}

export const PostDate: React.FC<PostDateProps> = ({ date }) => (
  <div className="flex items-center text-sm text-muted-foreground">
    <Icons.Calendar className="w-4 h-4 mr-2" />
    <time>{date}</time>
  </div>
);