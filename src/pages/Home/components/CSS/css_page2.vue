<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%912.rgba%E5%92%8Copacity%E7%9A%84%E9%80%8F%E6%98%8E%E6%95%88%E6%9E%9C%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C%EF%BC%9F"
  >
    2、rgba和opacity的透明效果有什么不同？
  </h5>
  <blockquote>
    <ul>
      <li><strong>opacity</strong></li>
    </ul>
    <p>
      opacity是一个属性。opacity属性的值，可以被其子元素继承，给父级div设置opacity属性，那么所有子元素都会继承这个属性，并且，该元素及其继承该属性的所有子元素的所有内容透明度都会改变。
    </p>
    <ul>
      <li><strong>rgba（0，0，0，0.5）</strong></li>
    </ul>
    <p>
      rgba是一个属性值。rgba设置的元素，只对该元素的背景色有改变，并且，该元素的后代不会继承该属性。<br />
      补冲：rgba只是一个属性值，在background
      里用改变背景色，在color里是改字体颜色，shadow里是改阴影色，不止是能够改元素的背景色，要看具体是在哪个属性上用
    </p>
  </blockquote>
</template>
<script setup></script>
<style lang=""></style>
