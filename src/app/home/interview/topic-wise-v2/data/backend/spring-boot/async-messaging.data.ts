import { DocSection }
from '../../../models/doc.model';

export const ASYNC_MESSAGING_SECTION:
DocSection = {

  id: 'spring-async-messaging',

  title: 'Async & Messaging',

  summary:
    'Async processing, CompletableFuture, scheduling, Kafka, messaging patterns, resilience, distributed systems, and production async engineering concepts.',

  articles: [

    {
      id: 'what-is-async-processing',

      title:
        '🔥 What is Async Processing?',

      level: 'beginner',

      tags: [
        'async',
        'multithreading',
      ],

      content: `
Async processing allows tasks to execute independently without blocking main execution flow.
      `,
    },

    {
      id: 'why-async-processing',

      title:
        '🔥 Why Async Processing?',

      level: 'beginner',

      tags: [
        'async',
        'performance',
      ],

      content: `
Benefits:
- better responsiveness
- scalability
- parallel execution
- non-blocking operations
      `,
    },

    {
      id: 'synchronous-vs-asynchronous',

      title:
        '🔥 Synchronous vs Asynchronous',

      level: 'beginner',

      tags: [
        'async',
        'multithreading',
      ],

      content: `
Synchronous:
- sequential execution
- blocking

Asynchronous:
- non-blocking
- parallel task execution
      `,
    },

    {
      id: 'thread-blocking',

      title:
        'Thread Blocking',

      level: 'intermediate',

      tags: [
        'threads',
        'performance',
      ],

      content: `
Blocking occurs when thread waits for operation completion before continuing execution.
      `,
    },

    {
      id: 'non-blocking-processing',

      title:
        '🔥 Non Blocking Processing',

      level: 'advanced',

      tags: [
        'async',
        'performance',
      ],

      content: `
Non-blocking systems continue execution without waiting for slow operations.
      `,
    },

    {
      id: 'async-annotation',

      title:
        '🔥 @Async',

      level: 'intermediate',

      tags: [
        'spring',
        'async',
      ],

      content: `
@Async executes method asynchronously using separate thread.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: '@Async Example',

          code: `
@Async
public void sendEmail() {

}
          `,
        },
      ],
    },

    {
      id: 'enableasync',

      title:
        '@EnableAsync',

      level: 'intermediate',

      tags: [
        'spring',
        'async',
      ],

      content: `
@EnableAsync enables asynchronous method execution in Spring Boot.
      `,
    },

    {
      id: 'async-method-execution',

      title:
        'Async Method Execution',

      level: 'intermediate',

      tags: [
        'async',
        'spring',
      ],

      content: `
Spring executes async methods using thread pools internally.
      `,
    },

    {
      id: 'completablefuture-basics',

      title:
        '🔥 CompletableFuture Basics',

      level: 'advanced',

      tags: [
        'java',
        'completablefuture',
      ],

      content: `
CompletableFuture supports asynchronous programming and task chaining.
      `,
    },

    {
      id: 'completablefuture-vs-future',

      title:
        '🔥 CompletableFuture vs Future',

      level: 'advanced',

      tags: [
        'java',
        'async',
      ],

      content: `
Future:
- limited chaining
- blocking operations

CompletableFuture:
- chaining
- async callbacks
- better composition
      `,
    },

    {
      id: 'completablefuture-chaining',

      title:
        'CompletableFuture Chaining',

      level: 'advanced',

      tags: [
        'java',
        'completablefuture',
      ],

      content: `
CompletableFuture supports chaining multiple async operations together.
      `,
    },

    {
      id: 'thenapply',

      title:
        'thenApply',

      level: 'advanced',

      tags: [
        'java',
        'completablefuture',
      ],

      content: `
Transforms result of previous async operation.
      `,
    },

    {
      id: 'thencompose',

      title:
        '🔥 thenCompose',

      level: 'advanced',

      tags: [
        'java',
        'completablefuture',
      ],

      content: `
Chains dependent asynchronous operations together.
      `,
    },

    {
      id: 'thencombine',

      title:
        'thenCombine',

      level: 'advanced',

      tags: [
        'java',
        'completablefuture',
      ],

      content: `
Combines results from two independent async operations.
      `,
    },

    {
      id: 'exceptionally',

      title:
        'exceptionally',

      level: 'advanced',

      tags: [
        'java',
        'exception-handling',
      ],

      content: `
Handles exceptions during async execution.
      `,
    },

    {
      id: 'async-exception-handling',

      title:
        '🔥 Async Exception Handling',

      level: 'advanced',

      tags: [
        'async',
        'exception-handling',
      ],

      content: `
Async exceptions handled differently because execution happens in separate threads.
      `,
    },

    {
      id: 'custom-thread-pool',

      title:
        '🔥 Custom Thread Pool',

      level: 'advanced',

      tags: [
        'threads',
        'performance',
      ],

      content: `
Custom thread pools improve scalability and resource management.
      `,
    },

    {
      id: 'threadpooltaskexecutor',

      title:
        'ThreadPoolTaskExecutor',

      level: 'advanced',

      tags: [
        'spring',
        'thread-pool',
      ],

      content: `
Spring abstraction for configurable async thread pools.
      `,
    },

    {
      id: 'executorservice',

      title:
        'ExecutorService',

      level: 'intermediate',

      tags: [
        'java',
        'multithreading',
      ],

      content: `
ExecutorService manages thread execution and lifecycle.
      `,
    },

    {
      id: 'callable-vs-runnable',

      title:
        '🔥 Callable vs Runnable',

      level: 'intermediate',

      tags: [
        'java',
        'multithreading',
      ],

      content: `
Runnable:
- no return value

Callable:
- returns result
- supports exceptions
      `,
    },

    {
      id: 'future',

      title:
        'Future',

      level: 'intermediate',

      tags: [
        'java',
        'async',
      ],

      content: `
Future represents result of asynchronous computation.
      `,
    },

    {
      id: 'scheduled-tasks',

      title:
        '🔥 Scheduled Tasks',

      level: 'intermediate',

      tags: [
        'scheduler',
        'spring',
      ],

      content: `
Scheduled tasks execute automatically at configured intervals.
      `,
    },

    {
      id: 'scheduled-annotation',

      title:
        '🔥 @Scheduled',

      level: 'intermediate',

      tags: [
        'scheduler',
        'spring',
      ],

      content: `
@Scheduled executes methods periodically.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: '@Scheduled Example',

          code: `
@Scheduled(
    fixedRate = 5000
)
public void syncData() {

}
          `,
        },
      ],
    },

    {
      id: 'fixed-rate-vs-fixed-delay',

      title:
        '🔥 Fixed Rate vs Fixed Delay',

      level: 'advanced',

      tags: [
        'scheduler',
        'threads',
      ],

      content: `
Fixed Rate:
- interval between task starts

Fixed Delay:
- delay after previous completion
      `,
    },

    {
      id: 'cron-expressions',

      title:
        '🔥 Cron Expressions',

      level: 'advanced',

      tags: [
        'scheduler',
        'cron',
      ],

      content: `
Cron expressions define flexible scheduling patterns.
      `,
    },

    {
      id: 'scheduler-thread-pools',

      title:
        'Scheduler Thread Pools',

      level: 'advanced',

      tags: [
        'scheduler',
        'thread-pool',
      ],

      content: `
Thread pools prevent scheduled tasks from blocking each other.
      `,
    },

    {
      id: 'async-best-practices',

      title:
        '🔥 Async Best Practices',

      level: 'advanced',

      tags: [
        'async',
        'best-practice',
      ],

      content: `
Best practices:
- avoid blocking calls
- use proper thread pools
- monitor async execution
- handle failures properly
      `,
    },

    {
      id: 'async-performance-issues',

      title:
        'Async Performance Issues',

      level: 'advanced',

      tags: [
        'performance',
        'async',
      ],

      content: `
Common issues:
- thread exhaustion
- excessive context switching
- blocking IO
- memory pressure
      `,
    },

    {
      id: 'context-switching',

      title:
        'Context Switching',

      level: 'advanced',

      tags: [
        'threads',
        'performance',
      ],

      content: `
Frequent thread switching increases CPU overhead and reduces performance.
      `,
    },

    {
      id: 'thread-pool-exhaustion',

      title:
        '🔥 Thread Pool Exhaustion',

      level: 'advanced',

      tags: [
        'threads',
        'production',
      ],

      content: `
Occurs when all threads busy and new tasks cannot execute efficiently.
      `,
    },

    {
      id: 'deadlocks-basics',

      title:
        '🔥 Deadlocks Basics',

      level: 'advanced',

      tags: [
        'multithreading',
        'deadlock',
      ],

      content: `
Deadlock occurs when threads wait indefinitely for each other resources.
      `,
    },

    {
      id: 'concurrency-problems',

      title:
        'Concurrency Problems',

      level: 'advanced',

      tags: [
        'multithreading',
        'concurrency',
      ],

      content: `
Concurrency problems include:
- race conditions
- deadlocks
- starvation
- inconsistent state
      `,
    },

    {
      id: 'race-conditions',

      title:
        '🔥 Race Conditions',

      level: 'advanced',

      tags: [
        'multithreading',
        'race-condition',
      ],

      content: `
Race conditions occur when multiple threads modify shared state simultaneously.
      `,
    },

    {
      id: 'producer-consumer-pattern',

      title:
        'Producer Consumer Pattern',

      level: 'advanced',

      tags: [
        'multithreading',
        'design-pattern',
      ],

      content: `
Producer generates data while consumer processes it asynchronously.
      `,
    },

    {
      id: 'event-driven-architecture',

      title:
        '🔥 Event Driven Architecture',

      level: 'advanced',

      tags: [
        'architecture',
        'event-driven',
      ],

      content: `
Applications communicate through events instead of direct synchronous calls.
      `,
    },

    {
      id: 'what-is-messaging',

      title:
        '🔥 What is Messaging?',

      level: 'beginner',

      tags: [
        'messaging',
        'distributed-systems',
      ],

      content: `
Messaging enables asynchronous communication between distributed systems.
      `,
    },{
  id: 'message-queue',

  title:
    '🔥 Message Queue',

  level: 'beginner',

  tags: [
    'messaging',
    'queue',
  ],

  content: `
Message queues enable asynchronous communication between producers and consumers.
  `,
},

