import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TranscriptionReview({ transcription = "" }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transcription Review</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={transcription}
          rows={10}
          className="mb-4"
          placeholder="Transcription will appear here"
        />
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Edit</Button>
          <Button>Approve</Button>
        </div>
      </CardContent>
    </Card>
  )
}

