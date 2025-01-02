<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9116%E3%80%81CSS3%E4%B8%AD%E7%BB%93%E6%9E%84%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8%E5%92%8C%E4%BC%AA%E5%85%83%E7%B4%A0%E9%80%89%E6%8B%A9%E5%99%A8"
  >
    16、结构伪类选择器&amp;伪元素选择器
  </h5>
  <blockquote>
    <p>
      1、结构<a
        href="https://so.csdn.net/so/search?q=%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8&amp;spm=1001.2101.3001.7020"
        title="伪类选择器"
        target="_blank"
        >伪类选择器</a
      >：可方便的选取一个或多个特定的元素
    </p>
    <ul>
      <li>:first-child 选取属于其父元素的首个子元素</li>
      <li>:last-child 选取属于其父元素的最后一个子元素</li>
      <li>:nth-child(n) 选择第n个子元素</li>
    </ul>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; n=even / 2n ：选取偶数孩子 &nbsp;
    </p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;n=odd / 2n+1 ：选取奇数孩子</p>
    <p></p>
    <p>
      2、<a
        href="https://so.csdn.net/so/search?q=%E4%BC%AA%E5%85%83%E7%B4%A0&amp;spm=1001.2101.3001.7020"
        title="伪元素"
        target="_blank"
        >伪元素</a
      >选择器：
    </p>
    <ul>
      <li>::first-letter / line: 文本第一个单词 / 第一行</li>
      <li>::selection: 改变选中文本的样式</li>
      <li>::before &amp; ::after</li>
    </ul>
    <p>这两兄弟特性一样：1.必须要带content属性（可以为空）</p>
    <p>2.属于行内盒子</p>
    <p></p>
    <p>
      3、属性<a
        href="https://so.csdn.net/so/search?q=%E9%80%89%E6%8B%A9%E5%99%A8&amp;spm=1001.2101.3001.7020"
        title="选择器"
        target="_blank"
        >选择器</a
      >：
    </p>
    <ul>
      <li>div[class=xx]: 选择类名为xx的div</li>
      <li>div[class^=xx]: 选择以类名为xx开头的div</li>
      <li>div[class$=xx]: 选择类名是以xx结束的div</li>
      <li>div[class*=xx]: 选择类名带有xx的div</li>
    </ul>
    <p>
      （1）结构<span style="color: #be191c"
        ><span style="background-color: #fbd4d0">伪类选择器</span></span
      >
    </p>
    <p>
      <img
        alt=""
        height="351"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/bb352542a98d59b2ad2d480c07d27f95.png"
        width="734"
      />
    </p>
    <p>
      &nbsp;（2）<span style="color: #be191c"
        ><span style="background-color: #fbd4d0">伪元素选择器</span></span
      >
    </p>
    <p>
      <img
        alt=""
        height="385"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/4f3e4490b049ed43e2886bc40f7ca89c.png"
        width="688"
      />
    </p>
  </blockquote>
</template>
<script setup></script>
<style lang=""></style>
