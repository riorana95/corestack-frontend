import { DocSection }
from '../../../models/doc.model';

export const SPRING_REST_APIS_SECTION:
DocSection = {

  id: 'spring-rest-apis',

  title: 'REST APIs',

  summary:
    'Spring Boot REST API concepts including controllers, HTTP methods, DTOs, validation, exception handling, pagination, Swagger, API design, and production best practices.',

  articles: [

    {
      id: 'what-is-rest',

      title:
        '🔥 What is REST?',

      level: 'beginner',

      tags: [
        'rest',
        'api',
      ],

      content: `
REST stands for Representational State Transfer.

REST is an architectural style for building scalable web services.

REST APIs communicate over HTTP using resources and standard methods.
      `,
    },

    {
      id: 'rest-vs-soap',

      title:
        'REST vs SOAP',

      level: 'beginner',

      tags: [
        'rest',
        'soap',
      ],

      content: `
REST:
- lightweight
- JSON-based
- faster
- flexible

SOAP:
- XML-based
- strict protocol
- heavier
- enterprise-focused
      `,
    },

    {
      id: 'rest-principles',

      title:
        '🔥 REST Principles',

      level: 'beginner',

      tags: [
        'rest',
        'architecture',
      ],

      content: `
Core REST principles:
- statelessness
- client-server separation
- cacheability
- uniform interface
- layered system
      `,
    },

    {
      id: 'statelessness',

      title:
        '🔥 Statelessness',

      level: 'intermediate',

      tags: [
        'rest',
        'stateless',
      ],

      content: `
REST APIs should not store client session state on server.

Each request must contain complete required information.
      `,
    },

    {
      id: 'client-server-architecture',

      title:
        'Client Server Architecture',

      level: 'beginner',

      tags: [
        'rest',
        'architecture',
      ],

      content: `
Client handles UI while server handles business logic and data processing.
      `,
    },

    {
      id: 'resource-based-architecture',

      title:
        'Resource Based Architecture',

      level: 'beginner',

      tags: [
        'rest',
        'resources',
      ],

      content: `
REST APIs expose resources using URLs.

Example:
- /users
- /orders
- /products
      `,
    },

    {
      id: 'uniform-interface',

      title:
        'Uniform Interface',

      level: 'intermediate',

      tags: [
        'rest',
        'interface',
      ],

      content: `
REST APIs use standardized communication methods and predictable URL structures.
      `,
    },

    {
      id: 'http-methods',

      title:
        '🔥 HTTP Methods',

      level: 'beginner',

      tags: [
        'http',
        'rest',
      ],

      content: `
Common HTTP methods:
- GET
- POST
- PUT
- PATCH
- DELETE
      `,
    },

    {
      id: 'get-method',

      title:
        'GET Method',

      level: 'beginner',

      tags: [
        'http',
        'get',
      ],

      content: `
GET retrieves data from server.

GET requests should not modify data.
      `,
    },

    {
      id: 'post-method',

      title:
        'POST Method',

      level: 'beginner',

      tags: [
        'http',
        'post',
      ],

      content: `
POST creates new resources on server.
      `,
    },

    {
      id: 'put-method',

      title:
        '🔥 PUT Method',

      level: 'intermediate',

      tags: [
        'http',
        'put',
      ],

      content: `
PUT replaces complete resource data.

PUT requests should be idempotent.
      `,
    },

    {
      id: 'patch-method',

      title:
        '🔥 PATCH Method',

      level: 'intermediate',

      tags: [
        'http',
        'patch',
      ],

      content: `
PATCH partially updates resource data.
      `,
    },

    {
      id: 'delete-method',

      title:
        'DELETE Method',

      level: 'beginner',

      tags: [
        'http',
        'delete',
      ],

      content: `
DELETE removes resource from server.
      `,
    },

    {
      id: 'idempotency',

      title:
        '🔥 Idempotency',

      level: 'advanced',

      tags: [
        'rest',
        'idempotency',
      ],

      content: `
Idempotent operations produce same result even when executed multiple times.

PUT and DELETE usually idempotent.
POST generally not idempotent.
      `,
    },

    {
      id: 'safe-methods',

      title:
        'Safe Methods',

      level: 'intermediate',

      tags: [
        'http',
        'safe-method',
      ],

      content: `
Safe methods do not modify server state.

GET considered safe method.
      `,
    },

    {
      id: 'http-status-codes',

      title:
        '🔥 HTTP Status Codes',

      level: 'beginner',

      tags: [
        'http',
        'status-code',
      ],

      content: `
Status code categories:
- 2xx success
- 3xx redirection
- 4xx client error
- 5xx server error
      `,
    },

    {
      id: '200-vs-201',

      title:
        '🔥 200 vs 201',

      level: 'intermediate',

      tags: [
        'http',
        'status-code',
      ],

      content: `
200:
- successful request

201:
- resource created successfully
      `,
    },

    {
      id: '400-vs-404',

      title:
        '🔥 400 vs 404',

      level: 'intermediate',

      tags: [
        'http',
        'status-code',
      ],

      content: `
400:
- bad request from client

404:
- requested resource not found
      `,
    },

    {
      id: '401-vs-403',

      title:
        '🔥 401 vs 403',

      level: 'advanced',

      tags: [
        'http',
        'security',
      ],

      content: `
401:
- authentication required

403:
- authenticated but access denied
      `,
    },

    {
      id: '500-internal-server-error',

      title:
        '500 Internal Server Error',

      level: 'intermediate',

      tags: [
        'http',
        'server-error',
      ],

      content: `
Unexpected server-side failure during request processing.
      `,
    },

    {
      id: 'rest-url-design-best-practices',

      title:
        '🔥 REST URL Design Best Practices',

      level: 'advanced',

      tags: [
        'rest',
        'best-practice',
      ],

      content: `
Best practices:
- use nouns not verbs
- use plural resources
- avoid deep nesting
- keep URLs clean
      `,

      codeBlocks: [
        {
          language: 'http',

          title: 'Good REST URLs',

          code: `
GET /users
GET /users/1
POST /orders
DELETE /products/10
          `,
        },
      ],
    },

    {
      id: 'path-variables',

      title:
        'Path Variables',

      level: 'beginner',

      tags: [
        'spring',
        'path-variable',
      ],

      content: `
Path variables capture dynamic URL values.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: '@PathVariable Example',

          code: `
@GetMapping("/users/{id}")
public User getUser(
    @PathVariable Long id
) {
    return service.getUser(id);
}
          `,
        },
      ],
    },

    {
      id: 'query-parameters',

      title:
        'Query Parameters',

      level: 'beginner',

      tags: [
        'rest',
        'query-params',
      ],

      content: `
Query parameters used for:
- filtering
- pagination
- sorting
      `,

      codeBlocks: [
        {
          language: 'http',

          title: 'Query Params Example',

          code: `
GET /users?page=1&size=10
          `,
        },
      ],
    },

    {
      id: 'requestbody',

      title:
        '@RequestBody',

      level: 'beginner',

      tags: [
        'spring',
        'requestbody',
      ],

      content: `
@RequestBody converts JSON request into Java object automatically.
      `,
    },

    {
      id: 'responsebody',

      title:
        '@ResponseBody',

      level: 'beginner',

      tags: [
        'spring',
        'responsebody',
      ],

      content: `
@ResponseBody converts Java objects into JSON response automatically.
      `,
    },

    {
      id: 'requestparam',

      title:
        '@RequestParam',

      level: 'beginner',

      tags: [
        'spring',
        'requestparam',
      ],

      content: `
@RequestParam extracts query parameters from request URL.
      `,
    },

    {
      id: 'pathvariable',

      title:
        '@PathVariable',

      level: 'beginner',

      tags: [
        'spring',
        'pathvariable',
      ],

      content: `
@PathVariable extracts values directly from URL path.
      `,
    },

    {
      id: 'responseentity',

      title:
        '🔥 ResponseEntity',

      level: 'intermediate',

      tags: [
        'spring',
        'responseentity',
      ],

      content: `
ResponseEntity provides complete control over:
- response body
- headers
- status code
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'ResponseEntity Example',

          code: `
return ResponseEntity
    .status(HttpStatus.CREATED)
    .body(user);
          `,
        },
      ],
    },

    {
      id: 'rest-controller',

      title:
        'REST Controller',

      level: 'beginner',

      tags: [
        'spring',
        'controller',
      ],

      content: `
REST controllers handle HTTP requests and return JSON responses.
      `,
    },

    {
      id: 'restcontroller',

      title:
        '🔥 @RestController',

      level: 'beginner',

      tags: [
        'spring',
        'restcontroller',
      ],

      content: `
Combination of:
- @Controller
- @ResponseBody
      `,
    },

    {
      id: 'requestmapping',

      title:
        '@RequestMapping',

      level: 'beginner',

      tags: [
        'spring',
        'mapping',
      ],

      content: `
Maps HTTP requests to controller methods.
      `,
    },

    {
      id: 'getmapping',

      title:
        '@GetMapping',

      level: 'beginner',

      tags: [
        'spring',
        'getmapping',
      ],

      content: `
Handles HTTP GET requests.
      `,
    },

    {
      id: 'postmapping',

      title:
        '@PostMapping',

      level: 'beginner',

      tags: [
        'spring',
        'postmapping',
      ],

      content: `
Handles HTTP POST requests.
      `,
    },

    {
      id: 'putmapping',

      title:
        '@PutMapping',

      level: 'beginner',

      tags: [
        'spring',
        'putmapping',
      ],

      content: `
Handles HTTP PUT requests.
      `,
    },

    {
      id: 'deletemapping',

      title:
        '@DeleteMapping',

      level: 'beginner',

      tags: [
        'spring',
        'deletemapping',
      ],

      content: `
Handles HTTP DELETE requests.
      `,
    },{
  id: 'dto',

  title:
    '🔥 DTO',

  level: 'intermediate',

  tags: [
    'rest',
    'dto',
  ],

  content: `
DTO stands for Data Transfer Object.

DTO used for transferring data between client and server without exposing internal entities.
  `,
},

