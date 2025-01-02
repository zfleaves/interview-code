<template>
  <h5
    id="23%E3%80%81JS%E4%B8%AD%E6%95%B0%E7%BB%84%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E8%AF%A6%E8%A7%A3%C2%A0"
  >
    23、JS中数组常用方法详解
  </h5>
  <table border="1" cellpadding="1" cellspacing="1" style="width: 700px">
    <tbody>
      <tr>
        <th style="width: 75px">顺序</th>
        <th style="width: 159px">方法名</th>
        <th>功能</th>
        <th>返回值</th>
        <th>是否改变原数组</th>
        <th>版本</th>
      </tr>
      <tr>
        <td style="width: 75px">1</td>
        <td style="width: 159px">push()</td>
        <td>(在结尾)向数组添加一或多个元素</td>
        <td>返回新数组长度</td>
        <td>Y</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">2</td>
        <td style="width: 159px">unshift()</td>
        <td>&#xff08;在开头)向数组添加一或多个元素</td>
        <td>返回新数组长度</td>
        <td>Y</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">3</td>
        <td style="width: 159px">pop()</td>
        <td>删除数组的最后一位</td>
        <td>返回被删除的数据</td>
        <td>Y</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">4</td>
        <td style="width: 159px">shift()</td>
        <td>移除数组的第一项</td>
        <td>返回被删除的数据</td>
        <td>Y</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">5</td>
        <td style="width: 159px">reverse()</td>
        <td>反转数组中的元素</td>
        <td>返回反转后数组</td>
        <td>Y</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">6</td>
        <td style="width: 159px">sort()</td>
        <td>以字母顺序(字符串Unicode码点)对数组进行排序</td>
        <td>返回新数组</td>
        <td>Y</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">7</td>
        <td style="width: 159px">splice()</td>
        <td>
          在指定位置删除指定个数元素再增加任意个数元素
          &#xff08;实现数组任意位置的增删改)
        </td>
        <td>返回删除的数据所组成的数组</td>
        <td>Y</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">8</td>
        <td style="width: 159px">concat()</td>
        <td>通过合并&#xff08;连接&#xff09;现有数组来创建一个新数组</td>
        <td>返回合并之后的数组</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">9</td>
        <td style="width: 159px">join()</td>
        <td>用特定的字符,将数组拼接形成字符串 (默认&#34;,&#34;)</td>
        <td>返回拼接后的新数组</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">10</td>
        <td style="width: 159px">slice()</td>
        <td>裁切指定位置的数组</td>
        <td>被裁切的元素形成的新数组</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">11</td>
        <td style="width: 159px">toString()</td>
        <td>将数组转换为字符串</td>
        <td>新数组</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">12</td>
        <td style="width: 159px">valueOf()</td>
        <td>查询数组原始值</td>
        <td>数组的原始值</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">13</td>
        <td style="width: 159px">indexOf()</td>
        <td>查询某个元素在数组中第一次出现的位置</td>
        <td>存在该元素,返回下标,不存在 返回 -1</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">14</td>
        <td style="width: 159px">lastIdexOf()</td>
        <td>反向查询数组某个元素在数组中第一次出现的位置</td>
        <td>存在该元素,返回下标,不存在 返回 -1</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">15</td>
        <td style="width: 159px">forEach()</td>
        <td>(迭代) 遍历数组,每次循环中执行传入的回调函数</td>
        <td>无/(undefined)</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">16</td>
        <td style="width: 159px">map()</td>
        <td>
          (迭代) 遍历数组,
          每次循环时执行传入的回调函数,根据回调函数的返回值,生成一个新的数组
        </td>
        <td>有/自定义</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">17</td>
        <td style="width: 159px">filter()</td>
        <td>
          (迭代) 遍历数组,
          每次循环时执行传入的回调函数,回调函数返回一个条件,把满足条件的元素筛选出来放到新数组中
        </td>
        <td>满足条件的元素组成的新数组</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">18</td>
        <td style="width: 159px">every()</td>
        <td>(迭代) 判断数组中所有的元素是否满足某个条件</td>
        <td>全都满足返回true 只要有一个不满足 返回false</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">19</td>
        <td style="width: 159px">some()</td>
        <td>(迭代) 判断数组中是否存在,满足某个条件的元素</td>
        <td>只要有一个元素满足条件就返回true,都不满足返回false</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">20</td>
        <td style="width: 159px">reduce()</td>
        <td>
          (归并)遍历数组,
          每次循环时执行传入的回调函数,回调函数会返回一个值,将该值作为初始值prev,传入到下一次函数中
        </td>
        <td>最终操作的结果</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">21</td>
        <td style="width: 159px">reduceRight()</td>
        <td>(归并)用法同reduce,只不过是从右向左</td>
        <td>同reduce</td>
        <td>N</td>
        <td>ES5-</td>
      </tr>
      <tr>
        <td style="width: 75px">22</td>
        <td style="width: 159px">includes()</td>
        <td>判断一个数组是否包含一个指定的值.</td>
        <td>是返回 true&#xff0c;否则false</td>
        <td>N</td>
        <td>ES6</td>
      </tr>
      <tr>
        <td style="width: 75px">23</td>
        <td style="width: 159px">Array.from()</td>
        <td>接收伪数组,返回对应的真数组</td>
        <td>对应的真数组</td>
        <td>N</td>
        <td>ES6</td>
      </tr>
      <tr>
        <td style="width: 75px">24</td>
        <td style="width: 159px">find()</td>
        <td>
          遍历数组,执行回调函数,回调函数执行一个条件,返回满足条件的第一个元素,不存在返回undefined
        </td>
        <td>满足条件第一个元素/否则返回undefined</td>
        <td>N</td>
        <td>ES6</td>
      </tr>
      <tr>
        <td style="width: 75px">25</td>
        <td style="width: 159px">findIndex()</td>
        <td>
          遍历数组,执行回调函数,回调函数接受一个条件,返回满足条件的第一个元素下标,不存在返回-1
        </td>
        <td>满足条件第一个元素下标,不存在&#61;&gt;-1</td>
        <td>N</td>
        <td>ES6</td>
      </tr>
      <tr>
        <td style="width: 75px">26</td>
        <td style="width: 159px">fill()</td>
        <td>用给定值填充一个数组</td>
        <td>新数组</td>
        <td>Y</td>
        <td>ES6</td>
      </tr>
      <tr>
        <td style="width: 75px">27</td>
        <td style="width: 159px">flat()</td>
        <td>用于将嵌套的数组“拉平”&#xff0c;变成一维的数组。</td>
        <td>返回一个新数组</td>
        <td>N</td>
        <td>ES6</td>
      </tr>
      <tr>
        <td style="width: 75px">28</td>
        <td style="width: 159px">flatMap()</td>
        <td>
          flat()和map()的组合版 , 先通过map()返回一个新数组,再将数组拉平(
          只能拉平一次 )
        </td>
        <td>返回新数组</td>
        <td>N</td>
        <td>ES6</td>
      </tr>
      <tr>
        <td style="width: 75px"></td>
        <td style="width: 159px"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <p></p>
  <p>
    1.push&#xff08;&#xff09;在数组<strong>最后一位</strong
    ><em>添加</em
    >一个或多个元素,并返回新数组的长度,改变原数组.(添加多个元素用逗号隔开)
  </p>
  <p>
    <strong>语法: </strong><strong>数组名.push(</strong><strong>数据)</strong>
  </p>
  <p><strong>作用: </strong>就是往数组末尾添加数据</p>
  <p><strong>返回值:</strong> 就是这个数组的长度</p>
  <pre
    data-index="29"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//push</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">40</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">res = arr.<span class="hljs-title function_">push</span>(<span class="hljs-number">20</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);<span class="hljs-comment">//[10,20,30,40,20]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res);<span class="hljs-comment">//5</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:19,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box19"><i></i>运行<div><button>运行</button></div></div></div></pre>
  <p>2. pop&#xff08;&#xff09; 末尾出删除数据</p>
  <p><strong>语法:</strong><strong>数组名.pop()</strong></p>
  <p><strong>作用: </strong>就是从数组的末尾删除一个数据</p>
  <p><strong>返回值: </strong>就是你删除的那个数据</p>
  <pre
    data-index="30"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//pop</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">40</span>] </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">res =arr.<span class="hljs-title function_">pop</span>()</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);<span class="hljs-comment">//[10,20,30]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res);<span class="hljs-comment">//40</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:20,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box20"><i></i>运行<div><button>运行</button></div></div></div></pre>
  <p>3.unshift&#xff08;&#xff09; 头部添加数据</p>
  <p>
    <strong>语法: </strong><strong>数组名.unshift(</strong
    ><strong>数据)</strong>
  </p>
  <p><strong>作用:</strong> 就是在数组的头部添加数据</p>
  <p><strong>返回值: </strong>就是数组的长度</p>
  <pre
    data-index="31"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-comment">//pop</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-keyword">var</span> arr = [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">40</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> res=arr.<span class="hljs-title function_">unshift</span>(<span class="hljs-number">99</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);<span class="hljs-comment">//[99,10,20,30,40]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res);<span class="hljs-comment">//5</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:21,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box21"><i></i>运行<div><button>运行</button></div></div></div></pre>
  <p>4.shift&#xff08;&#xff09; 头部删除数据</p>
  <p><strong>语法: </strong><strong>数组名.shift()</strong></p>
  <p><strong>作用:</strong> 头部删除一个数据</p>
  <p><strong>返回值:</strong> 就是删除掉的那个数据</p>
  <pre
    data-index="32"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//shift</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-keyword">var</span> arr = [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">40</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> res=arr.<span class="hljs-title function_">shift</span>()</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);[<span class="hljs-number">20</span>,<span class="hljs-number">30</span>,<span class="hljs-number">40</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res);<span class="hljs-number">10</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p>5.reverse&#xff08;&#xff09; 翻转数组</p>
  <p><strong>语法: </strong><strong>数组名.reverse()</strong></p>
  <p><strong>作用: </strong>就是用来翻转数组的</p>
  <p><strong>返回值: </strong>就是翻转好的数组</p>
  <pre
    data-index="33"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//reverse</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">40</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">res=arr.<span class="hljs-title function_">reverse</span>()</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);<span class="hljs-comment">//[40,30,20,10]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res);<span class="hljs-comment">//[40,30,20,10]</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:22,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box22"><i></i>运行<div><button>运行</button></div></div></div></pre>
  <p>6.sort&#xff08;&#xff09; 排序</p>
  <p>
    <strong>语法一: </strong><strong>数组名.sort() </strong> 会排序 会按照位排序
  </p>
  <p>
    <strong>语法二: </strong
    ><strong>数组名.sort(function (a,b) {return a-b})</strong> 会正序排列
  </p>
  <p>
    <strong>语法三: </strong
    ><strong>数组名.sort(function (a,b) {return b-a})</strong> 会倒序排列
  </p>
  <pre
    data-index="34"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//sort()</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">2</span>, <span class="hljs-number">63</span>, <span class="hljs-number">48</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">75</span>, <span class="hljs-number">69</span>, <span class="hljs-number">11</span>, <span class="hljs-number">23</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">arr.<span class="hljs-title function_">sort</span>()</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">arr.<span class="hljs-title function_">sort</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">a,b</span>){<span class="hljs-keyword">return</span>(a-b)})</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">arr.<span class="hljs-title function_">sort</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">a,b</span>){<span class="hljs-keyword">return</span>(b-a)})</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);</div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p>
    打印结果&#xff1a;<img
      alt=""
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/e4ec9468a7c63cf412c9abe4d3aabad3.png"
    />
  </p>
  <p>7.splice&#xff08;&#xff09; 截取数组</p>
  <p>
    <strong>语法一: </strong><strong>数组名.splice(</strong
    ><strong>开始索引,</strong><strong>多少个)</strong>
  </p>
  <p><strong>作用: </strong>就是用来截取数组的</p>
  <p><strong>返回值: </strong>是一个新数组 里面就是你截取出来的数据</p>
  <p>
    <strong>语法二: </strong><strong>数组名.splice(</strong
    ><strong>开始索引,</strong><strong>多少个,</strong
    ><strong>你要插入的数据)</strong>
  </p>
  <p><strong>作用:</strong> 删除并插入数据</p>
  <p><strong>注意:</strong> 从你的开始索引起</p>
  <p><strong>返回值: </strong>是一个新数组 里面就是你截取出来的数据</p>
  <pre
    data-index="35"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//splice() 语法一</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">2</span>, <span class="hljs-number">63</span>, <span class="hljs-number">48</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">75</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">res = arr.<span class="hljs-title function_">splice</span>(<span class="hljs-number">1</span>,<span class="hljs-number">2</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr);  <span class="hljs-comment">// [2, 5, 4, 75]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res);  <span class="hljs-comment">// [63, 48]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//******************************</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">//splice() 语法二</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">2</span>, <span class="hljs-number">63</span>, <span class="hljs-number">48</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">75</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">res = arr.<span class="hljs-title function_">splice</span>(<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">99999</span>,<span class="hljs-number">88888</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr); <span class="hljs-comment">//[2, 99999, 88888, 48, 5, 4, 75]</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res); <span class="hljs-comment">// [63]</span></div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:23,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box23"><i></i>运行<div><button>运行</button></div></div></div></pre>
  <p><strong>二、不改变原数组的方法</strong></p>
  <p>1.concat&#xff08;&#xff09; 合并数组</p>
  <p>
    功能&#xff1a;
    数组的拼接(将多个数组或元素拼接形成一个新的数组),不改变原数组<br />
    如果拼接的是数组 则将数组展开,之后将数组中的每一个元素放到新数组中.<br />
    如果是其他类型, 直接放到新数组中<br />
    另外&#xff0c;如果不给该方法任何参数&#xff0c;将返回一个和原数组一样的数组&#xff08;复制数组&#xff09;
  </p>
  <pre
    data-index="36"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> arr2 = [<span class="hljs-string">"a"</span>, <span class="hljs-string">"b"</span>, <span class="hljs-string">"c"</span>];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> arr3 = [<span class="hljs-string">"A"</span>, <span class="hljs-string">"B"</span>, <span class="hljs-string">"C"</span>];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> rel = arr1.<span class="hljs-title function_">concat</span>(arr2, arr3);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arr1); <span class="hljs-comment">//原数组</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(rel); <span class="hljs-comment">//新数组</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p>
    打印结果&#xff1a;<img
      alt=""
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/eb89207b4227c3c92c8d0215e1c86dcb.png"
    />
  </p>
  <p>
    2.join&#xff08;&#xff09; 数组转字符串 语法:数组名.join(&#39;连接符&#39;) 作用:
    就是把一个数组转成字符串
  </p>
  <p>功能&#xff1a;用特定的字符,将数组拼接形成字符串 (默认&#34;,&#34;)</p>
  <pre
    data-index="37"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">   <span class="hljs-keyword">var</span> list = [<span class="hljs-string">"a"</span>, <span class="hljs-string">"b"</span>, <span class="hljs-string">"c"</span>, <span class="hljs-string">"d"</span>]; <span class="hljs-comment">// "a-b-c-d"</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> result = list.<span class="hljs-title function_">join</span>(<span class="hljs-string">"-"</span>);     <span class="hljs-comment">//"a-b-c-d"</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> result = list.<span class="hljs-title function_">join</span>(<span class="hljs-string">"/"</span>);     <span class="hljs-comment">//"a/b/c/d"</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> result = list.<span class="hljs-title function_">join</span>(<span class="hljs-string">""</span>);      <span class="hljs-comment">//"abcd"</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> result = list.<span class="hljs-title function_">join</span>();        <span class="hljs-comment">//  a,b,c,d</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result);</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:24,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box24"><i></i>运行<div><button>运行</button></div></div></div></pre>
  <p>
    <span style="color: #be191c"
      ><span style="background-color: #fef2f0"
        >find()返回匹配的元素&#xff0c;findIndex()返回匹配元素的索引&#xff0c;find()如果没有匹配到元素则返回undefined,
        而findIndex()返回-1</span
      ></span
    >
  </p>
  <p><strong>1、数组方法find()</strong></p>
  <ul>
    <li>返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。</li>
    <li>
      find方法对数组中的每一项元素执行一次 callback 函数&#xff0c;直至有一个
      callback 返回
      true。当找到了这样一个元素后&#xff0c;该方法会立即返回这个元素的值&#xff0c;否则返回
      undefined。
    </li>
    <li>
      注意 callback 函数会为数组中的每个索引调用即从 0 到 length -
      1&#xff0c;而不仅仅是那些被赋值的索引&#xff0c;这意味着对于稀疏数组来说&#xff0c;该方法的效率要低于那些只遍历有值的索引的方法。
    </li>
    <li>
      callback函数带有3个参数&#xff1a;<strong>当前元素的值、当前元素的索引&#xff0c;以及数组本身</strong>。
    </li>
    <li>
      如果提供了 thisArg参数&#xff0c;那么它将作为每次 callback函数执行时的this
      &#xff0c;如果未提供&#xff0c;则使用 undefined。
    </li>
    <li>find方法不会改变数组。</li>
  </ul>
  <p>实战举例&#xff1a;</p>
  <pre
    data-index="37"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">   <span class="hljs-keyword">var</span> list = [<span class="hljs-string">"a"</span>, <span class="hljs-string">"b"</span>, <span class="hljs-string">"c"</span>, <span class="hljs-string">"d"</span>]; <span class="hljs-comment">// "a-b-c-d"</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> result = list.<span class="hljs-title function_">join</span>(<span class="hljs-string">"-"</span>);     <span class="hljs-comment">//"a-b-c-d"</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> result = list.<span class="hljs-title function_">join</span>(<span class="hljs-string">"/"</span>);     <span class="hljs-comment">//"a/b/c/d"</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> result = list.<span class="hljs-title function_">join</span>(<span class="hljs-string">""</span>);      <span class="hljs-comment">//"abcd"</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">var</span> result = list.<span class="hljs-title function_">join</span>();        <span class="hljs-comment">//  a,b,c,d</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result);</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:24,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box24"><i></i>运行<div><button>运行</button></div></div></div></pre>
  <p>打印结果&#xff1a;</p>
  <pre
    data-index="39"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">当前值:{<span class="hljs-string">"name"</span>:<span class="hljs-string">"张三"</span>,<span class="hljs-string">"age"</span>:<span class="hljs-number">18</span>} 当前值的索引：<span class="hljs-number">0</span> 当前数组：[object <span class="hljs-title class_">Object</span>],[object <span class="hljs-title class_">Object</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">{<span class="hljs-attr">name</span>: <span class="hljs-string">'张三'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span>}</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:26,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box26"><i></i>运行<div><button>运行</button></div></div></div></pre>
  <p>
    <strong>2、数组方法<code>findIndex()</code></strong>
  </p>
  <ul>
    <li>
      <code>返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。 </code>
    </li>
    <li>
      <code
        >findIndex方法对数组中的每个数组索引0..length-1&#xff08;包括&#xff09;执行一次callback函数&#xff0c;直到找到一个callback函数返回真实值&#xff08;强制为true&#xff09;的值。
      </code>
    </li>
    <li>
      <code>如果找到这样的元素&#xff0c;findIndex会立即返回该元素的索引。 </code>
    </li>
    <li>
      <code
        >如果回调从不返回真值&#xff0c;或者数组的length为0&#xff0c;则findIndex返回-1。
      </code>
    </li>
    <li>
      <code
        >与某些其他数组方法&#xff08;如Array#some&#xff09;不同&#xff0c;在稀疏数组中&#xff0c;即使对于数组中不存在的条目的索引也会调用回调函数。
      </code>
    </li>
    <li>
      <code
        >回调函数调用时有三个参数&#xff1a;元素的值&#xff0c;元素的索引&#xff0c;以及被遍历的数组。
      </code>
    </li>
    <li>
      <code
        >如果一个 thisArg 参数被提供给 findIndex,
        它将会被当作this使用在每次回调函数被调用的时候。如果没有被提供&#xff0c;将会使用
        undefined。findIndex不会修改所调用的数组。</code
      >
    </li>
  </ul>
  <p>实战举例&#xff1a;</p>
  <pre
    data-index="40"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:861px"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arr = [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">            {<span class="hljs-attr">name</span>: <span class="hljs-string">'张三'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span>},</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">            {<span class="hljs-attr">name</span>: <span class="hljs-string">'王二'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">20</span>},</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arrTest = arr.<span class="hljs-title function_">findIndex</span>(<span class="hljs-function">(<span class="hljs-params">item, index, array</span>) =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'当前值:'</span> + <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(item), <span class="hljs-string">'当前值的索引：'</span> + index, <span class="hljs-string">'当前数组：'</span> + array)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">            <span class="hljs-keyword">return</span> item.<span class="hljs-property">name</span> === <span class="hljs-string">'张三'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">})</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arrTest)</div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p>打印结果&#xff1a;</p>
  <pre
    data-index="41"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">当前值:{<span class="hljs-string">"name"</span>:<span class="hljs-string">"张三"</span>,<span class="hljs-string">"age"</span>:<span class="hljs-number">18</span>} 当前值的索引：<span class="hljs-number">0</span> 当前数组：[object <span class="hljs-title class_">Object</span>],[object <span class="hljs-title class_">Object</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-number">0</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p>3、JSON.stringify( ) 和 JSON.parse( )</p>
  <p>
    <strong>JSON.stringify()</strong>&#xff1a;将对象、<a
      href="https://so.csdn.net/so/search?q&#61;%E6%95%B0%E7%BB%84%E8%BD%AC%E6%8D%A2%E6%88%90%E5%AD%97%E7%AC%A6%E4%B8%B2&amp;spm&#61;1001.2101.3001.7020"
      title="数组转换成字符串" target="_blank"
      >数组转换成字符串</a
    ><br /><strong>JSON.parse()</strong>&#xff1a;将字符串转成<a
      href="https://so.csdn.net/so/search?q&#61;json%E5%AF%B9%E8%B1%A1&amp;spm&#61;1001.2101.3001.7020"
      title="json对象" target="_blank"
      >json对象</a
    >
  </p>
  <p>
    JSON.parse(JSON.stringify(obj))我们一般用来深拷贝&#xff0c;其过程说白了
    就是利用JSON.stringify
    将js对象序列化&#xff08;JSON字符串&#xff09;&#xff0c;再使用JSON.parse来反序列化(还原)js对象&#xff1b;序列化的作用是存储(对象本身存储的只是一个地址映射&#xff0c;如果断电&#xff0c;对象将不复存在&#xff0c;因此需将对象的内容转换成字符串的形式再保存在磁盘上
    )
  </p>
  <p>
    <strong>应用场景</strong><br />
    a、浏览器创建、获取&#xff08;sessionStorage、localStorage&#xff09;数组内容<br />
    b、路由&#xff08;浏览器地址&#xff09;传参、获取数组内容<br />
    创建、传参的时候使用<strong>JSON.stringify()深拷贝</strong><br />
    (如果不使用JSON.stringify()存进去的将是[object
    object]&#xff0c;所以如果我们开发中遇到了获取内容的时候是[object
    object]不妨试试JSON.stringify())
  </p>
  <p>4、instanceof( )</p>
  <p>
    <code>instanceof</code
    ><a
      href="https://so.csdn.net/so/search?q&#61;%E8%BF%90%E7%AE%97%E7%AC%A6&amp;spm&#61;1001.2101.3001.7020"
      title="运算符" target="_blank"
      >运算符</a
    >返回一个布尔值&#xff0c;如下&#xff1a;
  </p>
  <pre
    data-index="42"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> array = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> obj = {};</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>( array <span class="hljs-keyword">instanceof</span> <span class="hljs-title class_">Array</span> ) <span class="hljs-comment">// true</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>( obj  <span class="hljs-keyword">instanceof</span> <span class="hljs-title class_">Object</span>)  <span class="hljs-comment">// true</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p>5、<strong>every()方法的定义与用法&#xff1a;</strong></p>
  <ul>
    <li>
      every()方法用于检测数组中的所有元素是否都满足指定条件&#xff08;该条件为一个函数&#xff09;。
    </li>
    <li>
      every()方法会遍历数组的每一项&#xff0c;如果有有一项不满足条件&#xff0c;则表达式返回false,剩余的项将不会再执行检测&#xff1b;如果遍历完数组后&#xff0c;每一项都符合条&#xff0c;则返回true。
    </li>
  </ul>
  <p><strong>标准用法&#xff1a;</strong></p>
  <pre
    data-index="43"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs">array.<span class="hljs-title function_">every</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">currentValue,index,arr</span>), thisValue)
  </code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p><strong>参数说明&#xff1a;</strong></p>
  <ul>
    <li>
      第一个参数为一个回调函数&#xff0c;必传&#xff0c;数组中的每一项都会遍历执行该函数。
    </li>
  </ul>
  <p>
    currentValue&#xff1a;必传&#xff0c;当前项的值<br />
    index&#xff1a;选传&#xff0c;当前项的索引值<br />
    arr&#xff1a;选传&#xff0c;当前项所属的数组对象
  </p>
  <ul>
    <li>
      第二个参数thisValue为可选参数&#xff0c;回调函数中的this会指向该参数对象。
    </li>
  </ul>
  <p><strong>Tips:</strong></p>
  <ul>
    <li>every() 不会对空数组进行检测</li>
    <li>every() 不会改变原始数组</li>
  </ul>
  <p><strong>代码实例&#xff1a;</strong></p>
  <pre
    data-index="44"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">1000</span>, <span class="hljs-number">2000</span>, <span class="hljs-number">3000</span>]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> flag = arr.<span class="hljs-title function_">every</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">a, b, c</span>) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(a + <span class="hljs-string">"==="</span> + b + <span class="hljs-string">"===="</span> + c) <span class="hljs-comment">//1000===0====1000,2000,3000</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">return</span> a &gt; <span class="hljs-number">2000</span>;<span class="hljs-comment">//数组中的每个元素的值都要大于2000的情况,最后才返回true</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">})</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(flag)   <span class="hljs-comment">//false</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p>6、<strong>数组some方法作用</strong></p>
  <p>判断数组中是否有满足条件的元素</p>
  <p>
    语法&#xff1a;<strong
      >array.some( function ( item, index, arr) {} ,thisValue)</strong
    ><br />
    function &#xff1a;必须,数组中的每个元素都会执行这个函数
  </p>
  <ul>
    <li>第一个参数:item,必须,当前元素的值</li>
    <li>第二个参数:index,可选,当前元素在数组中的索引值</li>
    <li>第三个参数:arr,当前元素属于的数组对象</li>
  </ul>
  <p>
    thisValue
    &#xff1a;可选&#xff0c;对象作为该执行回调时使用&#xff0c;传递给函数&#xff0c;用作
    &#34;this&#34; 的值。<br />
    如果省略了 thisValue &#xff0c;&#34;this&#34; 的值为 &#34;undefined&#34;
  </p>
  <p>
    <strong>some方法特点</strong><br />
    (1)函数执行次数 !&#61;&#61; 数组长度
  </p>
  <p>(2)函数内部的return</p>
  <p>return true : 循环结束,找到了满足条件的元素</p>
  <p>
    return false :
    循环继续,没找到循环继续,如果所有元素全部遍历还是没找到,最终结果为false<br />
    (3) some()方法不会对空数组进行检测
  </p>
  <p>(4) some()方法不会改变原始数组</p>
  <p>
    应用场景 :
    这个方法与every()方法极为相似&#xff0c;但又有所不同&#xff0c;every要求每一项都要符合函数里面的条件&#xff0c;<strong>而some只要求有数组中的某一项符合即可</strong>&#xff0c;这点类似于或与和。返回的是布尔值&#xff0c;使用事例如下&#xff1a;
  </p>
  <pre
    data-index="45"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span>  num = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">var</span> eve = num.<span class="hljs-title function_">some</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">item, index, arr</span>){</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">return</span> (item &gt; <span class="hljs-number">2</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">});</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(eve);  <span class="hljs-comment">//true</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
  <p>7、数组filter()方法</p>
  <p>
    filter()方法的回调函数接受三个参数&#xff1a;当前元素、当前元素的索引和数组本身。其中&#xff0c;当前元素是必需的&#xff0c;而索引和数组是可选的。过滤数组中&#xff0c;符合条件的元素并返回一个新的数组
  </p>
  <pre
    data-index="46"
    class="set-code-show"
    name="code"
  ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:905px"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> people = [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Alice'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">25</span> },</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Bob'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">17</span> },</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Charlie'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">30</span> },</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  { <span class="hljs-attr">name</span>: <span class="hljs-string">'David'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">16</span> },</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Eva'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">];</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> adults = people.<span class="hljs-title function_">filter</span>(<span class="hljs-function"><span class="hljs-params">person</span> =&gt;</span> person.<span class="hljs-property">age</span> &gt;= <span class="hljs-number">18</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(adults); <span class="hljs-comment">// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }, { name: 'Eva', age: 18 }]</span></div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
