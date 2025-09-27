"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function PhotoGallery() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const categories = [
    { key: "all", label: t.gallery.categories.all }, 
    { key: "cachoeiras", label: t.gallery.categories.cachoeiras },
    { key: "wildlife", label: t.gallery.categories.wildlife }, 
    { key: "adventure", label: t.gallery.categories.adventure }
  ]

  const photos = [
    {
      id: 1,
      src: "/cachoeiras/couros.png",
      caption: t.gallery.photos["1"].caption,
      category: "cachoeiras",
      categoryLabel: t.gallery.categories.cachoeiras,
      location: t.gallery.photos["1"].location,
    },
    {
      id: 2,
      src: "/cachoeiras/santa_barbara.png",
      caption: t.gallery.photos["2"].caption,
      category: "cachoeiras",
      categoryLabel: t.gallery.categories.cachoeiras,
      location: t.gallery.photos["2"].location,
    },
    {
      id: 3,
      src: "/cachoeiras/vale_da_lua.png",
      caption: t.gallery.photos["3"].caption,
      category: "cachoeiras",
      categoryLabel: t.gallery.categories.cachoeiras,
      location: t.gallery.photos["3"].location,
    },
    {
      id: 7,
      src: "/cachoeiras/cachoeira_2.png",
      caption: t.gallery.photos["7"].caption,
      category: "cachoeiras",
      categoryLabel: t.gallery.categories.cachoeiras,
      location: t.gallery.photos["7"].location,
    },
    {
      id: 9,
      src: "/passeio_estelar.png",
      caption: t.gallery.photos["9"].caption,
      category: "adventure",
      categoryLabel: t.gallery.categories.adventure,
      location: t.gallery.photos["9"].location,
    },
    {
      id: 10,
      src: "/trilha_couros.png",
      caption: t.gallery.photos["10"].caption,
      category: "wildlife",
      categoryLabel: t.gallery.categories.wildlife,
      location: t.gallery.photos["10"].location,
    },
    {
      id: 11,
      src: "/indio.png",
      caption: t.gallery.photos["11"].caption,
      category: "wildlife",
      categoryLabel: t.gallery.categories.wildlife,
      location: t.gallery.photos["11"].location,
    },
    {
      id: 12,
      src: "/por_do_sol.png",
      caption: t.gallery.photos["12"].caption,
      category: "adventure",
      categoryLabel: t.gallery.categories.adventure,
      location: t.gallery.photos["12"].location,
    },
  ]

  const filteredPhotos =
    selectedCategory === "all" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t.gallery.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <Card
              key={photo.id}
              className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-semibold text-sm mb-1">{photo.caption}</h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                      {photo.location}
                    </Badge>
                    <Badge variant="outline" className="border-white/30 text-white text-xs">
                      {photo.categoryLabel}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
