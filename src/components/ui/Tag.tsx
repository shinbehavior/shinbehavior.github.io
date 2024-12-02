import React from 'react';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
    {label}
  </span>
);