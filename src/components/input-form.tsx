"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InputForm() {
  const [inputType, setInputType] = useState("text")

  return (
    <Card className="bg-gray-800 text-white border-blue-500">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-300">Create New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label className="text-blue-300">Input Type</Label>
            <RadioGroup
              defaultValue="text"
              onValueChange={(value) => setInputType(value)}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text" id="text" />
                <Label htmlFor="text" className="text-white">Text</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="file" id="file" />
                <Label htmlFor="file" className="text-white">File Upload</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="video" id="video" />
                <Label htmlFor="video" className="text-white">Video</Label>
              </div>
            </RadioGroup>
          </div>

          {inputType === "text" && (
            <div className="space-y-2">
              <Label htmlFor="title" className="text-blue-300">Title</Label>
              <Input id="title" placeholder="Enter blog title" className="bg-gray-700 text-white border-blue-500" />
              <Label htmlFor="content" className="text-blue-300">Content</Label>
              <Textarea
                id="content"
                placeholder="Enter your blog content here"
                rows={10}
                className="bg-gray-700 text-white border-blue-500"
              />
            </div>
          )}

          {inputType === "file" && (
            <div className="space-y-2">
              <Label htmlFor="file-upload" className="text-blue-300">Upload File</Label>
              <Input id="file-upload" type="file" accept=".txt,.docx" className="bg-gray-700 text-white border-blue-500" />
            </div>
          )}

          {inputType === "video" && (
            <div className="space-y-2">
              <Label htmlFor="video-upload" className="text-blue-300">Upload Video</Label>
              <Input id="video-upload" type="file" accept="video/*" className="bg-gray-700 text-white border-blue-500" />
            </div>
          )}

          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

