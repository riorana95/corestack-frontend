import { TopicArea, TopicQuestion } from './topic-wise.model';

const angularQuestions: TopicQuestion[] = [
  {
    id: 'angular-startup-flow',
    title: 'How does an Angular application start?',
    difficulty: 'beginner',
    tags: ['angular', 'startup', 'main.ts'],
    shortAnswer: 'Angular starts from main.ts, bootstraps the root component, and renders it inside index.html.',
    detailedAnswer:
      'In modern Angular, main.ts calls bootstrapApplication with the root component and application providers. Angular creates the root injector, initializes routing and services, then renders the root component where the app selector appears in index.html.',
    codeExample: `bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));`,
  },
  {
    id: 'angular-standalone-components',
    title: 'What are standalone components?',
    difficulty: 'beginner',
    tags: ['angular', 'standalone-components', 'components'],
    shortAnswer: 'Standalone components can be used without declaring them in an NgModule.',
    detailedAnswer:
      'A standalone component declares its own dependencies in the imports array. This reduces module boilerplate, improves lazy loading, and makes feature code easier to move, test, and reason about.',
    codeExample: `@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.html',
})
export class UserCard {}`,
  },
  {
    id: 'angular-di',
    title: 'Explain dependency injection in Angular.',
    difficulty: 'beginner',
    tags: ['angular', 'dependency-injection', 'services'],
    shortAnswer: 'Dependency injection lets Angular provide required services instead of components creating them manually.',
    detailedAnswer:
      'Angular DI improves testability and separation of concerns. Services can be provided at root, route, component, or custom injector levels. Modern Angular also supports inject(), which is useful in functional guards, interceptors, and class fields.',
    codeExample: `private readonly http = inject(HttpClient);

constructor(private userService: UserService) {}`,
  },
  {
    id: 'angular-rxjs-switchmap',
    title: 'When would you use switchMap?',
    difficulty: 'intermediate',
    tags: ['angular', 'rxjs', 'switchmap', 'api'],
    shortAnswer: 'Use switchMap when a new request should cancel the previous one.',
    detailedAnswer:
      'switchMap is ideal for search boxes, filters, and route-param based API calls. If the source emits again, Angular unsubscribes from the previous inner observable and only keeps the latest result.',
    codeExample: `this.search.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term))
);`,
  },
  {
    id: 'angular-signals',
    title: 'What are Angular signals?',
    difficulty: 'intermediate',
    tags: ['angular', 'signals', 'performance'],
    shortAnswer: 'Signals are reactive values that notify Angular exactly when dependent UI needs to update.',
    detailedAnswer:
      'Signals provide fine-grained reactivity. signal stores writable state, computed derives read-only state, and effect runs side-effect logic when dependencies change. They are useful for local UI state and derived values.',
    codeExample: `count = signal(0);
double = computed(() => this.count() * 2);

increment() {
  this.count.update(value => value + 1);
}`,
  },
  {
    id: 'angular-onpush',
    title: 'How does OnPush change detection improve performance?',
    difficulty: 'intermediate',
    tags: ['angular', 'change-detection', 'performance', 'onpush'],
    shortAnswer: 'OnPush lets Angular skip a component subtree unless a known trigger marks it for checking.',
    detailedAnswer:
      'OnPush checks a component when an input reference changes, an event happens inside it, an async pipe emits, or change detection is manually requested. It works best with immutable updates and clear data flow.',
    codeExample: `@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductList {}`,
  },
];

