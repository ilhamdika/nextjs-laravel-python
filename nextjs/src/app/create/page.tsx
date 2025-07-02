'use client'
import { useState } from 'react'
import { createPost } from '@/lib/posts'
import { useRouter } from 'next/navigation'

export default function CreatePage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createPost({ id: Date.now().toString(), title, content })
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Buat Post</h1>
      <input className="input input-bordered w-full" placeholder="Judul" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea className="textarea textarea-bordered w-full" placeholder="Isi" value={content} onChange={e => setContent(e.target.value)} />
      <button className="btn btn-primary">Simpan</button>
    </form>
  )
}
