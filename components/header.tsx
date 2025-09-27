"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage, type Language } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "EN" as Language, name: "English" },
    { code: "PT" as Language, name: "Português" },
    { code: "ES" as Language, name: "Español" },
  ]

  const navigation = [
    { name: t.navigation.home, href: "#home" },
    { name: t.navigation.destinations, href: "#gallery" },
    { name: t.navigation.packages, href: "#packages" },
    { name: t.navigation.about, href: "#about" },
    { name: t.navigation.contact, href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Life to Viagens</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Debug buttons - remove after testing */}
            <div className="hidden sm:flex gap-1">
              <button 
                onClick={() => setLanguage('EN')} 
                className={`px-2 py-1 text-xs rounded ${language === 'EN' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('PT')} 
                className={`px-2 py-1 text-xs rounded ${language === 'PT' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              >
                PT
              </button>
              <button 
                onClick={() => setLanguage('ES')} 
                className={`px-2 py-1 text-xs rounded ${language === 'ES' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              >
                ES
              </button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Globe className="h-4 w-4" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={(e) => {
                      e.preventDefault()
                      console.log('Switching language to:', lang.code)
                      setLanguage(lang.code)
                    }}
                    className={`cursor-pointer ${language === lang.code ? "bg-primary/10 text-primary font-medium" : ""}`}
                  >
                    <span className="flex items-center gap-2">
                      {lang.name}
                      {language === lang.code && <span className="text-primary">✓</span>}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