const javascriptQuestions: TopicQuestion[] = [
  {
    id: 'js-hoisting',
    title: 'Explain hoisting with var, let, and const.',
    difficulty: 'beginner',
    tags: ['javascript', 'hoisting', 'tdz'],
    shortAnswer: 'Declarations are registered before execution; var becomes undefined, while let and const stay in the Temporal Dead Zone.',
    detailedAnswer:
      'JavaScript creates an execution context before running code. var declarations are hoisted and initialized as undefined. let and const are also hoisted but cannot be accessed before their declaration line because they remain in the Temporal Dead Zone.',
    codeExample: `console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;`,
  },
  {
    id: 'js-closure',
    title: 'What is closure? Give a real example.',
    difficulty: 'beginner',
    tags: ['javascript', 'closure', 'function'],
    shortAnswer: 'A closure is a function that remembers variables from its outer scope even after that scope finishes.',
    detailedAnswer:
      'Closures are used for private state, debounce, memoization, and function factories. The inner function keeps access to the lexical environment where it was created.',
    codeExample: `function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}`,
  },
  {
    id: 'js-event-loop',
    title: 'Explain the event loop.',
    difficulty: 'intermediate',
    tags: ['javascript', 'event-loop', 'async'],
    shortAnswer: 'The event loop coordinates the call stack, microtask queue, and macrotask queue.',
    detailedAnswer:
      'Synchronous code runs first on the call stack. Promise callbacks go to the microtask queue, while setTimeout and DOM events go to the macrotask queue. After the stack is empty, all microtasks run before the next macrotask.',
    codeExample: `console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
// A, D, C, B`,
  },
  {
    id: 'js-this-arrow',
    title: 'What is this in arrow functions?',
    difficulty: 'intermediate',
    tags: ['javascript', 'this', 'arrow-function'],
    shortAnswer: 'Arrow functions do not create their own this; they capture this from the surrounding lexical scope.',
    detailedAnswer:
      'Normal functions determine this based on how they are called. Arrow functions inherit this from where they are defined. That is why arrow functions are not ideal as object methods when you need the object as this.',
    codeExample: `const user = {
  name: 'Rio',
  normal() { return this.name; },
  arrow: () => this.name,
};`,
  },
  {
    id: 'js-debounce',
    title: 'Implement debounce.',
    difficulty: 'intermediate',
    tags: ['javascript', 'coding', 'debounce'],
    shortAnswer: 'Debounce delays a function until the user stops triggering it for a specified time.',
    detailedAnswer:
      'Debounce is commonly used in search inputs, resize handlers, and auto-save flows. Each new call clears the previous timer and starts a fresh one.',
    codeExample: `function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}`,
  },
  {
    id: 'js-promise-all',
    title: 'Implement Promise.all.',
    difficulty: 'advanced',
    tags: ['javascript', 'coding', 'promise'],
    shortAnswer: 'Promise.all resolves when all promises resolve, and rejects as soon as one rejects.',
    detailedAnswer:
      'A custom implementation tracks result order, resolved count, and rejection. It should also support non-promise values by wrapping each item with Promise.resolve.',
    codeExample: `function promiseAll(items) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (items.length === 0) resolve([]);

    items.forEach((item, index) => {
      Promise.resolve(item)
        .then(value => {
          results[index] = value;
          completed++;
          if (completed === items.length) resolve(results);
        })
        .catch(reject);
    });
  });
}`,
  },
];

const reactQuestions: TopicQuestion[] = [
  {
    id: 'react-props-state',
    title: 'What is the difference between props and state?',
    difficulty: 'beginner',
    tags: ['react', 'props', 'state'],
    shortAnswer: 'Props are passed from parent to child; state is owned and updated by the component.',
    detailedAnswer:
      'Props make components reusable and configurable. State stores data that changes over time due to user interaction, API responses, or internal component logic.',
    codeExample: `function Counter({ title }) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{title}: {count}</button>;
}`,
  },
  {
    id: 'react-useeffect',
    title: 'Explain useEffect dependency array.',
    difficulty: 'intermediate',
    tags: ['react', 'hooks', 'useeffect'],
    shortAnswer: 'The dependency array controls when the effect runs again.',
    detailedAnswer:
      'Without a dependency array, useEffect runs after every render. With an empty array, it runs once after mount. With dependencies, it reruns when any listed value changes. Cleanup runs before rerun and unmount.',
    codeExample: `useEffect(() => {
  const controller = new AbortController();
  fetch('/api/users', { signal: controller.signal });
  return () => controller.abort();
}, []);`,
  },
  {
    id: 'react-reconciliation',
    title: 'What is reconciliation in React?',
    difficulty: 'intermediate',
    tags: ['react', 'reconciliation', 'performance'],
    shortAnswer: 'Reconciliation is React comparing old and new virtual trees to update the real DOM efficiently.',
    detailedAnswer:
      'React uses keys to match list items across renders. Stable keys help React preserve state and avoid unnecessary DOM work. Bad keys can cause incorrect UI state and performance issues.',
    codeExample: `{items.map(item => (
  <TodoItem key={item.id} todo={item} />
))}`,
  },
];

