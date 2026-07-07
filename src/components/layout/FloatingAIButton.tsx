"use client"

import Link from "next/link"
import { Brain } from "lucide-react"

export function FloatingAIButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link 
        href="/dashboard/assistant"
        className="group flex items-center justify-center bg-orange-500 hover:bg-orange-500 text-white rounded-full p-4 shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300"
      >
        <Brain className="h-6 w-6 animate-pulse" />
        <div className="grid grid-rows-[1fr] transition-all duration-300 overflow-hidden max-w-0 group-hover:max-w-[150px] group-hover:ml-2">
          <span className="whitespace-nowrap font-bold text-sm tracking-wide">
            Ask Valya AI
          </span>
        </div>
      </Link>
    </div>
  )
}
