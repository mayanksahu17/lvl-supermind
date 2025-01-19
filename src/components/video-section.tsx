"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from 'lucide-react'
import { VideoCard } from "./video-card"
import { VideoModal } from "./video-modal"
import { Button } from "@/components/ui/button"

// Sample video data
const videos = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js and build your first app",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    videoUrl: "https://example.com/video1.mp4",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Deep dive into advanced React patterns and best practices",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    videoUrl: "https://example.com/video2.mp4",
  },
  {
    id: 3,
    title: "Building with TypeScript",
    description: "Master TypeScript in your React applications",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    videoUrl: "https://example.com/video3.mp4",
  },
  {
    id: 4,
    title: "State Management",
    description: "Modern state management techniques in React",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    videoUrl: "https://example.com/video4.mp4",
  },
]

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#022F40] to-[#022F40]/90 px-4 py-16">
      {/* Background gradient circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-[#38AECC]/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-[#38AECC]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-[#38AECC] drop-shadow-lg md:text-5xl">Watch Our Latest Videos</h2>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} onClick={() => setSelectedVideo(video)} index={index} />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 rounded-lg bg-[#38AECC] p-8 sm:flex-row"
        >
          <Button
            variant="outline"
            className="border-[#022F40] bg-transparent text-[#022F40] hover:bg-[#022F40] hover:text-[#38AECC]"
          >
            Explore More Videos
          </Button>
          <Button className="bg-[#022F40] text-[#38AECC] hover:bg-[#022F40]/90">Subscribe Now</Button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  )
}

