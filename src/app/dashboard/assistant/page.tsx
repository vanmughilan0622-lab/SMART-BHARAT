import { ChatInterface } from "@/components/chat/ChatInterface"

export default function AssistantPage() {
  return (
    <div className="relative w-full h-full -mx-6 -my-6 px-6 py-6" style={{ height: "calc(100vh - 85px)" }}>
      <ChatInterface />
    </div>
  )
}
