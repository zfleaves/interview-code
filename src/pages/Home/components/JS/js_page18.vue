<template>
  <h5
    id="17%E3%80%81%C2%A0const%E5%AE%9A%E4%B9%89%E7%9A%84%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E6%94%B9%E5%8F%98%EF%BC%9F"
  >
    18、 const定义的对象属性是否可以改变&#xff1f;
  </h5>
  <blockquote>
    <p>
      <strong>情况一&#xff1a;</strong
      >const定义的变量存在块级作用域&#xff0c;且不存在变量提升&#xff0c;一般用于定义常量&#xff0c;定义的时候必须初始化。
    </p>
    <p>
      <strong
        >答&#xff1a;<span style="color: #fe2c24">不可以&#xff0c;</span></strong
      ><span style="color: #fe2c24"
        >const定义的如果是基本数据类型&#xff08;string&#xff0c;number&#xff0c;boolean&#xff0c;null&#xff0c;undifined&#xff0c;symbol&#xff09;&#xff0c;定义后就<strong>不可再修改</strong>&#xff0c;如果修改&#xff0c;会报错。</span
      >
    </p>
    <p style="text-align: center">
      <span style="color: #fe2c24"
        ><img
          alt=""
          src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/8fa23533f6123808f0c6c7d9d0a644f3.jpeg"
      /></span>
    </p>
    <p>
      <strong>情况二&#xff1a;</strong
      >那么如果是const定义的对象呢&#xff1f;是否可以修改对象中的属性&#xff1f;<br /><strong
        >答案&#xff1a;<span style="color: #fe2c24">可以</span></strong
      >
    </p>
    <p>
      <span style="color: #fe2c24"
        ><strong
          >原因&#xff1a;对象是引用类型的&#xff0c;const定义的对象t中保存的是指向对象t的指针&#xff0c;这里的“不变”指的是指向对象的指针不变&#xff0c;而修改对象中的属性并不会让指向对象的指针发生变化&#xff0c;所以用const定义对象&#xff0c;对象的属性是可以改变的。</strong
        ></span
      >
    </p>
    <p style="text-align: center">
      <span style="color: #fe2c24"
        ><strong
          ><img
            alt=""
            src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/78b214a4f3e751fb6a1a6116bb257e23.jpeg" /></strong
      ></span>
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
