import { DocSection }
from '../../../models/doc.model';

export const JAVA_INTERVIEW_SCENARIOS_SECTION:
DocSection = {

  id: 'java-interviewscenarios',

  title: 'Java Interview Scenarios',

  summary:
    'Real-world Java production interview scenarios including debugging, JVM issues, microservices, Kafka, distributed systems, cloud deployment, scalability, and production best practices.',

  articles: [

    {
      id: 'real-world-java-scenarios',

      title:
        '🔥 Real World Java Interview Scenarios',

      level: 'beginner',

      tags: [
        'java',
        'interview',
      ],

      content: `
# Real World Java Interview Scenarios

Interviewers test:
- production thinking
- debugging ability
- scalability knowledge
- incident handling
- architecture understanding
      `,
    },

    {
      id: 'production-issue-scenarios',

      title:
        '🔥 Production Issue Scenarios',

      level: 'intermediate',

      tags: [
        'java',
        'production',
      ],

      content: `
# Production Issue Scenarios

Common production problems:
- memory leaks
- API latency
- deadlocks
- DB bottlenecks
- Kafka lag
      `,
    },

    {
      id: 'debugging-scenarios',

      title:
        '🔥 Debugging Scenarios',

      level: 'intermediate',

      tags: [
        'java',
        'debugging',
      ],

      content: `
# Debugging Scenarios

Systematic debugging includes:
- logs
- metrics
- profiling
- monitoring
- root cause analysis
      `,
    },

    {
      id: 'memory-leak-scenarios',

      title:
        '🔥 Memory Leak Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'memory-leak',
      ],

      content: `
# Memory Leak Scenarios

Common causes:
- static collections
- unclosed resources
- cache misuse
- thread local leaks
      `,
    },

    {
      id: 'outofmemoryerror-scenarios',

      title:
        '🔥 OutOfMemoryError Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'oom',
      ],

      content: `
# OutOfMemoryError Scenarios

Occurs when JVM unable to allocate memory.
      `,

      codeBlocks: [
        {
          language: 'bash',

          title: 'Heap Dump Configuration',

          code: `
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=/logs/heapdump.hprof
          `,
        },
      ],
    },

    {
      id: 'stackoverflowerror-scenarios',

      title:
        '🔥 StackOverflowError Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'stack-overflow',
      ],

      content: `
# StackOverflowError Scenarios

Usually caused by:
- infinite recursion
- excessive nested calls
      `,
    },

    {
      id: 'high-cpu-usage-scenarios',

      title:
        '🔥 High CPU Usage Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'cpu',
      ],

      content: `
# High CPU Usage Scenarios

Possible causes:
- infinite loops
- thread contention
- excessive GC
- blocking operations
      `,
    },

    {
      id: 'deadlock-scenarios',

      title:
        '🔥 Deadlock Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'deadlock',
      ],

      content: `
# Deadlock Scenarios

Occurs when threads wait indefinitely for locks held by each other.
      `,
    },

    {
      id: 'race-condition-scenarios',

      title:
        '🔥 Race Condition Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'race-condition',
      ],

      content: `
# Race Condition Scenarios

Multiple threads modify shared state unpredictably.
      `,
    },

    {
      id: 'synchronization-issues',

      title:
        'Synchronization Issues',

      level: 'advanced',

      tags: [
        'java',
        'synchronization',
      ],

      content: `
# Synchronization Issues

Improper synchronization causes:
- inconsistent data
- visibility issues
- deadlocks
      `,
    },

    {
      id: 'concurrentmodificationexception',

      title:
        '🔥 ConcurrentModificationException Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'collections',
      ],

      content: `
# ConcurrentModificationException Scenarios

Occurs when collection modified during iteration.
      `,
    },

    {
      id: 'thread-pool-exhaustion',

      title:
        '🔥 Thread Pool Exhaustion',

      level: 'advanced',

      tags: [
        'java',
        'thread-pool',
      ],

      content: `
# Thread Pool Exhaustion

All threads busy causing request backlog and latency spikes.
      `,
    },

    {
      id: 'database-connection-leak',

      title:
        '🔥 Database Connection Leak',

      level: 'advanced',

      tags: [
        'java',
        'database',
      ],

      content: `
# Database Connection Leak

Connections not returned to pool causing DB exhaustion.
      `,
    },

    {
      id: 'slow-api-response',

      title:
        '🔥 Slow API Response Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'api',
      ],

      content: `
# Slow API Response Scenarios

Possible causes:
- DB slowness
- external APIs
- thread contention
- cache misses
- GC pauses
      `,
    },

    {
      id: 'microservice-failure-scenarios',

      title:
        '🔥 Microservice Failure Scenarios',

      level: 'advanced',

      tags: [
        'java',
        'microservices',
      ],

      content: `
# Microservice Failure Scenarios

Failures propagate across distributed services without resilience mechanisms.
      `,
    },

    {
      id: 'kafka-consumer-lag',

      title:
        '🔥 Kafka Consumer Lag Scenario',

      level: 'advanced',

      tags: [
        'java',
        'kafka',
      ],

      content: `
# Kafka Consumer Lag Scenario

Consumers process messages slower than producers.
      `,
    },

    {
      id: 'kafka-duplicate-message',

      title:
        '🔥 Kafka Duplicate Message Scenario',

      level: 'advanced',

      tags: [
        'java',
        'kafka',
      ],

      content: `
# Kafka Duplicate Message Scenario

Consumers must handle duplicate event processing safely.
      `,
    },

    {
      id: 'distributed-transaction-scenario',

      title:
        '🔥 Distributed Transaction Scenario',

      level: 'advanced',

      tags: [
        'java',
        'distributed-transaction',
      ],

      content: `
# Distributed Transaction Scenario

Multiple services participating in same business transaction.
      `,
    },

    {
      id: 'circuit-breaker-failure',

      title:
        '🔥 Circuit Breaker Failure Scenario',

      level: 'advanced',

      tags: [
        'java',
        'circuit-breaker',
      ],

      content: `
# Circuit Breaker Failure Scenario

Circuit breaker protects systems from cascading service failures.
      `,
    },

    {
      id: 'cache-consistency-scenario',

      title:
        '🔥 Cache Consistency Scenario',

      level: 'advanced',

      tags: [
        'java',
        'cache',
      ],

      content: `
# Cache Consistency Scenario

Cache and database data become inconsistent during updates.
      `,
    },

    {
      id: 'redis-cache-miss',

      title:
        'Redis Cache Miss Problems',

      level: 'advanced',

      tags: [
        'java',
        'redis',
      ],

      content: `
# Redis Cache Miss Problems

Frequent cache misses increase DB pressure.
      `,
    },

    {
      id: 'lazyinitializationexception-scenario',

      title:
        '🔥 LazyInitializationException Scenario',

      level: 'advanced',

      tags: [
        'java',
        'hibernate',
      ],

      content: `
# LazyInitializationException Scenario

Occurs when lazy-loaded entity accessed outside active session.
      `,
    },

    {
      id: 'nplus1-query-problem',

      title:
        '🔥 N+1 Query Problem',

      level: 'advanced',

      tags: [
        'java',
        'hibernate',
      ],

      content: `
# N+1 Query Problem

ORM executes excessive queries causing performance degradation.
      `,
    },

    {
      id: 'hibernate-performance-problems',

      title:
        'Hibernate Performance Problems',

      level: 'advanced',

      tags: [
        'java',
        'hibernate',
      ],

      content: `
# Hibernate Performance Problems

Common issues:
- lazy loading
- excessive joins
- improper indexing
      `,
    },

    {
      id: 'spring-bean-injection-failure',

      title:
        '🔥 Spring Bean Injection Failure',

      level: 'advanced',

      tags: [
        'java',
        'spring',
      ],

      content: `
# Spring Bean Injection Failure

Bean creation fails because dependency resolution unsuccessful.
      `,
    },

    {
      id: 'circular-dependency-scenario',

      title:
        '🔥 Circular Dependency Scenario',

      level: 'advanced',

      tags: [
        'java',
        'spring',
      ],

      content: `
# Circular Dependency Scenario

Two beans depend on each other causing startup failure.
      `,
    },

    {
      id: 'rest-api-timeout-scenario',

      title:
        '🔥 REST API Timeout Scenario',

      level: 'advanced',

      tags: [
        'java',
        'rest-api',
      ],

      content: `
# REST API Timeout Scenario

Long-running external calls cause API timeout failures.
      `,
    },

    {
      id: 'api-retry-scenario',

      title:
        '🔥 API Retry Scenario',

      level: 'advanced',

      tags: [
        'java',
        'retry',
      ],

      content: `
# API Retry Scenario

Retries help recover from temporary transient failures.
      `,
    },

    {
      id: 'idempotency-scenario',

      title:
        '🔥 Idempotency Scenario',

      level: 'advanced',

      tags: [
        'java',
        'idempotency',
      ],

      content: `
# Idempotency Scenario

Repeated requests should not create duplicate business effects.
      `,
    },

    {
      id: 'rate-limiting-scenario',

      title:
        '🔥 Rate Limiting Scenario',

      level: 'advanced',

      tags: [
        'java',
        'rate-limit',
      ],

      content: `
# Rate Limiting Scenario

Restricts excessive request traffic to protect systems.
      `,
    },

    {
      id: 'authentication-failure-scenario',

      title:
        'Authentication Failure Scenario',

      level: 'advanced',

      tags: [
        'java',
        'authentication',
      ],

      content: `
# Authentication Failure Scenario

Authentication failures may occur due to token expiry or invalid credentials.
      `,
    },

    {
      id: 'jwt-expiration-scenario',

      title:
        '🔥 JWT Expiration Scenario',

      level: 'advanced',

      tags: [
        'java',
        'jwt',
      ],

      content: `
# JWT Expiration Scenario

Expired JWT tokens require refresh or re-authentication.
      `,
    },

    {
      id: 'serialization-failure-scenario',

      title:
        'Serialization Failure Scenario',

      level: 'advanced',

      tags: [
        'java',
        'serialization',
      ],

      content: `
# Serialization Failure Scenario

Serialization failures may occur due to incompatible class versions.
      `,
    },

    {
      id: 'reflection-performance-scenario',

      title:
        'Reflection Performance Scenario',

      level: 'advanced',

      tags: [
        'java',
        'reflection',
      ],

      content: `
# Reflection Performance Scenario

Heavy reflection usage slows application startup and execution.
      `,
    },

    {
      id: 'jvm-gc-pause-scenario',

      title:
        '🔥 JVM GC Pause Scenario',

      level: 'advanced',

      tags: [
        'java',
        'gc',
      ],

      content: `
# JVM GC Pause Scenario

Long garbage collection pauses impact response time.
      `,
    },

    {
      id: 'full-gc-production-problem',

      title:
        '🔥 Full GC Production Problem',

      level: 'advanced',

      tags: [
        'java',
        'full-gc',
      ],

      content: `
# Full GC Production Problem

Frequent Full GC causes application latency spikes.
      `,
    },

    {
      id: 'heap-dump-analysis',

      title:
        '🔥 Heap Dump Analysis',

      level: 'advanced',

      tags: [
        'java',
        'heap-dump',
      ],

      content: `
# Heap Dump Analysis

Heap dumps help identify:
- memory leaks
- large objects
- retained references
      `,
    },

    {
      id: 'thread-dump-analysis',

      title:
        '🔥 Thread Dump Analysis',

      level: 'advanced',

      tags: [
        'java',
        'thread-dump',
      ],

      content: `
# Thread Dump Analysis

Thread dumps help diagnose:
- deadlocks
- blocked threads
- stuck threads
      `,
    },

    {
      id: 'cpu-profiling-scenario',

      title:
        'CPU Profiling Scenario',

      level: 'advanced',

      tags: [
        'java',
        'profiling',
      ],

      content: `
# CPU Profiling Scenario

Profilers identify methods consuming excessive CPU resources.
      `,
    },

    {
      id: 'memory-profiling-scenario',

      title:
        'Memory Profiling Scenario',

      level: 'advanced',

      tags: [
        'java',
        'profiling',
      ],

      content: `
# Memory Profiling Scenario

Memory profilers analyze heap allocations and object retention.
      `,
    },{
  id: 'production-deployment-failure',

  title:
    '🔥 Production Deployment Failure',

  level: 'advanced',

  tags: [
    'java',
    'deployment',
  ],

  content: `
# Production Deployment Failure

Deployment failures may occur because of:
- config mismatch
- dependency conflicts
- DB migration issues
- environment problems
  `,
},

