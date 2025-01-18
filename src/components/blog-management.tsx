import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sampleBlogs = [
  { id: 1, title: "Blog 1", languages: ["Hindi", "Tamil"], status: "Published" },
  { id: 2, title: "Blog 2", languages: ["Bengali", "Gujarati"], status: "Draft" },
  { id: 3, title: "Blog 3", languages: ["Malayalam", "Telugu"], status: "Review" },
]

export function BlogManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blog Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleBlogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.languages.join(", ")}</TableCell>
                <TableCell>{blog.status}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

