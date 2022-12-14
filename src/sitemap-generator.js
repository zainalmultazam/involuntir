require('babel-register')({
  presets: ["es2015", "react"]
})

const router = require('./sitemap-routes.js').default
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
    new Sitemap(router)
        .build("https://peduly.com")
        .save("./public/sitemap.xml")
  );
}

generateSitemap();