import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/javaLearning/index.html.vue"
const data = JSON.parse("{\"path\":\"/javaLearning/\",\"title\":\"练习，的确需要练习。\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"javaLearning/README.md\"}")
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
