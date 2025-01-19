'use client'
import { FC } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { Blog } from '@/types'

interface BlogCardProps {
  blog: Blog
  onView: () => void
  onEdit: () => void
  onDelete: () => void
}

const BlogCard: FC<BlogCardProps> = ({ blog, onView, onEdit, onDelete }) => {
  return (
    <div className="bg-white text-[#022F40] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {blog.image && (
        <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={onView}
            className="text-[#38AECC] hover:text-[#2D8CAA] transition-colors duration-300 focus:outline-none focus:underline"
            aria-label="View full blog post"
          >
            Read More
          </button>
          <div className="flex space-x-2">
            <button
              onClick={onEdit}
              className="text-gray-600 hover:text-[#38AECC] transition-colors duration-300 focus:outline-none focus:text-[#38AECC]"
              aria-label="Edit blog post"
            >
              <MdEdit size={20} />
            </button>
            <button
              onClick={onDelete}
              className="text-gray-600 hover:text-red-500 transition-colors duration-300 focus:outline-none focus:text-red-500"
              aria-label="Delete blog post"
            >
              <MdDelete size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard