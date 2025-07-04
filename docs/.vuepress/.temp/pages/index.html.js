import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/NV.jpg\",\"heroText\":\"Take Notes\",\"tagline\":\"Just Do It\",\"actions\":[{\"text\":\"开始吧\",\"link\":\"/my/\",\"type\":\"primary\"},{\"text\":\"看看算法\",\"link\":\"/algorithmLearning/README.md\",\"type\":\"secondary\"},{\"text\":\"看看Linux\",\"link\":\"/Sundry/FirstMeetLinux/easyLinux.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue驱动\",\"details\":\"享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present Evan You\"},\"headers\":[],\"git\":{\"updatedTime\":1739540351000,\"contributors\":[{\"name\":\"Miracles-miracles\",\"username\":\"Miracles-miracles\",\"email\":\"2663284851@qq.com\",\"commits\":5,\"url\":\"https://github.com/Miracles-miracles\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
