import { FC } from 'react'
import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'
import { Blog } from '@/types'

interface FullBlogModalProps {
  isOpen: boolean
  onClose: () => void
  blog: Blog
}

const FullBlogModal: FC<FullBlogModalProps> = ({ isOpen, onClose, blog }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Full Blog Post"
      className="max-w-2xl mx-auto mt-20 bg-white rounded-lg shadow-xl overflow-y-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#022F40]">{blog.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#38AECC] transition-colors duration-300 focus:outline-none focus:text-[#38AECC]"
            aria-label="Close modal"
          >
            <MdClose size={24} />
          </button>
        </div>
        {blog.image && (
          <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        )}
        <p className="text-gray-700 leading-relaxed">{blog.fullContent}</p>
      </div>
    </Modal>
  )
}

export default FullBlogModal