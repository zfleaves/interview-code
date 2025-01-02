<template>
  <h5
    id="7%E3%80%81%E6%A0%87%E7%AD%BE%E4%B8%8Atitle%E5%B1%9E%E6%80%A7%E4%B8%8Ealt%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
  >
    7、img标签的title属性与alt属性的区别是什么？
  </h5>
  <blockquote>
    <ul>
      <li>
        <span style="color: #be191c"
          ><code><span style="background-color: #fef2f0">alt</span></code></span
        >是给搜索引擎识别，在图像无法显示时的替代文本
      </li>
      <li>
        <span style="color: #be191c"
          ><code
            ><span style="background-color: #fef2f0">title</span></code
          ></span
        >属性是关于元素的注释信息，主要是给用户解读
      </li>
      <li>
        在定义 img 对象时，将 alt 和 title
        属性写全，可以保证在各种浏览器中都能正常使用
      </li>
    </ul>
    <p><strong>注意：（IE已淘汰，仅做了解即可）</strong></p>
    <p>当鼠标放到文字或是图片上时有 title 文字显示。</p>
    <p>
      （因为IE不标准）在 IE 浏览器中 alt 起到了 title 的作用，变成文字提示。
    </p>
  </blockquote>
</template>
<script setup></script>
<style lang="scss"></style>