{
  id: 'pub-sub-model',

  title:
    '🔥 Pub/Sub Model',

  level: 'intermediate',

  tags: [
    'messaging',
    'pubsub',
  ],

  content: `
Publishers send messages to topics while subscribers consume interested events.
  `,
},

{
  id: 'kafka-basics',

  title:
    '🔥 Kafka Basics',

  level: 'intermediate',

  tags: [
    'kafka',
    'messaging',
  ],

  content: `
Apache Kafka is distributed event streaming platform for high-throughput messaging.
  `,
},

{
  id: 'kafka-architecture',

  title:
    '🔥 Kafka Architecture',

  level: 'advanced',

  tags: [
    'kafka',
    'architecture',
  ],

  content: `
Kafka architecture includes:
- brokers
- topics
- partitions
- producers
- consumers
- zookeeper or kraft
  `,
},

{
  id: 'kafka-topics',

  title:
    'Kafka Topics',

  level: 'intermediate',

  tags: [
    'kafka',
    'topics',
  ],

  content: `
Topics categorize and organize Kafka messages.
  `,
},

{
  id: 'kafka-partitions',

  title:
    '🔥 Kafka Partitions',

  level: 'advanced',

  tags: [
    'kafka',
    'partitions',
  ],

  content: `
Partitions enable parallel processing and scalability in Kafka.
  `,
},

