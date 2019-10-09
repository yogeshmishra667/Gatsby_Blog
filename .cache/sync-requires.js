const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("C:\\Users\\dell\\Desktop\\gatsby-project\\gatsby-blog\\blog\\src\\templates\\blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\dell\\Desktop\\gatsby-project\\gatsby-blog\\blog\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\dell\\Desktop\\gatsby-project\\gatsby-blog\\blog\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\dell\\Desktop\\gatsby-project\\gatsby-blog\\blog\\src\\pages\\about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\dell\\Desktop\\gatsby-project\\gatsby-blog\\blog\\src\\pages\\Blog.js"))),
  "component---src-pages-contect-js": hot(preferDefault(require("C:\\Users\\dell\\Desktop\\gatsby-project\\gatsby-blog\\blog\\src\\pages\\contect.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\dell\\Desktop\\gatsby-project\\gatsby-blog\\blog\\src\\pages\\index.js")))
}

