<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9115%E3%80%81%E8%AE%B2%E8%A7%A3js%E7%9A%84call%E3%80%81apply%E5%92%8Cbind%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    <span style="color: #000000">16、</span>讲解js的call、apply和bind区别<span
      style="color: #000000"
      >&#xff1f;</span
    >
  </h5>
  <blockquote>
    <p>
      首先&#xff0c;call apply
      bind三个方法都可以用来改变函数的this指向&#xff0c;具体区别如下&#xff1a;
    </p>
    <ol>
      <li>
        call( )
        是接收一个及其以上的参数&#xff0c;第一个参数表示this要指向的对象&#xff0c;其余参数表示调用函数需要传入的参数&#xff0c;返回调用函数的返回结果&#xff0c;属于立即执行函数&#xff1b;
      </li>
      <li>
        apply( )
        是接收两个参数&#xff0c;第一个参数表示this要指向的对象&#xff0c;第二参数表示调用函数需要传入的参数所组成的数组&#xff0c;返回调用函数的返回结果&#xff0c;属于立即执行函数&#xff1b;
      </li>
      <li>
        bind( )
        是接收一个及其以上的参数&#xff0c;和call(&#xff09;一致&#xff0c;但是其返回是一个函数&#xff0c;而不是调用函数的返回结果
      </li>
    </ol>
    <ul>
      <li>
        call、apply、bind相同点&#xff1a;都是改变this的指向&#xff0c;传入的第一个参数都是绑定this的指向&#xff0c;在非严格模式中&#xff0c;如果第一个参数是nul或者undefined&#xff0c;会把全局对象&#xff08;浏览器是window&#xff09;作为this的值&#xff0c;要注意的是&#xff0c;在严格模式中&#xff0c;null
        就是 null&#xff0c;undefined 就是 undefined
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><span style="background-color: #fef2f0"
              >call和apply唯一的区别是&#xff1a;call传入的是参数列表&#xff0c;apply传入的是数组&#xff0c;也可以是类数组</span
            ></strong
          ></span
        >
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><span style="background-color: #fef2f0"
              >bind和call、apply的区别&#xff1a;
              bind返回的是一个改变了this指向的函数&#xff0c;便于稍后调用&#xff0c;不像call和apply会立即调用&#xff1b;bind和call很像&#xff0c;传入的也是参数列表&#xff0c;但是可以多次传入&#xff0c;不需要像call&#xff0c;一次传入</span
            ></strong
          ></span
        >
      </li>
      <li>
        值得注意&#xff1a;当 bind 返回的函数 使用new作为构造函数时&#xff0c;绑定的
        this 值会失效&#xff0c;this指向实例对象&#xff0c;但传入的参数依然生效
        &#xff08;new调用的优先级 &gt; bind调用&#xff09;
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
