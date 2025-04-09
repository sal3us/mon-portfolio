import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// Configuration d'Astro avec Vercel en utilisant un runtime correct et la sortie statique
export default defineConfig({
  output: "static",  // Si tu ne veux pas utiliser de fonctions serverless, "static" est souvent plus simple.
  adapter: vercel({
    webAnalytics: {
      enabled: true,  // Tu peux désactiver ceci si tu n'as pas besoin de la fonctionnalité Web Analytics
}}),
});
