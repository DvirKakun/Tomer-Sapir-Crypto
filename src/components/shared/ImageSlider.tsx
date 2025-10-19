import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  images: {
    url: string;
    alt: string;
  }[];
  autoPlayInterval?: number;
  className?: string;
}

export function ImageSlider({
  images,
  autoPlayInterval = 5000,
  className,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered && autoPlayInterval > 0) {
      const interval = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isHovered, autoPlayInterval, goToNext]);

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
        <div className="relative h-[600px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crypto-dark/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
        aria-label="תמונה קודמת"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
        aria-label="תמונה הבאה"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[90%]">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "flex-shrink-0 transition-all duration-300 rounded-full",
                images.length > 10 ? "w-1.5 h-1.5" : "w-2 h-2", // Smaller dots for many images
                index === currentIndex
                  ? "bg-crypto-gold"
                  : "bg-white/50 hover:bg-white/80",
                index === currentIndex && images.length <= 10 && "w-8" // Stretch only if not too many
              )}
              aria-label={`עבור לתמונה ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
