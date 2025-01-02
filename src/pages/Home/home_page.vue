<template>
  <div class="home-content">
    <!-- <HtmlPage1></HtmlPage1> -->
    <component :is="currentComponent"></component>
  </div>
</template>
<script setup>
import { ref, shallowRef, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import HtmlPage1 from "./components/Html/html_page1.vue";
import HtmlPage2 from "./components/Html/html_page2.vue";
import HtmlPage3 from "./components/Html/html_page3.vue";
import HtmlPage4 from "./components/Html/html_page4.vue";
import HtmlPage5 from "./components/Html/html_page5.vue";
import HtmlPage6 from "./components/Html/html_page6.vue";
import HtmlPage7 from "./components/Html/html_page7.vue";
import HtmlPage8 from "./components/Html/html_page8.vue";
import HtmlPage9 from "./components/Html/html_page9.vue";
import HtmlPage10 from "./components/Html/html_page10.vue";
// CSS
import CssPage1 from "./components/CSS/css_page1.vue";
import CssPage2 from "./components/CSS/css_page2.vue";
import CssPage3 from "./components/CSS/css_page3.vue";
import CssPage4 from "./components/CSS/css_page4.vue";
import CssPage5 from "./components/CSS/css_page5.vue";
import CssPage6 from "./components/CSS/css_page6.vue";
import CssPage7 from "./components/CSS/css_page7.vue";
import CssPage8 from "./components/CSS/css_page8.vue";
import CssPage9 from "./components/CSS/css_page9.vue";
import CssPage10 from "./components/CSS/css_page10.vue";
import CssPage11 from "./components/CSS/css_page11.vue";
import CssPage12 from "./components/CSS/css_page12.vue";
import CssPage13 from "./components/CSS/css_page13.vue";
import CssPage14 from "./components/CSS/css_page14.vue";
import CssPage15 from "./components/CSS/css_page15.vue";
import CssPage16 from "./components/CSS/css_page16.vue";
import CssPage17 from "./components/CSS/css_page17.vue";
import CssPage18 from "./components/CSS/css_page18.vue";
// HTML&&CSS
import HtmlCssPage1 from "./components/HTML&&CSS/html&&css_page1.vue";
import HtmlCssPage2 from "./components/HTML&&CSS/html&&css_page2.vue";
import HtmlCssPage3 from "./components/HTML&&CSS/html&&css_page3.vue";
import HtmlCssPage4 from "./components/HTML&&CSS/html&&css_page4.vue";
import HtmlCssPage5 from "./components/HTML&&CSS/html&&css_page5.vue";
// JS
import JsPage1 from "./components/JS/js_page1.vue";
import JsPage2 from "./components/JS/js_page2.vue";
import JsPage3 from "./components/JS/js_page3.vue";
import JsPage4 from "./components/JS/js_page4.vue";
import JsPage5 from "./components/JS/js_page5.vue";
import JsPage6 from "./components/JS/js_page6.vue";
import JsPage7 from "./components/JS/js_page7.vue";
import JsPage8 from "./components/JS/js_page8.vue";
import JsPage9 from "./components/JS/js_page9.vue";
import JsPage10 from "./components/JS/js_page10.vue";
import JsPage11 from "./components/JS/js_page11.vue";
import JsPage12 from "./components/JS/js_page12.vue";
import JsPage13 from "./components/JS/js_page13.vue";
import JsPage14 from "./components/JS/js_page14.vue";
import JsPage15 from "./components/JS/js_page15.vue";
import JsPage16 from "./components/JS/js_page16.vue";
import JsPage17 from "./components/JS/js_page17.vue";
import JsPage18 from "./components/JS/js_page18.vue";
import JsPage19 from "./components/JS/js_page19.vue";
import JsPage20 from "./components/JS/js_page20.vue";
import JsPage21 from "./components/JS/js_page21.vue";
import JsPage22 from "./components/JS/js_page22.vue";
import JsPage23 from "./components/JS/js_page23.vue";
// Vue
import VuePage1 from "./components/Vue2/vue_page1.vue";
import VuePage2 from "./components/Vue2/vue_page2.vue";
import VuePage3 from "./components/Vue2/vue_page3.vue";
import VuePage4 from "./components/Vue2/vue_page4.vue";
import VuePage5 from "./components/Vue2/vue_page5.vue";
import VuePage6 from "./components/Vue2/vue_page6.vue";
import VuePage7 from "./components/Vue2/vue_page7.vue";
import VuePage8 from "./components/Vue2/vue_page8.vue";
import VuePage9 from "./components/Vue2/vue_page9.vue";
import VuePage10 from "./components/Vue2/vue_page10.vue";
// Vue3
import Vue3Page1 from "./components/Vue3/vue3_page1.vue";
import Vue3Page2 from "./components/Vue3/vue3_page2.vue";
import Vue3Page3 from "./components/Vue3/vue3_page3.vue";
import Vue3Page4 from "./components/Vue3/vue3_page4.vue";
import Vue3Page5 from "./components/Vue3/vue3_page5.vue";
import Vue3Page6 from "./components/Vue3/vue3_page6.vue";
// React
import ReactPage1 from "./components/React/react_page1.vue";
import ReactPage2 from "./components/React/react_page2.vue";
import ReactPage3 from "./components/React/react_page3.vue";
import ReactPage4 from "./components/React/react_page4.vue";
import ReactPage5 from "./components/React/react_page5.vue";
import ReactPage6 from "./components/React/react_page6.vue";
import ReactPage7 from "./components/React/react_page7.vue";
import ReactPage8 from "./components/React/react_page8.vue";
import ReactPage9 from "./components/React/react_page9.vue";
// Uniapp
import UniappPage1 from "./components/Uniapp/uniapp_page1.vue";
import UniappPage2 from "./components/Uniapp/uniapp_page2.vue";
import UniappPage3 from "./components/Uniapp/uniapp_page3.vue";
import UniappPage4 from "./components/Uniapp/uniapp_page4.vue";
import UniappPage5 from "./components/Uniapp/uniapp_page5.vue";
// Webpack
import WebpackPage1 from "./components/Webpack/webpack_page1.vue";
import WebpackPage2 from "./components/Webpack/webpack_page2.vue";
import WebpackPage3 from "./components/Webpack/webpack_page3.vue";
import WebpackPage4 from "./components/Webpack/webpack_page4.vue";
import WebpackPage5 from "./components/Webpack/webpack_page5.vue";
import WebpackPage6 from "./components/Webpack/webpack_page6.vue";
import WebpackPage7 from "./components/Webpack/webpack_page7.vue";
import WebpackPage8 from "./components/Webpack/webpack_page8.vue";
import WebpackPage9 from "./components/Webpack/webpack_page9.vue";
import WebpackPage10 from "./components/Webpack/webpack_page10.vue";
// Git
import GitPage1 from "./components/Git/git_page1.vue";
import GitPage2 from "./components/Git/git_page2.vue";
import GitPage3 from "./components/Git/git_page3.vue";
import GitPage4 from "./components/Git/git_page4.vue";
// Bilibili
import BilibiliPage1 from "./components/Bilibili/bilibili_page1.vue";
import BilibiliPage2 from "./components/Bilibili/bilibili_page2.vue";
import BilibiliPage3 from "./components/Bilibili/bilibili_page3.vue";
import BilibiliPage4 from "./components/Bilibili/bilibili_page4.vue";
import BilibiliPage5 from "./components/Bilibili/bilibili_page5.vue";
import BilibiliPage6 from "./components/Bilibili/bilibili_page6.vue";
import BilibiliPage7 from "./components/Bilibili/bilibili_page7.vue";
import BilibiliPage8 from "./components/Bilibili/bilibili_page8.vue";
import BilibiliPage9 from "./components/Bilibili/bilibili_page9.vue";
import BilibiliPage10 from "./components/Bilibili/bilibili_page10.vue";
import BilibiliPage11 from "./components/Bilibili/bilibili_page11.vue";
import BilibiliPage12 from "./components/Bilibili/bilibili_page12.vue";
import BilibiliPage13 from "./components/Bilibili/bilibili_page13.vue";

const route = useRoute();

const activePageObJ = reactive({
    'html-1': shallowRef(HtmlPage1),
    'html-2': shallowRef(HtmlPage2),
    'html-3': shallowRef(HtmlPage3),
    'html-4': shallowRef(HtmlPage4),
    'html-5': shallowRef(HtmlPage5),
    'html-6': shallowRef(HtmlPage6),
    'html-7': shallowRef(HtmlPage7),
    'html-8': shallowRef(HtmlPage8),
    'html-9': shallowRef(HtmlPage9),
    'html-10': shallowRef(HtmlPage10),
    // CSS
    'css-1': shallowRef(CssPage1),
    'css-2': shallowRef(CssPage2),
    'css-3': shallowRef(CssPage3),
    'css-4': shallowRef(CssPage4),
    'css-5': shallowRef(CssPage5),
    'css-6': shallowRef(CssPage6),
    'css-7': shallowRef(CssPage7),
    'css-8': shallowRef(CssPage8),
    'css-9': shallowRef(CssPage9),
    'css-10': shallowRef(CssPage10),
    'css-11': shallowRef(CssPage11),
    'css-12': shallowRef(CssPage12),
    'css-13': shallowRef(CssPage13),
    'css-14': shallowRef(CssPage14),
    'css-15': shallowRef(CssPage15),
    'css-16': shallowRef(CssPage16),
    'css-17': shallowRef(CssPage17),
    'css-18': shallowRef(CssPage18),
    // HTML&&CSS
    'html&&css-1': shallowRef(HtmlCssPage1),
    'html&&css-2': shallowRef(HtmlCssPage2),
    'html&&css-3': shallowRef(HtmlCssPage3),
    'html&&css-4': shallowRef(HtmlCssPage4),
    'html&&css-5': shallowRef(HtmlCssPage5),
    // JS
    'js-1': shallowRef(JsPage1),
    'js-2': shallowRef(JsPage2),
    'js-3': shallowRef(JsPage3),
    'js-4': shallowRef(JsPage4),
    'js-5': shallowRef(JsPage5),
    'js-6': shallowRef(JsPage6),
    'js-7': shallowRef(JsPage7),
    'js-8': shallowRef(JsPage8),
    'js-9': shallowRef(JsPage9),
    'js-10': shallowRef(JsPage10),
    'js-11': shallowRef(JsPage11),
    'js-12': shallowRef(JsPage12),
    'js-13': shallowRef(JsPage13),
    'js-14': shallowRef(JsPage14),
    'js-15': shallowRef(JsPage15),
    'js-16': shallowRef(JsPage16),
    'js-17': shallowRef(JsPage17),
    'js-18': shallowRef(JsPage18),
    'js-19': shallowRef(JsPage19),
    'js-20': shallowRef(JsPage20),
    'js-21': shallowRef(JsPage21),
    'js-22': shallowRef(JsPage22),
    'js-23': shallowRef(JsPage23),
    // VUE2
    'vue2-1': shallowRef(VuePage1),
    'vue2-2': shallowRef(VuePage2),
    'vue2-3': shallowRef(VuePage3),
    'vue2-4': shallowRef(VuePage4),
    'vue2-5': shallowRef(VuePage5),
    'vue2-6': shallowRef(VuePage6),
    'vue2-7': shallowRef(VuePage7),
    'vue2-8': shallowRef(VuePage8),
    'vue2-9': shallowRef(VuePage9),
    'vue2-10': shallowRef(VuePage10),
    // VUE3
    'vue3-1': shallowRef(Vue3Page1),
    'vue3-2': shallowRef(Vue3Page2),
    'vue3-3': shallowRef(Vue3Page3),
    'vue3-4': shallowRef(Vue3Page4),
    'vue3-5': shallowRef(Vue3Page5),
    'vue3-6': shallowRef(Vue3Page6),
    // React
    'react-1': shallowRef(ReactPage1),
    'react-2': shallowRef(ReactPage2),
    'react-3': shallowRef(ReactPage3),
    'react-4': shallowRef(ReactPage4),
    'react-5': shallowRef(ReactPage5),
    'react-6': shallowRef(ReactPage6),
    'react-7': shallowRef(ReactPage7),
    'react-8': shallowRef(ReactPage8),
    'react-9': shallowRef(ReactPage9),
    // Uniapp
    'uniapp-1': shallowRef(UniappPage1),
    'uniapp-2': shallowRef(UniappPage2),
    'uniapp-3': shallowRef(UniappPage3),
    'uniapp-4': shallowRef(UniappPage4),
    'uniapp-5': shallowRef(UniappPage5),
    // Webpack
    'webpack-1': shallowRef(WebpackPage1),
    'webpack-2': shallowRef(WebpackPage2),
    'webpack-3': shallowRef(WebpackPage3),
    'webpack-4': shallowRef(WebpackPage4),
    'webpack-5': shallowRef(WebpackPage5),
    'webpack-6': shallowRef(WebpackPage6),
    'webpack-7': shallowRef(WebpackPage7),
    'webpack-8': shallowRef(WebpackPage8),
    'webpack-9': shallowRef(WebpackPage9),
    'webpack-10': shallowRef(WebpackPage10),
    // Git
    'git-1': shallowRef(GitPage1),
    'git-2': shallowRef(GitPage2),
    'git-3': shallowRef(GitPage3),
    'git-4': shallowRef(GitPage4),
    // JS
    'bilibili-1': shallowRef(BilibiliPage1),
    'bilibili-2': shallowRef(BilibiliPage2),
    'bilibili-3': shallowRef(BilibiliPage3),
    'bilibili-4': shallowRef(BilibiliPage4),
    'bilibili-5': shallowRef(BilibiliPage5),
    'bilibili-6': shallowRef(BilibiliPage6),
    'bilibili-7': shallowRef(BilibiliPage7),
    'bilibili-8': shallowRef(BilibiliPage8),
    'bilibili-9': shallowRef(BilibiliPage9),
    'bilibili-10': shallowRef(BilibiliPage10),
    'bilibili-11': shallowRef(BilibiliPage11),
    'bilibili-12': shallowRef(BilibiliPage12),
    'bilibili-13': shallowRef(BilibiliPage13),
})

const activePageKey  = ref('HtmlPage1')
const currentComponent  = shallowRef(HtmlPage1)

onMounted(() => {
    activePageKey.value = route.query.key || 'html-1';
    console.log('activePageKey.value: ', activePageKey.value);
    currentComponent.value = activePageObJ[activePageKey.value];
})

</script>
<style lang="scss">
@use './styles/index.scss' as *;
@use './styles/atom-one-dark.scss';
.home-content {
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000 !important;
    margin: 8px 0 16px;
    font-weight: 700;
  }
  h4 {
    font-size: 18px;
    line-height: 26px;
  }
  h5 {
    font-size: 16px;
    line-height: 26px;
  }
  blockquote {
    display: block;
    padding: 16px;
    margin: 0 0 24px;
    // border-left: 8px solid #dddfe4;
    background: #eef0f4;
    overflow: auto;
    overflow-scrolling: touch;
    word-wrap: normal;
    word-break: normal;
    ul {
      margin-bottom: 16px;
      padding: 0;
      font-size: 16px;
      line-height: 24px;
      li {
        list-style-type: disc;
        margin: 8px 0 0 32px;
      }
    }
  }
  p {
    line-height: 1.7;
    color: #4d4d4d;
    font-weight: 400;
    line-height: 24px !important;
    margin: 0 0 16px;
    overflow-x: auto;
    overflow-y: hidden;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  ol {
    margin: 0 0 24px;
    padding: 0;
    font-size: 16px;
    li {
        list-style-type: decimal;
        margin-left: 40px;
        margin-top: 8px;
    }
  }
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0 0 24px;
    overflow-x: auto;
    padding: 8px;
    font-family: Consolas, Inconsolata, Courier, monospace;
    font-size: 14px;
    line-height: 22px;
    color: #000;
    font-synthesis-style: auto;
    word-wrap: break-word;
    max-height: unset;
    code {
        display: block;
        line-height: 22px;
        overflow-x: auto;
        white-space: pre;
        border-radius: 4px;
        padding: 8px;
        tab-size: 4;
        ol {
            li {
                list-style-type: none;
                margin-left: 0;
                margin-top: 0;
                height: 22px;
            }
        }
    }
  }
  .hljs {
    color: #abb2bf;
    background: #282c34;
  }
  .hljs-ln-numbers {
    width: 24px;
    border-right: 1px solid #c5c5c5;
    float: left;
    height: 22px;
  }
  .hljs-ln-n:before {
    content: attr(data-line-number);
  }
  .code-edithtml {
    display: none;
  }
  .hide-preCode-box {
    display: none;
  }
}
</style>
