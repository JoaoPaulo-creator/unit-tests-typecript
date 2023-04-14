import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "src/**/*.spec.ts",
      "src/use-cases/*.spec.ts",
      "tests/**/*.spec.ts",
    ],
  },
});
