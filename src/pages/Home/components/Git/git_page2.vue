<template>
  <h5
    id="2%E3%80%81%E7%AE%80%E8%BF%B0git%E4%B8%AD%E5%A6%82%E4%BD%95%E5%B0%86%E4%B8%80%E4%B8%AA%E6%96%B0%E5%A2%9E%E6%96%87%E4%BB%B6%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%EF%BC%9F"
  >
    2、简述Git中如何将一个新增文件添加到本地仓库？
  </h5>
  <pre
    data-index="57"
    class="set-code-show"
    name="code"
  ><code class="language-bash hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">git config --global user.name   <span class="hljs-string">'开发人员名称'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">git add 文件名称/*      //将当前文件或当前文件夹下未添加到栈存区的文件添加栈存区</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">git commit 文件名称/* -m <span class="hljs-string">'完善的注释'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">//将栈存区当前文件或当前文件夹下的全部文件添加到版本本地仓库</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">git <span class="hljs-built_in">log</span>     //查看文件版本号</div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
