<template>
  <h5 id="%C2%A06%E3%80%81ref%E5%87%BD%E6%95%B0">6、Vue3中的ref函数</h5>
  <ul>
    <li>
      <p>作用: 定义一个响应式的数据</p>
    </li>
    <li>
      <p>语法:&nbsp;<code>const xxx = ref(initValue)</code></p>
      <ul>
        <li>
          <p>
            创建一个包含响应式数据的<strong>引用对象（reference对象，简称ref对象）</strong>。
          </p>
        </li>
        <li>
          <p>JS中操作数据：&nbsp;<code>xxx.value</code></p>
        </li>
        <li>
          <p>
            模板中读取数据: 不需要.value，直接：<code
              >&lt;div&gt;{<!-- -->{xxx}}&lt;/div&gt;</code
            >
          </p>
        </li>
      </ul>
    </li>
    <li>
      备注：
      <ul>
        <li>
          <p>接收的数据可以是：基本类型、也可以是对象类型。</p>
        </li>
        <li>
          <p>
            基本类型的数据：响应式依然是靠<code>Object.defineProperty()</code>的<code>get</code>与<code>set</code>完成的。
          </p>
        </li>
        <li>
          <p>
            对象类型的数据：内部&nbsp;<em>“ 求助 ”</em
            >&nbsp;了Vue3.0中的一个新函数——&nbsp;<code>reactive</code>函数。
          </p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
