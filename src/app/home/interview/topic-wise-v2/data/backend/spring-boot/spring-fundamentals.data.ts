import { DocSection }
from '../../../models/doc.model';

export const SPRING_FUNDAMENTALS_SECTION:
DocSection = {

  id: 'spring-fundamentals',

  title: 'Spring Fundamentals',

  summary:
    'Core Spring and Spring Boot concepts including IOC, Dependency Injection, Beans, AOP, configuration, internal working, and production practices.',

  articles: [

    {
      id: 'what-is-spring-framework',

      title:
        '🔥 What is Spring Framework?',

      level: 'beginner',

      tags: [
        'spring',
        'spring-boot',
      ],

      content: `
Spring Framework is a lightweight Java framework used for building enterprise applications.

It provides:
- dependency injection
- IOC container
- AOP
- transaction management
- web development support

Spring reduces boilerplate code and improves maintainability.
      `,
    },

    {
      id: 'why-spring',

      title:
        '🔥 Why Spring?',

      level: 'beginner',

      tags: [
        'spring',
        'java',
      ],

      content: `
Spring simplifies enterprise Java development.

Benefits:
- loose coupling
- easier testing
- modular architecture
- production-ready ecosystem
- integration support

Spring Boot further reduces configuration complexity.
      `,
    },

    {
      id: 'spring-architecture',

      title:
        'Spring Architecture',

      level: 'beginner',

      tags: [
        'spring',
        'architecture',
      ],

      content: `
Spring architecture consists of multiple modules.

Major layers:
- Core Container
- Data Access
- Web
- AOP
- Security
- Testing

Each module independently usable.
      `,
    },

    {
      id: 'spring-modules',

      title:
        'Spring Modules',

      level: 'beginner',

      tags: [
        'spring',
        'modules',
      ],

      content: `
Major Spring modules:
- spring-core
- spring-context
- spring-web
- spring-data
- spring-aop
- spring-security
- spring-boot
      `,
    },

    {
      id: 'ioc-container',

      title:
        '🔥 IOC Container',

      level: 'beginner',

      tags: [
        'spring',
        'ioc',
      ],

      content: `
IOC stands for Inversion of Control.

Spring container creates and manages application objects automatically.

Instead of application creating objects manually, Spring controls object lifecycle.
      `,
    },

    {
      id: 'dependency-injection',

      title:
        '🔥 Dependency Injection',

      level: 'beginner',

      tags: [
        'spring',
        'di',
      ],

      content: `
Dependency Injection means dependencies provided externally instead of creating them inside class.

Advantages:
- loose coupling
- easier testing
- better maintainability
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Dependency Injection Example',

          code: `
@Service
public class UserService {

    private final UserRepository repository;

    public UserService(
        UserRepository repository
    ) {
        this.repository = repository;
    }
}
          `,
        },
      ],
    },

    {
      id: 'types-of-di',

      title:
        'Types of DI',

      level: 'beginner',

      tags: [
        'spring',
        'dependency-injection',
      ],

      content: `
Main types of Dependency Injection:
- constructor injection
- setter injection
- field injection

Constructor injection preferred in production systems.
      `,
    },

    {
      id: 'constructor-injection',

      title:
        '🔥 Constructor Injection',

      level: 'beginner',

      tags: [
        'spring',
        'constructor-injection',
      ],

      content: `
Dependencies injected using constructor.

Advantages:
- immutable dependencies
- easier testing
- better design
- recommended by Spring team
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Constructor Injection',

          code: `
@Service
public class PaymentService {

    private final OrderService orderService;

    public PaymentService(
        OrderService orderService
    ) {
        this.orderService = orderService;
    }
}
          `,
        },
      ],
    },

    {
      id: 'setter-injection',

      title:
        'Setter Injection',

      level: 'beginner',

      tags: [
        'spring',
        'setter-injection',
      ],

      content: `
Dependencies injected through setter methods.

Useful for optional dependencies.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Setter Injection',

          code: `
@Service
public class EmailService {

    private SmsService smsService;

    @Autowired
    public void setSmsService(
        SmsService smsService
    ) {
        this.smsService = smsService;
    }
}
          `,
        },
      ],
    },

    {
      id: 'field-injection',

      title:
        '🔥 Field Injection',

      level: 'intermediate',

      tags: [
        'spring',
        'field-injection',
      ],

      content: `
Dependencies injected directly into fields using @Autowired.

Field injection not recommended in production because:
- difficult testing
- hidden dependencies
- reflection usage
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Field Injection',

          code: `
@Service
public class UserService {

    @Autowired
    private UserRepository repository;
}
          `,
        },
      ],
    },

    {
      id: 'bean',

      title:
        '🔥 Bean',

      level: 'beginner',

      tags: [
        'spring',
        'bean',
      ],

      content: `
Bean is an object managed by Spring IOC container.

Spring creates, initializes, and injects beans automatically.
      `,
    },

    {
      id: 'bean-lifecycle',

      title:
        '🔥 Bean Lifecycle',

      level: 'intermediate',

      tags: [
        'spring',
        'bean-lifecycle',
      ],

      content: `
Bean lifecycle stages:
- bean creation
- dependency injection
- initialization
- usage
- destruction
      `,
    },

    {
      id: 'bean-scopes',

      title:
        '🔥 Bean Scopes',

      level: 'intermediate',

      tags: [
        'spring',
        'bean-scope',
      ],

      content: `
Common bean scopes:
- singleton
- prototype
- request
- session
- application
      `,
    },

    {
      id: 'singleton-bean',

      title:
        '🔥 Singleton Bean',

      level: 'intermediate',

      tags: [
        'spring',
        'singleton',
      ],

      content: `
Singleton is default bean scope in Spring.

Only one bean instance created per IOC container.
      `,
    },

    {
      id: 'prototype-bean',

      title:
        'Prototype Bean',

      level: 'intermediate',

      tags: [
        'spring',
        'prototype',
      ],

      content: `
New object created every time bean requested from container.
      `,
    },

    {
      id: 'autowiring',

      title:
        '🔥 Autowiring',

      level: 'beginner',

      tags: [
        'spring',
        'autowiring',
      ],

      content: `
Autowiring automatically injects dependencies into Spring beans.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'Autowiring Example',

          code: `
@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;
}
          `,
        },
      ],
    },

    {
      id: 'component-annotation',

      title:
        '@Component',

      level: 'beginner',

      tags: [
        'spring',
        'component',
      ],

      content: `
