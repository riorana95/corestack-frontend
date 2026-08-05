/**
 * Development environment.
 *
 * Used when the Angular app is served via `npm start` (ng serve).
 * Points at the local Spring Boot backend by default; flip apiUrl to the
 * deployed API if you want to test against prod.
 */
export const environment = {
  production: false,
  /** Local Spring Boot backend. */
  // apiUrl: 'http://localhost:8080',
  /** Deployed API (uncomment to test against prod). */
  apiUrl: 'https://xoraapi.duckdns.org',
  /** AI proxy (Node.js microservice that calls Cloudflare Workers AI / Z.ai). */
  // aiProxyUrl: 'http://localhost:3001',
  aiProxyUrl: 'https://xora-ai-proxy.vercel.app',
  googleClientId: '436536053559-90t6u2huarc4s0ffuipo79mca9c2u9l5.apps.googleusercontent.com',
};
