import { DocSection }
from '../../../models/doc.model';

export const JAVA_8_SECTION:
DocSection = {

  id: 'java-java8',

  title: 'Java 8+',

  summary:
    'Java 8 features including Lambda, Stream API, Optional, Functional Interfaces, CompletableFuture, and modern Java programming concepts.',

  articles: [

    {
      id: 'what-is-java8',

      title:
        '🔥 What is Java 8?',

      level: 'beginner',

      tags: [
        'java',
        'java8',
      ],

      content: `
# What is Java 8?

Java 8 introduced major programming improvements.

## Major Features

- Lambda Expressions
- Stream API
- Functional Interfaces
- Optional
- Method References
- CompletableFuture
- New Date API

## Interview Summary

Java 8 introduced functional programming concepts into Java.
      `,
    },

    {
      id: 'lambda-vs-anonymous',

      title:
        '🔥 Lambda vs Anonymous Class',

      level: 'intermediate',

      tags: [
        'java',
        'lambda',
      ],

      content: `
# Lambda vs Anonymous Class

## Lambda

- concise
- functional style
- no separate class generation

## Anonymous Class

- verbose
- creates separate class

## Interview Summary

Lambda improves readability and reduces boilerplate.
      `,
    },

    {
      id: 'intermediate-terminal-operations',

      title:
        'Intermediate vs Terminal Operations',

      level: 'intermediate',

      tags: [
        'java',
        'streams',
      ],

      content: `
# Intermediate vs Terminal Operations

## Intermediate Operations

- map()
- filter()
- sorted()

Return stream.

## Terminal Operations

- collect()
- reduce()
- forEach()

Produce final result.
      `,
    },

    {
      id: 'optional-class',

      title:
        '🔥 Optional Class',

      level: 'beginner',

      tags: [
        'java',
        'optional',
      ],

      content: `
# Optional Class

Optional prevents NullPointerException.

## Common Methods

- isPresent()
- orElse()
- ifPresent()

## Interview Summary

Optional encourages null-safe programming.
      `,
    },

    {
      id: 'predicate-function-consumer',

      title:
        '🔥 Predicate vs Function vs Consumer',

      level: 'intermediate',

      tags: [
        'java',
        'predicate',
      ],

      content: `
# Predicate vs Function vs Consumer

## Predicate

Returns boolean.

## Function

Transforms data.

## Consumer

Consumes data without return value.

## Interview Summary

These are core functional interfaces in Java 8.
      `,
    },

    {
      id: 'streams-vs-collections',

      title:
        '🔥 Streams vs Collections',

      level: 'intermediate',

      tags: [
        'java',
        'streams',
        'collections',
      ],

      content: `
# Streams vs Collections

## Collections

Store data.

## Streams

Process data.

## Interview Summary

Streams do not modify original collections.
      `,
    },

    {
      id: 'parallel-stream',

      title:
        '🔥 Parallel Stream',

      level: 'advanced',

      tags: [
        'java',
        'parallel-stream',
      ],

      content: `
# Parallel Stream

Parallel stream processes data using multiple threads.

## Benefits

- faster large dataset processing

## Drawback

Thread overhead for small tasks.

## Interview Summary

Parallel stream uses ForkJoinPool internally.
      `,
    },

    {
      id: 'date-time-api',

      title:
        '🔥 Date and Time API',

      level: 'beginner',

      tags: [
        'java',
        'date-time',
      ],

      content: `
# Date and Time API

Java 8 introduced modern date-time API.

## Classes

- LocalDate
- LocalTime
- LocalDateTime
- ZonedDateTime

## Benefits

- immutable
- thread safe
- easier API
      `,
    },

    {
      id: 'completablefuture',

      title:
        '🔥 CompletableFuture Basics',

      level: 'advanced',

      tags: [
        'java',
        'completablefuture',
      ],

      content: `
# CompletableFuture

CompletableFuture supports asynchronous programming.

## Benefits

- non-blocking operations
- async chaining
- parallel execution

## Interview Summary

CompletableFuture improves async task management.
      `,
    },

    {
      id: 'findfirst-vs-findany',

      title:
        '🔥 findFirst() vs findAny()',

      level: 'intermediate',

      tags: [
        'java',
        'streams',
      ],

      content: `
# findFirst() vs findAny()

## findFirst()

Returns first element.

## findAny()

Returns any matching element.

Useful in parallel streams.
      `,
    },

    {
      id: 'java8-interview-traps',

      title:
        '🔥🔥 Java 8 Interview Traps',

      level: 'advanced',

      tags: [
        'java',
        'java8',
        'traps',
      ],

      content: `
# Java 8 Interview Traps

Common traps:
- modifying streams
- parallel stream misuse
- Optional misuse
- incorrect reduce()
- stateful operations confusion

## Interview Summary

Java 8 interviews focus heavily on stream internals and functional concepts.
      `,
    },

    {
      id: 'production-best-practices-java8',

      title:
        '🔥 Production Best Practices',

      level: 'advanced',

      tags: [
        'java',
        'production',
      ],

      content: `
# Production Best Practices

- avoid unnecessary parallel streams
- prefer immutability
- use Optional carefully
- avoid heavy stream nesting
- optimize stream pipelines
      `,
    },{
  id: 'default-methods',

  title:
    'Default Methods in Interface',

  level: 'beginner',

  tags: [
    'java',
    'default-method',
  ],

  content: `
# Default Methods in Interface

Java 8 allows method implementation inside interfaces using default keyword.

## Benefits

- backward compatibility
- interface evolution

## Interview Summary

Default methods avoid breaking existing implementations.
  `,
},

{
  id: 'static-methods-interface',

  title:
    'Static Methods in Interface',

  level: 'beginner',

  tags: [
    'java',
    'static-method',
  ],

  content: `
# Static Methods in Interface

Interfaces can contain static methods.

Called using interface name directly.
  `,
},

{
  id: 'unary-binary-operator',

  title:
    'UnaryOperator vs BinaryOperator',

  level: 'intermediate',

  tags: [
    'java',
    'operator',
  ],

  content: `
# UnaryOperator vs BinaryOperator

## UnaryOperator

Accepts one operand.

## BinaryOperator

Accepts two operands of same type.
  `,
},

{
  id: 'sorted-distinct-limit-skip',

  title:
    'sorted() vs distinct() vs limit() vs skip()',

  level: 'beginner',

  tags: [
    'java',
    'streams',
  ],

  content: `
# sorted vs distinct vs limit vs skip

## sorted()

Sorts elements.

## distinct()

Removes duplicates.

## limit()

Limits result size.

## skip()

Skips elements.
  `,
},

{
  id: 'comparator-improvements',

  title:
    'Comparator Improvements in Java 8',

  level: 'intermediate',

  tags: [
    'java',
    'comparator',
  ],

  content: `
# Comparator Improvements in Java 8

Java 8 introduced:
- comparing()
- reversed()
- thenComparing()

Cleaner sorting syntax.
  `,
},

{
  id: 'localdate',

  title:
    'LocalDate',

  level: 'beginner',

  tags: [
    'java',
    'localdate',
  ],

  content: `
# LocalDate

Represents date without time.
  `,
},

{
  id: 'localtime',

  title:
    'LocalTime',

  level: 'beginner',

  tags: [
    'java',
    'localtime',
  ],

  content: `
# LocalTime

Represents time without date.
  `,
},

{
  id: 'localdatetime',

  title:
    'LocalDateTime',

  level: 'beginner',

  tags: [
    'java',
    'localdatetime',
  ],

  content: `
# LocalDateTime

Represents date and time together.
  `,
},

{
  id: 'zoneddatetime',

  title:
    'ZonedDateTime',

  level: 'intermediate',

  tags: [
    'java',
    'zoneddatetime',
  ],

  content: `
# ZonedDateTime

Represents date-time with timezone.
  `,
},

{
  id: 'period-vs-duration',

  title:
    '🔥 Period vs Duration',

  level: 'intermediate',

  tags: [
    'java',
    'date-time',
  ],

  content: `
# Period vs Duration

## Period

Date-based difference.

## Duration

Time-based difference.
  `,
},

{
  id: 'completablefuture-vs-future',

  title:
    '🔥 CompletableFuture vs Future',

  level: 'advanced',

  tags: [
    'java',
    'future',
  ],

  content: `
# CompletableFuture vs Future

## Future

Blocking result retrieval.

## CompletableFuture

Supports:
- async chaining
- callbacks
- non-blocking operations
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
# CompletableFuture Chaining

Supports async workflow chaining using:
- thenApply()
- thenAccept()
- thenCombine()
  `,
},

{
  id: 'forkjoin-framework',

  title:
    'Fork Join Framework',

  level: 'advanced',

  tags: [
    'java',
    'forkjoin',
  ],

  content: `
# Fork Join Framework

Framework for parallel task execution.

Uses:
- divide and conquer
- work stealing algorithm
  `,
},

{
  id: 'spliterator',

  title:
    'Spliterator',

  level: 'advanced',

  tags: [
    'java',
    'spliterator',
  ],

  content: `
# Spliterator

Spliterator supports parallel traversal and partitioning of data.
  `,
},

{
  id: 'type-inference',

  title:
    'Type Inference',

  level: 'beginner',

  tags: [
    'java',
    'type-inference',
  ],

  content: `
# Type Inference

Compiler automatically determines variable types in lambda expressions.
  `,
},

{
  id: 'immutable-data-processing',

  title:
    'Immutable Data Processing',

  level: 'advanced',

  tags: [
    'java',
    'immutable',
  ],

  content: `
# Immutable Data Processing

Streams encourage immutable transformations instead of modifying original collections.
  `,
},

{
  id: 'checked-exception-lambda',

  title:
    'Checked Exceptions in Lambda',

  level: 'advanced',

  tags: [
    'java',
    'lambda',
  ],

  content: `
# Checked Exceptions in Lambda

Functional interfaces generally do not handle checked exceptions directly.

Requires:
- try-catch
- wrapper methods
  `,
},

{
  id: 'real-world-stream-examples',

  title:
    'Real World Stream Examples',

  level: 'intermediate',

  tags: [
    'java',
    'streams',
  ],

  content: `
# Real World Stream Examples

Common uses:
- filtering APIs
- transforming DTOs
- aggregation
- grouping data
  `,
},

{
  id: 'performance-optimization-java8',

  title:
    'Performance Optimization',

  level: 'advanced',

  tags: [
    'java',
    'optimization',
  ],

  content: `
# Performance Optimization

Optimization tips:
- avoid unnecessary streams
- reduce boxing/unboxing
- optimize parallel stream usage
  `,
},

{
  id: 'memory-considerations-java8',

  title:
    'Memory Considerations',

  level: 'advanced',

  tags: [
    'java',
    'memory',
  ],

  content: `
# Memory Considerations

Streams and lambdas may create temporary objects affecting memory usage.
  `,
},

{
  id: 'best-practices-java8',

  title:
    '🔥 Java 8 Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'best-practices',
  ],

  content: `
# Java 8 Best Practices

- prefer immutability
- avoid overusing parallel streams
- keep stream pipelines readable
- use Optional carefully
  `,
},

{
  id: 'production-usage-java8',

  title:
    '🔥 Production Usage of Java 8',

  level: 'advanced',

  tags: [
    'java',
    'production',
  ],

  content: `
# Production Usage of Java 8

Java 8 heavily used in:
- Spring Boot
- microservices
- asynchronous systems
- stream processing pipelines
  `,
},

{
  id: 'common-coding-problems-java8',

  title:
    '🔥 Common Coding Problems using Java 8',

  level: 'intermediate',

  tags: [
    'java',
    'coding',
  ],

  content: `
# Common Coding Problems using Java 8

Frequently asked:
- remove duplicates
- frequency count
- grouping employees
- sorting objects
- flatten nested lists
  `,
},

{
  id: 'java8-architecture-improvements',

  title:
    'Java 8 Architecture Improvements',

  level: 'advanced',

  tags: [
    'java',
    'architecture',
  ],

  content: `
# Java 8 Architecture Improvements

Java 8 improved:
- concurrency
- collection processing
- functional programming
- async execution
  `,
},{
  id: 'features-java8',

  title:
    '🔥 Features Introduced in Java 8',

  level: 'beginner',

  tags: [
    'java',
    'java8',
  ],

  content: `
# Features Introduced in Java 8

Major features:
- Lambda Expressions
- Stream API
- Functional Interfaces
- Optional
- Method References
- CompletableFuture
- New Date API
  `,
},

{
  id: 'functional-interface-annotation',

  title:
    '@FunctionalInterface Annotation',

  level: 'beginner',

  tags: [
    'java',
    'functional-interface',
  ],

  content: `
# @FunctionalInterface Annotation

Indicates interface contains exactly one abstract method.

Compiler throws error if violated.
  `,
},

{
  id: 'types-method-references',

  title:
    'Types of Method References',

  level: 'intermediate',

  tags: [
    'java',
    'method-reference',
  ],

  content: `
# Types of Method References

Types:
- static method reference
- instance method reference
- constructor reference
  `,
},


{
  id: 'optional-vs-null',

  title:
    '🔥 Optional vs Null',

  level: 'intermediate',

  tags: [
    'java',
    'optional',
  ],

  content: `
# Optional vs Null

## Null

Causes NullPointerException risk.

## Optional

Provides safer null handling.
  `,
},

{
  id: 'optional-methods',

  title:
    'Optional Methods',

  level: 'intermediate',

  tags: [
    'java',
    'optional',
  ],

  content: `
# Optional Methods

Common methods:
- isPresent()
- orElse()
- orElseGet()
- ifPresent()
  `,
},

{
  id: 'sequential-vs-parallel-stream',

  title:
    '🔥 Sequential vs Parallel Stream',

  level: 'advanced',

  tags: [
    'java',
    'parallel-stream',
  ],

  content: `
# Sequential vs Parallel Stream

## Sequential Stream

Single-threaded processing.

## Parallel Stream

Multi-threaded processing.
  `,
},



{
  id: 'nashorn-engine',

  title:
    'Nashorn JavaScript Engine',

  level: 'advanced',

  tags: [
    'java',
    'nashorn',
  ],

  content: `
# Nashorn JavaScript Engine

Java 8 introduced Nashorn engine for executing JavaScript inside JVM.
  `,
},

{
  id: 'completablefuture-methods',

  title:
    'CompletableFuture Methods',

  level: 'advanced',

  tags: [
    'java',
    'completablefuture',
  ],

  content: `
# CompletableFuture Methods

Important methods:
- thenApply()
- thenAccept()
- thenCombine()
- exceptionally()
  `,
},

{
  id: 'completablefuture-async',

  title:
    'CompletableFuture Async Processing',

  level: 'advanced',

  tags: [
    'java',
    'async',
  ],

  content: `
# CompletableFuture Async Processing

Supports asynchronous non-blocking execution using separate threads.
  `,
},

{
  id: 'completablefuture-interview',

  title:
    '🔥 CompletableFuture Interview Questions',

  level: 'advanced',

  tags: [
    'java',
    'interview',
  ],

  content: `
# CompletableFuture Interview Questions

Frequently asked:
- Future vs CompletableFuture
- async chaining
- exception handling
- non-blocking execution
  `,
},

  ],
};