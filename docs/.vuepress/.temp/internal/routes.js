export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于创建静态网站这件事"} }],
  ["/linuxLearning/ls-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_ls-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/ls-Command.html.js"), meta: {"title":"ls命令"} }],
  ["/linuxLearning/", { loader: () => import(/* webpackChunkName: "linuxLearning_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/index.html.js"), meta: {"title":"从Linux命令入手，由此开启Linux世界的大门吧。"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
