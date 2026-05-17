export type ServiceCategory = "strutturati" | "trading";

export type Service = {
  slug: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
  badge?: string;
  cta: { label: string; href: string };
  stats?: { label: string; value: string }[];
  /** Sfondo card servizio in /public/services/{slug}.png */
  coverImage?: string;
  /** Link pubblico a performance verificate (es. MyFxBook). */
  myfxbookUrl?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  avatar?: string;
  quote: string;
  rating: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export type ProblemPoint = {
  title: string;
  description: string;
  icon: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  keywords: string[];
  legal: {
    companyName: string;
    vat: string;
    address: string;
    email: string;
    phone: string;
  };
  social: {
    instagram?: string;
    youtube?: string;
    telegram?: string;
    x?: string;
  };
};
