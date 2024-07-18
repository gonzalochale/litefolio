import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  defineConfig: {
    site: {
      title: "LiteFolio",
      description:
        "Designed for simplicity and ease of use, configure your professional profile seamlessly through a user-friendly JSON file.",
      url: "https://litefolio.vercel.app",
      twitter: "gonzalochale",
      image: "/public/assets/astro-og.png",
    },
  },
  integrations: [tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
