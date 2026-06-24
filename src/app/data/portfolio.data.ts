import {
  NavLink,
  StatItem,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
  AchievementItem,
} from '../models/portfolio.model';

export const PERSON = {
  name: 'Rana Rahul Kumar',
  firstName: 'Rana',
  lastName: 'Rahul Kumar',
  initials: 'RRK',
  title: 'Senior Full Stack Engineer',
  subtitle: 'Angular × Java Spring Boot',
  location: 'Bengaluru, India',
  email: 'riorana95@gmail.com',
  phone: '+91 82109 71525',
  experienceYears: 4,
  tagline: 'Building cinematic interfaces and resilient systems.',
  heroParagraph:
    'Senior Full Stack Engineer crafting enterprise platforms in Angular (v11–21) and Java Spring Boot (Java 21). I obsess over the seam where pixel-precise UI meets resilient backend architecture.',
  links: {
    linkedin: 'https://linkedin.com/in/riorana95',
    github: 'https://github.com/riorana95',
    email: 'mailto:riorana95@gmail.com',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Index', target: 'hero', index: '01' },
  { label: 'About', target: 'about', index: '02' },
  { label: 'Work', target: 'experience', index: '03' },
  { label: 'Projects', target: 'projects', index: '04' },
  { label: 'Stack', target: 'skills', index: '05' },
  { label: 'Awards', target: 'achievements', index: '06' },
  { label: 'Contact', target: 'contact', index: '07' },
];

export const STATS: StatItem[] = [
  { value: 4, suffix: '+', label: 'Years building', detail: 'at Digit Insurance, end-to-end' },
  { value: 25, suffix: '%', label: 'Load time cut', detail: 'across 500+ agent users' },
  { value: 20, suffix: '%', label: 'API response gain', detail: 'Java 21 + virtual threads' },
  { value: 30, suffix: '%', label: 'Defect drop', detail: 'mentored 5 engineers' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Digit Insurance',
    location: 'Bengaluru, India',
    role: 'Senior Software Engineer — Full Stack',
    period: 'Apr 2024 — Present',
    highlight:
      'Leading full-stack delivery of the QC & Rule Engine Platform for Life Insurance.',
    bullets: [
      'Architected modular Angular UI with condition-based workflows consuming Spring Boot 3 (Java 21) REST APIs secured via Spring Security (JWT + RBAC).',
      'Acting Tech Lead since May 2024 — stepped up after TL resignation; led 5 UI engineers and coordinated a cross-functional team of ~17 across BA, QA and backend.',
      'Upgraded backend Java 11 → Java 21 with virtual threads; built Spring Data JPA + Hibernate layers and resolved N+1 issues — improved API response time by ~20%.',
      'Engineered 12+ Angular modules with lazy loading and OnPush change detection, cutting load time ~25% across 500+ agent users.',
    ],
    tags: ['Angular 21', 'Java 21', 'Spring Boot 3', 'Spring Security', 'NgRx', 'RxJS'],
  },
  {
    company: 'Digit Insurance',
    location: 'Bengaluru, India',
    role: 'Software Engineer — Full Stack',
    period: 'Feb 2023 — Mar 2024',
    highlight:
      'Owned the GMC Dynamic Configuration Platform — a DB-driven Angular SPA eliminating per-rule code changes.',
    bullets: [
      'Designed large-scale DB-driven Angular SPA where UI fields, tables, and validations are controlled by the database — eliminating code changes for every business rule update.',
      'Improved performance via lazy loading, NgRx, and OnPush change detection; mentored 3 junior developers.',
      'Collaborated on Java 11 Spring Boot API design and JPA/Hibernate query optimisation.',
      'Built reusable Angular component libraries adopted across multiple portals, reducing team effort by ~20%.',
    ],
    tags: ['Angular', 'Spring Boot', 'NgRx', 'JPA/Hibernate', 'Component Library'],
  },
  {
    company: 'Digit Insurance',
    location: 'Bengaluru, India',
    role: 'Graduate Trainee Engineer',
    period: 'Feb 2022 — Jan 2023',
    highlight:
      'Delivered Angular UI for the KYC & Underwriting Portal used by agents and internal UW.',
    bullets: [
      'Built reactive forms, REST API integration, and document upload workflows for Agent-facing and internal UW portals.',
      'Supported UAT and production releases end-to-end.',
      'Learned the full Digit stack — Angular + Spring Boot + Java + AWS — under production pressure.',
    ],
    tags: ['Angular', 'Spring Boot', 'Reactive Forms', 'REST'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    index: '01',
    title: 'CoreStack',
    tagline: 'Multi-Product Full-Stack Platform',
    description:
      'A modular full-stack platform hosting multiple technical products with shared authentication, reusable frontend architecture, REST APIs, and PostgreSQL persistence.',
    status: 'Live',
    year: '2026',
    stack: ['Angular 21', 'Signals', 'Spring Boot 4', 'Java 21', 'PostgreSQL', 'Flyway', 'AWS'],
    highlights: [
      'Protected Angular routes, HTTP interceptors, token storage, DTO-based REST APIs',
      'Flyway migrations and environment-based deployment configuration',
      'Google OAuth-ready auth provider schema',
    ],
  },
  {
    index: '02',
    title: 'Interview Prep',
    tagline: 'Company-wise Question Engine',
    description:
      'Company-wise question management with tag-based filtering, pagination, rich content support, and add/update workflows.',
    status: 'Live',
    year: '2026',
    stack: ['Angular 21', 'Signals', 'TypeScript', 'SCSS', 'Spring Boot 4', 'PostgreSQL'],
    highlights: [
      'Standalone components + Signals for fine-grained reactivity',
      'Tag-based filtering with paginated virtual scroll',
      'Rich content authoring with validation pipelines',
    ],
  },
  {
    index: '03',
    title: 'Splitwise Clone',
    tagline: 'Group Expense Sharing',
    description:
      'Group creation, member management, equal/exact/percentage expense splitting, balance calculation, simplified debts, and settlement tracking.',
    status: 'Live',
    year: '2026',
    stack: ['Angular 21', 'Spring Boot 4', 'Spring Security', 'JWT', 'PostgreSQL', 'Flyway'],
    highlights: [
      'Equal / exact / percentage split algorithms',
      'Simplified debts graph reduction',
      'JWT-secured settlement workflows',
    ],
  },
  {
    index: '04',
    title: 'AI-Driven Commerce',
    tagline: 'Smart Product Discovery',
    description:
      'Designing product discovery, personalized recommendations, smart search, cart flow, and order management with AI-assisted search and recommendation design.',
    status: 'In Progress',
    year: '2026',
    stack: ['Angular 21', 'Spring Boot 4', 'PostgreSQL', 'AI Search'],
    highlights: [
      'Personalized recommendation architecture',
      'Smart search relevance pipeline',
      'Cart + order management domain',
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '◉',
    skills: [
      { name: 'Angular (v11–21)', level: 96 },
      { name: 'TypeScript', level: 92 },
      { name: 'RxJS / NgRx', level: 90 },
      { name: 'Signals & Standalone', level: 94 },
      { name: 'React (Hooks/Redux)', level: 78 },
    ],
  },
  {
    category: 'Backend',
    icon: '◈',
    skills: [
      { name: 'Java 21 / Spring Boot 3', level: 93 },
      { name: 'Spring Security / JWT', level: 90 },
      { name: 'JPA / Hibernate', level: 90 },
      { name: 'Apache Kafka', level: 80 },
      { name: 'Microservices', level: 86 },
    ],
  },
  {
    category: 'Cloud & DB',
    icon: '◇',
    skills: [
      { name: 'AWS (EC2, RDS, S3)', level: 84 },
      { name: 'PostgreSQL / MySQL', level: 88 },
      { name: 'Kubernetes / Docker', level: 78 },
      { name: 'Jenkins / CI-CD', level: 82 },
    ],
  },
  {
    category: 'Craft',
    icon: '◆',
    skills: [
      { name: 'Architecture & SPA', level: 92 },
      { name: 'Lazy Loading / OnPush', level: 94 },
      { name: 'Tech Leadership', level: 88 },
      { name: 'Mentoring', level: 90 },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    year: '2025',
    title: 'Top Gun Award',
    org: 'Digit Insurance',
    description: 'Digit Insurance’s highest individual honour — awarded annually to top performers.',
    weight: 'platinum',
  },
  {
    year: '2025',
    title: 'Wall of Awesomeness',
    org: 'Digit Insurance',
    description: 'Quarterly leadership recognition for sustained impact and delivery.',
    weight: 'gold',
  },
  {
    year: '2024',
    title: 'Super Squad Award',
    org: 'Digit Insurance',
    description: 'Only 3 awarded across the entire organisation.',
    weight: 'gold',
  },
  {
    year: '2023',
    title: 'Tech Titan Award',
    org: 'Digit Insurance',
    description: 'Monthly top technical contributor recognition.',
    weight: 'silver',
  },
];

export const EDUCATION = {
  institution: 'CIT, Ranchi',
  period: '2017 — 2021',
  degree: 'B.Tech in Computer Science',
};
