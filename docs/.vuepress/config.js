import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  title: 'TakeNotes',
  base: '/TakeNotes/',

  plugins: [
    searchPlugin({
      locales: {'/': {placeholder: '搜索'}},
      maxSuggestions: 10,
      isSearchable: (page) => page.path !== '/',
    }),
  ],

  theme:defaultTheme({
    
    logo: '/images/NV.jpg',

    navbar: [
        {text: '首页', link: '/'},

        {
          text: '学习Linux', 
          link: '/linuxLearning/',
          children: [
            {
              text: '初识Linux',
              link: '/linuxLearning/',
            }
          ]
        },

        {
          text: '学习Java', 
          link: '/javaLearning/',
          children: [
            {
              text: '练习',
              link: '/javaLearning/practice/'
            }
          ]
        },

        {
          text: '关于', 
          link: '/about/',
          children: [
            {
              text: '使用Git的问题',
              link: '/about/AboutGit/'
            }
          ]
        },

        {text: '我的', link: '/my/'},
        {text: 'LeetCode', link: 'https://leetcode.cn/'},
        {text: 'GitHub', link: 'https://github.com/'}
    ],

    sidebar: {
      '/linuxLearning/': [
        {
          text: 'Linux命令',
          link: '/linuxLearning/',
          collapsible: true,
          children: [
            {text: 'ls:列出目录内容', link: '/linuxLearning/FirstMeetLinux/ls-Command.md'},
            {text: 'cd-pwd:目录切换', link: '/linuxLearning/FirstMeetLinux/cd-pwd-Command.md'},
            {text: '路径', link: '/linuxLearning/FirstMeetLinux/path.md'},
            {text: 'mkdir:创建目录(文件夹)', link: '/linuxLearning/FirstMeetLinux/mkdir-Command.md'},
            {text: '文件操作', link: '/linuxLearning/FirstMeetLinux/FileOperated-Command.md'},
            {text: 'which-find:查找', link: '/linuxLearning/FirstMeetLinux/which-find-Command.md'},
            {text: 'grep-wc:筛选于与统计', link: '/linuxLearning/FirstMeetLinux/grep-wc-Command.md'},
            {text: 'echo-tail:输出与跟踪', link: '/linuxLearning/FirstMeetLinux/echo-tail-Command.md'},
            {text: 'vim:编辑器', link: '/linuxLearning/FirstMeetLinux/vim-Command.md'}
          ]
        },

        {
          text: 'Linux用户及权限',
          link: '/linuxLearning/FirstMeetLinux/Users-Permissions.md',
          collapsible: true,
          children: [
            {text: '认识root用户', link: '/linuxLearning/FirstMeetLinux/root.md'},
            {text: '用户、用户组管理', link: '/linuxLearning/FirstMeetLinux/user-usergroup.md'},
            {text: '权限信息', link: '/linuxLearning/FirstMeetLinux/right.md'},
            {text: 'chmod-chown:修改权限与所属', link: '/linuxLearning/FirstMeetLinux/chmod-chown-Command.md'}
          ]
        },

        {
          text: 'Linux使用操作', 
          link: '/linuxLearning/FirstMeetLinux/skill.md',
          collapsible: true,
          children: [
            {text: '小技巧', link: '/linuxLearning/FirstMeetLinux/tips.md'},
            {text: '软件安装', link: '/linuxLearning/FirstMeetLinux/install.md'},
            {text: 'systemctl命令', link: '/linuxLearning/FirstMeetLinux/systemctl-Command.md'},
            {text: '软链接', link: '/linuxLearning/FirstMeetLinux/softlink.md'},
            {text: '日期和时区', link: '/linuxLearning/FirstMeetLinux/date.md'},
            {text: 'ip地址与主机名', link: '/linuxLearning/FirstMeetLinux/ip-hostname.md'},
            {text: '网络请求与下载', link: '/linuxLearning/FirstMeetLinux/ping-wget-Command.md'},
            {text: '端口', link: '/linuxLearning/FirstMeetLinux/port.md'},
            {text: '进程管理', link: '/linuxLearning/FirstMeetLinux/process.md'},
            {text: '主机状态', link: '/linuxLearning/FirstMeetLinux/hoststate.md'},
            {text: '环境变量', link: '/linuxLearning/FirstMeetLinux/env-var.md'},
            {text: '上传和下载', link: '/linuxLearning/FirstMeetLinux/upload-download.md'},
            {text: '压缩与解压', link: '/linuxLearning/FirstMeetLinux/zip-unzip.md'}
          ]
        }
      ],

      '/javaLearning/practice/': [
        {text: '二叉搜索树', link: '/javaLearning/practice/BinarySearchTree.md'},
        {text: '平衡二叉树', link: '/javaLearning/practice/BalancedBinaryTree.md'},
        {text: '二叉树的最小深度', link: '/javaLearning/practice/TheMinDepthOfBinaryTree.md'},
        {text: '二叉树的最大深度', link: '/javaLearning/practice/TheMaxDepthOfBinaryTree.md'}
      ],

      '/about/AboutGit/': [
        {text: '初次使用Git', link: '/about/AboutGit/FirstMeetGit.md'},
        {text: '创建Git仓库', link: '/about/AboutGit/CreateRepo.md'},
        {text: '添加和提交文件', link: '/about/AboutGit/PushAndCommit.md'}
      ],

    },

  })
})
