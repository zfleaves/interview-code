<template>
  <ul class="sidebar-links">
    <li v-for="item in sideList" :key="item.departKey">
      <section class="sidebar-group depth-0">
        <p class="sidebar-heading" @click="handleToggleShow(item)">
          <span>{{ item.depart }}</span>
          <el-icon>
            <ArrowRight v-if="!item.show" />
            <ArrowDown v-else />
          </el-icon>
        </p>
        <el-collapse-transition>
          <ul class="sidebar-group-items" v-show="item.show">
            <li
              @click="handleRouterDetail(item, child)"
              v-for="(child, index) in item.children"
              :key="`${item.departKey}-${child.id}`"
            >
              <a
                href="#"
                @click.prevent
                :class="[
                  'sidebar-link',
                  `${item.departKey}-${child.id}` == activeKey ? 'active' : '',
                ]"
                >{{ index + 1 }} 、 {{ child.title }}</a
              >
            </li>
          </ul>
        </el-collapse-transition>
      </section>
    </li>
  </ul>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const sideList = ref([
  {
    depart: "HTML篇",
    departKey: "html",
    show: true,
    children: [
      {
        title: "HTML5 新增那些标签?",
        id: "1",
      },
      {
        title: "常见的块元素、行内元素以及行内块元素，三者有何不同？",
        id: "2",
      },
      {
        title: "HTML、XML、XHTML它们之间有什么区别？",
        id: "3",
      },
      {
        title: "DOCTYPE(⽂档类型) 的作⽤",
        id: "4",
      },
      {
        title: "localStorage、sessionStorage、cookie 三者明细区别？",
        id: "5",
      },
      {
        title: "网站TDK三大标签以及SEO优化 ",
        id: "6",
      },
      {
        title: "img标签的title属性与alt属性的区别是什么？",
        id: "7",
      },
      {
        title: "src 和 href 的区别？",
        id: "8",
      },
      {
        title: "title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？ ",
        id: "9",
      },
      {
        title: "iframe的优点和缺点 ？",
        id: "10",
      },
    ],
  },
  {
    depart: "CSS篇",
    departKey: "css",
    show: false,
    children: [
      {
        title: "说一下 link 与 @import 的区别和用法？",
        id: "1",
      },
      {
        title: "rgba和opacity的透明效果有什么不同？",
        id: "2",
      },
      {
        title: "display:none与visibility:hidden的区别？",
        id: "3",
      },
      {
        title: "定位布局 position中的relative、absolute、fixed、sticky它们之间的区别？",
        id: "4",
      },
      {
        title: "如何用CSS3画一条0.5px的直线？",
        id: "5",
      },
      {
        title: "如何用CSS3画一个三角形？",
        id: "6",
      },
      {
        title: "CSS3盒子模型：标准盒模型、怪异盒模型",
        id: "7",
      },
      {
        title: "浮动（float)以及清除浮动的方法",
        id: "8",
      },
      {
        title: "Flex布局",
        id: "9",
      },
      {
        title: "CSS3中“transform”属性~平面转换",
        id: "10",
      },
      {
        title: "CSS3中 “子绝父相” 定位布局",
        id: "11",
      },
      {
        title: "盒子居中的几种方法：“子绝父相”、“Flex布局”、“transform”",
        id: "12",
      },
      {
        title: "CSS3中有哪些新特性？",
        id: "13",
      },
      {
        title: "CSS3选择器及其优先级",
        id: "14",
      },
      {
        title: "CSS3中 “transition” 过渡属性",
        id: "15",
      },
      {
        title: "结构伪类选择器&伪元素选择器",
        id: "16",
      },
      {
        title: "display的block、inline和inline-block的区别？",
        id: "17",
      },
      {
        title: "定位堆叠顺序z-index",
        id: "18",
      },
    ],
  },
  {
    depart: "HTML&&CSS混合篇",
    departKey: "html&&css",
    show: false,
    children: [
      {
        title: "Localstorage、sessionStorage、cookie 的区别",
        id: "1",
      },
      {
        title: "如何实现双飞翼（圣杯）布局？ ",
        id: "2",
      },
      {
        title: "伪元素和伪类的区别和作用？",
        id: "3",
      },
      {
        title: "img 的 alt 与 title 的异同，还有实现图片懒加载的原理？",
        id: "4",
      },
      {
        title: "BFC 是什么？ ",
        id: "5",
      },
    ],
  },
  {
    depart: "JavaScript篇",
    departKey: "js",
    show: false,
    children: [
      {
        title: "JS基础类型和复杂类型",
        id: "1",
      },
      {
        title: "箭头函数与普通函数的区别？",
        id: "2",
      },
      {
        title: "JS中null和undefined的判断方法和区别？",
        id: "3",
      },
      {
        title: "原型链",
        id: "4",
      },
      {
        title: "v-show 与 v-if 的区别？",
        id: "5",
      },
      {
        title: "keep-alive 的作用是什么?",
        id: "6",
      },
      {
        title: "闭包的理解?",
        id: "7",
      },
      {
        title: "JS垃圾回收机制",
        id: "8",
      },
      {
        title: "nextTick的实现？",
        id: "9",
      },
      {
        title: "混入mixin的原理？",
        id: "10",
      },

      {
        title: "列举和数组操作相关的方法",
        id: "11",
      },
      {
        title: "typeof和instanceof的区别是什么？ ",
        id: "12",
      },
      {
        title: "JS中 “==“和“===“的区别详解",
        id: "13",
      },
      {
        title: "如何用原生 JS给一个按钮绑定两个 onclick 事件？",
        id: "14",
      },
      {
        title: "var、let和const的区别？",
        id: "15",
      },
      {
        title: "讲解js的call、apply和bind区别？",
        id: "16",
      },
      {
        title: "谈谈你对webpack的理解？",
        id: "17",
      },
      {
        title: "const定义的对象属性是否可以改变？",
        id: "18",
      },
      {
        title: "栈溢出及解决方法？",
        id: "19",
      },
      {
        title: "JS如何实现多线程？",
        id: "20",
      },
      {
        title: "浅拷贝和深拷贝区别概念常见情况？",
        id: "21",
      },
      {
        title: "事件循环，Promise和async/await的详解",
        id: "22",
      },
      {
        title: "JS中数组常用方法详解 ",
        id: "23",
      },
    ],
  },
  {
    depart: "Vue2篇",
    departKey: "vue2",
    show: false,
    children: [
      {
        title: "什么是前端构建工具?比如（Vue2的webpack，Vue3的Vite）",
        id: "1",
      },
      {
        title: "Vue 组件之间的通信方式",
        id: "2",
      },
      {
        title: "Vuex的理解及使用场景",
        id: "3",
      },
      {
        title: "vue 的生命周期 八个阶段",
        id: "4",
      },
      {
        title: "简述Vue每个周期具体适合哪些场景？",
        id: "5",
      },
      {
        title: "简述MVVM 和MVC的原理以及区别？",
        id: "6",
      },
      {
        title: "vue常见指令",
        id: "7",
      },
      {
        title: "vue中的data为什么是一个函数？起到什么作用？ ",
        id: "8",
      },
      {
        title: "vue中ref的作用？  ",
        id: "9",
      },
      {
        title: "vue中hash和history的区别 ？",
        id: "10",
      },
    ],
  },
  {
    depart: "Vue3篇",
    departKey: "vue3",
    show: false,
    children: [
      {
        title: "Vue2.0和Vue3.0的区别？",
        id: "1",
      },
      {
        title: "Vue3带来了什么改变？ ",
        id: "2",
      },
      {
        title: "生命周期（vue2和vue3的生命周期对比）有哪些？",
        id: "3",
      },
      {
        title: "Vue3.0中的响应式原理是什么？vue2的响应式原理是什么？",
        id: "4",
      },
      {
        title: "vue3的常用 Composition API有哪些？",
        id: "5",
      },
      {
        title: "Vue3中的ref函数",
        id: "6",
      },
    ],
  },
  {
    depart: "React篇",
    departKey: "react",
    show: false,
    children: [
      {
        title: "讲讲什么是 JSX ？",
        id: "1",
      },
      {
        title: "React 的生命周期方法有哪些？",
        id: "2",
      },
      {
        title: "React的Hooks详解",
        id: "3",
      },
      {
        title: "React和Vue.js的相似性和差异性是什么？",
        id: "4",
      },
      {
        title: "React的功能是什么？",
        id: "5",
      },
      {
        title: "React的一些主要优点是？ ",
        id: "6",
      },
      {
        title: "React的局限性是什么？ ",
        id: "7",
      },
      {
        title: "如何理解React State不可变性的原则 ",
        id: "8",
      },
      {
        title: "React的特点和关键版本区别？ ",
        id: "9",
      },
    ],
  },
  {
    depart: "uniapp篇",
    departKey: "uniapp",
    show: false,
    children: [
      {
        title: "uniapp优缺点",
        id: "1",
      },
      {
        title: "uniapp目录结构 ",
        id: "2",
      },
      {
        title: "跨端适配—条件编译 ",
        id: "3",
      },
      {
        title: "uniapp 常用的指令语句",
        id: "4",
      },
      {
        title: "uniapp 应用的生命周期、页面的生命周期、组件的生命周期",
        id: "5",
      },
    ],
  },
  {
    depart: "Webpack篇",
    departKey: "webpack",
    show: false,
    children: [
      {
        title: "Webpack是什么？",
        id: "1",
      },
      {
        title: "Webpack的打包过程/打包原理/构建流程？",
        id: "2",
      },
      {
        title: "Webpack中loader的作用/ loader是什么？",
        id: "3",
      },
      {
        title: "常见的loader有哪些？",
        id: "4",
      },
      {
        title: "Plugin有什么作用？Plugin是什么？",
        id: "5",
      },
      {
        title: "常见的Plugin有哪些？",
        id: "6",
      },
      {
        title: "Webpack中Loader和Plugin的区别",
        id: "7",
      },
      {
        title: "如何利用webpack来优化前端性能？",
        id: "8",
      },
      {
        title: "Webpack如何配置压缩代码？压缩了什么？",
        id: "9",
      },
      {
        title: "如何提高webpack的构建速度？ ",
        id: "10",
      },
    ],
  },
  {
    depart: "Git/SVN篇",
    departKey: "git",
    show: false,
    children: [
      {
        title: "Git是什么？",
        id: "1",
      },
      {
        title: "简述Git中如何将一个新增文件添加到本地仓库？",
        id: "2",
      },
      {
        title: "Git常用命令",
        id: "3",
      },
      {
        title: "Git和SVN有什么区别?",
        id: "4",
      },
    ],
  },
  {
    depart: "B站开源视频大汇总，前端从入门到精通",
    departKey: "bilibili",
    show: false,
    children: [
      {
        title: "web 入门（HTML5+CSS3）",
        id: "1",
      },
      {
        title: "js（JavaScript+jQuery+Ajax）",
        id: "2",
      },
      {
        title: "Vue 开发（Vue2+Vue3+实战项目）",
        id: "3",
      },
      {
        title: "React &&微信小程序开发&&uniapp",
        id: "4",
      },
      {
        title: "华为鸿蒙进阶",
        id: "5",
      },
      {
        title: "ssr（Nuxt+Next.js）",
        id: "6",
      },
      {
        title: "工程化（webpack+vite）",
        id: "7",
      },
      {
        title: "可视化（echarts ）",
        id: "8",
      },
      {
        title: "源码（虚拟DOM和diff算法）",
        id: "9",
      },
      {
        title: "移动App跨端开发（Uni-App） ",
        id: "10",
      },
      {
        title: "桌面应用开发（Electron）",
        id: "11",
      },
      {
        title: "网络知识（网络概述+结构算法）",
        id: "12",
      },
      {
        title: "浏览器底层原理",
        id: "13",
      },
    ],
  },
]);

