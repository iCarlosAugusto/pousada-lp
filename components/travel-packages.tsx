"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TravelPackages() {
  const { t, language } = useLanguage()

  // Locale mapping for date formatting
  const localeMap = {
    'EN': 'en-US',
    'PT': 'pt-BR',
    'ES': 'es-ES'
  }

  const packages = [
    {
      id: 1,
      title: t.packages.chapadaAdventure.title,
      subtitle: t.packages.chapadaAdventure.subtitle,
      image: "/chapada_2025.png",
      duration: "7 Days",
      groupSize: "4-8 People",
      price: "R$1,299",
      rating: 5,
      features: t.packages.chapadaAdventure.features,
      notIncluded: t.packages.chapadaAdventure.notIncluded,
      description: t.packages.chapadaAdventure.description,
      dates: [
        {
          month: t.months.january,
          days: [
            {
              start: "2025-01-08",
              end: "2025-01-12"
            }
          ]
        },
        {
          month: t.months.february,
          days: [
            {
              start: "2025-02-14",
              end: "2025-02-18"
            }
          ]
        },
        {
          month: t.months.may,
          days: [
            {
              start: "2025-05-26",
              end: "2025-05-31"
            }
          ]
        },
        {
          month: t.months.june,
          days: [
            {
              start: "2025-06-23",
              end: "2025-06-28"
            }
          ]
        },
        {
          month: t.months.july,
          days: [
            {
              start: "2025-07-07",
              end: "2025-07-12"
            },
            {
              start: "2025-07-19",
              end: "2025-07-24"
            },

          ]
        },
        {
          month: t.months.august,
          days: [
            {
              start: "2025-08-13",
              end: "2025-08-17"
            },
            {
              start: "2025-08-26",
              end: "2025-08-30"
            }
          ]
        },
        {
          month: t.months.september,
          days: [
            {
              start: "2025-09-15",
              end: "2025-09-20"
            }
          ]
        },
        {
          month: t.months.october,
          days: [
            {
              start: "2025-10-01",
              end: "2025-10-04"
            },
            {
              start: "2025-10-08",
              end: "2025-10-12"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: t.packages.chileanPatagonia.title,
      subtitle: t.packages.chileanPatagonia.subtitle,
      image: "/chapada_2026.png",
      duration: "10 Days",
      groupSize: "6-12 People",
      price: "R$2,499",
      rating: 5,
      features: t.packages.chileanPatagonia.features,
      notIncluded: t.packages.chileanPatagonia.notIncluded,
      description: t.packages.chileanPatagonia.description,
      dates: [
        {
          month: t.months.january,
          days: [
            {
              start: "2026-01-08",
              end: "2026-01-12"
            }
          ]
        },
        {
          month: t.months.february,
          days: [
            {
              start: "2026-02-14",
              end: "2026-02-18"
            }
          ]
        },
        {
          month: t.months.may,
          days: [
            {
              start: "2026-03-26",
              end: "2026-03-28"
            }
          ]
        },
        {
          month: t.months.june,
          days: [
            {
              start: "2026-06-23",
              end: "2026-06-28"
            }
          ]
        }
      ]
    }
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

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group w-full max-w-sm">
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

              <CardContent className="flex flex-col h-full justify-between">
                <div className="space-y-4">
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

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">{t.packages.notIncludedIn}</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {pkg.notIncluded?.map((feature, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Available Dates */}
                  {pkg.dates && pkg.dates.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">{t.packages.availableDates}</h4>
                       <div className="grid grid-cols-3 gap-2">
                         {pkg.dates.flatMap((monthData) =>
                           monthData.days.map((dateRange, dateIndex) => {
                             const endDate = new Date(dateRange.end + 'T23:59:59')
                             const today = new Date()      
                             const brasiliaToday = new Date(today.toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}))
                             const brasiliaEndDate = new Date(endDate.toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}))
                             
                             const isPastDate = brasiliaEndDate < brasiliaToday
                             
                             return (
                               <div
                                 key={`${monthData.month}-${dateIndex}`}
                                 className={`rounded-lg p-2 text-center border ${
                                   isPastDate 
                                     ? 'bg-gray-50 border-gray-200' 
                                     : 'bg-green-50 border-green-200'
                                 }`}
                               >
                                 <div className={`text-xs font-medium mb-1 ${
                                   isPastDate 
                                     ? 'text-gray-500 line-through' 
                                     : 'text-green-700'
                                 }`}>
                                   {monthData.month}
                                 </div>
                                 <div className={`text-xs leading-tight ${
                                   isPastDate 
                                     ? 'text-gray-400 line-through' 
                                     : 'text-green-600'
                                 }`}>
                                   {new Date(dateRange.start).toLocaleDateString(localeMap[language], {
                                     day: '2-digit',
                                     month: '2-digit'
                                   })} - {new Date(dateRange.end).toLocaleDateString(localeMap[language], {
                                     day: '2-digit',
                                     month: '2-digit'
                                   })}
                                 </div>
                               </div>
                             )
                           })
                         )}
                       </div>
                    </div>
                  )}
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
