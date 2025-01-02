<template>
  <h4 id="%E5%85%AD%E3%80%81React%E7%AF%87"><a name="t13"></a>七、React篇</h4>
  <h5
    id="1%E3%80%81%E8%AE%B2%E8%AE%B2%E4%BB%80%E4%B9%88%E6%98%AF%20JSX%20%EF%BC%9F"
  >
    1、讲讲什么是 JSX ？
  </h5>
  <p>
    当&nbsp;<strong>Facebook</strong>&nbsp;第一次发布 React
    时，他们还引入了一种新的 JS 方言&nbsp;<code>JSX</code>，将原始 HTML
    模板嵌入到 JS 代码中。JSX
    代码本身不能被浏览器读取，必须使用<code>Babel</code>和<code>webpack</code>等工具将其转换为传统的JS。很多开发人员就能无意识使用
    JSX，因为它已经与 React 结合在一直了。
  </p>
  <pre
    data-index="54"
    class="set-code-show"
    name="code"
  ><code class="language-XML hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">class MyComponent extends React.Component {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  render() {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    let props = this.props;  </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    return (</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"my-component"</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">{props.url}</span>&gt;</span>{props.name}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    );</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <blockquote>
    <ul>
      <li>JSX的特点</li>
      <li>
        可以将HTML语言直接写在JavaScript语言之中，不加任何引号，这就是JSX的语法，它允许HTML与JavaScript的混写。
      </li>
      <li>
        JSX允许直接在模板插入JavaScript变量。如果这个变量是一个数组，则会展开这个数组的所有成员。
      </li>
      <li>防注入攻击</li>
      <li>在JSX中嵌入用户输入是安全的；</li>
      <li>
        React
        DOM在渲染之前默认会过滤所有传入的值。它可以确保应用不会被注入攻击。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止XSS(跨站脚本攻击)
      </li>
      <li>Babel转译器会把JSX转换成一个名为React.createElement()的方法调用。</li>
      <li>
        如果在普通的html里面要写jsx语法，要将script的type改成text/jsx，这是因为React独有的JSX语法跟JavaScript不兼容。凡是使用JSX的地方，都要加上type=“text/jsx”。其次，React提供俩个库:react.js和JSXTransformer.js，它们必须首先加载。其中，JSXTransformer.js的作用是将JSX语法转为JavaScript语法。这一步很消耗时间，实际上线的时候，应该把它放到服务器完成。
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
