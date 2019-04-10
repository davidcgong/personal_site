const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\Users\\David Gong\\new-site\\src\\templates\\blog-post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("C:\\Users\\David Gong\\new-site\\src\\templates\\tag.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\David Gong\\new-site\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\David Gong\\new-site\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\David Gong\\new-site\\src\\pages\\index.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("C:\\Users\\David Gong\\new-site\\src\\pages\\tags.js")))
}

