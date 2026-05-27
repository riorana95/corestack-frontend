import { DocSection }
from '../../../models/doc.model';

export const DATA_PERSISTENCE_SECTION:
DocSection = {

  id: 'spring-data-persistence',

  title: 'Data & Persistence',

  summary:
    'Spring Data JPA, Hibernate, transactions, entity lifecycle, caching, query optimization, and production database practices for backend interviews.',

  articles: [

    {
      id: 'what-is-orm',

      title:
        '🔥 What is ORM?',

      level: 'beginner',

      tags: [
        'orm',
        'hibernate',
      ],

      content: `
ORM stands for Object Relational Mapping.

ORM maps Java objects to database tables automatically.

Benefits:
- less boilerplate SQL
- object-oriented development
- easier maintenance
      `,
    },

    {
      id: 'what-is-jpa',

      title:
        '🔥 What is JPA?',

      level: 'beginner',

      tags: [
        'jpa',
        'hibernate',
      ],

      content: `
JPA is Java Persistence API specification for ORM.

JPA defines standards while Hibernate provides implementation.
      `,
    },

    {
      id: 'hibernate-overview',

      title:
        '🔥 Hibernate Overview',

      level: 'beginner',

      tags: [
        'hibernate',
        'orm',
      ],

      content: `
Hibernate is most popular JPA implementation.

Provides:
- ORM support
- caching
- dirty checking
- lazy loading
- transaction integration
      `,
    },

    {
      id: 'spring-data-jpa',

      title:
        '🔥 Spring Data JPA',

      level: 'beginner',

      tags: [
        'spring-data-jpa',
        'jpa',
      ],

      content: `
Spring Data JPA simplifies database access using repositories and abstractions.
      `,
    },

    {
      id: 'entity',

      title:
        '🔥 Entity',

      level: 'beginner',

      tags: [
        'jpa',
        'entity',
      ],

      content: `
Entity represents database table in Java application.
      `,
    },

    {
      id: 'entity-annotation',

      title:
        '@Entity',

      level: 'beginner',

      tags: [
        'jpa',
        'entity',
      ],

      content: `
@Entity marks class as persistent database entity.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: '@Entity Example',

          code: `
@Entity
public class User {

    @Id
    private Long id;
}
          `,
        },
      ],
    },

    {
      id: 'table-annotation',

      title:
        '@Table',

      level: 'beginner',

      tags: [
        'jpa',
        'table',
      ],

      content: `
@Table maps entity to specific database table.
      `,
    },

    {
      id: 'primary-key',

      title:
        'Primary Key',

      level: 'beginner',

      tags: [
        'database',
        'primary-key',
      ],

      content: `
Primary key uniquely identifies database record.
      `,
    },

    {
      id: 'id-annotation',

      title:
        '@Id',

      level: 'beginner',

      tags: [
        'jpa',
        'primary-key',
      ],

      content: `
@Id marks entity primary key field.
      `,
    },

    {
      id: 'generated-value',

      title:
        '@GeneratedValue',

      level: 'intermediate',

      tags: [
        'jpa',
        'primary-key',
      ],

      content: `
@GeneratedValue automatically generates primary key values.
      `,
    },

    {
      id: 'entity-lifecycle',

      title:
        '🔥 Entity Lifecycle',

      level: 'advanced',

      tags: [
        'jpa',
        'hibernate',
      ],

      content: `
Entity lifecycle states:
- transient
- persistent
- detached
- removed
      `,
    },

    {
      id: 'persistence-context',

      title:
        '🔥 Persistence Context',

      level: 'advanced',

      tags: [
        'hibernate',
        'persistence-context',
      ],

      content: `
Persistence context manages entity state inside current transaction/session.
      `,
    },

    {
      id: 'hibernate-session',

      title:
        'Hibernate Session',

      level: 'advanced',

      tags: [
        'hibernate',
        'session',
      ],

      content: `
Hibernate Session represents persistence context implementation.
      `,
    },

    {
      id: 'entity-states',

      title:
        'Entity States',

      level: 'advanced',

      tags: [
        'hibernate',
        'entity-state',
      ],

      content: `
Hibernate tracks entity state transitions automatically.
      `,
    },

    {
      id: 'transient-state',

      title:
        'Transient State',

      level: 'advanced',

      tags: [
        'hibernate',
        'entity-state',
      ],

      content: `
Object exists in memory but not associated with persistence context.
      `,
    },

    {
      id: 'persistent-state',

      title:
        'Persistent State',

      level: 'advanced',

      tags: [
        'hibernate',
        'entity-state',
      ],

      content: `
Entity managed by persistence context and synchronized with database.
      `,
    },

    {
      id: 'detached-state',

      title:
        '🔥 Detached State',

      level: 'advanced',

      tags: [
        'hibernate',
        'entity-state',
      ],

      content: `
Entity no longer associated with persistence context.
      `,
    },

    {
      id: 'removed-state',

      title:
        'Removed State',

      level: 'advanced',

      tags: [
        'hibernate',
        'entity-state',
      ],

      content: `
Entity scheduled for deletion from database.
      `,
    },

    {
      id: 'dirty-checking',

      title:
        '🔥 Dirty Checking',

      level: 'advanced',

      tags: [
        'hibernate',
        'dirty-checking',
      ],

      content: `
Hibernate automatically detects entity changes and updates database.
      `,
    },

    {
      id: 'first-level-cache',

      title:
        '🔥 First Level Cache',

      level: 'advanced',

      tags: [
        'hibernate',
        'cache',
      ],

      content: `
First-level cache exists per Hibernate session and enabled by default.
      `,
    },

    {
      id: 'second-level-cache',

      title:
        '🔥 Second Level Cache',

      level: 'advanced',

      tags: [
        'hibernate',
        'cache',
      ],

      content: `
Second-level cache shared across multiple sessions.
      `,
    },

    {
      id: 'lazy-loading',

      title:
        '🔥 Lazy Loading',

      level: 'advanced',

      tags: [
        'hibernate',
        'lazy-loading',
      ],

      content: `
Data loaded only when actually accessed.
      `,
    },

    {
      id: 'eager-loading',

      title:
        'Eager Loading',

      level: 'advanced',

      tags: [
        'hibernate',
        'eager-loading',
      ],

      content: `
Related data fetched immediately with parent entity.
      `,
    },

    {
      id: 'fetchtype-lazy-vs-eager',

      title:
        '🔥 FetchType Lazy vs Eager',

      level: 'advanced',

      tags: [
        'hibernate',
        'fetchtype',
      ],

      content: `
Lazy:
- fetch on demand
- better performance usually

Eager:
- immediate loading
- may create unnecessary queries
      `,
    },

    {
      id: 'onetoone-mapping',

      title:
        'OneToOne Mapping',

      level: 'intermediate',

      tags: [
        'jpa',
        'relationships',
      ],

      content: `
Represents one-to-one relationship between entities.
      `,
    },

    {
      id: 'onetomany-mapping',

      title:
        '🔥 OneToMany Mapping',

      level: 'intermediate',

      tags: [
        'jpa',
        'relationships',
      ],

      content: `
One parent associated with multiple child entities.
      `,
    },

    {
      id: 'manytoone-mapping',

      title:
        '🔥 ManyToOne Mapping',

      level: 'intermediate',

      tags: [
        'jpa',
        'relationships',
      ],

      content: `
Multiple child entities associated with one parent.
      `,
    },

    {
      id: 'manytomany-mapping',

      title:
        'ManyToMany Mapping',

      level: 'advanced',

      tags: [
        'jpa',
        'relationships',
      ],

      content: `
Multiple entities related with multiple entities.
      `,
    },

    {
      id: 'cascade-types',

      title:
        '🔥 Cascade Types',

      level: 'advanced',

      tags: [
        'hibernate',
        'cascade',
      ],

      content: `
Cascade propagates operations from parent entity to child entities.
      `,
    },

    {
      id: 'orphan-removal',

      title:
        'orphanRemoval',

      level: 'advanced',

      tags: [
        'hibernate',
        'relationships',
      ],

      content: `
Automatically removes child entity when removed from relationship collection.
      `,
    },

    {
      id: 'embedded-objects',

      title:
        'Embedded Objects',

      level: 'advanced',

      tags: [
        'jpa',
        'embedded',
      ],

      content: `
Embedded objects group reusable fields inside entity.
      `,
    },

    {
      id: 'inheritance-mapping',

      title:
        'Inheritance Mapping',

      level: 'advanced',

      tags: [
        'hibernate',
        'inheritance',
      ],

      content: `
Hibernate supports inheritance strategies for entity hierarchies.
      `,
    },

    {
      id: 'jpql',

      title:
        '🔥 JPQL',

      level: 'advanced',

      tags: [
        'jpa',
        'query',
      ],

      content: `
JPQL queries entities instead of database tables.
      `,
    },

    {
      id: 'native-query',

      title:
        'Native Query',

      level: 'advanced',

      tags: [
        'sql',
        'hibernate',
      ],

      content: `
Native queries execute raw SQL directly.
      `,
    },{
  id: 'query-methods',

  title:
    '🔥 Query Methods',

  level: 'intermediate',

  tags: [
    'spring-data-jpa',
    'query',
  ],

  content: `
Spring Data JPA automatically generates queries from repository method names.
  `,

  codeBlocks: [
    {
      language: 'java',

      title: 'Query Method Example',

      code: `
List<User> findByEmail(
    String email
);
      `,
    },
  ],
},

{
  id: 'query-annotation',

  title:
    '🔥 @Query',

  level: 'advanced',

  tags: [
    'spring-data-jpa',
    'query',
  ],

  content: `
@Query allows writing custom JPQL or native SQL queries.
  `,
},

{
  id: 'pagination',

  title:
    '🔥 Pagination',

  level: 'intermediate',

  tags: [
    'spring-data-jpa',
    'pagination',
  ],

  content: `
Pagination prevents loading huge datasets into memory.
  `,
},

{
  id: 'sorting',

  title:
    'Sorting',

  level: 'intermediate',

  tags: [
    'spring-data-jpa',
    'sorting',
  ],

  content: `
Sorting retrieves ordered database results.
  `,
},

{
  id: 'specifications',

  title:
    'Specifications',

  level: 'advanced',

  tags: [
    'spring-data-jpa',
    'specifications',
  ],

  content: `
Specifications help create dynamic database queries programmatically.
  `,
},

{
  id: 'criteria-api',

  title:
    'Criteria API',

  level: 'advanced',

  tags: [
    'hibernate',
    'criteria-api',
  ],

  content: `
Criteria API builds type-safe dynamic queries.
  `,
},

{
  id: 'transactions',

  title:
    '🔥 Transactions',

  level: 'advanced',

  tags: [
    'spring',
    'transactions',
  ],

  content: `
Transactions ensure database consistency during multiple operations.
  `,
},

{
  id: 'transactional-annotation',

  title:
    '🔥 @Transactional',

  level: 'advanced',

  tags: [
    'spring',
    'transactions',
  ],

  content: `
@Transactional manages transaction boundaries automatically using proxies.
  `,
},

{
  id: 'transaction-propagation',

  title:
    '🔥 Transaction Propagation',

  level: 'advanced',

  tags: [
    'transactions',
    'propagation',
  ],

  content: `
Propagation controls transaction behavior between nested method calls.
  `,
},

{
  id: 'transaction-isolation',

  title:
    '🔥 Transaction Isolation',

  level: 'advanced',

  tags: [
    'transactions',
    'isolation',
  ],

  content: `
Isolation level controls visibility of transaction changes across concurrent operations.
  `,
},

{
  id: 'acid-properties',

  title:
    '🔥 ACID Properties',

  level: 'intermediate',

  tags: [
    'database',
    'transactions',
  ],

  content: `
ACID:
- Atomicity
- Consistency
- Isolation
- Durability
  `,
},

{
  id: 'rollback-rules',

  title:
    'Rollback Rules',

  level: 'advanced',

  tags: [
    'transactions',
    'rollback',
  ],

  content: `
Spring rolls back transactions automatically for runtime exceptions by default.
  `,
},

{
  id: 'optimistic-locking',

  title:
    '🔥 Optimistic Locking',

  level: 'advanced',

  tags: [
    'locking',
    'transactions',
  ],

  content: `
Optimistic locking uses version checking to detect concurrent updates.
  `,
},

{
  id: 'pessimistic-locking',

  title:
    '🔥 Pessimistic Locking',

  level: 'advanced',

  tags: [
    'locking',
    'transactions',
  ],

  content: `
Pessimistic locking locks database rows immediately during transaction.
  `,
},

{
  id: 'nplus1-query-problem',

  title:
    '🔥 N+1 Query Problem',

  level: 'advanced',

  tags: [
    'hibernate',
    'performance',
  ],

  content: `
N+1 problem occurs when ORM executes excessive additional queries for relationships.
  `,
},

{
  id: 'hibernate-performance-optimization',

  title:
    '🔥 Hibernate Performance Optimization',

  level: 'advanced',

  tags: [
    'hibernate',
    'performance',
  ],

  content: `
Optimization techniques:
- batching
- pagination
- lazy loading
- indexing
- query tuning
  `,
},

{
  id: 'batch-processing',

  title:
    'Batch Processing',

  level: 'advanced',

  tags: [
    'hibernate',
    'batch-processing',
  ],

  content: `
Batch processing improves performance for large bulk operations.
  `,
},

{
  id: 'jdbc-batching',

  title:
    'JDBC Batching',

  level: 'advanced',

  tags: [
    'jdbc',
    'batching',
  ],

  content: `
Multiple SQL operations grouped together to reduce database round trips.
  `,
},

{
  id: 'connection-pooling',

  title:
    '🔥 Connection Pooling',

  level: 'advanced',

  tags: [
    'database',
    'connection-pool',
  ],

  content: `
Connection pooling reuses database connections improving scalability and performance.
  `,
},

{
  id: 'hikaricp',

  title:
    '🔥 HikariCP',

  level: 'advanced',

  tags: [
    'database',
    'hikaricp',
  ],

  content: `
HikariCP is high-performance JDBC connection pool used by Spring Boot by default.
  `,
},

{
  id: 'indexing-basics',

  title:
    '🔥 Indexing Basics',

  level: 'intermediate',

  tags: [
    'database',
    'indexing',
  ],

  content: `
Indexes improve query performance by reducing table scan operations.
  `,
},

{
  id: 'query-optimization',

  title:
    '🔥 Query Optimization',

  level: 'advanced',

  tags: [
    'database',
    'performance',
  ],

  content: `
Query optimization reduces execution time and database resource usage.
  `,
},

{
  id: 'database-migration',

  title:
    'Database Migration',

  level: 'advanced',

  tags: [
    'database',
    'migration',
  ],

  content: `
Database migration tools manage schema changes safely across environments.
  `,
},

{
  id: 'flyway-basics',

  title:
    '🔥 Flyway Basics',

  level: 'intermediate',

  tags: [
    'flyway',
    'database',
  ],

  content: `
Flyway manages version-controlled database schema migrations.
  `,
},

{
  id: 'liquibase-basics',

  title:
    'Liquibase Basics',

  level: 'intermediate',

  tags: [
    'liquibase',
    'database',
  ],

  content: `
Liquibase manages database schema changes using changelog files.
  `,
},

{
  id: 'redis-basics',

  title:
    '🔥 Redis Basics',

  level: 'intermediate',

  tags: [
    'redis',
    'cache',
  ],

  content: `
Redis is in-memory data store commonly used for caching and fast lookups.
  `,
},

{
  id: 'spring-cache',

  title:
    '🔥 Spring Cache',

  level: 'advanced',

  tags: [
    'spring',
    'cache',
  ],

  content: `
Spring Cache abstraction simplifies caching implementation.
  `,
},

{
  id: 'cacheable',

  title:
    '🔥 @Cacheable',

  level: 'advanced',

  tags: [
    'cache',
    'spring-cache',
  ],

  content: `
@Cacheable stores method results in cache automatically.
  `,
},

{
  id: 'cacheevict',

  title:
    '🔥 @CacheEvict',

  level: 'advanced',

  tags: [
    'cache',
    'spring-cache',
  ],

  content: `
@CacheEvict removes outdated cache entries automatically.
  `,
},

{
  id: 'cache-aside-pattern',

  title:
    'Cache Aside Pattern',

  level: 'advanced',

  tags: [
    'cache',
    'design-pattern',
  ],

  content: `
Application checks cache first before querying database.
  `,
},{
  id: 'persistence-layer-best-practices',

  title:
    '🔥 Persistence Layer Best Practices',

  level: 'advanced',

  tags: [
    'hibernate',
    'best-practice',
  ],

  content: `
Best practices:
- use DTOs at API layer
- avoid EAGER fetching
- optimize queries
- use pagination
- keep transactions small
- monitor SQL performance
  `,
},

{
  id: 'common-hibernate-interview-traps',

  title:
    '🔥🔥 Common Hibernate Interview Traps',

  level: 'advanced',

  tags: [
    'hibernate',
    'interview-trap',
  ],

  content: `
Common interview traps:
- lazy vs eager confusion
- detached entity misunderstanding
- transaction proxy confusion
- cascade misuse
- N+1 misunderstanding
- dirty checking confusion
  `,
},

{
  id: 'lazyinitializationexception',

  title:
    '🔥 LazyInitializationException',

  level: 'advanced',

  tags: [
    'hibernate',
    'exception',
  ],

  content: `
Occurs when lazy-loaded entity accessed outside active session or transaction.
  `,
},

{
  id: 'open-session-in-view',

  title:
    '🔥 Open Session in View',

  level: 'advanced',

  tags: [
    'hibernate',
    'osiv',
  ],

  content: `
OSIV keeps Hibernate session open during web request lifecycle.

May simplify lazy loading but can create performance issues.
  `,
},

{
  id: 'production-db-problems',

  title:
    '🔥 Production DB Problems',

  level: 'advanced',

  tags: [
    'database',
    'production',
  ],

  content: `
Common production database issues:
- slow queries
- connection leaks
- deadlocks
- lock contention
- excessive joins
- missing indexes
  `,
},

{
  id: 'real-world-persistence-scenarios',

  title:
    '🔥 Real World Persistence Scenarios',

  level: 'advanced',

  tags: [
    'hibernate',
    'real-world',
  ],

  content: `
Real-world scenarios include:
- debugging N+1 problems
- transaction failures
- optimizing slow APIs
- handling deadlocks
- scaling database workloads
  `,
},

{
  id: 'senior-level-jpa-questions',

  title:
    '🔥🔥 Senior Level JPA Questions',

  level: 'advanced',

  tags: [
    'jpa',
    'senior-interview',
  ],

  content: `
Senior-level interviews focus on:
- persistence context internals
- transaction management
- query optimization
- caching
- ORM performance
- distributed transactions
  `,
},

{
  id: 'hibernate-internal-working',

  title:
    '🔥 Hibernate Internal Working',

  level: 'advanced',

  tags: [
    'hibernate',
    'internals',
  ],

  content: `
Hibernate internally manages:
- persistence context
- dirty checking
- proxies
- SQL generation
- caching
- entity synchronization
  `,
},

{
  id: 'transaction-proxy-internals',

  title:
    '🔥 Transaction Proxy Internals',

  level: 'advanced',

  tags: [
    'spring',
    'transactions',
  ],

  content: `
Spring transaction management works internally using AOP proxies.
  `,
},

{
  id: 'persistence-context-internals',

  title:
    '🔥 Persistence Context Internals',

  level: 'advanced',

  tags: [
    'hibernate',
    'persistence-context',
  ],

  content: `
Persistence context tracks managed entities and synchronizes changes automatically.
  `,
},

{
  id: 'production-best-practices',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'database',
    'production',
  ],

  content: `
Production best practices:
- proper indexing
- optimized queries
- batching
- pagination
- monitoring slow queries
- avoiding unnecessary eager loading
- connection pool tuning
  `,
},

  ],
};