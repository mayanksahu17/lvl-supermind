'use client'

import { Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#022F40] to-[#38AECC] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-white font-bold text-2xl tracking-wider hover:text-cyan-200 transition-colors"
            >
              Lingo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 ">
              <Link 
                href="/dashboard"
                className="text-white text-xl hover:bg-[#38AECC]/20 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/dashboard"
                className="text-white text-xl hover:bg-[#38AECC]/20 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link 
                href="/blogs"
                className="text-white text-xl hover:bg-[#38AECC]/20 px-3 py-2 rounded-md  font-medium transition-colors"
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#38AECC]/20 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-white hover:bg-[#38AECC]/20 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className="text-white hover:bg-[#38AECC]/20 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/blog"
                className="text-white hover:bg-[#38AECC]/20 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Blogs
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

