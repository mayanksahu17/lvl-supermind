import DashboardLayout from "@/components/dashboardlayout"
import { BlogManagement } from "@/components/blog-management"

export default function BlogPostsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto py-10 space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-300">Blog Posts</h1>
        <BlogManagement />
      </div>
    </DashboardLayout>
  )
}