{
  id: 'dto-vs-entity',

  title:
    '🔥 DTO vs Entity',

  level: 'advanced',

  tags: [
    'rest',
    'dto',
  ],

  content: `
DTO:
- API contract
- safe exposure
- validation friendly

Entity:
- database representation
- persistence focused

Never expose entities directly in production APIs.
  `,
},

{
  id: 'request-validation',

  title:
    '🔥 Request Validation',

  level: 'intermediate',

  tags: [
    'spring',
    'validation',
  ],

  content: `
Validation ensures invalid request data rejected before business processing.
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
@Valid triggers bean validation automatically.
  `,

  codeBlocks: [
    {
      language: 'java',

      title: '@Valid Example',

      code: `
@PostMapping
public User createUser(
    @Valid @RequestBody UserRequest request
) {
    return service.create(request);
}
      `,
    },
  ],
},

{
  id: 'bean-validation',

  title:
    'Bean Validation',

  level: 'intermediate',

  tags: [
    'spring',
    'validation',
  ],

  content: `
Bean validation annotations:
- @NotNull
- @NotBlank
- @Size
- @Email
- @Pattern
  `,
},

{
  id: 'global-exception-handling',

  title:
    '🔥 Global Exception Handling',

  level: 'advanced',

  tags: [
    'spring',
    'exception-handling',
  ],

  content: `
Centralized exception handling improves:
- consistency
- maintainability
- cleaner controllers
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
Handles exceptions globally across all controllers.
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
Handles specific exception types inside controller or advice class.
  `,
},

