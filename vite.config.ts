import checker from 'vite-plugin-checker'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      '@lib': '/src/lib',
    },
  },
})
