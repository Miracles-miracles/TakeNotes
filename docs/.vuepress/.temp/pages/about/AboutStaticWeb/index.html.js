import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/about/AboutStaticWeb/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/AboutStaticWeb/\",\"title\":\"关于建站的问题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"about/AboutStaticWeb/README.md\"}")
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
