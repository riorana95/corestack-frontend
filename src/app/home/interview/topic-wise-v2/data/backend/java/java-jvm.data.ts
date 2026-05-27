import { DocSection }
from '../../../models/doc.model';

export const JVM_INTERNALS_SECTION:
DocSection = {

  id: 'java-jvm',

  title: 'JVM Internals',

  summary:
    'JVM architecture, memory management, class loading, garbage collection, execution engine, JVM tuning, and production JVM internals.',

  articles: [

    {
      id: 'what-is-jvm',

      title:
        '🔥 What is JVM?',

      level: 'beginner',

      tags: [
        'java',
        'jvm',
      ],

      content: `
# What is JVM?

JVM stands for Java Virtual Machine.

It executes Java bytecode and provides platform independence.

## Responsibilities

- bytecode execution
- memory management
- garbage collection
- thread management

## Interview Summary

JVM enables "write once run anywhere".
      `,
    },

    {
      id: 'jvm-architecture',

      title:
        '🔥 JVM Architecture',

      level: 'beginner',

      tags: [
        'java',
        'jvm-architecture',
      ],

      content: `
# JVM Architecture

Major JVM components:
- ClassLoader
- Runtime Data Areas
- Execution Engine
- Native Interface
- Garbage Collector

## Interview Summary

JVM architecture controls entire Java execution lifecycle.
      `,
    },

    {
      id: 'jdk-jre-jvm-jvm-section',

      title:
        'JDK vs JRE vs JVM',

      level: 'beginner',

      tags: [
        'java',
        'jdk',
        'jre',
        'jvm',
      ],

      content: `
# JDK vs JRE vs JVM

## JVM

Executes bytecode.

## JRE

Provides runtime environment.

## JDK

Provides development tools.
      `,
    },

    {
      id: 'classloader-subsystem',

      title:
        '🔥 ClassLoader Subsystem',

      level: 'intermediate',

      tags: [
        'java',
        'classloader',
      ],

      content: `
# ClassLoader Subsystem

ClassLoader loads classes into JVM memory dynamically.

## Responsibilities

- loading classes
- linking classes
- initialization
      `,
    },

    {
      id: 'class-loading-process',

      title:
        '🔥 Class Loading Process',

      level: 'intermediate',

      tags: [
        'java',
        'class-loading',
      ],

      content: `
# Class Loading Process

Three phases:
- Loading
- Linking
- Initialization
      `,
    },

    {
      id: 'bootstrap-classloader',

      title:
        'Bootstrap ClassLoader',

      level: 'intermediate',

      tags: [
        'java',
        'bootstrap-classloader',
      ],

      content: `
# Bootstrap ClassLoader

Loads core Java classes from rt.jar and JDK libraries.
      `,
    },

    {
      id: 'extension-classloader',

      title:
        'Extension ClassLoader',

      level: 'intermediate',

      tags: [
        'java',
        'extension-classloader',
      ],

      content: `
# Extension ClassLoader

Loads extension libraries from ext directory.
      `,
    },

    {
      id: 'application-classloader',

      title:
        'Application ClassLoader',

      level: 'intermediate',

      tags: [
        'java',
        'application-classloader',
      ],

      content: `
# Application ClassLoader

Loads classes from application classpath.
      `,
    },

    {
      id: 'parent-delegation-model',

      title:
        '🔥 Parent Delegation Model',

      level: 'advanced',

      tags: [
        'java',
        'classloader',
      ],

      content: `
# Parent Delegation Model

Class loading request delegated upward before loading locally.

## Benefits

- avoids duplicate loading
- improves security
      `,
    },

    {
      id: 'runtime-data-area',

      title:
        '🔥 Runtime Data Areas',

      level: 'intermediate',

      tags: [
        'java',
        'memory',
      ],

      content: `
# Runtime Data Areas

JVM memory areas:
- Heap
- Stack
- Method Area
- PC Register
- Native Method Stack
      `,
    },

    {
      id: 'heap-memory',

      title:
        '🔥 Heap Memory',

      level: 'beginner',

      tags: [
        'java',
        'heap',
      ],

      content: `
# Heap Memory

Stores:
- objects
- instance variables

Shared among threads.

Garbage collector mainly works here.
      `,
    },

    {
      id: 'stack-memory',

      title:
        '🔥 Stack Memory',

      level: 'beginner',

      tags: [
        'java',
        'stack',
      ],

      content: `
# Stack Memory

Stores:
- local variables
- method calls
- stack frames

Each thread has separate stack.
      `,
    },

    {
      id: 'method-area',

      title:
        '🔥 Method Area',

      level: 'intermediate',

      tags: [
        'java',
        'method-area',
      ],

      content: `
# Method Area

Stores:
- class metadata
- static variables
- runtime constant pool
      `,
    },

    {
      id: 'metaspace',

      title:
        '🔥 Metaspace',

      level: 'advanced',

      tags: [
        'java',
        'metaspace',
      ],

      content: `
# Metaspace

Java 8 replaced Permanent Generation with Metaspace.

Uses native memory instead of heap.
      `,
    },

    {
      id: 'heap-generations',

      title:
        '🔥 Heap Generations',

      level: 'advanced',

      tags: [
        'java',
        'heap',
      ],

      content: `
# Heap Generations

Heap divided into:
- Young Generation
- Old Generation
      `,
    },

    {
      id: 'young-old-generation',

      title:
        'Young Generation vs Old Generation',

      level: 'advanced',

      tags: [
        'java',
        'gc',
      ],

      content: `
# Young vs Old Generation

## Young Generation

Stores short-lived objects.

## Old Generation

Stores long-lived objects.
      `,
    },

    {
      id: 'eden-survivor-space',

      title:
        'Eden Space vs Survivor Spaces',

      level: 'advanced',

      tags: [
        'java',
        'gc',
      ],

      content: `
# Eden Space vs Survivor Spaces

New objects created in Eden space.

Surviving objects move to Survivor spaces.
      `,
    },

    {
      id: 'object-creation-process',

      title:
        '🔥 Object Creation Process',

      level: 'advanced',

      tags: [
        'java',
        'object',
      ],

      content: `
# Object Creation Process

Steps:
- class loading check
- memory allocation
- initialization
- constructor execution
      `,
    },

    {
      id: 'stack-frame',

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
- method references
      `,
    },

    {
      id: 'execution-engine',

      title:
        '🔥 JVM Execution Engine',

      level: 'advanced',

      tags: [
        'java',
        'execution-engine',
      ],

      content: `
# JVM Execution Engine

Executes bytecode using:
- Interpreter
- JIT Compiler
      `,
    },

    {
      id: 'interpreter-vs-jit',

      title:
        '🔥 Interpreter vs JIT Compiler',

      level: 'advanced',

      tags: [
        'java',
        'jit',
      ],

      content: `
# Interpreter vs JIT

## Interpreter

Executes line by line.

## JIT Compiler

Compiles hot code into native machine code.

## Interview Summary

JIT improves performance significantly.
      `,
    },

    {
      id: 'hotspot-jvm',

      title:
        'HotSpot JVM',

      level: 'advanced',

      tags: [
        'java',
        'hotspot',
      ],

      content: `
# HotSpot JVM

Most widely used JVM implementation optimized for performance.
      `,
    },

    {
      id: 'bytecode',

      title:
        '🔥 Bytecode',

      level: 'beginner',

      tags: [
        'java',
        'bytecode',
      ],

      content: `
# Bytecode

Platform-independent instructions generated by Java compiler.
      `,
    },

    {
      id: 'javac-compiler',

      title:
        'javac Compiler',

      level: 'beginner',

      tags: [
        'java',
        'compiler',
      ],

      content: `
# javac Compiler

Converts .java source files into .class bytecode files.
      `,
    },

    {
      id: 'garbage-collection-basics',

      title:
        '🔥 Garbage Collection Basics',

      level: 'beginner',

      tags: [
        'java',
        'gc',
      ],

      content: `
# Garbage Collection Basics

Garbage collector automatically removes unused objects.

## Benefits

- automatic memory management
- prevents manual deallocation
      `,
    },

    {
      id: 'gc-roots',

      title:
        'GC Roots',

      level: 'advanced',

      tags: [
        'java',
        'gc-roots',
      ],

      content: `
# GC Roots

GC starts reachability analysis from GC Roots.

Examples:
- thread stack references
- static variables
      `,
    },

    {
      id: 'minor-major-full-gc',

      title:
        '🔥 Minor GC vs Major GC vs Full GC',

      level: 'advanced',

      tags: [
        'java',
        'gc',
      ],

      content: `
# Minor vs Major vs Full GC

## Minor GC

Young generation cleanup.

## Major GC

Old generation cleanup.

## Full GC

Entire heap cleanup.

## Interview Summary

Full GC causes heavy pause times.
      `,
    },

    {
      id: 'stop-the-world',

      title:
        '🔥 Stop The World',

      level: 'advanced',

      tags: [
        'java',
        'gc',
      ],

      content: `
# Stop The World

Application threads paused during certain GC operations.
      `,
    },

    {
      id: 'garbage-collectors',

      title:
        '🔥 Garbage Collector Comparison',

      level: 'advanced',

      tags: [
        'java',
        'garbage-collector',
      ],

      content: `
# Garbage Collector Comparison

Major collectors:
- Serial GC
- Parallel GC
- CMS
- G1 GC
- ZGC
- Shenandoah
      `,
    },

    {
      id: 'g1-gc',

      title:
        '🔥 G1 GC',

      level: 'advanced',

      tags: [
        'java',
        'g1gc',
      ],

      content: `
# G1 GC

Garbage First collector designed for low pause times and large heaps.
      `,
    },

    {
      id: 'memory-leak-java',

      title:
        '🔥 Memory Leak in Java',

      level: 'advanced',

      tags: [
        'java',
        'memory-leak',
      ],

      content: `
# Memory Leak in Java

Occurs when unused objects still referenced preventing garbage collection.
      `,
    },

    {
      id: 'outofmemoryerror',

      title:
        '🔥 OutOfMemoryError',

      level: 'advanced',

      tags: [
        'java',
        'outofmemoryerror',
      ],

      content: `
# OutOfMemoryError

Occurs when JVM cannot allocate required memory.
      `,
    },

    {
      id: 'stackoverflowerror',

      title:
        '🔥 StackOverflowError',

      level: 'beginner',

      tags: [
        'java',
        'stackoverflowerror',
      ],

      content: `
# StackOverflowError

Occurs because of excessive recursion causing stack exhaustion.
      `,
    },

    {
      id: 'jvm-parameters',

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

Heap dumps help diagnose:
- memory leaks
- large objects
- GC issues
      `,
    },

    {
      id: 'thread-dump-analysis-jvm',

      title:
        '🔥 Thread Dump Analysis',

      level: 'advanced',

      tags: [
        'java',
        'thread-dump',
      ],

      content: `
# Thread Dump Analysis

Used for diagnosing:
- deadlocks
- blocked threads
- performance bottlenecks
      `,
    },

    {
      id: 'jvm-monitoring-tools',

      title:
        '🔥 JVM Monitoring Tools',

      level: 'advanced',

      tags: [
        'java',
        'monitoring',
      ],

      content: `
# JVM Monitoring Tools

Important tools:
- jstack
- jmap
- jvisualvm
- jconsole
      `,
    },

    {
      id: 'gc-logs',

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
- allocation failures
- memory pressure
      `,
    },

    {
      id: 'jvm-performance-tuning',

      title:
        '🔥 JVM Performance Tuning',

      level: 'advanced',

      tags: [
        'java',
        'performance',
      ],

      content: `
# JVM Performance Tuning

Optimization includes:
- heap sizing
- GC tuning
- reducing pauses
      `,
    },

    {
      id: 'string-pool-internals',

      title:
        '🔥 String Pool Internals',

      level: 'intermediate',

      tags: [
        'java',
        'string-pool',
      ],

      content: `
# String Pool Internals

String literals stored inside String Pool to optimize memory usage.
      `,
    },

    {
      id: 'integer-cache',

      title:
        'Integer Cache',

      level: 'advanced',

      tags: [
        'java',
        'integer-cache',
      ],

      content: `
# Integer Cache

Java caches Integer values between -128 to 127.
      `,
    },

    {
      id: 'reflection-api',

      title:
        '🔥 Reflection API',

      level: 'advanced',

      tags: [
        'java',
        'reflection',
      ],

      content: `
# Reflection API

Reflection allows runtime inspection and modification of classes and methods.
      `,
    },

    {
      id: 'dynamic-proxy',

      title:
        'Dynamic Proxy',

      level: 'advanced',

      tags: [
        'java',
        'proxy',
      ],

      content: `
# Dynamic Proxy

Creates proxy objects dynamically during runtime.
      `,
    },

    {
      id: 'jni-basics',

      title:
        'JNI Basics',

      level: 'advanced',

      tags: [
        'java',
        'jni',
      ],

      content: `
# JNI Basics

JNI allows Java to interact with native code written in C/C++.
      `,
    },

    {
      id: 'synchronization-internals',

      title:
        '🔥 Synchronization Internals',

      level: 'advanced',

      tags: [
        'java',
        'synchronization',
      ],

      content: `
# Synchronization Internals

Synchronization implemented using monitor locks inside JVM.
      `,
    },

    {
      id: 'biased-light-heavy-locking',

      title:
        'Biased vs Lightweight vs Heavyweight Locking',

      level: 'advanced',

      tags: [
        'java',
        'locking',
      ],

      content: `
# Locking Types

## Biased Locking

Optimized for single thread.

## Lightweight Locking

Low contention optimization.

## Heavyweight Locking

Uses OS-level mutex.
      `,
    },

    {
      id: 'production-jvm-monitoring',

      title:
        '🔥 Production JVM Monitoring',

      level: 'advanced',

      tags: [
        'java',
        'production',
      ],

      content: `
# Production JVM Monitoring

Production systems monitor:
- heap usage
- GC pauses
- thread count
- CPU usage
      `,
    },

    {
      id: 'jvm-interview-traps',

      title:
        '🔥🔥 JVM Interview Traps',

      level: 'advanced',

      tags: [
        'java',
        'traps',
      ],

      content: `
# JVM Interview Traps

Common traps:
- heap vs stack confusion
- Full GC misunderstanding
- String Pool behavior
- memory leak assumptions
      `,
    },

    {
      id: 'production-best-practices-jvm',

      title:
        '🔥 Production Best Practices',

      level: 'advanced',

      tags: [
        'java',
        'best-practices',
      ],

      content: `
# Production Best Practices

- monitor GC
- tune heap carefully
- avoid excessive object creation
- analyze thread dumps
- optimize pause times
      `,
    },{
  id: 'jvm-components',

  title:
    'JVM Components',

  level: 'beginner',

  tags: [
    'java',
    'jvm',
  ],

  content: `
# JVM Components

Major JVM components:
- ClassLoader
- Runtime Memory Areas
- Execution Engine
- Garbage Collector
- JNI
  `,
},

{
  id: 'loading-linking-initialization',

  title:
    '🔥 Loading vs Linking vs Initialization',

  level: 'advanced',

  tags: [
    'java',
    'class-loading',
  ],

  content: `
# Loading vs Linking vs Initialization

## Loading

Class bytecode loaded into memory.

## Linking

Verification and preparation.

## Initialization

Static variables initialized.
  `,
},

{
  id: 'custom-classloader',

  title:
    'Custom ClassLoader',

  level: 'advanced',

  tags: [
    'java',
    'classloader',
  ],

  content: `
# Custom ClassLoader

Custom class loaders dynamically load classes during runtime.
  `,
},

{
  id: 'program-counter-register',

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
  id: 'native-method-stack',

  title:
    'Native Method Stack',

  level: 'advanced',

  tags: [
    'java',
    'native-method',
  ],

  content: `
# Native Method Stack

Used for execution of native methods written outside Java.
  `,
},

{
  id: 'jvm-memory-structure',

  title:
    'JVM Memory Structure',

  level: 'intermediate',

  tags: [
    'java',
    'memory',
  ],

  content: `
# JVM Memory Structure

JVM memory divided into:
- Heap
- Stack
- Method Area
- Native Stack
- PC Register
  `,
},

{
  id: 'permanent-generation-vs-metaspace',

  title:
    '🔥 Permanent Generation vs Metaspace',

  level: 'advanced',

  tags: [
    'java',
    'metaspace',
  ],

  content: `
# Permanent Generation vs Metaspace

## Permanent Generation

Part of heap before Java 8.

## Metaspace

Uses native memory after Java 8.
  `,
},

{
  id: 'object-memory-allocation',

  title:
    'Object Memory Allocation',

  level: 'advanced',

  tags: [
    'java',
    'memory-allocation',
  ],

  content: `
# Object Memory Allocation

Objects allocated mainly inside Eden Space of Young Generation.
  `,
},

{
  id: 'method-call-stack',

  title:
    'Method Call Stack',

  level: 'intermediate',

  tags: [
    'java',
    'stack',
  ],

  content: `
# Method Call Stack

Method calls pushed into stack frames during execution.
  `,
},

{
  id: 'local-variable-table',

  title:
    'Local Variables Table',

  level: 'advanced',

  tags: [
    'java',
    'stack-frame',
  ],

  content: `
# Local Variables Table

Stores method local variables inside stack frame.
  `,
},

{
  id: 'operand-stack',

  title:
    'Operand Stack',

  level: 'advanced',

  tags: [
    'java',
    'operand-stack',
  ],

  content: `
# Operand Stack

Temporary workspace used during bytecode execution.
  `,
},

{
  id: 'jit-optimization',

  title:
    '🔥 JIT Optimization',

  level: 'advanced',

  tags: [
    'java',
    'jit',
  ],

  content: `
# JIT Optimization

JIT optimizations:
- method inlining
- loop optimization
- dead code elimination
  `,
},

{
  id: 'java-compilation-process',

  title:
    '🔥 Java Compilation Process',

  level: 'intermediate',

  tags: [
    'java',
    'compiler',
  ],

  content: `
# Java Compilation Process

.java
→ javac
→ .class bytecode
→ JVM execution
  `,
},

{
  id: 'class-file-structure',

  title:
    'Class File Structure',

  level: 'advanced',

  tags: [
    'java',
    'class-file',
  ],

  content: `
# Class File Structure

Contains:
- bytecode
- constant pool
- metadata
- method definitions
  `,
},

{
  id: 'bytecode-execution',

  title:
    'Bytecode Execution',

  level: 'advanced',

  tags: [
    'java',
    'bytecode',
  ],

  content: `
# Bytecode Execution

Execution engine interprets or JIT-compiles bytecode.
  `,
},

{
  id: 'why-garbage-collection',

  title:
    'Why Garbage Collection?',

  level: 'beginner',

  tags: [
    'java',
    'gc',
  ],

  content: `
# Why Garbage Collection?

GC automatically reclaims unused memory reducing manual memory management errors.
  `,
},

{
  id: 'reachability-analysis',

  title:
    'Reachability Analysis',

  level: 'advanced',

  tags: [
    'java',
    'gc',
  ],

  content: `
# Reachability Analysis

GC determines object liveness using object graph traversal from GC roots.
  `,
},

{
  id: 'mark-sweep-compact-copying',

  title:
    '🔥 GC Algorithms',

  level: 'advanced',

  tags: [
    'java',
    'gc-algorithm',
  ],

  content: `
# GC Algorithms

Major algorithms:
- Mark and Sweep
- Mark and Compact
- Copying Algorithm
- Generational Collection
  `,
},

{
  id: 'serial-parallel-cms-zgc',

  title:
    '🔥 Serial GC vs Parallel GC vs CMS vs ZGC',

  level: 'advanced',

  tags: [
    'java',
    'gc',
  ],

  content: `
# GC Types

## Serial GC

Single-threaded GC.

## Parallel GC

High throughput collector.

## CMS

Low pause collector.

## ZGC

Ultra low pause modern collector.
  `,
},

{
  id: 'jstack-tool',

  title:
    'jstack',

  level: 'advanced',

  tags: [
    'java',
    'jstack',
  ],

  content: `
# jstack

Used to generate thread dumps from running JVM.
  `,
},

{
  id: 'jmap-tool',

  title:
    'jmap',

  level: 'advanced',

  tags: [
    'java',
    'jmap',
  ],

  content: `
# jmap

Used for heap dump and memory analysis.
  `,
},

{
  id: 'jvisualvm-tool',

  title:
    'jvisualvm',

  level: 'advanced',

  tags: [
    'java',
    'jvisualvm',
  ],

  content: `
# jvisualvm

Visual JVM monitoring and profiling tool.
  `,
},

{
  id: 'jconsole-tool',

  title:
    'jconsole',

  level: 'advanced',

  tags: [
    'java',
    'jconsole',
  ],

  content: `
# jconsole

JMX-based JVM monitoring tool.
  `,
},

{
  id: 'escape-analysis',

  title:
    'Escape Analysis',

  level: 'advanced',

  tags: [
    'java',
    'escape-analysis',
  ],

  content: `
# Escape Analysis

JVM optimization detecting whether object escapes method/thread scope.
  `,
},

{
  id: 'unsafe-class',

  title:
    'Unsafe Class',

  level: 'advanced',

  tags: [
    'java',
    'unsafe',
  ],

  content: `
# Unsafe Class

Low-level internal JVM operations API used by frameworks and concurrency utilities.
  `,
},

{
  id: 'native-methods',

  title:
    'Native Methods',

  level: 'advanced',

  tags: [
    'java',
    'native-method',
  ],

  content: `
# Native Methods

Methods implemented outside Java using native languages like C/C++.
  `,
},

{
  id: 'jvm-and-multithreading',

  title:
    'JVM and Multithreading',

  level: 'advanced',

  tags: [
    'java',
    'multithreading',
  ],

  content: `
# JVM and Multithreading

JVM manages:
- thread scheduling
- synchronization
- memory visibility
  `,
},

{
  id: 'safepoints',

  title:
    'Safepoints',

  level: 'advanced',

  tags: [
    'java',
    'safepoint',
  ],

  content: `
# Safepoints

JVM pauses threads at safepoints for GC and runtime operations.
  `,
},

  ],
};