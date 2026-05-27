import { DocSection } from '../../../models/doc.model';

export const JAVA_BASICS_SECTION: DocSection = {
  id: 'java-basics',

  title: 'Java Basics',

  summary:
    'Core Java fundamentals, interview questions, memory management, strings, OOP basics, and JVM concepts.',

  articles: [ 

    {
      id: 'primitive-vs-reference',

      title: 'Primitive vs Reference Data Types',

      level: 'beginner',

      tags: ['java', 'primitive', 'reference'],

      content: `
# Primitive vs Reference Data Types

## Primitive Types

Examples:
- int
- long
- double
- boolean

Primitive variables store actual values.

## Reference Types

Examples:
- String
- Arrays
- Objects

Reference variables store memory addresses.

## Interview Summary

Primitive:
- fixed size
- faster

Reference:
- stores object reference
- supports methods
      `,
    },

    {
      id: 'equals-vs-double-equals',

      title: '🔥 == vs equals()',

      level: 'beginner',

      tags: ['java', 'equals'],

      content: `
# == vs equals()

## == Operator

Compares:
- memory references
- object addresses

## equals()

Compares:
- actual content
- logical equality

## Important Interview Point

For objects:
== compares references.

equals() compares content.

## Interview Summary

== → reference comparison

equals() → content comparison
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Comparison Example',

          code: `
String a = new String("java");
String b = new String("java");

System.out.println(a == b);
System.out.println(a.equals(b));
          `,
        },
      ],
    },

    {
      id: 'string-pool',

      title: '🔥 String Pool in Java',

      level: 'beginner',

      tags: ['java', 'string-pool'],

      content: `
# String Pool in Java

Java maintains a special memory area called String Pool.

It stores string literals to optimize memory usage.

## Example

String a = "hello";
String b = "hello";

Both references point to same object.

## Interview Trap

new String("hello") creates new object in heap.

## Interview Summary

String literals use String Pool.

new keyword creates separate object.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'String Pool Example',

          code: `
String a = "hello";
String b = "hello";

System.out.println(a == b);

String c = new String("hello");

System.out.println(a == c);
          `,
        },
      ],
    },

    {
      id: 'string-builder-vs-buffer',

      title: '🔥 String vs StringBuilder vs StringBuffer',

      level: 'beginner',

      tags: ['java', 'stringbuilder', 'stringbuffer'],

      content: `
# String vs StringBuilder vs StringBuffer

## String

String is immutable.

Every modification creates new object.

## StringBuilder

- mutable
- faster
- not thread safe

## StringBuffer

- mutable
- thread safe
- slower than StringBuilder

## Interview Summary

Use StringBuilder in single-threaded applications.

Use StringBuffer when thread safety required.
      `,
    },

    {
      id: 'final-finally-finalize',

      title: '🔥 final vs finally vs finalize',

      level: 'beginner',

      tags: ['java', 'final'],

      content: `
# final vs finally vs finalize

## final

Used for:
- variables
- methods
- classes

final variable cannot be reassigned.

## finally

Used in exception handling.

Always executes whether exception occurs or not.

## finalize

Method called before garbage collection.

Deprecated in modern Java.

## Interview Summary

final → keyword

finally → exception block

finalize → garbage collection method
      `,
    },


    {
      id: 'constructor',

      title: '🔥 Constructor in Java',

      level: 'beginner',

      tags: ['java', 'constructor'],

      content: `
# Constructor in Java

Constructor initializes objects.

## Rules

- same name as class
- no return type
- automatically called

## Types

- default constructor
- parameterized constructor

## Interview Summary

Constructor is used for object initialization.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Constructor Example',

          code: `
class User {

  User() {
    System.out.println("Created");
  }
}
          `,
        },
      ],
    },

    {
      id: 'pass-by-value',

      title: '🔥 Pass By Value in Java',

      level: 'intermediate',

      tags: ['java', 'pass-by-value'],

      content: `
# Pass By Value in Java

Java is strictly pass by value.

## Primitive

Actual value copied.

## Objects

Reference value copied.

## Important Point

Java does NOT support pass by reference.
      `,
    },

    {
      id: 'wrapper-classes',

      title: 'Wrapper Classes',

      level: 'beginner',

      tags: ['java', 'wrapper'],

      content: `
# Wrapper Classes

Wrapper classes convert primitive into objects.

Examples:
- Integer
- Double
- Boolean

## Why Needed?

Collections only store objects.
      `,
    },

    {
      id: 'autoboxing-unboxing',

      title: 'Autoboxing and Unboxing',

      level: 'beginner',

      tags: ['java', 'autoboxing'],

      content: `
# Autoboxing and Unboxing

## Autoboxing

Primitive converted into wrapper automatically.

## Unboxing

Wrapper converted into primitive automatically.
      `,
    },

    {
      id: 'mutable-vs-immutable',

      title: '🔥 Mutable vs Immutable',

      level: 'intermediate',

      tags: ['java', 'immutable'],

      content: `
# Mutable vs Immutable

## Mutable

Object state can change.

Example:
- StringBuilder

## Immutable

Object state cannot change.

Example:
- String

## Benefits

- thread safe
- secure
- cache friendly
      `,
    },

    {
      id: 'garbage-collection',

      title: '🔥 Garbage Collection',

      level: 'intermediate',

      tags: ['java', 'gc'],

      content: `
# Garbage Collection

Garbage Collector removes unused objects from heap memory.

## Benefits

- automatic memory management
- prevents memory leaks

## Important Point

System.gc() only requests GC.

JVM may ignore it.
      `,
    },

    {
      id: 'enum',

      title: 'Enum in Java',

      level: 'beginner',

      tags: ['java', 'enum'],

      content: `
# Enum in Java

Enum represents fixed set of constants.

Example:
- DAYS
- STATUS
- ROLE

Enums improve readability and type safety.
      `,
    },

    {
      id: 'packages',

      title: 'Packages in Java',

      level: 'beginner',

      tags: ['java', 'packages'],

      content: `
# Packages in Java

Packages organize classes and interfaces.

Benefits:
- modularity
- namespace management
- access protection
      `,
    },

    {
      id: 'inner-classes',

      title: 'Inner Classes',

      level: 'intermediate',

      tags: ['java', 'inner-class'],

      content: `
# Inner Classes

Class defined inside another class.

Types:
- member inner class
- static nested class
- anonymous class
- local inner class
      `,
    },
    {
      id: 'data-types',

      title: '🔥 Data Types in Java',

      level: 'beginner',

      tags: ['java', 'data-types'],

      content: `
# Data Types in Java

Java supports two types of data types.

## Primitive Data Types

- byte
- short
- int
- long
- float
- double
- char
- boolean

Primitive types store actual values.

## Non-Primitive Data Types

Examples:
- String
- Arrays
- Classes
- Interfaces

They store references to objects.

## Important Interview Point

Default integer type in Java is int.

Default decimal type is double.

## Interview Summary

Primitive → stores values

Non-primitive → stores references
  `,
    },

    {
      id: 'variable-scopes',

      title: '🔥 Variable Scopes in Java',

      level: 'beginner',

      tags: ['java', 'variables', 'scope'],

      content: `
# Variable Scopes in Java

Java variables are classified based on scope.

## Local Variable

Declared inside method.

Accessible only within method.

## Instance Variable

Declared inside class but outside methods.

Every object gets separate copy.

## Static Variable

Shared among all objects.

Belongs to class.

## Interview Summary

Local → method level

Instance → object level

Static → class level
  `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Variable Scope Example',

          code: `
class Test {

  static int count = 0;

  int age = 10;

  void show() {

    int number = 5;

    System.out.println(number);
  }
}
      `,
        },
      ],
    },

    {
      id: 'command-line-execution-flow',

      title: '🔥 Java Command Line Execution Flow',

      level: 'beginner',

      tags: ['java', 'execution-flow', 'javac', 'jvm'],

      content: `
# Java Command Line Execution Flow

## Step 1

Write Java source file.

Example:
Main.java

## Step 2

Compile source code using javac.

Compiler converts source into bytecode.

Generated file:
Main.class

## Step 3

JVM executes bytecode using java command.

## Flow Summary

.java
→ javac
→ .class bytecode
→ JVM
→ execution

## Important Interview Point

Java is:
- compiled
- interpreted

because JVM interprets bytecode.
  `,

      codeBlocks: [
        {
          language: 'bash',

          title: 'Java Execution Flow',

          code: `
javac Main.java

java Main
      `,
        },
      ],
    },

    {
      id: 'common-interview-traps',

      title: '🔥🔥 Common Java Interview Traps',

      level: 'intermediate',

      tags: ['java', 'interview', 'traps'],

      content: `
# Common Java Interview Traps

## String Comparison Trap

Using == instead of equals() for strings.

## Integer Cache Trap

Integer values between -128 to 127 are cached.

Integer a = 100;
Integer b = 100;

a == b returns true.

## Mutable HashMap Key Trap

Changing key after insertion may break retrieval.

## finally Block Trap

finally block may not execute if JVM shuts down.

## Static Method Trap

Static methods are hidden, not overridden.

## Null Comparison Trap

Calling methods on null causes NullPointerException.

## Interview Summary

Interviewers often test:
- edge cases
- memory behavior
- object references
- Java internals
  `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Integer Cache Trap',

          code: `
Integer a = 100;
Integer b = 100;

System.out.println(a == b);

Integer x = 200;
Integer y = 200;

System.out.println(x == y);
      `,
        },
      ],
    },
  ],
};
