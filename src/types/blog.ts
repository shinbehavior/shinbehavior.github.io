export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  image: string;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}