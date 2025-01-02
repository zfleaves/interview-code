<template>
  <h5
    id="3%E3%80%81Webpack%E4%B8%ADloader%E7%9A%84%E4%BD%9C%E7%94%A8%2F%20loader%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
  >
    3、Webpack中loader的作用/ loader是什么？
  </h5>
  <p>
    Loader
    是webpack中提供了一种处理多种文件格式的机制，因为webpack只认识JS和JSON，所以Loader相当于翻译官，将其他类型资源进行预处理。<br />
    用于对模块的"源代码"进行转换。<br />
    loader支持链式调用，原型调用的顺序是从右往左。原型链中的每个loader会处理之前已处理过的资源，最终变为js代码。<br />
    可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。
  </p>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
