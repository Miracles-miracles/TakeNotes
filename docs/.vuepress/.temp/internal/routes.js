export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/linuxLearning/", { loader: () => import(/* webpackChunkName: "linuxLearning_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/index.html.js"), meta: {"title":"从Linux命令入手，由此开启Linux世界的大门吧。"} }],
  ["/algorithmLearning/BalancedBinaryTree.html", { loader: () => import(/* webpackChunkName: "algorithmLearning_BalancedBinaryTree.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/BalancedBinaryTree.html.js"), meta: {"title":"平衡二叉树"} }],
  ["/algorithmLearning/BinarySearchTree.html", { loader: () => import(/* webpackChunkName: "algorithmLearning_BinarySearchTree.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/BinarySearchTree.html.js"), meta: {"title":"二叉搜索树"} }],
  ["/algorithmLearning/", { loader: () => import(/* webpackChunkName: "algorithmLearning_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/index.html.js"), meta: {"title":"迎难而上"} }],
  ["/algorithmLearning/TheMaxDepthOfBinaryTree.html", { loader: () => import(/* webpackChunkName: "algorithmLearning_TheMaxDepthOfBinaryTree.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/TheMaxDepthOfBinaryTree.html.js"), meta: {"title":"二叉树的最大深度"} }],
  ["/algorithmLearning/TheMinDepthOfBinaryTree.html", { loader: () => import(/* webpackChunkName: "algorithmLearning_TheMinDepthOfBinaryTree.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/TheMinDepthOfBinaryTree.html.js"), meta: {"title":"二叉树的最小深度"} }],
  ["/my/", { loader: () => import(/* webpackChunkName: "my_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/my/index.html.js"), meta: {"title":"关于创建静态网站这件事"} }],
  ["/about/AboutGit/CreateRepo.html", { loader: () => import(/* webpackChunkName: "about_AboutGit_CreateRepo.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/CreateRepo.html.js"), meta: {"title":"创建Git仓库"} }],
  ["/about/AboutGit/FirstMeetGit.html", { loader: () => import(/* webpackChunkName: "about_AboutGit_FirstMeetGit.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/FirstMeetGit.html.js"), meta: {"title":"初次使用Git"} }],
  ["/about/AboutGit/PushAndCommit.html", { loader: () => import(/* webpackChunkName: "about_AboutGit_PushAndCommit.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/PushAndCommit.html.js"), meta: {"title":"添加并提交文件"} }],
  ["/about/AboutGit/", { loader: () => import(/* webpackChunkName: "about_AboutGit_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/index.html.js"), meta: {"title":"关于使用Git的问题"} }],
  ["/about/AboutWeb/", { loader: () => import(/* webpackChunkName: "about_AboutWeb_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutWeb/index.html.js"), meta: {"title":"关于建站的问题"} }],
  ["/about/AboutWeb/StaticWeb.html", { loader: () => import(/* webpackChunkName: "about_AboutWeb_StaticWeb.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutWeb/StaticWeb.html.js"), meta: {"title":"生成静态网站"} }],
  ["/linuxLearning/FirstMeetLinux/cd-pwd-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_cd-pwd-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/cd-pwd-Command.html.js"), meta: {"title":"cd-pwd:目录切换"} }],
  ["/linuxLearning/FirstMeetLinux/chmod-chown-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_chmod-chown-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/chmod-chown-Command.html.js"), meta: {"title":"chmod-chown:修改权限与所属"} }],
  ["/linuxLearning/FirstMeetLinux/date.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_date.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/date.html.js"), meta: {"title":"日期和时区"} }],
  ["/linuxLearning/FirstMeetLinux/deploy.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_deploy.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/deploy.html.js"), meta: {"title":"Linux软件部署"} }],
  ["/linuxLearning/FirstMeetLinux/echo-tail-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_echo-tail-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/echo-tail-Command.html.js"), meta: {"title":"echo、tail与重定向符"} }],
  ["/linuxLearning/FirstMeetLinux/env-var.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_env-var.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/env-var.html.js"), meta: {"title":"环境变量"} }],
  ["/linuxLearning/FirstMeetLinux/FileOperated-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_FileOperated-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/FileOperated-Command.html.js"), meta: {"title":"文件操作"} }],
  ["/linuxLearning/FirstMeetLinux/grep-wc-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_grep-wc-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/grep-wc-Command.html.js"), meta: {"title":"grep、wc与管道符"} }],
  ["/linuxLearning/FirstMeetLinux/hoststate.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_hoststate.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/hoststate.html.js"), meta: {"title":"主机状态"} }],
  ["/linuxLearning/FirstMeetLinux/install.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_install.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/install.html.js"), meta: {"title":"软件安装"} }],
  ["/linuxLearning/FirstMeetLinux/ip-hostname.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_ip-hostname.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/ip-hostname.html.js"), meta: {"title":"ip地址与主机名"} }],
  ["/linuxLearning/FirstMeetLinux/ls-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_ls-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/ls-Command.html.js"), meta: {"title":"ls:列出目录内容"} }],
  ["/linuxLearning/FirstMeetLinux/mkdir-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_mkdir-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/mkdir-Command.html.js"), meta: {"title":"mkdir:创建目录(文件夹)"} }],
  ["/linuxLearning/FirstMeetLinux/MySQLInCentOS.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_MySQLInCentOS.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/MySQLInCentOS.html.js"), meta: {"title":"在CentOS上安装MySQL"} }],
  ["/linuxLearning/FirstMeetLinux/path.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_path.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/path.html.js"), meta: {"title":"路径"} }],
  ["/linuxLearning/FirstMeetLinux/ping-wget-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_ping-wget-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/ping-wget-Command.html.js"), meta: {"title":"网络请求与下载"} }],
  ["/linuxLearning/FirstMeetLinux/port.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_port.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/port.html.js"), meta: {"title":"端口"} }],
  ["/linuxLearning/FirstMeetLinux/process.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_process.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/process.html.js"), meta: {"title":"进程管理"} }],
  ["/linuxLearning/FirstMeetLinux/right.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_right.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/right.html.js"), meta: {"title":"权限信息"} }],
  ["/linuxLearning/FirstMeetLinux/root.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_root.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/root.html.js"), meta: {"title":"认识root用户"} }],
  ["/linuxLearning/FirstMeetLinux/skill.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_skill.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/skill.html.js"), meta: {"title":"哦吼，欢迎来到对Linux系统的基础设置部分。"} }],
  ["/linuxLearning/FirstMeetLinux/softlink.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_softlink.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/softlink.html.js"), meta: {"title":"软链接"} }],
  ["/linuxLearning/FirstMeetLinux/systemctl-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_systemctl-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/systemctl-Command.html.js"), meta: {"title":"systemctl命令:控制"} }],
  ["/linuxLearning/FirstMeetLinux/tips.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_tips.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/tips.html.js"), meta: {"title":"小技巧"} }],
  ["/linuxLearning/FirstMeetLinux/upload-download.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_upload-download.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/upload-download.html.js"), meta: {"title":"上传和下载"} }],
  ["/linuxLearning/FirstMeetLinux/user-usergroup.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_user-usergroup.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/user-usergroup.html.js"), meta: {"title":"用户、用户组管理"} }],
  ["/linuxLearning/FirstMeetLinux/Users-Permissions.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_Users-Permissions.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/Users-Permissions.html.js"), meta: {"title":"深入用户与权限，一起掌握Linux系统的钥匙吧。"} }],
  ["/linuxLearning/FirstMeetLinux/vim-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_vim-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/vim-Command.html.js"), meta: {"title":"vim编辑器"} }],
  ["/linuxLearning/FirstMeetLinux/which-find-Command.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_which-find-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/which-find-Command.html.js"), meta: {"title":"whcih-find查找命令"} }],
  ["/linuxLearning/FirstMeetLinux/zip-unzip.html", { loader: () => import(/* webpackChunkName: "linuxLearning_FirstMeetLinux_zip-unzip.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/zip-unzip.html.js"), meta: {"title":"压缩与解压"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
