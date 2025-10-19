import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "dark";
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-crypto-dark-light text-white",
    gray: "bg-crypto-dark-lighter text-white",
    dark: "bg-crypto-dark text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", bgClasses[background], className)}
    >
      <div
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
