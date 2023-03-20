// vite.config.ts
import { defineConfig } from 'vitest/config'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    checker({
      // e.g. use TypeScript check
      typescript: true,
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  test: {
    coverage: {
      provider: 'c8',
      reporter: ['lcov', 'text'],
    },
    includeSource: ['src/**/*.{tsx,ts}'],
  },
})
