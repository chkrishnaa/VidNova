import { generateScript } from "@/config/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `
Write two different scripts for a 30 seconds video on Topic: {topic}
Do not add scene descriptions.
Do not add anything in brackets.
Return ONLY valid JSON in this format:

{
  "scripts": [
    { "content": "" },
    { "content": "" }
  ]
}
`;

export async function POST(req: Request) {
  const { topic } = await req.json();

  const prompt = SCRIPT_PROMPT.replace("{topic}", topic);

  const text = await generateScript(prompt);

  return NextResponse.json(JSON.parse(text));
}


