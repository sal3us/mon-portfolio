import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server", // Assurez-vous que cette ligne est présente
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
