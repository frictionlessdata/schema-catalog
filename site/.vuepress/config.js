module.exports = {
  title: "Table Schema Catalog",
  description: "Schema Catalog for sharing open data standards.",
  dest: "public",
  themeConfig: {
    logo: "",
    docsDir: "site",
    editLinks: true,
    smoothScroll: true,
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Catalog', link: '/catalog/' },
      { text: 'GitHub', link: 'https://github.com/frictionlessdata/schema-catalog' }
    ]
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
};