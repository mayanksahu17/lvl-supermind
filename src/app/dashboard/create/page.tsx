import DashboardLayout from "@/components/dashboardlayout"
import InputForm from "@/components/input-form"

export default function CreateBlogPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto py-10 space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-300">Create New Blog Post</h1>
        <InputForm />
      </div>
    </DashboardLayout>
  )
}

