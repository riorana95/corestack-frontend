import { DocSection }
from '../../../models/doc.model';

export const SECURITY_SECTION:
DocSection = {

  id: 'spring-security',

  title: 'Security',

  summary:
    'Spring Security, JWT, OAuth2, authentication, authorization, filter chain, API protection, and production security practices for backend interviews.',

  articles: [

    {
      id: 'what-is-spring-security',

      title:
        '🔥 What is Spring Security?',

      level: 'beginner',

      tags: [
        'spring-security',
        'security',
      ],

      content: `
Spring Security is authentication and authorization framework for securing Java applications.

Provides:
- authentication
- authorization
- session management
- CSRF protection
- secure API handling
      `,
    },

    {
      id: 'why-spring-security',

      title:
        '🔥 Why Spring Security?',

      level: 'beginner',

      tags: [
        'spring-security',
        'security',
      ],

      content: `
Spring Security simplifies application security implementation.

Benefits:
- production-ready security
- flexible authentication
- role-based authorization
- integration with Spring ecosystem
      `,
    },

    {
      id: 'authentication-vs-authorization',

      title:
        '🔥 Authentication vs Authorization',

      level: 'beginner',

      tags: [
        'security',
        'authentication',
      ],

      content: `
Authentication:
- verifies identity

Authorization:
- verifies access permissions

Authentication happens before authorization.
      `,
    },

    {
      id: 'security-architecture',

      title:
        'Security Architecture',

      level: 'intermediate',

      tags: [
        'spring-security',
        'architecture',
      ],

      content: `
Spring Security architecture built around:
- filters
- authentication manager
- providers
- security context
      `,
    },

    {
      id: 'security-filter-chain',

      title:
        '🔥 Security Filter Chain',

      level: 'advanced',

      tags: [
        'spring-security',
        'filters',
      ],

      content: `
Spring Security processes requests through chain of security filters.
      `,
    },

    {
      id: 'delegatingfilterproxy',

      title:
        'DelegatingFilterProxy',

      level: 'advanced',

      tags: [
        'spring-security',
        'filters',
      ],

      content: `
Delegates servlet filter requests to Spring-managed beans.
      `,
    },

    {
      id: 'onceperrequestfilter',

      title:
        '🔥 OncePerRequestFilter',

      level: 'advanced',

      tags: [
        'spring-security',
        'filter',
      ],

      content: `
Ensures filter executes only once per request lifecycle.
      `,
    },

    {
      id: 'usernamepasswordauthenticationfilter',

      title:
        'UsernamePasswordAuthenticationFilter',

      level: 'advanced',

      tags: [
        'spring-security',
        'authentication',
      ],

      content: `
Processes username-password authentication requests.
      `,
    },

    {
      id: 'authenticationmanager',

      title:
        '🔥 AuthenticationManager',

      level: 'advanced',

      tags: [
        'spring-security',
        'authentication',
      ],

      content: `
AuthenticationManager coordinates authentication process.
      `,
    },

    {
      id: 'authenticationprovider',

      title:
        'AuthenticationProvider',

      level: 'advanced',

      tags: [
        'spring-security',
        'authentication',
      ],

      content: `
AuthenticationProvider validates user credentials and authentication logic.
      `,
    },

    {
      id: 'userdetailsservice',

      title:
        '🔥 UserDetailsService',

      level: 'advanced',

      tags: [
        'spring-security',
        'userdetails',
      ],

      content: `
Loads user details during authentication process.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'UserDetailsService Example',

          code: `
@Service
public class CustomUserDetailsService
implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(
        String username
    ) {
        return userRepository
            .findByEmail(username);
    }
}
          `,
        },
      ],
    },

    {
      id: 'userdetails',

      title:
        'UserDetails',

      level: 'advanced',

      tags: [
        'spring-security',
        'userdetails',
      ],

      content: `
Represents authenticated user information inside Spring Security.
      `,
    },

    {
      id: 'passwordencoder',

      title:
        '🔥 PasswordEncoder',

      level: 'intermediate',

      tags: [
        'security',
        'password',
      ],

      content: `
Passwords should always stored using hashing algorithms.
      `,
    },

    {
      id: 'bcryptpasswordencoder',

      title:
        '🔥 BCryptPasswordEncoder',

      level: 'intermediate',

      tags: [
        'security',
        'bcrypt',
      ],

      content: `
BCrypt hashes passwords securely using salting and adaptive hashing.
      `,

      codeBlocks: [
        {
          language: 'java',

          title: 'BCrypt Example',

          code: `
PasswordEncoder encoder =
    new BCryptPasswordEncoder();

String hashedPassword =
    encoder.encode("password");
          `,
        },
      ],
    },

    {
      id: 'securitycontext',

      title:
        '🔥 SecurityContext',

      level: 'advanced',

      tags: [
        'spring-security',
        'security-context',
      ],

      content: `
SecurityContext stores authenticated user information for current request.
      `,
    },

    {
      id: 'securitycontextholder',

      title:
        'SecurityContextHolder',

      level: 'advanced',

      tags: [
        'spring-security',
        'security-context',
      ],

      content: `
Provides access to current authentication details.
      `,
    },

    {
      id: 'principal',

      title:
        'Principal',

      level: 'intermediate',

      tags: [
        'security',
        'authentication',
      ],

      content: `
Principal represents currently authenticated user identity.
      `,
    },

    {
      id: 'session-based-authentication',

      title:
        'Session Based Authentication',

      level: 'intermediate',

      tags: [
        'security',
        'session',
      ],

      content: `
Server stores authentication state inside session.
      `,
    },

    {
      id: 'stateless-authentication',

      title:
        '🔥 Stateless Authentication',

      level: 'advanced',

      tags: [
        'security',
        'jwt',
      ],

      content: `
Server does not store authentication state between requests.

JWT commonly used for stateless authentication.
      `,
    },

    {
      id: 'jwt-authentication',

      title:
        '🔥 JWT Authentication',

      level: 'advanced',

      tags: [
        'jwt',
        'authentication',
      ],

      content: `
JWT authentication validates tokens on every request instead of sessions.
      `,
    },

    {
      id: 'what-is-jwt',

      title:
        '🔥 What is JWT?',

      level: 'intermediate',

      tags: [
        'jwt',
        'security',
      ],

      content: `
JWT stands for JSON Web Token.

JWT securely transfers authentication information between client and server.
      `,
    },

    {
      id: 'jwt-structure',

      title:
        'JWT Structure',

      level: 'intermediate',

      tags: [
        'jwt',
        'token',
      ],

      content: `
JWT contains:
- header
- payload
- signature
      `,
    },

    {
      id: 'access-token-vs-refresh-token',

      title:
        '🔥 Access Token vs Refresh Token',

      level: 'advanced',

      tags: [
        'jwt',
        'authentication',
      ],

      content: `
Access token:
- short-lived
- API access

Refresh token:
- longer-lived
- generates new access tokens
      `,
    },

    {
      id: 'jwt-authentication-flow',

      title:
        '🔥 JWT Authentication Flow',

      level: 'advanced',

      tags: [
        'jwt',
        'authentication-flow',
      ],

      content: `
Flow:
- login
- token generation
- token validation
- secured API access
      `,
    },

    {
      id: 'jwt-validation',

      title:
        'JWT Validation',

      level: 'advanced',

      tags: [
        'jwt',
        'validation',
      ],

      content: `
JWT validation checks:
- signature
- expiration
- issuer
- claims
      `,
    },

    {
      id: 'jwt-expiration',

      title:
        'JWT Expiration',

      level: 'advanced',

      tags: [
        'jwt',
        'expiration',
      ],

      content: `
JWT tokens should expire to reduce security risks.
      `,
    },

    {
      id: 'jwt-best-practices',

      title:
        '🔥 JWT Best Practices',

      level: 'advanced',

      tags: [
        'jwt',
        'best-practice',
      ],

      content: `
Best practices:
- short expiration
- HTTPS only
- secure secret keys
- avoid sensitive payload data
      `,
    },

    {
      id: 'jwt-security-risks',

      title:
        'JWT Security Risks',

      level: 'advanced',

      tags: [
        'jwt',
        'security-risk',
      ],

      content: `
Common risks:
- token theft
- weak secrets
- long expiration
- insecure storage
      `,
    },

    {
      id: 'oauth2-basics',

      title:
        '🔥 OAuth2 Basics',

      level: 'advanced',

      tags: [
        'oauth2',
        'security',
      ],

      content: `
OAuth2 is authorization framework allowing third-party access delegation.
      `,
    },

    {
      id: 'oauth2-roles',

      title:
        'OAuth2 Roles',

      level: 'advanced',

      tags: [
        'oauth2',
        'authorization',
      ],

      content: `
OAuth2 roles:
- resource owner
- client
- authorization server
- resource server
      `,
    },

    {
      id: 'resource-server',

      title:
        'Resource Server',

      level: 'advanced',

      tags: [
        'oauth2',
        'resource-server',
      ],

      content: `
Hosts protected APIs and validates tokens.
      `,
    },

    {
      id: 'authorization-server',

      title:
        'Authorization Server',

      level: 'advanced',

      tags: [
        'oauth2',
        'authorization-server',
      ],

      content: `
Issues authentication and authorization tokens.
      `,
    },{
  id: 'oauth2-flow-basics',

  title:
    '🔥 OAuth2 Flow Basics',

  level: 'advanced',

  tags: [
    'oauth2',
    'authorization',
  ],

  content: `
OAuth2 flow allows applications to access protected resources using access tokens.
  `,
},

{
  id: 'bearer-token',

  title:
    'Bearer Token',

  level: 'intermediate',

  tags: [
    'jwt',
    'token',
  ],

  content: `
Bearer token grants access to protected resources.

Anyone possessing token may access APIs.
  `,
},

{
  id: 'authentication-flow',

  title:
    '🔥 Authentication Flow',

  level: 'advanced',

  tags: [
    'security',
    'authentication',
  ],

  content: `
Authentication flow:
- credential validation
- token/session generation
- security context setup
  `,
},

{
  id: 'authorization-flow',

  title:
    'Authorization Flow',

  level: 'advanced',

  tags: [
    'security',
    'authorization',
  ],

  content: `
Authorization flow determines whether authenticated user can access requested resource.
  `,
},

{
  id: 'role-based-access-control',

  title:
    '🔥 Role Based Access Control',

  level: 'advanced',

  tags: [
    'security',
    'rbac',
  ],

  content: `
RBAC restricts access based on user roles and permissions.
  `,
},

{
  id: 'preauthorize',

  title:
    '🔥 @PreAuthorize',

  level: 'advanced',

  tags: [
    'spring-security',
    'authorization',
  ],

  content: `
@PreAuthorize performs authorization checks before method execution.
  `,

  codeBlocks: [
    {
      language: 'java',

      title: '@PreAuthorize Example',

      code: `
@PreAuthorize(
    "hasRole('ADMIN')"
)
public void deleteUser() {

}
      `,
    },
  ],
},

{
  id: 'secured-annotation',

  title:
    '@Secured',

  level: 'advanced',

  tags: [
    'spring-security',
    'authorization',
  ],

  content: `
@Secured restricts access based on roles.
  `,
},

{
  id: 'method-level-security',

  title:
    '🔥 Method Level Security',

  level: 'advanced',

  tags: [
    'spring-security',
    'authorization',
  ],

  content: `
Security rules applied directly at service or controller method level.
  `,
},

{
  id: 'csrf',

  title:
    '🔥 CSRF',

  level: 'advanced',

  tags: [
    'security',
    'csrf',
  ],

  content: `
CSRF attacks exploit authenticated browser sessions using forged requests.
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
  id: 'cors-configuration',

  title:
    'CORS Configuration',

  level: 'advanced',

  tags: [
    'security',
    'cors',
  ],

  content: `
CORS configuration defines allowed:
- origins
- methods
- headers
- credentials
  `,
},

{
  id: 'csrf-vs-cors',

  title:
    '🔥 CSRF vs CORS',

  level: 'advanced',

  tags: [
    'security',
    'web-security',
  ],

  content: `
CSRF:
- request forgery protection

CORS:
- browser cross-origin access control

They solve different security problems.
  `,
},

{
  id: 'security-headers',

  title:
    'Security Headers',

  level: 'advanced',

  tags: [
    'security',
    'headers',
  ],

  content: `
Security headers improve browser-side application protection.
  `,
},

{
  id: 'https-basics',

  title:
    '🔥 HTTPS Basics',

  level: 'intermediate',

  tags: [
    'security',
    'https',
  ],

  content: `
HTTPS encrypts communication between client and server.
  `,
},

{
  id: 'ssl-tls-basics',

  title:
    'SSL/TLS Basics',

  level: 'advanced',

  tags: [
    'security',
    'ssl',
  ],

  content: `
TLS provides secure encrypted communication over network.
  `,
},

{
  id: 'cookie-security',

  title:
    'Cookie Security',

  level: 'advanced',

  tags: [
    'security',
    'cookies',
  ],

  content: `
Cookies should use:
- HttpOnly
- Secure
- SameSite
flags for protection.
  `,
},

{
  id: 'session-fixation',

  title:
    'Session Fixation',

  level: 'advanced',

  tags: [
    'security',
    'session',
  ],

  content: `
Session fixation attacks reuse existing session identifiers maliciously.
  `,
},

{
  id: 'xss-basics',

  title:
    '🔥 XSS Basics',

  level: 'advanced',

  tags: [
    'security',
    'xss',
  ],

  content: `
XSS attacks inject malicious scripts into web applications.
  `,
},

{
  id: 'sql-injection-basics',

  title:
    '🔥 SQL Injection Basics',

  level: 'advanced',

  tags: [
    'security',
    'sql-injection',
  ],

  content: `
SQL injection manipulates database queries using malicious input.
  `,
},

{
  id: 'security-best-practices',

  title:
    '🔥 Security Best Practices',

  level: 'advanced',

  tags: [
    'security',
    'best-practice',
  ],

  content: `
Best practices:
- least privilege access
- secure password storage
- HTTPS
- token expiration
- validation
- monitoring
  `,
},

{
  id: 'exception-handling-in-security',

  title:
    'Exception Handling in Security',

  level: 'advanced',

  tags: [
    'spring-security',
    'exceptions',
  ],

  content: `
Security exceptions should handled separately from application exceptions.
  `,
},

{
  id: 'authenticationentrypoint',

  title:
    'AuthenticationEntryPoint',

  level: 'advanced',

  tags: [
    'spring-security',
    'authentication',
  ],

  content: `
Handles unauthorized authentication failures.
  `,
},

{
  id: 'accessdeniedhandler',

  title:
    'AccessDeniedHandler',

  level: 'advanced',

  tags: [
    'spring-security',
    'authorization',
  ],

  content: `
Handles access denied authorization failures.
  `,
},

{
  id: 'custom-authentication',

  title:
    'Custom Authentication',

  level: 'advanced',

  tags: [
    'spring-security',
    'authentication',
  ],

  content: `
Spring Security allows custom authentication logic implementation.
  `,
},

{
  id: 'custom-userdetailsservice',

  title:
    'Custom UserDetailsService',

  level: 'advanced',

  tags: [
    'spring-security',
    'userdetailsservice',
  ],

  content: `
Custom UserDetailsService loads users from database or external systems.
  `,
},

{
  id: 'api-security-best-practices',

  title:
    '🔥 API Security Best Practices',

  level: 'advanced',

  tags: [
    'security',
    'api-security',
  ],

  content: `
API security best practices:
- HTTPS
- JWT expiration
- rate limiting
- input validation
- secure headers
- least privilege access
  `,
},{
  id: 'stateless-rest-api-security',

  title:
    '🔥 Stateless REST API Security',

  level: 'advanced',

  tags: [
    'security',
    'rest-api',
  ],

  content: `
Stateless APIs authenticate every request independently using tokens instead of sessions.
  `,
},

{
  id: 'refresh-token-strategy',

  title:
    '🔥 Refresh Token Strategy',

  level: 'advanced',

  tags: [
    'jwt',
    'refresh-token',
  ],

  content: `
Refresh tokens generate new access tokens without requiring user login again.
  `,
},

{
  id: 'logout-handling',

  title:
    'Logout Handling',

  level: 'advanced',

  tags: [
    'security',
    'logout',
  ],

  content: `
Logout handling invalidates sessions or refresh tokens securely.
  `,
},

{
  id: 'rate-limiting-basics',

  title:
    '🔥 Rate Limiting Basics',

  level: 'advanced',

  tags: [
    'security',
    'rate-limit',
  ],

  content: `
Rate limiting protects APIs from abuse, brute force attacks, and excessive traffic.
  `,
},

{
  id: 'brute-force-protection',

  title:
    'Brute Force Protection',

  level: 'advanced',

  tags: [
    'security',
    'authentication',
  ],

  content: `
Protection mechanisms:
- account locking
- captcha
- rate limiting
- temporary blocking
  `,
},

{
  id: 'account-locking',

  title:
    'Account Locking',

  level: 'advanced',

  tags: [
    'security',
    'authentication',
  ],

  content: `
Accounts temporarily locked after repeated failed login attempts.
  `,
},

{
  id: 'password-policies',

  title:
    'Password Policies',

  level: 'intermediate',

  tags: [
    'security',
    'password',
  ],

  content: `
Strong password policies improve account security.
  `,
},

{
  id: 'secure-password-storage',

  title:
    '🔥 Secure Password Storage',

  level: 'advanced',

  tags: [
    'security',
    'password',
  ],

  content: `
Passwords should never stored in plain text.

Use:
- BCrypt
- Argon2
- salted hashing
  `,
},

{
  id: 'secret-management',

  title:
    '🔥 Secret Management',

  level: 'advanced',

  tags: [
    'security',
    'secrets',
  ],

  content: `
Secrets include:
- JWT keys
- DB passwords
- API keys
- certificates

Secrets should never hardcoded.
  `,
},

{
  id: 'environment-variables-security',

  title:
    'Environment Variables Security',

  level: 'advanced',

  tags: [
    'security',
    'configuration',
  ],

  content: `
Sensitive values should stored using environment variables or secret managers.
  `,
},

{
  id: 'security-logging',

  title:
    '🔥 Security Logging',

  level: 'advanced',

  tags: [
    'security',
    'logging',
  ],

  content: `
Security logging tracks:
- login attempts
- failures
- suspicious activity
- authorization violations
  `,
},

{
  id: 'security-monitoring',

  title:
    '🔥 Security Monitoring',

  level: 'advanced',

  tags: [
    'security',
    'monitoring',
  ],

  content: `
Monitoring helps detect:
- attacks
- abnormal traffic
- suspicious authentication behavior
  `,
},

{
  id: 'security-testing-basics',

  title:
    'Security Testing Basics',

  level: 'advanced',

  tags: [
    'security',
    'testing',
  ],

  content: `
Security testing validates application protection against vulnerabilities.
  `,
},

{
  id: 'penetration-testing-basics',

  title:
    'Penetration Testing Basics',

  level: 'advanced',

  tags: [
    'security',
    'penetration-testing',
  ],

  content: `
Penetration testing simulates attacks to identify security weaknesses.
  `,
},

{
  id: 'jwt-interview-traps',

  title:
    '🔥🔥 JWT Interview Traps',

  level: 'advanced',

  tags: [
    'jwt',
    'interview-trap',
  ],

  content: `
Common JWT interview traps:
- storing JWT in localStorage blindly
- refresh token confusion
- stateless misunderstanding
- token invalidation confusion
  `,
},

{
  id: 'oauth2-interview-traps',

  title:
    '🔥🔥 OAuth2 Interview Traps',

  level: 'advanced',

  tags: [
    'oauth2',
    'interview-trap',
  ],

  content: `
Common OAuth2 traps:
- authentication vs authorization confusion
- role confusion
- token lifecycle misunderstanding
  `,
},

{
  id: 'common-spring-security-interview-questions',

  title:
    '🔥🔥 Common Spring Security Interview Questions',

  level: 'advanced',

  tags: [
    'spring-security',
    'interview',
  ],

  content: `
Common interview focus areas:
- JWT flow
- filter chain
- CSRF
- CORS
- password encoding
- session vs stateless
- OAuth2 basics
  `,
},

{
  id: 'production-security-problems',

  title:
    '🔥 Production Security Problems',

  level: 'advanced',

  tags: [
    'security',
    'production',
  ],

  content: `
Common production issues:
- token leakage
- weak passwords
- missing authorization
- exposed secrets
- insecure APIs
  `,
},

{
  id: 'real-world-security-scenarios',

  title:
    '🔥 Real World Security Scenarios',

  level: 'advanced',

  tags: [
    'security',
    'real-world',
  ],

  content: `
Real-world scenarios include:
- token compromise
- brute force attacks
- suspicious login detection
- API abuse prevention
  `,
},

{
  id: 'spring-security-internal-working',

  title:
    '🔥 Spring Security Internal Working',

  level: 'advanced',

  tags: [
    'spring-security',
    'internals',
  ],

  content: `
Spring Security internally processes requests through authentication and authorization filter chain.
  `,
},

{
  id: 'filter-chain-internal-flow',

  title:
    '🔥 Filter Chain Internal Flow',

  level: 'advanced',

  tags: [
    'spring-security',
    'filters',
  ],

  content: `
Security filters execute sequentially before request reaches controller.
  `,
},

{
  id: 'security-performance-considerations',

  title:
    'Security Performance Considerations',

  level: 'advanced',

  tags: [
    'security',
    'performance',
  ],

  content: `
Security operations impact:
- authentication latency
- DB queries
- token validation
- encryption overhead
  `,
},

{
  id: 'zero-trust-basics',

  title:
    'Zero Trust Basics',

  level: 'advanced',

  tags: [
    'security',
    'zero-trust',
  ],

  content: `
Zero Trust assumes no request trusted automatically even inside internal network.
  `,
},

{
  id: 'api-gateway-security',

  title:
    '🔥 API Gateway Security',

  level: 'advanced',

  tags: [
    'security',
    'api-gateway',
  ],

  content: `
API gateways centralize:
- authentication
- authorization
- rate limiting
- monitoring
  `,
},

{
  id: 'microservices-security-basics',

  title:
    'Microservices Security Basics',

  level: 'advanced',

  tags: [
    'security',
    'microservices',
  ],

  content: `
Microservices security requires secure inter-service communication and centralized authentication.
  `,
},

{
  id: 'distributed-authentication',

  title:
    'Distributed Authentication',

  level: 'advanced',

  tags: [
    'security',
    'distributed-systems',
  ],

  content: `
Distributed systems often use centralized authentication providers and token-based security.
  `,
},

{
  id: 'production-best-practices',

  title:
    '🔥 Production Best Practices',

  level: 'advanced',

  tags: [
    'security',
    'best-practice',
  ],

  content: `
Production best practices:
- least privilege access
- HTTPS everywhere
- short-lived tokens
- secret rotation
- centralized logging
- monitoring suspicious activity
  `,
},

  ],
};