import { FC, useState, useEffect } from 'react'
import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'
import { Blog } from '@/types'

interface EditBlogModalProps {
  isOpen: boolean
  onClose: () => void
  blog: Blog
  onSave: (blog: Blog) => void
}

const EditBlogModal: FC<EditBlogModalProps> = ({ isOpen, onClose, blog, onSave }) => {
  const [editedBlog, setEditedBlog] = useState<Blog>(blog)

  useEffect(() => {
    setEditedBlog(blog)
  }, [blog])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedBlog(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(editedBlog)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Blog Post"
      className="max-w-2xl mx-auto mt-20 bg-white rounded-lg shadow-xl overflow-y-auto w-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="p-8 w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#022F40]">
            {blog.id ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#38AECC] transition-colors duration-300 focus:outline-none focus:text-[#38AECC]"
            aria-label="Close modal"
          >
            <MdClose size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedBlog.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#38AECC] focus:ring focus:ring-[#38AECC] focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={editedBlog.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#38AECC] focus:ring focus:ring-[#38AECC] focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="fullContent" className="block text-sm font-medium text-gray-700">
              Full Content
            </label>
            <textarea
              id="fullContent"
              name="fullContent"
              value={editedBlog.fullContent}
              onChange={handleChange}
              required
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#38AECC] focus:ring focus:ring-[#38AECC] focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={editedBlog.image}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#38AECC] focus:ring focus:ring-[#38AECC] focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#38AECC] text-white px-4 py-2 rounded-md hover:bg-[#2D8CAA] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#38AECC] focus:ring-opacity-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default EditBlogModal