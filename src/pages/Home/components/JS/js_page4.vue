<template>
  <h5 id="%F0%9F%8D%873%E3%80%81%E5%8E%9F%E5%9E%8B%E9%93%BE">4、原型链</h5>
  <blockquote>
    <p>
      <strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0">前提须知&#xff1a;</span></span
        ></strong
      ><br />
      (1)
      <strong>prototype</strong
      >&#xff1a;<strong>所有的函数</strong>都有原型prototype属性&#xff0c;这个属性指向函数的原型对象。<br />
      (2)
      <strong>__proto__</strong
      >&#xff0c;这是每个对象(除null外)都会有的属性&#xff0c;叫做__proto__&#xff0c;这个属性会指向该对象的原型。<br />
      (3) <strong>constructor</strong>:
      每个原型都有一个constructor属性&#xff0c;指向该关联的构造函数。
    </p>
    <p></p>
    <p>
      <strong>原型链&#xff1a;</strong
      ><span style="color: #fe2c24"
        >获取对象时&#xff0c;如果这个对象上本身没有这个属性时&#xff0c;它就会去它的原型__proto__上去找&#xff0c;如果还找不到&#xff0c;就去原型的原型上去找...一直直到找到最顶层&#xff08;Object.prototype&#xff09;为止&#xff0c;Object.prototype对象也有__proto__属性&#xff0c;值为null</span
      ><br />
      此外&#xff0c;每一个prototype原型上都会有一个constructor属性&#xff0c;指向它关联的构造函数。
    </p>
    <p>
      <br /><img
        alt=""
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/10c98f521b4ac3300811c4d2b6f6e996.png"
      />
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
