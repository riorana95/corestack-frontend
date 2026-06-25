/**
 * PRODUCTION environment.
 *
 * Used when the Angular app is built with `ng build --configuration production`
 * (which Vercel does automatically on deploy).
 *
 * Update `aiProxyUrl` to your deployed AI proxy URL on Vercel, e.g.:
 *   https://corestack-ai-proxy.vercel.app
 *
 * The proxy URL must NOT have a trailing slash. The frontend appends
 * `/api/ai/...` paths to it.
 */
export const environment = {
  production: true,
  apiUrl: 'https://corestackapi.duckdns.org',
  aiProxyUrl: 'https://corestack-ai-proxy.vercel.app',
  googleClientId: '436536053559-90t6u2huarc4s0ffuipo79mca9c2u9l5.apps.googleusercontent.com',
};
