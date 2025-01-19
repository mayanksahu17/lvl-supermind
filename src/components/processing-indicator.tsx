import { Loader2 } from 'lucide-react'
import { motion } from "framer-motion"

export function ProcessingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2 text-[#38AECC]"
    >
      <Loader2 className="h-4 w-4 animate-spin" />
      <span>Processing video...</span>
    </motion.div>
  )
}