{
  id: 'blue-green-deployment-scenario',

  title:
    '🔥 Blue Green Deployment Scenario',

  level: 'advanced',

  tags: [
    'java',
    'deployment',
  ],

  content: `
# Blue Green Deployment Scenario

Two production environments used for safer zero-downtime deployments.
  `,
},

{
  id: 'rolling-deployment-scenario',

  title:
    '🔥 Rolling Deployment Scenario',

  level: 'advanced',

  tags: [
    'java',
    'deployment',
  ],

  content: `
# Rolling Deployment Scenario

Application instances updated gradually without full downtime.
  `,
},

{
  id: 'database-migration-failure',

  title:
    '🔥 Database Migration Failure',

  level: 'advanced',

  tags: [
    'java',
    'database',
  ],

  content: `
# Database Migration Failure

Schema migrations may break production compatibility.
  `,
},

{
  id: 'api-backward-compatibility',

  title:
    '🔥 API Backward Compatibility',

  level: 'advanced',

  tags: [
    'java',
    'api',
  ],

      content: `
# API Backward Compatibility

New API versions should not break existing clients.
      `,
},

{
  id: 'feature-flag-scenario',

  title:
    '🔥 Feature Flag Scenario',

  level: 'advanced',

  tags: [
    'java',
    'feature-flag',
  ],

  content: `
# Feature Flag Scenario

Features enabled or disabled dynamically without redeployment.
  `,
},

