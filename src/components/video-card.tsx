"use client"

import { motion } from "framer-motion"
import { Play } from 'lucide-react'
import Image from "next/image"

interface VideoCardProps {
  video: {
    id: number
    title: string
    description: string
    thumbnail: string
    videoUrl: string
  }
  onClick: () => void
  index: number
}

export function VideoCard({ video, onClick, index }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-[#022F40]/20"
      onClick={onClick}
    >
      <Image
        src={video.thumbnail || "/placeholder.svg"}
        alt={video.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#022F40] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
      
      {/* Play button */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="rounded-full bg-[#38AECC] p-4 text-[#022F40] shadow-lg">
          <Play className="h-8 w-8" />
        </div>
      </motion.div>

      {/* Video info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-0 right-0 p-4 text-white"
      >
        <h3 className="mb-2 text-lg font-bold">{video.title}</h3>
        <p className="text-sm opacity-90">{video.description}</p>
      </motion.div>
    </motion.div>
  )
}