{
  id: 'api-versioning',

  title:
    '🔥 API Versioning',

  level: 'advanced',

  tags: [
    'rest',
    'versioning',
  ],

  content: `
API versioning prevents breaking existing clients during API evolution.
  `,

  codeBlocks: [
    {
      language: 'http',

      title: 'Versioned APIs',

      code: `
/api/v1/users
/api/v2/users
      `,
    },
  ],
},

{
  id: 'pagination',

  title:
    '🔥 Pagination',

  level: 'intermediate',

  tags: [
    'rest',
    'pagination',
  ],

  content: `
Pagination prevents returning massive datasets in single response.
  `,

  codeBlocks: [
    {
      language: 'http',

      title: 'Pagination Example',

      code: `
GET /users?page=0&size=10
      `,
    },
  ],
},

{
  id: 'sorting',

  title:
    'Sorting',

  level: 'intermediate',

  tags: [
    'rest',
    'sorting',
  ],

  content: `
Sorting allows ordered API responses.
  `,

  codeBlocks: [
    {
      language: 'http',

      title: 'Sorting Example',

      code: `
GET /users?sort=name,asc
      `,
    },
  ],
},

{
  id: 'filtering-apis',

  title:
    'Filtering APIs',

  level: 'intermediate',

  tags: [
    'rest',
    'filtering',
  ],

  content: `
Filtering retrieves only matching resources based on conditions.
  `,
},