@Component marks class as Spring-managed bean.
      `,
    },

    {
      id: 'service-annotation',

      title:
        '@Service',

      level: 'beginner',

      tags: [
        'spring',
        'service',
      ],

      content: `
@Service used for business logic layer classes.
      `,
    },

    {
      id: 'repository-annotation',

      title:
        '@Repository',

      level: 'beginner',

      tags: [
        'spring',
        'repository',
      ],

      content: `
@Repository used for persistence layer beans.
      `,
    },

    {
      id: 'controller-annotation',

      title:
        '@Controller',

      level: 'beginner',

      tags: [
        'spring',
        'controller',
      ],

      content: `
@Controller handles web requests in Spring MVC.
      `,
    },

    {
      id: 'configuration-annotation',

      title:
        '@Configuration',

      level: 'intermediate',

      tags: [
        'spring',
        'configuration',
      ],

      content: `
@Configuration defines Spring configuration class.
      `,
    },

    {
      id: 'bean-annotation',

      title:
        '@Bean',

      level: 'intermediate',

      tags: [
        'spring',
        'bean',
      ],

      content: `
@Bean explicitly registers bean into Spring container.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: '@Bean Example',

          code: `
@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
          `,
        },
      ],
    },

    {
      id: 'component-scanning',

      title:
        'Component Scanning',

      level: 'intermediate',

      tags: [
        'spring',
        'component-scan',
      ],

      content: `
Spring automatically scans packages and registers beans.
      `,
    },

    {
      id: 'application-context',

      title:
        '🔥 ApplicationContext',

      level: 'intermediate',

      tags: [
        'spring',
        'application-context',
      ],

      content: `
ApplicationContext is advanced Spring IOC container.

Provides:
- bean management
- events
- AOP
- environment support
      `,
    },

    {
      id: 'beanfactory',

      title:
        'BeanFactory',

      level: 'intermediate',

      tags: [
        'spring',
        'beanfactory',
      ],

      content: `
BeanFactory is basic IOC container in Spring.
      `,
    },

    {
      id: 'beanfactory-vs-applicationcontext',

      title:
        '🔥 BeanFactory vs ApplicationContext',

      level: 'intermediate',

      tags: [
        'spring',
        'ioc',
      ],

      content: `
BeanFactory:
- basic container
- lazy loading

ApplicationContext:
- enterprise features
- eager initialization
- event support
- internationalization
      `,
    },

    {
      id: 'spring-boot-auto-configuration',

      title:
        '🔥 Spring Boot Auto Configuration',

      level: 'advanced',

      tags: [
        'spring-boot',
        'auto-configuration',
      ],

      content: `
Spring Boot automatically configures application based on dependencies and classpath.
      `,
    },

    {
      id: 'springbootapplication',

      title:
        '@SpringBootApplication',

      level: 'beginner',

      tags: [
        'spring-boot',
        'annotation',
      ],

      content: `
Combination of:
- @Configuration
- @EnableAutoConfiguration
- @ComponentScan
      `,
    },

    {
      id: 'profiles',

      title:
        '🔥 Profiles',

      level: 'intermediate',

      tags: [
        'spring',
        'profiles',
      ],

      content: `
Profiles allow environment-specific configuration.

Examples:
- dev
- test
- prod
      `,
    },

    {
      id: 'environment-properties',

      title:
        'Environment Properties',

      level: 'intermediate',

      tags: [
        'spring',
        'properties',
      ],

      content: `
Spring reads configuration from:
- properties files
- yaml
- environment variables
- command line
      `,
    },

    {
      id: 'properties-vs-yaml',

      title:
        'application.properties vs yaml',

      level: 'intermediate',

      tags: [
        'spring',
        'yaml',
      ],

      content: `
YAML supports hierarchical configuration and cleaner syntax.
      `,
    },

    {
      id: 'value-annotation',

      title:
        '@Value',

      level: 'intermediate',

      tags: [
        'spring',
        'value',
      ],

      content: `
@Value injects property values into beans.
      `,
    },

    {
      id: 'configuration-properties',

      title:
        '🔥 ConfigurationProperties',

      level: 'advanced',

      tags: [
        'spring',
        'configuration-properties',
      ],

      content: `
@ConfigurationProperties maps grouped properties into strongly typed objects.
      `,
    },{
  id: 'circular-dependency',

  title:
    '🔥 Circular Dependency',

  level: 'advanced',

  tags: [
    'spring',
    'circular-dependency',
  ],

  content: `
Circular dependency occurs when two beans depend on each other.

This may cause:
- bean creation failure
- startup exception
- unstable architecture

Constructor injection exposes circular dependencies earlier.
  `,
},

