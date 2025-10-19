import { Quote, Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <Section id="testimonials" background="gray">
      <SectionHeader
        title="מהימנים על ידי מובילי התעשייה"
        subtitle="שמעו מלקוחות ששינו את אסטרטגיות ההשקעה שלהם במטבעות דיגיטליים עם הדרכה מומחית."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="relative bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <CardContent className="pt-6">
              {/* Quote icon - positioned on left for RTL */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating - with proper spacing from quote icon */}
              <div className="flex gap-1 mb-4 pr-14">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-crypto-gold text-crypto-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t">
                {/* TODO: Replace with actual client photos if provided */}
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
