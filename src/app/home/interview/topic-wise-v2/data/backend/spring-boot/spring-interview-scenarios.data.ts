import { DocSection }
from '../../../models/doc.model';

export const SPRING_INTERVIEW_SCENARIOS_SECTION:
DocSection = {

  id: 'spring-interview-scenarios',

  title: 'Spring Interview Scenarios',

  summary:
    'Real-world Spring Boot production scenarios, debugging discussions, scalability tradeoffs, architecture decisions, and senior-level interview preparation.',

  articles: [

    {
      id: 'explain-your-spring-boot-project',

      title:
        '🔥🔥 Explain Your Spring Boot Project',

      level: 'advanced',

      tags: [
        'interview',
        'architecture',
      ],

      content: `
Interviewers expect:
- project overview
- architecture
- modules
- DB usage
- security
- scalability
- challenges solved
      `,
    },

    {
      id: 'project-architecture-discussion',

      title:
        '🔥 Project Architecture Discussion',

      level: 'advanced',

      tags: [
        'architecture',
        'system-design',
      ],

      content: `
Explain:
- service structure
- communication flow
- DB design
- caching
- async processing
- deployment architecture
      `,
    },

    {
      id: 'request-flow-end-to-end',

      title:
        '🔥 Request Flow End to End',

      level: 'advanced',

      tags: [
        'spring',
        'request-flow',
      ],

      content: `
Typical flow:
- client request
- filters
- security
- controller
- service
- repository
- DB
- response serialization
      `,
    },

    {
      id: 'spring-boot-startup-flow',

      title:
        '🔥 Spring Boot Startup Flow',

      level: 'advanced',

      tags: [
        'spring-boot',
        'internals',
      ],

      content: `
Startup flow:
- application bootstrap
- component scanning
- bean creation
- auto configuration
- embedded server startup
      `,
    },

    {
      id: 'how-dispatcherservlet-works',

      title:
        '🔥 How DispatcherServlet Works',

      level: 'advanced',

      tags: [
        'spring-mvc',
        'internals',
      ],

      content: `
DispatcherServlet acts as front controller handling incoming HTTP requests.
      `,
    },

    {
      id: 'bean-creation-internal-flow',

      title:
        'Bean Creation Internal Flow',

      level: 'advanced',

      tags: [
        'spring',
        'ioc',
      ],

      content: `
Spring container:
- scans components
- resolves dependencies
- creates beans
- manages lifecycle
      `,
    },

    {
      id: 'dependency-injection-internal-working',

      title:
        '🔥 Dependency Injection Internal Working',

      level: 'advanced',

      tags: [
        'spring',
        'ioc',
      ],

      content: `
Spring resolves dependencies using IoC container during bean creation.
      `,
    },

    {
      id: 'how-transactional-works-internally',

      title:
        '🔥 How @Transactional Works Internally',

      level: 'advanced',

      tags: [
        'spring',
        'transactions',
      ],

      content: `
@Transactional uses AOP proxies for transaction management.
      `,
    },

    {
      id: 'how-spring-security-works-internally',

      title:
        '🔥 How Spring Security Works Internally',

      level: 'advanced',

      tags: [
        'spring-security',
        'internals',
      ],

      content: `
Spring Security processes requests through authentication and authorization filter chain.
      `,
    },

    {
      id: 'jwt-authentication-end-to-end',

      title:
        '🔥 JWT Authentication End to End',

      level: 'advanced',

      tags: [
        'jwt',
        'security',
      ],

      content: `
JWT flow:
- login
- credential validation
- token generation
- token validation
- authorization
      `,
    },

    {
      id: 'exception-handling-flow',

      title:
        'Exception Handling Flow',

      level: 'advanced',

      tags: [
        'spring',
        'exceptions',
      ],

      content: `
Spring routes exceptions through exception resolvers and controller advice handlers.
      `,
    },

    {
      id: 'validation-flow',

      title:
        'Validation Flow',

      level: 'advanced',

      tags: [
        'validation',
        'spring',
      ],

      content: `
Validation occurs before controller logic execution using Bean Validation framework.
      `,
    },

    {
      id: 'rest-api-request-lifecycle',

      title:
        '🔥 REST API Request Lifecycle',

      level: 'advanced',

      tags: [
        'rest-api',
        'spring',
      ],

      content: `
Lifecycle:
- request mapping
- validation
- business logic
- DB interaction
- serialization
- response
      `,
    },

    {
      id: 'jpa-internal-working',

      title:
        '🔥 JPA Internal Working',

      level: 'advanced',

      tags: [
        'jpa',
        'hibernate',
      ],

      content: `
JPA manages entity lifecycle, persistence context, and SQL generation internally.
      `,
    },

    {
      id: 'hibernate-session-flow',

      title:
        'Hibernate Session Flow',

      level: 'advanced',

      tags: [
        'hibernate',
        'orm',
      ],

      content: `
Hibernate session manages entity state and database synchronization.
      `,
    },

    {
      id: 'lazy-loading-problems',

      title:
        '🔥 Lazy Loading Problems',

      level: 'advanced',

      tags: [
        'hibernate',
        'performance',
      ],

      content: `
Lazy loading may cause:
- unexpected queries
- LazyInitializationException
- performance issues
      `,
    },

    {
      id: 'nplus1-query-problem',

      title:
        '🔥 N+1 Query Problem',

      level: 'advanced',

      tags: [
        'database',
        'performance',
      ],

      content: `
N+1 problem occurs when additional queries executed repeatedly for related entities.
      `,
    },

    {
      id: 'transaction-propagation-scenario',

      title:
        '🔥 Transaction Propagation Scenario',

      level: 'advanced',

      tags: [
        'transactions',
        'spring',
      ],

      content: `
Propagation controls transaction behavior across nested service calls.
      `,
    },

    {
      id: 'circular-dependency-scenario',

      title:
        'Circular Dependency Scenario',

      level: 'advanced',

      tags: [
        'spring',
        'ioc',
      ],

      content: `
Circular dependencies occur when beans depend on each other recursively.
      `,
    },

    {
      id: 'singleton-bean-thread-safety-scenario',

      title:
        '🔥 Singleton Bean Thread Safety Scenario',

      level: 'advanced',

      tags: [
        'spring',
        'multithreading',
      ],

      content: `
Singleton beans shared across threads causing potential concurrency issues.
      `,
    },

    {
      id: 'race-condition-scenario',

      title:
        '🔥 Race Condition Scenario',

      level: 'advanced',

      tags: [
        'concurrency',
        'multithreading',
      ],

      content: `
Concurrent threads modifying shared resources may create inconsistent state.
      `,
    },

    {
      id: 'async-processing-scenario',

      title:
        '🔥 Async Processing Scenario',

      level: 'advanced',

      tags: [
        'async',
        'performance',
      ],

      content: `
Async processing commonly used for:
- notifications
- report generation
- background processing
      `,
    },

    {
      id: 'kafka-event-flow-scenario',

      title:
        '🔥 Kafka Event Flow Scenario',

      level: 'advanced',

      tags: [
        'kafka',
        'event-driven',
      ],

      content: `
Typical flow:
- producer publishes event
- broker stores message
- consumers process asynchronously
      `,
    },

    {
      id: 'distributed-transaction-scenario',

      title:
        '🔥 Distributed Transaction Scenario',

      level: 'advanced',

      tags: [
        'microservices',
        'transactions',
      ],

      content: `
Distributed transactions difficult because multiple services manage independent databases.
      `,
    },

    {
      id: 'saga-pattern-real-scenario',

      title:
        '🔥 Saga Pattern Real Scenario',

      level: 'advanced',

      tags: [
        'microservices',
        'distributed-transactions',
      ],

      content: `
Order workflows commonly use Saga pattern for distributed transaction coordination.
      `,
    },

    {
      id: 'eventual-consistency-scenario',

      title:
        '🔥 Eventual Consistency Scenario',

      level: 'advanced',

      tags: [
        'distributed-systems',
        'consistency',
      ],

      content: `
Distributed systems may temporarily inconsistent before synchronization completes.
      `,
    },

    {
      id: 'cache-invalidation-scenario',

      title:
        '🔥 Cache Invalidation Scenario',

      level: 'advanced',

      tags: [
        'cache',
        'performance',
      ],

      content: `
Cache invalidation critical for maintaining consistency between cache and database.
      `,
    },

    {
      id: 'redis-failure-scenario',

      title:
        'Redis Failure Scenario',

      level: 'advanced',

      tags: [
        'redis',
        'production',
      ],

      content: `
Applications should handle Redis outages gracefully using fallback strategies.
      `,
    },

    {
      id: 'db-connection-pool-exhaustion',

      title:
        '🔥 DB Connection Pool Exhaustion',

      level: 'advanced',

      tags: [
        'database',
        'production',
      ],

      content: `
Connection exhaustion occurs when application consumes all available DB connections.
      `,
    },

    {
      id: 'high-traffic-scenario',

      title:
        '🔥 High Traffic Scenario',

      level: 'advanced',

      tags: [
        'scalability',
        'performance',
      ],

      content: `
Systems handling high traffic require:
- scaling
- caching
- load balancing
- optimization
      `,
    },{
  id: 'production-memory-leak-scenario',

  title:
    '🔥 Production Memory Leak Scenario',

  level: 'advanced',

  tags: [
    'jvm',
    'production',
  ],

  content: `
Memory leaks gradually increase heap usage causing GC pressure and application crashes.
  `,
},

{
  id: 'thread-pool-exhaustion-scenario',

  title:
    '🔥 Thread Pool Exhaustion Scenario',

  level: 'advanced',

  tags: [
    'threads',
    'production',
  ],

  content: `
Too many blocking tasks may consume all available threads causing request delays.
  `,
},

{
  id: 'api-timeout-scenario',

  title:
    '🔥 API Timeout Scenario',

  level: 'advanced',

  tags: [
    'performance',
    'resilience',
  ],

  content: `
Slow downstream services may cause request timeout failures and cascading latency.
  `,
},

{
  id: 'third-party-service-failure',

  title:
    '🔥 Third Party Service Failure',

  level: 'advanced',

  tags: [
    'resilience',
    'distributed-systems',
  ],

  content: `
External service failures should handled using retries, circuit breakers, and fallbacks.
  `,
},

{
  id: 'retry-storm-scenario',

  title:
    '🔥 Retry Storm Scenario',

  level: 'advanced',

  tags: [
    'resilience',
    'production',
  ],

  content: `
Aggressive retries during outages may overload already failing systems.
  `,
},

{
  id: 'circuit-breaker-real-scenario',

  title:
    '🔥 Circuit Breaker Real Scenario',

  level: 'advanced',

  tags: [
    'resilience',
    'microservices',
  ],

  content: `
Circuit breakers temporarily stop failing downstream calls protecting system stability.
  `,
},

{
  id: 'rate-limiting-scenario',

  title:
    '🔥 Rate Limiting Scenario',

  level: 'advanced',

  tags: [
    'security',
    'scalability',
  ],

  content: `
Rate limiting prevents abuse and protects APIs during sudden traffic spikes.
  `,
},

{
  id: 'api-gateway-scenario',

  title:
    '🔥 API Gateway Scenario',

  level: 'advanced',

  tags: [
    'microservices',
    'gateway',
  ],

  content: `
Gateways centralize:
- routing
- authentication
- monitoring
- throttling
  `,
},

{
  id: 'service-discovery-scenario',

  title:
    '🔥 Service Discovery Scenario',

  level: 'advanced',

  tags: [
    'microservices',
    'service-discovery',
  ],

  content: `
Dynamic service registration helps services locate each other automatically.
  `,
},

{
  id: 'microservice-communication-failure',

  title:
    '🔥 Microservice Communication Failure',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'resilience',
  ],

  content: `
Failures between services may occur because of:
- network issues
- timeouts
- service crashes
- overload
  `,
},

{
  id: 'distributed-debugging-scenario',

  title:
    '🔥 Distributed Debugging Scenario',

  level: 'advanced',

  tags: [
    'debugging',
    'distributed-systems',
  ],

  content: `
Distributed debugging requires centralized logs, metrics, and tracing systems.
  `,
},

{
  id: 'production-outage-scenario',

  title:
    '🔥 Production Outage Scenario',

  level: 'advanced',

  tags: [
    'production',
    'incident-management',
  ],

  content: `
Outages require:
- rapid detection
- mitigation
- rollback
- RCA
- recovery planning
  `,
},

{
  id: 'zero-downtime-deployment-scenario',

  title:
    '🔥 Zero Downtime Deployment Scenario',

  level: 'advanced',

  tags: [
    'deployment',
    'production',
  ],

  content: `
Production deployments should minimize user-facing downtime during releases.
  `,
},

{
  id: 'blue-green-deployment-scenario',

  title:
    'Blue Green Deployment Scenario',

  level: 'advanced',

  tags: [
    'deployment',
    'production',
  ],

  content: `
Traffic switches between old and new production environments during deployment.
  `,
},

{
  id: 'canary-deployment-scenario',

  title:
    '🔥 Canary Deployment Scenario',

  level: 'advanced',

  tags: [
    'deployment',
    'scalability',
  ],

  content: `
New releases exposed gradually to subset of users before full rollout.
  `,
},

{
  id: 'kubernetes-pod-crash-scenario',

  title:
    '🔥 Kubernetes Pod Crash Scenario',

  level: 'advanced',

  tags: [
    'kubernetes',
    'production',
  ],

  content: `
Kubernetes automatically restarts failed pods based on health checks.
  `,
},

{
  id: 'database-migration-failure-scenario',

  title:
    '🔥 Database Migration Failure Scenario',

  level: 'advanced',

  tags: [
    'database',
    'production',
  ],

  content: `
Failed migrations may create schema inconsistency and deployment rollback requirements.
  `,
},

{
  id: 'deadlock-scenario',

  title:
    '🔥 Deadlock Scenario',

  level: 'advanced',

  tags: [
    'database',
    'concurrency',
  ],

  content: `
Deadlocks occur when transactions wait indefinitely for locked resources.
  `,
},

{
  id: 'authentication-failure-scenario',

  title:
    '🔥 Authentication Failure Scenario',

  level: 'advanced',

  tags: [
    'security',
    'authentication',
  ],

  content: `
Authentication failures may caused by:
- expired tokens
- invalid credentials
- misconfigured security
  `,
},

{
  id: 'authorization-bug-scenario',

  title:
    '🔥 Authorization Bug Scenario',

  level: 'advanced',

  tags: [
    'security',
    'authorization',
  ],

  content: `
Authorization bugs may expose sensitive resources to unauthorized users.
  `,
},

{
  id: 'csrf-real-scenario',

  title:
    'CSRF Real Scenario',

  level: 'advanced',

  tags: [
    'security',
    'csrf',
  ],

  content: `
CSRF attacks exploit authenticated browser sessions using forged requests.
  `,
},

{
  id: 'cors-production-scenario',

  title:
    '🔥 CORS Production Scenario',

  level: 'advanced',

  tags: [
    'security',
    'cors',
  ],

  content: `
Improper CORS configuration may block frontend communication or create security risks.
  `,
},

{
  id: 'sql-injection-prevention-scenario',

  title:
    '🔥 SQL Injection Prevention Scenario',

  level: 'advanced',

  tags: [
    'security',
    'database',
  ],

  content: `
Parameterized queries and ORM frameworks help prevent SQL injection attacks.
  `,
},

{
  id: 'xss-prevention-scenario',

  title:
    '🔥 XSS Prevention Scenario',

  level: 'advanced',

  tags: [
    'security',
    'xss',
  ],

  content: `
Applications should sanitize user input and escape output preventing script injection.
  `,
},

{
  id: 'logging-monitoring-scenario',

  title:
    '🔥 Logging & Monitoring Scenario',

  level: 'advanced',

  tags: [
    'monitoring',
    'observability',
  ],

  content: `
Production systems require centralized monitoring and structured logging for debugging.
  `,
},

{
  id: 'correlation-id-real-scenario',

  title:
    '🔥 Correlation ID Real Scenario',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'logging',
  ],

  content: `
Correlation IDs trace requests across distributed service chains.
  `,
},

