'use client'
import Link from 'next/link'
import { getPosts, deletePost } from '@/lib/posts'
import { useState } from 'react'

export default function HomePage() {
  const [posts, setPosts] = useState(getPosts())

  const handleDelete = (id: string) => {
    deletePost(id)
    setPosts(getPosts())
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Daftar Post</h1>
        <Link href="/create" className="btn btn-primary">+ Tambah</Link>
      </div>

      {posts.map(post => (
        <div key={post.id} className="card bg-base-100 shadow-md p-4">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.content.slice(0, 80)}...</p>
          <div className="flex gap-2 mt-2">
            <Link href={`/post/${post.id}`} className="btn btn-sm btn-info">Lihat</Link>
            <Link href={`/edit/${post.id}`} className="btn btn-sm btn-warning">Edit</Link>
            <button onClick={() => handleDelete(post.id)} className="btn btn-sm btn-error">Hapus</button>
          </div>
        </div>
      ))}
    </div>
  )
}
