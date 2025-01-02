<template>
  <h5 id="2%E3%80%81uniapp%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84">
    2、uniapp目录结构
  </h5>
  <p>一个uni-app工程，默认包含如下目录及文件：</p>
  <blockquote>
    <pre
      data-index="55"
      class="set-code-hide"
      name="code"
    ><code class="language-XML hljs"><ol class="hljs-ln" style="width:805px"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">│─components            符合vue组件规范的uni-app组件目录</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">│  └─comp-a.vue         可复用的a组件</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─utssdk                存放uts文件</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─pages                 业务页面文件存放的目录</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">│  ├─index</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">│  │  └─index.vue       index页面</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">│  └─list</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">│     └─list.vue        list页面</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="10"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="11"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─uni_modules           存放[uni_module](/uni_modules)。</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="12"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─platforms             存放各平台专用页面的目录，详见</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="13"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─nativeplugins         App原生语言插件 详见</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="14"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─nativeResources       App端原生资源目录</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="15"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">│  └─android            Android原生资源目录 详见</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="16"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─hybrid                App端存放本地html文件的目录，详见</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="17"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─wxcomponents          存放小程序组件的目录，详见</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="18"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─unpackage             非工程代码，一般存放运行或发行的编译结果</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="19"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─AndroidManifest.xml   Android原生应用清单文件 详见</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="20"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─main.js               Vue初始化入口文件</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="21"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="22"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="23"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="24"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">└─uni.scss              这里是uni-app内置的常用样式变量</div></div></li></ol></code><div class="hide-preCode-box"><span class="hide-preCode-bt" data-report-view="{&quot;spm&quot;:&quot;1001.2101.3001.7365&quot;}"><img class="look-more-preCode contentImg-no-view" src="https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png" alt="" title=""></span></div><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0"
          >pages.json&nbsp;&nbsp;</span
        ></span
      >
    </p>
    <p>
      配置文件，全局页面路径配置，应用的状态栏、导航条、标题、窗口背景色设置等<br /><span
        style="color: #be191c"
        ><span style="background-color: #fef2f0"
          >main.js&nbsp;&nbsp;</span
        ></span
      >
    </p>
    <p>
      入口文件，主要作用是初始化vue实例、定义全局组件、使用需要的插件如
      vuex，注意uniapp无法使用vue-router，路由须在pages.json中进行配置。如果开发者坚持使用vue-router，可以在插件市场找到转换插件。<br /><span
        style="color: #be191c"
        ><span style="background-color: #fef2f0">App.vue</span></span
      ><br />
      是uni-app的主组件，所有页面都是在App.vue下进行切换的，是页面入口文件。但App.vue本身不是页面，这里不能编写视图元素。除此之外，应用生命周期仅可在App.vue中监听，在页面监听无效。<br /><span
        style="color: #be191c"
        ><span style="background-color: #fef2f0">pages</span></span
      ><br />
      页面管理部分用于存放页面或者组件
    </p>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0"
          >应用配置&nbsp;manifest.json&nbsp;
        </span></span
      >
    </p>
    <p>
      文件是应用的配置文件，用于指定应用的名称、图标、权限等，HBuilderX
      创建的工程此文件在根目录，CLI 创建的工程此文件在 src
      目录。我们也可以在这里为Vue 为H5设置<a
        href="https://so.csdn.net/so/search?q=%E8%B7%A8%E5%9F%9F&amp;spm=1001.2101.3001.7020"
        title="跨域"
        target="_blank"
        >跨域</a
      >拦截处理器<br /><span style="color: #be191c"
        ><span style="background-color: #fef2f0">package.json</span></span
      >
    </p>
    <p>
      文件用来对 uni-app
      进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar
      等。
    </p>
    <p>
      pages数组中第一项表示应用启动页，参考官网：<a
        href="https://uniapp.dcloud.io/collocation/pages"
        rel="nofollow"
        target="_blank"
        title="pages.json 页面路由 | uni-app官网"
        >pages.json 页面路由 | uni-app官网</a
      >
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