{
  id: 'lazy-initialization',

  title:
    '🔥 Lazy Initialization',

  level: 'intermediate',

  tags: [
    'spring',
    'lazy-loading',
  ],

  content: `
Bean created only when first requested from container.

Improves startup time for large applications.
  `,
},

{
  id: 'eager-initialization',

  title:
    'Eager Initialization',

  level: 'intermediate',

  tags: [
    'spring',
    'eager-loading',
  ],

  content: `
Singleton beans usually created during application startup.
  `,
},

{
  id: 'bean-initialization-order',

  title:
    'Bean Initialization Order',

  level: 'advanced',

  tags: [
    'spring',
    'bean-lifecycle',
  ],

  content: `
Spring resolves dependencies and initializes beans in dependency order.
  `,
},

{
  id: 'spring-aop',

  title:
    '🔥 Spring AOP',

  level: 'advanced',

  tags: [
    'spring',
    'aop',
  ],

  content: `
Spring AOP adds cross-cutting functionality like:
- logging
- security
- transactions
- monitoring

without modifying business logic.
  `,
},

{
  id: 'aspect',

  title:
    'Aspect',

  level: 'advanced',

  tags: [
    'spring',
    'aop',
  ],

  content: `
Aspect is class containing cross-cutting logic.
  `,
},

{
  id: 'advice',

  title:
    'Advice',

  level: 'advanced',

  tags: [
    'spring',
    'aop',
  ],

  content: `
Advice defines action executed at specific join points.
  `,
},