{
  id: 'kafka-consumer',

  title:
    'Kafka Consumer',

  level: 'intermediate',

  tags: [
    'kafka',
    'consumer',
  ],

  content: `
Consumers read messages from Kafka topics.
  `,
},

{
  id: 'kafka-producer',

  title:
    'Kafka Producer',

  level: 'intermediate',

  tags: [
    'kafka',
    'producer',
  ],

  content: `
Producers publish messages into Kafka topics.
  `,
},

{
  id: 'kafka-consumer-groups',

  title:
    '🔥 Kafka Consumer Groups',

  level: 'advanced',

  tags: [
    'kafka',
    'consumer-group',
  ],

  content: `
Consumer groups enable horizontal scaling and load balancing.
  `,
},

{
  id: 'kafka-offsets',

  title:
    '🔥 Kafka Offsets',

  level: 'advanced',

  tags: [
    'kafka',
    'offsets',
  ],

  content: `
Offsets uniquely identify message positions inside partitions.
  `,
},

{
  id: 'kafka-ordering',

  title:
    '🔥 Kafka Ordering',

  level: 'advanced',

  tags: [
    'kafka',
    'ordering',
  ],

  content: `
Kafka guarantees ordering only within single partition.
  `,
},

{
  id: 'kafka-retention',

  title:
    'Kafka Retention',

  level: 'advanced',

  tags: [
    'kafka',
    'storage',
  ],

  content: `
Kafka stores messages for configurable retention duration.
  `,
},

