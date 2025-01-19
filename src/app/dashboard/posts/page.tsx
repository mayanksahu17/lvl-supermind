// 'use client'

// import DashboardLayout from "@/components/dashboardlayout"
// import BlogCard from "@/components/BlogPost/BlogCard"

// export default function BlogPostsPage() {
//   const sampleBlog = {
//     id: 1,
//     title: "Sample Blog Post",
//     description: "This is a description of the sample blog post.",
//     fullContent: "This is the full content of the sample blog post.",
//     image: "/placeholder.jpg",  // Updated to match the new interface
//   };

//   // Handler functions for actions
//   const handleView = () => {
//     console.log("View full blog post");
//   };

//   const handleEdit = () => {
//     console.log("Edit blog post");
//   };

//   const handleDelete = () => {
//     console.log("Delete blog post");
//   };

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto py-10 space-y-8">
//         <h1 className="text-4xl font-bold mb-8 text-blue-300">Blog Posts</h1>
    
//         <BlogCard
//           blog={sampleBlog}
//           onView={handleView}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//       </div>
//     </DashboardLayout>
//   )
// }

'use client'
import MainBlog from '@/components/MainBlog/MainBlog'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainBlog/>
    </div>
  )
}

export default page
