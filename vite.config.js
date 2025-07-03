import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@mdx-js/rollup'

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";
import rehypeHighlight from 'rehype-highlight'
import {rigz} from '@rigz-lang/highlight.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { 
      enforce: 'pre', 
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkRehypeOptions: {

        },
        rehypePlugins: [[rehypeHighlight, {languages: {rigz}}]]
      })
    },
    TanStackRouterVite({ autoCodeSplitting: true }), 
    viteReact({include: /\.(jsx|js|mdx|md|tsx|ts)$/}), 
    tailwindcss()
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  publicDir: 'assets',
  build: {
    outDir: 'public'
  }
});
