import { Section, SectionHeader } from "@/components/shared/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { packages } from "@/data/content";

export function Packages() {
  return (
    <Section id="packages" background="dark">
      <SectionHeader
        title="🚀 החבילות המיוחדות שלנו! 💰"
        subtitle="הזדמנות פז להצטרף למועדון האקסקלוסיבי של אלה שיגידו 'הייתי צריך לקרוא את הדפוס הקטן'!"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {packages.map((pkg) => {
          return (
            <Card
              key={pkg.id}
              className="relative overflow-hidden bg-crypto-dark-lighter border-crypto-gold/20 hover:border-crypto-gold/50 hover:shadow-xl hover:shadow-crypto-gold/10 transition-all duration-300 group"
            >
              <CardHeader className="space-y-4">
                {/* Badge */}
                {pkg.badge && (
                  <Badge
                    variant="outline"
                    className="bg-crypto-gold/20 text-crypto-gold border-crypto-gold/30 w-fit animate-pulse text-sm font-bold"
                  >
                    {pkg.badge}
                  </Badge>
                )}

                {/* Package Name */}
                <CardTitle className="text-2xl text-white group-hover:text-crypto-gold transition-colors">
                  {pkg.name}
                </CardTitle>

                {/* Tagline */}
                <p className="text-sm text-gray-400 italic">{pkg.tagline}</p>

                {/* Pricing */}
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-crypto-gold">
                    {pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>

                {/* Discount calculation - satirical */}
                {pkg.originalPrice && (
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-400 border-green-500/30 w-fit"
                  >
                    🎉 חסוך{" "}
                    {Math.round(
                      ((parseInt(pkg.originalPrice.replace(/\D/g, "")) -
                        parseInt(pkg.price.replace(/\D/g, ""))) /
                        parseInt(pkg.originalPrice.replace(/\D/g, ""))) *
                        100
                    )}
                    %! (בדיוק כמו שחסכת כלום)
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features List */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-crypto-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-crypto-gold text-xs">💀</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Over the top */}
                <Button
                  variant="gold"
                  className="w-full text-lg font-bold group-hover:scale-105 transition-transform"
                >
                  קנה עכשיו!
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
