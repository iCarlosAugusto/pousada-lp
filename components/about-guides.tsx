"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutGuides() {
  const { t } = useLanguage()
  
  const guides = [
    {
      name: "Thayra",
      image: "/thais.png",
      bio: t.aboutGuides.thayra.bio,
      specialties: t.aboutGuides.thayra.specialties,
      certifications: t.aboutGuides.thayra.certifications,
    },
    {
      name: "Leandro",
      image: "/leandro.png",
      bio: t.aboutGuides.leandro.bio,
      specialties: t.aboutGuides.leandro.specialties,
      certifications: t.aboutGuides.leandro.certifications,
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.aboutGuides.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.aboutGuides.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {guides.map((guide, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={guide.image || "/placeholder.svg"}
                  alt={`${guide.name} - Professional Travel Guide`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{guide.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{guide.bio}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {t.aboutGuides.specialties}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
