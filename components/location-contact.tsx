"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LocationContact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}

          <div className="space-y-6">
            <Card className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t.contact.ourLocation}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Interactive Map */}
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.065486243059!2d-47.5192833!3d-14.1412969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93457f53b7f23131%3A0x16ee39063abc0c30!2sVilla%20Madeira!5e0!3m2!1spt-BR!2sbr!4v1727378456123!5m2!1spt-BR!2sbr"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t.contact.phone}</h3>
                  <p className="text-muted-foreground">+55 62 9940-2421</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t.contact.email}</h3>
                  <p className="text-muted-foreground">info@adventureguides.com</p>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Button */}
            <Button
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t.contact.whatsappButton}
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-foreground">{t.contact.formTitle}</CardTitle>
              <p className="text-muted-foreground">
                {t.contact.formSubtitle}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.firstName}
                  </label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.lastName}
                  </label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  {t.contact.email}
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  {t.contact.phoneNumber}
                </label>
                <Input id="phone" type="tel" placeholder="+55 62 9940-2421" />
              </div>

              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-1">
                  {t.contact.interestedDestination}
                </label>
                <Input id="destination" placeholder={t.contact.destinationPlaceholder} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  {t.contact.message}
                </label>
                <Textarea id="message" placeholder={t.contact.messagePlaceholder} rows={4} />
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t.contact.sendMessage}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
