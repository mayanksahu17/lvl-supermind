import { Metadata } from "next"
import DashboardLayout from "@/components/dashboardlayout"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blog Dashboard",
  description: "Manage your multilingual blog content",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto py-10 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-300">Welcome to Your Dashboard</h1>
          <Link href="/dashboard/create">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </Link>
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

