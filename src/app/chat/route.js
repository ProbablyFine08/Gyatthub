import { NextResponse } from "next/server";
import { askAI } from "@/lib/ai/ollama";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const reply = await askAI(message);

    return NextResponse.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate response",
      },
      {
        status: 500,
      }
    );
  }
}