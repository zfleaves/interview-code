<template>
  <h5
    id="%C2%A0%E2%80%8B%E7%BC%96%E8%BE%914.%E5%87%A0%E7%A7%8D%E5%AE%9A%E4%BD%8D%E5%B8%83%E5%B1%80%20position%E7%9A%84%E5%80%BC%EF%BC%8C%20relative%E5%92%8Cabsolute%E5%88%86%E5%88%AB%E6%98%AF%E7%9B%B8%E5%AF%B9%E4%BA%8E%E8%B0%81%E8%BF%9B%E8%A1%8C%E5%AE%9A%E4%BD%8D%E7%9A%84%EF%BC%9F"
  >
    4、定位布局 position中的relative、absolute、fixed、sticky它们之间的区别？
  </h5>
  <p>
    <img
      alt=""
      height="277"
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/e3c568b4fddb2844baee3e154238947d.png"
      width="723"
    />
  </p>
  <blockquote>
    <p>
      <strong
        >（1）relative:相对定位，相对于自己本身在正常文档流中的位置进行定位。</strong
      >
    </p>
    <p>
      <img
        alt=""
        height="127"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/99ab01d2706ca7bef599d2158ab954e8.png"
        width="677"
      /><br /><strong
        >（2）absolute:生成绝对定位，相对于最近一级定位不为static的父元素进行定位。</strong
      >
    </p>
    <p>
      <img
        alt=""
        height="138"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/c50fff92e4d793822080fbe8dba25cf8.png"
        width="672"
      />
    </p>
    <p>
      <strong
        >（3）fixed:
        生成绝对定位，相对于浏览器窗口或者frame进行定位。（老版本IE不支持）</strong
      >
    </p>
    <p>
      <img
        alt=""
        height="236"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/3eb84b90fcbb25e8a9d505659a3ef826.png"
        width="685"
      /><br /><strong
        >（4）static:默认值，没有定位，元素出现在正常的文档流中。（很少用）<br />
        （5）sticky:生成粘性定位的元素，容器的位置根据正常文档流计算得出。（很少用）</strong
      >
    </p>
  </blockquote>
</template>
<script setup></script>
<style lang=""></style>
