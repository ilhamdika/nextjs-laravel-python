import { getPostById } from '@/lib/posts'
import { notFound } from 'next/navigation'

export default function DetailPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)
  if (!post) return notFound()

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
