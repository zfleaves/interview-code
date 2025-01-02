<template>
  <h5
    id="%C2%A0%E2%80%8B%E7%BC%96%E8%BE%914%E3%80%81vue%20%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%C2%A0%E5%85%AB%E4%B8%AA%E9%98%B6%E6%AE%B5"
  >
    4、vue 的生命周期&nbsp;八个阶段
  </h5>
  <blockquote>
    <p>
      <strong><strong>1.beforeCreate</strong></strong>
    </p>
    <p>
      <span style="color: #1c7331">在实例创建之间执行，数据是未加载状态。</span>
    </p>
    <p>创建一个Vue实例，此时实例上只有一些生命周期函数和默认的事件</p>
    <p>此时data computed watch methods上的方法和数据均不能访问</p>
    <p>
      <strong><strong>2.created</strong></strong>
    </p>
    <p>
      <span style="color: #1c7331"
        >在实例创建、数据加载后，能初始化数据，DOM渲染之前执行。</span
      >
    </p>
    <p>
      可以对data数据进行操作，可进行一些请求，请求不易过多，避免白屏时间太长。
    </p>
    <p>
      <strong><strong>3.beforeMount</strong></strong>
    </p>
    <p>
      <span style="color: #1c7331"
        >虚拟DOM已创建完成，在数据渲染前最后一次更改数据。el未挂载。</span
      >
    </p>
    <p>判断el的挂载方式</p>
    <p>判断是否有template设置</p>
    <p>将template进行渲染保存到内存当中，还未挂载在页面上</p>
    <p>
      <strong><strong>4.mounted</strong></strong>
    </p>
    <p>
      <span style="color: #1c7331"
        >页面、数据渲染完成。el挂载完毕。可以访问DOM节点。</span
      >
    </p>
    <p>将内存中的模版挂载到页面上</p>
    <p>此时可以操作页面上的DOM节点</p>
    <p>此时组件从创建阶段进入运行阶段</p>
    <p>
      <strong><strong>5.beforeUpdate</strong></strong>
    </p>
    <p>
      <span style="color: #1c7331">重新渲染之前触发。不会造成重渲染。</span>
    </p>
    <p>
      页面显示的数据是旧的，此时data里面的数据是最新，页面数据和data数据暂未同步<strong
        >6.updated</strong
      >
    </p>
    <p>
      <span style="color: #1c7331"
        >数据已经更新完成，DOM也重新render完成，更改数据会陷入死循环。</span
      >
    </p>
    <p>根据data里的最新数据渲染出最新的DOM树，然后将最新的DOM挂载到页面</p>
    <p>此时data和页面数据一致，都是最新的</p>
    <p>
      <strong><strong>7.beforeDestroy</strong></strong>
    </p>
    <p>
      <span style="color: #1c7331">实例销毁前执行，实例仍然完全可用。</span>
    </p>
    <p>此时组件从运行阶段进入到销毁阶段</p>
    <p>组件上的data和methods以及过滤器等都出于可用状态，销毁还未执行</p>
    <p>
      <strong><strong>8.Destroyed</strong></strong
      ><strong>&nbsp;</strong>
    </p>
    <p>
      <span style="color: #1c7331">实例销毁后执行，这时候只剩下DOM空壳。</span>
    </p>
    <p>
      组件已经被完全销毁，组件中所有的数据、方法、指令、过滤器等，都已不可用
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
