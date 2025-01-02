<template>
  <h5
    id="%F0%9F%8D%875%E3%80%81keep-alive%20%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88%3F"
  >
    6、keep-alive 的作用是什么?
  </h5>
  <blockquote>
    <ol>
      <li>
        <strong>官网解释&#xff1a;</strong
        >包裹动态组件时&#xff0c;会缓存不活动的组件实例&#xff0c;主要用于<strong>保留组件状态</strong>或<strong>避免重新渲染</strong>。
      </li>
      <li>
        <strong>作用&#xff1a;</strong
        >实现组件缓存&#xff0c;保持这些组件的状态&#xff0c;以避免反复渲染导致的性能问题。
        需要缓存组件 频繁切换&#xff0c;不需要重复渲染。
      </li>
      <li>
        <strong>场景&#xff1a;</strong>tabs标签页 后台导航&#xff0c;vue性能优化。
      </li>
      <li>
        <strong>原理&#xff1a;</strong
        ><code>Vue.js</code
        >内部将<code>DOM</code>节点抽象成了一个个的<code>VNode</code>节点&#xff0c;<code>keep-alive</code>组件的缓存也是基于<code>VNode</code>节点的而不是直接存储<code>DOM</code>结构。它将满足条件<code>&#xff08;pruneCache与pruneCache&#xff09;</code>的组件在<code>cache</code>对象中缓存起来&#xff0c;在需要重新渲染的时候再将<code>vnode</code>节点从<code>cache</code>对象中取出并渲染。
      </li>
    </ol>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
