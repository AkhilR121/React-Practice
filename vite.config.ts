import { defineConfig } from 'vitest/config'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
      eslint: {
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
