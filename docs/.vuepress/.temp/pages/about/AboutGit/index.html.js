import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutGit/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/AboutGit/\",\"title\":\"关于使用Git的问题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1739793162000,\"contributors\":[{\"name\":\"Miracles-miracles\",\"username\":\"Miracles-miracles\",\"email\":\"2663284851@qq.com\",\"commits\":1,\"url\":\"https://github.com/Miracles-miracles\"}]},\"filePathRelative\":\"about/AboutGit/README.md\"}")
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
