import { SearchItem }
from '../../models/doc.model';

export const BACKEND_SEARCH_DATA:
SearchItem[] = [

  {
    id: 'jdk-jre-jvm',

    title:
      'Difference Between JDK, JRE, and JVM',

    category: 'Java',

    section: 'Java Basics',

    tags: [
      'java',
      'jvm',
      'jdk',
      'jre',
    ],

    route:
      '/backend/java/java-basics',
  },

  {
    id: 'heap-vs-stack',

    title:
      'Heap Memory vs Stack Memory',

    category: 'Java',

    section: 'Java Basics',

    tags: [
      'heap',
      'stack',
      'memory',
    ],

    route:
      '/backend/java/java-basics',
  },

  {
    id: 'jwt-authentication',

    title:
      'JWT Authentication Flow',

    category: 'Spring Boot',

    section: 'Security',

    tags: [
      'jwt',
      'security',
      'spring',
    ],

    route:
      '/backend/spring-boot/spring-security',
  },

  {
    id: 'consumer-group',

    title:
      'Kafka Consumer Groups',

    category: 'Kafka',

    section: 'Consumers',

    tags: [
      'kafka',
      'consumer-group',
    ],

    route:
      '/backend/kafka/kafka-consumers',
  },

];