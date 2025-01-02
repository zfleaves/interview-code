<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%911%E3%80%81%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%8E%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    2、<strong>箭头函数与普通函数的区别&#xff1f;</strong>
  </h5>
  <blockquote>
    <p>
      <strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >(1) 箭头函数比普通函数更加简洁</span
          ></span
        ></strong
      ><br />
      如果没有参数 , 就直接写一个空括号即可 , 如果只有一个参数 ,
      可以省去参数的括号 如果有多个参数 , 用逗号分割 ,
      如果函数体的返回值只有一句 , 可以省略大括号。<br /><strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >(2) 箭头函数没有自己的this</span
          ></span
        ></strong
      ><br />
      箭头函数不会创建自己的this, 所以它没有自己的this,
      它只会在自己作用域的上一层继承this。所以箭头函数中this的指向在它在定义时已经确定了,
      之后不会改变。<br /><strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >(3) 箭头函数继承来的this指向永远不会改变</span
          ><br /><span style="background-color: #fef2f0"
            >(4) call()、apply()、bind()等方法不能改变箭头函数中this的指向 </span
          ><br /><span style="background-color: #fef2f0"
            >(5) 箭头函数不能作为构造函数使用</span
          ></span
        ></strong
      ><br />
      由于箭头函数时没有自己的this&#xff0c;且this指向外层的执行环境&#xff0c;且不能改变指向&#xff0c;所以不能当做构造函数使用。
      <br /><strong
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >(6)
            箭头函数没有自己的arguments对象。在箭头函数中访问arguments实际上获得的是它外层函数的arguments值。
          </span></span
        ><br /><span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >(7) 箭头函数没有prototype </span
          ><br /><span style="background-color: #fef2f0"
            >(8) 补充&#xff1a;箭头函数的this指向哪⾥&#xff1f;</span
          ></span
        ></strong
      ><br />
      箭头函数不同于传统JavaScript中的函数&#xff0c;箭头函数并没有属于⾃⼰的this&#xff0c;它所谓的this是捕获其所在上下⽂的
      this 值&#xff0c;作为⾃⼰的 this
      值&#xff0c;并且由于没有属于⾃⼰的this&#xff0c;所以是不会被new调⽤的&#xff0c;这个所谓的this也不会被改变。
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