{
  id: 'kafka-replication',

  title:
    '🔥 Kafka Replication',

  level: 'advanced',

  tags: [
    'kafka',
    'replication',
  ],

  content: `
Replication improves fault tolerance and availability.
  `,
},

{
  id: 'kafka-delivery-semantics',

  title:
    '🔥 Kafka Delivery Semantics',

  level: 'advanced',

  tags: [
    'kafka',
    'delivery',
  ],

  content: `
Kafka supports:
- at most once
- at least once
- exactly once
delivery guarantees.
  `,
},

{
  id: 'at-most-once',

  title:
    'At Most Once',

  level: 'advanced',

  tags: [
    'kafka',
    'delivery',
  ],

  content: `
Messages may lost but never duplicated.
  `,
},

{
  id: 'at-least-once',

  title:
    '🔥 At Least Once',

  level: 'advanced',

  tags: [
    'kafka',
    'delivery',
  ],

  content: `
Messages never lost but may duplicated.
  `,
},

{
  id: 'exactly-once',

  title:
    '🔥 Exactly Once',

  level: 'advanced',

  tags: [
    'kafka',
    'delivery',
  ],

  content: `
Messages processed exactly one time without duplication or loss.
  `,
},

{
  id: 'kafka-serialization',

  title:
    'Kafka Serialization',

  level: 'advanced',

  tags: [
    'kafka',
    'serialization',
  ],

  content: `
Serialization converts objects into byte streams before transmission.
  `,
},

{
  id: 'kafka-deserialization',

  title:
    'Kafka Deserialization',

  level: 'advanced',

  tags: [
    'kafka',
    'deserialization',
  ],

  content: `
Deserialization converts byte streams back into application objects.
  `,
},

{
  id: 'kafka-performance-optimization',

  title:
    '🔥 Kafka Performance Optimization',

  level: 'advanced',

  tags: [
    'kafka',
    'performance',
  ],

  content: `
Optimization techniques:
- batching
- compression
- partition tuning
- producer tuning
- consumer tuning
  `,
},

{
  id: 'kafka-scaling',

  title:
    '🔥 Kafka Scaling',

  level: 'advanced',

  tags: [
    'kafka',
    'scaling',
  ],

  content: `
Kafka scales horizontally using brokers and partitions.
  `,
},

{
  id: 'kafka-rebalancing',

  title:
    '🔥 Kafka Rebalancing',

  level: 'advanced',

  tags: [
    'kafka',
    'consumer-group',
  ],

  content: `
Rebalancing redistributes partitions across consumers during topology changes.
  `,
},

{
  id: 'kafka-lag',

  title:
    '🔥 Kafka Lag',

  level: 'advanced',

  tags: [
    'kafka',
    'monitoring',
  ],

  content: `
Lag measures difference between produced and consumed messages.
  `,
},