{
  id: 'file-upload-apis',

  title:
    'File Upload APIs',

  level: 'intermediate',

  tags: [
    'rest',
    'file-upload',
  ],

  content: `
REST APIs can upload files using multipart requests.
  `,
},

{
  id: 'multipart-apis',

  title:
    'Multipart APIs',

  level: 'intermediate',

  tags: [
    'spring',
    'multipart',
  ],

  content: `
Multipart requests send files and form data together.
  `,
},

{
  id: 'api-documentation',

  title:
    '🔥 API Documentation',

  level: 'intermediate',

  tags: [
    'rest',
    'documentation',
  ],

  content: `
API documentation improves frontend-backend collaboration and developer experience.
  `,
},

{
  id: 'swagger-openapi',

  title:
    '🔥 Swagger/OpenAPI',

  level: 'intermediate',

  tags: [
    'swagger',
    'openapi',
  ],

  content: `
Swagger generates interactive API documentation automatically.
  `,
},

{
  id: 'content-negotiation',

  title:
    'Content Negotiation',

  level: 'advanced',

  tags: [
    'rest',
    'content-negotiation',
  ],

  content: `
Server returns response format based on client Accept header.
  `,
},

{
  id: 'json-serialization',

  title:
    'JSON Serialization',

  level: 'intermediate',

  tags: [
    'json',
    'serialization',
  ],

  content: `
Serialization converts Java objects into JSON responses.
  `,
},

{
  id: 'jackson-basics',

  title:
    'Jackson Basics',

  level: 'intermediate',

  tags: [
    'jackson',
    'json',
  ],

  content: `
Jackson is default JSON serialization library in Spring Boot.
  `,
},

{
  id: 'objectmapper',

  title:
    'ObjectMapper',

  level: 'advanced',

  tags: [
    'jackson',
    'objectmapper',
  ],

  content: `
ObjectMapper converts:
- JSON to Java object
- Java object to JSON
  `,
},

{
  id: 'custom-response-structure',

  title:
    '🔥 Custom Response Structure',

  level: 'advanced',

  tags: [
    'rest',
    'response',
  ],

  content: `
Production APIs often use consistent response wrappers for:
- status
- message
- data
- timestamp
  `,
},

{
  id: 'error-response-design',

  title:
    '🔥 Error Response Design',

  level: 'advanced',

  tags: [
    'rest',
    'error-handling',
  ],

  content: `
Error responses should be:
- consistent
- descriptive
- secure
- client-friendly
  `,
},

