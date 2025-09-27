"use client"

import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/lifetoviagens/", label: "Instagram" },
  ]

  const quickLinks = [
    { name: t.navigation.about, href: "#about" },
    { name: t.navigation.destinations, href: "#gallery" },
    { name: t.navigation.packages, href: "#packages" },
    { name: "FAQ", href: "#faq" },
    { name: t.navigation.contact, href: "#contact" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Life to Viagens</h3>
            <p className="text-background/80 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-background/60 hover:text-primary transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">{t.footer.contactInfo}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">Alto Paraíso, Goiás, Brazil</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">+55 62 9940-2421</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">info@adventureguides.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6 text-sm text-background/60">


          </div>
        </div>
      </div>
    </footer>
  )
}
