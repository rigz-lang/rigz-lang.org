import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from './ui/navigation-menu'
import { Menu, X, ExternalLink } from 'lucide-react'
import { blogs, latest } from '@/blog/all'
import { Separator } from './ui/separator'
import { ThemeToggle } from './theme'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b shadow-sm px-6 py-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold hover:text-blue-600 transition-colors">
          rigz
        </Link>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-x-6 text-sm font-medium">
            <NavigationMenuItem asChild>
              <NavigationMenuLink asChild>
                <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 min-w-max">
                <ul className="space-y-2">
                  {latest.map((post) => (
                    <li key={post}>
                      <NavigationMenuLink asChild>
                        <Link to="/blog/$post" params={{ post }} className="hover:text-blue-600 transition-colors">
                          {blogs[post].title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
                <Separator className="my-2" />
                <NavigationMenuLink asChild>
                  <Link to="/blog" activeOptions={{ exact: true }} className="font-semibold text-blue-500 hover:underline">
                    View all posts →
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://docs.rigz-lang.org/"
                target="_blank"
                rel="noopener"
                className="inline items-center gap-1 hover:text-blue-600 transition-colors"
              >
                Documentation <ExternalLink className="w-4 h-4 inline" />
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://repl.rigz-lang.org/"
                target="_blank"
                rel="noopener"
                className="inline items-center gap-1 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Try Rigz <ExternalLink className="w-4 h-4 inline" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-4 space-y-4 text-sm">
          <Link to="/" className="block hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <div>
            <span className="font-medium">Blog</span>
            <ul className="ml-4 mt-2 space-y-1">
              {latest.map((post) => (
                <li key={post}>
                  <Link
                    to="/blog/$post"
                    params={{ post }}
                    className="block hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    {blogs[post].title}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/blog"
                  className="block font-semibold text-blue-500 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  View all posts →
                </Link>
              </li>
            </ul>
          </div>

          <a
            href="https://docs.rigz-lang.org/"
            target="_blank"
            rel="noopener"
            className="block hover:text-blue-600"
          >
            Documentation
          </a>

          <a
            href="https://repl.rigz-lang.org/"
            target="_blank"
            rel="noopener"
            className="block text-green-600 font-semibold hover:text-green-700"
          >
            Try Rigz
          </a>

          <ThemeToggle />
        </nav>
      )}
    </header>
  )
}
