import { DocSection } from '../../models/doc.model';

export const BACKEND_SECTIONS: DocSection[] = [
  {
    id: 'java',

    title: 'Java',

    children: [
      {
        id: 'java-basics',
        title: 'Java Basics',
      },

      {
        id: 'java-oops',
        title: 'OOP',
      },

      {
        id: 'java-collections',
        title: 'Collections',
      },

      {
        id: 'java-java8',
        title: 'Java 8+',
      },

      {
        id: 'java-exception',
        title: 'Exception Handling',
      },

      {
        id: 'java-multithreading',
        title: 'Multithreading',
      },

      {
        id: 'java-jvm',
        title: 'JVM Internals',
      },

      {
        id: 'java-memorymanagment',
        title: 'Memory Management',
      },

      {
        id: 'java-streamapi',
        title: 'Streams API',
      },

      {
        id: 'java-functionalinterface',
        title: 'Functional Interfaces',
      },

      {
        id: 'java-comparablecomparator',
        title: 'Comparable & Comparator',
      },

      {
        id: 'java-immutableclass',
        title: 'Immutable Class',
      },

      {
        id: 'java-serialization',
        title: 'Serialization',
      },

      {
        id: 'java-reflection',
        title: 'Reflection API',
      },

      {
        id: 'java-designpatterns',
        title: 'Design Patterns',
      },

      {
        id: 'java-interviewscenarios',
        title: 'Interview Scenarios',
      },
    ],
  },

  {
    id: 'spring-boot',

    title: 'Spring Boot',

    children: [
      {
        id: 'spring-fundamentals',
        title: 'Spring Fundamentals',
      },

      {
        id: 'spring-rest-apis',
        title: 'REST APIs',
      },

      {
        id: 'spring-data-persistence',
        title: 'Data & Persistence',
      },

      {
        id: 'spring-security',
        title: 'Security',
      },

      {
        id: 'spring-async-messaging',
        title: 'Async & Messaging',
      },

      {
        id: 'spring-production-readiness',
        title: 'Production Readiness',
      },

      {
        id: 'spring-microservices-basics',
        title: 'Microservices Basics',
      },

      {
        id: 'spring-interview-scenarios',
        title: 'Interview Scenarios',
      },
    ],
  },

  {
    id: 'sql',

    title: 'SQL',

    children: [
      {
        id: 'sql-basics',
        title: 'SQL Basics',
      },

      {
        id: 'sql-joins',
        title: 'Joins',
      },

      {
        id: 'sql-transactions',
        title: 'Transactions',
      },
    ],
  },

  {
    id: 'kafka',

    title: 'Kafka',

    children: [
      {
        id: 'kafka-basics',
        title: 'Kafka Basics',
      },

      {
        id: 'kafka-consumers',
        title: 'Consumers',
      },
    ],
  },
];
