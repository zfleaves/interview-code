<template>
  <h4 id="%E4%B9%9D%E3%80%81Webpack%E7%AF%87">
    <a name="t15"></a>九、Webpack篇
  </h4>
  <h5 id="1.Webpack%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F">
    <strong>1</strong>、<strong>Webpack是什么？</strong>
  </h5>
  <blockquote>
    <ul>
      <li>
        webpack 是一个静态模块打包器，当 webpack
        处理应用程序时，会递归构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个
        bundle。
      </li>
      <li>
        webpack
        就像一条生产线,要经过一系列处理流程(loader)后才能将源文件转换成输出结果。
        这条生产线上的每个处理流程的职责都是单一的,多个流程之间有存在依赖关系,只有完成当前处理后才能交给下一个流程去处理。
      </li>
      <li>
        插件就像是一个插入到生产线中的一个功能,在特定的时机对生产线上的资源做处理。
        webpack
        在运行过程中会广播事件,插件只需要监听它所关心的事件,就能加入到这条生产线中,去改变生产线的运作。
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
