export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/my/", { loader: () => import(/* webpackChunkName: "my_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/my/index.html.js"), meta: {"title":"关于创建静态网站这件事"} }],
  ["/algorithmLearning/BalancedBinaryTree.html", { loader: () => import(/* webpackChunkName: "algorithmLearning_BalancedBinaryTree.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/BalancedBinaryTree.html.js"), meta: {"title":"平衡二叉树"} }],
  ["/algorithmLearning/BinarySearchTree.html", { loader: () => import(/* webpackChunkName: "algorithmLearning_BinarySearchTree.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/BinarySearchTree.html.js"), meta: {"title":"二叉搜索树"} }],
  ["/algorithmLearning/", { loader: () => import(/* webpackChunkName: "algorithmLearning_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/index.html.js"), meta: {"title":"迎难而上"} }],
  ["/algorithmLearning/TheMaxDepthOfBinaryTree.html", { loader: () => import(/* webpackChunkName: "algorithmLearning_TheMaxDepthOfBinaryTree.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/TheMaxDepthOfBinaryTree.html.js"), meta: {"title":"二叉树的最大深度"} }],
  ["/algorithmLearning/TheMinDepthOfBinaryTree.html", { loader: () => import(/* webpackChunkName: "algorithmLearning_TheMinDepthOfBinaryTree.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/algorithmLearning/TheMinDepthOfBinaryTree.html.js"), meta: {"title":"二叉树的最小深度"} }],
  ["/about/AboutWeb/", { loader: () => import(/* webpackChunkName: "about_AboutWeb_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutWeb/index.html.js"), meta: {"title":"关于建站的问题"} }],
  ["/about/AboutWeb/StaticWeb.html", { loader: () => import(/* webpackChunkName: "about_AboutWeb_StaticWeb.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutWeb/StaticWeb.html.js"), meta: {"title":"生成静态网站"} }],
  ["/about/AboutGit/CreateRepo.html", { loader: () => import(/* webpackChunkName: "about_AboutGit_CreateRepo.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/CreateRepo.html.js"), meta: {"title":"创建Git仓库"} }],
  ["/about/AboutGit/FirstMeetGit.html", { loader: () => import(/* webpackChunkName: "about_AboutGit_FirstMeetGit.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/FirstMeetGit.html.js"), meta: {"title":"初次使用Git"} }],
  ["/about/AboutGit/PushAndCommit.html", { loader: () => import(/* webpackChunkName: "about_AboutGit_PushAndCommit.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/PushAndCommit.html.js"), meta: {"title":"添加并提交文件"} }],
  ["/about/AboutGit/", { loader: () => import(/* webpackChunkName: "about_AboutGit_index.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/index.html.js"), meta: {"title":"关于使用Git的问题"} }],
  ["/Sundry/FirstMeetLinux/cd-pwd-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_cd-pwd-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/cd-pwd-Command.html.js"), meta: {"title":"cd-pwd:目录切换"} }],
  ["/Sundry/FirstMeetLinux/chattr-lsattr.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_chattr-lsattr.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/chattr-lsattr.html.js"), meta: {"title":"chattr-lsattr:文件隐藏属性"} }],
  ["/Sundry/FirstMeetLinux/chmod-chown-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_chmod-chown-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/chmod-chown-Command.html.js"), meta: {"title":"chmod-chown:修改权限与所属"} }],
  ["/Sundry/FirstMeetLinux/date.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_date.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/date.html.js"), meta: {"title":"日期和时区"} }],
  ["/Sundry/FirstMeetLinux/deploy.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_deploy.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/deploy.html.js"), meta: {"title":"Linux软件部署"} }],
  ["/Sundry/FirstMeetLinux/easyLinux.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_easyLinux.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/easyLinux.html.js"), meta: {"title":"从Linux命令入手，由此开启Linux世界的大门吧。"} }],
  ["/Sundry/FirstMeetLinux/echo-tail-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_echo-tail-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/echo-tail-Command.html.js"), meta: {"title":"echo、tail与重定向符"} }],
  ["/Sundry/FirstMeetLinux/env-var.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_env-var.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/env-var.html.js"), meta: {"title":"环境变量"} }],
  ["/Sundry/FirstMeetLinux/ext2.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_ext2.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/ext2.html.js"), meta: {"title":"Linux的文件系统"} }],
  ["/Sundry/FirstMeetLinux/file.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_file.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/file.html.js"), meta: {"title":"Linux文件系统"} }],
  ["/Sundry/FirstMeetLinux/FileOperated-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_FileOperated-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/FileOperated-Command.html.js"), meta: {"title":"文件操作"} }],
  ["/Sundry/FirstMeetLinux/FirstShellScript.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_FirstShellScript.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/FirstShellScript.html.js"), meta: {"title":"第一个shell脚本"} }],
  ["/Sundry/FirstMeetLinux/grep-wc-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_grep-wc-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/grep-wc-Command.html.js"), meta: {"title":"grep、wc与管道符"} }],
  ["/Sundry/FirstMeetLinux/hoststate.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_hoststate.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/hoststate.html.js"), meta: {"title":"主机状态"} }],
  ["/Sundry/FirstMeetLinux/install.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_install.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/install.html.js"), meta: {"title":"软件安装"} }],
  ["/Sundry/FirstMeetLinux/ip-hostname.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_ip-hostname.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/ip-hostname.html.js"), meta: {"title":"ip地址与主机名"} }],
  ["/Sundry/FirstMeetLinux/ls-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_ls-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/ls-Command.html.js"), meta: {"title":"ls:列出目录内容"} }],
  ["/Sundry/FirstMeetLinux/mkdir-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_mkdir-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/mkdir-Command.html.js"), meta: {"title":"mkdir:创建目录(文件夹)"} }],
  ["/Sundry/FirstMeetLinux/MySQLInCentOS.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_MySQLInCentOS.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/MySQLInCentOS.html.js"), meta: {"title":"在CentOS上安装MySQL"} }],
  ["/Sundry/FirstMeetLinux/MySQLInUbuntu.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_MySQLInUbuntu.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/MySQLInUbuntu.html.js"), meta: {"title":"在Ubuntu上安装MySQL"} }],
  ["/Sundry/FirstMeetLinux/path.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_path.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/path.html.js"), meta: {"title":"路径"} }],
  ["/Sundry/FirstMeetLinux/ping-wget-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_ping-wget-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/ping-wget-Command.html.js"), meta: {"title":"网络请求与下载"} }],
  ["/Sundry/FirstMeetLinux/port.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_port.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/port.html.js"), meta: {"title":"端口"} }],
  ["/Sundry/FirstMeetLinux/process.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_process.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/process.html.js"), meta: {"title":"进程管理"} }],
  ["/Sundry/FirstMeetLinux/right.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_right.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/right.html.js"), meta: {"title":"权限信息"} }],
  ["/Sundry/FirstMeetLinux/root.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_root.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/root.html.js"), meta: {"title":"认识root用户"} }],
  ["/Sundry/FirstMeetLinux/shell.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_shell.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/shell.html.js"), meta: {"title":"Sehll"} }],
  ["/Sundry/FirstMeetLinux/ShellVariables.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_ShellVariables.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/ShellVariables.html.js"), meta: {"title":"Shell变量"} }],
  ["/Sundry/FirstMeetLinux/SimpleOperationOfFilesystem.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_SimpleOperationOfFilesystem.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/SimpleOperationOfFilesystem.html.js"), meta: {"title":"文件系统的简单操作"} }],
  ["/Sundry/FirstMeetLinux/skill.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_skill.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/skill.html.js"), meta: {"title":"哦吼，欢迎来到对Linux系统的基础设置部分。"} }],
  ["/Sundry/FirstMeetLinux/softlink.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_softlink.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/softlink.html.js"), meta: {"title":"软链接"} }],
  ["/Sundry/FirstMeetLinux/systemctl-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_systemctl-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/systemctl-Command.html.js"), meta: {"title":"systemctl命令:控制"} }],
  ["/Sundry/FirstMeetLinux/tips.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_tips.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/tips.html.js"), meta: {"title":"小技巧"} }],
  ["/Sundry/FirstMeetLinux/umask.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_umask.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/umask.html.js"), meta: {"title":"umask:文件默认权限"} }],
  ["/Sundry/FirstMeetLinux/upload-download.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_upload-download.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/upload-download.html.js"), meta: {"title":"上传和下载"} }],
  ["/Sundry/FirstMeetLinux/user-usergroup.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_user-usergroup.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/user-usergroup.html.js"), meta: {"title":"用户、用户组管理"} }],
  ["/Sundry/FirstMeetLinux/Users-Permissions.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_Users-Permissions.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/Users-Permissions.html.js"), meta: {"title":"深入用户与权限，一起掌握Linux系统的钥匙吧。"} }],
  ["/Sundry/FirstMeetLinux/vim-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_vim-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/vim-Command.html.js"), meta: {"title":"vim编辑器"} }],
  ["/Sundry/FirstMeetLinux/which-find-Command.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_which-find-Command.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/which-find-Command.html.js"), meta: {"title":"whcih-find查找命令"} }],
  ["/Sundry/FirstMeetLinux/zip-unzip.html", { loader: () => import(/* webpackChunkName: "Sundry_FirstMeetLinux_zip-unzip.html" */"D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/Sundry/FirstMeetLinux/zip-unzip.html.js"), meta: {"title":"压缩与解压"} }],
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
