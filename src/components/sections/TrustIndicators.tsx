import { Section } from "@/components/shared/Section";
import { trustIndicators } from "@/data/content";

export function TrustIndicators() {
  return (
    <Section background="gray" className="py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {trustIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className="text-center space-y-2 group"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-crypto-gold group-hover:scale-110 transition-transform">
              {indicator.metric}
            </div>
            <div className="font-semibold text-white">{indicator.name}</div>
            <div className="text-sm text-gray-400 hidden md:block">
              {indicator.description}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
