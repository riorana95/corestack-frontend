import { DocSection }
from '../../../models/doc.model';

export const JAVA_COMPARABLE_COMPARATOR_SECTION:
DocSection = {

  id: 'java-comparablecomparator',

  title: 'Comparable vs Comparator',

  summary:
    'Java Comparable and Comparator including sorting internals, comparator chaining, stream sorting, TimSort, performance, and production usage.',

  articles: [

    {
      id: 'what-is-comparable',

      title:
        '🔥 What is Comparable?',

      level: 'beginner',

      tags: [
        'java',
        'comparable',
      ],

      content: `
# What is Comparable?

Comparable interface used for natural sorting in Java.

Class implementing Comparable defines default sorting behavior.

## Interview Summary

Comparable modifies original class for sorting.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Comparable Example',

          code: `
class Employee
implements Comparable<Employee> {

    int salary;

    @Override
    public int compareTo(
        Employee other
    ) {
        return this.salary
            - other.salary;
    }
}
          `,
        },
      ],
    },

    {
      id: 'what-is-comparator',

      title:
        '🔥 What is Comparator?',

      level: 'beginner',

      tags: [
        'java',
        'comparator',
      ],

      content: `
# What is Comparator?

Comparator used for custom sorting logic externally.

Does not modify original class.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Comparator Example',

          code: `
Comparator<Employee> comparator =
    (a, b) ->
        a.salary - b.salary;
          `,
        },
      ],
    },

    {
      id: 'comparable-vs-comparator',

      title:
        '🔥 Comparable vs Comparator',

      level: 'beginner',

      tags: [
        'java',
        'sorting',
      ],

      content: `
# Comparable vs Comparator

## Comparable

- natural sorting
- compareTo()
- inside class

## Comparator

- custom sorting
- compare()
- outside class

## Interview Summary

Comparable supports single sorting strategy while Comparator supports multiple sorting strategies.
      `,
    },

    {
      id: 'why-comparable',

      title:
        'Why Comparable?',

      level: 'beginner',

      tags: [
        'java',
        'comparable',
      ],

      content: `
# Why Comparable?

Used when object has natural ordering.
      `,
    },

    {
      id: 'why-comparator',

      title:
        'Why Comparator?',

      level: 'beginner',

      tags: [
        'java',
        'comparator',
      ],

      content: `
# Why Comparator?

Used when multiple sorting strategies required.
      `,
    },

    {
      id: 'natural-sorting',

      title:
        '🔥 Natural Sorting',

      level: 'intermediate',

      tags: [
        'java',
        'sorting',
      ],

      content: `
# Natural Sorting

Default sorting order defined using Comparable.
      `,
    },

    {
      id: 'custom-sorting',

      title:
        '🔥 Custom Sorting',

      level: 'intermediate',

      tags: [
        'java',
        'custom-sorting',
      ],

      content: `
# Custom Sorting

Comparator allows runtime custom sorting behavior.
      `,
    },

    {
      id: 'compareto-method',

      title:
        '🔥 compareTo() Method',

      level: 'intermediate',

      tags: [
        'java',
        'compareto',
      ],

      content: `
# compareTo() Method

Returns:
- negative
- zero
- positive

based on comparison result.
      `,
    },

    {
      id: 'compare-method',

      title:
        '🔥 compare() Method',

      level: 'intermediate',

      tags: [
        'java',
        'compare',
      ],

      content: `
# compare() Method

Comparator compare method compares two objects externally.
      `,
    },

    {
      id: 'sorting-objects',

      title:
        'Sorting Objects',

      level: 'beginner',

      tags: [
        'java',
        'sorting',
      ],

      content: `
# Sorting Objects

Java sorting APIs support Comparable and Comparator implementations.
      `,
    },

    {
      id: 'collections-sort',

      title:
        '🔥 Collections.sort()',

      level: 'beginner',

      tags: [
        'java',
        'collections-sort',
      ],

      content: `
# Collections.sort()

Used for sorting List collections.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Collections.sort Example',

          code: `
Collections.sort(employeeList);
          `,
        },
      ],
    },

    {
      id: 'arrays-sort',

      title:
        'Arrays.sort()',

      level: 'beginner',

      tags: [
        'java',
        'arrays-sort',
      ],

      content: `
# Arrays.sort()

Used for sorting arrays.
      `,
    },

    {
      id: 'treeset-sorting',

      title:
        '🔥 TreeSet Sorting',

      level: 'advanced',

      tags: [
        'java',
        'treeset',
      ],

      content: `
# TreeSet Sorting

TreeSet internally uses compareTo or Comparator for ordering.
      `,
    },

    {
      id: 'treemap-sorting',

      title:
        'TreeMap Sorting',

      level: 'advanced',

      tags: [
        'java',
        'treemap',
      ],

      content: `
# TreeMap Sorting

TreeMap maintains sorted keys using comparator logic.
      `,
    },

    {
      id: 'comparable-internal-working',

      title:
        'Comparable Internal Working',

      level: 'advanced',

      tags: [
        'java',
        'internals',
      ],

      content: `
# Comparable Internal Working

Sorting algorithms invoke compareTo repeatedly during ordering process.
      `,
    },

    {
      id: 'comparator-internal-working',

      title:
        'Comparator Internal Working',

      level: 'advanced',

      tags: [
        'java',
        'internals',
      ],

      content: `
# Comparator Internal Working

Comparator passed dynamically into sorting algorithms.
      `,
    },

    {
      id: 'compareto-contract',

      title:
        '🔥 compareTo() Contract',

      level: 'advanced',

      tags: [
        'java',
        'compareto',
      ],

      content: `
# compareTo() Contract

Contract rules:
- reflexive
- symmetric
- transitive
- consistency
      `,
    },

    {
      id: 'comparator-contract',

      title:
        'Comparator Contract',

      level: 'advanced',

      tags: [
        'java',
        'comparator',
      ],

      content: `
# Comparator Contract

Comparator should provide stable predictable ordering.
      `,
    },

    {
      id: 'comparator-chaining',

      title:
        '🔥 Comparator Chaining',

      level: 'advanced',

      tags: [
        'java',
        'comparator',
      ],

      content: `
# Comparator Chaining

Multiple comparators combined together.
      `,
    },

    {
      id: 'thencomparing',

      title:
        '🔥 thenComparing()',

      level: 'advanced',

      tags: [
        'java',
        'thencomparing',
      ],

      content: `
# thenComparing()

Used for multi-level sorting.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'thenComparing Example',

          code: `
Comparator<Employee> comparator =
    Comparator
        .comparing(Employee::getName)
        .thenComparing(
            Employee::getSalary
        );
          `,
        },
      ],
    },

    {
      id: 'reversed-comparator',

      title:
        'reversed()',

      level: 'intermediate',

      tags: [
        'java',
        'reversed',
      ],

      content: `
# reversed()

Reverses sorting order.
      `,
    },

    {
      id: 'comparing-method',

      title:
        'comparing()',

      level: 'intermediate',

      tags: [
        'java',
        'comparing',
      ],

      content: `
# comparing()

Factory method for comparator creation.
      `,
    },

    {
      id: 'comparingint',

      title:
        'comparingInt()',

      level: 'advanced',

      tags: [
        'java',
        'comparingint',
      ],

      content: `
# comparingInt()

Optimized comparator for primitive int comparison.
      `,
    },

    {
      id: 'null-handling-comparator',

      title:
        '🔥 Null Handling in Comparator',

      level: 'advanced',

      tags: [
        'java',
        'null-handling',
      ],

      content: `
# Null Handling in Comparator

Comparators should safely handle null values.
      `,
    },

    {
      id: 'nullsfirst',

      title:
        '🔥 nullsFirst()',

      level: 'advanced',

      tags: [
        'java',
        'nullsfirst',
      ],

      content: `
# nullsFirst()

Places null values before non-null values.
      `,
    },

    {
      id: 'nullslast',

      title:
        '🔥 nullsLast()',

      level: 'advanced',

      tags: [
        'java',
        'nullslast',
      ],

      content: `
# nullsLast()

Places null values after non-null values.
      `,
    },

    {
      id: 'sorting-multiple-fields',

      title:
        '🔥 Sorting by Multiple Fields',

      level: 'advanced',

      tags: [
        'java',
        'multi-field',
      ],

      content: `
# Sorting by Multiple Fields

Sorting can chained across multiple attributes.
      `,
    },

    {
      id: 'ascending-descending-sorting',

      title:
        'Ascending vs Descending Sorting',

      level: 'beginner',

      tags: [
        'java',
        'sorting',
      ],

      content: `
# Ascending vs Descending Sorting

Sorting order controlled using comparator logic.
      `,
    },

    {
      id: 'sorting-custom-objects',

      title:
        '🔥 Sorting Custom Objects',

      level: 'intermediate',

      tags: [
        'java',
        'sorting',
      ],

      content: `
# Sorting Custom Objects

Custom objects sorted using Comparable or Comparator.
      `,
    },

    {
      id: 'stable-sorting',

      title:
        '🔥 Stable Sorting',

      level: 'advanced',

      tags: [
        'java',
        'stable-sorting',
      ],

      content: `
# Stable Sorting

Equal elements maintain original relative order.
      `,
    },

    {
      id: 'timsort-algorithm',

      title:
        '🔥 TimSort Algorithm',

      level: 'advanced',

      tags: [
        'java',
        'timsort',
      ],

      content: `
# TimSort Algorithm

Java uses TimSort for object sorting.

Combines:
- merge sort
- insertion sort
      `,
    },

    {
      id: 'sorting-performance',

      title:
        '🔥 Sorting Performance',

      level: 'advanced',

      tags: [
        'java',
        'performance',
      ],

      content: `
# Sorting Performance

Performance depends on:
- algorithm
- comparator complexity
- dataset size
      `,
    },

    {
      id: 'sorting-complexity',

      title:
        'Sorting Complexity',

      level: 'advanced',

      tags: [
        'java',
        'complexity',
      ],

      content: `
# Sorting Complexity

Average sorting complexity:
O(n log n)
      `,
    },

    {
      id: 'comparator-with-lambdas',

      title:
        '🔥 Comparator with Lambdas',

      level: 'intermediate',

      tags: [
        'java',
        'lambda',
      ],

      content: `
# Comparator with Lambdas

Java 8 simplified comparator creation using lambdas.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Lambda Comparator',

          code: `
employeeList.sort(
    (a, b) ->
        a.salary - b.salary
);
          `,
        },
      ],
    },

    {
      id: 'stream-api-sorting',

      title:
        '🔥 Stream API Sorting',

      level: 'advanced',

      tags: [
        'java',
        'streams',
      ],

      content: `
# Stream API Sorting

Streams support functional sorting pipelines.
      `,
    },

    {
      id: 'sorted-stream',

      title:
        'sorted() in Streams',

      level: 'advanced',

      tags: [
        'java',
        'streams',
      ],

      content: `
# sorted() in Streams

sorted() performs stream ordering operation.
      `,
    },

    {
      id: 'parallel-stream-sorting',

      title:
        'Parallel Stream Sorting',

      level: 'advanced',

      tags: [
        'java',
        'parallel-stream',
      ],

      content: `
# Parallel Stream Sorting

Parallel sorting improves performance for large datasets.
      `,
    },

    {
      id: 'comparator-priorityqueue',

      title:
        '🔥 Comparator in PriorityQueue',

      level: 'advanced',

      tags: [
        'java',
        'priorityqueue',
      ],

      content: `
# Comparator in PriorityQueue

PriorityQueue ordering controlled using comparator logic.
      `,
    },

    {
      id: 'heap-design-comparator',

      title:
        'Comparator in Heap Design',

      level: 'advanced',

      tags: [
        'java',
        'heap',
      ],

      content: `
# Comparator in Heap Design

Heap structures depend heavily on comparator ordering behavior.
      `,
    },

    {
      id: 'equals-vs-compareto',

      title:
        '🔥 equals() vs compareTo()',

      level: 'advanced',

      tags: [
        'java',
        'equals',
      ],

      content: `
# equals() vs compareTo()

equals checks logical equality.

compareTo checks ordering.
      `,
    },

    {
      id: 'consistency-with-equals',

      title:
        '🔥 Consistency with equals()',

      level: 'advanced',

      tags: [
        'java',
        'consistency',
      ],

      content: `
# Consistency with equals()

compareTo returning 0 should ideally align with equals().
      `,
    },

    {
      id: 'classcastexception-sorting',

      title:
        'ClassCastException in Sorting',

      level: 'advanced',

      tags: [
        'java',
        'exception',
      ],

      content: `
# ClassCastException in Sorting

Occurs when incompatible objects compared during sorting.
      `,
    },

    {
      id: 'nullpointerexception-sorting',

      title:
        'NullPointerException in Sorting',

      level: 'advanced',

      tags: [
        'java',
        'nullpointerexception',
      ],

      content: `
# NullPointerException in Sorting

Occurs if comparator does not safely handle null values.
      `,
    },

    {
      id: 'mutable-object-sorting-problems',

      title:
        '🔥 Mutable Object Sorting Problems',

      level: 'advanced',

      tags: [
        'java',
        'mutable-object',
      ],

      content: `
# Mutable Object Sorting Problems

Changing object state after insertion may break sorted collections.
      `,
    },

    {
      id: 'production-sorting-problems',

      title:
        '🔥 Production Sorting Problems',

      level: 'advanced',

      tags: [
        'java',
        'production',
      ],

      content: `
# Production Sorting Problems

Common issues:
- unstable sorting
- inconsistent comparators
- null handling bugs
- performance bottlenecks
      `,
    },

    {
      id: 'real-world-sorting-examples',

      title:
        '🔥 Real World Sorting Examples',

      level: 'advanced',

      tags: [
        'java',
        'real-world',
      ],

      content: `
# Real World Sorting Examples

Examples:
- salary sorting
- ranking systems
- leaderboard ordering
- search result ranking
      `,
    },

    {
      id: 'production-best-practices-sorting',

      title:
        '🔥 Production Best Practices',

      level: 'advanced',

      tags: [
        'java',
        'best-practice',
      ],

      content: `
# Production Best Practices

- use comparator chaining
- avoid inconsistent comparison
- handle null safely
- benchmark large sorting operations
- prefer immutable sorting keys
      `,
    },

    {
      id: 'comparator-interview-traps',

      title:
        '🔥🔥 Comparator Interview Traps',

      level: 'advanced',

      tags: [
        'java',
        'interview-trap',
      ],

      content: `
# Comparator Interview Traps

Common traps:
- compareTo contract violations
- overflow using subtraction
- inconsistent equals logic
- null handling mistakes
- mutable sorting keys
      `,
    },

  ],
};