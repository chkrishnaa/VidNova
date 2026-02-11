import { GoogleGenAI, ThinkingLevel } from "@google/genai";

export async function generateScript(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
  });

  const response = await ai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    config: {
      thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
    },
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  let fullText = "";
  for await (const chunk of response) {
    if (chunk.text) fullText += chunk.text;
  }

  return fullText;
}