{
  id: 'retry-mechanism',

  title:
    '🔥 Retry Mechanism',

  level: 'advanced',

  tags: [
    'resilience',
    'retry',
  ],

  content: `
Retries handle temporary failures automatically.
  `,
},

{
  id: 'dead-letter-queue',

  title:
    '🔥 Dead Letter Queue',

  level: 'advanced',

  tags: [
    'messaging',
    'dlq',
  ],

  content: `
Failed messages moved into separate queue for later analysis.
  `,
},

{
  id: 'idempotent-consumers',

  title:
    '🔥 Idempotent Consumers',

  level: 'advanced',

  tags: [
    'kafka',
    'idempotency',
  ],

  content: `
Consumers should safely handle duplicate message processing.
  `,
},

{
  id: 'distributed-messaging',

  title:
    'Distributed Messaging',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'messaging',
  ],

  content: `
Distributed messaging enables communication across independent services.
  `,
},

{
  id: 'event-streaming',

  title:
    '🔥 Event Streaming',

  level: 'advanced',

  tags: [
    'kafka',
    'event-streaming',
  ],

  content: `
Event streaming continuously processes real-time event data.
  `,
},

{
  id: 'async-communication-patterns',

  title:
    'Async Communication Patterns',

  level: 'advanced',

  tags: [
    'architecture',
    'messaging',
  ],

  content: `
Common patterns:
- queue-based
- pub/sub
- event streaming
- request-reply
  `,
},

{
  id: 'saga-pattern-basics',

  title:
    '🔥 SAGA Pattern Basics',

  level: 'advanced',

  tags: [
    'microservices',
    'distributed-transactions',
  ],

  content: `
SAGA manages distributed transactions using sequence of local transactions.
  `,
},

{
  id: 'eventual-consistency',

  title:
    '🔥 Eventual Consistency',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'consistency',
  ],

  content: `
Distributed systems may become consistent eventually instead of immediately.
  `,
},{
  id: 'outbox-pattern',

  title:
    '🔥 Outbox Pattern',

  level: 'advanced',

  tags: [
    'microservices',
    'messaging',
  ],

  content: `
Outbox pattern ensures database updates and message publishing remain consistent.
  `,
},

{
  id: 'message-ordering-problems',

  title:
    '🔥 Message Ordering Problems',

  level: 'advanced',

  tags: [
    'kafka',
    'distributed-systems',
  ],

  content: `
Distributed messaging systems may process messages out of order across partitions.
  `,
},

{
  id: 'duplicate-message-handling',

  title:
    '🔥 Duplicate Message Handling',

  level: 'advanced',

  tags: [
    'messaging',
    'idempotency',
  ],

  content: `
Consumers should safely handle duplicate messages using idempotent processing.
  `,
},

{
  id: 'async-transaction-problems',

  title:
    'Async Transaction Problems',

  level: 'advanced',

  tags: [
    'transactions',
    'distributed-systems',
  ],

  content: `
Async systems create challenges around consistency, retries, and partial failures.
  `,
},

{
  id: 'distributed-transactions-basics',

  title:
    '🔥 Distributed Transactions Basics',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'transactions',
  ],

  content: `
Distributed transactions coordinate changes across multiple services or databases.
  `,
},

{
  id: 'resilience4j-basics',

  title:
    '🔥 Resilience4j Basics',

  level: 'advanced',

  tags: [
    'resilience',
    'microservices',
  ],

  content: `
Resilience4j provides fault tolerance utilities for distributed systems.
  `,
},

{
  id: 'circuit-breaker-basics',

  title:
    '🔥 Circuit Breaker Basics',

  level: 'advanced',

  tags: [
    'resilience',
    'circuit-breaker',
  ],

  content: `
Circuit breakers stop repeated calls to failing services preventing cascading failures.
  `,
},

