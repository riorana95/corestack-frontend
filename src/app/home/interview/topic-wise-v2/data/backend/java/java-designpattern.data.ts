import { DocSection }
from '../../../models/doc.model';

export const JAVA_DESIGN_PATTERNS_SECTION:
DocSection = {

  id: 'java-designpatterns',

  title: 'Design Patterns',

  summary:
    'Java Design Patterns including creational, structural, behavioral, microservice patterns, Spring internals, distributed systems, and production best practices.',

  articles: [

    {
      id: 'what-are-design-patterns',

      title:
        '🔥 What are Design Patterns?',

      level: 'beginner',

      tags: [
        'java',
        'design-pattern',
      ],

      content: `
# What are Design Patterns?

Design patterns are reusable solutions for common software design problems.

They improve:
- maintainability
- scalability
- reusability
- flexibility
      `,
    },

    {
      id: 'why-design-patterns',

      title:
        '🔥 Why Design Patterns?',

      level: 'beginner',

      tags: [
        'java',
        'design-pattern',
      ],

      content: `
# Why Design Patterns?

Used to:
- solve recurring problems
- reduce coupling
- improve architecture
- standardize solutions
      `,
    },

    {
      id: 'types-of-design-patterns',

      title:
        '🔥 Types of Design Patterns',

      level: 'beginner',

      tags: [
        'java',
        'design-pattern',
      ],

      content: `
# Types of Design Patterns

Three major categories:
- Creational
- Structural
- Behavioral
      `,
    },

    {
      id: 'creational-patterns',

      title:
        'Creational Design Patterns',

      level: 'beginner',

      tags: [
        'java',
        'creational',
      ],

      content: `
# Creational Design Patterns

Focus on object creation mechanisms.
      `,
    },

    {
      id: 'structural-patterns',

      title:
        'Structural Design Patterns',

      level: 'beginner',

      tags: [
        'java',
        'structural',
      ],

      content: `
# Structural Design Patterns

Focus on object composition and relationships.
      `,
    },

    {
      id: 'behavioral-patterns',

      title:
        'Behavioral Design Patterns',

      level: 'beginner',

      tags: [
        'java',
        'behavioral',
      ],

      content: `
# Behavioral Design Patterns

Focus on communication and responsibility between objects.
      `,
    },

    {
      id: 'solid-and-design-patterns',

      title:
        'SOLID Principles and Design Patterns',

      level: 'intermediate',

      tags: [
        'java',
        'solid',
      ],

      content: `
# SOLID Principles and Design Patterns

Most design patterns internally follow SOLID principles.
      `,
    },

    {
      id: 'gang-of-four',

      title:
        'Gang of Four (GoF) Design Patterns',

      level: 'intermediate',

      tags: [
        'java',
        'gof',
      ],

      content: `
# Gang of Four (GoF) Design Patterns

Classic 23 design patterns introduced by GoF authors.
      `,
    },

    {
      id: 'singleton-pattern',

      title:
        '🔥 Singleton Pattern',

      level: 'beginner',

      tags: [
        'java',
        'singleton',
      ],

      content: `
# Singleton Pattern

Ensures only one object instance exists.

Used for:
- logging
- configuration
- cache managers
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Singleton Example',

          code: `
public class Singleton {

    private static final
    Singleton INSTANCE =
        new Singleton();

    private Singleton() {}

    public static Singleton
    getInstance() {
        return INSTANCE;
    }
}
          `,
        },
      ],
    },

    {
      id: 'singleton-thread-safety',

      title:
        '🔥 Singleton Thread Safety',

      level: 'advanced',

      tags: [
        'java',
        'singleton',
      ],

      content: `
# Singleton Thread Safety

Singleton implementations must handle concurrent access safely.
      `,
    },

    {
      id: 'singleton-reflection-breaking',

      title:
        '🔥 Singleton Breaking using Reflection',

      level: 'advanced',

      tags: [
        'java',
        'reflection',
      ],

      content: `
# Singleton Breaking using Reflection

Reflection can invoke private singleton constructors and break singleton guarantee.
      `,
    },

    {
      id: 'singleton-serialization-breaking',

      title:
        '🔥 Singleton Breaking using Serialization',

      level: 'advanced',

      tags: [
        'java',
        'serialization',
      ],

      content: `
# Singleton Breaking using Serialization

Deserialization may create multiple singleton instances.
      `,
    },

    {
      id: 'singleton-enum',

      title:
        '🔥 Singleton using Enum',

      level: 'advanced',

      tags: [
        'java',
        'enum',
      ],

      content: `
# Singleton using Enum

Enum singleton safest singleton implementation in Java.
      `,
    },

    {
      id: 'factory-pattern',

      title:
        '🔥 Factory Pattern',

      level: 'beginner',

      tags: [
        'java',
        'factory',
      ],

      content: `
# Factory Pattern

Factory pattern creates objects without exposing creation logic.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Factory Pattern Example',

          code: `
class VehicleFactory {

    public Vehicle getVehicle(
        String type
    ) {

        if(type.equals("car")) {
            return new Car();
        }

        return new Bike();
    }
}
          `,
        },
      ],
    },

    {
      id: 'factory-method-pattern',

      title:
        '🔥 Factory Method Pattern',

      level: 'intermediate',

      tags: [
        'java',
        'factory-method',
      ],

      content: `
# Factory Method Pattern

Subclasses decide object creation logic.
      `,
    },

    {
      id: 'abstract-factory-pattern',

      title:
        '🔥 Abstract Factory Pattern',

      level: 'advanced',

      tags: [
        'java',
        'abstract-factory',
      ],

      content: `
# Abstract Factory Pattern

Creates families of related objects.
      `,
    },

    {
      id: 'builder-pattern',

      title:
        '🔥 Builder Pattern',

      level: 'beginner',

      tags: [
        'java',
        'builder',
      ],

      content: `
# Builder Pattern

Used for constructing complex immutable objects step by step.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Builder Pattern Example',

          code: `
Employee emp =
    new EmployeeBuilder()
        .setName("Rahul")
        .setAge(25)
        .build();
          `,
        },
      ],
    },

    {
      id: 'prototype-pattern',

      title:
        '🔥 Prototype Pattern',

      level: 'advanced',

      tags: [
        'java',
        'prototype',
      ],

      content: `
# Prototype Pattern

Creates new objects using cloning.
      `,
    },

    {
      id: 'object-cloning-prototype',

      title:
        'Object Cloning in Prototype',

      level: 'advanced',

      tags: [
        'java',
        'cloning',
      ],

      content: `
# Object Cloning in Prototype

Prototype pattern internally depends on cloning.
      `,
    },

    {
      id: 'dependency-injection-pattern',

      title:
        '🔥 Dependency Injection Pattern',

      level: 'advanced',

      tags: [
        'java',
        'dependency-injection',
      ],

      content: `
# Dependency Injection Pattern

Dependencies injected externally instead of created internally.
      `,
    },

    {
      id: 'adapter-pattern',

      title:
        '🔥 Adapter Pattern',

      level: 'intermediate',

      tags: [
        'java',
        'adapter',
      ],

      content: `
# Adapter Pattern

Converts incompatible interfaces into compatible interfaces.
      `,
    },

    {
      id: 'bridge-pattern',

      title:
        'Bridge Pattern',

      level: 'advanced',

      tags: [
        'java',
        'bridge',
      ],

      content: `
# Bridge Pattern

Separates abstraction from implementation.
      `,
    },

    {
      id: 'composite-pattern',

      title:
        '🔥 Composite Pattern',

      level: 'advanced',

      tags: [
        'java',
        'composite',
      ],

      content: `
# Composite Pattern

Treats individual objects and object groups uniformly.
      `,
    },

    {
      id: 'decorator-pattern',

      title:
        '🔥 Decorator Pattern',

      level: 'advanced',

      tags: [
        'java',
        'decorator',
      ],

      content: `
# Decorator Pattern

Adds behavior dynamically without modifying existing class.
      `,
    },

    {
      id: 'facade-pattern',

      title:
        '🔥 Facade Pattern',

      level: 'intermediate',

      tags: [
        'java',
        'facade',
      ],

      content: `
# Facade Pattern

Provides simplified interface over complex subsystem.
      `,
    },

    {
      id: 'flyweight-pattern',

      title:
        'Flyweight Pattern',

      level: 'advanced',

      tags: [
        'java',
        'flyweight',
      ],

      content: `
# Flyweight Pattern

Optimizes memory usage through object sharing.
      `,
    },

    {
      id: 'proxy-pattern',

      title:
        '🔥 Proxy Pattern',

      level: 'advanced',

      tags: [
        'java',
        'proxy',
      ],

      content: `
# Proxy Pattern

Proxy controls access to original object.
      `,
    },

    {
      id: 'static-proxy',

      title:
        'Static Proxy',

      level: 'advanced',

      tags: [
        'java',
        'proxy',
      ],

      content: `
# Static Proxy

Proxy implementation written manually during compile time.
      `,
    },

    {
      id: 'dynamic-proxy-pattern',

      title:
        '🔥 Dynamic Proxy',

      level: 'advanced',

      tags: [
        'java',
        'dynamic-proxy',
      ],

      content: `
# Dynamic Proxy

Proxy generated dynamically during runtime using reflection.
      `,
    },

    {
      id: 'observer-pattern',

      title:
        '🔥 Observer Pattern',

      level: 'intermediate',

      tags: [
        'java',
        'observer',
      ],

      content: `
# Observer Pattern

Objects automatically notified when subject state changes.
      `,
    },

    {
      id: 'strategy-pattern',

      title:
        '🔥 Strategy Pattern',

      level: 'advanced',

      tags: [
        'java',
        'strategy',
      ],

      content: `
# Strategy Pattern

Encapsulates interchangeable algorithms separately.
      `,
    },

    {
      id: 'state-pattern',

      title:
        'State Pattern',

      level: 'advanced',

      tags: [
        'java',
        'state',
      ],

      content: `
# State Pattern

Object behavior changes depending on internal state.
      `,
    },

    {
      id: 'command-pattern',

      title:
        '🔥 Command Pattern',

      level: 'advanced',

      tags: [
        'java',
        'command',
      ],

      content: `
# Command Pattern

Encapsulates requests as objects.
      `,
    },

    {
      id: 'chain-of-responsibility',

      title:
        '🔥 Chain of Responsibility Pattern',

      level: 'advanced',

      tags: [
        'java',
        'chain-of-responsibility',
      ],

      content: `
# Chain of Responsibility Pattern

Request passed through chain of handlers.
      `,
    },

    {
      id: 'iterator-pattern',

      title:
        'Iterator Pattern',

      level: 'intermediate',

      tags: [
        'java',
        'iterator',
      ],

      content: `
# Iterator Pattern

Sequentially traverses collection elements.
      `,
    },

    {
      id: 'mediator-pattern',

      title:
        'Mediator Pattern',

      level: 'advanced',

      tags: [
        'java',
        'mediator',
      ],

      content: `
# Mediator Pattern

Central mediator manages communication between objects.
      `,
    },

    {
      id: 'memento-pattern',

      title:
        'Memento Pattern',

      level: 'advanced',

      tags: [
        'java',
        'memento',
      ],

      content: `
# Memento Pattern

Captures and restores object state.
      `,
    },

    {
      id: 'template-method-pattern',

      title:
        '🔥 Template Method Pattern',

      level: 'advanced',

      tags: [
        'java',
        'template-method',
      ],

      content: `
# Template Method Pattern

Defines algorithm skeleton while subclasses customize steps.
      `,
    },

    {
      id: 'visitor-pattern',

      title:
        'Visitor Pattern',

      level: 'advanced',

      tags: [
        'java',
        'visitor',
      ],

      content: `
# Visitor Pattern

Separates operations from object structure.
      `,
    },

    {
      id: 'interpreter-pattern',

      title:
        'Interpreter Pattern',

      level: 'advanced',

      tags: [
        'java',
        'interpreter',
      ],

      content: `
# Interpreter Pattern

Defines grammar representation and interpreter execution.
      `,
    },

    {
      id: 'mvc-pattern',

      title:
        '🔥 MVC Pattern',

      level: 'advanced',

      tags: [
        'java',
        'mvc',
      ],

      content: `
# MVC Pattern

Separates:
- Model
- View
- Controller
      `,
    },

    {
      id: 'dao-pattern',

      title:
        '🔥 DAO Pattern',

      level: 'advanced',

      tags: [
        'java',
        'dao',
      ],

      content: `
# DAO Pattern

DAO abstracts database access logic.
      `,
    },

    {
      id: 'repository-pattern',

      title:
        '🔥 Repository Pattern',

      level: 'advanced',

      tags: [
        'java',
        'repository',
      ],

      content: `
# Repository Pattern

Repository abstracts persistence operations.
      `,
    },

    {
      id: 'service-layer-pattern',

      title:
        '🔥 Service Layer Pattern',

      level: 'advanced',

      tags: [
        'java',
        'service-layer',
      ],

      content: `
# Service Layer Pattern

Contains business logic separate from controllers and repositories.
      `,
    },

    {
      id: 'dto-pattern',

      title:
        '🔥 DTO Pattern',

      level: 'advanced',

      tags: [
        'java',
        'dto',
      ],

      content: `
# DTO Pattern

DTO transfers data between application layers.
      `,
    },

    {
      id: 'cqrs-basics',

      title:
        'CQRS Basics',

      level: 'advanced',

      tags: [
        'java',
        'cqrs',
      ],

      content: `
# CQRS Basics

Separates read and write responsibilities.
      `,
    },

    {
      id: 'event-driven-design-basics',

      title:
        '🔥 Event Driven Design Basics',

      level: 'advanced',

      tags: [
        'java',
        'event-driven',
      ],

      content: `
# Event Driven Design Basics

Systems communicate using asynchronous events.
      `,
    },

    {
      id: 'microservice-design-patterns',

      title:
        '🔥 Microservice Design Patterns',

      level: 'advanced',

      tags: [
        'java',
        'microservices',
      ],

      content: `
# Microservice Design Patterns

Patterns solving distributed system challenges.
      `,
    },

    {
      id: 'circuit-breaker-pattern',

      title:
        '🔥 Circuit Breaker Pattern',

      level: 'advanced',

      tags: [
        'java',
        'circuit-breaker',
      ],

      content: `
# Circuit Breaker Pattern

Prevents cascading failures during service outages.
      `,
    },

    {
      id: 'retry-pattern',

      title:
        '🔥 Retry Pattern',

      level: 'advanced',

      tags: [
        'java',
        'retry',
      ],

      content: `
# Retry Pattern

Retries failed operations automatically.
      `,
    },

    {
      id: 'saga-pattern',

      title:
        '🔥 Saga Pattern',

      level: 'advanced',

      tags: [
        'java',
        'saga',
      ],

      content: `
# Saga Pattern

Manages distributed transactions across microservices.
      `,
    },

    {
      id: 'api-gateway-pattern',

      title:
        '🔥 API Gateway Pattern',

      level: 'advanced',

      tags: [
        'java',
        'api-gateway',
      ],

      content: `
# API Gateway Pattern

Single entry point for microservices communication.
      `,
    },

    {
      id: 'strangler-pattern',

      title:
        'Strangler Pattern',

      level: 'advanced',

      tags: [
        'java',
        'strangler',
      ],

      content: `
# Strangler Pattern

Gradually replaces legacy monolith with modern services.
      `,
    },

    {
      id: 'sidecar-pattern',

      title:
        'Sidecar Pattern',

      level: 'advanced',

      tags: [
        'java',
        'sidecar',
      ],

      content: `
# Sidecar Pattern

Helper service deployed alongside primary application container.
      `,
    },

    {
      id: 'cache-aside-pattern',

      title:
        '🔥 Cache Aside Pattern',

      level: 'advanced',

      tags: [
        'java',
        'cache',
      ],

      content: `
# Cache Aside Pattern

Application manages cache population manually.
      `,
    },

    {
      id: 'pub-sub-pattern',

      title:
        '🔥 Pub Sub Pattern',

      level: 'advanced',

      tags: [
        'java',
        'pub-sub',
      ],

      content: `
# Pub Sub Pattern

Publishers send events without direct subscriber dependency.
      `,
    },

    {
      id: 'event-sourcing-basics',

      title:
        '🔥 Event Sourcing Basics',

      level: 'advanced',

      tags: [
        'java',
        'event-sourcing',
      ],

      content: `
# Event Sourcing Basics

Application state reconstructed using event history.
      `,
    },

    {
      id: 'hexagonal-architecture-basics',

      title:
        '🔥 Hexagonal Architecture Basics',

      level: 'advanced',

      tags: [
        'java',
        'hexagonal-architecture',
      ],

      content: `
# Hexagonal Architecture Basics

Separates business core from infrastructure dependencies.
      `,
    },

    {
      id: 'clean-architecture-basics',

      title:
        '🔥 Clean Architecture Basics',

      level: 'advanced',

      tags: [
        'java',
        'clean-architecture',
      ],

      content: `
# Clean Architecture Basics

Business rules isolated from frameworks and external systems.
      `,
    },

    {
      id: 'ioc-pattern',

      title:
        '🔥 Inversion of Control',

      level: 'advanced',

      tags: [
        'java',
        'ioc',
      ],

      content: `
# Inversion of Control

Framework controls object lifecycle instead of application code.
      `,
    },

    {
      id: 'composition-over-inheritance',

      title:
        '🔥 Composition over Inheritance',

      level: 'advanced',

      tags: [
        'java',
        'composition',
      ],

      content: `
# Composition over Inheritance

Favor object composition for flexibility and loose coupling.
      `,
    },

    {
      id: 'tight-vs-loose-coupling',

      title:
        '🔥 Tight Coupling vs Loose Coupling',

      level: 'advanced',

      tags: [
        'java',
        'coupling',
      ],

      content: `
# Tight Coupling vs Loose Coupling

Loose coupling improves scalability and maintainability.
      `,
    },

    {
      id: 'design-pattern-antipatterns',

      title:
        '🔥 Design Pattern Anti Patterns',

      level: 'advanced',

      tags: [
        'java',
        'anti-pattern',
      ],

      content: `
# Design Pattern Anti Patterns

Overusing patterns creates unnecessary complexity.
      `,
    },

    {
      id: 'god-object-antipattern',

      title:
        'God Object Anti Pattern',

      level: 'advanced',

      tags: [
        'java',
        'god-object',
      ],

      content: `
# God Object Anti Pattern

Single class handling excessive responsibilities.
      `,
    },

    {
      id: 'spaghetti-code',

      title:
        'Spaghetti Code',

      level: 'advanced',

      tags: [
        'java',
        'spaghetti-code',
      ],

      content: `
# Spaghetti Code

Poorly structured code with tangled dependencies.
      `,
    },

    {
      id: 'over-engineering-problems',

      title:
        '🔥 Over Engineering Problems',

      level: 'advanced',

      tags: [
        'java',
        'over-engineering',
      ],

      content: `
# Over Engineering Problems

Unnecessary abstractions increase complexity without value.
      `,
    },

    {
      id: 'yagni-principle',

      title:
        '🔥 YAGNI Principle',

      level: 'advanced',

      tags: [
        'java',
        'yagni',
      ],

      content: `
# YAGNI Principle

You Aren't Gonna Need It.

Avoid building unnecessary features.
      `,
    },

    {
      id: 'kiss-principle',

      title:
        '🔥 KISS Principle',

      level: 'advanced',

      tags: [
        'java',
        'kiss',
      ],

      content: `
# KISS Principle

Keep It Simple Stupid.

Prefer simple maintainable solutions.
      `,
    },

    {
      id: 'dry-principle',

      title:
        '🔥 DRY Principle',

      level: 'advanced',

      tags: [
        'java',
        'dry',
      ],

      content: `
# DRY Principle

Don't Repeat Yourself.

Avoid duplicated business logic.
      `,
    },

    {
      id: 'design-pattern-interview-traps',

      title:
        '🔥🔥 Design Pattern Interview Traps',

      level: 'advanced',

      tags: [
        'java',
        'interview-trap',
      ],

      content: `
# Design Pattern Interview Traps

Common traps:
- singleton thread safety
- over engineering
- wrong pattern usage
- unnecessary abstraction
- misuse of inheritance
      `,
    },{
  id: 'real-world-design-pattern-examples',

  title:
    '🔥 Real World Design Pattern Examples',

  level: 'advanced',

  tags: [
    'java',
    'real-world',
  ],

  content: `
# Real World Design Pattern Examples

Examples:
- Spring Beans -> Singleton
- Logger -> Singleton
- RestTemplate -> Builder
- Hibernate SessionFactory -> Factory
- Kafka Consumers -> Observer
  `,
},

{
  id: 'spring-framework-design-patterns',

  title:
    '🔥 Spring Framework Design Patterns',

  level: 'advanced',

  tags: [
    'java',
    'spring',
  ],

  content: `
# Spring Framework Design Patterns

Spring heavily uses:
- Singleton
- Factory
- Proxy
- Template Method
- Dependency Injection
  `,
},

{
  id: 'hibernate-design-patterns',

  title:
    'Hibernate Design Patterns',

  level: 'advanced',

  tags: [
    'java',
    'hibernate',
  ],

  content: `
# Hibernate Design Patterns

Hibernate internally uses:
- Factory
- Proxy
- DAO
- Repository
- Unit of Work
  `,
},

{
  id: 'kafka-design-patterns',

  title:
    '🔥 Kafka Design Patterns',

  level: 'advanced',

  tags: [
    'java',
    'kafka',
  ],

  content: `
# Kafka Design Patterns

Kafka ecosystems commonly use:
- Pub Sub
- Event Sourcing
- CQRS
- Saga
- Retry
  `,
},

{
  id: 'multithreading-design-patterns',

  title:
    '🔥 Multithreading Design Patterns',

  level: 'advanced',

  tags: [
    'java',
    'multithreading',
  ],

  content: `
# Multithreading Design Patterns

Concurrency patterns help manage:
- thread coordination
- synchronization
- parallel execution
  `,
},

{
  id: 'concurrent-design-patterns',

  title:
    'Concurrent Design Patterns',

  level: 'advanced',

  tags: [
    'java',
    'concurrency',
  ],

  content: `
# Concurrent Design Patterns

Examples:
- Producer Consumer
- Thread Pool
- Read Write Lock
- Future Pattern
  `,
},

{
  id: 'immutable-design-patterns',

  title:
    '🔥 Immutable Design Patterns',

  level: 'advanced',

  tags: [
    'java',
    'immutable',
  ],

  content: `
# Immutable Design Patterns

Immutable design improves:
- thread safety
- predictability
- scalability
  `,
},

{
  id: 'reactive-design-patterns',

  title:
    'Reactive Design Patterns',

  level: 'advanced',

  tags: [
    'java',
    'reactive',
  ],

  content: `
# Reactive Design Patterns

Reactive systems designed around:
- asynchronous streams
- non-blocking processing
- event-driven communication
  `,
},

{
  id: 'design-pattern-best-practices',

  title:
    '🔥 Design Pattern Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'best-practice',
  ],

  content: `
# Design Pattern Best Practices

- prefer simplicity
- avoid unnecessary abstraction
- favor composition
- follow SOLID principles
- choose patterns based on problem
  `,
},

{
  id: 'design-pattern-performance',

  title:
    '🔥 Performance Considerations',

  level: 'advanced',

  tags: [
    'java',
    'performance',
  ],

  content: `
# Performance Considerations

Some patterns may introduce:
- extra objects
- proxy overhead
- indirection cost
- memory overhead
  `,
},

{
  id: 'design-pattern-memory-optimization',

  title:
    'Memory Optimization',

  level: 'advanced',

  tags: [
    'java',
    'memory',
  ],

  content: `
# Memory Optimization

Flyweight and object pooling patterns help reduce memory consumption.
  `,
},

{
  id: 'jvm-impact-design-patterns',

  title:
    'JVM Impact of Patterns',

  level: 'advanced',

  tags: [
    'java',
    'jvm',
  ],

  content: `
# JVM Impact of Patterns

Dynamic proxies and reflection-heavy patterns impact JVM optimization behavior.
  `,
},

{
  id: 'production-design-problems',

  title:
    '🔥 Production Design Problems',

  level: 'advanced',

  tags: [
    'java',
    'production',
  ],

  content: `
# Production Design Problems

Common issues:
- over engineering
- tight coupling
- poor scalability
- incorrect abstraction
- distributed consistency failures
  `,
},

{
  id: 'production-best-practices-design-patterns',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'best-practice',
  ],

  content: `
# Production Best Practices

- use patterns only when needed
- optimize readability
- reduce coupling
- prefer maintainability
- document architectural decisions
  `,
},

  ],
};