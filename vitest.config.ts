import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/vitest.setup.ts', // Adjust path as needed
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'], // Include tests in the src directory
  },
});