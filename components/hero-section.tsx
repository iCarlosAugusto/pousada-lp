"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://lifetoviagens.com/wp-content/uploads/2024/09/Design-sem-nome.gif"
          alt="Thays e Leandro - Guias Profissionais"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {t.hero.title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-lg">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">3+</div>
                <div className="text-sm text-gray-300">{t.hero.yearsExperience}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-300">{t.hero.adventuresCompleted}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-300">{t.hero.satisfaction}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group border-0"
              >
                {t.hero.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Location Info */}
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span className="text-sm">Alto Paraíso, Chapada dos Veadeiros</span>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:block space-y-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white fill-current" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{t.hero.experienceText}</h3>
                  <p className="text-gray-300 text-sm">{t.hero.personalizedAdventures}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{t.hero.localGuidesText}</h3>
                  <p className="text-gray-300 text-sm">{t.hero.deepKnowledge}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{t.hero.securityText}</h3>
                  <p className="text-gray-300 text-sm">{t.hero.totalSecurity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}