const backendQuestions: TopicQuestion[] = [
  {
    id: 'java-oops',
    title: 'Explain OOP concepts in Java.',
    difficulty: 'beginner',
    tags: ['java', 'oops', 'backend'],
    shortAnswer: 'OOP has four pillars: encapsulation, inheritance, polymorphism, and abstraction.',
    detailedAnswer:
      'Encapsulation protects data through controlled access. Inheritance reuses behavior. Polymorphism allows the same method call to behave differently. Abstraction hides implementation details behind contracts.',
    codeExample: `interface Payment {
  void pay();
}

class CardPayment implements Payment {
  public void pay() {
    System.out.println("Paid by card");
  }
}`,
  },
  {
    id: 'spring-rest-controller',
    title: 'How do you build REST APIs in Spring Boot?',
    difficulty: 'beginner',
    tags: ['springboot', 'restapi', 'backend'],
    shortAnswer: 'Use @RestController with mapping annotations like @GetMapping and @PostMapping.',
    detailedAnswer:
      'A REST controller receives HTTP requests, maps request data into DTOs, calls service logic, and returns JSON responses. Validation and exception handling should be centralized for clean APIs.',
    codeExample: `@RestController
@RequestMapping("/api/users")
class UserController {
  @GetMapping("/{id}")
  UserResponse getUser(@PathVariable Long id) {
    return service.getUser(id);
  }
}`,
  },
  {
    id: 'spring-jwt',
    title: 'How does JWT authentication work in Spring Security?',
    difficulty: 'intermediate',
    tags: ['springboot', 'security', 'jwt', 'backend'],
    shortAnswer: 'The backend validates credentials, returns a token, and checks that token on protected requests.',
    detailedAnswer:
      'A JWT filter reads the Authorization header, validates the token signature and expiry, loads the user, and places authentication into the SecurityContext. Access tokens are short-lived; refresh tokens help renew sessions.',
    codeExample: `Authorization: Bearer <access-token>`,
  },
  {
    id: 'kafka-basics',
    title: 'What are Kafka topics, partitions, and consumer groups?',
    difficulty: 'intermediate',
    tags: ['kafka', 'backend', 'event-driven'],
    shortAnswer: 'A topic stores events, partitions scale ordering/parallelism, and consumer groups share processing.',
    detailedAnswer:
      'Kafka producers publish records to topics. Topics are split into partitions. Consumers in the same group divide partitions among themselves so each message is processed once per group. Offsets track progress.',
    codeExample: `@KafkaListener(topics = "orders", groupId = "billing-service")
public void consume(OrderCreated event) {
  billingService.createInvoice(event);
}`,
  },
];

