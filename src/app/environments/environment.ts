export const environment = {
  production: false,
  /** Local: http://localhost:8080 | Deployed: https://corestackapi.duckdns.org */
  // apiUrl: 'http://localhost:8080',
  apiUrl: 'https://corestackapi.duckdns.org',
  /** AI proxy (Node.js microservice that calls Z.ai GLM-4.6).
   *  Local: http://localhost:3001 | Deploy: set to your proxy URL. */
  aiProxyUrl: 'http://localhost:3001',
  googleClientId: '436536053559-90t6u2huarc4s0ffuipo79mca9c2u9l5.apps.googleusercontent.com',
};
