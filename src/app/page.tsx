import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-6 text-blue-300">Multilingual Blog Dashboard</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Create, translate, and manage your blog content in 10 Indian languages with ease.
      </p>
      <Link href="/dashboard">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
          Get Started
        </Button>
      </Link>
    </div>
  )
}

