import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { interviewPrepration, convertKeyToDisplayName } from './interview-vault.data';

@Component({
  selector: 'app-interview-vault',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interview-vault.html',
  styleUrls: ['./interview-vault.scss'],
})
export class InterviewVault implements OnInit, AfterViewInit {
  groupedQuestions: { [key: string]: string[] } = {};
  questionKeys: string[] = [];
  sectionFilter: 'all' | 'backend' | 'frontend' = 'backend';

  allGroupedQuestions: { [key: string]: string[] } = {};
  displayNames: { [key: string]: string } = {};

  // Import data from data file
  interviewData = interviewPrepration;

ngOnInit(): void {
  const categoryDisplayNames: Record<string, string> = {
    springBoot: 'Spring Boot',
    coreJava: 'Core Java',
    jpaHibernate: 'JPA & Hibernate',
    microServices: 'Microservices',
    security: 'Security',
    restApi: 'REST API',
    kafka: 'Kafka',
    reactive: 'Reactive',
    kubernetes: 'Kubernetes',
    caching: 'Caching',
    database: 'Database',
    production: 'Production',
    systemDesign: 'System Design',

    DSA: 'DSA Coding',
    java8Streams: 'Java 8 Streams Coding',
    coreJavaCoding: 'Core Java Coding',

    angular: 'Angular Basics',
    angularAdvanced: 'Angular Advanced',
    javascript: 'JavaScript',
    react: 'React',

    machineCoding: 'Machine Coding',
    javascriptCoding: 'JavaScript Coding',
  };

  const flattenQuestions = (obj: any): void => {
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        const displayName = categoryDisplayNames[key] || key;

        this.allGroupedQuestions[displayName] = value;
        this.displayNames[displayName] = displayName;
      } else if (typeof value === 'object' && value !== null) {
        flattenQuestions(value);
      }
    });
  };

  flattenQuestions(this.interviewData);

  this.applyFilter(this.sectionFilter);
}

  activeSection = '';

  ngAfterViewInit() {
    const sections = document.querySelectorAll('.category-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => observer.observe(section));
  }

  getTotalQuestions(): number {
    return this.questionKeys.reduce((total, key) => total + this.groupedQuestions[key].length, 0);
  }

  searchText = '';

  expandedCategory: string | null = 'Spring Boot';

  toggleCategory(category: string) {
    this.expandedCategory = this.expandedCategory === category ? null : category;
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  applyFilter(section: 'all' | 'backend' | 'frontend'): void {
const backendCategories = [
  'Spring Boot',
  'Core Java',
  'JPA & Hibernate',
  'Microservices',
  'Security',
  'REST API',
  'Kafka',
  'Reactive',
  'Kubernetes',
  'Caching',
  'Database',
  'Production',
  'System Design',
  'DSA Coding',
  'Java 8 Streams Coding',
  'Core Java Coding',
];
   const frontendCategories = [
  'Angular Basics',
  'Angular Advanced',
  'JavaScript',
  'React',
  'Machine Coding',
  'JavaScript Coding',
];

    if (section === 'backend') {
      this.groupedQuestions = Object.keys(this.allGroupedQuestions)
        .filter((key) => backendCategories.includes(key))
        .reduce(
          (obj, key) => {
            obj[key] = this.allGroupedQuestions[key];
            return obj;
          },
          {} as { [key: string]: string[] },
        );
    } else if (section === 'frontend') {
      this.groupedQuestions = Object.keys(this.allGroupedQuestions)
        .filter((key) => frontendCategories.includes(key))
        .reduce(
          (obj, key) => {
            obj[key] = this.allGroupedQuestions[key];
            return obj;
          },
          {} as { [key: string]: string[] },
        );
    } else {
      this.groupedQuestions = { ...this.allGroupedQuestions };
    }

    this.questionKeys = Object.keys(this.groupedQuestions);
    this.activeSection = '';
  }

  onSectionChange(section: 'all' | 'backend' | 'frontend'): void {
    this.sectionFilter = section;
    this.applyFilter(section);
  }
}
