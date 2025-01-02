<template>
  <h5
    id="5%E3%80%81vue3%E7%9A%84%E5%B8%B8%E7%94%A8%20Composition%20API%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F"
  >
    5、vue3的常用 Composition API有哪些？
  </h5>
  <p><strong>1.拉开序幕的setup</strong></p>
  <ol>
    <li>理解：Vue3.0中一个新的配置项，值为一个函数。</li>
    <li>setup是所有Composition API（组合API）“ 表演的舞台 ”。</li>
    <li>组件中所用到的：数据、方法等等，均要配置在setup中。</li>
    <li>setup函数的两种返回值：</li>
  </ol>
  <ul>
    <li>
      &nbsp;&nbsp;&nbsp;若返回一个对象，则对象中的属性、方法,
      在模板中均可以直接使用。（重关注！）
    </li>
    <li>&nbsp; &nbsp;若返回一个渲染函数：则可以自定义渲染内容。（了解）</li>
  </ul>
  <p>&nbsp; &nbsp; &nbsp;5.setup的几个注意点</p>
  <ul>
    <li>&nbsp;setup执行的时机</li>
    <li>&nbsp;在beforeCreate之前执行一次，this是undefined。</li>
    <li>setup的参数</li>
    <li>
      props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
    </li>
    <li>context：上下文对象</li>
    <li>
      attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性,
      相当于 this.$attrs。
    </li>
    <li>slots: 收到的插槽内容, 相当于 this.$slots。</li>
    <li>emit: 分发自定义事件的函数, 相当于 this.$emit。</li>
    <li>尽量不要与Vue2.x配置混用</li>
  </ul>
  <p>
    Vue2.x配置（data、methos、computed...）中可以访问到setup中的属性、方法。
  </p>
  <p>但在setup中不能访问到Vue2.x配置（data、methos、computed...）。</p>
  <p>如果有重名, setup优先。</p>
  <p>
    setup不能是一个async函数，因为返回值不再是return的对象, 而是promise,
    模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）
  </p>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
