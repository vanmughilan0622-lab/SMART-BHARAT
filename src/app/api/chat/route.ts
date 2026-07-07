import { huggingface } from "@ai-sdk/huggingface"
import { streamText } from "ai"
import { searchKnowledgeBase } from "@/lib/knowledge-base"

export const maxDuration = 30

if (!process.env.HUGGINGFACE_API_KEY) {
  process.env.HUGGINGFACE_API_KEY = "hf_your_token_here"
}

export async function POST(req: Request) {
  const { messages, language = "English" } = await req.json()
  console.log("RECEIVED LANGUAGE:", language)

  const coreMessages = (messages || []).map((m: any) => {
    let content = m.content || "";
    if (m.parts) {
      content = m.parts
        .filter((part: any) => part.type === "text")
        .map((part: any) => part.text)
        .join("");
    }
    return {
      role: m.role,
      content,
    };
  });

  // Extract the latest user message for RAG retrieval
  const lastUserMessage = coreMessages
    .filter((m: { role: string }) => m.role === "user")
    .pop()

  // RAG: Search the knowledge base
  const relevantRecords = lastUserMessage
    ? searchKnowledgeBase(lastUserMessage.content)
    : []

  // Build context from retrieved records
  let ragContext = ""
  if (relevantRecords.length > 0) {
    ragContext = "\n\n---\nRELEVANT VERIFIED RECORDS (use ONLY these to answer civic questions):\n\n"
    for (const record of relevantRecords) {
      ragContext += `**${record.name}**\n`
      ragContext += `Description: ${record.description}\n`
      if ("benefits" in record) {
        ragContext += `Benefits: ${record.benefits}\n`
        ragContext += `Eligibility: ${record.eligibilityRules}\n`
      }
      if ("documentsRequired" in record) {
        ragContext += `Documents Required: ${record.documentsRequired}\n`
        ragContext += `Fees: ${record.fees}\n`
        ragContext += `Timeline: ${record.timeline}\n`
        ragContext += `Eligibility: ${record.eligibility}\n`
      }
      ragContext += `Source: ${record.sourceUrl}\n`
      ragContext += `Last Verified: ${record.lastVerifiedAt}\n\n`
    }
  }

  const systemPrompt = `You are Valya AI, a civic assistant for Indian citizens. You help people understand government services, schemes, and civic processes.

CRITICAL RULES:
1. NEVER invent or hallucinate civic facts such as eligibility criteria, fees, deadlines, or document requirements.
2. ONLY use information from the RELEVANT VERIFIED RECORDS provided below to answer questions about government schemes and services.
3. If no relevant records are provided or the question is outside your verified data, say: "I don't have verified information on this topic. Please check the official government portal."
4. ALWAYS cite the source URL for any civic fact you mention.
5. ALWAYS end civic-fact answers with: "⚠️ Verify on the official portal before acting."
6. You may provide general guidance on civic processes (how to apply, what to expect) but always tie it back to verified data.
7. ABSOLUTE LANGUAGE REQUIREMENT: You MUST translate and write your ENTIRE response in ${language}. Do not use English unless ${language} is English. Even if the user asks in English, your reply MUST be in ${language}!
8. Be concise, helpful, and use clear formatting (bullet points, bold for key info).
9. For greetings or general conversation, be warm and helpful without needing citations.
${ragContext}`

  try {
    const result = streamText({
      model: huggingface("meta-llama/Meta-Llama-3-8B-Instruct"),
      system: systemPrompt,
      messages: coreMessages,
    })

    return result.toTextStreamResponse()
  } catch (error: any) {
    console.error("AI SDK Error:", error)
    return new Response(JSON.stringify({ error: error.message || error.toString(), stack: error.stack }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
