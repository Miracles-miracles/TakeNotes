import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/OPsLearning/index.html.vue"
const data = JSON.parse("{\"path\":\"/OPsLearning/\",\"title\":\"从Linux命令入手，由此开启Linux世界的大门吧。\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"OPsLearning/README.md\"}")
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
