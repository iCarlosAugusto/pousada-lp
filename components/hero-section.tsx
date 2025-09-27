"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section id="home" className="bg-red-100 relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/leandro_thais.png"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-contain"
      />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          {t.hero.title}
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          {t.hero.ctaButton}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