{
  id: 'distributed-tracing-scenario',

  title:
    '🔥 Distributed Tracing Scenario',

  level: 'advanced',

  tags: [
    'observability',
    'distributed-systems',
  ],

  content: `
Tracing tools visualize request journey across microservices.
  `,
},{
  id: 'jvm-high-cpu-scenario',

  title:
    '🔥 JVM High CPU Scenario',

  level: 'advanced',

  tags: [
    'jvm',
    'performance',
  ],

  content: `
High CPU usage may caused by:
- infinite loops
- excessive GC
- thread contention
- heavy computations
  `,
},

{
  id: 'gc-pause-scenario',

  title:
    '🔥 GC Pause Scenario',

  level: 'advanced',

  tags: [
    'jvm',
    'garbage-collection',
  ],

  content: `
Long garbage collection pauses increase latency and reduce application responsiveness.
  `,
},

{
  id: 'slow-api-debugging-scenario',

  title:
    '🔥 Slow API Debugging Scenario',

  level: 'advanced',

  tags: [
    'performance',
    'debugging',
  ],

  content: `
Slow APIs should analyzed using:
- logs
- traces
- DB queries
- thread dumps
- metrics
  `,
},

{
  id: 'db-performance-bottleneck-scenario',

  title:
    '🔥 DB Performance Bottleneck Scenario',

  level: 'advanced',

  tags: [
    'database',
    'performance',
  ],

  content: `
DB bottlenecks commonly caused by:
- missing indexes
- slow queries
- connection exhaustion
- locking
  `,
},

