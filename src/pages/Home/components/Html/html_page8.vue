<template>
  <h5
    id="8%E3%80%81src%20%E5%92%8C%20href%20%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    8、src 和 href 的区别？
  </h5>
  <blockquote>
    <p id="u0f6b7d92">
      src和href都是HTML中特定元素的属性，都可以用来引入外部的资源。两者区别如下：
    </p>
    <ul>
      <li id="u8dc9ed8b">
        src：全称<em>source</em>，它通常用于img、video、audio、script元素，通过src指向请求外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置，在请求src资源时，它会将资源下载并应用到文档内，比如说：js脚本、img图片、frame等元素。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。这也是为什么将js脚本放在底部而不是头部的原因。
      </li>
      <li id="u1e6e1332">
        href：全称<em>hyper reference</em
        >，意味着超链接，指向网络资源，当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，通常用于a、link元素。
      </li>
    </ul>
  </blockquote>
</template>
<script setup></script>
<style lang="scss"></style>
