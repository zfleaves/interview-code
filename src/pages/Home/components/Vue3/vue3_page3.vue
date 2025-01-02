<template>
  <h5
    id="3%E3%80%81%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%EF%BC%88vue2%E5%92%8Cvue3%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%AF%B9%E6%AF%94%EF%BC%89%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F"
  >
    3、生命周期（vue2和vue3的生命周期对比）有哪些？
  </h5>
  <p><strong>vue2.x的生命周期</strong></p>
  <p style="text-align: center">
    <strong
      ><img
        alt=""
        class="left"
        height="1200"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/10a0605a8119d4b490f504b823942fb2.png"
        width="684"
    /></strong>
  </p>
  <p><strong>vue3.0的生命周期</strong></p>
  <p style="text-align: center">
    <strong
      ><img
        alt=""
        height="1141"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/8c12425f4967063b51647b1467269bfb.png"
        width="721"
    /></strong>
  </p>
  <p>
    <strong
      >Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：</strong
    >
  </p>
  <ul>
    <li>beforeDestroy改名为 beforeUnmount</li>
    <li>destroyed改名为 unmounted</li>
  </ul>
  <p>
    <strong
      >Vue3.0也提供了 Composition API
      形式的生命周期钩子，与Vue2.x中钩子对应关系如下：</strong
    >
  </p>
  <ul>
    <li>beforeCreate===&gt;setup()</li>
    <li>created=======&gt;setup()</li>
    <li>beforeMount ===&gt;onBeforeMount</li>
    <li>mounted=======&gt;onMounted</li>
    <li>beforeUpdate===&gt;onBeforeUpdate</li>
    <li>updated =======&gt;onUpdated</li>
    <li>beforeUnmount ==&gt;onBeforeUnmount</li>
    <li>unmounted =====&gt;onUnmounted</li>
  </ul>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
