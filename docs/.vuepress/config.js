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
          text: '学习运维', 
          link: '/OPsLearning/',
          children: [
            {
              text: '初识Linux',
              link: '/OPsLearning/FirstMeetLinux/easyLinux.md',
            }
          ]
        },

        {
          text: '学习算法', 
          link: '/algorithmLearning/',
        },

        {
          text: '关于', 
          link: '/about/',
          children: [
            {
              text: '使用Git的问题',
              link: '/about/AboutGit/'
            },

            {
              text: '建站的问题',
              link: '/about/AboutWeb/'
            }
          ]
        },

        {text: '我的', link: '/my/'},
        {text: 'LeetCode', link: 'https://leetcode.cn/'},
        {text: 'GitHub', link: 'https://github.com/'}
    ],

    sidebar: {
      '/OPsLearning/': [
        {
          text: 'Linux命令',
          link: '/OPsLearning/FirstMeetLinux/easyLinux.md',
          collapsible: true,
          children: [
            {text: 'ls:列出目录内容', link: '/OPsLearning/FirstMeetLinux/ls-Command.md'},
            {text: 'cd-pwd:目录切换', link: '/OPsLearning/FirstMeetLinux/cd-pwd-Command.md'},
            {text: '路径', link: '/OPsLearning/FirstMeetLinux/path.md'},
            {text: 'mkdir:创建目录(文件夹)', link: '/OPsLearning/FirstMeetLinux/mkdir-Command.md'},
            {text: '文件操作', link: '/OPsLearning/FirstMeetLinux/FileOperated-Command.md'},
            {text: 'which-find:查找', link: '/OPsLearning/FirstMeetLinux/which-find-Command.md'},
            {text: 'grep-wc:筛选于与统计', link: '/OPsLearning/FirstMeetLinux/grep-wc-Command.md'},
            {text: 'echo-tail:输出与跟踪', link: '/OPsLearning/FirstMeetLinux/echo-tail-Command.md'},
            {text: 'vim:编辑器', link: '/OPsLearning/FirstMeetLinux/vim-Command.md'}
          ]
        },

        {
          text: 'Linux用户及权限',
          link: '/OPsLearning/FirstMeetLinux/Users-Permissions.md',
          collapsible: true,
          children: [
            {text: '认识root用户', link: '/OPsLearning/FirstMeetLinux/root.md'},
            {text: '用户、用户组管理', link: '/OPsLearning/FirstMeetLinux/user-usergroup.md'},
            {text: '权限信息', link: '/OPsLearning/FirstMeetLinux/right.md'},
            {text: 'chmod-chown:修改权限与所属', link: '/OPsLearning/FirstMeetLinux/chmod-chown-Command.md'},
            {text: 'umask:文件默认权限', link: '/OPsLearning/FirstMeetLinux/umask.md'},
            {text: 'chattr-lsattr:文件隐藏属性', link: '/OPsLearning/FirstMeetLinux/chattr-lsattr.md'}
          ]
        },

        {
          text: 'Linux使用操作', 
          link: '/OPsLearning/FirstMeetLinux/skill.md',
          collapsible: true,
          children: [
            {text: '小技巧', link: '/OPsLearning/FirstMeetLinux/tips.md'},
            {text: '软件安装', link: '/OPsLearning/FirstMeetLinux/install.md'},
            {text: 'systemctl命令', link: '/OPsLearning/FirstMeetLinux/systemctl-Command.md'},
            {text: '软链接', link: '/OPsLearning/FirstMeetLinux/softlink.md'},
            {text: '日期和时区', link: '/OPsLearning/FirstMeetLinux/date.md'},
            {text: 'ip地址与主机名', link: '/OPsLearning/FirstMeetLinux/ip-hostname.md'},
            {text: '网络请求与下载', link: '/OPsLearning/FirstMeetLinux/ping-wget-Command.md'},
            {text: '端口', link: '/OPsLearning/FirstMeetLinux/port.md'},
            {text: '进程管理', link: '/OPsLearning/FirstMeetLinux/process.md'},
            {text: '主机状态', link: '/OPsLearning/FirstMeetLinux/hoststate.md'},
            {text: '环境变量', link: '/OPsLearning/FirstMeetLinux/env-var.md'},
            {text: '上传和下载', link: '/OPsLearning/FirstMeetLinux/upload-download.md'},
            {text: '压缩与解压', link: '/OPsLearning/FirstMeetLinux/zip-unzip.md'}
          ]
        },

        {
          text: 'Linux文件系统',
          link: '/OPsLearning/FirstMeetLinux/file.md',
          collapsible: true,
          children: [
            {text: 'Linux的文件系统', link: '/OPsLearning/FirstMeetLinux/ext2.md'},
            {text: '文件系统的简单操作', link: '/OPsLearning/FirstMeetLinux/SimpleOperationOfFilesystem.md'}
          ]
        },

        {
          text: 'Linux软件部署',
          link: '/OPsLearning/FirstMeetLinux/deploy.md',
          collapsible: true,
          children: [
            {text: '在CentOS上安装MySQL', link: '/OPsLearning/FirstMeetLinux/MySQLInCentOS'},
            {text: '在Ubuntu上安装MySQL', link: '/OPsLearning/FirstMeetLinux/MySQLInUbuntu'},
          ]
        }
      ],

      '/algorithmLearning/': [
        {text: '二叉搜索树', link: '/algorithmLearning/BinarySearchTree.md'},
        {text: '平衡二叉树', link: '/algorithmLearning/BalancedBinaryTree.md'},
        {text: '二叉树的最小深度', link: '/algorithmLearning/TheMinDepthOfBinaryTree.md'},
        {text: '二叉树的最大深度', link: '/algorithmLearning/TheMaxDepthOfBinaryTree.md'}
      ],

      '/about/AboutGit/': [
        {text: '初次使用Git', link: '/about/AboutGit/FirstMeetGit.md'},
        {text: '创建Git仓库', link: '/about/AboutGit/CreateRepo.md'},
        {text: '添加和提交文件', link: '/about/AboutGit/PushAndCommit.md'}
      ],

      '/about/AboutWeb/': [
        {text: '生成静态网站', link: '/about/AboutWeb/StaticWeb.md'}
      ],

    },

  })
})
