import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/domain/entities/*.spec.ts", "tests/**/*.spec.ts"],
  },
});
