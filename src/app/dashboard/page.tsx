import { Metadata } from "next"
import DashboardLayout from "@/components/dashboardlayout"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from "next/image"
import AnimatedIcons from "@/components/animatedicons/animatedicons"

export const metadata: Metadata = {
  title: "Blog Dashboard",
  description: "Manage your multilingual blog content",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto py-10 space-y-8">
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%205-8GybhDK7M2NBt8zCPBsuISRBoKrdTd.svg"
          alt=""
          width={1850}
          height={628}
          className="w-full h-auto"
          role="presentation"
        />
        
        <div className="absolute inset-0 flex items-center px-12">
          <div className="flex items-center justify-between w-full">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold max-w-2xl leading-tight">
                Break Language Barriers,{" "}
                <br />
                One Word at a{" "}
                <span className="bg-blue-100 px-2 rounded">Time.</span>
              </h1>

              <div className="flex gap-4">
                <button className="px-8 py-3 bg-white border text-black font-semibold border-black/10 rounded-full hover:bg-gray-50 transition-colors">
                  Upload
                </button>
                <button className="px-8 py-3 bg-white text-black font-semibold border border-black/10 rounded-full hover:bg-gray-50 transition-colors">
                  Drafts
                </button>
              </div>
            </div>

            <AnimatedIcons/>
          </div>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Total Posts" value="15" />
          <DashboardCard title="Languages" value="10" />
          <DashboardCard title="Avg. Translation Time" value="5 min" />
        </div>
      </div>
    </DashboardLayout>
  )
}

function DashboardCard({ title, value }: { title: string, value: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <h2 className="text-xl font-semibold mb-2 text-blue-300">{title}</h2>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  )
}

