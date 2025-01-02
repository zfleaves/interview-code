<template>
  <h5
    id="%C2%A0%E2%80%8B%E7%BC%96%E8%BE%9114%E3%80%81CSS3%E4%B8%AD%E9%80%89%E6%8B%A9%E5%99%A8%E6%9D%83%E9%87%8D"
  >
    14、CSS3选择器及其优先级
  </h5>
  <blockquote>
    <p>
      <img
        alt=""
        height="214"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/7b6c08b7aabe8d56c80125a1a78d4c9d.png"
        width="645"
      />
    </p>
    <p><strong>对于选择器的优先级：</strong></p>
    <ul>
      <li>标签选择器、伪元素选择器：1</li>
      <li>类选择器、伪类选择器、属性选择器：10</li>
      <li>id 选择器：100</li>
      <li>内联样式：1000</li>
    </ul>
    <p><strong>注意事项：</strong></p>
    <ul>
      <li>!important声明的样式的优先级最高；</li>
      <li>如果优先级相同，则最后出现的样式生效；</li>
      <li>继承得到的样式的优先级最低；</li>
      <li>
        通用选择器（*）、子选择器（&gt;）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为
        0 ；
      </li>
      <li>
        样式表的来源不同时，优先级顺序为：内联样式 &gt; 内部样式 &gt; 外部样式
        &gt; 浏览器用户自定义样式 &gt; 浏览器默认样式。
      </li>
    </ul>
  </blockquote>
</template>
<script setup></script>
<style lang=""></style>
