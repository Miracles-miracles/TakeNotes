import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/linuxLearning/FirstMeetLinux/deploy.html.vue"
const data = JSON.parse("{\"path\":\"/linuxLearning/FirstMeetLinux/deploy.html\",\"title\":\"Linux软件部署\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1742566831000,\"contributors\":[{\"name\":\"Miracles-miracles\",\"username\":\"Miracles-miracles\",\"email\":\"2663284851@qq.com\",\"commits\":1,\"url\":\"https://github.com/Miracles-miracles\"}]},\"filePathRelative\":\"linuxLearning/FirstMeetLinux/deploy.md\"}")
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
