// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Maddy Works",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", hid: "theme-color", content: "#4ce0ed" },
        {
          name: "description",
          hid: "description",
          content: "I make web apps and random libraries in JavaScript.",
        },
        { name: "og:image", hid: "og-image", content: "/maddy.webp" },
        { name: "og:thumbnail", hid: "og-thumbnail", content: "/maddy.webp" },
      ],
      link: [{ rel: "shortcut icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos"],
  devtools: { enabled: true },
});
