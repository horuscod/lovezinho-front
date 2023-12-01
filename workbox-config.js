module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,ico,html,js,css,png,jpg}"],
  swDest: "build/service-worker.js",
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp("https://your-cdn.com/"),
      handler: "CacheFirst",
      options: {
        cacheName: "cdn-cache",
      },
    },
  ],
};