{
  id: 'cache-vs-db-tradeoff-scenario',

  title:
    '🔥 Cache vs DB Tradeoff Scenario',

  level: 'advanced',

  tags: [
    'cache',
    'performance',
  ],

  content: `
Caching improves speed but introduces consistency and invalidation complexity.
  `,
},

{
  id: 'rest-vs-kafka-scenario',

  title:
    '🔥 REST vs Kafka Scenario',

  level: 'advanced',

  tags: [
    'architecture',
    'messaging',
  ],

  content: `
REST suitable for synchronous request-response communication.

Kafka suitable for asynchronous event-driven workflows.
  `,
},

{
  id: 'monolith-vs-microservices-decision',

  title:
    '🔥 Monolith vs Microservices Decision',

  level: 'advanced',

  tags: [
    'architecture',
    'microservices',
  ],

  content: `
Microservices not always correct choice.

Monoliths simpler for:
- small teams
- simple systems
- low scale requirements
  `,
},

{
  id: 'why-not-microservices',

  title:
    '🔥 Why Not Microservices?',

  level: 'advanced',

  tags: [
    'architecture',
    'tradeoffs',
  ],

  content: `
Microservices increase:
- deployment complexity
- debugging difficulty
- infrastructure cost
- distributed system challenges
  `,
},

