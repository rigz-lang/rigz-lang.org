// @ts-expect-error
import * as Rigz05 from '@/blog/rigz-0.5.0.mdx'
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
  'rigz-0.5.0': Rigz05,
}

export const latest = [
  'rigz-0.5.0',
]

export function BlogPreview({ path }: { path: string }) {
  const { author, date, updated, summary, title } = blogs[path];
  
  return (
    <div className="my-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <Link 
        to="/blog/$post" 
        params={{ post: path }} 
        className="group block"
      >
        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </Link>
      <div className="mt-2 flex flex-wrap items-center gap-x-6 text-sm text-gray-600">
        <p><span className="font-medium text-gray-700">Author:</span> {author}</p>
        <p><span className="font-medium text-gray-700">Date:</span> {format(date, 'PPP')}</p>
        {updated && (
          <p><span className="font-medium text-gray-700">Updated:</span> {format(updated, 'PPP')}</p>
        )}
      </div>
      <p className="mt-4 text-gray-700 italic">{summary}</p>
    </div>
  );
}
