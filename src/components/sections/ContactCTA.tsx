import { Check, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ctaContent, contactInfo } from "@/data/content";

export function ContactCTA() {
  return (
    <Section id="contact" background="dark">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: CTA Content */}
        <div className="space-y-6">
          <div className="inline-block">
            <div className="bg-crypto-gold/20 text-crypto-gold px-4 py-2 rounded-full text-sm font-semibold border border-crypto-gold/30">
              בואו נעבוד ביחד
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {ctaContent.headline}
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">{ctaContent.subheadline}</p>

          {/* Features list */}
          <ul className="space-y-3">
            {ctaContent.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-success-green/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-success-green" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Button
              size="xl"
              variant="gold"
              className="w-full sm:w-auto"
              aria-label="Book free consultation"
            >
              {ctaContent.ctaText}
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right: Contact Information */}
        <div className="space-y-6">
          <Card className="bg-crypto-dark-lighter backdrop-blur-sm border-crypto-gold/20 text-white hover:border-crypto-gold/40 hover:shadow-lg hover:shadow-crypto-gold/10 transition-all">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-white">צור קשר</h3>

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group hover:text-crypto-gold transition-colors"
                aria-label={`Email ${contactInfo.email}`}
              >
                <div className="w-12 h-12 rounded-lg bg-crypto-gold/10 flex items-center justify-center group-hover:bg-crypto-gold transition-colors">
                  <Mail className="w-6 h-6 text-crypto-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">אימייל</div>
                  <div className="font-medium text-white group-hover:text-crypto-gold transition-colors">{contactInfo.email}</div>
                </div>
              </a>

              {/* Phone */}
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-4 group hover:text-crypto-gold transition-colors"
                  aria-label={`התקשר ${contactInfo.phone}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-crypto-gold/10 flex items-center justify-center group-hover:bg-crypto-gold transition-colors">
                    <Phone className="w-6 h-6 text-crypto-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">טלפון</div>
                    <div className="font-medium text-white group-hover:text-crypto-gold transition-colors">{contactInfo.phone}</div>
                  </div>
                </a>
              )}

              {/* Location */}
              {contactInfo.location && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-crypto-gold/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-crypto-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">מיקום</div>
                    <div className="font-medium text-white">{contactInfo.location}</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Availability notice */}
          <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-4">
            <div className="flex items-center gap-2 text-success-green mb-2">
              <div className="w-2 h-2 bg-success-green rounded-full animate-pulse" />
              <span className="font-semibold text-sm">מקבלים לקוחות חדשים</span>
            </div>
            <p className="text-sm text-gray-300">
              זמן תגובה בדרך כלל תוך 24 שעות
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
