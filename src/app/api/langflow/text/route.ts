import { NextResponse } from "next/server";
import LangflowClient from "@/app/services/langflowClient";

export async function POST(req: Request) {
  try {
    // Destructure the conversation messages array from the request body
    const { messages, stream = false } = await req.json();

    const langflowId = process.env.langflowId as string;
    const flowId = process.env.flowId as string;
    const applicationToken = process.env.applicationToken as string;
    const langflowClient = new LangflowClient(
      "https://api.langflow.astra.datastax.com",
      applicationToken
    );

    console.log("Application Token:", applicationToken);

    // Construct the full conversation as input for Langflow
    const conversationContext = messages
      .map((msg: any) => `${msg.role === "user" ? "User" : "Bot"}: ${msg.text}`)
      .join("\n");

    console.log("Conversation Context Sent to Langflow:", conversationContext);

    // Define any tweaks if needed
    const tweaks = {
      "Prompt-7TNpM": {},
      "ChatInput-FDMSH": {},
      "ChatOutput-OeMKa": {},
    };

    // Send the full conversation to Langflow
    const response = await langflowClient.initiateSession(
      flowId,
      langflowId,
      conversationContext,
      "chat",
      "chat",
      stream,
      tweaks
    );

    if (!stream) {
      // Extract the output message from Langflow's response
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