{
  id: 'logging-failure-scenario',

  title:
    'Logging Failure Scenario',

  level: 'advanced',

  tags: [
    'java',
    'logging',
  ],

  content: `
# Logging Failure Scenario

Improper logging affects debugging and production visibility.
  `,
},

{
  id: 'monitoring-alerting-scenario',

  title:
    '🔥 Monitoring and Alerting Scenario',

  level: 'advanced',

  tags: [
    'java',
    'monitoring',
  ],

  content: `
# Monitoring and Alerting Scenario

Production systems require proactive alerting and observability.
  `,
},

{
  id: 'resilience-scenario',

  title:
    '🔥 Resilience Scenario',

  level: 'advanced',

  tags: [
    'java',
    'resilience',
  ],

  content: `
# Resilience Scenario

Systems should recover gracefully from failures.
  `,
},

{
  id: 'fail-fast-vs-fail-safe',

  title:
    '🔥 Fail Fast vs Fail Safe Scenario',

  level: 'advanced',

  tags: [
    'java',
    'fail-fast',
  ],

  content: `
# Fail Fast vs Fail Safe Scenario

Fail Fast:
- stop immediately on error

Fail Safe:
- continue safely despite failures
  `,
},

{
  id: 'horizontal-scaling-scenario',

  title:
    '🔥 Horizontal Scaling Scenario',

  level: 'advanced',

  tags: [
    'java',
    'scaling',
  ],

  content: `
# Horizontal Scaling Scenario

Application scaled by adding more servers.
  `,
},

