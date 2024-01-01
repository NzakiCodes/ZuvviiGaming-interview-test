import Posts from '@/components/Posts'
import useAPI from '@/hooks/useAPI'
import { useState } from 'react';

export default function Home() {
  const [searchText, setSearchText] = useState('')
  const { data, error, loading } = useAPI("https://jsonplaceholder.typicode.com/posts");

  const filterPosts = (term, posts) => {
    return posts.length > 1 ? posts.filter((post) => post.title.includes(term) || post.body.includes(term)) : []
  }
  const posts = filterPosts(searchText.toString().toLowerCase(), data)

  return (
    <main className='m-6'>
      <h1 className='text-2xl font-bold my-4'>Posts</h1>
      <div className='space-x-1'>
        <span className='text-xl'>Search</span>
        <input className='text-black border-2 border-gray-500 p-2 text-lg' onChange={(e) => setSearchText(e.target.value)} />
      </div>
      <Posts error={error} data={posts} loading={loading} />
    </main>
  )
}