{
  id: 'why-kafka-instead-rabbitmq',

  title:
    '🔥 Why Kafka Instead RabbitMQ?',

  level: 'advanced',

  tags: [
    'kafka',
    'messaging',
  ],

  content: `
Kafka better for:
- event streaming
- high throughput
- replay capability

RabbitMQ better for:
- traditional queue workflows
- routing flexibility
  `,
},

{
  id: 'why-webclient-instead-resttemplate',

  title:
    '🔥 Why WebClient Instead RestTemplate?',

  level: 'advanced',

  tags: [
    'spring',
    'reactive',
  ],

  content: `
WebClient supports:
- non-blocking IO
- reactive programming
- better scalability
  `,
},

{
  id: 'why-redis',

  title:
    '🔥 Why Redis?',

  level: 'advanced',

  tags: [
    'redis',
    'performance',
  ],

  content: `
Redis provides:
- in-memory speed
- distributed caching
- pub/sub
- distributed locks
  `,
},

{
  id: 'why-stateless-apis',

  title:
    '🔥 Why Stateless APIs?',

  level: 'advanced',

  tags: [
    'rest-api',
    'scalability',
  ],

  content: `
Stateless APIs improve:
- scalability
- load balancing
- fault tolerance
  `,
},

{
  id: 'why-jwt',

  title:
    '🔥 Why JWT?',

  level: 'advanced',

  tags: [
    'jwt',
    'security',
  ],

  content: `
JWT supports stateless authentication in distributed systems.
  `,
},

