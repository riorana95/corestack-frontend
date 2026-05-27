import { DocSection }
from '../../../models/doc.model';

export const JAVA_OOPS_SECTION:
DocSection = {

  id: 'java-oops',

  title: 'OOP',

  summary:
    'Object-oriented programming concepts, principles, relationships, and interview-focused Java OOP preparation.',

  articles: [

    {
      id: 'what-is-oop',

      title:
        '🔥 What is OOP?',

      level: 'beginner',

      tags: [
        'java',
        'oops',
      ],

      content: `
# What is OOP?

OOP stands for Object-Oriented Programming.

It is programming paradigm based on objects and classes.

## Main Goals

- code reusability
- modularity
- maintainability
- scalability

## Four Pillars of OOP

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

## Real World Example

Car:
- properties → color, speed
- behavior → drive(), brake()

## Interview Summary

OOP organizes software around objects instead of functions.
      `,
    },

    {
      id: 'class-vs-object',

      title:
        '🔥 Class vs Object',

      level: 'beginner',

      tags: [
        'java',
        'class',
        'object',
      ],

      content: `
# Class vs Object

## Class

Blueprint or template for creating objects.

Defines:
- properties
- methods

## Object

Real instance of class.

Consumes memory in heap.

## Interview Summary

Class → blueprint

Object → actual instance
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Class and Object Example',

          code: `
class Car {

  String color;

  void drive() {
    System.out.println("Driving");
  }
}

Car c = new Car();
          `,
        },
      ],
    },

    {
      id: 'encapsulation',

      title:
        '🔥 Encapsulation',

      level: 'beginner',

      tags: [
        'java',
        'encapsulation',
      ],

      content: `
# Encapsulation

Encapsulation means binding data and methods together.

It helps:
- data hiding
- security
- maintainability

Private variables are accessed using getters/setters.

## Interview Summary

Encapsulation protects internal data from direct access.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Encapsulation Example',

          code: `
class User {

  private int age;

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }
}
          `,
        },
      ],
    },

    {
      id: 'abstraction',

      title:
        '🔥 Abstraction',

      level: 'beginner',

      tags: [
        'java',
        'abstraction',
      ],

      content: `
# Abstraction

Abstraction hides implementation details and shows only essential behavior.

## Achieved Using

- abstract class
- interface

## Real Example

Car driver uses steering wheel without knowing engine internals.

## Interview Summary

Abstraction focuses on WHAT object does, not HOW.
      `,
    },

    {
      id: 'inheritance',

      title:
        '🔥 Inheritance',

      level: 'beginner',

      tags: [
        'java',
        'inheritance',
      ],

      content: `
# Inheritance

Inheritance allows child class to inherit properties and methods from parent class.

## Benefits

- code reuse
- hierarchy
- polymorphism

## Types

- single
- multilevel
- hierarchical

## Interview Summary

Inheritance represents IS-A relationship.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Inheritance Example',

          code: `
class Animal {

  void sound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {

}
          `,
        },
      ],
    },

    {
      id: 'polymorphism',

      title:
        '🔥 Polymorphism',

      level: 'beginner',

      tags: [
        'java',
        'polymorphism',
      ],

      content: `
# Polymorphism

Polymorphism means one object behaving in multiple forms.

## Types

- compile time
- runtime

## Benefits

- flexibility
- extensibility
- cleaner code

## Interview Summary

Polymorphism improves scalability and loose coupling.
      `,
    },

    {
      id: 'compile-time-polymorphism',

      title:
        'Compile Time Polymorphism',

      level: 'beginner',

      tags: [
        'java',
        'compile-time',
      ],

      content: `
# Compile Time Polymorphism

Achieved using method overloading.

Compiler decides method during compilation.

## Example

Same method name with different parameters.

## Interview Summary

Compile-time polymorphism is faster than runtime polymorphism.
      `,
    },

    {
      id: 'runtime-polymorphism',

      title:
        '🔥 Runtime Polymorphism',

      level: 'beginner',

      tags: [
        'java',
        'runtime-polymorphism',
      ],

      content: `
# Runtime Polymorphism

Achieved using method overriding.

Method resolution happens during runtime.

## Important Point

Parent reference can hold child object.

## Interview Summary

Runtime polymorphism enables dynamic behavior.
      `,
    },

    {
      id: 'method-overloading',

      title:
        '🔥 Method Overloading',

      level: 'beginner',

      tags: [
        'java',
        'overloading',
      ],

      content: `
# Method Overloading

Same method name with different parameter list.

## Rules

Can differ by:
- number of parameters
- type of parameters

Cannot differ only by return type.

## Interview Summary

Overloading provides compile-time polymorphism.
      `,
    },

    {
      id: 'method-overriding',

      title:
        '🔥 Method Overriding',

      level: 'beginner',

      tags: [
        'java',
        'overriding',
      ],

      content: `
# Method Overriding

Child class provides specific implementation of parent method.

## Rules

- same method name
- same parameters
- inheritance required

## Interview Summary

Overriding provides runtime polymorphism.
      `,
    },

    {
      id: 'abstract-class-vs-interface',

      title:
        '🔥 Abstract Class vs Interface',

      level: 'intermediate',

      tags: [
        'java',
        'abstract-class',
        'interface',
      ],

      content: `
# Abstract Class vs Interface

## Abstract Class

Can have:
- abstract methods
- concrete methods
- constructors
- state

## Interface

Used for complete abstraction.

Supports:
- multiple inheritance
- loose coupling

## Interview Summary

Abstract class → partial abstraction

Interface → contract-based abstraction
      `,
    },

    {
      id: 'abstract-class',

      title:
        'Abstract Class',

      level: 'beginner',

      tags: [
        'java',
        'abstract-class',
      ],

      content: `
# Abstract Class

Cannot be instantiated.

Can contain:
- abstract methods
- normal methods

Used for shared base behavior.
      `,
    },

    {
      id: 'interface',

      title:
        '🔥 Interface in Java',

      level: 'beginner',

      tags: [
        'java',
        'interface',
      ],

      content: `
# Interface in Java

Interface defines contract for classes.

## Features

- supports abstraction
- supports multiple inheritance
- promotes loose coupling

## Interview Summary

Interface defines WHAT class should do.
      `,
    },

    {
      id: 'multiple-inheritance',

      title:
        'Multiple Inheritance in Java',

      level: 'intermediate',

      tags: [
        'java',
        'multiple-inheritance',
      ],

      content: `
# Multiple Inheritance in Java

Java does not support multiple inheritance using classes.

Reason:
- ambiguity
- diamond problem

Java supports multiple inheritance using interfaces.
      `,
    },

    {
      id: 'diamond-problem',

      title:
        '🔥 Diamond Problem',

      level: 'intermediate',

      tags: [
        'java',
        'diamond-problem',
      ],

      content: `
# Diamond Problem

Occurs when child class inherits same method from multiple parent classes.

Java avoids this by:
- not supporting multiple inheritance with classes

Interfaces solve ambiguity using explicit implementation.
      `,
    },

    {
      id: 'association',

      title:
        'Association in OOP',

      level: 'intermediate',

      tags: [
        'java',
        'association',
      ],

      content: `
# Association

Association represents relationship between two objects.

Example:
- Teacher and Student

Objects can exist independently.
      `,
    },

    {
      id: 'aggregation',

      title:
        '🔥 Aggregation',

      level: 'intermediate',

      tags: [
        'java',
        'aggregation',
      ],

      content: `
# Aggregation

Aggregation represents HAS-A relationship.

Child object can exist independently.

Example:
- Department has Teachers

Teachers can exist without department.
      `,
    },

    {
      id: 'composition',

      title:
        '🔥 Composition',

      level: 'intermediate',

      tags: [
        'java',
        'composition',
      ],

      content: `
# Composition

Strong HAS-A relationship.

Child object cannot exist independently.

Example:
- House has Rooms

Destroying house destroys rooms.
      `,
    },

    {
      id: 'is-a-vs-has-a',

      title:
        '🔥 IS-A vs HAS-A Relationship',

      level: 'intermediate',

      tags: [
        'java',
        'relationship',
      ],

      content: `
# IS-A vs HAS-A Relationship

## IS-A

Represents inheritance.

Example:
Dog IS-A Animal

## HAS-A

Represents composition or aggregation.

Example:
Car HAS-A Engine
      `,
    },

    {
      id: 'coupling',

      title:
        '🔥 Coupling in OOP',

      level: 'intermediate',

      tags: [
        'java',
        'coupling',
      ],

      content: `
# Coupling

Coupling measures dependency between classes.

## Tight Coupling

Classes highly dependent.

## Loose Coupling

Classes minimally dependent.

## Interview Summary

Loose coupling improves scalability and maintainability.
      `,
    },

    {
      id: 'cohesion',

      title:
        '🔥 Cohesion in OOP',

      level: 'intermediate',

      tags: [
        'java',
        'cohesion',
      ],

      content: `
# Cohesion

Cohesion measures how strongly related class responsibilities are.

## High Cohesion

Preferred.

Class performs single responsibility.

## Low Cohesion

Class performs unrelated tasks.
      `,
    },{
  id: 'why-oop',

  title:
    '🔥 Why OOP?',

  level: 'beginner',

  tags: [
    'java',
    'oops',
  ],

  content: `
# Why OOP?

OOP helps build scalable and maintainable software.

## Benefits

- code reuse
- modularity
- flexibility
- maintainability
- security

## Interview Summary

OOP organizes software using reusable objects and relationships.
  `,
},

{
  id: 'object-cloning',

  title:
    'Object Cloning',

  level: 'intermediate',

  tags: [
    'java',
    'cloning',
  ],

  content: `
# Object Cloning

Cloning creates copy of existing object.

Achieved using:
- Cloneable interface
- clone() method

## Interview Summary

Default cloning creates shallow copy.
  `,
},

{
  id: 'deep-copy-vs-shallow-copy',

  title:
    '🔥 Deep Copy vs Shallow Copy',

  level: 'intermediate',

  tags: [
    'java',
    'deep-copy',
    'shallow-copy',
  ],

  content: `
# Deep Copy vs Shallow Copy

## Shallow Copy

Copies references.

Changes may affect original object.

## Deep Copy

Creates independent object copies.

## Interview Summary

Deep copy avoids shared mutable references.
  `,
},

{
  id: 'object-slicing',

  title:
    'Object Slicing',

  level: 'advanced',

  tags: [
    'java',
    'object-slicing',
  ],

  content: `
# Object Slicing

Object slicing occurs when child object treated as parent object loses child-specific behavior.

More common in C++.

Java references reduce slicing issues.
  `,
},

{
  id: 'dynamic-method-dispatch',

  title:
    '🔥 Dynamic Method Dispatch',

  level: 'intermediate',

  tags: [
    'java',
    'dynamic-dispatch',
  ],

  content: `
# Dynamic Method Dispatch

Runtime decides which overridden method to call.

Achieved using:
- inheritance
- overriding
- parent reference

## Interview Summary

Dynamic dispatch enables runtime polymorphism.
  `,
},

{
  id: 'super-keyword',

  title:
    'super Keyword in OOP',

  level: 'beginner',

  tags: [
    'java',
    'super',
  ],

  content: `
# super Keyword

super refers to parent class object.

Used for:
- parent constructor
- parent methods
- parent variables

## Interview Summary

super helps access overridden parent behavior.
  `,
},

{
  id: 'this-keyword',

  title:
    'this Keyword in OOP',

  level: 'beginner',

  tags: [
    'java',
    'this',
  ],

  content: `
# this Keyword

this refers to current object.

Used for:
- constructor chaining
- resolving variable conflicts
- current object reference
  `,
},

{
  id: 'constructor-chaining',

  title:
    '🔥 Constructor Chaining',

  level: 'intermediate',

  tags: [
    'java',
    'constructor',
  ],

  content: `
# Constructor Chaining

Calling one constructor from another constructor.

Achieved using:
- this()
- super()

## Benefits

- code reuse
- centralized initialization
  `,
},

{
  id: 'access-modifiers-oop',

  title:
    'Access Modifiers in OOP',

  level: 'beginner',

  tags: [
    'java',
    'access-modifier',
  ],

  content: `
# Access Modifiers in OOP

Access modifiers control visibility and encapsulation.

## Types

- private
- default
- protected
- public

## Interview Summary

Encapsulation mainly uses private modifier.
  `,
},

{
  id: 'final-keyword-oop',

  title:
    'final Keyword in OOP',

  level: 'beginner',

  tags: [
    'java',
    'final',
  ],

  content: `
# final Keyword in OOP

## final Variable

Cannot be reassigned.

## final Method

Cannot be overridden.

## final Class

Cannot be inherited.
  `,
},

{
  id: 'static-keyword-oop',

  title:
    'static Keyword in OOP',

  level: 'beginner',

  tags: [
    'java',
    'static',
  ],

  content: `
# static Keyword in OOP

Static members belong to class instead of objects.

## Benefits

- shared memory
- utility methods
- common behavior
  `,
},

{
  id: 'object-class-methods-oop',

  title:
    'Object Class Methods in OOP',

  level: 'beginner',

  tags: [
    'java',
    'object-class',
  ],

  content: `
# Object Class Methods

Important methods:
- equals()
- hashCode()
- toString()
- clone()

All Java classes inherit Object class.
  `,
},

{
  id: 'equals-hashcode-contract',

  title:
    '🔥 equals() and hashCode() Contract',

  level: 'intermediate',

  tags: [
    'java',
    'equals',
    'hashcode',
  ],

  content: `
# equals() and hashCode() Contract

If two objects are equal,
their hashCode must also be equal.

Important for:
- HashMap
- HashSet

## Interview Summary

Always override both together.
  `,
},

{
  id: 'tostring-override',

  title:
    'toString() Override',

  level: 'beginner',

  tags: [
    'java',
    'tostring',
  ],

  content: `
# toString() Override

toString() returns object representation.

Overriding improves debugging and logging readability.
  `,
},

{
  id: 'instanceof-oop',

  title:
    'instanceof in OOP',

  level: 'beginner',

  tags: [
    'java',
    'instanceof',
  ],

  content: `
# instanceof in OOP

Checks whether object belongs to specific class or interface.
  `,
},

{
  id: 'upcasting-vs-downcasting',

  title:
    '🔥 Upcasting vs Downcasting',

  level: 'intermediate',

  tags: [
    'java',
    'casting',
  ],

  content: `
# Upcasting vs Downcasting

## Upcasting

Child object assigned to parent reference.

Safe and automatic.

## Downcasting

Parent reference converted into child reference.

Requires explicit casting.
  `,
},

{
  id: 'tight-vs-loose-coupling',

  title:
    '🔥 Tight Coupling vs Loose Coupling',

  level: 'intermediate',

  tags: [
    'java',
    'coupling',
  ],

  content: `
# Tight Coupling vs Loose Coupling

## Tight Coupling

Classes highly dependent.

## Loose Coupling

Classes minimally dependent.

Preferred in scalable systems.
  `,
},

{
  id: 'dependency-inversion-principle',

  title:
    '🔥 Dependency Inversion Principle',

  level: 'advanced',

  tags: [
    'java',
    'dip',
  ],

  content: `
# Dependency Inversion Principle

High-level modules should not depend on low-level modules.

Both should depend on abstractions.
  `,
},

{
  id: 'interface-segregation-principle',

  title:
    '🔥 Interface Segregation Principle',

  level: 'advanced',

  tags: [
    'java',
    'isp',
  ],

  content: `
# Interface Segregation Principle

Clients should not depend on unused methods.

Prefer smaller focused interfaces.
  `,
},

{
  id: 'open-closed-principle',

  title:
    '🔥 Open Closed Principle',

  level: 'advanced',

  tags: [
    'java',
    'ocp',
  ],

  content: `
# Open Closed Principle

Software entities should be:
- open for extension
- closed for modification
  `,
},

{
  id: 'liskov-substitution-principle',

  title:
    '🔥 Liskov Substitution Principle',

  level: 'advanced',

  tags: [
    'java',
    'lsp',
  ],

  content: `
# Liskov Substitution Principle

Child classes should replace parent classes without breaking behavior.
  `,
},

{
  id: 'real-world-oop-example',

  title:
    'Real World OOP Example',

  level: 'beginner',

  tags: [
    'java',
    'real-world',
  ],

  content: `
# Real World OOP Example

Banking system:
- Account
- SavingsAccount
- CurrentAccount

Uses:
- inheritance
- abstraction
- polymorphism
- encapsulation
  `,
},

{
  id: 'oop-interview-traps',

  title:
    '🔥🔥 OOP Interview Traps',

  level: 'intermediate',

  tags: [
    'java',
    'oops',
    'traps',
  ],

  content: `
# OOP Interview Traps

Common traps:
- overriding vs overloading confusion
- equals/hashCode mistakes
- shallow copy issues
- static overriding misconception
- mutable object problems
  `,
},

{
  id: 'common-oop-programs',

  title:
    'Common OOP Interview Programs',

  level: 'beginner',

  tags: [
    'java',
    'programs',
  ],

  content: `
# Common OOP Interview Programs

Frequently asked:
- bank system
- employee management
- library system
- vehicle hierarchy
- shape polymorphism
  `,
},

{
  id: 'oop-best-practices',

  title:
    '🔥 OOP Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'best-practices',
  ],

  content: `
# OOP Best Practices

- prefer composition over inheritance
- use interfaces
- avoid tight coupling
- follow SOLID principles
- keep classes focused
  `,
},

{
  id: 'production-level-oop-design',

  title:
    '🔥 Production Level OOP Design',

  level: 'advanced',

  tags: [
    'java',
    'production-design',
  ],

  content: `
# Production Level OOP Design

Production systems require:
- scalability
- loose coupling
- modularity
- extensibility
- maintainability

Good OOP design improves long-term engineering quality.
  `,
},

  ],
};