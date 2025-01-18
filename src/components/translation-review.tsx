import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  "Hindi",
  "Marathi",
  "Gujarati",
  "Tamil",
  "Kannada",
  "Telugu",
  "Bengali",
  "Malayalam",
  "Punjabi",
  "Odia",
]

export function TranslationReview({ translations = {} } : any) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Translation Review</CardTitle>
      </CardHeader>
      <CardContent>
       
        <Select
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
          // className="mb-4"
        >
        
          <SelectTrigger>
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Textarea
          value={translations[selectedLanguage] || ""}
          rows={10}
          className="mb-4"
          placeholder="Translation will appear here"
        />
        <div className="flex justify-between items-center">
          <div>Accuracy: {translations[`${selectedLanguage}Accuracy`] || "N/A"}%</div>
          <div className="space-x-2">
            <Button variant="outline">Edit</Button>
            <Button>Approve</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

