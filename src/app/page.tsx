// import Link from 'next/link'
// import { Button } from "@/components/ui/button"

// export default function LandingPage() {
//   return (
//     // <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
//     //   <h1 className="text-6xl font-bold mb-6 text-blue-300">Multilingual Blog Dashboard</h1>
//     //   <p className="text-xl mb-8 text-center max-w-2xl">
//     //     Create, translate, and manage your blog content in 10 Indian languages with ease.
//     //   </p>
//     //   <Link href="/dashboard">
//     //     <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
//     //       Get Started
//     //     </Button>
//     //   </Link>
//     // </div>
    'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Upload, MessageSquare, Sparkles } from 'lucide-react'
import Link from "next/link"
import Navbar from "@/components/Navbar/Navbar"
import AnimatedBackground from "@/components/AnimateBg/AnimateBg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <AnimatedBackground />
      
      <main className="pt-16 flex flex-col items-center justify-center min-h-screen relative">
        {/* Animated Hero Element */}
        <div className="relative w-48 h-48 mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#022F40] to-[#38AECC] rounded-full animate-pulse" />
          <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-[#38AECC] animate-bounce" />
          </div>
        </div>

        {/* Buttons Container */}
        <div className="space-y-4 w-full max-w-md px-4">
          {/* Upload Dropdown Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="w-full bg-gradient-to-r from-[#022F40] to-[#38AECC] hover:opacity-90 transition-opacity text-white font-semibold py-6 text-lg group"
              >
                <Upload className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Upload
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <Link href="/dashboard/videos" className="flex items-center">
                  Upload Video
                </Link>
              </DropdownMenuItem>
             
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Input Text Button */}
          <Button
            className="w-full bg-gradient-to-r from-[#022F40] to-[#38AECC] hover:opacity-90 transition-opacity text-white font-semibold py-6 text-lg group"
            asChild
          >
            <Link href="/dashboard/create">
              <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Input Text
            </Link>
          </Button>

         
        </div>
      </main>
    </div>
  )
}




