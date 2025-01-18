import { Home, FileText, Video, BarChart2, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const navItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Blog Posts", icon: FileText, href: "/dashboard/posts" },
  { name: "Videos", icon: Video, href: "/dashboard/videos" },
  { name: "Analytics", icon: BarChart2, href: "/dashboard/analytics" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
]

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-blue-300">Blog Dashboard</h2>
      </div>
      <nav className="flex-1 pt-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 px-4 py-2 text-left hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

