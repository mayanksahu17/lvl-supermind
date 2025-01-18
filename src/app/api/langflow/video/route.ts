import { NextResponse } from "next/server";
import LangflowClient from "@/app/services/langflowClient";

export async function POST(req: Request) {
  try {
    const { videoUrl } = await req.json();

      const langflowId = process.env.langflowId as string; 
      const flowId = process.env.flowId as string;
      const applicationToken = process.env.applicationToken as string;  
      const langflowClient = new LangflowClient(
        "https://api.langflow.astra.datastax.com",
        applicationToken
      );

    const tweaks = {
      "AssemblyAITranscriptionJobCreator-yAW0H": { video_url: videoUrl },
      "AssemblyAITranscriptionJobPoller-iyXXd": {},
      "ParseData-eBUr2": {},
    };

    const response = await langflowClient.initiateSession(
      flowId,
      langflowId,
      videoUrl,
      "video",
      "text",
      false,
      tweaks
    );

    const transcription = response.outputs[0]?.outputs[0]?.outputs?.message;
    return NextResponse.json({ transcription: transcription || "No transcription found" });
  } catch (error: any) {
    console.error("Error in video API:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}