{
  id: 'production-security-scenario',

  title:
    '🔥 Production Security Scenario',

  level: 'advanced',

  tags: [
    'security',
    'production',
  ],

  content: `
Production systems require:
- secure authentication
- authorization
- monitoring
- rate limiting
- HTTPS
  `,
},

{
  id: 'cloud-deployment-scenario',

  title:
    '🔥 Cloud Deployment Scenario',

  level: 'advanced',

  tags: [
    'cloud',
    'deployment',
  ],

  content: `
Cloud deployments require:
- scalability
- observability
- automation
- resilience
  `,
},

{
  id: 'scaling-strategy-scenario',

  title:
    '🔥 Scaling Strategy Scenario',

  level: 'advanced',

  tags: [
    'scalability',
    'architecture',
  ],

  content: `
Scaling strategies depend on:
- traffic
- workload
- bottlenecks
- cost considerations
  `,
},

{
  id: 'horizontal-vs-vertical-scaling-scenario',

  title:
    '🔥 Horizontal vs Vertical Scaling Scenario',

  level: 'advanced',

  tags: [
    'scaling',
    'architecture',
  ],

  content: `
Horizontal scaling:
- more instances

Vertical scaling:
- stronger servers
  `,
},

{
  id: 'cap-theorem-real-scenario',

  title:
    '🔥 CAP Theorem Real Scenario',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'cap-theorem',
  ],

  content: `
Distributed systems often trade consistency for availability during network partitions.
  `,
},

