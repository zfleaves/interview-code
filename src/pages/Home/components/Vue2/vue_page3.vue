<template>
  <h5
    id="%F0%9F%8D%8711%E3%80%81Vuex%E7%9A%84%E7%90%86%E8%A7%A3%E5%8F%8A%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF"
  >
    <strong>&ZeroWidthSpace;</strong>3、Vuex的理解及使用场景
  </h5>
  <blockquote>
    <p>
      Vuex 是一个专为 Vue 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是
      store（仓库）。
    </p>
    <p>
      Vuex 的状态存储是响应式的；当 Vue 组件从 store 中读取状态的时候，若 store
      中的状态发生变化，那么相应的组件也会相应地得到高效更新 2. 改变 store
      中的状态的唯一途径就是显式地提交 (commit) mutation，
      这样使得我们可以方便地跟踪每一个状态的变化 Vuex主要包括以下几个核心模块：
    </p>
    <p><strong>1.State：</strong>定义了应用的状态数据</p>
    <p>
      <strong>2.Getter：</strong>在 store 中定义“getter”（可以认为是 store
      的计算属性），
    </p>
    <p>
      就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
      且只有当它的依赖值发生了改变才会被重新计算
    </p>
    <p>
      <strong>3. Mutation：</strong>是唯一更改 store
      中状态的方法，且必须是同步函数
    </p>
    <p>
      <strong>4. Action：</strong>用于提交
      mutation，而不是直接变更状态，可以包含任意异步操作
    </p>
    <p>
      <strong>5. Module：</strong>允许将单一的 Store 拆分为多个 store
      且同时保存在单一的状态树中
    </p>
    <p>
      <img
        alt=""
        height="479"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/41c6bb54707db59a63549092b992b5c2.png"
        width="748"
      />&ZeroWidthSpace;
    </p>
    <p></p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
