'use client'

import { useState } from 'react'
import BlogCard from '../BlogPost/BlogCard'
import FullBlogModal from '../FullBlogModel/FullBlogModel'
import EditBlogModal from '../EditBlogModel/EditBlockModel'
import { MdAdd } from 'react-icons/md'
import { Blog } from '@/types'

// Sample blog data
const initialBlogs: Blog[] = [
  {
    id: 1,
    title: 'Getting Started with React',
    description: 'Learn the basics of React and start building your first application.',
    fullContent: 'React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this blog post, we\'ll cover the fundamentals of React, including components, props, and state management.',
    image: 'https://picsum.photos/seed/react/300/200',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    description: 'Discover how to create beautiful, responsive designs with Tailwind CSS.',
    fullContent: 'Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. Unlike traditional CSS frameworks, Tailwind doesn\'t provide pre-built components. Instead, it gives you low-level utility classes that you can combine to create any design, directly in your markup.',
    image: 'https://picsum.photos/seed/tailwind/300/200',
  },
  // Add more sample blog posts here
]

export default function MainBlog() {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs)
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [isFullBlogModalOpen, setIsFullBlogModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleEditBlog = (updatedBlog: Blog) => {
    setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog))
    setIsEditModalOpen(false)
  }

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  return (
    <main className="min-h-screen bg-[#022F40] text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Interactive Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onView={() => {
              setSelectedBlog(blog)
              setIsFullBlogModalOpen(true)
            }}
            onEdit={() => {
              setSelectedBlog(blog)
              setIsEditModalOpen(true)
            }}
            onDelete={() => handleDeleteBlog(blog.id)}
          />
        ))}
      </div>
      <button
        className="fixed bottom-8 right-8 bg-[#38AECC] text-white p-4 rounded-full shadow-lg hover:bg-[#2D8CAA] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#38AECC] focus:ring-opacity-50"
        onClick={() => {
          setSelectedBlog({ id: Date.now(), title: '', description: '', fullContent: '', image: '' })
          setIsEditModalOpen(true)
        }}
        aria-label="Add new blog post"
      >
        <MdAdd size={24} />
      </button>
      {selectedBlog && (
        <>
          <FullBlogModal
            isOpen={isFullBlogModalOpen}
            onClose={() => setIsFullBlogModalOpen(false)}
            blog={selectedBlog}
          />
          <EditBlogModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            blog={selectedBlog}
            onSave={handleEditBlog}
          />
        </>
      )}
    </main>
  )
}