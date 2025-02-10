import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  title: 'TakeNotes',
  base: '/TakeNotes/',

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

        {text: '学习Java', link: '/javaLearning/'},
        {text: '关于', link: '/about/'},
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
            {text: 'grep-wc:筛选于与统计', link: '/linuxLearning/FirstMeetLinux/grep-wc-Command.md'}
          ]
        }
      ]
    }


  })
})
