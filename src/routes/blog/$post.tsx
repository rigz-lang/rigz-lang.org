import { createFileRoute, notFound } from '@tanstack/react-router'
import { format } from 'date-fns'
import { useMDXComponents } from '@mdx-js/react'
import type { MDXComponents } from 'mdx/types.js'

import { blogs } from '@/blog/all'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/blog/$post')({
  loader: ({ params: { post } }) => post in blogs ? blogs[post] : null,
  component: RouteComponent,
})

const components: MDXComponents = {
  h1: (props) => <h1 className="text-3xl sm:text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />,
  h4: (props) => <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />,
  p: (props) => <p className="my-4 leading-relaxed" {...props} />,
  pre: (props) => <pre className="my-4 overflow-auto rounded bg-gray-100 p-4 text-sm" {...props} />,
  code: (props) => <code className="bg-gray-100 rounded px-1 text-sm" {...props} />,
  ul: (props) => <ul className="list-disc ms-8 my-4 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal ms-8 my-4 space-y-2" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
}

function RouteComponent() {
  const data = Route.useLoaderData()

  if (data === null) {
    return notFound()
  }

  const { title, date, updated, author, summary, default: Content } = data
  const c = useMDXComponents(components)

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 text-gray-800">
      <header>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight">{title}</h1>
        <div className="mt-2 text-sm text-gray-600 space-y-1">
          <p><strong>Author:</strong> {author}</p>
          <p><strong>Published:</strong> {format(date, 'PPP')}</p>
          {updated && <p><strong>Updated:</strong> {format(updated, 'PPP')}</p>}
        </div>
        {summary && <p className="mt-4 italic text-gray-700">{summary}</p>}
      </header>

      <Separator className="my-6" />

      <section className="prose prose-neutral max-w-none">
        <Content components={c} />
      </section>
    </article>
  )
}
