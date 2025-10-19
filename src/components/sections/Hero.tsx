import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/content";
import { ImageSlider } from "@/components/shared/ImageSlider";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Hero slider images
  const heroImages = [
    {
      url: "/public/images/tomer-sapir-12.jpg",
      alt: "ניתוח שוק מטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-5.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-22.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    { url: "/public/images/tomer-sapir-1.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-37.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    {
      url: "/public/images/tomer-sapir-8.jpg",
      alt: "ניתוח שוק מטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-41.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    { url: "/public/images/tomer-sapir-19.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-33.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    { url: "/public/images/tomer-sapir-10.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    {
      url: "/public/images/tomer-sapir-3.jpg",
      alt: "השקעות במטבעות דיגיטליים",
    },
    {
      url: "/public/images/tomer-sapir-27.jpg",
      alt: "ניתוח שוק מטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-44.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-2.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    {
      url: "/public/images/tomer-sapir-16.jpg",
      alt: "ניתוח שוק מטבעות דיגיטליים",
    },
    {
      url: "/public/images/tomer-sapir-30.jpg",
      alt: "השקעות במטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-6.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    { url: "/public/images/tomer-sapir-24.jpg", alt: "גרפים וניתוח פיננסי" },
    {
      url: "/public/images/tomer-sapir-11.jpg",
      alt: "השקעות במטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-14.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    {
      url: "/public/images/tomer-sapir-35.jpg",
      alt: "ניתוח שוק מטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-28.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-42.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    { url: "/public/images/tomer-sapir-13.jpg", alt: "גרפים וניתוח פיננסי" },
    {
      url: "/public/images/tomer-sapir-20.jpg",
      alt: "ניתוח שוק מטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-40.jpg", alt: "גרפים וניתוח פיננסי" },
    {
      url: "/public/images/tomer-sapir-0.jpg",
      alt: "ניתוח שוק מטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-36.jpg", alt: "גרפים וניתוח פיננסי" },
    {
      url: "/public/images/tomer-sapir-26.jpg",
      alt: "השקעות במטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-9.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-17.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-34.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    {
      url: "/public/images/tomer-sapir-7.jpg",
      alt: "השקעות במטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-43.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-21.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-18.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    { url: "/public/images/tomer-sapir-45.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    { url: "/public/images/tomer-sapir-25.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    {
      url: "/public/images/tomer-sapir-38.jpg",
      alt: "ניתוח שוק מטבעות דיגיטליים",
    },
    {
      url: "/public/images/tomer-sapir-4.jpg",
      alt: "השקעות במטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-23.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-31.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    { url: "/public/images/tomer-sapir-32.jpg", alt: "גרפים וניתוח פיננסי" },
    { url: "/public/images/tomer-sapir-29.jpg", alt: "טכנולוגיית בלוקצ'יין" },
    {
      url: "/public/images/tomer-sapir-39.jpg",
      alt: "השקעות במטבעות דיגיטליים",
    },
    {
      url: "/public/images/tomer-sapir-15.jpg",
      alt: "השקעות במטבעות דיגיטליים",
    },
    { url: "/public/images/tomer-sapir-46.jpg", alt: "טכנולוגיית בלוקצ'יין" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-crypto-dark via-crypto-dark-light to-crypto-dark-lighter overflow-hidden pt-20">
      {/* Background decoration - Enhanced orange glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-crypto-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-crypto-gold-dark rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Slider - Now on right for RTL */}
          <div className="hidden lg:block relative lg:order-1">
            <ImageSlider images={heroImages} autoPlayInterval={2500} />

            {/* Floating stats card - RTL positioning with dark theme */}
            <div className="absolute -bottom-6 -right-6 bg-crypto-dark-lighter/95 backdrop-blur-md border border-crypto-gold/30 rounded-xl p-6 shadow-xl shadow-crypto-gold/20 max-w-xs z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-crypto-gold/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-crypto-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-crypto-gold">
                    +150%
                  </div>
                  <div className="text-sm text-gray-300">
                    צמיחה ממוצעת של תיק
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Now on left for RTL */}
          <div className="text-white space-y-8 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20">
              <TrendingUp className="w-4 h-4 text-crypto-gold" />
              <span>ייעוץ מומחה בקריפטו וכלכלה</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              {heroContent.headline}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
              {heroContent.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                variant="gold"
                onClick={() => scrollToSection("contact")}
                aria-label="קבע פגישת ייעוץ"
              >
                {heroContent.ctaPrimary}
                <ArrowRight className="w-5 h-5 rotate-180" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-crypto-dark"
                onClick={() => scrollToSection("services")}
                aria-label="למד עוד על השירותים"
              >
                {heroContent.ctaSecondary}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full" />
                <span className="text-sm text-gray-300">CFA מוסמך</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full" />
                <span className="text-sm text-gray-300">+10 שנות ניסיון</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full" />
                <span className="text-sm text-gray-300">+200 לקוחות</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
