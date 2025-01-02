<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%913%E3%80%81%3A%3Abefore%20%E5%92%8C%3A%3Aafter%20%E4%B8%AD%E5%8F%8C%E5%86%92%E5%8F%B7%E5%92%8C%E5%8D%95%E5%86%92%E5%8F%B7%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E3%80%81%E4%BD%9C%E7%94%A8%EF%BC%9F%C2%A0"
  >
    <strong>3、</strong><strong>伪元素和伪类的区别和作用？</strong>
  </h5>
  <blockquote>
    <ul>
      <li>
        伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：
      </li>
    </ul>
    <pre
      data-index="4"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-attr">p</span>::before {<span class="hljs-attr">content</span>:<span class="hljs-string">"第一章："</span>;}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-attr">p</span>::after {<span class="hljs-attr">content</span>:<span class="hljs-string">"Hot!"</span>;}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-attr">p</span>::first-line {<span class="hljs-attr">background</span>:red;}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-attr">p</span>::first-letter {font-<span class="hljs-attr">size</span>:30px;}</div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <ul>
      <li>
        伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：
      </li>
    </ul>
    <pre
      data-index="5"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-attr">a</span>:hover {<span class="hljs-attr">color</span>: #<span class="hljs-title class_">FF00FF</span>}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-attr">p</span>:first-child {<span class="hljs-attr">color</span>: red}</div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>
      <strong>总结：</strong
      >&nbsp;伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
