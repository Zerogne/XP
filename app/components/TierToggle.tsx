"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe } from "lucide-react"
import { useState, useEffect } from "react"

export default function TierToggle() {
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-4 p-2 bg-card/80 backdrop-blur-md rounded-2xl border border-border/40 shadow-lg">
      {/* Language Toggle */}
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-muted-foreground" />
        <button
          onClick={() => setLanguage(language === 'mn' ? 'en' : 'mn')}
          className="px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-accent/50"
        >
          {language === 'mn' ? 'Монгол' : 'English'}
        </button>
      </div>

      {/* Theme Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg transition-colors duration-200 hover:bg-accent/50"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Moon className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  )
}
