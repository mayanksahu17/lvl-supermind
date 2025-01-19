'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { processVideoUpload } from "../app/actions"
import { Message } from "./message"
import { UploadButton } from "./upload-button"
import { ProcessingIndicator } from "./processing-indicator"
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react'

interface ChatMessage {
  content: string
  isSystem: boolean
  isError?: boolean
}

export function VideoChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: "Hello! I can help you transcribe your videos. Upload a video to get started.",
      isSystem: true,
    },
  ])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setMessages((prev) => [
      ...prev,
      {
        content: `Uploading video: ${file.name}`,
        isSystem: false,
      },
    ])
    setIsProcessing(true)

    const formData = new FormData()
    formData.append('video', file)

    const result = await processVideoUpload(formData)

    if (result.success) {
      setMessages((prev:any) => [
        ...prev,
        {
          content: result.transcription,
          isSystem: true,
        },
      ])
    } else {
      setMessages((prev) => [
        ...prev,
        {
          content: `Error: ${result.error}`,
          isSystem: true,
          isError: true,
        },
      ])
    }

    setIsProcessing(false)
  }

  const handleReset = () => {
    setMessages([
      {
        content: "Hello! I can help you transcribe your videos. Upload a video to get started.",
        isSystem: true,
      },
    ])
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e4e9eb] to-[#92dcf7]/90 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full border border-black bg-slate-500 max-w-2xl rounded-xl backdrop-blur-lg"
      >
        {/* Header */}
        <div className="border-b border-black border-y-3 p-4 text-center border">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-[#292b2c]"
          >
            Video Transcription Bot
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-1 text-sm text-[#2e3235]"
          >
            Upload a video, and get the transcription
          </motion.p>
        </div>

        {/* Messages Container */}
        <div className="h-[400px] overflow-y-auto p-4">
          {messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              isSystem={message.isSystem}
              isError={message.isError}
            />
          ))}
          {isProcessing && <ProcessingIndicator />}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 p-4">
          <UploadButton onUpload={handleUpload} disabled={isProcessing} />
          <Button
            variant="outline"
            size="icon"
            onClick={handleReset}
            className="border-[#38AECC] text-[#38AECC] hover:bg-[#38AECC] hover:text-[#022F40]"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