{
  id: 'vertical-scaling-scenario',

  title:
    'Vertical Scaling Scenario',

  level: 'advanced',

  tags: [
    'java',
    'scaling',
  ],

  content: `
# Vertical Scaling Scenario

Application scaled by increasing machine resources.
  `,
},

{
  id: 'high-availability-scenario',

  title:
    '🔥 High Availability Scenario',

  level: 'advanced',

  tags: [
    'java',
    'high-availability',
  ],

  content: `
# High Availability Scenario

Systems designed to minimize downtime and service interruption.
  `,
},

{
  id: 'cap-theorem-scenario',

  title:
    '🔥 CAP Theorem Scenario',

  level: 'advanced',

  tags: [
    'java',
    'cap-theorem',
  ],

  content: `
# CAP Theorem Scenario

Distributed systems balance:
- Consistency
- Availability
- Partition Tolerance
  `,
},

{
  id: 'eventual-consistency-scenario',

  title:
    '🔥 Eventual Consistency Scenario',

  level: 'advanced',

  tags: [
    'java',
    'eventual-consistency',
  ],

  content: `
# Eventual Consistency Scenario

Distributed systems become consistent over time eventually.
  `,
},

{
  id: 'distributed-lock-scenario',

  title:
    '🔥 Distributed Lock Scenario',

  level: 'advanced',

  tags: [
    'java',
    'distributed-lock',
  ],

  content: `
# Distributed Lock Scenario

Distributed locks prevent concurrent operations across services.
  `,
},

