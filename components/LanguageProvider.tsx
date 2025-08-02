"use client"
import React, { createContext, useState } from "react"

export const LanguageContext = createContext<{
  language: "english" | "mongolia"
  setLanguage: (lang: "english" | "mongolia") => void
}>({ language: "english", setLanguage: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"english" | "mongolia">("english")
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
} 