import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface MessageProps {
  content: string
  isSystem?: boolean
  isError?: boolean
}

export function Message({ content, isSystem, isError }: MessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "mb-4 max-w-[80%] rounded-2xl px-4 py-2 text-sm",
        isSystem
          ? "ml-auto bg-[#022F40] text-white"
          : "mr-auto bg-[#38AECC] text-white",
        isError && "bg-red-500"
      )}
    >
      {content}
    </motion.div>
  )
}

