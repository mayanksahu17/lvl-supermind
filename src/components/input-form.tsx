"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function InputTextForm() {
  const [messages, setMessages] = useState<Message[]>([]); // Explicit type for messages
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = { role: "user", text: inputValue }; // Explicitly define message structure
    setMessages((prev) => [...prev, newMessage]);

    setInputValue("");

    try {
      const response = await fetch("/api/langflow/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      });

      const data = await response.json();
      const botMessage: Message = { role: "bot", text: data.message || "No response from API." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = { role: "bot", text: "An error occurred. Please try again." };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#e4e9eb] text-gray-700">
      <Card className="w-full max-w-2xl mt-10 shadow-xl">
        <CardHeader className="bg-[#022F40] border-b border-[#38AECC]">
          <CardTitle className="text-2xl text-[#38AECC]">Lingoo!!</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ScrollArea className="h-64 overflow-y-auto bg-[#011F2A] border border-[#38AECC] rounded-md p-4">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  } mb-4`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-[#38AECC] text-[#022F40]"
                        : "bg-[#022F40] border border-[#38AECC] text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-[#38AECC]">Start a conversation!</p>
            )}
          </ScrollArea>
          <div className="flex items-center mt-4">
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-grow bg-[#011F2A] border-[#38AECC] text-white placeholder-[#38AECC] focus:ring-[#38AECC]"
            />
            <Button
              onClick={sendMessage}
              className="ml-4 bg-[#38AECC] text-[#022F40] hover:bg-[#2C8FAF] transition-all"
            >
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
