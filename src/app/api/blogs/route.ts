import { NextRequest, NextResponse } from "next/server";
import { Blog } from "@/model/Blog";
import dbConnect from "@/lib/connectDB";

// Create a new blog
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { tital, content } = await req.json();
    const newBlog = new Blog({ tital, content });
    await newBlog.save();

    return new Response(JSON.stringify(newBlog), { status: 201 }); // Created
  } catch (error) {
    console.error("Error creating blog:", error);
    return new Response("Failed to create blog.", { status: 500 }); // Internal Server Error
  }
}

// Retrieve all blogs or a single blog by ID
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) {
        return new Response("Blog not found.", { status: 404 }); // Not Found
      }
      return new Response(JSON.stringify(blog), { status: 200 }); // OK
    }

    const blogs = await Blog.find();
    return new Response(JSON.stringify(blogs), { status: 200 }); // OK
  } catch (error) {
    console.error("Error retrieving blog(s):", error);
    return new Response("Failed to retrieve blog(s).", { status: 500 }); // Internal Server Error
  }
}

// Update a blog by ID
export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return new Response("Blog ID is required.", { status: 400 }); // Bad Request
    }

    const { tital, content } = await req.json();
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { tital, content },
      { new: true, runValidators: true }
    );  

    if (!updatedBlog) {
      return new Response("Blog not found.", { status: 404 }); // Not Found
    }
    return new Response(JSON.stringify(updatedBlog), { status: 200 }); // OK
  } catch (error) {
    console.error("Error updating blog:", error);
    return new Response("Failed to update blog.", { status: 500 }); // Internal Server Error
  }
}

// Delete a blog by ID
export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return new Response("Blog ID is required.", { status: 400 }); // Bad Request
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return new Response("Blog not found.", { status: 404 }); // Not Found
    }
    return new Response("Blog deleted successfully.", { status: 200 }); // OK
  } catch (error) {
    console.error("Error deleting blog:", error);
    return new Response("Failed to delete blog.", { status: 500 }); // Internal Server Error
  }
}