{
  id: 'event-driven-architecture-scenario',

  title:
    '🔥 Event Driven Architecture Scenario',

  level: 'advanced',

  tags: [
    'event-driven',
    'microservices',
  ],

  content: `
Event-driven systems improve decoupling and scalability using asynchronous communication.
  `,
},

{
  id: 'production-incident-rca-scenario',

  title:
    '🔥 Production Incident RCA Scenario',

  level: 'advanced',

  tags: [
    'production',
    'debugging',
  ],

  content: `
RCA process identifies root cause and preventive actions after incidents.
  `,
},

{
  id: 'feature-flag-rollback-scenario',

  title:
    '🔥 Feature Flag Rollback Scenario',

  level: 'advanced',

  tags: [
    'deployment',
    'feature-flags',
  ],

  content: `
Feature flags allow disabling problematic features instantly without redeployment.
  `,
},

{
  id: 'real-time-notification-scenario',

  title:
    '🔥 Real Time Notification Scenario',

  level: 'advanced',

  tags: [
    'async',
    'messaging',
  ],

  content: `
Real-time systems commonly use:
- Kafka
- WebSockets
- async event processing
  `,
},

{
  id: 'payment-failure-scenario',

  title:
    '🔥 Payment Failure Scenario',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'transactions',
  ],

  content: `
Payment systems require:
- retries
- idempotency
- compensation logic
- auditing
  `,
},

{
  id: 'ecommerce-order-flow-scenario',

  title:
    '🔥 E-commerce Order Flow Scenario',

  level: 'advanced',

  tags: [
    'microservices',
    'architecture',
  ],

  content: `
Typical order flow:
- order creation
- payment
- inventory update
- shipment
- notifications
  `,
},

{
  id: 'inventory-consistency-scenario',

  title:
    '🔥 Inventory Consistency Scenario',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'consistency',
  ],

  content: `
Inventory systems must handle concurrency and eventual consistency carefully.
  `,
},{
  id: 'distributed-locking-scenario',

  title:
    '🔥 Distributed Locking Scenario',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'redis',
  ],

  content: `
Distributed locking prevents multiple services processing same critical resource simultaneously.
  `,
},

{
  id: 'idempotency-scenario',

  title:
    '🔥 Idempotency Scenario',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'api-design',
  ],

  content: `
Idempotency ensures repeated requests produce same result safely.
  `,
},

{
  id: 'duplicate-kafka-message-scenario',

  title:
    '🔥 Duplicate Kafka Message Scenario',

  level: 'advanced',

  tags: [
    'kafka',
    'messaging',
  ],

  content: `
Consumers should safely handle duplicate events because retries may reprocess messages.
  `,
},

{
  id: 'senior-level-system-design-discussion',

  title:
    '🔥🔥 Senior Level System Design Discussion',

  level: 'advanced',

  tags: [
    'system-design',
    'architecture',
  ],

  content: `
Senior discussions focus on:
- scalability
- resilience
- bottlenecks
- distributed systems
- observability
- tradeoffs
  `,
},

{
  id: 'common-hr-technical-mixed-questions',

  title:
    '🔥 Common HR + Technical Mixed Questions',

  level: 'advanced',

  tags: [
    'interview',
    'behavioral',
  ],

  content: `
Common questions:
- biggest challenge solved
- production issue handled
- conflict resolution
- optimization work
- ownership examples
  `,
},

{
  id: 'common-spring-interview-traps',

  title:
    '🔥🔥 Common Spring Interview Traps',

  level: 'advanced',

  tags: [
    'spring',
    'interview-trap',
  ],

  content: `
Common traps:
- shallow framework knowledge
- no production exposure
- weak debugging understanding
- misunderstanding transactions
- poor scalability reasoning
  `,
},

{
  id: 'senior-engineer-interview-questions',

  title:
    '🔥🔥 Senior Engineer Interview Questions',

  level: 'advanced',

  tags: [
    'senior-interview',
    'architecture',
  ],

  content: `
Senior engineers expected to explain:
- architecture decisions
- tradeoffs
- scalability
- incident handling
- mentoring
- ownership
  `,
},

{
  id: 'production-best-practices-discussion',

  title:
    '🔥 Production Best Practices Discussion',

  level: 'advanced',

  tags: [
    'production',
    'best-practice',
  ],

  content: `
Best practices:
- observability
- fault tolerance
- retries with limits
- secure configuration
- graceful degradation
- monitoring
  `,
},

  ],
};