import {
  TrendingUp,
  BarChart3,
  Network,
  Shield,
  Search,
  Building2,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { services } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  BarChart3,
  Network,
  Shield,
  Search,
  Building2,
};

export function Services() {
  return (
    <Section id="services" background="white">
      <SectionHeader
        title="שירותי קריפטו וכלכלה מקיפים"
        subtitle="פתרונות מותאמים אישית שנועדו לעזור לכם לנווט בעולם המורכב של פיננסים דיגיטליים בביטחון ומומחיות."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon];

          return (
            <Card
              key={service.id}
              className="group bg-crypto-dark-lighter border-crypto-dark-lighter hover:shadow-xl hover:shadow-crypto-gold/10 hover:border-crypto-gold/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-crypto-gold/10 flex items-center justify-center mb-4 group-hover:bg-crypto-gold group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-crypto-gold group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-white group-hover:text-crypto-gold transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check className="w-4 h-4 text-crypto-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
