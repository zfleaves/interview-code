<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%916%E3%80%81vue%E5%B8%B8%E8%A7%81%E6%8C%87%E4%BB%A4"
  >
    7、vue常见指令
  </h5>
  <blockquote>
    <ul>
      <li>v-model 多用于表单元素实现双向数据绑定</li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><span style="background-color: #fef2f0"
              >v-bind：简写为冒号：“：”，动态绑定一些元素的属性，类型可以是：字符串、对象或数组。</span
            ></strong
          ></span
        >
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><span style="background-color: #fef2f0"
              >v-on:click 给标签绑定函数，可以缩写为：“@”，例如绑定一个点击函数
              函数必须写在methods里面</span
            ></strong
          ></span
        >
      </li>
      <li>
        v-for 格式： v-for="字段名 in(of) 数组json" 循环数组或json，记得加上key
      </li>
      <li>v-show 显示内容</li>
      <li>v-if 指令：取值为true/false，控制元素是否需要被渲染</li>
      <li>
        v-else
        指令：和v-if指令搭配使用，没有对应的值。当v-if的值false，v-else才会被渲染出来
      </li>
      <li>v-else-if 必须和v-if连用</li>
      <li>v-text 解析文本</li>
      <li>
        <strong>v-html 解析html标签 （一般常见的解决后台的富文本内容）</strong>
      </li>
      <li>
        <span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >v-bind:class 三种绑定方法
          </span></span
        >
      </li>
    </ul>
    <ol>
      <li>
        <span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >对象型 "{red：isred}"</span
          ></span
        >
      </li>
      <li>
        <span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >三元型 " isred？"red"："blue"</span
          ></span
        >
      </li>
      <li>
        <span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >数组型 " [{red："isred" }，{blue："isblue"}] "</span
          ></span
        >
      </li>
    </ol>
    <ul>
      <li>v-once 进入页面时 只渲染一次 不在进行渲染</li>
      <li>v-cloak 防止闪烁</li>
      <li>v-pre 把标签内部的元素原位输出</li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