{
  id: 'api-security-basics',

  title:
    'API Security Basics',

  level: 'intermediate',

  tags: [
    'security',
    'api-security',
  ],

  content: `
REST APIs should protect against:
- unauthorized access
- injection attacks
- data leaks
  `,
},

{
  id: 'cors',

  title:
    '🔥 CORS',

  level: 'advanced',

  tags: [
    'security',
    'cors',
  ],

  content: `
CORS controls cross-origin browser requests between frontend and backend.
  `,
},

{
  id: 'csrf-basics',

  title:
    'CSRF Basics',

  level: 'advanced',

  tags: [
    'security',
    'csrf',
  ],

  content: `
CSRF attacks exploit authenticated browser sessions.
  `,
},

{
  id: 'authentication-basics',

  title:
    'Authentication Basics',

  level: 'intermediate',

  tags: [
    'security',
    'authentication',
  ],

  content: `
Authentication verifies user identity.
  `,
},

{
  id: 'authorization-basics',

  title:
    'Authorization Basics',

  level: 'intermediate',

  tags: [
    'security',
    'authorization',
  ],

  content: `
Authorization determines what authenticated users allowed to access.
  `,
},

{
  id: 'jwt-in-rest-apis',

  title:
    '🔥 JWT in REST APIs',

  level: 'advanced',

  tags: [
    'jwt',
    'security',
  ],

  content: `
JWT commonly used for stateless authentication in REST APIs.
  `,
},{
  id: 'rate-limiting-basics',

  title:
    '🔥 Rate Limiting Basics',

  level: 'advanced',

  tags: [
    'rest',
    'rate-limit',
  ],

  content: `
Rate limiting protects APIs from excessive traffic and abuse.

Common strategies:
- token bucket
- fixed window
- sliding window
  `,
},

{
  id: 'api-gateway-basics',

  title:
    '🔥 API Gateway Basics',

  level: 'advanced',

  tags: [
    'microservices',
    'api-gateway',
  ],

  content: `
API Gateway acts as single entry point for microservices.

Responsibilities:
- authentication
- routing
- rate limiting
- logging
  `,
},

{
  id: 'rest-api-caching',

  title:
    '🔥 REST API Caching',

  level: 'advanced',

  tags: [
    'rest',
    'caching',
  ],

  content: `
Caching improves API performance by reducing repeated processing and database calls.
  `,
},

{
  id: 'etag',

  title:
    'ETag',

  level: 'advanced',

  tags: [
    'http',
    'etag',
  ],

  content: `
ETag helps cache validation and avoids unnecessary data transfer.
  `,
},

{
  id: 'api-performance-optimization',

  title:
    '🔥 API Performance Optimization',

  level: 'advanced',

  tags: [
    'performance',
    'optimization',
  ],

  content: `
Performance optimization techniques:
- pagination
- caching
- async processing
- DB optimization
- response compression
  `,
},

{
  id: 'async-rest-apis',

  title:
    'Async REST APIs',

  level: 'advanced',

  tags: [
    'async',
    'rest',
  ],

  content: `
Async APIs improve scalability for long-running operations.
  `,
},

{
  id: 'hateoas-basics',

  title:
    'HATEOAS Basics',

  level: 'advanced',

  tags: [
    'rest',
    'hateoas',
  ],

  content: `
HATEOAS allows APIs to provide navigational links dynamically inside responses.
  `,
},

{
  id: 'rest-api-testing',

  title:
    '🔥 REST API Testing',

  level: 'intermediate',

  tags: [
    'testing',
    'rest',
  ],

  content: `
REST APIs should tested for:
- correctness
- validation
- security
- performance
  `,
},

{
  id: 'postman',

  title:
    'Postman',

  level: 'beginner',

  tags: [
    'testing',
    'postman',
  ],

  content: `
Postman used for API testing and request debugging.
  `,
},

