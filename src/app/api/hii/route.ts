import { NextRequest, NextResponse } from "next/server";

// Constants for status codes
const UNAUTHORIZED = 401;
const SUCCESS = 200;
const SERVER_ERROR = 500;

export async function POST(req: NextRequest) {
  try {
   
    return NextResponse.json({ success: true, message: "Team created successfully" }, { status: SUCCESS });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: SERVER_ERROR });
  }
}