const machineCodingQuestions: TopicQuestion[] = [
  {
    id: 'mc-autocomplete',
    title: 'Build autocomplete / typeahead search.',
    difficulty: 'intermediate',
    tags: ['machine-coding', 'search', 'debounce'],
    shortAnswer: 'Create a search input that filters or fetches suggestions as the user types.',
    detailedAnswer:
      'A strong solution includes debounce, loading state, empty state, keyboard navigation, highlighted active option, and request cancellation when using APIs.',
    codeExample: `search$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => fetchSuggestions(term))
);`,
  },
  {
    id: 'mc-modal',
    title: 'Build a reusable modal.',
    difficulty: 'beginner',
    tags: ['machine-coding', 'modal', 'component'],
    shortAnswer: 'A modal displays focused content above the page and blocks background interaction.',
    detailedAnswer:
      'A good modal supports open/close state, backdrop click, Escape key, focus handling, projected content, and reusable footer actions.',
    codeExample: `<app-modal [open]="isOpen" (close)="isOpen = false">
  <h2>Confirm delete</h2>
  <button>Delete</button>
</app-modal>`,
  },
  {
    id: 'tricky-var-timeout',
    title: 'Predict output of var loop with setTimeout.',
    difficulty: 'intermediate',
    tags: ['machine-coding', 'tricky-output', 'javascript', 'event-loop'],
    shortAnswer: 'It prints 3, 3, 3 because var is function scoped and all callbacks share the same variable.',
    detailedAnswer:
      'By the time setTimeout callbacks run, the loop has finished and i is 3. Using let creates a new block-scoped i for each iteration, which prints 0, 1, 2.',
    codeExample: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 3, 3, 3`,
  },
];

export const TOPIC_WISE_AREAS: TopicArea[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Angular, JavaScript, React, HTML, CSS, browser APIs, and UI performance.',
    accent: '#38bdf8',
    nodes: [
      {
        id: 'angular',
        title: 'Angular',
        summary: 'Master Angular architecture, components, RxJS, signals, routing, forms, security, and performance.',
        tags: ['angular', 'frontend'],
        questions: angularQuestions,
        children: [
          { id: 'angular-basics', title: 'Angular Basics', summary: 'Architecture, CLI, app startup, project structure, main.ts, index.html, AppComponent.', tags: ['angular'] },
          { id: 'angular-components', title: 'Components', summary: 'Metadata, standalone components, communication, ViewChild, content projection, smart/dumb components.', tags: ['components'] },
          { id: 'angular-templates', title: 'Templates and Binding', summary: 'Interpolation, property binding, event binding, two-way binding, template refs, class/style binding.', tags: ['binding'] },
          { id: 'angular-directives-pipes', title: 'Directives and Pipes', summary: 'Built-in directives, custom directives, HostListener, HostBinding, pure pipes, async pipe.', tags: ['directives', 'pipes'] },
          { id: 'angular-services-di', title: 'Services and DI', summary: 'Services, inject(), constructor injection, providers, InjectionToken, hierarchical injectors.', tags: ['services', 'dependency-injection'] },
          { id: 'angular-routing', title: 'Routing', summary: 'RouterOutlet, params, query params, child routes, lazy loading, guards, resolvers, preloading.', tags: ['routing'] },
          { id: 'angular-forms', title: 'Forms', summary: 'Template-driven forms, reactive forms, FormArray, validators, dynamic forms, valueChanges.', tags: ['forms'] },
          { id: 'angular-http-rxjs', title: 'HTTP and RxJS', summary: 'HttpClient, interceptors, error handling, Subjects, mapping operators, combination operators, memory leaks.', tags: ['rxjs', 'api'] },
          { id: 'angular-signals-state', title: 'Signals and State', summary: 'signal, computed, effect, toSignal, shared state, NgRx basics, services vs signals.', tags: ['signals', 'state-management'] },
          { id: 'angular-performance', title: 'Performance and Security', summary: 'OnPush, trackBy, @defer, virtual scroll, SSR, hydration, XSS, JWT storage, route protection.', tags: ['performance', 'security'] },
        ],
      },
      {
        id: 'javascript',
        title: 'JavaScript',
        summary: 'Core language, functions, objects, async runtime, DOM, tricky output questions, and coding patterns.',
        tags: ['javascript', 'frontend'],
        questions: javascriptQuestions,
        children: [
          { id: 'js-basics', title: 'Basics', summary: 'var, let, const, data types, coercion, equality, truthy/falsy, optional chaining, nullish coalescing.', tags: ['javascript'] },
          { id: 'js-scope', title: 'Scope and Execution', summary: 'Global/function/block scope, lexical scope, execution context, call stack, hoisting, TDZ.', tags: ['scope', 'hoisting'] },
          { id: 'js-functions', title: 'Functions', summary: 'Declarations, expressions, arrows, callbacks, HOFs, pure functions, IIFE, currying, closures.', tags: ['function'] },
          { id: 'js-objects-arrays', title: 'Objects and Arrays', summary: 'Object methods, destructuring, array methods, spread/rest, shallow copy, deep copy, immutability.', tags: ['object', 'array'] },
          { id: 'js-this-prototype', title: 'this and Prototypes', summary: 'this binding, call/apply/bind, prototype chain, Object.create, constructors, classes, inheritance.', tags: ['this', 'prototype'] },
          { id: 'js-async', title: 'Async JavaScript', summary: 'Event loop, Web APIs, queues, promises, async/await, fetch, AbortController.', tags: ['event-loop', 'promise'] },
          { id: 'js-dom', title: 'DOM and Browser', summary: 'DOM selection, events, bubbling, capturing, delegation, browser storage, cookies.', tags: ['dom', 'event'] },
        ],
      },
      {
        id: 'react',
        title: 'React',
        summary: 'React basics, hooks, rendering, performance, state management, side effects, and advanced patterns.',
        tags: ['react', 'frontend'],
        questions: reactQuestions,
        children: [
          { id: 'react-basics', title: 'React Basics', summary: 'JSX, components, props, state, conditional rendering, lists, keys, composition.', tags: ['react'] },
          { id: 'react-hooks', title: 'Hooks', summary: 'useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, custom hooks.', tags: ['hooks'] },
          { id: 'react-performance', title: 'Rendering and Performance', summary: 'Rendering lifecycle, reconciliation, virtual DOM, React.memo, lazy loading, code splitting.', tags: ['performance'] },
          { id: 'react-state', title: 'State Management', summary: 'Local state, lifting state, Context, reducers, Redux, Zustand, React Query, server state.', tags: ['state-management'] },
          { id: 'react-advanced', title: 'Advanced React', summary: 'Error boundaries, portals, refs, children prop, compound components, render props, HOCs, Suspense.', tags: ['advanced'] },
        ],
      },
      {
        id: 'html-css',
        title: 'HTML and CSS',
        summary: 'Semantic HTML, forms, accessibility, CSS layout, responsive design, and browser rendering basics.',
        tags: ['html', 'css', 'frontend'],
        children: [
          { id: 'html-semantics', title: 'Semantic HTML', summary: 'section vs div, forms, accessibility, labels, buttons, landmarks.', tags: ['html'] },
          { id: 'css-layout', title: 'CSS Layout', summary: 'Box model, flexbox, grid, position, responsive design, media queries.', tags: ['css'] },
          { id: 'css-architecture', title: 'CSS Architecture', summary: 'Specificity, inheritance, variables, SCSS, component styling, maintainable class naming.', tags: ['css'] },
        ],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    summary: 'Java, Spring Boot, SQL, Kafka, microservices, and backend system design.',
    accent: '#22c55e',
    nodes: [
      {
        id: 'java',
        title: 'Java',
        summary: 'Core Java, OOP, collections, Java 8+, multithreading, JVM, and memory management.',
        tags: ['java', 'backend'],
        questions: backendQuestions.filter((q) => q.tags.includes('java')),
        children: [
          { id: 'java-basics', title: 'Java Basics', summary: 'JDK, JRE, JVM, data types, control flow, arrays, strings.', tags: ['java'] },
          { id: 'java-oops', title: 'OOP', summary: 'Class, object, encapsulation, inheritance, polymorphism, abstraction, interface vs abstract class.', tags: ['oops'] },
          { id: 'java-core', title: 'Java Core', summary: 'static, final, this, super, exceptions, serialization, wrappers, immutability.', tags: ['java'] },
          { id: 'java-collections', title: 'Collections', summary: 'List, Set, Map, HashMap internals, Comparable, Comparator, ConcurrentHashMap.', tags: ['collections'] },
          { id: 'java8', title: 'Java 8+', summary: 'Lambdas, functional interfaces, streams, Optional, method references, default methods.', tags: ['java8'] },
          { id: 'java-threads', title: 'Multithreading', summary: 'Thread lifecycle, synchronized, volatile, ExecutorService, CompletableFuture, deadlock.', tags: ['multithreading'] },
        ],
      },
      {
        id: 'springboot',
        title: 'Spring Boot',
        summary: 'Spring fundamentals, REST APIs, JPA, security, testing, and production readiness.',
        tags: ['springboot', 'backend'],
        questions: backendQuestions.filter((q) => q.tags.includes('springboot')),
        children: [
          { id: 'spring-basics', title: 'Spring Basics', summary: 'IoC, DI, beans, lifecycle, stereotypes, profiles, configuration.', tags: ['springboot'] },
          { id: 'spring-rest', title: 'REST APIs', summary: 'Controllers, mappings, DTOs, validation, ResponseEntity, global exceptions.', tags: ['restapi'] },
          { id: 'spring-jpa', title: 'Spring Data JPA', summary: 'Entities, repositories, relationships, transactions, N+1, JPQL, pagination.', tags: ['jpa'] },
          { id: 'spring-security', title: 'Security', summary: 'Authentication, authorization, JWT, refresh tokens, SecurityFilterChain, CORS, OAuth2.', tags: ['security'] },
          { id: 'spring-prod', title: 'Testing and Production', summary: 'JUnit, Mockito, MockMvc, H2, logging, actuator, health checks, secrets.', tags: ['testing'] },
        ],
      },
      {
        id: 'kafka',
        title: 'Kafka',
        summary: 'Producer, consumer, topics, partitions, offsets, delivery semantics, and Spring Boot integration.',
        tags: ['kafka', 'backend'],
        questions: backendQuestions.filter((q) => q.tags.includes('kafka')),
        children: [
          { id: 'kafka-core', title: 'Kafka Core', summary: 'Broker, topic, partition, offset, replication, retention.', tags: ['kafka'] },
          { id: 'kafka-consumers', title: 'Consumers', summary: 'Consumer groups, rebalancing, offset commits, retries, dead letter topics.', tags: ['kafka'] },
          { id: 'kafka-spring', title: 'Kafka with Spring Boot', summary: 'KafkaTemplate, @KafkaListener, serialization, error handling, real-time use cases.', tags: ['kafka', 'springboot'] },
        ],
      },
      {
        id: 'database-system-design',
        title: 'Database and System Design',
        summary: 'SQL, PostgreSQL, indexes, transactions, API design, caching, rate limiting, and scalability.',
        tags: ['sql', 'database', 'system-design'],
        children: [
          { id: 'sql-basics', title: 'SQL and PostgreSQL', summary: 'Joins, group by, subqueries, indexes, ACID, transactions, normalization, window functions.', tags: ['sql'] },
          { id: 'microservices', title: 'Microservices', summary: 'API gateway, service discovery, circuit breaker, Saga, event-driven design, observability.', tags: ['microservices'] },
          { id: 'backend-design', title: 'Backend System Design', summary: 'REST design, auth design, pagination, file upload, notifications, chat, e-commerce backend.', tags: ['system-design'] },
        ],
      },
    ],
  },
  {
    id: 'machine-coding',
    title: 'Machine Coding',
    summary: 'Most asked frontend tasks, tricky output questions, and practical UI implementation patterns.',
    accent: '#f59e0b',
    nodes: [
      {
        id: 'most-asked-machine-coding',
        title: 'Most Asked Machine Coding',
        summary: 'Counter, todo, tabs, accordion, modal, toast, rating, carousel, autocomplete, tables, infinite scroll, and more.',
        tags: ['machine-coding'],
        questions: machineCodingQuestions.filter((q) => !q.tags.includes('tricky-output')),
        children: [
          { id: 'mc-beginner', title: 'Beginner Components', summary: 'Counter, todo, tabs, accordion, modal, toast, star rating, progress bar, stepper.', tags: ['beginner'] },
          { id: 'mc-intermediate', title: 'Intermediate Components', summary: 'Autocomplete, pagination, infinite scroll, sortable table, form validation, file explorer.', tags: ['intermediate'] },
          { id: 'mc-advanced', title: 'Advanced Components', summary: 'Virtualized list, data grid, calendar, drag and drop, chat UI, dashboard filters, config-driven forms.', tags: ['advanced'] },
        ],
      },
      {
        id: 'tricky-output-questions',
        title: 'Tricky Output Questions',
        summary: 'Output-based questions for hoisting, closures, event loop, this, object references, type coercion, and arrays.',
        tags: ['tricky-output', 'javascript'],
        questions: machineCodingQuestions.filter((q) => q.tags.includes('tricky-output')),
        children: [
          { id: 'tricky-hoisting', title: 'Hoisting and TDZ', summary: 'Function declarations, var, let, const, duplicate declarations, temporal dead zone.', tags: ['hoisting'] },
          { id: 'tricky-async', title: 'Async Output', summary: 'Promises, setTimeout, microtasks, macrotasks, async/await ordering.', tags: ['event-loop'] },
          { id: 'tricky-this', title: 'this and References', summary: 'Arrow this, method this, call/apply/bind, object references, shallow copy.', tags: ['this'] },
        ],
      },
    ],
  },
];
