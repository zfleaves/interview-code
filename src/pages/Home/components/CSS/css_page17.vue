<template>
  <h5
    id="17%E3%80%81display%E7%9A%84block%E3%80%81inline%E5%92%8Cinline-block%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    17、display的block、inline和inline-block的区别？
  </h5>
  <p>
    &#xff08;1&#xff09;block&#xff1a;
    会独占一行&#xff0c;多个元素会另起一行&#xff0c;可以设置width、height、margin和padding属性&#xff1b;
  </p>
  <p>
    &#xff08;2&#xff09;inline&#xff1a;
    元素不会独占一行&#xff0c;设置width、height属性无效。但可以设置水平方向的margin和padding属性&#xff0c;不能设置垂直方向的padding和margin&#xff1b;
  </p>
  <p>
    &#xff08;3&#xff09;inline-block&#xff1a;
    将对象设置为inline对象&#xff0c;但对象的内容作为block对象呈现&#xff0c;之后的内联对象会被排列在同一行内。
  </p>
  <p>对于行内元素和块级元素&#xff0c;其特点如下&#xff1a;</p>
  <p>
    <span style="color: #be191c"
      ><span style="background-color: #fef2f0">行内元素</span></span
    >
  </p>
  <ul>
    <li>设置宽高无效&#xff1b;</li>
    <li>
      可以设置水平方向的margin和padding属性&#xff0c;不能设置垂直方向的padding和margin&#xff1b;
    </li>
    <li>不会自动换行&#xff1b;</li>
  </ul>
  <p>
    <span style="color: #be191c"
      ><span style="background-color: #fef2f0">块级元素</span></span
    >
  </p>
  <ul>
    <li>可以设置宽高&#xff1b;</li>
    <li>设置margin和padding都有效&#xff1b;</li>
    <li>可以自动换行&#xff1b;</li>
    <li>多个块状&#xff0c;默认排列从上到下。</li>
  </ul>
</template>
<script setup></script>
<style lang=""></style>
