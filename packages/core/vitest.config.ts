import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "c8",
      reporter: ["lcov", "text"],
    },
    includeSource: ["src/**/*.ts"],
    exclude: ["src/spec.ts", "node_modules"],
  },
});
