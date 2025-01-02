<template>
  <h5 id="%F0%9F%8D%879%E3%80%81mixin%E5%8E%9F%E7%90%86">
    10、混入mixin的原理&#xff1f;
  </h5>
  <blockquote>
    <p>
      mixin 项目变得复杂的时候&#xff0c;多个组件间有重复的逻辑就会用到mixin<br />
      多个组件有相同的逻辑&#xff0c;抽离出来&#xff0c;其实mixin并不是完美的解决方案&#xff0c;会存在一些问题<br /><strong
        >如&#xff1a;vue3提出的Composition
        API旨在解决这些问题【追求完美是要消耗一定的成本的&#xff0c;如开发成本】</strong
      ><br />
      场景&#xff1a;PC端新闻列表和详情页一样的右侧栏目&#xff0c;可以使用mixin进行混合<br /><span
        style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0">劣势&#xff1a;</span></strong
        ></span
      >
    </p>
    <ul>
      <li><strong>1. 变量来源不明确&#xff0c;不利于阅读</strong></li>
      <li><strong>2. 多mixin可能会造成命名冲突</strong></li>
      <li>
        <strong
          >3. mixin和组件可能出现多对多的关系&#xff0c;使得项目复杂度变高</strong
        >
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
