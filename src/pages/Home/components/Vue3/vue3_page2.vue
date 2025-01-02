<template>
  <h5
    id="2%E3%80%81Vue3%E5%B8%A6%E6%9D%A5%E4%BA%86%E4%BB%80%E4%B9%88%E6%94%B9%E5%8F%98%EF%BC%9F%C2%A0"
  >
    2、Vue3带来了什么改变？&nbsp;
  </h5>
  <blockquote>
    <p><strong>性能的提升</strong></p>
    <ul>
      <li>
        <p>打包大小减少41%</p>
      </li>
      <li>
        <p>初次渲染快55%, 更新渲染快133%</p>
      </li>
      <li>
        <p>内存减少54%</p>
      </li>
    </ul>
    <p><strong>源码的升级</strong></p>
    <ul>
      <li>
        <p>
          使用Proxy代替<a
            href="https://so.csdn.net/so/search?q=defineProperty&amp;spm=1001.2101.3001.7020"
            title="defineProperty"
            target="_blank"
            >defineProperty</a
          >实现响应式
        </p>
      </li>
      <li>
        <p>
          重写<a
            href="https://so.csdn.net/so/search?q=%E8%99%9A%E6%8B%9FDOM&amp;spm=1001.2101.3001.7020"
            title="虚拟DOM"
            target="_blank"
            >虚拟DOM</a
          >的实现和Tree-Shaking
        </p>
      </li>
    </ul>
    <p><strong>拥抱TypeScript</strong></p>
    <ul>
      <li>
        <p>Vue3可以更好的支持TypeScript</p>
      </li>
    </ul>
    <p><strong>新的特性</strong></p>
    <ul>
      <li>Composition API（组合API）</li>
    </ul>
    <p>（1）setup配置</p>
    <p>（2）ref与reactive</p>
    <p>（3）watch与watchEffect</p>
    <p>（4）provide与inject</p>
    <ul>
      <li>新的内置组件</li>
    </ul>
    <p>（1）Fragment</p>
    <p>（2）Teleport</p>
    <p>（3）Suspense</p>
    <ul>
      <li>其他改变</li>
    </ul>
    <p>（1）新的生命周期钩子</p>
    <p>（2）data 选项应始终被声明为一个函数</p>
    <p>（3）移除keyCode支持作为 v-on 的修饰符</p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
