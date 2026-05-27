import { DocSection }
from '../../../models/doc.model';

export const JAVA_EXCEPTION_SECTION:
DocSection = {

  id: 'java-exception',

  title: 'Exception Handling',

  summary:
    'Java Exception Handling including checked exceptions, runtime exceptions, custom exceptions, Spring Boot handling, and production best practices.',

  articles: [

    {
      id: 'what-is-exception-handling',

      title:
        '🔥 What is Exception Handling?',

      level: 'beginner',

      tags: [
        'java',
        'exception',
      ],

      content: `
# What is Exception Handling?

Exception handling manages runtime problems gracefully without crashing application.

## Benefits

- prevents abrupt termination
- improves stability
- improves debugging
- improves maintainability

## Interview Summary

Exception handling separates normal flow from error flow.
      `,
    },

    {
      id: 'why-exception-handling',

      title:
        'Why Exception Handling?',

      level: 'beginner',

      tags: [
        'java',
        'exception',
      ],

      content: `
# Why Exception Handling?

Applications may fail because of:
- invalid input
- file issues
- database failure
- network failure

Exception handling allows controlled recovery.
      `,
    },

    {
      id: 'exception-vs-error',

      title:
        '🔥 Exception vs Error',

      level: 'beginner',

      tags: [
        'java',
        'error',
      ],

      content: `
# Exception vs Error

## Exception

Recoverable issue.

Examples:
- IOException
- SQLException

## Error

Serious JVM issue.

Examples:
- OutOfMemoryError
- StackOverflowError

## Interview Summary

Exceptions can usually be handled.

Errors generally should not be handled.
      `,
    },

    {
      id: 'checked-vs-unchecked',

      title:
        '🔥 Checked vs Unchecked Exception',

      level: 'beginner',

      tags: [
        'java',
        'checked-exception',
      ],

      content: `
# Checked vs Unchecked Exception

## Checked Exception

Checked during compilation.

Examples:
- IOException
- SQLException

## Unchecked Exception

Occurs during runtime.

Examples:
- NullPointerException
- ArithmeticException

## Interview Summary

Checked exceptions require handling at compile time.
      `,
    },

    {
      id: 'compile-runtime-exception',

      title:
        'Compile Time vs Runtime Exception',

      level: 'beginner',

      tags: [
        'java',
        'runtime-exception',
      ],

      content: `
# Compile Time vs Runtime Exception

## Compile Time

Detected by compiler.

## Runtime

Occurs during execution.
      `,
    },

    {
      id: 'try-catch-finally',

      title:
        '🔥 try-catch-finally',

      level: 'beginner',

      tags: [
        'java',
        'try-catch',
      ],

      content: `
# try-catch-finally

## try

Contains risky code.

## catch

Handles exception.

## finally

Executes cleanup logic.

## Interview Summary

finally usually executes whether exception occurs or not.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'try-catch-finally Example',

          code: `
try {

  int x = 10 / 0;

} catch(Exception e) {

  System.out.println(e);

} finally {

  System.out.println("Cleanup");
}
          `,
        },
      ],
    },

    {
      id: 'throw-keyword',

      title:
        '🔥 throw Keyword',

      level: 'beginner',

      tags: [
        'java',
        'throw',
      ],

      content: `
# throw Keyword

Used to manually throw exception.

## Interview Summary

throw creates exception explicitly.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'throw Example',

          code: `
throw new RuntimeException("Error");
          `,
        },
      ],
    },

    {
      id: 'throws-keyword',

      title:
        '🔥 throws Keyword',

      level: 'beginner',

      tags: [
        'java',
        'throws',
      ],

      content: `
# throws Keyword

Declares exceptions that method may throw.

## Interview Summary

throws delegates exception handling responsibility.
      `,
    },

    {
      id: 'throw-vs-throws',

      title:
        '🔥 throw vs throws',

      level: 'beginner',

      tags: [
        'java',
        'throw',
        'throws',
      ],

      content: `
# throw vs throws

## throw

Actually throws exception.

## throws

Declares possible exceptions.

## Interview Summary

throw → action

throws → declaration
      `,
    },

    {
      id: 'multiple-catch',

      title:
        'Multiple catch Blocks',

      level: 'beginner',

      tags: [
        'java',
        'catch',
      ],

      content: `
# Multiple catch Blocks

Java supports multiple catch blocks for different exception types.

More specific exceptions should come first.
      `,
    },

    {
      id: 'nested-try-catch',

      title:
        'Nested try-catch',

      level: 'intermediate',

      tags: [
        'java',
        'nested-try',
      ],

      content: `
# Nested try-catch

try-catch blocks can exist inside another try block.
      `,
    },

    {
      id: 'final-finally-finalize-exception',

      title:
        '🔥 final vs finally vs finalize',

      level: 'beginner',

      tags: [
        'java',
        'finally',
      ],

      content: `
# final vs finally vs finalize

## final

Keyword.

## finally

Exception cleanup block.

## finalize

Garbage collection method.
      `,
    },

    {
      id: 'custom-exception',

      title:
        '🔥 Custom Exception',

      level: 'intermediate',

      tags: [
        'java',
        'custom-exception',
      ],

      content: `
# Custom Exception

Custom exceptions represent business-specific problems.

## Benefits

- better readability
- better domain modeling
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Custom Exception Example',

          code: `
class InvalidAgeException
extends Exception {

}
          `,
        },
      ],
    },

    {
      id: 'exception-propagation',

      title:
        '🔥 Exception Propagation',

      level: 'intermediate',

      tags: [
        'java',
        'propagation',
      ],

      content: `
# Exception Propagation

Unhandled exception moves upward through method call stack.

## Interview Summary

Propagation continues until handled.
      `,
    },

    {
      id: 'exception-hierarchy',

      title:
        '🔥 Exception Hierarchy',

      level: 'intermediate',

      tags: [
        'java',
        'hierarchy',
      ],

      content: `
# Exception Hierarchy

Hierarchy:

Throwable
→ Error
→ Exception
→ RuntimeException

## Interview Summary

All exceptions inherit Throwable.
      `,
    },

    {
      id: 'nullpointerexception',

      title:
        '🔥 NullPointerException',

      level: 'beginner',

      tags: [
        'java',
        'nullpointerexception',
      ],

      content: `
# NullPointerException

Occurs when method accessed on null reference.

## Prevention

- null checks
- Optional usage
      `,
    },

    {
      id: 'arithmetic-exception',

      title:
        'ArithmeticException',

      level: 'beginner',

      tags: [
        'java',
        'arithmeticexception',
      ],

      content: `
# ArithmeticException

Occurs during illegal arithmetic operations.

Example:
division by zero.
      `,
    },

    {
      id: 'arrayindexoutofbounds',

      title:
        'ArrayIndexOutOfBoundsException',

      level: 'beginner',

      tags: [
        'java',
        'arrayindexoutofbounds',
      ],

      content: `
# ArrayIndexOutOfBoundsException

Occurs when accessing invalid array index.
      `,
    },

    {
      id: 'classcastexception',

      title:
        'ClassCastException',

      level: 'beginner',

      tags: [
        'java',
        'classcastexception',
      ],

      content: `
# ClassCastException

Occurs during invalid type casting.
      `,
    },

    {
      id: 'numberformatexception',

      title:
        'NumberFormatException',

      level: 'beginner',

      tags: [
        'java',
        'numberformatexception',
      ],

      content: `
# NumberFormatException

Occurs when invalid string converted into number.
      `,
    },

    {
      id: 'ioexception',

      title:
        'IOException',

      level: 'beginner',

      tags: [
        'java',
        'ioexception',
      ],

      content: `
# IOException

Occurs during file or input-output operations.
      `,
    },

    {
      id: 'filenotfoundexception',

      title:
        'FileNotFoundException',

      level: 'beginner',

      tags: [
        'java',
        'filenotfound',
      ],

      content: `
# FileNotFoundException

Occurs when requested file missing.
      `,
    },

    {
      id: 'sql-exception',

      title:
        'SQLException',

      level: 'beginner',

      tags: [
        'java',
        'sqlexception',
      ],

      content: `
# SQLException

Occurs during database access issues.
      `,
    },

    {
      id: 'try-with-resources',

      title:
        '🔥 try-with-resources',

      level: 'intermediate',

      tags: [
        'java',
        'resources',
      ],

      content: `
# try-with-resources

Automatically closes resources after usage.

## Benefits

- avoids resource leaks
- cleaner code

## Interview Summary

Requires AutoCloseable implementation.
      `,
    },

    {
      id: 'autocloseable',

      title:
        'AutoCloseable Interface',

      level: 'intermediate',

      tags: [
        'java',
        'autocloseable',
      ],

      content: `
# AutoCloseable Interface

Resources implementing AutoCloseable automatically closed in try-with-resources.
      `,
    },

    {
      id: 'resource-leak-prevention',

      title:
        '🔥 Resource Leak Prevention',

      level: 'intermediate',

      tags: [
        'java',
        'resource-leak',
      ],

      content: `
# Resource Leak Prevention

Always close:
- files
- database connections
- streams

Use try-with-resources whenever possible.
      `,
    },

    {
      id: 'finally-traps',

      title:
        '🔥 finally Block Interview Traps',

      level: 'advanced',

      tags: [
        'java',
        'finally',
      ],

      content: `
# finally Block Interview Traps

finally may not execute when:
- JVM crashes
- System.exit() called
      `,
    },

    {
      id: 'exception-chaining',

      title:
        'Exception Chaining',

      level: 'advanced',

      tags: [
        'java',
        'exception-chain',
      ],

      content: `
# Exception Chaining

One exception wrapped inside another exception.
      `,
    },

    {
      id: 'rethrowing-exceptions',

      title:
        'Rethrowing Exceptions',

      level: 'advanced',

      tags: [
        'java',
        'rethrow',
      ],

      content: `
# Rethrowing Exceptions

Exception caught and thrown again for higher-level handling.
      `,
    },

    {
      id: 'exception-best-practices',

      title:
        '🔥 Best Practices for Exception Handling',

      level: 'advanced',

      tags: [
        'java',
        'best-practices',
      ],

      content: `
# Best Practices for Exception Handling

- avoid empty catch blocks
- log exceptions properly
- use custom exceptions
- never swallow exceptions
- fail gracefully
      `,
    },

    {
      id: 'logging-exceptions',

      title:
        'Logging Exceptions',

      level: 'intermediate',

      tags: [
        'java',
        'logging',
      ],

      content: `
# Logging Exceptions

Proper logging helps debugging and monitoring production systems.
      `,
    },

    {
      id: 'global-exception-handling',

      title:
        '🔥 Global Exception Handling',

      level: 'advanced',

      tags: [
        'spring',
        'exception',
      ],

      content: `
# Global Exception Handling

Centralized exception handling improves consistency in APIs.
      `,
    },

    {
      id: 'controller-advice',

      title:
        '🔥 @ControllerAdvice',

      level: 'advanced',

      tags: [
        'spring',
        'controlleradvice',
      ],

      content: `
# @ControllerAdvice

Provides centralized exception handling across Spring controllers.
      `,
    },

    {
      id: 'exception-handler-annotation',

      title:
        '🔥 @ExceptionHandler',

      level: 'advanced',

      tags: [
        'spring',
        'exceptionhandler',
      ],

      content: `
# @ExceptionHandler

Handles specific exception types inside Spring Boot.
      `,
    },

    {
      id: 'rest-api-exception-handling',

      title:
        '🔥 REST API Exception Handling',

      level: 'advanced',

      tags: [
        'spring',
        'rest-api',
      ],

      content: `
# REST API Exception Handling

REST APIs should return:
- proper status codes
- meaningful messages
- structured error response
      `,
    },

    {
      id: 'exception-interview-traps',

      title:
        '🔥🔥 Common Exception Interview Traps',

      level: 'advanced',

      tags: [
        'java',
        'exception',
        'traps',
      ],

      content: `
# Common Exception Interview Traps

Common traps:
- finally execution assumptions
- checked vs unchecked confusion
- swallowing exceptions
- incorrect exception hierarchy
- improper logging
      `,
    },

    {
      id: 'production-exception-handling',

      title:
        '🔥 Production Exception Handling',

      level: 'advanced',

      tags: [
        'java',
        'production',
      ],

      content: `
# Production Exception Handling

Production systems require:
- monitoring
- structured logging
- alerting
- retry mechanisms
- proper API responses
      `,
    },{
  id: 'method-overriding-exception',

  title:
    'Method Overriding with Exceptions',

  level: 'intermediate',

  tags: [
    'java',
    'overriding',
  ],

  content: `
# Method Overriding with Exceptions

Child class cannot throw broader checked exception than parent method.

## Interview Summary

Overriding follows exception compatibility rules.
  `,
},

{
  id: 'exception-inheritance',

  title:
    'Exception Handling with Inheritance',

  level: 'intermediate',

  tags: [
    'java',
    'inheritance',
  ],

  content: `
# Exception Handling with Inheritance

Exceptions follow inheritance hierarchy.

More specific exceptions should be caught before parent exceptions.
  `,
},

{
  id: 'stack-trace',

  title:
    '🔥 Stack Trace',

  level: 'beginner',

  tags: [
    'java',
    'stack-trace',
  ],

  content: `
# Stack Trace

Stack trace shows:
- exception type
- line number
- method call sequence

Useful for debugging.
  `,
},

{
  id: 'throwable-class',

  title:
    'Throwable Class',

  level: 'beginner',

  tags: [
    'java',
    'throwable',
  ],

  content: `
# Throwable Class

Throwable is parent of:
- Exception
- Error
  `,
},

{
  id: 'custom-checked-exception',

  title:
    'Custom Checked Exception',

  level: 'intermediate',

  tags: [
    'java',
    'checked-exception',
  ],

  content: `
# Custom Checked Exception

Extends Exception class.

Compiler forces handling.
  `,
},

{
  id: 'custom-unchecked-exception',

  title:
    'Custom Unchecked Exception',

  level: 'intermediate',

  tags: [
    'java',
    'unchecked-exception',
  ],

  content: `
# Custom Unchecked Exception

Extends RuntimeException class.

Handling not mandatory.
  `,
},

{
  id: 'throw-error-vs-exception',

  title:
    '🔥 throw Error vs throw Exception',

  level: 'advanced',

  tags: [
    'java',
    'error',
  ],

  content: `
# throw Error vs throw Exception

## Error

Represents JVM/system-level failure.

## Exception

Represents application-level issue.
  `,
},

{
  id: 'response-status-exception',

  title:
    'ResponseStatusException',

  level: 'advanced',

  tags: [
    'spring',
    'responsestatusexception',
  ],

  content: `
# ResponseStatusException

Spring Boot exception for returning HTTP status dynamically.
  `,
},

{
  id: 'exception-design-strategy',

  title:
    '🔥 Exception Design Strategy',

  level: 'advanced',

  tags: [
    'java',
    'design',
  ],

  content: `
# Exception Design Strategy

Good exception design improves:
- maintainability
- readability
- debugging
- API consistency
  `,
},

{
  id: 'exception-anti-patterns',

  title:
    '🔥 Exception Anti Patterns',

  level: 'advanced',

  tags: [
    'java',
    'anti-pattern',
  ],

  content: `
# Exception Anti Patterns

Common anti-patterns:
- empty catch blocks
- generic Exception everywhere
- swallowing exceptions
- logging and rethrowing repeatedly
  `,
},

{
  id: 'suppressed-exceptions',

  title:
    'Suppressed Exceptions',

  level: 'advanced',

  tags: [
    'java',
    'suppressed-exception',
  ],

  content: `
# Suppressed Exceptions

Occurs mainly in try-with-resources when multiple exceptions happen simultaneously.
  `,
},

{
  id: 'serialization-exceptions',

  title:
    'Serialization of Exceptions',

  level: 'advanced',

  tags: [
    'java',
    'serialization',
  ],

  content: `
# Serialization of Exceptions

Exceptions are serializable to support distributed systems and remote communication.
  `,
},

{
  id: 'root-cause-analysis',

  title:
    '🔥 Root Cause Analysis',

  level: 'advanced',

  tags: [
    'java',
    'debugging',
  ],

  content: `
# Root Cause Analysis

Root cause analysis identifies original failure source instead of only visible exception.
  `,
},

{
  id: 'real-world-exception-scenarios',

  title:
    'Real World Exception Scenarios',

  level: 'intermediate',

  tags: [
    'java',
    'real-world',
  ],

  content: `
# Real World Exception Scenarios

Examples:
- payment failure
- DB connection timeout
- API failure
- invalid request
  `,
},

{
  id: 'jvm-exception-flow',

  title:
    'JVM Exception Flow',

  level: 'advanced',

  tags: [
    'java',
    'jvm',
  ],

  content: `
# JVM Exception Flow

JVM creates exception object and searches matching catch block through call stack.
  `,
},

{
  id: 'exception-performance-impact',

  title:
    '🔥 Exception Performance Impact',

  level: 'advanced',

  tags: [
    'java',
    'performance',
  ],

  content: `
# Exception Performance Impact

Creating exceptions is expensive because stack trace generation costs memory and CPU.
  `,
},

{
  id: 'retry-mechanism',

  title:
    'Retry Mechanism Basics',

  level: 'advanced',

  tags: [
    'java',
    'retry',
  ],

  content: `
# Retry Mechanism Basics

Temporary failures may require retries.

Examples:
- API timeout
- network issue
- DB lock
  `,
},

{
  id: 'fail-fast-vs-failsafe',

  title:
    '🔥 Fail Fast vs Fail Safe Error Handling',

  level: 'advanced',

  tags: [
    'java',
    'fail-fast',
  ],

  content: `
# Fail Fast vs Fail Safe

## Fail Fast

Stops immediately on failure.

## Fail Safe

Continues gracefully with fallback behavior.
  `,
},

{
  id: 'monitoring-alerting',

  title:
    'Production Monitoring and Alerting',

  level: 'advanced',

  tags: [
    'java',
    'monitoring',
  ],

  content: `
# Production Monitoring and Alerting

Production systems monitor:
- error rate
- exceptions
- API failures
- service health
  `,
},

{
  id: 'error-codes-vs-exceptions',

  title:
    '🔥 Error Codes vs Exceptions',

  level: 'advanced',

  tags: [
    'java',
    'error-code',
  ],

  content: `
# Error Codes vs Exceptions

## Error Codes

Require manual checking.

## Exceptions

Provide cleaner separation of failure handling.
  `,
},

{
  id: 'domain-exception-design',

  title:
    'Domain Exception Design',

  level: 'advanced',

  tags: [
    'java',
    'domain',
  ],

  content: `
# Domain Exception Design

Business-specific exceptions improve clarity.

Examples:
- InvalidOrderException
- PaymentFailedException
  `,
},

{
  id: 'validation-exception-handling',

  title:
    'Validation Exception Handling',

  level: 'advanced',

  tags: [
    'java',
    'validation',
  ],

  content: `
# Validation Exception Handling

Validation exceptions handle invalid user or API input safely.
  `,
},

{
  id: 'exception-architecture',

  title:
    '🔥 Exception Handling Best Architecture',

  level: 'advanced',

  tags: [
    'java',
    'architecture',
  ],

  content: `
# Exception Handling Best Architecture

Good architecture includes:
- centralized handling
- custom exceptions
- logging
- monitoring
- proper API response structure
  `,
},

{
  id: 'production-best-practices-exception',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'production',
  ],

  content: `
# Production Best Practices

- never expose stack traces to users
- use structured logging
- centralize exception handling
- monitor failures
- classify business vs system exceptions
  `,
},

{
  id: 'exception-streams',

  title:
    'Exception Handling in Streams',

  level: 'advanced',

  tags: [
    'java',
    'streams',
  ],

  content: `
# Exception Handling in Streams

Streams do not handle checked exceptions cleanly.

Usually handled using:
- wrapper methods
- try-catch inside lambda
  `,
},

{
  id: 'exception-lambda',

  title:
    'Exception Handling in Lambda',

  level: 'advanced',

  tags: [
    'java',
    'lambda',
  ],

  content: `
# Exception Handling in Lambda

Checked exceptions inside lambda require explicit handling.
  `,
},

{
  id: 'exception-completablefuture',

  title:
    'Exception Handling in CompletableFuture',

  level: 'advanced',

  tags: [
    'java',
    'completablefuture',
  ],

  content: `
# Exception Handling in CompletableFuture

CompletableFuture provides:
- exceptionally()
- handle()
- whenComplete()

for async exception handling.
  `,
},

{
  id: 'exception-multithreading',

  title:
    'Exception Handling in Multithreading',

  level: 'advanced',

  tags: [
    'java',
    'multithreading',
  ],

  content: `
# Exception Handling in Multithreading

Exceptions inside threads may not propagate to main thread automatically.
  `,
},

  ],
};