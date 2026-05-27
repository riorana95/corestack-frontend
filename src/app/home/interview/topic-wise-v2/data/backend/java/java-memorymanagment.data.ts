import { DocSection }
from '../../../models/doc.model';

export const JAVA_MEMORY_MANAGEMENT_SECTION:
DocSection = {

  id: 'java-memorymanagment',

  title: 'Memory Management',

  summary:
    'Java Memory Management including heap, stack, garbage collection, memory leaks, JVM tuning, and production memory optimization.',

  articles: [

    {
      id: 'what-is-memory-management',

      title:
        '🔥 What is Memory Management?',

      level: 'beginner',

      tags: [
        'java',
        'memory-management',
      ],

      content: `
# What is Memory Management?

Memory management controls allocation and deallocation of memory during application execution.

## Responsibilities

- object allocation
- garbage collection
- memory optimization
- leak prevention

## Interview Summary

Java performs automatic memory management using JVM and Garbage Collector.
      `,
    },

    {
      id: 'why-memory-management',

      title:
        '🔥 Why Memory Management Important?',

      level: 'beginner',

      tags: [
        'java',
        'memory',
      ],

      content: `
# Why Memory Management Important?

Efficient memory management improves:
- performance
- scalability
- stability
- resource utilization
      `,
    },

    {
      id: 'jvm-memory-structure-mm',

      title:
        '🔥 JVM Memory Structure',

      level: 'beginner',

      tags: [
        'java',
        'jvm-memory',
      ],

      content: `
# JVM Memory Structure

Major memory areas:
- Heap
- Stack
- Method Area
- Metaspace
- PC Register
- Native Method Stack
      `,
    },

    {
      id: 'pc-register',

      title:
        'Program Counter Register',

      level: 'advanced',

      tags: [
        'java',
        'pc-register',
      ],

      content: `
# Program Counter Register

Stores address of currently executing JVM instruction.
      `,
    },

    {
      id: 'native-method-stack-mm',

      title:
        'Native Method Stack',

      level: 'advanced',

      tags: [
        'java',
        'native-stack',
      ],

      content: `
# Native Method Stack

Supports execution of native methods written in C/C++.
      `,
    },

    {
      id: 'heap-vs-stack-mm',

      title:
        '🔥 Heap vs Stack',

      level: 'beginner',

      tags: [
        'java',
        'heap',
        'stack',
      ],

      content: `
# Heap vs Stack

## Heap

Shared memory for objects.

## Stack

Thread-specific memory for method execution.

## Interview Summary

Heap stores objects while stack stores execution context.
      `,
    },

    {
      id: 'object-creation-process-mm',

      title:
        '🔥 Object Creation Process',

      level: 'intermediate',

      tags: [
        'java',
        'object',
      ],

      content: `
# Object Creation Process

Steps:
- class loading
- memory allocation
- initialization
- constructor execution
      `,
    },

    {
      id: 'object-memory-allocation-mm',

      title:
        'Object Memory Allocation',

      level: 'advanced',

      tags: [
        'java',
        'allocation',
      ],

      content: `
# Object Memory Allocation

Objects usually allocated inside Eden Space of Young Generation.
      `,
    },

    {
      id: 'stack-frame-mm',

      title:
        'Stack Frame',

      level: 'intermediate',

      tags: [
        'java',
        'stack-frame',
      ],

      content: `
# Stack Frame

Each method call creates stack frame containing:
- local variables
- operand stack
- return data
      `,
    },

    {
      id: 'local-variables-table-mm',

      title:
        'Local Variables Table',

      level: 'advanced',

      tags: [
        'java',
        'local-variable',
      ],

      content: `
# Local Variables Table

Stores method local variables inside stack frame.
      `,
    },

    {
      id: 'operand-stack-mm',

      title:
        'Operand Stack',

      level: 'advanced',

      tags: [
        'java',
        'operand-stack',
      ],

      content: `
# Operand Stack

Temporary runtime workspace used during bytecode execution.
      `,
    },

    {
      id: 'object-references',

      title:
        '🔥 Object References',

      level: 'beginner',

      tags: [
        'java',
        'reference',
      ],

      content: `
# Object References

Reference variables store memory addresses of objects instead of actual objects.
      `,
    },

    {
      id: 'strong-references',

      title:
        'Strong References',

      level: 'intermediate',

      tags: [
        'java',
        'reference',
      ],

      content: `
# Strong References

Normal references preventing garbage collection.
      `,
    },

    {
      id: 'weak-references',

      title:
        'Weak References',

      level: 'advanced',

      tags: [
        'java',
        'weak-reference',
      ],

      content: `
# Weak References

Objects eligible for GC when only weak references remain.
      `,
    },

    {
      id: 'soft-references',

      title:
        'Soft References',

      level: 'advanced',

      tags: [
        'java',
        'soft-reference',
      ],

      content: `
# Soft References

Collected only when JVM memory becomes low.
      `,
    },

    {
      id: 'phantom-references',

      title:
        'Phantom References',

      level: 'advanced',

      tags: [
        'java',
        'phantom-reference',
      ],

      content: `
# Phantom References

Used mainly for advanced memory cleanup tracking.
      `,
    },

    {
      id: 'garbage-collection-basics-mm',

      title:
        '🔥 Garbage Collection Basics',

      level: 'beginner',

      tags: [
        'java',
        'gc',
      ],

      content: `
# Garbage Collection Basics

Garbage collector automatically removes unused objects from memory.
      `,
    },

    {
      id: 'why-gc',

      title:
        'Why Garbage Collection?',

      level: 'beginner',

      tags: [
        'java',
        'gc',
      ],

      content: `
# Why Garbage Collection?

GC reduces:
- memory leaks
- manual memory management errors
- dangling pointers
      `,
    },


    {
      id: 'eden-survivor-mm',

      title:
        'Eden Space vs Survivor Spaces',

      level: 'advanced',

      tags: [
        'java',
        'eden',
      ],

      content: `
# Eden vs Survivor Spaces

Objects created in Eden Space.

Surviving objects moved to Survivor spaces.
      `,
    },

    {
      id: 'garbage-collectors-mm',

      title:
        '🔥 Garbage Collector Comparison',

      level: 'advanced',

      tags: [
        'java',
        'garbage-collector',
      ],

      content: `
# Garbage Collector Comparison

Collectors:
- Serial GC
- Parallel GC
- CMS
- G1
- ZGC
- Shenandoah
      `,
    },

    {
      id: 'memory-leak-mm',

      title:
        '🔥 Memory Leak',

      level: 'advanced',

      tags: [
        'java',
        'memory-leak',
      ],

      content: `
# Memory Leak

Occurs when unused objects still referenced preventing garbage collection.
      `,
    },

    {
      id: 'outofmemoryerror-mm',

      title:
        '🔥 OutOfMemoryError',

      level: 'advanced',

      tags: [
        'java',
        'oom',
      ],

      content: `
# OutOfMemoryError

Occurs when JVM cannot allocate required memory.
      `,
    },

    {
      id: 'stackoverflowerror-mm',

      title:
        '🔥 StackOverflowError',

      level: 'beginner',

      tags: [
        'java',
        'stackoverflow',
      ],

      content: `
# StackOverflowError

Occurs due to excessive recursion causing stack exhaustion.
      `,
    },

    {
      id: 'java-memory-model-mm',

      title:
        '🔥 Java Memory Model',

      level: 'advanced',

      tags: [
        'java',
        'jmm',
      ],

      content: `
# Java Memory Model

Defines visibility and ordering guarantees between threads.
      `,
    },

    {
      id: 'memory-visibility-mm',

      title:
        '🔥 Memory Visibility',

      level: 'advanced',

      tags: [
        'java',
        'memory-visibility',
      ],

      content: `
# Memory Visibility

Changes made by one thread may not visible immediately to another thread.
      `,
    },

    {
      id: 'volatile-keyword-mm',

      title:
        '🔥 volatile Keyword',

      level: 'advanced',

      tags: [
        'java',
        'volatile',
      ],

      content: `
# volatile Keyword

Ensures latest variable value visible across threads.
      `,
    },

    {
      id: 'atomic-operations-mm',

      title:
        'Atomic Operations',

      level: 'advanced',

      tags: [
        'java',
        'atomic',
      ],

      content: `
# Atomic Operations

Atomic operations execute completely without interruption.
      `,
    },

    {
      id: 'cas-mm',

      title:
        '🔥 CAS (Compare And Swap)',

      level: 'advanced',

      tags: [
        'java',
        'cas',
      ],

      content: `
# CAS (Compare And Swap)

Lock-free atomic operation heavily used in concurrent programming.
      `,
    },

    {
      id: 'escape-analysis-mm',

      title:
        'Escape Analysis',

      level: 'advanced',

      tags: [
        'java',
        'escape-analysis',
      ],

      content: `
# Escape Analysis

JVM optimization checking whether object escapes method or thread scope.
      `,
    },{
  id: 'happens-before-mm',

  title:
    '🔥 Happens Before Relationship',

  level: 'advanced',

  tags: [
    'java',
    'happens-before',
  ],

  content: `
# Happens Before Relationship

Defines memory visibility ordering guarantees between threads.

Used heavily in concurrency and synchronization.
  `,
},

{
  id: 'tlab-mm',

  title:
    'TLAB (Thread Local Allocation Buffer)',

  level: 'advanced',

  tags: [
    'java',
    'tlab',
  ],

  content: `
# TLAB (Thread Local Allocation Buffer)

JVM allocates small private memory region per thread for faster object allocation.
  `,
},

{
  id: 'object-promotion-mm',

  title:
    'Object Promotion',

  level: 'advanced',

  tags: [
    'java',
    'gc',
  ],

  content: `
# Object Promotion

Long-living objects promoted from Young Generation to Old Generation.
  `,
},

{
  id: 'allocation-failure-mm',

  title:
    'Allocation Failure',

  level: 'advanced',

  tags: [
    'java',
    'allocation',
  ],

  content: `
# Allocation Failure

Occurs when JVM cannot allocate memory for new objects.

May trigger garbage collection.
  `,
},

{
  id: 'memory-fragmentation-mm',

  title:
    '🔥 Memory Fragmentation',

  level: 'advanced',

  tags: [
    'java',
    'fragmentation',
  ],

  content: `
# Memory Fragmentation

Free memory becomes scattered into small unusable blocks.

Can reduce allocation efficiency.
  `,
},

{
  id: 'serial-gc-mm',

  title:
    'Serial Garbage Collector',

  level: 'advanced',

  tags: [
    'java',
    'serial-gc',
  ],

  content: `
# Serial Garbage Collector

Single-threaded garbage collector suitable for small applications.
  `,
},

{
  id: 'parallel-gc-mm',

  title:
    'Parallel Garbage Collector',

  level: 'advanced',

  tags: [
    'java',
    'parallel-gc',
  ],

  content: `
# Parallel Garbage Collector

Uses multiple threads for garbage collection improving throughput.
  `,
},

{
  id: 'cms-gc-mm',

  title:
    'CMS Garbage Collector',

  level: 'advanced',

  tags: [
    'java',
    'cms-gc',
  ],

  content: `
# CMS Garbage Collector

Concurrent Mark Sweep collector designed for low pause times.
  `,
},

{
  id: 'production-memory-monitoring-mm',

  title:
    '🔥 Production Memory Monitoring',

  level: 'advanced',

  tags: [
    'java',
    'monitoring',
  ],

  content: `
# Production Memory Monitoring

Monitor:
- heap usage
- GC pauses
- allocation rate
- memory leaks
  `,
},

{
  id: 'heap-dump-analysis-mm',

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
  id: 'memory-tuning-basics-mm',

  title:
    '🔥 Memory Tuning Basics',

  level: 'advanced',

  tags: [
    'java',
    'memory-tuning',
  ],

  content: `
# Memory Tuning Basics

Optimization includes:
- heap sizing
- GC tuning
- reducing object allocation
  `,
},

{
  id: 'jvm-parameters-mm',

  title:
    '🔥 JVM Parameters',

  level: 'advanced',

  tags: [
    'java',
    'jvm-params',
  ],

  content: `
# JVM Parameters

Examples:
- -Xms
- -Xmx
- -XX:+UseG1GC
  `,
},

{
  id: 'gc-logs-mm',

  title:
    '🔥 GC Logs',

  level: 'advanced',

  tags: [
    'java',
    'gc-logs',
  ],

  content: `
# GC Logs

GC logs help analyze:
- pause times
- Full GC frequency
- memory pressure
  `,
},

{
  id: 'memory-optimization-mm',

  title:
    '🔥 Memory Optimization',

  level: 'advanced',

  tags: [
    'java',
    'optimization',
  ],

  content: `
# Memory Optimization

Optimization techniques:
- object reuse
- reducing allocations
- efficient collections
  `,
},

{
  id: 'string-pool-mm',

  title:
    '🔥 String Pool Internals',

  level: 'advanced',

  tags: [
    'java',
    'string-pool',
  ],

  content: `
# String Pool Internals

String literals stored inside shared pool to reduce memory usage.
  `,
},

{
  id: 'integer-cache-mm',

  title:
    'Integer Cache',

  level: 'advanced',

  tags: [
    'java',
    'integer-cache',
  ],

  content: `
# Integer Cache

Java caches Integer values from -128 to 127.
  `,
},

{
  id: 'direct-memory-mm',

  title:
    'Direct Memory',

  level: 'advanced',

  tags: [
    'java',
    'direct-memory',
  ],

  content: `
# Direct Memory

Memory allocated outside heap using native memory.
  `,
},

{
  id: 'offheap-memory-mm',

  title:
    'Off Heap Memory',

  level: 'advanced',

  tags: [
    'java',
    'offheap',
  ],

  content: `
# Off Heap Memory

Memory allocated outside JVM heap improving certain high-performance workloads.
  `,
},

{
  id: 'native-memory-tracking-mm',

  title:
    'Native Memory Tracking',

  level: 'advanced',

  tags: [
    'java',
    'native-memory',
  ],

  content: `
# Native Memory Tracking

Tracks native memory usage inside JVM.
  `,
},

{
  id: 'memory-barriers-mm',

  title:
    'Memory Barriers',

  level: 'advanced',

  tags: [
    'java',
    'memory-barrier',
  ],

  content: `
# Memory Barriers

CPU/JVM instructions ensuring memory visibility ordering.
  `,
},

{
  id: 'reference-queues-mm',

  title:
    'Reference Queues',

  level: 'advanced',

  tags: [
    'java',
    'reference-queue',
  ],

  content: `
# Reference Queues

Used with weak/phantom references for advanced cleanup processing.
  `,
},

{
  id: 'finalization-mm',

  title:
    'Finalization',

  level: 'advanced',

  tags: [
    'java',
    'finalization',
  ],

  content: `
# Finalization

finalize() method called before garbage collection.

Deprecated due to unpredictability.
  `,
},

{
  id: 'cleaner-api-mm',

  title:
    'Cleaner API',

  level: 'advanced',

  tags: [
    'java',
    'cleaner-api',
  ],

  content: `
# Cleaner API

Modern alternative to finalize() for resource cleanup.
  `,
},

{
  id: 'memory-leak-patterns-mm',

  title:
    '🔥 Common Memory Leak Patterns',

  level: 'advanced',

  tags: [
    'java',
    'memory-leak',
  ],

  content: `
# Common Memory Leak Patterns

Examples:
- static collections
- unclosed resources
- listener leaks
- ThreadLocal misuse
  `,
},

{
  id: 'threadlocal-memory-leak-mm',

  title:
    '🔥 ThreadLocal Memory Leak',

  level: 'advanced',

  tags: [
    'java',
    'threadlocal',
  ],

  content: `
# ThreadLocal Memory Leak

Improper cleanup of ThreadLocal may cause memory leaks in thread pools.
  `,
},

{
  id: 'memory-pressure-mm',

  title:
    'Memory Pressure',

  level: 'advanced',

  tags: [
    'java',
    'memory-pressure',
  ],

  content: `
# Memory Pressure

Occurs when allocation demand approaches available memory capacity.
  `,
},

{
  id: 'gc-pause-time-mm',

  title:
    '🔥 GC Pause Time',

  level: 'advanced',

  tags: [
    'java',
    'gc',
  ],

  content: `
# GC Pause Time

Time during which application threads paused for garbage collection.
  `,
},

{
  id: 'throughput-vs-latency-mm',

  title:
    '🔥 Throughput vs Latency',

  level: 'advanced',

  tags: [
    'java',
    'performance',
  ],

  content: `
# Throughput vs Latency

## Throughput

Total work completed.

## Latency

Response delay for individual requests.
  `,
},

{
  id: 'gc-tuning-strategy-mm',

  title:
    '🔥 GC Tuning Strategy',

  level: 'advanced',

  tags: [
    'java',
    'gc-tuning',
  ],

  content: `
# GC Tuning Strategy

Optimization depends on:
- heap size
- workload
- latency goals
- allocation patterns
  `,
},

{
  id: 'production-best-practices-mm',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'production',
  ],

  content: `
# Production Best Practices

- monitor GC regularly
- avoid excessive object creation
- analyze heap dumps
- optimize allocation rate
- tune heap carefully
  `,
},

{
  id: 'memory-management-interview-traps-mm',

  title:
    '🔥🔥 Memory Management Interview Traps',

  level: 'advanced',

  tags: [
    'java',
    'traps',
  ],

  content: `
# Memory Management Interview Traps

Common traps:
- heap vs stack confusion
- assuming GC prevents all leaks
- misunderstanding Full GC
- ThreadLocal leaks
- String Pool assumptions
  `,
},

  ],
};