{
  id: 'joinpoint',

  title:
    'JoinPoint',

  level: 'advanced',

  tags: [
    'spring',
    'aop',
  ],

  content: `
JoinPoint represents execution point in application flow.
  `,
},

{
  id: 'pointcut',

  title:
    'Pointcut',

  level: 'advanced',

  tags: [
    'spring',
    'aop',
  ],

  content: `
Pointcut defines where advice should applied.
  `,
},

{
  id: 'proxy-in-spring',

  title:
    '🔥 Proxy in Spring',

  level: 'advanced',

  tags: [
    'spring',
    'proxy',
  ],

  content: `
Spring internally uses proxies for:
- AOP
- transactions
- security
- lazy loading
  `,
},

{
  id: 'jdk-dynamic-proxy',

  title:
    '🔥 JDK Dynamic Proxy',

  level: 'advanced',

  tags: [
    'spring',
    'proxy',
  ],

  content: `
Used when target class implements interface.

Proxy created dynamically at runtime.
  `,
},

{
  id: 'cglib-proxy',

  title:
    '🔥 CGLIB Proxy',

  level: 'advanced',

  tags: [
    'spring',
    'cglib',
  ],

  content: `
Used when target class does not implement interface.

CGLIB creates subclass dynamically.
  `,
},

{
  id: 'filters-vs-interceptors',

  title:
    '🔥 Filters vs Interceptors',

  level: 'advanced',

  tags: [
    'spring',
    'filters',
  ],

  content: `
Filters:
- servlet-level
- before DispatcherServlet

Interceptors:
- Spring MVC level
- before controller execution
  `,
},

{
  id: 'handlerinterceptor',

  title:
    'HandlerInterceptor',

  level: 'advanced',

  tags: [
    'spring',
    'interceptor',
  ],

  content: `
Spring MVC interceptor for request preprocessing and postprocessing.
  `,
},

{
  id: 'onceperrequestfilter',

  title:
    'OncePerRequestFilter',

  level: 'advanced',

  tags: [
    'spring',
    'filter',
  ],

  content: `
Ensures filter executes only once per request lifecycle.
  `,
},

{
  id: 'exception-handling-basics',

  title:
    '🔥 Exception Handling Basics',

  level: 'intermediate',

  tags: [
    'spring',
    'exception-handling',
  ],

  content: `
Spring provides centralized exception handling mechanisms for REST APIs and MVC applications.
  `,
},

{
  id: 'controlleradvice',

  title:
    '🔥 @ControllerAdvice',

  level: 'advanced',

  tags: [
    'spring',
    'exception-handling',
  ],

  content: `
Global exception handler across all controllers.
  `,
},

{
  id: 'exceptionhandler',

  title:
    '🔥 @ExceptionHandler',

  level: 'advanced',

  tags: [
    'spring',
    'exception-handler',
  ],

  content: `
Handles specific exceptions inside controller or global advice.
  `,
},

{
  id: 'validation-basics',

  title:
    '🔥 Validation Basics',

  level: 'intermediate',

  tags: [
    'spring',
    'validation',
  ],

  content: `
Validation ensures incoming request data follows expected rules.
  `,
},

{
  id: 'valid-annotation',

  title:
    '🔥 @Valid',

  level: 'intermediate',

  tags: [
    'spring',
    'validation',
  ],

  content: `
Triggers bean validation automatically for request objects.
  `,
},

{
  id: 'bean-validation-api',

  title:
    'Bean Validation API',

  level: 'advanced',

  tags: [
    'spring',
    'validation',
  ],

  content: `
Provides annotations like:
- @NotNull
- @Size
- @Email
- @Pattern
  `,
},

{
  id: 'spel',

  title:
    'Spring Expression Language',

  level: 'advanced',

  tags: [
    'spring',
    'spel',
  ],

  content: `
SpEL allows dynamic expression evaluation inside Spring configuration.
  `,
},

{
  id: 'event-handling',

  title:
    'Event Handling',

  level: 'advanced',

  tags: [
    'spring',
    'events',
  ],

  content: `
Spring supports event-driven communication between application components.
  `,
},

{
  id: 'spring-events',

  title:
    'Spring Events',

  level: 'advanced',

  tags: [
    'spring',
    'events',
  ],

  content: `
Application events help decouple business workflows.
  `,
},

