"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TravelPackages() {
  const { t } = useLanguage()
  
  const packages = [
    {
      id: 1,
      title: t.packages.chapadaAdventure.title,
      subtitle: t.packages.chapadaAdventure.subtitle,
      image: "/stunning-chapada-dos-veadeiros-landscape-with-wate.jpg",
      duration: "7 Days",
      groupSize: "4-8 People",
      price: "$1,299",
      rating: 4.9,
      features: t.packages.chapadaAdventure.features,
      description: t.packages.chapadaAdventure.description,
    },
    {
      id: 2,
      title: t.packages.chileanPatagonia.title,
      subtitle: t.packages.chileanPatagonia.subtitle,
      image: "/dramatic-torres-del-paine-peaks-with-glacial-lakes.jpg",
      duration: "10 Days",
      groupSize: "6-12 People",
      price: "$2,499",
      rating: 4.8,
      features: t.packages.chileanPatagonia.features,
      description: t.packages.chileanPatagonia.description,
    },
    {
      id: 3,
      title: t.packages.amazonExpedition.title,
      subtitle: t.packages.amazonExpedition.subtitle,
      image: "/lush-amazon-rainforest-with-river-and-indigenous-b.jpg",
      duration: "5 Days",
      groupSize: "4-6 People",
      price: "$899",
      rating: 4.7,
      features: t.packages.amazonExpedition.features,
      description: t.packages.amazonExpedition.description,
    },
  ]

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t.packages.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.packages.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">{pkg.subtitle}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{pkg.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">{pkg.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {pkg.groupSize}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">{t.packages.includedFeatures}</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{t.packages.perPerson}</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                    {t.packages.bookNow}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