{
  id: 'optimistic-locking-scenario',

  title:
    '🔥 Optimistic Locking Scenario',

  level: 'advanced',

  tags: [
    'java',
    'optimistic-locking',
  ],

  content: `
# Optimistic Locking Scenario

Uses version checking to detect concurrent modifications.
  `,
},

{
  id: 'pessimistic-locking-scenario',

  title:
    'Pessimistic Locking Scenario',

  level: 'advanced',

  tags: [
    'java',
    'pessimistic-locking',
  ],

  content: `
# Pessimistic Locking Scenario

Locks data immediately preventing concurrent access.
  `,
},

{
  id: 'transaction-isolation-scenario',

  title:
    '🔥 Transaction Isolation Scenario',

  level: 'advanced',

  tags: [
    'java',
    'transaction',
  ],

  content: `
# Transaction Isolation Scenario

Isolation levels control concurrent transaction visibility.
  `,
},

{
  id: 'lost-update-problem',

  title:
    '🔥 Lost Update Problem',

  level: 'advanced',

  tags: [
    'java',
    'transaction',
  ],

  content: `
# Lost Update Problem

Concurrent updates overwrite each other unexpectedly.
  `,
},

{
  id: 'phantom-read-scenario',

  title:
    'Phantom Read Scenario',

  level: 'advanced',

  tags: [
    'java',
    'database',
  ],

  content: `
# Phantom Read Scenario

Repeated queries return newly inserted rows unexpectedly.
  `,
},

{
  id: 'dirty-read-scenario',

  title:
    'Dirty Read Scenario',

  level: 'advanced',

  tags: [
    'java',
    'database',
  ],

  content: `
# Dirty Read Scenario

Transaction reads uncommitted changes from another transaction.
  `,
},

{
  id: 'repeatable-read-scenario',

  title:
    'Repeatable Read Scenario',

  level: 'advanced',

  tags: [
    'java',
    'database',
  ],

  content: `
# Repeatable Read Scenario

Repeated reads return same data within transaction.
  `,
},

{
  id: 'api-versioning-scenario',

  title:
    '🔥 API Versioning Scenario',

  level: 'advanced',

  tags: [
    'java',
    'api-versioning',
  ],

  content: `
# API Versioning Scenario

API versions help maintain backward compatibility.
  `,
},

{
  id: 'dto-mapping-scenario',

  title:
    'DTO Mapping Scenario',

  level: 'advanced',

  tags: [
    'java',
    'dto',
  ],

  content: `
# DTO Mapping Scenario

DTO mapping separates API contracts from database entities.
  `,
},

{
  id: 'dto-vs-entity-exposure',

  title:
    '🔥 DTO vs Entity Exposure',

  level: 'advanced',

  tags: [
    'java',
    'dto',
  ],

  content: `
# DTO vs Entity Exposure

Entities should not exposed directly in APIs.
  `,
},

{
  id: 'secure-api-design-scenario',

  title:
    '🔥 Secure API Design Scenario',

  level: 'advanced',

  tags: [
    'java',
    'security',
  ],

  content: `
# Secure API Design Scenario

Secure APIs require:
- validation
- authentication
- authorization
- encryption
  `,
},

{
  id: 'sql-injection-scenario',

  title:
    '🔥 SQL Injection Scenario',

  level: 'advanced',

  tags: [
    'java',
    'security',
  ],

  content: `
# SQL Injection Scenario

Unvalidated input manipulates SQL queries maliciously.
  `,
},

{
  id: 'xss-security-scenario',

  title:
    '🔥 XSS Security Scenario',

  level: 'advanced',

  tags: [
    'java',
    'xss',
  ],

  content: `
# XSS Security Scenario

Malicious scripts injected into web pages affecting users.
  `,
},

{
  id: 'csrf-scenario',

  title:
    '🔥 CSRF Scenario',

  level: 'advanced',

  tags: [
    'java',
    'csrf',
  ],

  content: `
# CSRF Scenario

Unauthorized requests executed using authenticated user session.
  `,
},

{
  id: 'sensitive-data-leak-scenario',

  title:
    '🔥 Sensitive Data Leak Scenario',

  level: 'advanced',

  tags: [
    'java',
    'security',
  ],

  content: `
# Sensitive Data Leak Scenario

Sensitive production data exposed through logs or APIs.
  `,
},

