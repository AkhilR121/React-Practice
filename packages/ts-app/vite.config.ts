import checker from "vite-plugin-checker";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [checker({ typescript: true })],
});
