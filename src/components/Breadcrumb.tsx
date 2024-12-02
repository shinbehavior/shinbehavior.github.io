import React from 'react';
import { Icons } from './icons';
import { BreadcrumbItem } from '../types/blog';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm font-mono text-gray-600 py-4">
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <a
            href={item.path}
            className="hover:text-gray-900 transition-colors duration-200"
          >
            {item.label}
          </a>
          {index < items.length - 1 && (
            <Icons.ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};