{
  id: 'retry-pattern',

  title:
    '🔥 Retry Pattern',

  level: 'advanced',

  tags: [
    'resilience',
    'retry',
  ],

  content: `
Retry pattern automatically retries temporary failed operations.
  `,
},

{
  id: 'bulkhead-pattern',

  title:
    'Bulkhead Pattern',

  level: 'advanced',

  tags: [
    'resilience',
    'microservices',
  ],

  content: `
Bulkhead isolates failures between different application components.
  `,
},

{
  id: 'timeout-handling',

  title:
    '🔥 Timeout Handling',

  level: 'advanced',

  tags: [
    'resilience',
    'timeouts',
  ],

  content: `
Timeouts prevent threads from waiting indefinitely for slow services.
  `,
},

{
  id: 'backpressure-basics',

  title:
    '🔥 Backpressure Basics',

  level: 'advanced',

  tags: [
    'stream-processing',
    'performance',
  ],

  content: `
Backpressure controls data flow when consumers slower than producers.
  `,
},

{
  id: 'async-monitoring',

  title:
    '🔥 Async Monitoring',

  level: 'advanced',

  tags: [
    'monitoring',
    'async',
  ],

  content: `
Monitoring async systems helps detect:
- thread exhaustion
- queue buildup
- slow consumers
- retries
  `,
},

{
  id: 'kafka-monitoring',

  title:
    '🔥 Kafka Monitoring',

  level: 'advanced',

  tags: [
    'kafka',
    'monitoring',
  ],

  content: `
Kafka monitoring tracks:
- lag
- throughput
- broker health
- partition distribution
  `,
},

{
  id: 'logging-async-systems',

  title:
    'Logging Async Systems',

  level: 'advanced',

  tags: [
    'logging',
    'distributed-systems',
  ],

  content: `
Distributed async systems require centralized structured logging for debugging.
  `,
},

{
  id: 'distributed-tracing-basics',

  title:
    '🔥 Distributed Tracing Basics',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'tracing',
  ],

  content: `
Distributed tracing follows requests across multiple services and async flows.
  `,
},

{
  id: 'production-async-problems',

  title:
    '🔥 Production Async Problems',

  level: 'advanced',

  tags: [
    'production',
    'async',
  ],

  content: `
Common problems:
- thread starvation
- queue overflow
- retry storms
- duplicate events
- lag buildup
  `,
},

{
  id: 'real-world-messaging-scenarios',

  title:
    '🔥 Real World Messaging Scenarios',

  level: 'advanced',

  tags: [
    'messaging',
    'real-world',
  ],

  content: `
Real-world scenarios include:
- payment event processing
- order workflows
- notification systems
- retry failures
- DLQ recovery
  `,
},

{
  id: 'common-async-interview-traps',

  title:
    '🔥🔥 Common Async Interview Traps',

  level: 'advanced',

  tags: [
    'async',
    'interview-trap',
  ],

  content: `
Common interview traps:
- blocking async threads
- CompletableFuture misuse
- thread pool misconfiguration
- retry infinite loops
- Kafka ordering confusion
  `,
},

{
  id: 'common-kafka-interview-questions',

  title:
    '🔥🔥 Common Kafka Interview Questions',

  level: 'advanced',

  tags: [
    'kafka',
    'interview',
  ],

  content: `
Interview focus areas:
- partitions
- offsets
- consumer groups
- delivery guarantees
- ordering
- lag
- rebalancing
  `,
},

{
  id: 'senior-level-async-questions',

  title:
    '🔥🔥 Senior Level Async Questions',

  level: 'advanced',

  tags: [
    'distributed-systems',
    'senior-interview',
  ],

  content: `
Senior-level interviews focus on:
- distributed consistency
- resilience patterns
- scalability
- async architecture
- fault tolerance
- event-driven systems
  `,
},

{
  id: 'production-best-practices',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'async',
    'best-practice',
  ],

  content: `
Production best practices:
- monitor thread pools
- avoid blocking operations
- configure retries carefully
- implement DLQ
- monitor Kafka lag
- ensure idempotency
  `,
},

  ],
};