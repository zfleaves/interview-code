<template>
  <h5
    id="2%E3%80%81Webpack%E7%9A%84%E6%89%93%E5%8C%85%E8%BF%87%E7%A8%8B%2F%E6%89%93%E5%8C%85%E5%8E%9F%E7%90%86%2F%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B%EF%BC%9F%C2%A0"
  >
    2、Webpack的打包过程/打包原理/构建流程？&nbsp;
  </h5>
  <p style="text-align: center">
    <img
      alt=""
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/7bc4816f69e4ed31940a7e397303de57.png"
    />
  </p>
  <p>
    webpack
    的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来。命令行执行npx
    webpack打包命令开始
  </p>
  <ul>
    <li>1.初始化编译参数:从配置文件和shell命令中读取与合并参数</li>
    <li>
      2.开始编译:根据上一步得到的参数初始化Compiler对象，加载所有配置的Plugin，执行对象的
      run 方法开始执行编译。
    </li>
    <li>3.确定入口:根据配置中的 entry 找出所有的入口文件</li>
    <li>
      4.编译模块:从入口文件触发，调用所有配置的Loader对模块进行翻译，再找出该模块依赖的模块，然后递归本步骤直到所有入口依赖的文件都进行翻译。
    </li>
    <li>
      5.完成模块编译:在经过第4步使用 Loader
      翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系图。
    </li>
    <li>
      6.输出资源：根据依赖关系图，组装成一个个包含多个模块的Chunk，再把每个Chunk转化成一个单独的文件加入到输出列表，根据配置确定输出的路径和文件名输出。
    </li>
  </ul>
  <p>
    在以上过程中，Webpack
    会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑。
  </p>
  <p>总结归纳：</p>
  <ul>
    <li>
      初始化:从配置文件和shell命令中读取与合并参数，根据参数初始化Compiler实例，加载Plugin(注册所有配置的插件)，调用Compiler实例的run方法开始执行编译。
    </li>
  </ul>
  <blockquote>
    <p>
      Compiler编译对象掌控者webpack生命周期，不执行具体的任务，只是进行一些调度工作。比如执行模块创建、依赖收集、分块、打包等<br />
      调用run之后，创建Compiltation实例，每次构建都会新创建一个Compiltation实例，包含了这次构建的基本信息<br />
      Webpack
      会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑。
    </p>
  </blockquote>
  <ul>
    <li>
      编译:从entry 触发，对每个Module 串行调用对应的
      Loader对模块进行翻译，再找出该模块依赖的模块，递归进行编译处理。
    </li>
  </ul>
  <blockquote>
    <p>
      从配置文件（ webpack.config.js ）中指定的 entry
      入口，开始解析文件构建&nbsp;<a
        href="https://so.csdn.net/so/search?q=AST&amp;spm=1001.2101.3001.7020"
        title="AST"
        target="_blank"
        >AST</a
      >&nbsp;语法树
    </p>
  </blockquote>
  <ul>
    <li>
      根据依赖关系图，组装成包含多个模块的Chunk，将个Chunk转换成文件输出。
    </li>
  </ul>
  <blockquote>
    <p>不同entry生成不同chunk，动态导入也会生成自己的chunk&nbsp;</p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
