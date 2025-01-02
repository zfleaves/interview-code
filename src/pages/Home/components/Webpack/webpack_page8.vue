<template>
  <h5
    id="8%E3%80%81%E5%A6%82%E4%BD%95%E5%88%A9%E7%94%A8webpack%E6%9D%A5%E4%BC%98%E5%8C%96%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%EF%BC%9F"
  >
    8、如何利用webpack来优化前端性能？
  </h5>
  <ul>
    <li>代码压缩</li>
  </ul>
  <p><strong>按需加载</strong></p>
  <ul>
    <li>代码分割 splitChunks - 在optimization配置项中配置</li>
  </ul>
  <blockquote>
    <p>
      1.可以将node__mudules中代码单独打包成一个chunk输出（比如使用了jqury？）<br />
      2.会自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独的一个chunk不会重复打包
    </p>
  </blockquote>
  <ul>
    <li>使用Dll进行分包</li>
  </ul>
  <blockquote>
    <p>
      正常情况下node_module会被打包成一个文件<br />
      使用dll技术，对可以将那些不常更新的框架和库进行单独打包，生成一个chunk&nbsp;
    </p>
  </blockquote>
  <ul>
    <li>使用路由懒加载</li>
  </ul>
  <blockquote>
    <p>
      在代码中所有被 import()函数引用的模块，都将打成一个单独的包，放在 chunk
      存储的目录下。在浏览器运行到这一行代码时，就会自动请求这个资源，实现异步加载。
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
