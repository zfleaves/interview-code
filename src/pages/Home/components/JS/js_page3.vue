<template>
  <h5
    id="%F0%9F%8D%872.JS%E4%B8%ADnull%E5%92%8Cundefined%E7%9A%84%E5%88%A4%E6%96%AD%E6%96%B9%E6%B3%95%E5%92%8C%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    3、JS中null和undefined的判断方法和区别&#xff1f;
  </h5>
  <blockquote>
    <p>
      <strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >1.undefined 的判断</span
          ></span
        ><span style="color: #1c7331"
          ><span style="background-color: #fef2f0"> </span></span></strong
      ><br />
      (1) undefined表示缺少值&#xff0c;即此处应该有值&#xff0c;但是还没有定义<br />
      (2) 变量被声明了还没有赋值&#xff0c;就为undefined<br />
      (3) 调用函数时应该提供的参数还没有提供&#xff0c;该参数就等于undefined<br />
      (4) 对象没有赋值的属性&#xff0c;该属性的值就等于undefined<br />
      (5) 函数没有返回值&#xff0c;默认返回undefined<br /><strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0">2.null 的判断 </span></span
        ></strong
      ><br />
      (1) null表示一个值被定义了&#xff0c;但是这个值是空值<br />
      (2) 作为函数的参数&#xff0c;表示函数的参数不是对象<br />
      (3) 作为对象原型链的终点
      &#xff08;Object.getPrototypeOf(Object.prototype)&#xff09;<br />
      (4) 定义一个值为null是合理的&#xff0c;但定义为undefined不合理&#xff08;var
      name &#61; null&#xff09;<br /><strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >3.typeof 类型不同</span
          ></span
        ></strong
      >
    </p>
    <pre><code class="language-javascript">typeof null; // &#39;object&#39;
typeof undefined; // &#39;undefined&#39;</code></pre>
    <p>
      <strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >4.Number() 转数字也不同
          </span></span
        ></strong
      >
    </p>
    <pre><code class="language-javascript">Number(null); // 0
Number(undefined); // NaN </code></pre>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
