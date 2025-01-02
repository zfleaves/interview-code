<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9116%E3%80%81%E8%B0%88%E8%B0%88%E4%BD%A0%E5%AF%B9webpack%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%9F"
  >
    <span style="color: #0d0016"><strong>17、</strong></span
    ><span style="color: #000000">谈谈你对webpack的理解&#xff1f;</span>
  </h5>
  <blockquote>
    <p>
      <img
        alt=""
        height="453"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/60321cc57f4b99e1c4964b7642ca253b.png"
        width="675"
      />
    </p>
    <p><strong>1、谈谈你对Webpack的理解</strong></p>
    <ul>
      <li>
        Webpack是一个模块打包工具&#xff0c;可以使用它管理项目中的模块依赖&#xff0c;并编译输出模块所需的静态文件。
      </li>
      <li>
        它可以很好地管理、打包开发中所用到的HTML,CSS,JavaScript和静态文件&#xff08;图片&#xff0c;字体&#xff09;等&#xff0c;让开发更高效。
      </li>
      <li>
        对于不同类型的依赖&#xff0c;Webpack有对应的模块加载器&#xff0c;而且会分析模块间的依赖关系&#xff0c;最后合并生成优化的静态资源。
      </li>
    </ul>
    <p><strong>2、Webpack的基本功能有哪些&#xff1f;</strong></p>
    <ul>
      <li>
        代码转换&#xff1a;TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等等
      </li>
      <li>
        文件优化&#xff1a;压缩 JavaScript、CSS、HTML 代码&#xff0c;压缩合并图片等
      </li>
      <li>
        代码分割&#xff1a;提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
      </li>
      <li>
        模块合并&#xff1a;在采用模块化的项目有很多模块和文件&#xff0c;需要构建功能把模块分类合并成一个文件
      </li>
      <li>
        自动刷新&#xff1a;监听本地源代码的变化&#xff0c;自动构建&#xff0c;刷新浏览器
      </li>
      <li>
        代码校验&#xff1a;在代码被提交到仓库前需要检测代码是否符合规范&#xff0c;以及单元测试是否通过
      </li>
      <li>
        自动发布&#xff1a;更新完代码后&#xff0c;自动构建出线上发布代码并传输给发布系统。
      </li>
    </ul>
    <p><strong>3、Webpack构建过程&#xff1f;</strong></p>
    <ul>
      <li>从entry里配置的module开始递归解析entry依赖的所有module</li>
      <li>每找到一个module&#xff0c;就会根据配置的loader去找对应的转换规则</li>
      <li>对module进行转换后&#xff0c;再解析出当前module依赖的module</li>
      <li>
        这些模块会以entry为单位分组&#xff0c;一个entry和其所有依赖的module被分到一个组Chunk
      </li>
      <li>
        最后Webpack会把所有Chunk转换成文件输出在整个流程中Webpack会在恰当的时机执行plugin里定义的逻辑
      </li>
    </ul>
    <p><strong>4、有哪些常见的Loader?</strong></p>
    <ul>
      <li>optimize-css-assets-plugin&#xff1a;压缩css&#xff1b;</li>
      <li>
        file-loader&#xff1a;把文件输出到一个文件夹中&#xff0c;在代码中通过相对 URL
        去引用输出的文件 (处理图片和字体)
      </li>
      <li>
        url-loader&#xff1a;与 file-loader
        类似&#xff0c;区别是用户可以设置一个阈值&#xff0c;大于阈值会交给 file-loader
        处理&#xff0c;小于阈值时返回文件 base64 形式编码 (处理图片和字体)
      </li>
      <li>
        css-loader&#xff1a;加载 CSS&#xff0c;支持模块化、压缩、文件导入等特性
      </li>
      <li>
        style-loader&#xff1a;把 CSS 代码注入到 JavaScript 中&#xff0c;通过 DOM
        操作去加载 CSS
      </li>
      <li>json-loader: 加载 JSON 文件&#xff08;默认包含&#xff09;</li>
      <li>ts-loader: babel-loader&#xff1a;把 ES6 转换成 ES5</li>
      <li>ts-loader: 将 TypeScript 转换成 JavaScript</li>
      <li>less-loader&#xff1a;将less代码转换成CSS</li>
      <li>eslint-loader&#xff1a;通过 ESLint 检查 JavaScript 代码</li>
      <li>vue-loader:加载 Vue单文件组件</li>
    </ul>
    <p><strong>5、有哪些常见的Plugin&#xff1f;</strong></p>
    <p>1、html-webpack-plugin</p>
    <p>
      用途&#xff1a;自动创建一个 HTML 文件&#xff0c;并将打包好的 JavaScript
      文件插入到这个 HTML 文件中。<br />
      配置示例&#xff1a;
    </p>
    <pre
      data-index="9"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> <span class="hljs-title class_">HtmlWebpackPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'html-webpack-plugin'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">plugins</span>: [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">new</span> <span class="hljs-title class_">HtmlWebpackPlugin</span>({</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-attr">template</span>: <span class="hljs-string">'./src/index.html'</span>, <span class="hljs-comment">// 使用现有的 HTML 文件作为模板</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-attr">filename</span>: <span class="hljs-string">'index.html'</span>, <span class="hljs-comment">// 输出的 HTML 文件名</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-attr">inject</span>: <span class="hljs-string">'body'</span> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  })</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:2,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box2"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>
      2、uglifyjs-webpack-plugin<br />
      用途&#xff1a;压缩 JavaScript 文件。需要注意的是&#xff0c;UglifyJS 不支持
      ES6&#43; 代码压缩。如果你需要压缩 ES6&#43; 代码&#xff0c;可以考虑使用
      terser-webpack-plugin<br />
      配置示例 (Webpack 4 及以前)&#xff1a;
    </p>
    <pre
      data-index="10"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> <span class="hljs-title class_">UglifyJsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'uglifyjs-webpack-plugin'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">optimization</span>: {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-attr">minimizer</span>: [<span class="hljs-keyword">new</span> <span class="hljs-title class_">UglifyJsPlugin</span>()]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:3,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box3"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>3、mini-css-extract-plugin</p>
    <p>
      用途: 在构建过程中将 CSS 代码从 JavaScript
      打包文件中抽离出来&#xff0c;单独生成一个或多个 CSS
      文件。这样可以提高页面加载性能&#xff0c;因为浏览器可以并行加载 CSS 和
      JavaScript 文件。
    </p>
    <p>配置示例:</p>
    <pre
      data-index="11"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> <span class="hljs-title class_">MiniCssExtractPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'mini-css-extract-plugin'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">module</span>: {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-attr">rules</span>: [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.css$/</span>,</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        <span class="hljs-attr">use</span>: [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">          <span class="hljs-title class_">MiniCssExtractPlugin</span>.<span class="hljs-property">loader</span>,</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">          <span class="hljs-string">'css-loader'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  },</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> <span class="hljs-attr">plugins</span>: [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">new</span> <span class="hljs-title class_">MiniCssExtractPlugin</span>({</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="17"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-attr">filename</span>: <span class="hljs-string">'[name].css'</span>,</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="18"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-attr">chunkFilename</span>: <span class="hljs-string">'[id].css'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="19"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    })</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="20"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="21"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:4,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box4"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>
      4、clean-webpack-plugin:<br />
      用途:
      在每次构建之前清理输出目录&#xff0c;删除整个输出文件夹下的内容。这有助于避免旧的文件干扰新的构建结果&#xff0c;确保每次构建都是基于最新的源代码。<br />
      配置示例:
    </p>
    <pre
      data-index="12"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">CleanWebpackPlugin</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'clean-webpack-plugin'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">plugins</span>: [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">new</span> <span class="hljs-title class_">CleanWebpackPlugin</span>()</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:5,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box5"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>
      5、copy-webpack-plugin:<br />
      用途: 用于将项目中的文件或文件夹复制到构建输出目录中。<br />
      配置示例:
    </p>
    <pre
      data-index="13"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:822px"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> <span class="hljs-title class_">CopyWebpackPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'copy-webpack-plugin'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">plugins</span>: [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">new</span> <span class="hljs-title class_">CopyWebpackPlugin</span>({</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      <span class="hljs-attr">patterns</span>: [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">        { <span class="hljs-attr">from</span>: <span class="hljs-string">'src/assets'</span>, <span class="hljs-attr">to</span>: <span class="hljs-string">'assets'</span> } <span class="hljs-comment">// 将 src/assets 文件夹复制到输出目录的 assets 文件夹中</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">      ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    })</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:6,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box6"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p>
      6、webpack-bundle-analyzer:<br />
      用途: 可视化 Webpack，
      输出文件的体积&#xff0c;帮助你分析业务组件和依赖的第三方模块的大小。<br />
      配置示例:
    </p>
    <pre
      data-index="14"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">BundleAnalyzerPlugin</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'webpack-bundle-analyzer'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">plugins</span>: [</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-keyword">new</span> <span class="hljs-title class_">BundleAnalyzerPlugin</span>()</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  ]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li></ol></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>
      7、optimize-css-assets-plugin<br />
      用途: 压缩 CSS 文件&#xff0c;减少文件大小。<br />
      配置示例:
    </p>
    <pre
      data-index="15"
      class="set-code-show"
      name="code"
    ><code class="language-javascript hljs"><ol class="hljs-ln" style="width:100%"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">const</span> <span class="hljs-title class_">OptimizeCSSAssetsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'optimize-css-assets-webpack-plugin'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"> </div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-attr">optimization</span>: {</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-attr">minimizer</span>: [<span class="hljs-keyword">new</span> <span class="hljs-title class_">OptimizeCSSAssetsPlugin</span>()]</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  }</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">};</div></div></li></ol></code><div class="hljs-button {2} def" data-title="复制" onclick="hljs.copyCode(event)" data-report-click="{&quot;spm&quot;:&quot;3001.10243&quot;}"></div>'<div class="code-edithtml  " data-title="运行"><div data-report-click="{&quot;spm&quot;:&quot;3001.10182&quot;,&quot;extra&quot;:{&quot;index&quot;:7,&quot;ab&quot;:&quot;exp1&quot;}}" class="code-edithtml-box code-edithtml-box7"><i></i>运行<div><button>运行</button></div></div></div></pre>
    <p><strong>6、那你再说一说Loader和Plugin的区别&#xff1f;</strong></p>
    <ul>
      <li>
        Loader
        本质就是一个函数&#xff0c;在该函数中对接收到的内容进行转换&#xff0c;返回转换后的结果。
        因为 Webpack 只认识 JavaScript&#xff0c;所以 Loader
        就成了翻译官&#xff0c;对其他类型的资源进行转译的预处理工作。
      </li>
      <li>
        Plugin 就是插件&#xff0c;基于事件流框架 Tapable&#xff0c;插件可以扩展
        Webpack 的功能&#xff0c;在 Webpack
        运行的生命周期中会广播出许多事件&#xff0c;Plugin
        可以监听这些事件&#xff0c;在合适的时机通过 Webpack 提供的 API
        改变输出结果。
      </li>
      <li>
        Loader 在 module.rules
        中配置&#xff0c;作为模块的解析规则&#xff0c;类型为数组。每一项都是一个
        Object&#xff0c;内部包含了 test(类型文件)、loader、options (参数)等属性。
      </li>
      <li>
        Plugin 在 plugins 中单独配置&#xff0c;类型为数组&#xff0c;每一项是一个
        Plugin 的实例&#xff0c;参数都通过构造函数传入。
      </li>
    </ul>
    <p><strong>7、如何优化 Webpack 的构建速度&#xff1f;</strong></p>
    <p>&#xff08;1&#xff09;使用高版本的 Webpack 和 Node.js</p>
    <p>&#xff08;2&#xff09;压缩代码</p>
    <ul>
      <li>通过 uglifyjs-webpack-plugin 压缩JS代码</li>
      <li>
        通过 mini-css-extract-plugin 提取 chunk 中的 CSS
        代码到单独文件&#xff0c;通过 css-loader 的 minimize 选项开启 cssnano 压缩
        CSS。
      </li>
    </ul>
    <p>&#xff08;3&#xff09;多线程/多进程构建&#xff1a;thread-loader, HappyPack</p>
    <p>&#xff08;4&#xff09;压缩图片: image-webpack-loader</p>
    <p>&#xff08;5&#xff09;缩小打包作用域</p>
    <ul>
      <li>exclude/include (确定 loader 规则范围)</li>
      <li>resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)</li>
      <li>
        resolve.mainFields 只采用 main 字段作为入口文件描述字段
        (减少搜索步骤&#xff0c;需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
      </li>
      <li>resolve.extensions 尽可能减少后缀尝试的可能性</li>
      <li>
        noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle
        中&#xff0c;注意被忽略掉的文件里不应该包含 import、require、define
        等模块化语句)
      </li>
      <li>ignorePlugin (完全排除模块)</li>
    </ul>
    <p><strong>8、说一下 Webpack 的热更新原理吧&#xff1f;</strong></p>
    <ul>
      <li>
        Webpack 的热更新又称热替换&#xff08;Hot Module
        Replacement&#xff09;&#xff0c;缩写为 HMR。
        这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
      </li>
      <li>
        HMR的核心就是客户端从服务端拉去更新后的文件&#xff0c;准确地说是 chunk diff
        (chunk 需要更新的部分)&#xff0c;实际上 WDS 与浏览器之间维护了一个
        Websocket&#xff0c;当本地资源发生变化时&#xff0c;WDS
        会向浏览器推送更新&#xff0c;并带上构建时的
        hash&#xff0c;让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS
        发起 Ajax
        请求来获取更改内容(文件列表、hash)&#xff0c;这样客户端就可以再借助这些信息继续向
        WDS 发起 jsonp 请求获取该chunk的增量更新。
      </li>
      <li>
        后续的部分(拿到增量更新之后如何处理&#xff1f;哪些状态该保留&#xff1f;哪些又需要更新&#xff1f;)由
        HotModulePlugin 来完成&#xff0c;提供了相关 API
        以供开发者针对自身场景进行处理&#xff0c;像react-hot-loader 和 vue-loader
        都是借助这些 API 实现 HMR。
      </li>
    </ul>
    <p>
      <strong
        >9、什么是bundle&#xff1f;什么是chunk&#xff1f;什么是module&#xff1f;</strong
      >
    </p>
    <ul>
      <li>bundle&#xff1a;是webpack打包后的一个文件&#xff1b;</li>
      <li>
        chunk&#xff1a;代码块&#xff0c;一个chunk
        可能有很多的模块组成&#xff0c;用于合并和分割代码&#xff1b;
      </li>
      <li>
        module&#xff1a;模块&#xff0c;在webpack中&#xff0c;一切都是模块&#xff0c;一个文件就是一个模块&#xff0c;她从入口开始查找webpack依赖的所有模块
      </li>
    </ul>
    <p><strong>10、webpack和grunt以及gulp有什么不同&#xff1f;</strong></p>
    <ul>
      <li>
        grunt和gulp是基于任务处理的工具&#xff0c;我们需要把我们要做的事分配成各种各样的任务&#xff0c;grunt和gulp会自动执行各种分配的任务&#xff0c;像流水线一样&#xff0c;把资源放上去通过不同的插件进行加工&#xff0c;他的插件非常丰富&#xff0c;能够为我们打造各种工作流&#xff1b;
      </li>
      <li>
        webpack是模块化打包工具&#xff0c;把所有文件都当作模块进行处理&#xff0c;也就是说webpack和grunt和gulp是两种完全不一样的东西&#xff1b;
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
