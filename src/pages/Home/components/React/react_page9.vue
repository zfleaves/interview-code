<template>
  <h5
    id="9%E3%80%81React%E7%9A%84%E7%89%B9%E7%82%B9%E5%92%8C%E5%85%B3%E9%94%AE%E7%89%88%E6%9C%AC%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    9、React的特点和关键版本区别？
  </h5>
  <ul>
    <li>react的关键版本</li>
  </ul>
  <p>
    React16之前对virtural
    dom的更新和渲染是同步的。就是当一次更新或者一次加载开始以后，diff virtual
    dom并且渲染的过程是一口气完成的。如果组件层级比较深，相应的堆栈也会很深，长时间占用浏览器主线程，一些类似用户输入、鼠标滚动等操作得不到响应。
  </p>
  <ul>
    <li>React16开始用了分片的方式解决上面的问题</li>
  </ul>
  <p>
    就是把一个任务分成很多小片，当分配给这个小片的时间用尽的时候，就检查任务列表中有没有新的、优先级更高的任务，有就做这个新任务，没有就继续做原来的任务。这种方式被叫做异步渲染(Async
    Rendering)。
  </p>
  <ul>
    <li>React的特点</li>
  </ul>
  <p>
    <strong>1. React速度很快</strong><br />
    与其他框架相比，React采取了一种独特操作DOM的方式。<br />
    它并不直接对DOM进行操作。它引入了一个叫虚拟DOM的概念，安插在JavaScript逻辑和实际的DOM之间。这一概念提高了Web性能。在UI渲染过程中，React通过在虚拟DOM中的微操作来实现对实际DOM的局部更新。<br />
    将视图与数据进行单向绑定，绝大部分操作都可以不再直接操作DOM，而是通过改变数据来更新视图，这对于前端是具有里碑意义的。<br /><strong
      >2. 跨浏览器兼容</strong
    ><br />
    虚拟DOM帮助我们解决了跨浏览器问题，它为我们提供了标准化的API，甚至在IE8中都是没问题的。<br /><strong
      >3. 模块化</strong
    ><br />
    为程序编写独立的模块化UI组件，并且它们可以引入其他组件。这等同于提高了代码的可维护性。<br /><strong
      >4. 单向数据流，让事情一目了然</strong
    ><br />
    Flux是一个用于在JavaScript应用中创建单向数据层的架构，它随着React视图库的开发而被Facebook概念化。它只是一个概念，而非特定工具的实现。它可以被其它框架吸纳。例如，Alex
    Rattray有一个很好的Flux实例，在React中使用了Backbone的集合和模型。<br /><strong
      >5. 纯粹的JavaScript</strong
    ><br />
    现代Web应用程序与传统的Web应用有着不同的工作方式。<br />
    例如，视图层的更新需要通过用户交互而不需要请求服务器。因此视图和控制器非常依赖彼此。<br />
    许多框架使用Handlebars或Mustache等模板引擎来处理视图层。但React相信视图和控制器应该相互依存在一起而不是使用第三方模板引擎，而且最重要的是，它是纯粹的JavaScript程序。<br /><strong
      >6. 同构的JavaScript</strong
    ><br />
    单页面JS应用程序的最大缺陷在于对搜索引擎的索引有很大限制。React对此有了解决方案。<br />
    React可以在服务器上预渲染应用再发送到客户端。它可以从预渲染的静态内容中恢复一样的记录到动态应用程序中。<br />
    因为搜索引擎的爬虫程序依赖的是服务端相应而不是JavaScript的执行，预渲染你的应用有助于搜索引擎优化。<br /><strong
      >7. React与其他框架/库相比兼容性好</strong
    ><br />
    比如使用RequireJS来加载和打包，而Browserify和Webpack适用于构建大型应用。它们使得那些艰难的任务不再让人望而生畏。<br /><strong
      >8. 相比于其他的框架【vue】更灵活</strong
    ><br />
    没有那么多的条条框框，提供了一系列基础api自己随意组合。如果要我把他比作积木的话那么react提供的就是小型的积木，vue提供的是大型的积木。这就势必造成了react会比vue更加的灵活。
  </p>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
