import comp from "D:/Coding Time/TakeNotes/docs/.vuepress/.temp/pages/my/index.html.vue"
const data = JSON.parse("{\"path\":\"/my/\",\"title\":\"关于创建静态网站这件事\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":false},\"headers\":[],\"git\":{\"updatedTime\":1739793162000,\"contributors\":[{\"name\":\"Miracles-miracles\",\"username\":\"Miracles-miracles\",\"email\":\"2663284851@qq.com\",\"commits\":3,\"url\":\"https://github.com/Miracles-miracles\"}]},\"filePathRelative\":\"my/README.md\"}")
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