{
  id: 'applicationeventpublisher',

  title:
    'ApplicationEventPublisher',

  level: 'advanced',

  tags: [
    'spring',
    'events',
  ],

  content: `
Publishes events inside Spring application context.
  `,
},

{
  id: 'transaction-proxy-basics',

  title:
    '🔥 Transaction Proxy Basics',

  level: 'advanced',

  tags: [
    'spring',
    'transactions',
  ],

  content: `
Spring transaction management internally works using AOP proxies.
  `,
},{
  id: 'common-spring-interview-traps',

  title:
    '🔥🔥 Common Spring Interview Traps',

  level: 'advanced',

  tags: [
    'spring',
    'interview-trap',
  ],

  content: `
Common Spring interview traps:
- field injection vs constructor injection
- singleton bean thread safety
- circular dependencies
- proxy limitations
- transaction self-invocation issue
- lazy loading confusion
  `,
},

{
  id: 'bean-thread-safety',

  title:
    '🔥 Bean Thread Safety',

  level: 'advanced',

  tags: [
    'spring',
    'thread-safety',
  ],

  content: `
Singleton beans shared across multiple threads.

Spring does not automatically make beans thread-safe.
  `,
},

{
  id: 'why-singleton-beans',

  title:
    '🔥 Why Singleton Beans?',

  level: 'advanced',

  tags: [
    'spring',
    'singleton',
  ],

  content: `
Singleton scope improves:
- memory efficiency
- startup performance
- object reuse

Creating new bean per request expensive for enterprise systems.
  `,
},

{
  id: 'thread-safety-problems',

  title:
    '🔥 Thread Safety Problems',

  level: 'advanced',

  tags: [
    'spring',
    'multithreading',
  ],

  content: `
Shared mutable state inside singleton beans causes race conditions and inconsistent behavior.
  `,
},

{
  id: 'spring-internal-working',

  title:
    '🔥 Spring Internal Working',

  level: 'advanced',

  tags: [
    'spring',
    'internals',
  ],

  content: `
Spring startup flow:
- component scanning
- bean definition creation
- dependency resolution
- bean initialization
- proxy creation
- application startup
  `,
},

{
  id: 'spring-boot-startup-flow',

  title:
    '🔥 Spring Boot Startup Flow',

  level: 'advanced',

  tags: [
    'spring-boot',
    'startup',
  ],

  content: `
Spring Boot startup includes:
- application bootstrap
- auto configuration
- embedded server startup
- bean initialization
- context refresh
  `,
},

{
  id: 'dispatcherservlet-basics',

  title:
    '🔥 DispatcherServlet Basics',

  level: 'advanced',

  tags: [
    'spring',
    'dispatcher-servlet',
  ],

  content: `
DispatcherServlet is central request dispatcher in Spring MVC.

It routes requests to correct controllers and handles responses.
  `,
},

{
  id: 'production-best-practices',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'spring',
    'best-practice',
  ],

  content: `
Production best practices:
- constructor injection
- centralized exception handling
- proper validation
- externalized configuration
- monitoring and logging
- avoid field injection
  `,
},

{
  id: 'common-production-issues',

  title:
    '🔥 Common Production Issues',

  level: 'advanced',

  tags: [
    'spring',
    'production',
  ],

  content: `
Common production problems:
- memory leaks
- circular dependencies
- bean conflicts
- slow startup
- thread pool exhaustion
- DB connection leaks
  `,
},

{
  id: 'real-world-scenarios',

  title:
    '🔥 Real World Scenarios',

  level: 'advanced',

  tags: [
    'spring',
    'real-world',
  ],

  content: `
Real-world Spring scenarios include:
- debugging startup failures
- handling production incidents
- optimizing API latency
- scaling microservices
- managing transactions
  `,
},

{
  id: 'senior-level-interview-questions',

  title:
    '🔥🔥 Senior Level Interview Questions',

  level: 'advanced',

  tags: [
    'spring',
    'senior-interview',
  ],

  content: `
Senior-level Spring interviews focus on:
- Spring internals
- AOP proxy mechanism
- transaction management
- scalability
- production debugging
- microservices architecture
- performance optimization
  `,
},

  ],
};