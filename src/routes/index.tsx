import { createFileRoute } from '@tanstack/react-router'

import { createStarryNight } from '@wooorm/starry-night'
import ruby from '@wooorm/starry-night/source.ruby'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'

import { BlogPreview, latest } from '@/blog/all'
import { Suspense } from 'react'
import hljs from "@/lib/highlighting.js"

export const Route = createFileRoute('/')({
  component: App,
})

const sample = `mut a = 1
bar = do
    a += 1
    21 * a
end

fn foo = bar

@test
fn test_foo
  # main variables are undefined in tests
  # this will be fixed in a later version
  mut a = 1
  bar = do
    a += 1
    21 * a
  end

  assert_eq foo, 42
  # scopes are only processed once
  assert_eq foo, 42
end

foo`

const crates = {
  rigz: 'CLI for running rigz locally',
  rigz_ast: 'AST parser for the rigz programming language',
  rigz_ast_derive: 'Procedural macro to generate ParsedModules for rigz, generate a trait for the module implementation and parse input at compile time.',
  rigz_runtime: 'Handles parsing and converting rigz to its VM instructions (for syntax highlighting use tree-sitter-rigz instead)',
  rigz_vm: 'Stack based VM for rigz',
  'tree-sitter-rigz': 'Rigz grammar for tree-sitter',
}

function ComponentLink({ crate, description }: { crate: string, description: string }) {
  return (
    <li className="my-1">
      <a
        href={`https://crates.io/crates/${crate}`}
        target="_blank"
        rel="noopener"
        className="text-blue-600 hover:underline"
      >
        {crate}
      </a>{' '}
      – <span className="">{description}</span>
    </li>
  )
}

function App() {
  const highlighted = hljs.highlight(sample, {
    language: 'rigz'
  });

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Rigz?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 text-lg">
            <p>
              Rigz is a dynamic scripting language written in Rust, inspired by Ruby, Kotlin, and Rust.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc ms-6 space-y-1">
                <li>Intuitive syntax - easy to read and write</li>
                <li>Resumable VM - snapshot your VM and resume from that point</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Components</h3>
              <ul className="list-disc ms-6">
                {Object.entries(crates).map(([k, v]) => (
                  <ComponentLink key={k} crate={k} description={v} />
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded border p-4 overflow-auto text-sm leading-relaxed h-fit my-auto">
            <pre className="language-rb whitespace-pre-wrap">
              <code dangerouslySetInnerHTML={{__html: highlighted.value}}/>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        <div className="space-y-4">
          {latest.map((path) => (
            <BlogPreview key={path} path={path} />
          ))}
        </div>
      </section>
    </main>
  )
}
