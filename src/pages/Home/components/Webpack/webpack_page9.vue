<template>
  <h5
    id="9%E3%80%81Webpack%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E5%8E%8B%E7%BC%A9%E4%BB%A3%E7%A0%81%EF%BC%9F%E5%8E%8B%E7%BC%A9%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F"
  >
    9、Webpack如何配置压缩代码？压缩了什么？
  </h5>
  <ul>
    <li>在optimization配置项中来配置该插件作为压缩器进行压缩。</li>
    <li>在plugins里使用该插件进行压缩</li>
    <li>js压缩:利用terser-webpack-plugin</li>
    <li>css压缩:利用了optimize-css-assets-webpack-plugin 插件</li>
    <li>删除了console、注释、空格、换行、没有使用的css代码等</li>
  </ul>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
