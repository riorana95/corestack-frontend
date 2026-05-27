import { DocSection }
from '../../../models/doc.model';

export const JAVA_COLLECTIONS_SECTION:
DocSection = {

  id: 'java-collections',

  title: 'Collections',

  summary:
    'Java Collection Framework, internal working, interview questions, concurrency, sorting, and production best practices.',

  articles: [

    {
      id: 'collection-framework',

      title:
        '🔥 What is Collection Framework?',

      level: 'beginner',

      tags: [
        'java',
        'collections',
      ],

      content: `
# Collection Framework

Collection Framework provides standardized architecture for storing and manipulating groups of objects.

## Benefits

- reusable data structures
- scalability
- sorting support
- searching support

## Main Interfaces

- List
- Set
- Queue
- Map

## Interview Summary

Collection Framework simplifies data handling and improves code reusability.
      `,
    },

    {
      id: 'collection-vs-collections',

      title:
        '🔥 Collection vs Collections',

      level: 'beginner',

      tags: [
        'java',
        'collection',
      ],

      content: `
# Collection vs Collections

## Collection

Interface representing group of objects.

## Collections

Utility class providing helper methods.

Examples:
- sort()
- reverse()
- shuffle()

## Interview Summary

Collection → interface

Collections → utility class
      `,
    },

    {
      id: 'list-vs-set-vs-map',

      title:
        '🔥 List vs Set vs Map',

      level: 'beginner',

      tags: [
        'java',
        'list',
        'set',
        'map',
      ],

      content: `
# List vs Set vs Map

## List

- ordered
- duplicates allowed

## Set

- unique elements
- no duplicates

## Map

- key-value pairs

## Interview Summary

List → ordered

Set → unique

Map → key-value storage
      `,
    },

    {
      id: 'arraylist',

      title:
        '🔥 ArrayList',

      level: 'beginner',

      tags: [
        'java',
        'arraylist',
      ],

      content: `
# ArrayList

ArrayList uses dynamic array internally.

## Features

- ordered
- duplicates allowed
- fast random access

## Drawback

Insertion/deletion in middle is slower.

## Interview Summary

ArrayList is best for read-heavy operations.
      `,
    },

    {
      id: 'linkedlist',

      title:
        '🔥 LinkedList',

      level: 'beginner',

      tags: [
        'java',
        'linkedlist',
      ],

      content: `
# LinkedList

LinkedList uses doubly linked list internally.

## Features

- fast insertion/deletion
- sequential access

## Drawback

Slow random access.

## Interview Summary

LinkedList preferred for frequent modifications.
      `,
    },

    {
      id: 'arraylist-vs-linkedlist',

      title:
        '🔥 ArrayList vs LinkedList',

      level: 'intermediate',

      tags: [
        'java',
        'arraylist',
        'linkedlist',
      ],

      content: `
# ArrayList vs LinkedList

## ArrayList

- dynamic array
- faster retrieval
- slower insertion

## LinkedList

- linked nodes
- faster insertion
- slower retrieval

## Interview Summary

ArrayList → read-heavy

LinkedList → write-heavy
      `,
    },

    {
      id: 'hashset',

      title:
        '🔥 HashSet',

      level: 'beginner',

      tags: [
        'java',
        'hashset',
      ],

      content: `
# HashSet

HashSet stores unique elements.

Internally uses HashMap.

## Features

- no duplicates
- unordered
- allows one null

## Interview Summary

HashSet uses hashing for fast lookup.
      `,
    },

    {
      id: 'treeset',

      title:
        '🔥 TreeSet',

      level: 'intermediate',

      tags: [
        'java',
        'treeset',
      ],

      content: `
# TreeSet

TreeSet stores sorted unique elements.

Internally uses TreeMap.

## Features

- sorted order
- no duplicates
- slower than HashSet

## Interview Summary

TreeSet uses Red-Black Tree internally.
      `,
    },

    {
      id: 'hashset-vs-treeset',

      title:
        '🔥 HashSet vs TreeSet',

      level: 'intermediate',

      tags: [
        'java',
        'hashset',
        'treeset',
      ],

      content: `
# HashSet vs TreeSet

## HashSet

- unordered
- faster

## TreeSet

- sorted
- slower

## Interview Summary

HashSet → performance

TreeSet → sorting
      `,
    },

    {
      id: 'hashmap',

      title:
        '🔥 HashMap',

      level: 'beginner',

      tags: [
        'java',
        'hashmap',
      ],

      content: `
# HashMap

HashMap stores key-value pairs.

## Features

- allows one null key
- unordered
- fast retrieval

## Internal Structure

Uses:
- bucket array
- hashing

## Interview Summary

HashMap provides O(1) average lookup time.
      `,
    },

    {
      id: 'internal-working-hashmap',

      title:
        '🔥🔥 Internal Working of HashMap',

      level: 'intermediate',

      tags: [
        'java',
        'hashmap',
        'internals',
      ],

      content: `
# Internal Working of HashMap

## Step 1

hashCode() generates hash.

## Step 2

Hash converted into bucket index.

## Step 3

Entry stored inside bucket.

## Collision Handling

Java 7:
- linked list

Java 8:
- linked list
- balanced tree after threshold

## Interview Summary

HashMap performance depends on good hashing.
      `,
    },

    {
      id: 'hash-collision',

      title:
        '🔥 Hash Collision',

      level: 'intermediate',

      tags: [
        'java',
        'collision',
      ],

      content: `
# Hash Collision

Collision occurs when multiple keys map to same bucket.

## Java 7

Uses linked list.

## Java 8

Converts to balanced tree after threshold.

## Interview Summary

Good hashCode reduces collisions.
      `,
    },

    {
      id: 'equals-hashcode-hashmap',

      title:
        '🔥 equals() and hashCode() in HashMap',

      level: 'intermediate',

      tags: [
        'java',
        'equals',
        'hashcode',
      ],

      content: `
# equals() and hashCode() in HashMap

HashMap uses:
- hashCode() for bucket selection
- equals() for key comparison

## Important Rule

Equal objects must have equal hashCode.

## Interview Summary

Always override equals() and hashCode() together.
      `,
    },

    {
      id: 'load-factor',

      title:
        '🔥 Load Factor in HashMap',

      level: 'intermediate',

      tags: [
        'java',
        'load-factor',
      ],

      content: `
# Load Factor in HashMap

Load factor decides when resizing occurs.

Default value:
0.75

## Formula

size / capacity

## Interview Summary

Higher load factor saves memory but increases collisions.
      `,
    },

    {
      id: 'rehashing',

      title:
        'Rehashing',

      level: 'intermediate',

      tags: [
        'java',
        'rehashing',
      ],

      content: `
# Rehashing

Rehashing occurs when HashMap capacity increases.

Entries redistributed into new buckets.

## Drawback

Temporary performance cost during resizing.
      `,
    },

    {
      id: 'hashmap-vs-hashtable',

      title:
        '🔥 HashMap vs Hashtable',

      level: 'intermediate',

      tags: [
        'java',
        'hashmap',
        'hashtable',
      ],

      content: `
# HashMap vs Hashtable

## HashMap

- not synchronized
- faster
- allows null

## Hashtable

- synchronized
- slower
- no null allowed

## Interview Summary

Hashtable is legacy class.
      `,
    },

    {
      id: 'concurrenthashmap',

      title:
        '🔥 ConcurrentHashMap',

      level: 'intermediate',

      tags: [
        'java',
        'concurrenthashmap',
      ],

      content: `
# ConcurrentHashMap

Thread-safe version of HashMap.

## Benefits

- high concurrency
- better performance than Hashtable

## Interview Summary

ConcurrentHashMap avoids locking entire map.
      `,
    },

    {
      id: 'fail-fast-vs-fail-safe',

      title:
        '🔥 Fail Fast vs Fail Safe Iterator',

      level: 'intermediate',

      tags: [
        'java',
        'iterator',
      ],

      content: `
# Fail Fast vs Fail Safe

## Fail Fast

Throws ConcurrentModificationException.

## Fail Safe

Works on cloned collection.

Does not throw exception.

## Interview Summary

ArrayList iterator is fail-fast.
      `,
    },

    {
      id: 'comparable-vs-comparator',

      title:
        '🔥 Comparable vs Comparator',

      level: 'intermediate',

      tags: [
        'java',
        'comparable',
        'comparator',
      ],

      content: `
# Comparable vs Comparator

## Comparable

Defines natural sorting.

Uses compareTo().

## Comparator

Defines custom sorting.

Uses compare().

## Interview Summary

Comparable → internal sorting

Comparator → external sorting
      `,
    },

    {
      id: 'hashmap-vs-treemap',

      title:
        '🔥 HashMap vs TreeMap',

      level: 'intermediate',

      tags: [
        'java',
        'hashmap',
        'treemap',
      ],

      content: `
# HashMap vs TreeMap

## HashMap

- unordered
- faster

## TreeMap

- sorted
- slower

## Interview Summary

TreeMap uses Red-Black Tree internally.
      `,
    },

    {
      id: 'time-complexity',

      title:
        '🔥 Time Complexity of Collections',

      level: 'intermediate',

      tags: [
        'java',
        'complexity',
      ],

      content: `
# Time Complexity of Collections

## ArrayList

get() → O(1)

insert() → O(n)

## HashMap

search() → O(1)

worst case → O(n)

## TreeMap

operations → O(log n)

## Interview Summary

Understanding complexity is very important in interviews.
      `,
    },

    {
      id: 'copyonwritearraylist',

      title:
        '🔥 CopyOnWriteArrayList',

      level: 'advanced',

      tags: [
        'java',
        'copyonwritearraylist',
      ],

      content: `
# CopyOnWriteArrayList

Creates new copy during modification.

## Benefits

- thread safety
- safe iteration

## Drawback

High memory usage during writes.
      `,
    },

    {
      id: 'priorityqueue',

      title:
        '🔥 PriorityQueue',

      level: 'intermediate',

      tags: [
        'java',
        'priorityqueue',
      ],

      content: `
# PriorityQueue

PriorityQueue stores elements based on priority.

Internally uses heap.

## Interview Summary

Useful for:
- scheduling
- top K problems
- shortest path algorithms
      `,
    },

    {
      id: 'why-hashmap-key-immutable',

      title:
        '🔥 Why HashMap Key Should be Immutable',

      level: 'advanced',

      tags: [
        'java',
        'hashmap',
      ],

      content: `
# Why HashMap Key Should be Immutable

Changing key after insertion changes hashCode.

HashMap may fail to retrieve object.

## Interview Summary

Immutable keys ensure stable hashing.
      `,
    },

    {
      id: 'collection-interview-traps',

      title:
        '🔥🔥 Collection Interview Traps',

      level: 'advanced',

      tags: [
        'java',
        'collections',
        'traps',
      ],

      content: `
# Collection Interview Traps

Common traps:
- mutable HashMap keys
- equals/hashCode mismatch
- ConcurrentModificationException
- incorrect sorting
- wrong complexity assumptions

## Interview Summary

Collections questions often test internals and edge cases.
      `,
    },{
  id: 'iterator-interface',

  title:
    'Iterator Interface',

  level: 'beginner',

  tags: [
    'java',
    'iterator',
  ],

  content: `
# Iterator Interface

Iterator is used to traverse collections.

## Important Methods

- hasNext()
- next()
- remove()

## Interview Summary

Iterator supports safe removal during iteration.
  `,
},

{
  id: 'listiterator',

  title:
    'ListIterator',

  level: 'beginner',

  tags: [
    'java',
    'listiterator',
  ],

  content: `
# ListIterator

ListIterator supports:
- forward traversal
- backward traversal

Works only with List implementations.
  `,
},

{
  id: 'sorting-collections',

  title:
    '🔥 Sorting in Collections',

  level: 'intermediate',

  tags: [
    'java',
    'sorting',
  ],

  content: `
# Sorting in Collections

Collections framework supports sorting using:
- Comparable
- Comparator

## Utility Methods

- Collections.sort()
- stream.sorted()

## Interview Summary

Sorting commonly asked in coding rounds.
  `,
},

{
  id: 'collections-utility-class',

  title:
    'Collections Utility Class',

  level: 'beginner',

  tags: [
    'java',
    'collections',
  ],

  content: `
# Collections Utility Class

Provides utility methods for collections.

## Common Methods

- sort()
- reverse()
- shuffle()
- min()
- max()
  `,
},

{
  id: 'vector',

  title:
    'Vector in Java',

  level: 'beginner',

  tags: [
    'java',
    'vector',
  ],

  content: `
# Vector in Java

Vector is synchronized dynamic array.

## Drawback

Slower than ArrayList due to synchronization.
  `,
},

{
  id: 'stack',

  title:
    'Stack in Java',

  level: 'beginner',

  tags: [
    'java',
    'stack',
  ],

  content: `
# Stack in Java

Stack follows LIFO principle.

## Common Operations

- push()
- pop()
- peek()
  `,
},

{
  id: 'queue-interface',

  title:
    'Queue Interface',

  level: 'beginner',

  tags: [
    'java',
    'queue',
  ],

  content: `
# Queue Interface

Queue follows FIFO principle.

## Common Methods

- offer()
- poll()
- peek()
  `,
},

{
  id: 'deque',

  title:
    'Deque Interface',

  level: 'intermediate',

  tags: [
    'java',
    'deque',
  ],

  content: `
# Deque Interface

Deque supports insertion and deletion from both ends.

Can behave as:
- stack
- queue
  `,
},

{
  id: 'linkedhashmap',

  title:
    'LinkedHashMap',

  level: 'intermediate',

  tags: [
    'java',
    'linkedhashmap',
  ],

  content: `
# LinkedHashMap

Maintains insertion order.

Uses:
- hash table
- doubly linked list

## Interview Summary

Useful when order preservation required.
  `,
},

{
  id: 'treemap',

  title:
    'TreeMap',

  level: 'intermediate',

  tags: [
    'java',
    'treemap',
  ],

  content: `
# TreeMap

Stores key-value pairs in sorted order.

Internally uses Red-Black Tree.
  `,
},

{
  id: 'hashtable',

  title:
    'Hashtable',

  level: 'beginner',

  tags: [
    'java',
    'hashtable',
  ],

  content: `
# Hashtable

Thread-safe legacy Map implementation.

Does not allow:
- null key
- null value
  `,
},

{
  id: 'synchronized-collections',

  title:
    '🔥 Synchronized Collections',

  level: 'intermediate',

  tags: [
    'java',
    'synchronization',
  ],

  content: `
# Synchronized Collections

Thread-safe collections created using Collections.synchronized methods.

## Example

Collections.synchronizedList()

## Drawback

Entire collection locked during operations.
  `,
},

{
  id: 'immutable-collections',

  title:
    '🔥 Immutable Collections',

  level: 'intermediate',

  tags: [
    'java',
    'immutable',
  ],

  content: `
# Immutable Collections

Immutable collections cannot be modified after creation.

## Benefits

- thread safety
- predictable behavior
- safer APIs
  `,
},

{
  id: 'blockingqueue',

  title:
    '🔥 BlockingQueue',

  level: 'advanced',

  tags: [
    'java',
    'blockingqueue',
  ],

  content: `
# BlockingQueue

Thread-safe queue for producer-consumer problems.

Supports blocking operations during:
- empty queue
- full queue
  `,
},

{
  id: 'concurrent-collections',

  title:
    'Concurrent Collections',

  level: 'advanced',

  tags: [
    'java',
    'concurrent',
  ],

  content: `
# Concurrent Collections

Designed for multithreaded environments.

Examples:
- ConcurrentHashMap
- CopyOnWriteArrayList
- BlockingQueue
  `,
},

{
  id: 'weakhashmap',

  title:
    'WeakHashMap',

  level: 'advanced',

  tags: [
    'java',
    'weakhashmap',
  ],

  content: `
# WeakHashMap

Entries removed automatically when keys become weakly reachable.

Useful for:
- caching
- memory-sensitive systems
  `,
},

{
  id: 'identityhashmap',

  title:
    'IdentityHashMap',

  level: 'advanced',

  tags: [
    'java',
    'identityhashmap',
  ],

  content: `
# IdentityHashMap

Uses == instead of equals() for key comparison.
  `,
},

{
  id: 'enummap',

  title:
    'EnumMap',

  level: 'advanced',

  tags: [
    'java',
    'enummap',
  ],

  content: `
# EnumMap

Specialized Map implementation for enum keys.

Very memory efficient.
  `,
},

{
  id: 'enumset',

  title:
    'EnumSet',

  level: 'advanced',

  tags: [
    'java',
    'enumset',
  ],

  content: `
# EnumSet

High-performance Set implementation for enums.
  `,
},

{
  id: 'navigablemap',

  title:
    'NavigableMap',

  level: 'advanced',

  tags: [
    'java',
    'navigablemap',
  ],

  content: `
# NavigableMap

Provides navigation methods:
- higherKey()
- lowerKey()
- ceilingKey()
- floorKey()
  `,
},

{
  id: 'navigableset',

  title:
    'NavigableSet',

  level: 'advanced',

  tags: [
    'java',
    'navigableset',
  ],

  content: `
# NavigableSet

Provides navigation methods for sorted sets.
  `,
},

{
  id: 'queue-vs-stack',

  title:
    '🔥 Queue vs Stack',

  level: 'beginner',

  tags: [
    'java',
    'queue',
    'stack',
  ],

  content: `
# Queue vs Stack

## Stack

LIFO structure.

## Queue

FIFO structure.

## Interview Summary

Stack → recursion

Queue → scheduling
  `,
},

{
  id: 'priorityqueue-internals',

  title:
    '🔥 PriorityQueue Internal Working',

  level: 'advanced',

  tags: [
    'java',
    'priorityqueue',
  ],

  content: `
# PriorityQueue Internal Working

Internally uses binary heap.

Insertion and deletion complexity:
O(log n)
  `,
},

{
  id: 'capacity-vs-size',

  title:
    'Capacity vs Size',

  level: 'beginner',

  tags: [
    'java',
    'capacity',
  ],

  content: `
# Capacity vs Size

## Size

Current number of elements.

## Capacity

Allocated storage space.
  `,
},

{
  id: 'removeif-method',

  title:
    'removeIf Method',

  level: 'intermediate',

  tags: [
    'java',
    'removeif',
  ],

  content: `
# removeIf Method

Removes elements matching condition.
  `,
},

{
  id: 'computeifabsent',

  title:
    'computeIfAbsent',

  level: 'intermediate',

  tags: [
    'java',
    'map',
  ],

  content: `
# computeIfAbsent

Adds value only if key absent.
  `,
},

{
  id: 'merge-method',

  title:
    'merge Method',

  level: 'intermediate',

  tags: [
    'java',
    'merge',
  ],

  content: `
# merge Method

Simplifies merging values inside Map.
  `,
},

{
  id: 'null-handling',

  title:
    'Null Handling in Collections',

  level: 'intermediate',

  tags: [
    'java',
    'null',
  ],

  content: `
# Null Handling in Collections

Different collections handle null differently.

## Examples

HashMap:
- allows one null key

Hashtable:
- no null allowed
  `,
},

{
  id: 'memory-optimization',

  title:
    'Memory Optimization in Collections',

  level: 'advanced',

  tags: [
    'java',
    'memory',
  ],

  content: `
# Memory Optimization in Collections

Optimization strategies:
- proper initial capacity
- immutable collections
- weak references
  `,
},{
  id: 'serialization-in-collections',

  title:
    'Serialization in Collections',

  level: 'intermediate',

  tags: [
    'java',
    'serialization',
  ],

  content: `
# Serialization in Collections

Serialization converts collection objects into byte stream.

Useful for:
- file storage
- network transfer
- caching

Most collection classes implement Serializable interface.
  `,
},

{
  id: 'cloneable-collections',

  title:
    'Cloneable Collections',

  level: 'intermediate',

  tags: [
    'java',
    'clone',
  ],

  content: `
# Cloneable Collections

Some collections support cloning using clone() method.

## Important Point

Default cloning creates shallow copy.
  `,
},

{
  id: 'deep-vs-shallow-copy-collections',

  title:
    '🔥 Deep Copy vs Shallow Copy in Collections',

  level: 'intermediate',

  tags: [
    'java',
    'deep-copy',
  ],

  content: `
# Deep Copy vs Shallow Copy in Collections

## Shallow Copy

Copies references.

Changes affect original objects.

## Deep Copy

Creates completely independent copies.

## Interview Summary

Deep copy avoids shared mutable state.
  `,
},

{
  id: 'custom-sorting',

  title:
    '🔥 Custom Sorting',

  level: 'intermediate',

  tags: [
    'java',
    'sorting',
  ],

  content: `
# Custom Sorting

Custom sorting implemented using Comparator.

Useful for:
- multiple sorting conditions
- descending order
- object sorting
  `,
},

{
  id: 'lru-cache-linkedhashmap',

  title:
    '🔥 LRU Cache using LinkedHashMap',

  level: 'advanced',

  tags: [
    'java',
    'lru-cache',
  ],

  content: `
# LRU Cache using LinkedHashMap

LinkedHashMap maintains insertion/access order.

Used to implement:
- Least Recently Used cache

## Real World Usage

Caching systems frequently use LRU logic.
  `,
},

{
  id: 'frequency-counter-hashmap',

  title:
    '🔥 Frequency Counter using HashMap',

  level: 'beginner',

  tags: [
    'java',
    'hashmap',
  ],

  content: `
# Frequency Counter using HashMap

HashMap commonly used for counting frequencies.

## Example

- word count
- character frequency
- duplicate detection
  `,

  codeBlocks: [
    {
      language: 'java',

      title: 'Frequency Counter Example',

      code: `
Map<String, Integer> map =
  new HashMap<>();

for(String word : words) {

  map.put(
    word,
    map.getOrDefault(word, 0) + 1
  );
}
      `,
    },
  ],
},

{
  id: 'top-k-heap-problems',

  title:
    '🔥 Top K Problems using Heap',

  level: 'advanced',

  tags: [
    'java',
    'heap',
  ],

  content: `
# Top K Problems using Heap

PriorityQueue commonly used for:
- top K largest
- top K smallest
- ranking systems

## Interview Summary

Heap optimizes repeated min/max extraction.
  `,
},

{
  id: 'real-world-collection-usage',

  title:
    'Real World Collection Usage',

  level: 'intermediate',

  tags: [
    'java',
    'real-world',
  ],

  content: `
# Real World Collection Usage

## ArrayList

UI lists, APIs.

## HashMap

Caching, lookup systems.

## Queue

Scheduling systems.

## Set

Duplicate prevention.
  `,
},

{
  id: 'production-best-practices',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'production',
  ],

  content: `
# Production Best Practices

- prefer interfaces over implementations
- avoid unnecessary synchronization
- choose proper collection type
- avoid memory leaks
- use immutable collections where possible
  `,
},

{
  id: 'collection-interview-programs',

  title:
    'Collection Interview Programs',

  level: 'beginner',

  tags: [
    'java',
    'programs',
  ],

  content: `
# Collection Interview Programs

Common coding questions:
- remove duplicates
- frequency counter
- sorting custom objects
- top K elements
- reverse list
  `,
},

{
  id: 'common-complexity-questions',

  title:
    '🔥 Common Time Complexity Questions',

  level: 'intermediate',

  tags: [
    'java',
    'complexity',
  ],

  content: `
# Common Time Complexity Questions

## ArrayList

get() → O(1)

## LinkedList

search() → O(n)

## HashMap

average search → O(1)

## TreeMap

operations → O(log n)
  `,
},

{
  id: 'memory-leak-collections',

  title:
    '🔥 Memory Leak using Collections',

  level: 'advanced',

  tags: [
    'java',
    'memory-leak',
  ],

  content: `
# Memory Leak using Collections

Collections can cause memory leaks if objects remain referenced.

## Common Causes

- static collections
- unremoved cache entries
- listeners

## Prevention

- cleanup unused references
- use WeakHashMap
  `,
},

{
  id: 'weak-references-collections',

  title:
    'Weak References in Collections',

  level: 'advanced',

  tags: [
    'java',
    'weak-reference',
  ],

  content: `
# Weak References in Collections

Weak references allow garbage collection when object no longer strongly referenced.

Useful for:
- caches
- memory-sensitive systems
  `,
},

{
  id: 'concurrent-collection-best-practices',

  title:
    '🔥 Concurrent Collection Best Practices',

  level: 'advanced',

  tags: [
    'java',
    'concurrency',
  ],

  content: `
# Concurrent Collection Best Practices

- prefer ConcurrentHashMap
- avoid global synchronization
- use CopyOnWriteArrayList carefully
- choose correct concurrent collection
  `,
},

{
  id: 'blocking-vs-nonblocking-collections',

  title:
    'Blocking vs Non-Blocking Collections',

  level: 'advanced',

  tags: [
    'java',
    'blocking',
  ],

  content: `
# Blocking vs Non-Blocking Collections

## Blocking Collections

Threads wait during unavailable operations.

## Non-Blocking Collections

Operations return immediately.

## Interview Summary

BlockingQueue is common blocking collection.
  `,
},

{
  id: 'parallel-processing-collections',

  title:
    'Parallel Processing with Collections',

  level: 'advanced',

  tags: [
    'java',
    'parallel-processing',
  ],

  content: `
# Parallel Processing with Collections

Java 8 streams support parallel execution.

Useful for:
- CPU intensive operations
- large datasets
  `,
},

{
  id: 'immutable-vs-unmodifiable',

  title:
    '🔥 Immutable vs Unmodifiable Collections',

  level: 'advanced',

  tags: [
    'java',
    'immutable',
  ],

  content: `
# Immutable vs Unmodifiable Collections

## Unmodifiable Collection

Original collection can still change internally.

## Immutable Collection

Completely unchangeable.

## Interview Summary

Immutable collections provide stronger safety guarantees.
  `,
},

{
  id: 'collection-framework-architecture',

  title:
    '🔥 Collection Framework Architecture',

  level: 'advanced',

  tags: [
    'java',
    'architecture',
  ],

  content: `
# Collection Framework Architecture

Hierarchy:

Iterable
→ Collection
→ List / Set / Queue

Map is separate hierarchy.

## Interview Summary

Understanding architecture improves collection selection decisions.
  `,
},

  ],
};