const activeKey = ref();

const handleRouterDetail = (item, child) => {
  activeKey.value = `${item.departKey}-${child.id}`;
  // 传递参数的方式
  router.replace({
    path: "/home",
    query: {
      key: activeKey.value,
    },
  });
};

const handleToggleShow = (item) => {
  for (const v of sideList.value) {
    if (v.departKey === item.departKey) {
      item.show = !item.show;
    } else {
      v.show = false
    }
  }
}

onMounted(() => {
  const time = setTimeout(() => {
    activeKey.value = route.query.key || 'html-1';
    const departKey = activeKey.value.indexOf('-') >= 0 ? activeKey.value.split('-')[0] : 'html';
    for (const v of sideList.value) {
    if (v.departKey === departKey) {
      v.show = true;
    } else {
      v.show = false
    }
  }
    clearTimeout(time);
  }, 100);
})
</script>
<style lang="scss" scoped>
.sidebar-links {
  padding: 1.5rem 0;
  margin: 0;
  list-style-type: none;

  .sidebar-heading {
    color: #2c3e50;
    transition: color 0.15s ease;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 700;
    padding: 0.35rem 1.5rem 0.35rem 1.25rem;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    border-left: 0.25rem solid transparent;
    display: flex;
    justify-content: space-between;
  }
  .sidebar-group-items {
    transition: height 0.1s ease-out;
    font-size: 0.95em;
    overflow: hidden;
  }
  .sidebar-group a {
    &.sidebar-link {
      padding-left: 2rem;
    }
    &.active {
      font-weight: 600;
      color: #3eaf7c;
      border-left-color: #3eaf7c;
    }
  }
  a.sidebar-link {
    font-size: 1em;
    font-weight: 400;
    display: inline-block;
    color: #2c3e50;
    border-left: 0.25rem solid transparent;
    padding: 0.35rem 1rem 0.35rem 1.25rem;
    line-height: 1.4;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
