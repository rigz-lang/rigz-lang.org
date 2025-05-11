import { createFileRoute } from '@tanstack/react-router'
import {BlogPreview, blogs} from '@/blog/all'

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <h1 className='text-4xl my-4'>Blog</h1>
    <p className='my-2'>Stay up-to-date with the latest updates, tutorials, and insights about rigz.</p>
    { Object.keys(blogs).map(path => <BlogPreview key={path} path={path} /> )}
  </>
}
