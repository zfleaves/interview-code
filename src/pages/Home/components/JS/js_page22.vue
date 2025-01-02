<template>
  <h5
    id="22%E3%80%81promise%E5%92%8Casync%EF%BC%8Cawait%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F%C2%A0"
  >
    22、事件循环&#xff0c;Promise和async/await的详解
  </h5>
  <blockquote>
    <p>
      <strong><code>事件循环event loop</code>它的执行顺序&#xff1a;</strong>
    </p>
    <ul>
      <li>一开始整个脚本作为一个宏任务执行</li>
      <li>
        执行过程中同步代码直接执行&#xff0c;宏任务进入宏任务队列&#xff0c;微任务进入微任务队列
      </li>
      <li>
        当前宏任务执行完出队&#xff0c;检查微任务列表&#xff0c;有则依次执行&#xff0c;直到全部执行完
      </li>
      <li>执行浏览器UI线程的渲染工作</li>
      <li>检查是否有<code>Web Worker</code>任务&#xff0c;有则执行</li>
      <li>
        执行完本轮的宏任务&#xff0c;回到2&#xff0c;依此循环&#xff0c;直到宏任务和微任务队列都为空
      </li>
    </ul>
    <p>
      <strong>微任务包括&#xff1a;</strong
      ><span style="color: #be191c"
        ><code
          ><span style="background-color: #fef2f0">MutationObserver</span></code
        ><span style="background-color: #fef2f0">、</span
        ><code
          ><span style="background-color: #fef2f0"
            >Promise.then()或catch()</span
          ></code
        ><span style="background-color: #fef2f0">、</span></span
      ><code
        ><span style="color: #be191c"
          ><span style="background-color: #fef2f0">Promise</span></span
        >为基础开发的其它技术&#xff0c;比如fetch API</code
      >、<code>V8</code>的垃圾回收过程、<code>Node独有的process.nextTick</code>。
    </p>
    <p>
      <strong>宏任务包括</strong>&#xff1a;<span style="color: #be191c"
        ><code><span style="background-color: #fef2f0">script</span></code
        ><span style="background-color: #fef2f0"> 、</span
        ><code><span style="background-color: #fef2f0">setTimeout</span></code
        ><span style="background-color: #fef2f0">、</span
        ><code><span style="background-color: #fef2f0">setInterval</span></code
        ><span style="background-color: #fef2f0"> 、</span
        ><code><span style="background-color: #fef2f0">setImmediate</span></code
        ><span style="background-color: #fef2f0"> 、</span
        ><code><span style="background-color: #fef2f0">I/O</span></code
        ><span style="background-color: #fef2f0"> 、</span
        ><code><span style="background-color: #fef2f0">UI rendering</span></code
        ><span style="background-color: #fef2f0">。</span></span
      >
    </p>
    <p>
      <strong>注意</strong
      >⚠️&#xff1a;在所有任务开始的时候&#xff0c;由于宏任务中包括了<code>script</code>&#xff0c;所以浏览器会先执行一个宏任务&#xff0c;在这个过程中你看到的延迟任务(例如<code>setTimeout</code>)将被放到下一轮宏任务中来执行。
    </p>
    <p>Promise和async/await是JavaScript中处理异步操作的两种方式。</p>
    <ol>
      <li>
        Promise是一种用于处理异步操作的对象。它可以表示一个异步操作的最终完成或失败&#xff0c;并返回相应的结果或错误信息。Promise有三种状态&#xff1a;pending&#xff08;进行中&#xff09;、fulfilled&#xff08;已完成&#xff09;和rejected&#xff08;已拒绝&#xff09;。通过调用Promise的then()方法可以注册回调函数来处理异步操作的结果。
      </li>
      <li>
        async/await是ES8引入的一种更加简洁的处理异步操作的方式。async函数是一个返回Promise对象的函数&#xff0c;其中可以使用await关键字来等待一个Promise对象的解决。await关键字可以暂停async函数的执行&#xff0c;直到Promise对象解决为止&#xff0c;并返回解决后的结果。
      </li>
    </ol>
    <p>
      <span style="color: #0d0016"><strong>区别&#xff1a;</strong></span>
    </p>
    <ul>
      <li>
        -
        语法上&#xff0c;Promise使用then()和catch()方法来处理异步操作的结果&#xff0c;而async/await使用async函数和await关键字来等待异步操作的结果。
      </li>
      <li>
        -
        可读性上&#xff0c;async/await更加直观和易于理解&#xff0c;代码结构更加清晰&#xff0c;而Promise则需要通过链式调用then()方法来处理多个异步操作。
      </li>
      <li>
        -
        错误处理上&#xff0c;Promise使用catch()方法来捕获错误&#xff0c;而async/await可以使用try-catch语句来捕获错误。
      </li>
    </ul>
    <p>详细解答&#xff1a;</p>
    <ul>
      <li>JavaScript的异步机制包括以下几个步骤&#xff1a;</li>
    </ul>
    <pre
      data-index="23"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:1132px"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">（<span class="hljs-number">1</span>）所有同步任务都在主线程上执行，行成一个执行栈</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">（<span class="hljs-number">2</span>）主线程之外，还存在一个任务队列，只要异步任务有了结果，就会在任务队列中放置一个事件</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">（<span class="hljs-number">3</span>）一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列，看看里面还有哪些事件，哪些对应的异步任务，于是异步任务结束等待状态，进入执行栈，开始执行</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">（<span class="hljs-number">4</span>）主线程不断的重复上面的第三步</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:13,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box13"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <ol>
      <li>promise的用法</li>
    </ol>
    <p>
      Promise,简单来说就是一个容器&#xff0c;里面保存着某个未来才会结束的时间(通常是一个异步操作的结果)
    </p>
    <ul>
      <li><strong>基本语法</strong></li>
    </ul>
    <pre
      data-index="24"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-keyword">let</span> obj = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve,reject</span>) =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-comment">//...</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-title function_">resolve</span>(<span class="hljs-string">'success'</span>)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    });</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> obj.<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result); <span class="hljs-comment">//success</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> });</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:14,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box14"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <ul>
      <li>
        <p><strong>promise共有三个状态</strong></p>
      </li>
    </ul>
    <p>
      pending&#xff08;执行中&#xff09;、resolve&#xff08;成功&#xff09;、rejected&#xff08;失败&#xff09;
    </p>
    <ul>
      <li><strong>链式调用</strong></li>
    </ul>
    <p>
      <a
        href="https://m.baidu.com/s?word&#61;Promise%20%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8&amp;sa&#61;re_dqa_zy"
        rel="nofollow"
        title="Promise 链式调用"
        target="_blank"
        >Promise 链式调用</a
      >是一种编程模式&#xff0c;允许在异步操作之间顺序执行多个操作。在每个操作中&#xff0c;可以使用
      &#96;.then()&#96; 方法返回一个新的
      Promise&#xff0c;从而在异步流程中继续执行下一个操作。这样可以避免回调函数地狱&#xff0c;提高代码的可读性和可维护性。
    </p>
    <p>链式调用的基本步骤包括&#xff1a;</p>
    <ol>
      <li>
        创建一个新的 Promise 对象&#xff0c;并调用 &#96;resolve&#96; 或
        &#96;reject&#96; 来变更其状态。
      </li>
      <li>
        在 &#96;then&#96; 或 &#96;catch&#96;
        方法中&#xff0c;处理成功或失败的状态。
      </li>
      <li>
        在 &#96;then&#96; 方法中&#xff0c;可以使用 &#96;return&#96;
        关键字返回一个新的 Promise 对象&#xff0c;或者直接返回普通值。
      </li>
      <li>
        继续在下一个 &#96;then&#96; 方法中处理返回的 Promise
        对象&#xff0c;或者直接处理返回的普通值。
      </li>
    </ol>
    <p>
      例如&#xff0c;以下代码展示了如何使用 &#96;.then()&#96; 和 &#96;.catch()&#96;
      方法进行链式调用&#xff1a;
    </p>
    <pre
      data-index="25"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">let</span> promise1 = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-title function_">resolve</span>(<span class="hljs-string">'new promise111111'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">});</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">promise1.<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res); <span class="hljs-comment">// 输出: 'new promise111111'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">return</span> <span class="hljs-string">'链式调用的方式'</span>;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  }).<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(value); <span class="hljs-comment">// 输出: '链式调用的方式'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">});</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:15,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box15"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>
      在这个例子中&#xff0c;&#96;promise1&#96; 被成功地 resolve
      并返回了一个值&#xff0c;然后 &#96;then&#96; 方法被调用&#xff0c;返回了一个新的
      Promise 对象&#xff0c;并返回了 &#96;&#39;链式调用的方式&#39;&#96;。这个新的
      Promise 对象又被继续 &#96;.then&#96; 处理&#xff0c;最终返回了
      &#96;&#39;链式调用的方式&#39;&#96;。
    </p>
    <p>
      需要注意的是&#xff0c;每次 &#96;.then&#96; 方法调用都会返回一个新的 Promise
      对象&#xff0c;因此链式调用的结果取决于最后 &#96;.then&#96;
      方法中返回的值或新的 Promise 对象。
    </p>
    <ul>
      <li><strong>错误捕获</strong></li>
    </ul>
    <p>
      Promise.prototype.catch用于指定Promise状态变为rejected时的回调函数&#xff0c;可以认为是.then的简写形势&#xff0c;返回值跟.then一样
    </p>
    <pre
      data-index="26"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">let</span> obj = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve,reject</span>) =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-title function_">reject</span>(<span class="hljs-string">'error'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">});</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">obj.<span class="hljs-title function_">catch</span>(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">})</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:16,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box16"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <ol>
      <li>async、await的用法</li>
    </ol>
    <p>
      特点简洁&#xff1a;<a
        href="https://so.csdn.net/so/search?q&#61;%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B&amp;spm&#61;1001.2101.3001.7020"
        title="异步编程"
        target="_blank"
        >异步编程</a
      >的最高境界就是不关心它是否是异步。async、await很好的解决了这一点&#xff0c;将异步强行转换为同步处理。<br />
      async/await与promise不存在谁代替谁的说法&#xff0c;因为async/await是寄生于Promise&#xff0c;Generater的<a
        href="https://so.csdn.net/so/search?q&#61;%E8%AF%AD%E6%B3%95%E7%B3%96&amp;spm&#61;1001.2101.3001.7020"
        title="语法糖"
        target="_blank"
        >语法糖</a
      >。
    </p>
    <ul>
      <li><strong>用法</strong></li>
    </ul>
    <p>
      async用于申明一个function是异步的&#xff0c;而await可以认为是async
      wait的简写&#xff0c;等待一个异步方法执行完成。<br />
      规则&#xff1a;<br />
      1 async和await是配对使用的&#xff0c;await存在于async的内部。否则会报错<br />
      2 await表示在这里等待一个promise返回&#xff0c;再接下来执行<br />
      3
      await后面跟着的应该是一个promise对象&#xff0c;&#xff08;也可以不是&#xff0c;如果不是接下来也没什么意义了…&#xff09;
    </p>
    <ul>
      <li><strong>写法</strong></li>
    </ul>
    <pre
      data-index="27"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">demo</span>(<span class="hljs-params"></span>) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">let</span> a= <span class="hljs-keyword">await</span> <span class="hljs-title function_">sleep</span>(<span class="hljs-number">100</span>); <span class="hljs-comment">//上一个await执行之后才会执行下一句</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">let</span> b= <span class="hljs-keyword">await</span> <span class="hljs-title function_">sleep</span>(a+ <span class="hljs-number">100</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">let</span> c= <span class="hljs-keyword">await</span> <span class="hljs-title function_">sleep</span>(b+ <span class="hljs-number">100</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">return</span> c; <span class="hljs-comment">// console.log(c);</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-title function_">demo</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">});</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:17,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box17"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <ul>
      <li><strong>错误捕获</strong></li>
    </ul>
    <p>如果是reject状态&#xff0c;可以用try-catch捕捉</p>
    <pre
      data-index="28"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">let</span> obj = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve,reject</span>) =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-title function_">reject</span>(<span class="hljs-string">'error'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    },<span class="hljs-number">1000</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">});</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">demo</span>(<span class="hljs-params">item</span>) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">try</span> {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-keyword">let</span> result = <span class="hljs-keyword">await</span> obj;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    } <span class="hljs-keyword">catch</span>(e) {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(e);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">}</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-title function_">demo</span>();</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:18,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box18"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <ul>
      <li><strong>两者区别</strong></li>
    </ul>
    <p>
      1、promise是ES6&#xff0c;async/await是ES7<br />
      2、async/await相对于promise来讲&#xff0c;写法更加优雅<br />
      3、reject状态&#xff1a;<br />
      &#xff08;1&#xff09;promise错误可以通过catch来捕捉&#xff0c;建议尾部捕获错误&#xff0c;<br />
      &#xff08;2&#xff09;async/await既可以用.then又可以用try-catch捕捉
    </p>
    <p>
      推荐一篇Promise文章&#xff1a;<a
        href="https://juejin.cn/post/6844904181627781128"
        rel="nofollow"
        target="_blank"
        title="https://juejin.cn/post/6844904181627781128"
        >https://juejin.cn/post/6844904181627781128</a
      >
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
