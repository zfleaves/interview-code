<template>
  <h5
    id="7%E3%80%81Webpack%E4%B8%ADLoader%E5%92%8CPlugin%E7%9A%84%E5%8C%BA%E5%88%AB"
  >
    7、Webpack中Loader和Plugin的区别
  </h5>
  <ul>
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
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
