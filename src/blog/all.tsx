// @ts-expect-error
import * as Rigz05 from '@/blog/rigz_0.5.0.mdx'
import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import type { MDXContent } from 'mdx/types';

export type Blog = {
  author: string;
  date: Date;
  updated?: Date;
  title: string;
  summary: string;
  default: MDXContent
}

export const blogs: Record<string, Blog> = {
  'rigz_0.5.0': Rigz05,
}

export const latest = [
  'rigz_0.5.0',
]

export function BlogPreview({ path }: { path: string }) {
  const { author, date, updated, summary, title } = blogs[path];
  
  return (
    <div className="my-4 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <Link 
        to="/blog/$post" 
        params={{ post: path }} 
        className="group block"
      >
        <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </Link>
      <div className="mt-2 flex flex-wrap items-center gap-x-6 text-sm">
        <p><span className="font-medium">Author:</span> {author}</p>
        <p><span className="font-medium">Date:</span> {format(date, 'PPP')}</p>
        {updated && (
          <p><span className="font-medium">Updated:</span> {format(updated, 'PPP')}</p>
        )}
      </div>
      <p className="mt-4 italic">{summary}</p>
    </div>
  );
}
