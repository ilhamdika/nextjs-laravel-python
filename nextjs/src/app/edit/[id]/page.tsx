'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getPostById, updatePost } from '@/lib/posts'

export default function EditPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)
  const router = useRouter()

  const [title, setTitle] = useState(post?.title || '')
  const [content, setContent] = useState(post?.content || '')

  if (!post) return <div className="p-6">Post tidak ditemukan</div>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updatePost(post.id, { title, content })
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Edit Post</h1>
      <input className="input input-bordered w-full" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea className="textarea textarea-bordered w-full" value={content} onChange={e => setContent(e.target.value)} />
      <button className="btn btn-primary">Update</button>
    </form>
  )
}
