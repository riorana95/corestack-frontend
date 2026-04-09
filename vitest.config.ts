import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'], // <--- This ensures the index.html is actually written
      reportsDirectory: './coverage/app1', // <--- Explicitly sets the folder
    },
  },
});
