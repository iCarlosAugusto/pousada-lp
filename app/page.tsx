import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutGuides } from "@/components/about-guides"
import { PhotoGallery } from "@/components/photo-gallery"
import { TravelPackages } from "@/components/travel-packages"
import { FAQ } from "@/components/faq"
import { LocationContact } from "@/components/location-contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutGuides />
      <PhotoGallery />
      <TravelPackages />
      <FAQ />
      <LocationContact />
      <Footer />
    </main>
  )
}
