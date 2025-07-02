export type Post = {
  id: string
  title: string
  content: string
}

let posts: Post[] = [
  { id: '1', title: 'Post Pertama', content: 'Isi post pertama' },
  { id: '2', title: 'Post Kedua', content: 'Isi post kedua' },
]

export const getPosts = () => posts
export const getPostById = (id: string) => posts.find(p => p.id === id)
export const createPost = (post: Post) => posts.push(post)
export const updatePost = (id: string, data: Partial<Post>) => {
  const i = posts.findIndex(p => p.id === id)
  if (i !== -1) posts[i] = { ...posts[i], ...data }
}
export const deletePost = (id: string) => {
  posts = posts.filter(p => p.id !== id)
}
