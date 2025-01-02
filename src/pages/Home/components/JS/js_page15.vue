<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9114%E3%80%81var%20let%E5%92%8Cconst%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    <span style="color: #000000">15、var、let和const的区别&#xff1f;</span>
  </h5>
  <blockquote>
    <table border="1" cellpadding="1" cellspacing="1" style="width: 500px">
      <tbody>
        <tr>
          <td style="width: 194px">区别</td>
          <td style="width: 104px">var</td>
          <td style="width: 100px">let</td>
          <td>const</td>
        </tr>
        <tr>
          <td style="width: 194px">块级作用域</td>
          <td style="width: 104px"><p>❌</p></td>
          <td style="width: 100px">✔️</td>
          <td>✔️</td>
        </tr>
        <tr>
          <td style="width: 194px">是否存在变量提升</td>
          <td style="width: 104px">✔️</td>
          <td style="width: 100px"><p>❌</p></td>
          <td><p>❌</p></td>
        </tr>
        <tr>
          <td style="width: 194px">是否添加全局属性</td>
          <td style="width: 104px">✔️</td>
          <td style="width: 100px">❌</td>
          <td>❌</td>
        </tr>
        <tr>
          <td style="width: 194px">重复声明同名变量</td>
          <td style="width: 104px">✔️</td>
          <td style="width: 100px">❌</td>
          <td>❌</td>
        </tr>
        <tr>
          <td style="width: 194px">是否存在暂时性死区</td>
          <td style="width: 104px">❌</td>
          <td style="width: 100px">✔️</td>
          <td>✔️</td>
        </tr>
        <tr>
          <td style="width: 194px">是否必须设置初始值</td>
          <td style="width: 104px">❌</td>
          <td style="width: 100px">❌</td>
          <td>✔️</td>
        </tr>
        <tr>
          <td style="width: 194px">能否改变指针方向</td>
          <td style="width: 104px">✔️</td>
          <td style="width: 100px">✔️</td>
          <td>❌</td>
        </tr>
      </tbody>
    </table>
    <strong
      >&#xff08;1&#xff09;块级<strong
        ><a
          href="https://so.csdn.net/so/search?q&#61;%E4%BD%9C%E7%94%A8%E5%9F%9F&amp;spm&#61;1001.2101.3001.7020"
          title="作用域"
          target="_blank"
          >作用域</a
        ></strong
      >&#xff1a;
    </strong>
    <span style="color: #4f4f4f"
      >块作用域由 {
      }包括&#xff0c;let和const具有块级作用域&#xff0c;var不存在块级作用域。块级作用域解决了</span
    >
    <a
      href="https://so.csdn.net/so/search?q&#61;ES5&amp;spm&#61;1001.2101.3001.7020"
      title="ES5"
      target="_blank"
      >ES5</a
    >
    <span style="color: #4f4f4f">中的两个问题&#xff1a;</span>
    <ul>
      <li>内层变量可能覆盖外层变量</li>
      <li>
        用来计数的循环变量泄露为<a
          href="https://so.csdn.net/so/search?q&#61;%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F&amp;spm&#61;1001.2101.3001.7020"
          title="全局变量"
          target="_blank"
          >全局变量</a
        >
      </li>
    </ul>
    <p>
      <strong>&#xff08;2&#xff09;变量提升</strong>&#xff1a; var存在<a
        href="https://so.csdn.net/so/search?q&#61;%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87&amp;spm&#61;1001.2101.3001.7020"
        title="变量提升"
        target="_blank"
        >变量提升</a
      >&#xff0c;let和const不存在变量提升&#xff0c;即在变量只能在声明之后使用&#xff0c;否在会报错。
    </p>
    <p>
      <strong>&#xff08;3&#xff09;给全局添加属性</strong>&#xff1a;
      浏览器的全局对象是window&#xff0c;<a
        href="https://so.csdn.net/so/search?q&#61;Node&amp;spm&#61;1001.2101.3001.7020"
        title="Node"
        target="_blank"
        >Node</a
      >的全局对象是global。var声明的变量为全局变量&#xff0c;并且会将该变量添加为全局对象的属性&#xff0c;但是let和const不会。
    </p>
    <p>
      <strong>&#xff08;4&#xff09;重复声明</strong>&#xff1a;
      var声明变量时&#xff0c;可以重复声明变量&#xff0c;后声明的同名变量会覆盖之前声明的遍历。const和let不允许重复声明变量。
    </p>
    <p>
      <strong>&#xff08;5&#xff09;暂时性死区</strong>&#xff1a;
      在使用let、const命令声明变量之前&#xff0c;该变量都是不可用的。这在语法上&#xff0c;称为<a
        href="https://so.csdn.net/so/search?q&#61;%E6%9A%82%E6%97%B6%E6%80%A7%E6%AD%BB%E5%8C%BA&amp;spm&#61;1001.2101.3001.7020"
        title="暂时性死区"
        target="_blank"
        >暂时性死区</a
      >。使用var声明的变量不存在暂时性死区。
    </p>
    <p>
      <strong>&#xff08;6&#xff09;初始值设置</strong>&#xff1a;
      在变量声明时&#xff0c;var 和 let
      可以不用设置初始值。而const声明变量必须设置初始值。
    </p>
    <p>
      &#xff08;7&#xff09;指针指向&#xff1a;
      let和const都是ES6新增的用于创建变量的语法。
      let创建的变量是可以更改指针指向&#xff08;可以重新赋值&#xff09;。但const声明的变量是不允许改变指针的指向。
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
