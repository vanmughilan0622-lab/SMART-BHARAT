"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useState, useRef, useEffect, useMemo } from "react"
import { Send, Bot, User, Loader2, Trash2, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { t, TranslationKeys } from "@/lib/translations"

const suggestedPromptKeys: TranslationKeys[] = [
  "prompt_1",
  "prompt_2",
  "prompt_3",
  "prompt_4",
  "prompt_5",
  "prompt_6",
]

export function ChatInterface() {
  const { language } = useLanguage()
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat", body: { language } }),
    [language]
  )

  const { messages, sendMessage, status, setMessages } = useChat({ transport })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim() || isLoading) return
    sendMessage({ text: inputValue.trim() })
    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const getMessageText = (message: typeof messages[number]) => {
    if (message.parts && message.parts.length > 0) {
      const text = message.parts
        .filter((part): part is { type: "text"; text: string } => part.type === "text")
        .map((part) => part.text)
        .join("")
      if (text) return text;
    }
    return (message as any).content || ""
  }

  return (
    <div className="absolute inset-0 flex flex-col px-6 pt-6 pb-2">
      {/* Decorative Star/Sparkle at bottom right */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-20">
        <Sparkles className="h-48 w-48 text-white" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex gap-4 items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-white/[0.04] rounded-2xl flex items-center justify-center border border-white/[0.08] shadow-sm backdrop-blur-md">
            <Bot className="h-7 w-7 text-orange-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground font-serif">{t(language, "AI Assistant")}</h1>
            <p className="text-sm font-medium text-muted-foreground mt-0.5">
              {t(language, "ask_subtitle")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {messages.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMessages([])}
              className="text-muted-foreground hover:text-red-400 border-white/[0.08] bg-white/[0.04] backdrop-blur-md h-[42px] px-4 rounded-xl"
            >
              <Trash2 className="h-4 w-4 mr-1" /> {t(language, "delete")}
            </Button>
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto py-6 space-y-6 scrollbar-hide z-10">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full max-h-full space-y-6">
            <div className="relative">
              <Sparkles className="h-12 w-12 text-orange-500 opacity-90 drop-shadow-[0_0_15px_rgba(255,87,34,0.4)]" />
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-xl font-extrabold text-foreground font-serif tracking-wide">
                {t(language, "hello")}
              </h2>
              <p className="text-xs font-medium text-muted-foreground max-w-lg mx-auto leading-relaxed">
                {t(language, "ask_anything")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl w-full px-4 overflow-y-auto scrollbar-hide pb-2">
              {suggestedPromptKeys.map((promptKey) => (
                <button
                  key={promptKey}
                  onClick={() => sendMessage({ text: t(language, promptKey) })}
                  className="text-left p-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.08] hover:border-orange-500/30 transition-all duration-300 text-xs font-semibold text-muted-foreground hover:text-foreground shadow-sm backdrop-blur-sm group"
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">{t(language, promptKey)}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500/10 flex items-center justify-center mt-1 border border-orange-500/20">
                  <Bot className="h-5 w-5 text-orange-500" />
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-5 py-4 shadow-sm backdrop-blur-sm ${
                  message.role === "user"
                    ? "bg-orange-500 text-white"
                    : "bg-white/[0.04] border border-white/[0.06] text-foreground"
                }`}
              >
                {message.role === "assistant" ? (
                  <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-p:font-medium prose-li:font-medium prose-strong:text-orange-500 prose-a:text-orange-500 prose-a:underline">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {getMessageText(message)}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-base font-semibold leading-relaxed">{getMessageText(message)}</p>
                )}
              </div>
              {message.role === "user" && (
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center mt-1 shadow-sm">
                  <User className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
          ))
        )}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex gap-4 justify-start">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <Bot className="h-5 w-5 text-orange-500" />
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl px-5 py-4 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin text-orange-500" />
                {t(language, "preparing")}
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="pt-2 pb-0 z-10 bg-background/50 backdrop-blur-md -mx-6 px-6 sm:mx-0 sm:px-0 sm:bg-transparent sm:backdrop-blur-none">
        <div className="relative max-w-4xl mx-auto flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t(language, "write_question")}
            className="w-full rounded-full border border-white/[0.08] bg-white/[0.04] pl-6 pr-16 py-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/40 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20"
          />
          <Button
            type="button"
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square p-0 rounded-full bg-orange-500 hover:bg-orange-500 text-white transition-all duration-300 disabled:opacity-40 shadow-md flex items-center justify-center"
          >
            <Send className="h-4 w-4 -ml-0.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
