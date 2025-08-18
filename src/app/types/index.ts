// Global type definitions for the portfolio

export interface HeroProps {
  name: string;
  designation: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'cloud';
}

export interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter';
  url: string;
  label: string;
}