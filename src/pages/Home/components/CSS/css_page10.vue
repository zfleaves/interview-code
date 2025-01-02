<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9110%E3%80%81CSS%E5%B9%B3%E9%9D%A2%E8%BD%AC%E6%8D%A2"
  >
    10、CSS3中“transform”属性~平面转换
  </h5>
  <blockquote>
    <p
      id="%EF%BC%881%EF%BC%89%E4%BD%8D%E7%A7%BB%EF%BC%9Atransform%3A%20translate(%E6%B0%B4%E5%B9%B3%E7%A7%BB%E5%8A%A8%E8%B7%9D%E7%A6%BB%2C%20%E5%9E%82%E7%9B%B4%E7%A7%BB%E5%8A%A8%E8%B7%9D%E7%A6%BB)"
      style="text-align: justify"
    >
      <span style="color: #000000"
        ><strong>（1）位移：</strong>transform: translate(水平移动距离,
        垂直移动距离)</span
      >
    </p>
    <p>
      <img
        alt=""
        height="270"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/e3a752cf79cb87e3a66ccb408364e852.png"
        width="701"
      />
    </p>
    <p>&nbsp;<strong>（2）旋转</strong></p>
    <p style="margin-left: 0.0001pt">
      <span style="color: #000000">transform: rotate(角度);</span>&nbsp;<span
        style="color: #000000"
        >注意：角度单位是</span
      ><span style="color: #c00000">deg </span>
    </p>
    <p style="margin-left: 0.0001pt">
      <span style="color: #000000">取值为</span
      ><span style="color: #c00000">正</span
      ><span style="color: #000000">, 则</span
      ><span style="color: #c00000">顺</span
      ><span style="color: #000000">时针旋转 </span
      ><span style="color: #000000">Ø </span
      ><span style="color: #000000">取值为</span
      ><span style="color: #c00000">负</span
      ><span style="color: #000000">, 则</span
      ><span style="color: #c00000">逆</span
      ><span style="color: #000000">时针旋转</span>
    </p>
    <p style="margin-left: 0.0001pt; text-align: left">
      <strong>（3）缩放</strong>
    </p>
    <ul>
      <li style="margin-left: 0.0001pt; text-align: left">
        transform: scale(x轴缩放倍数, y轴缩放倍数);
      </li>
      <li style="margin-left: 0.0001pt; text-align: left">
        transform: scale(缩放倍数);
      </li>
      <li style="margin-left: 0.0001pt; text-align: left">
        scale值大于1表示放大, scale值小于1表示缩小
      </li>
    </ul>
    <p>
      <strong>（4）</strong
      ><span style="color: #0d0016">transition的基本用法</span>
    </p>
    <p>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >transition：[属性名] [持续时间] [速度曲线] [延迟时间]</span
          ></strong
        ></span
      >
    </p>
    <p>
      <u
        ><span style="color: #0d0016"
          >我们可以很方便的用这个过渡来给某一个属性加上好看的动效。</span
        ></u
      >
    </p>
    <p>
      <u
        ><span style="color: #0d0016"
          >例如，高度属性的值改变时，延迟 0.5 秒后以 ease
          曲线进行过渡，持续2秒：</span
        ></u
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >transition:height 2s ease 0.5s</span
          ></strong
        ></span
      ><br /><span style="color: #0d0016"
        >或者一个属性不够，想要监听所有属性。</span
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >transition: all 2s ease .5s</span
          ></strong
        ></span
      >
    </p>
  </blockquote>
</template>
<script setup></script>
<style lang=""></style>
