import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    baseUrl: "http://localhost:3000", // make sure your Next.js app is running on this
  },
  video: true, // ✅ Enables video recording
});
