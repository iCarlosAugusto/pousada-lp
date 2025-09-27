"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Clock, Users, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LocationContact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2333c481%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            {t.contact.locationBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Map Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{t.contact.ourLocation}</h3>
                      <p className="text-gray-600 text-sm">Villa Madeira, Alto Paraíso</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Villa+Madeira/@-14.1412969,-47.5192833,17z/data=!3m1!4b1!4m9!3m8!1s0x93457f53b7f23131:0x16ee39063abc0c30!5m2!4m1!1i2!8m2!3d-14.1412969!4d-47.516703!16s%2Fg%2F11f79wbtvm?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t.contact.openGoogleMaps}
                  </a>
                </div>
              </div>
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.065486243059!2d-47.5192833!3d-14.1412969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93457f53b7f23131%3A0x16ee39063abc0c30!2sVilla%20Madeira!5e0!3m2!1spt-BR!2sbr!4v1727378456123!5m2!1spt-BR!2sbr"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Villa Madeira Location Map"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{t.contact.phone}</h3>
                      <a 
                        href="tel:+5562994024421"
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        +55 62 9940-2421
                      </a>
                      <p className="text-gray-500 text-sm mt-1">{t.contact.phoneSchedule}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{t.contact.address}</h3>
                      <p className="text-gray-700 font-medium">{t.contact.addressText}</p>
                      <p className="text-gray-500 text-sm">{t.contact.cityState}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-200">
              <h4 className="font-bold text-gray-900 mb-3">{t.contact.usefulInfo}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  {t.contact.nearCenter}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  {t.contact.easyAccess}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
