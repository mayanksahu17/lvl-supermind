// npm install assemblyai

import { AssemblyAI } from 'assemblyai'

const client = new AssemblyAI({
  apiKey: "236daa5f881c4b1da0abb9fb06ac47c3"
})

 export const getTranscript = async (audioUrl : string)  : Promise<string>=> {
    const config = {
        audio_url: audioUrl
      }
  const transcript = await client.transcripts.transcribe(config)
  console.log(transcript.text)
  return transcript.text as string
}


