<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9111%E3%80%81%C2%A0typeof%E5%92%8Cinstanceof%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%C2%A0"
  >
    12、typeof和instanceof的区别是什么&#xff1f;
  </h5>
  <blockquote>
    <p style="margin-left: 0.0001pt; text-align: justify">
      <span style="color: #333333"
        >&#xff08;1&#xff09;typeof
        的返回值是一个字符串&#xff0c;用来说明变量的数据类型&#xff1b;</span
      >
    </p>
    <p style="margin-left: 0.0001pt; text-align: justify">
      <span style="color: #333333"
        >typeof用于数据类型的判断&#xff0c;返回值有number、string、boolean、function、undefined、object
        六个。但是&#xff0c;在其中你会发现&#xff0c;</span
      ><span style="color: #ff0000"
        >typeof判断null、array、object以及函数的实例&#xff08;new &#43;
        函数&#xff09;时&#xff0c;它返回的都是object。</span
      ><span style="color: #333333"
        >这就导致在判断这些数据类型的时候得不到真实的数据类型。所以&#xff0c;typeof
        存在的弊端——它虽然可以判断基本数据类型&#xff08;null
        除外&#xff09;&#xff0c;但是引用数据类型中&#xff0c;除了function
        类型以外&#xff0c;其他的也无法判断。</span
      >
    </p>
    <p style="text-align: justify">
      <span style="color: #333333"
        >&#xff08;2&#xff09;instanceof的返回值是布尔值&#xff0c;用于判断一个变量是否属于某个对象的实例。instanceof
        可以准确地判断复杂引用数据类型&#xff0c;但是不能正确判断基础数据类型。</span
      >
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
