import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider, useTheme } from '@/contexts/theme'

import { useEffect } from 'react'

export const Highlighting = () => {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const linkId = "highlight-js-theme"
    let link = document.getElementById(linkId) as HTMLLinkElement | null

    if (!link) {
      link = document.createElement("link")
      link.id = linkId
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }

    if (resolvedTheme === "light") {
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/github.min.css" // Path to your light theme CSS
    } else {
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/github-dark.min.css" // Path to your dark theme CSS
    }
  }, [resolvedTheme])

  return null // This component doesn't render any visible UI
}

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <Header />
      <Highlighting />
      <main className='min-h-dvh mx-8'>
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools position='bottom-right' />
    </ThemeProvider>
  ),
})
