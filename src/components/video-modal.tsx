"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from 'lucide-react'

interface VideoModalProps {
  video: {
    id: number
    title: string
    description: string
    thumbnail: string
    videoUrl: string
  } | null
  onClose: () => void
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#022F40]/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative mx-4 aspect-video w-full max-w-4xl overflow-hidden rounded-lg bg-black"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-[#022F40] p-2 text-[#38AECC] transition-colors hover:bg-[#38AECC] hover:text-[#022F40]"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Video player */}
          <video
            src={video.videoUrl}
            poster={video.thumbnail}
            controls
            autoPlay
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

