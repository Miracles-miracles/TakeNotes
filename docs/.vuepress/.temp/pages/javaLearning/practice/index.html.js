import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/javaLearning/practice/index.html.vue"
const data = JSON.parse("{\"path\":\"/javaLearning/practice/\",\"title\":\"练习，的确需要练习。\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1739539487000,\"contributors\":[{\"name\":\"Miracles-miracles\",\"username\":\"Miracles-miracles\",\"email\":\"2663284851@qq.com\",\"commits\":1,\"url\":\"https://github.com/Miracles-miracles\"}]},\"filePathRelative\":\"javaLearning/practice/README.md\"}")
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
