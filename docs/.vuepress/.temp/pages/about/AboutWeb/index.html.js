import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutWeb/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/AboutWeb/\",\"title\":\"关于建站的问题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1739803554000,\"contributors\":[{\"name\":\"Miracles-miracles\",\"username\":\"Miracles-miracles\",\"email\":\"2663284851@qq.com\",\"commits\":1,\"url\":\"https://github.com/Miracles-miracles\"}]},\"filePathRelative\":\"about/AboutWeb/README.md\"}")
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
