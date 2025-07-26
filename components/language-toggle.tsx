"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  language: "en" | "hi"
  setLanguage: (lang: "en" | "hi") => void
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <Button variant={language === "en" ? "default" : "ghost"} size="sm" onClick={() => setLanguage("en")}>
        EN
      </Button>
      <Button variant={language === "hi" ? "default" : "ghost"} size="sm" onClick={() => setLanguage("hi")}>
        हिं
      </Button>
    </div>
  )
}
