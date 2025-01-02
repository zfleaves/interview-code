<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%918%E3%80%81vue%E4%B8%ADref%E7%9A%84%E4%BD%9C%E7%94%A8%EF%BC%9F%C2%A0%C2%A0"
  >
    <strong>9、vue中ref的作用？&nbsp;&nbsp;</strong>
  </h5>
  <blockquote>
    <p>1、<strong>获取DOM元素的引用</strong>。</p>
    <p>ref 加在普通的元素上，用this.ref.name 获取到的是dom元素</p>
    <p>
      vue给我们提供一个操作dom的属性，ref绑定在dom元素上时，用起来与id差不多，通过this.$refs来调用
    </p>
    <pre
      data-index="52"
      class="set-code-hide"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">&lt;template&gt;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span></span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"testDom"</span>&gt;</span>11111<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"getTest"</span>&gt;</span>获取test节点<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">&lt;/template&gt;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript"></span></span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">methods</span>: {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-title function_">getTest</span>(<span class="hljs-params"></span>) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">testDom</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div></div></li></ol></code><div class="hide-preCode-box"><span class="hide-preCode-bt" data-report-view="{&quot;spm&quot;:&quot;1001.2101.3001.7365&quot;}"><img class="look-more-preCode contentImg-no-view" src="https://images.weserv.nl/?url=https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png" alt="" title=""></span></div><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>
      <img
        alt=""
        height="306"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/d3fce7d4c8cb548a86933deb66984f95.png"
        width="610"
      />
    </p>
    <p>2、<strong>获取子组件的引用</strong>。</p>
    <ul>
      <li>
        在Vue组件中使用ref可以获取子组件的引用，从而可以在父组件内部调用子组件的方法或访问其数据。
      </li>
      <li>
        在父组件中将子组件引入，并在子组件标签上添加ref属性，然后就可以通过this.$refs.myChild获取子组件的引用，在父组件内部调用子组件的sayHello方法。
      </li>
    </ul>
    <pre
      data-index="53"
      class="set-code-hide"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">&lt;template&gt;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span></span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-tag">&lt;<span class="hljs-name">child</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"myChild"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">child</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">&lt;/template&gt;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript"></span></span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Child</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'./Child.vue'</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">components</span>: { <span class="hljs-title class_">Child</span> },</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-comment">// 使用this.$refs获取子组件的引用</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">myChild</span>.<span class="hljs-title function_">sayHello</span>();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="17"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li></ol></code><div class="hide-preCode-box"><span class="hide-preCode-bt" data-report-view="{&quot;spm&quot;:&quot;1001.2101.3001.7365&quot;}"><img class="look-more-preCode contentImg-no-view" src="https://images.weserv.nl/?url=https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png" alt="" title=""></span></div><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>3、利用 v-for 和 ref 获取一组数组或者dom 节点</p>
    <p>
      <img
        alt=""
        height="393"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/93251aa254ad153720bdd2a3b6fd0b2e.png"
        width="686"
      />
    </p>
    <p id="%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9">
      <span style="color: #fe2c24">注意事项：</span>
    </p>
    <ul>
      <li>
        <p>
          <code>ref</code>
          需要在<code>dom</code>渲染完成后应用，在使用时确保<code>dom</code>已经渲染完成。比如在生命周期
          <code>mounted(){}</code> 钩子中调用，或者在
          <code>this.$nextTick(()=&gt;{})</code> 中调用。
        </p>
      </li>
      <li>
        <p>
          如果<code>ref</code>
          是循环出来的，有多个重名，那么<code>ref</code>值会是一个数组
          ，此时要拿到单个<code>ref</code> 只需要循环就可以。
        </p>
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
