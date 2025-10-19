export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  tagline: string;
  features: string[];
  badge?: string;
  scamLevel: "low" | "medium" | "high" | "extreme";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface TrustIndicator {
  id: string;
  name: string;
  logo?: string;
  metric?: string;
  description: string;
}

export interface Credential {
  id: string;
  title: string;
  institution: string;
  year: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socialLinks: SocialLink[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  tagline: string;
  features: string[];
  badge?: string;
  scamLevel: "low" | "medium" | "high" | "extreme";
}
