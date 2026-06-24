export interface NavLink {
  label: string;
  target: string;
  index: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  highlight: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  index: string;
  title: string;
  tagline: string;
  description: string;
  status: 'Live' | 'In Progress' | 'Shipped';
  year: string;
  stack: string[];
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface AchievementItem {
  year: string;
  title: string;
  org: string;
  description: string;
  weight: 'platinum' | 'gold' | 'silver';
}
