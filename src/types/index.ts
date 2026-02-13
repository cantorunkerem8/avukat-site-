import type { ReactNode, ChangeEvent } from 'react';

// Site-wide types

export interface OfficeInfo {
  name: string;
  slogan: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  mapEmbedUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  keywords: string[];
  relatedServices: string[];
  relatedTeamMembers: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  title: string;
  specialties: string[];
  shortBio: string;
  longBio: string;
  education: string[];
  languages: string[];
  barInfo?: string;
  imagePlaceholder: {
    initials: string;
    bgColor: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  category: string;
  readingTime?: number;
  author: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  rating: number;
}

export interface CaseHighlight {
  id: string;
  title: string;
  description: string;
  category: string;
  outcome: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SEOData {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
}

export interface SiteContent {
  office: OfficeInfo;
  socialLinks: SocialLink[];
  navigation: NavItem[];
  services: Service[];
  team: TeamMember[];
  blog?: BlogPost[];
  testimonials: Testimonial[];
  caseHighlights: CaseHighlight[];
  faqs: FAQ[];
  seo: {
    default: SEOData;
    pages: Record<string, SEOData>;
  };
  vision: string;
  mission: string;
  values: string[];
}

// Component props types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export interface InputProps {
  label?: string;
  error?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface TextareaProps {
  label?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}
