<template>
  <h5
    id="5%E3%80%81%E7%AE%80%E8%BF%B0Vue%E6%AF%8F%E4%B8%AA%E5%91%A8%E6%9C%9F%E5%85%B7%E4%BD%93%E9%80%82%E5%90%88%E5%93%AA%E4%BA%9B%E5%9C%BA%E6%99%AF%EF%BC%9F"
  >
    <strong>5、简述Vue</strong>每个周期具体适合哪些场景<strong>？</strong>
  </h5>
  <blockquote>
    <ol>
      <li>
        <strong>beforeCreate</strong>：
        在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法
      </li>
      <li>
        <strong>created</strong>： data 和 methods都已经被初始化好了，如果要调用
        methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作
      </li>
      <li>
        <strong>beforeMount</strong>：
        执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的
      </li>
      <li>
        <strong>mounted</strong>：
        执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行
      </li>
      <li>
        <strong>beforeUpdate</strong>：
        当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的，
        页面还没有和最新的数据保持同步
      </li>
      <li>
        <strong>updated</strong>：
        页面显示的数据和data中的数据已经保持同步了，都是最新的
      </li>
      <li>
        <strong>beforeDestory</strong>：
        Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ，
        指令， 过滤器 ……都是处于可用状态。还没有真正被销毁
      </li>
      <li>
        <strong>destroyed</strong>： 这个时候上所有的 data 和 methods ， 指令，
        过滤器 ……都是处于不可用状态。组件已经被销毁了。
      </li>
    </ol>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
