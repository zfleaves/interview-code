<template>
  <h4 id="%E5%85%AD%C2%A0%E3%80%81Vue3%E7%AF%87">
    <a name="t12"></a>六&nbsp;、Vue3篇
  </h4>
  <h5 id="1%E3%80%81Vue2.0%E5%92%8CVue3.0%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F">
    1、Vue2.0和Vue3.0的区别？
  </h5>
  <blockquote>
    <ul>
      <li><strong>前言</strong></li>
    </ul>
    <p>
      vue经历从2.0到3.0更新之后，简⽽⾔之就是变得更轻，更快，使⽤起来更加⽅便，每⼀次的版本迭代都是对上⼀个版本的升级优化，不管
      是对于我们开发者还是对于⽤户体验都是不断地在越来越⽅便，接下来我会着重于开发者来说⼀下两个不同版本的区别
    </p>
    <ul>
      <li><strong>详解</strong></li>
    </ul>
    <ol>
      <li>
        <a
          href="https://so.csdn.net/so/search?q=vue2&amp;spm=1001.2101.3001.7020"
          title="Vue2"
          target="_blank"
          >Vue2</a
        >和<strong>vue3</strong>的初始化就存在着⼀定区别，⽐如vue3.0可以在安装脚⼿架同时提前安装好⼀些项⽬开发必备的插件，并且3.0提供了可视化创建脚⼿架，可以更加⽅便的对插件和依赖进⾏管理和配置，同时两个版本的⽬录结构也是有些许差别的。<span
          style="color: #fe2c24"
          >（比如：Vue3相对于Vue2，打包工具Vite替代了webpack；TS替代了JS，pinia替代了vuex；Element-plus替代了Element等等）</span
        >
      </li>
      <li>
        在开发过程中两个版本的使⽤⽅法虽然在表⾯上没有太⼤的⼀个区别，但是在他的底层⽅⾯去看的话区别还是很⼤的，其中就包括渲染⽅式，数据监听，<a
          href="https://so.csdn.net/so/search?q=%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A&amp;spm=1001.2101.3001.7020"
          title="双向绑定"
          target="_blank"
          >双向绑定</a
        >，⽣命周期，vue3更精准变更通知，这⾥着重说⼀下关于<strong>双向绑定</strong>的更新，
      </li>
    </ol>
    <ul>
      <li>
        <strong>vue2</strong>&nbsp;的双向数据绑定是利⽤ES5的⼀个 API ，<strong
          >Object.definePropert()对数据进⾏劫持
          结合发布订阅模式的⽅式来实现的</strong
        >。
      </li>
      <li>
        <strong>vue3</strong>&nbsp;中使⽤了 ES6 的<strong>
          ProxyAPI 对数据代理</strong
        >，通过 reactive() 函数给每⼀个对象都包⼀层 Proxy，通过 Proxy
        监听属性的变化，从⽽实现对数据的监控。
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
