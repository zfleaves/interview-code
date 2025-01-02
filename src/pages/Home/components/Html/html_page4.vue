<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%915.%20HTML5%20%E7%9A%84%E7%BD%91%E9%A1%B5%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AA%E9%9C%80%E8%A6%81%E5%86%99%3C!DOCTYOE%20HTML%3E%3F"
  >
    <strong><span style="color: #000000">4、</span></strong
    >DOCTYPE(⽂档类型) 的作⽤
  </h5>
  <blockquote>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Doctype是HTML5的文档声明，通过它可以告诉浏览器，使用哪一个HTML版本标准解析文档。在浏览器发展的过程中，HTML出现过很多版本，不同的版本之间格式书写上略有差异。如果没有事先告诉浏览器，那么浏览器就不知道文档解析标准是什么？此时，大部分浏览器将开启最大兼容模式来解析网页，我们一般称为怪异模式，这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的bug，所以文档声明是必须的。
    </p>
    <p></p>
    <p>
      <span style="color: #000000"
        >浏览器渲染页面的两种模式（可通过document.compatMode获取）：</span
      >
    </p>
    <ul>
      <li>
        <span style="color: #000000"
          >CSS1Compat：标准模式（Strick
          mode），默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。</span
        >
      </li>
      <li>
        <span style="color: #000000"
          >BackCompat：怪异模式(混杂模式)(Quick
          mode)，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。</span
        >
      </li>
    </ul>
  </blockquote>
</template>
<script setup></script>
<style lang="scss"></style>
