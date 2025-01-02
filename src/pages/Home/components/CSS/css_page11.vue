<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9111%E3%80%81CSS%E4%B8%AD%E7%9A%84%E2%80%9C%E5%AD%90%E7%BB%9D%E7%88%B6%E7%9B%B8%E2%80%9D"
  >
    11、CSS3中 “子绝父相” 定位布局
  </h5>
  <blockquote>
    <p>
      弄清楚这个口诀，就明白了绝对定位和相对定位的使用场景。<br />
      这个“子绝父相”太重要了，是我们学习定位的口诀，是定位中最常用的一种方式这句话的意思是：<span
        style="color: #be191c"
        ><span style="background-color: #fef2f0"
          >子级是绝对定位的话，父级要用相对定位。</span
        ></span
      >
    </p>
    <ul>
      <li>
        ①
        子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。
      </li>
      <li>② 父盒子需要加定位限制子盒子在父盒子内显示。</li>
      <li>③ 父盒子布局时，需要占有位置，因此父亲只能是相对定位。</li>
    </ul>
    <p>
      这就是子绝父相的由来，所以<span style="color: #be191c"
        ><span style="background-color: #fef2f0"
          >相对定位经常用来作为绝对定位的父级。</span
        ></span
      >
    </p>
    <p>
      总结：
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0"
          >因为父级需要占有位置，因此是相对定位，
          子盒子不需要占有位置，则是绝对定位</span
        ></span
      ><br />
      当然，子绝父相不是永远不变的，如果父元素不需要占有位置，<span
        style="color: #be191c"
        ><span style="background-color: #fef2f0">子绝父绝</span></span
      >也会遇到。
    </p>
    <p style="text-align: center">
      <img
        alt=""
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/f9a445cc593e280616eb25e5ce7c76cb.png"
      />
    </p>
  </blockquote>
</template>
<script setup></script>
<style lang=""></style>
