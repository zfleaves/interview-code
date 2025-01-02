<template>
  <h4 id="%E4%BA%8C%E3%80%81CSS%E7%AF%87">
    <a name="t1"></a
    ><span style="color: #0d0016"><strong>二、</strong>CSS篇</span>
  </h4>
  <p style="text-align: center">
    <span style="color: #0d0016"
      ><img
        alt=""
        height="270"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/653f107d05836cd63ec7128038bc196a.png"
        width="769"
    /></span>
  </p>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%911.%E7%AE%80%E6%98%8E%E8%AF%B4%E4%B8%80%E4%B8%8B%20CSS%20link%20%E4%B8%8E%20%40import%20%E7%9A%84%E5%8C%BA%E5%88%AB%E5%92%8C%E7%94%A8%E6%B3%95%EF%BC%9F"
  >
    1、说一下 link 与 @import 的区别和用法？
  </h5>
  <blockquote>
    <p>
      页面导入外部css文件的方法通常有两种，一种在网页中直接link标签加入，另一种在页面中@import引入css文件。两种引入形式如下：<br />
      link引入形式：
    </p>
    <pre
      data-index="0"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs">&lt;link href=<span class="hljs-string">"styles.css"</span> type=<span class="hljs-string">"text/css"</span> /&gt;</code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>@import引用形式：</p>
    <pre
      data-index="1"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">&lt;style type=<span class="hljs-string">"text/css"</span>&gt;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    @<span class="hljs-keyword">import</span> <span class="hljs-title function_">url</span>(<span class="hljs-string">"styles.css"</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">&lt;/style&gt;</div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>
      <strong>1、适用范围不同</strong><br />
      @import可以在网页页面中使用，也可以在css文件中使用，用来将多个css文件引入到一个css文件中；而link只能将css文件引入到网页页面中。
    </p>
    <p>
      <strong>2、功能范围不同</strong><br />
      link属于XHTML标签，而@import是CSS提供的一种方式，link标签除了可以加载CSS外，还可以定义rel连接属性，定义RSS等，@import就只能加载CSS。<br /><strong
        >3、加载顺序不同</strong
      ><br />
      页面被加载的时候，link引用的CSS会同时被加载，而@import引用的CSS会等到页面全部被下载完再被加载。所以有时候浏览@import加载CSS的页面时开始会没有样式（就是闪烁）<br /><strong
        >4、兼容性</strong
      ><br />
      由于@import是css2.1提出的，所以老的浏览器不支持，@import只有在IE5以上的才能识别，而link标签无此问题。<br /><strong
        >5、控制样式时的差别</strong
      ><br />
      使用link方式可以让用户切换CSS样式.现代浏览器如Firefox,Opera,Safari都支持rel=”alternate
      stylesheet”属性(即可在浏览器上选择不同的风格),当然你还可以使用<span
        class="words-blog hl-git-1"
        data-tit="Javascript"
        data-pretit="javascript"
        >Javascript</span
      >使得IE也支持用户更换样式。<br /><strong
        >6、使用DOM控制样式时的差别</strong
      ><br />
      当使用JavaScript控制DOM去改变样式的时候，只能使用link标签，因为@import不是DOM可以控制的。
    </p>
  </blockquote>
</template>
<script setup></script>
<style lang=""></style>