{
  id: 'production-security-incident',

  title:
    '🔥 Production Security Incident',

  level: 'advanced',

  tags: [
    'java',
    'security',
  ],

  content: `
# Production Security Incident

Security incidents require:
- containment
- investigation
- rollback
- monitoring
  `,
},

{
  id: 'cloud-deployment-scenario',

  title:
    '🔥 Cloud Deployment Scenario',

  level: 'advanced',

  tags: [
    'java',
    'cloud',
  ],

  content: `
# Cloud Deployment Scenario

Applications deployed using scalable cloud infrastructure.
  `,
},

{
  id: 'docker-container-scenario',

  title:
    '🔥 Docker Container Scenario',

  level: 'advanced',

  tags: [
    'java',
    'docker',
  ],

  content: `
# Docker Container Scenario

Applications packaged into portable isolated containers.
  `,
},

{
  id: 'kubernetes-failure-scenario',

  title:
    '🔥 Kubernetes Failure Scenario',

  level: 'advanced',

  tags: [
    'java',
    'kubernetes',
  ],

  content: `
# Kubernetes Failure Scenario

Container orchestration failures impact service availability.
  `,
},

{
  id: 'cicd-pipeline-failure',

  title:
    '🔥 CI/CD Pipeline Failure',

  level: 'advanced',

  tags: [
    'java',
    'cicd',
  ],

  content: `
# CI/CD Pipeline Failure

Deployment automation failures block production releases.
  `,
},{
  id: 'rollback-strategy-scenario',

  title:
    '🔥 Rollback Strategy Scenario',

  level: 'advanced',

  tags: [
    'java',
    'rollback',
  ],

  content: `
# Rollback Strategy Scenario

Rollback strategies restore stable production version after failed deployment.
  `,
},

{
  id: 'zero-downtime-deployment',

  title:
    '🔥 Zero Downtime Deployment',

  level: 'advanced',

  tags: [
    'java',
    'deployment',
  ],

  content: `
# Zero Downtime Deployment

Applications updated without interrupting active users.
  `,
},

{
  id: 'message-ordering-scenario',

  title:
    '🔥 Message Ordering Scenario',

  level: 'advanced',

  tags: [
    'java',
    'messaging',
  ],

  content: `
# Message Ordering Scenario

Distributed systems must preserve event ordering where required.
  `,
},

{
  id: 'duplicate-event-handling',

  title:
    '🔥 Duplicate Event Handling',

  level: 'advanced',

  tags: [
    'java',
    'events',
  ],

  content: `
# Duplicate Event Handling

Consumers should process duplicate events safely using idempotency.
  `,
},

{
  id: 'exactly-once-processing',

  title:
    '🔥 Exactly Once Processing Scenario',

  level: 'advanced',

  tags: [
    'java',
    'kafka',
  ],

  content: `
# Exactly Once Processing Scenario

Systems guarantee event processed exactly once without duplication.
  `,
},

{
  id: 'batch-processing-scenario',

  title:
    'Batch Processing Scenario',

  level: 'advanced',

  tags: [
    'java',
    'batch-processing',
  ],

  content: `
# Batch Processing Scenario

Large datasets processed in scheduled batches efficiently.
  `,
},

{
  id: 'real-time-processing-scenario',

  title:
    '🔥 Real Time Processing Scenario',

  level: 'advanced',

  tags: [
    'java',
    'real-time',
  ],

  content: `
# Real Time Processing Scenario

Systems process incoming events with minimal latency.
  `,
},

{
  id: 'stream-processing-scenario',

  title:
    '🔥 Stream Processing Scenario',

  level: 'advanced',

  tags: [
    'java',
    'stream-processing',
  ],

  content: `
# Stream Processing Scenario

Continuous event streams processed asynchronously at scale.
  `,
},

{
  id: 'api-gateway-failure-scenario',

  title:
    '🔥 API Gateway Failure Scenario',

  level: 'advanced',

  tags: [
    'java',
    'api-gateway',
  ],

  content: `
# API Gateway Failure Scenario

Gateway failures affect routing, authentication, and service communication.
  `,
},

{
  id: 'service-discovery-failure',

  title:
    '🔥 Service Discovery Failure',

  level: 'advanced',

  tags: [
    'java',
    'service-discovery',
  ],

  content: `
# Service Discovery Failure

Services unable to locate other microservices dynamically.
  `,
},

