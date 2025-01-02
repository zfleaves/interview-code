<template>
  <h5
    id="%F0%9F%8D%877%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF%E5%89%8D%E7%AB%AF%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%3F%E6%AF%94%E5%A6%82%EF%BC%88Vue2%E7%9A%84webpack%EF%BC%8CVue3%E7%9A%84Vite%EF%BC%89"
  >
    <strong>&ZeroWidthSpace;</strong
    >1、什么是前端构建工具?比如（Vue2的webpack，Vue3的Vite）
  </h5>
  <blockquote>
    <p>
      <span style="color: #fe2c24"
        >①首先要明白：浏览器它只认识html, css, js</span
      ><br />
      企业级项目里都可能会具备哪些功能？<br />
      1.&nbsp;typescript:·如果遇到ts文件我们需要使用tsc将typescript代码转换为js代码<br />
      2.&nbsp;React/<span
        class="words-blog hl-git-1"
        data-tit="Vue"
        data-pretit="vue"
        >Vue</span
      >:安装react-compiler&nbsp;/&nbsp;vue-complier，将我们写的jsx文件或者.vue文件转换为render函数<br />
      3.&nbsp;less/postcss/component-style:我们又需要安装less-loader,&nbsp;sass-loader等一系列编译工具4.&nbsp;语法降级:babel&nbsp;---&gt;将es的新语法转换旧版浏览器可以接受的语法<br />
      5.&nbsp;体积优化:uglifyjs&nbsp;---&gt;将我们的代码进行压缩变成体积更小性能更高的文件<br /><span
        style="color: #fe2c24"
        >②前因后果：</span
      ><br />
      因为稍微改一点点东西，非常麻烦！<br />
      将App.tsx ---&gt;tsc ---&gt;· App.jsx ---&gt;React-complier
      ---&gt;js文件<br />
      但是有一个东西能够帮你把tsc,react-compiler, less,
      babel,uglifyjs全部集成到一起，我们只需要关心我们写的代码就好了<br />
      我们写的代码变化--&gt;有人帮我们自动去tsc, react-compiler,less, babel,
      uglifyjs全部挨个走一遍--&gt;js<br />
      这个东西就叫做 <span style="color: #1c7331">前端构建工具</span><br /><span
        style="color: #fe2c24"
        >③前端构建工具的工作：</span
      ><br />
      打包:
      将我们写的浏览器不认识的代码交给构建工具进行编译处理的过程就叫做打包，打包完成以后会给我们一个浏览器可以认识的文件。<br />
      一个构建工具他到底承担了哪些脏活累活:<br />
      1.模块化开发支持：支持直接从node_modules里引入代码＋多种模块化支持<br />
      2.处理代码兼容性：比始babel语法降级，less,ts
      语法转换(**不是构建工具做的，构建工具将这些语法对应的处理工具集成进来自动化处理)<br />
      3.提高项目性能：压缩文件，**代码分割*<br />
      4.优化开发体验:<br />
      （1）构建工具会帮你自动监听文件的变化，当文件变化以后自动帮你调用对应的集成工具进行重新打包，然后再浏览器重新运行（整个过程叫做热更新,
      hot replacement）<br />
      （2）开发服务器:跨域的问题，用react-cli
      create-react-element-vue-cli·解决跨域的问题,<br /><span
        style="color: #fe2c24"
        >④构建工具总结：&nbsp;</span
      ><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;构建工具它让我们可以不用每次都关心我们的代码在浏览器如何运行，我们只需要首次给构建工具提供一个配置文件(这个配置文件也不是必须的，如果你不给他他会有默认的帮你去处理)，有了这个集成的配置文件以后，我们就可以在下次需要更新的时候调用一次对应的命令就好了，如果我们再结合热更新，我们就更加不需要管任何东西，这就是构建工具去做的东西。<br /><span
        style="color: #1c7331"
        >构建工具它让我们不用关心生产的代码，也不用去关心代码如何在浏览器运行，只需要关心我们的开发怎么写的爽怎么写就好了</span
      >
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
