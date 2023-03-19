// vite.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8',
      reporter: ['lcov'],
    },
    includeSource: ['src/**/*.{tsx,ts}'],
  },
})