{
  id: 'load-balancer-scenario',

  title:
    '🔥 Load Balancer Scenario',

  level: 'advanced',

  tags: [
    'java',
    'load-balancer',
  ],

  content: `
# Load Balancer Scenario

Traffic distributed across multiple application instances.
  `,
},

{
  id: 'dns-failure-scenario',

  title:
    'DNS Failure Scenario',

  level: 'advanced',

  tags: [
    'java',
    'dns',
  ],

  content: `
# DNS Failure Scenario

DNS resolution failures break service communication.
  `,
},

{
  id: 'network-partition-scenario',

  title:
    '🔥 Network Partition Scenario',

  level: 'advanced',

  tags: [
    'java',
    'network-partition',
  ],

  content: `
# Network Partition Scenario

Distributed systems lose communication between nodes temporarily.
  `,
},

{
  id: 'real-world-system-design-scenario',

  title:
    '🔥 Real World System Design Scenario',

  level: 'advanced',

  tags: [
    'java',
    'system-design',
  ],

  content: `
# Real World System Design Scenario

Interviewers evaluate scalability, resilience, and architecture tradeoffs.
  `,
},

{
  id: 'backend-architecture-discussion',

  title:
    '🔥 Backend Architecture Discussion',

  level: 'advanced',

  tags: [
    'java',
    'architecture',
  ],

  content: `
# Backend Architecture Discussion

Strong backend discussions cover:
- scalability
- resiliency
- observability
- maintainability
  `,
},

{
  id: 'low-level-design-scenario',

  title:
    '🔥 Low Level Design Scenario',

  level: 'advanced',

  tags: [
    'java',
    'lld',
  ],

  content: `
# Low Level Design Scenario

LLD focuses on:
- classes
- relationships
- APIs
- design patterns
  `,
},

{
  id: 'high-level-design-scenario',

  title:
    '🔥 High Level Design Scenario',

  level: 'advanced',

  tags: [
    'java',
    'hld',
  ],

  content: `
# High Level Design Scenario

HLD focuses on:
- distributed systems
- scalability
- architecture
- communication
  `,
},

{
  id: 'scalability-scenario',

  title:
    '🔥 Scalability Scenario',

  level: 'advanced',

  tags: [
    'java',
    'scalability',
  ],

  content: `
# Scalability Scenario

Systems should handle increasing traffic efficiently.
  `,
},

{
  id: 'performance-optimization-scenario',

  title:
    '🔥 Performance Optimization Scenario',

  level: 'advanced',

  tags: [
    'java',
    'performance',
  ],

  content: `
# Performance Optimization Scenario

Optimization areas:
- database
- JVM
- caching
- threading
- network latency
  `,
},

{
  id: 'cost-optimization-scenario',

  title:
    'Cost Optimization Scenario',

  level: 'advanced',

  tags: [
    'java',
    'cost-optimization',
  ],

  content: `
# Cost Optimization Scenario

Cloud infrastructure optimized for performance and operational cost.
  `,
},

{
  id: 'production-best-practices-scenarios',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'best-practice',
  ],

  content: `
# Production Best Practices

- monitoring
- observability
- resiliency
- rollback planning
- automation
- scalability
- security
  `,
},

{
  id: 'hr-technical-mixed-scenarios',

  title:
    '🔥 Common HR + Technical Mixed Scenarios',

  level: 'advanced',

  tags: [
    'java',
    'hr',
  ],

  content: `
# Common HR + Technical Mixed Scenarios

Interviewers evaluate:
- ownership
- communication
- debugging approach
- incident handling
- leadership mindset
  `,
},

{
  id: 'senior-backend-engineer-scenarios',

  title:
    '🔥 Senior Backend Engineer Scenario Questions',

  level: 'advanced',

  tags: [
    'java',
    'senior-backend',
  ],

  content: `
# Senior Backend Engineer Scenario Questions

Senior-level interviews focus on:
- production incidents
- architecture tradeoffs
- scalability
- leadership
- distributed systems
  `,
},

{
  id: 'faang-level-java-scenarios',

  title:
    '🔥🔥 FAANG Level Java Scenarios',

  level: 'advanced',

  tags: [
    'java',
    'faang',
  ],

  content: `
# FAANG Level Java Scenarios

FAANG interviews focus on:
- scalability
- distributed systems
- optimization
- concurrency
- production architecture
- tradeoff analysis
  `,
},

  ],
};