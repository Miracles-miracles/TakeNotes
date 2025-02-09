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
        {text: '学习Linux', link: '/linuxLearning/'},
        {text: '学习Java', link: '/javaLearning/'},
    ]
  })
})