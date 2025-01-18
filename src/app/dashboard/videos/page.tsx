import DashboardLayout from "@/components/dashboardlayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const sampleVideos = [
  { id: 1, title: "Introduction to Our Product", duration: "5:30", status: "Transcribed" },
  { id: 2, title: "How to Use Feature X", duration: "10:15", status: "Processing" },
  { id: 3, title: "Customer Testimonial", duration: "3:45", status: "Uploaded" },
]

export default function VideosPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto py-10 space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-300">Videos</h1>
        <Card className="bg-gray-800 text-white border-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-300">Uploaded Videos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-blue-300">Title</TableHead>
                  <TableHead className="text-blue-300">Duration</TableHead>
                  <TableHead className="text-blue-300">Status</TableHead>
                  <TableHead className="text-blue-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleVideos.map((video) => (
                  <TableRow key={video.id}>
                    <TableCell className="text-white">{video.title}</TableCell>
                    <TableCell className="text-white">{video.duration}</TableCell>
                    <TableCell className="text-white">{video.status}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2 text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-gray-800">
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-gray-800">
                        Transcribe
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

