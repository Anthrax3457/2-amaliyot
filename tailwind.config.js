module.exports = ({
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    // Boshqa fayllar yoki komponentlar
  ],
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.jsx",
      "./src/**/*.js",
      // Boshqa fayllar yoki komponentlar
    ],
  },
  // Boshqa sozlamalar...
});