{
  id: 'mockmvc',

  title:
    '🔥 MockMvc',

  level: 'advanced',

  tags: [
    'spring',
    'testing',
  ],

  content: `
MockMvc tests Spring MVC controllers without starting full server.
  `,
},

{
  id: 'integration-testing',

  title:
    'Integration Testing',

  level: 'advanced',

  tags: [
    'testing',
    'integration-test',
  ],

  content: `
Integration tests verify interaction between multiple application layers.
  `,
},

{
  id: 'contract-testing-basics',

  title:
    'Contract Testing Basics',

  level: 'advanced',

  tags: [
    'testing',
    'contract-testing',
  ],

  content: `
Contract testing ensures API compatibility between services and clients.
  `,
},

{
  id: 'api-monitoring',

  title:
    '🔥 API Monitoring',

  level: 'advanced',

  tags: [
    'monitoring',
    'api',
  ],

  content: `
Monitoring tracks:
- response time
- failures
- throughput
- latency
- availability
  `,
},

{
  id: 'logging-apis',

  title:
    '🔥 Logging APIs',

  level: 'advanced',

  tags: [
    'logging',
    'api',
  ],

  content: `
Proper API logging helps:
- debugging
- auditing
- monitoring
- production support
  `,
},

{
  id: 'correlation-id',

  title:
    '🔥 Correlation ID',

  level: 'advanced',

  tags: [
    'logging',
    'tracing',
  ],

  content: `
Correlation IDs track single request across distributed services.
  `,
},

{
  id: 'distributed-tracing-basics',

  title:
    'Distributed Tracing Basics',

  level: 'advanced',

  tags: [
    'microservices',
    'tracing',
  ],

  content: `
Distributed tracing tracks requests across multiple services and systems.
  `,
},

{
  id: 'api-best-practices',

  title:
    '🔥 API Best Practices',

  level: 'advanced',

  tags: [
    'rest',
    'best-practice',
  ],

  content: `
REST API best practices:
- proper status codes
- validation
- versioning
- pagination
- DTO usage
- secure responses
- consistent structure
  `,
},

{
  id: 'api-anti-patterns',

  title:
    '🔥 API Anti Patterns',

  level: 'advanced',

  tags: [
    'rest',
    'anti-pattern',
  ],

  content: `
Common API anti patterns:
- exposing entities directly
- inconsistent responses
- huge payloads
- missing validation
- poor error handling
  `,
},

{
  id: 'common-rest-interview-traps',

  title:
    '🔥🔥 Common REST Interview Traps',

  level: 'advanced',

  tags: [
    'rest',
    'interview-trap',
  ],

  content: `
Common interview traps:
- PUT vs PATCH confusion
- 401 vs 403 confusion
- stateful REST APIs
- improper status codes
- DTO vs Entity confusion
  `,
},

{
  id: 'production-rest-api-problems',

  title:
    '🔥 Production REST API Problems',

  level: 'advanced',

  tags: [
    'rest',
    'production',
  ],

  content: `
Production API problems:
- high latency
- thread pool exhaustion
- DB bottlenecks
- payload size issues
- memory pressure
- rate limit abuse
  `,
},

{
  id: 'real-world-rest-api-scenarios',

  title:
    '🔥 Real World REST API Scenarios',

  level: 'advanced',

  tags: [
    'rest',
    'real-world',
  ],

  content: `
Real-world scenarios include:
- API timeout debugging
- scaling APIs
- backward compatibility
- distributed tracing
- security incidents
  `,
},

{
  id: 'senior-level-rest-api-questions',

  title:
    '🔥🔥 Senior Level REST API Questions',

  level: 'advanced',

  tags: [
    'rest',
    'senior-interview',
  ],

  content: `
Senior-level interviews focus on:
- API scalability
- distributed systems
- security
- resilience
- observability
- performance optimization
  `,
},

  ],
};