"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Language = 
  | "English" | "Tamil" | "Kannada" | "Telugu" | "Hindi" 
  | "Assamese" | "Bengali" | "Bodo" | "Dogri" | "Gujarati" 
  | "Kashmiri" | "Konkani" | "Maithili" | "Malayalam" | "Manipuri" 
  | "Marathi" | "Nepali" | "Odia" | "Punjabi" | "Sanskrit" 
  | "Santali" | "Sindhi" | "Urdu"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("English")

  useEffect(() => {
    const stored = localStorage.getItem("preferredLanguage") as Language | null
    if (stored) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("preferredLanguage", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
