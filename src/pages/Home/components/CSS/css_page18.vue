<template>
  <h5
    id="18%E3%80%81%E5%AE%9A%E4%BD%8D%E5%A0%86%E5%8F%A0%E9%A1%BA%E5%BA%8Fz-index"
  >
    18、定位堆叠顺序<code>z-index</code>
  </h5>
  <p>
    在使用定位布局时&#xff0c;可能会出现盒子重叠的情况。此时&#xff0c;可以使用
    z-index 来控制盒子的前后次序 (z轴)
  </p>
  <blockquote>
    <p>
      语法&#xff1a; 选择器 { z-index: 1; }<br />
      数值可以是正整数、负整数或 0, 默认是
      auto&#xff0c;数值越大&#xff0c;盒子越靠上
    </p>
  </blockquote>
  <ul>
    <li><p>如果属性值相同&#xff0c;则按照书写顺序&#xff0c;后来居上</p></li>
    <li><p>数字后面不能加单位</p></li>
    <li>
      <p><code>只有定位的盒子才有 z-index 属性</code></p>
    </li>
  </ul>
</template>
<script setup></script>
<style lang=""></style>
