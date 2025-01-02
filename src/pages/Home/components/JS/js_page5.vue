<template>
  <h5 id="%C2%A0%F0%9F%8D%874%E3%80%81v-show%20%E4%B8%8E%20v-if%20%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F">5、v-show 与 v-if 的区别&#xff1f;</h5> 
<blockquote> 
 <ul><li> <p><strong><span style="color:#be191c;"><code><span style="background-color:#fbd4d0;">v-show</span></code></span></strong>指令是通过修改元素的<code>display</code>的<code>CSS</code>属性让其显示或者隐藏&#xff1b;</p> </li><li> <p><strong><span style="color:#be191c;"><code><span style="background-color:#fbd4d0;">v-if</span></code></span></strong>指令是直接 <strong>销毁 </strong>和 <strong>重建 </strong><code>DOM</code>达到让元素显示和隐藏的效果&#xff1b;</p> </li><li> <p>使用 <code>v-show</code>会更加节省性能上的开销&#xff1b;当只需要一次显示或隐藏时&#xff0c;使用<code>v-if</code>更加合理。</p> </li></ul> 
</blockquote> 
</template>

<script setup name=''>
</script>

<style lang='scss' scoped>
</style>