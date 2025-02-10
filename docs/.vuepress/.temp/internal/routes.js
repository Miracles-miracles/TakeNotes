export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于创建静态网站这件事"} }],
  ["/linuxLearning/", { loader: () => import(/* webpackChunkName: "linuxLearning_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/index.html.js"), meta: {"title":"从Linux命令入手，由此开启Linux世界的大门吧。"} }],
  ["/linuxLearning/FirstMeetLinux/cd-pwd-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_cd-pwd-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/cd-pwd-Command.html.js"), meta: {"title":"cd命令"} }],
  ["/linuxLearning/FirstMeetLinux/FileOperated-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_FileOperated-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/FileOperated-Command.html.js"), meta: {"title":"文件操作"} }],
  ["/linuxLearning/FirstMeetLinux/grep-wc-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_grep-wc-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/grep-wc-Command.html.js"), meta: {"title":"grep、wc与管道符"} }],
  ["/linuxLearning/FirstMeetLinux/ls-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_ls-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/ls-Command.html.js"), meta: {"title":"ls命令"} }],
  ["/linuxLearning/FirstMeetLinux/mkdir-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_mkdir-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/mkdir-Command.html.js"), meta: {"title":"mkdir命令"} }],
  ["/linuxLearning/FirstMeetLinux/path.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_path.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/path.html.js"), meta: {"title":"相对路径和绝对路径"} }],
  ["/linuxLearning/FirstMeetLinux/which-find-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_which-find-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/which-find-Command.html.js"), meta: {"title":"查找命令"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
