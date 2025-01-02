<template>
  <h5
    id="21%E3%80%81%C2%A0%E6%B5%85%E6%8B%B7%E8%B4%9D%E5%92%8C%E6%B7%B1%E6%8B%B7%E8%B4%9D%E5%8C%BA%E5%88%AB%E6%A6%82%E5%BF%B5%E5%B8%B8%E8%A7%81%E6%83%85%E5%86%B5%EF%BC%9F"
  >
    21、浅拷贝和深拷贝区别概念常见情况&#xff1f;
  </h5>
  <blockquote>
    <ul>
      <li>
        <span style="color: #be191c"
          ><span style="background-color: #fbd4d0">浅拷贝</span></span
        >
      </li>
    </ul>
    <ol>
      <li>
        浅拷贝创建一个新的对象&#xff0c;但是只复制原始对象的基本数据类型的字段或引用&#xff08;地址&#xff09;&#xff0c;而不复制引用指向的对象。这意味着新对象和原始对象中的引用指向相同的对象。
      </li>
      <li>
        如果原始对象中的字段是基本数据类型&#xff0c;那么这些字段会被复制到新对象中&#xff0c;而如果字段是引用类型&#xff0c;则新对象和原始对-
        象的对应字段将引用同一个对象。
      </li>
      <li>
        因此&#xff0c;对新对象所做的修改可能会影响到原始对象&#xff0c;因为它们共享相同的引用。
      </li>
    </ol>
    <ul>
      <li>
        <span style="color: #be191c"
          ><span style="background-color: #fef2f0">深拷贝</span></span
        >
      </li>
    </ul>
    <ol>
      <li>
        深拷贝创建一个新的对象&#xff0c;并且递归地复制原始对象的所有字段和引用指向的对象&#xff0c;而不仅仅是复制引用本身。
      </li>
      <li>
        深拷贝会递归复制整个对象结构&#xff0c;包括对象内部的对象&#xff0c;确保新对象和原始对象之间的所有关系都是独立的。
      </li>
      <li>
        这意味着对新对象所做的修改不会影响到原始对象&#xff0c;因为它们拥有彼此独立的副本。
      </li>
    </ol>
    <p>
      <img
        alt=""
        height="198"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/a25de48320583316234c49ada0b3bc0e.png"
        width="649"
      />
    </p>
    <p></p>
    <p>
      1、基本类没有问题<br />
      因为&#xff0c;基本类型赋值时&#xff0c;赋的是数据&#xff08;所以&#xff0c;不存在深拷贝和浅拷贝的问题&#xff09;。
    </p>
    <p>
      <u> 例如1&#xff1a;</u><br /><span style="color: #1c7331">
        var x &#61; 100;<br />
        var y &#61; x; //此时x和y都是100;</span
      ><br />
      如果要改变y的值&#xff0c;x的值不会改变。
    </p>
    <p>
      2、引用类型有问题<br />
      因为&#xff0c;引用类型赋值时&#xff0c;赋的值地址&#xff08;就是引用类型变量在内存中保存的内容&#xff09;<br /><u>
        例如2&#xff1a;</u
      ><br /><span style="color: #1c7331"
        >var arr1 &#61; new Array(12,23,34)<br />
        var arr2 &#61; arr1; //这就是一个最简单的浅拷贝</span
      ><br />
      如果要改变arr2所引用的数据&#xff1a;arr2[0]&#61;100时&#xff0c;那么arr1[0]的值也是100。<br />
      原因就是
      arr1和arr2引用了同一块内存区域&#xff08;以上的第二点中有体现&#xff09;。<br />
      这是最简单的浅拷贝&#xff0c;因为&#xff0c;只是把arr1的地址拷贝的一份给了arr2&#xff0c;并没有把arr1的数据拷贝一份。所以&#xff0c;拷贝的深度不够。
    </p>
    <p>
      <span style="color: #fe2c24"
        ><strong>一、常见的 “浅” 拷贝方法&#xff1a;</strong></span
      >
    </p>
    <p>
      除了上面我们演示的对于赋值操作&#xff0c;下面将介绍一些开发中可能会用到&#xff0c;当然也可以会被面试官问到的实现深浅拷贝的方法。
    </p>
    <p>
      <strong>1. Object.assign()</strong><br />
      方法解释&#xff1a;方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象,它将返回目标对象可以实现一个浅拷贝的效果。<br />
      参数一&#xff1a;目标对象<br />
      参数二&#xff1a;源对象
    </p>
    <pre
      data-index="16"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> obj1 = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-attr">c</span>: [<span class="hljs-string">'c'</span>, <span class="hljs-string">'t'</span>, <span class="hljs-string">'r'</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> obj2 = <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">assign</span>({}, obj1);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">obj2.<span class="hljs-property">c</span>[<span class="hljs-number">1</span>] = <span class="hljs-number">5</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">obj2.<span class="hljs-property">b</span> = <span class="hljs-number">3</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj1); <span class="hljs-comment">// {a:1,b:2,c:["c", 5, "r"]}</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj2); <span class="hljs-comment">// {a:1,b:3,c:["c", 5, "r"]}</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj1.<span class="hljs-property">c</span>); <span class="hljs-comment">// ["c", 5, "r"]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj2.<span class="hljs-property">c</span>); <span class="hljs-comment">// ["c", 5, "r"]</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>
      <span style="color: #fe2c24"
        >注意&#xff1a;可见Object.assign()方法对于一维数据是深拷贝效果&#xff0c;但是对于多维数据是浅拷贝效果。Object.assign是一个浅拷贝,它只是在<strong>根属性</strong>(对象的第一层级)创建了一个新的对象&#xff0c;但是对于属性的值是仍是对象的话依然是浅拷贝&#xff0c;</span
      >
    </p>
    <p><strong>2. slice()</strong></p>
    <p>
      方法解释&#xff1a;数组进行截取&#xff0c;如果不传参数,会使用默认值,得到一个与原数组元素相同的新数组。<br />
      参数一&#xff1a;截取的起始位置<br />
      参数二&#xff1a;截取的结束位置<br />
    </p>
    <pre
      data-index="17"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>], <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> b = a.<span class="hljs-title function_">slice</span>();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">a[<span class="hljs-number">0</span>] = <span class="hljs-number">99</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">b[<span class="hljs-number">1</span>][<span class="hljs-number">0</span>] = <span class="hljs-number">2</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(a); <span class="hljs-comment">// [99,[2,2],3,4]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(b); <span class="hljs-comment">// [1,[2,2],3,4]</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:8,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box8"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>
      <span style="color: #fe2c24"
        >注意&#xff1a;可见slice()方法也只是对一维数据进行深拷贝&#xff0c;但是对于多维的数据还是浅拷贝效果。</span
      >
    </p>
    <p><strong>3. concat()方法</strong></p>
    <p>
      方法解释&#xff1a;数组的拼接(将多个数组或元素拼接形成一个新的数组)&#xff0c;不改变原数组&#xff0c;如果不传参数,会使用默认值&#xff0c;得到一个与原数组元素相同的新数组
      (复制数组)。<br />
    </p>
    <pre
      data-index="18"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>]]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> c = [];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> b = c.<span class="hljs-title function_">concat</span>(a);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">a[<span class="hljs-number">0</span>] = <span class="hljs-number">99</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">b[<span class="hljs-number">2</span>][<span class="hljs-number">1</span>] = <span class="hljs-number">88</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(a); <span class="hljs-comment">// [99,2,[3,88]]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(b); <span class="hljs-comment">// [1,2,[3,88]]</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:9,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box9"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>
      <span style="color: #fe2c24"
        >注意&#xff1a;可见concat()方法也只对一维数据具有深拷贝效果&#xff0c;对于多维的数据任然只是浅拷贝</span
      >
    </p>
    <p>4. ES6拓展运算符</p>
    <pre
      data-index="19"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>]]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> b = [...a];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">a[<span class="hljs-number">2</span>][<span class="hljs-number">1</span>] = <span class="hljs-number">88</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">b[<span class="hljs-number">1</span>] = <span class="hljs-number">99</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(a); <span class="hljs-comment">// [1,2,[3,88]]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(b); <span class="hljs-comment">// [1,99,[3,88]]</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:10,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box10"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>
      <span style="color: #fe2c24"
        >注意:
        可见ES6的展开运算符对于一维数据是深拷贝效果&#xff0c;但是对于多维数据任然是浅拷贝效果。</span
      >
    </p>
    <p>
      <span style="color: #fe2c24"
        ><strong>二、实现 “深” 拷贝常见方法&#xff1a;</strong></span
      >
    </p>
    <p>
      <a name="t15"></a><a id="1_JSONparseJSONstringifyobj_104"></a
      ><strong>1. JSON.parse(JSON.stringify(obj))</strong>
    </p>
    <p></p>
    <p>
      JSON.stringify()是目前前端开发过程中最常用的深拷贝方式&#xff0c;原理是把一个对象序列化成为一个JSON字符串&#xff0c;将对象的内容转换成字符串的形式再保存在磁盘上&#xff0c;再用JSON.parse()反序列化将JSON字符串变成一个新的对象
    </p>
    <ul>
      <li>JSON.stringfy() 将对象序列化成json对象</li>
      <li>JSON.parse() 反序列化——将json对象反序列化成js对象</li>
    </ul>
    <pre
      data-index="20"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">function</span> <span class="hljs-title function_">deepCopy</span>(<span class="hljs-params">obj1</span>){</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">let</span> _obj = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(obj1);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">let</span> obj2 = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(_obj);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">return</span> obj2;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>], <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> b = <span class="hljs-title function_">deepCopy</span>(a);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">b[<span class="hljs-number">1</span>][<span class="hljs-number">0</span>] = <span class="hljs-number">2</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(a); <span class="hljs-comment">// 1,1,2,3,4</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(b); <span class="hljs-comment">// 1,2,2,3,4</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>
      <span style="color: #fe2c24"
        >注意&#xff1a;它会抛弃对象的constructor&#xff0c;深拷贝之后&#xff0c;不管这个对象原来的构造函数是什么&#xff0c;在深拷贝之后都会变成Object类型&#xff0c;这种方法能正确处理的对象只有
        Number, String, Boolean, Array, 扁平对象&#xff0c;<br />
        也就是说&#xff0c;只有可以转成JSON格式的对象才可以这样用&#xff0c;像function没办法转成JSON。</span
      >
    </p>
    <p>
      2. 使用第三方库实现对象的深拷贝&#xff0c;比如&#xff1a;<strong
        >lodash、<a
          href="https://www.jquery123.com/jQuery.extend/"
          rel="nofollow"
          title="jQuery"
          target="_blank"
          >jQuery</a
        ></strong
      >
    </p>
    <pre
      data-index="21"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">import</span> lodash <span class="hljs-keyword">from</span> <span class="hljs-string">'lodash'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> objects = [<span class="hljs-number">1</span>,{ <span class="hljs-string">'a'</span>: <span class="hljs-number">1</span> }, { <span class="hljs-string">'b'</span>: <span class="hljs-number">2</span> }]; </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> deep = lodash.<span class="hljs-title function_">cloneDeep</span>(objects);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">deep[<span class="hljs-number">0</span>] = <span class="hljs-number">2</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">deep[<span class="hljs-number">1</span>].<span class="hljs-property">a</span> = <span class="hljs-number">2</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(objects); <span class="hljs-comment">// [1,{ 'a': 1 }, { 'b': 2 }]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(deep); <span class="hljs-comment">//[2,{ 'a': 2 }, { 'b': 2 }]</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:11,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box11"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p><strong>3. 递归</strong></p>
    <p>
      这里简单封装了一个deepClone的函数&#xff0c;for
      in遍历传入参数的值&#xff0c;如果值是引用类型则再次调用deepClone函数&#xff0c;并且传入第一次调用deepClone参数的值作为第二次调用deepClone的参数&#xff0c;如果不是引用类型就直接复制
    </p>
    <pre
      data-index="22"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> obj1 = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-attr">a</span>:{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-attr">b</span>:<span class="hljs-number">1</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">function</span> <span class="hljs-title function_">deepClone</span>(<span class="hljs-params">obj</span>) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> cloneObj = {}; <span class="hljs-comment">//在堆内存中新建一个对象</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> key <span class="hljs-keyword">in</span> obj){ <span class="hljs-comment">//遍历参数的键</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">       <span class="hljs-keyword">if</span>(<span class="hljs-keyword">typeof</span> obj[key] ===<span class="hljs-string">'object'</span>){ </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">          cloneObj[key] = <span class="hljs-title function_">deepClone</span>(obj[key]) <span class="hljs-comment">//值是对象就再次调用函数</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">       }<span class="hljs-keyword">else</span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">           cloneObj[key] = obj[key] <span class="hljs-comment">//基本类型直接复制值</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">       }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">return</span> cloneObj </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="17"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> obj2 = <span class="hljs-title function_">deepClone</span>(obj1);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="18"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">obj1.<span class="hljs-property">a</span>.<span class="hljs-property">b</span> = <span class="hljs-number">2</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="19"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(obj2); <span class="hljs-comment">//{a:{b:1}}</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:12,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box12"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>但是还有很多问题</p>
    <ul>
      <li>首先这个deepClone函数并不能复制不可枚举的属性以及Symbol类型</li>
      <li>
        这里只是针对Object引用类型的值做的循环迭代&#xff0c;而对于Array,Date,RegExp,Error,Function引用类型无法正确拷贝
      </li>
      <li>对象循环引用成环了的情况</li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
