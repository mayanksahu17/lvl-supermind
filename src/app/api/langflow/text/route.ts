import { NextResponse } from "next/server";
import LangflowClient from "@/app/services/langflowClient";

export async function POST(req: Request) {
  try {
    const { inputValue, stream = false } = await req.json();

    const langflowId = process.env.langflowId as string; 
    const flowId = process.env.flowId as string;
    const applicationToken = process.env.applicationToken as string;  
    const langflowClient = new LangflowClient(
      "https://api.langflow.astra.datastax.com",
      applicationToken
    );

    const tweaks = {
      "Prompt-7TNpM": {},
      "ChatInput-FDMSH": {},
      "ChatOutput-OeMKa": {},
    };

    const response = await langflowClient.initiateSession(
      flowId,
      langflowId,
      inputValue,
      "chat",
      "chat",
      stream,
      tweaks
    );

    if (!stream) {
      const flowOutputs = response.outputs[0];
      const firstComponentOutputs = flowOutputs.outputs[0];
      const output = firstComponentOutputs.outputs.message;

      return NextResponse.json({ message: output.message.text });
    }

    return NextResponse.json({ message: "Stream response is not implemented yet" });
  } catch (error: any) {
    console.error("Error in text API:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}