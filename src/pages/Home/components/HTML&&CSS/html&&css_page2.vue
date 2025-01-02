<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%912%E3%80%81%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8F%8C%E9%A3%9E%E7%BF%BC%EF%BC%88%E5%9C%A3%E6%9D%AF%EF%BC%89%E5%B8%83%E5%B1%80%EF%BC%9F%C2%A0"
  >
    <strong>2、</strong
    ><span style="color: #000008">如何实现双飞翼（圣杯）布局？</span>&nbsp;
  </h5>
  <p>
    <img
      alt=""
      height="324"
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/b125b1b9cb2967b28965bbc72357d37a.png"
      width="850"
    />
  </p>
  <blockquote>
    <p>
      &nbsp;<span style="color: #000008"
        >1、利用定位实现两侧固定中间自适应
      </span>
    </p>
    <p>
      <span style="color: #000008"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;父盒子设置左右 padding
        值
      </span>
    </p>
    <p>
      <span style="color: #000008"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;给左右盒子的 width
        设置父盒子的 padding 值,然后分别定位到 padding 处.
      </span>
    </p>
    <p>
      <span style="color: #000008"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中间盒子自适应</span
      >
    </p>
    <p>
      <span style="color: #000008"
        >2、利用 flex 布局实现两侧固定中间自适应
      </span>
    </p>
    <p>
      <span style="color: #000008"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;父盒子设置
        display：flex</span
      >
    </p>
    <p>
      <span style="color: #000008"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;左右盒子设置固定宽高
      </span>
    </p>
    <p>
      <span style="color: #000008"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中间盒子设置
        flex：1&nbsp;</span
      >
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
