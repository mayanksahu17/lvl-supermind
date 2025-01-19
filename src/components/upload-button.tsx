import { Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface UploadButtonProps {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

export function UploadButton({ onUpload, disabled }: UploadButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        className="relative bg-gradient-to-r from-[#38AECC] to-[#022F40] text-white hover:from-[#022F40] hover:to-[#38AECC]"
        disabled={disabled}
      >
        <Upload className="mr-2 h-4 w-4" />
        Upload Video
        <input
          type="file"
          accept="video/*"
          onChange={onUpload}
          disabled={disabled}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
      </Button>
    </motion.div>
  )
}

