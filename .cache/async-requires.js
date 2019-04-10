// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("C:\\Users\\David Gong\\new-site\\src\\templates\\blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-tag-js": () => import("C:\\Users\\David Gong\\new-site\\src\\templates\\tag.js" /* webpackChunkName: "component---src-templates-tag-js" */),
  "component---cache-dev-404-page-js": () => import("C:\\Users\\David Gong\\new-site\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("C:\\Users\\David Gong\\new-site\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("C:\\Users\\David Gong\\new-site\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-tags-js": () => import("C:\\Users\\David Gong\\new-site\\src\\pages\\tags.js" /* webpackChunkName: "component---src-pages-tags-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "C:\\Users\\David Gong\\new-site\\.cache\\data.json")

