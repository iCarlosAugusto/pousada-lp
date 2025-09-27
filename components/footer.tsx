"use client"

import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"
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
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Branding */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Life to Viagens
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg max-w-lg">
                {t.footer.description}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Siga nossas aventuras</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group bg-slate-800 p-3 rounded-full border border-slate-700 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center text-slate-300 hover:text-emerald-400 transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">{t.footer.contactInfo}</h4>
            <div className="space-y-4">
              <div className="group flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Alto Paraíso, Goiás</p>
                  <p className="text-slate-400 text-sm">Brazil</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+5562994024421" className="text-slate-300 hover:text-white transition-colors">
                  +55 62 9940-2421
                </a>
              </div>
              
              <div className="group flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@adventureguides.com" className="text-slate-300 hover:text-white transition-colors">
                  info@adventureguides.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm flex items-center gap-1">
              © 2024 Life to Viagens. Todos os direitos reservados.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-red-400 fill-current" /> por Carlos Augusto
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
