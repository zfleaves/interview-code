<template>
  <h5 id="%E2%80%8B%E7%BC%96%E8%BE%915%E3%80%81%E7%AE%80%E8%BF%B0MVVM">
    6、<strong>简述MVVM 和MVC的原理以及区别？</strong>
  </h5>
  <blockquote>
    <p>MVVM视图模型双向绑定，是Model-View-ViewModel的缩写</p>
    <p>1、MVVM的优点：</p>
    <ol>
      <li>
        低耦合。视图（View）可以独立于Model变化和修改，一个Model可以绑定到不同的View上，当View变化的时候Model可以不变化，当Model变化的时候View也可以不变；
      </li>
      <li>
        可重用性。你可以把一些视图逻辑放在一个Model里面，让很多View重用这段视图逻辑。
      </li>
      <li>
        独立开发。开发人员可以专注于业务逻辑和数据的开发(ViewModel)，设计人员可以专注于页面设计。
      </li>
      <li>可测试。</li>
    </ol>
    <p>
      <img
        alt=""
        height="654"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/e43d791528253b7fb44a8fcfe3fa187b.png"
        width="1200"
      />
    </p>
    <p>
      <img
        alt=""
        height="642"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/b6459086ef501118acca6692d06239af.png"
        width="1198"
      />
    </p>
    <p>2、什么是MVC?</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MVC是应用最广泛的软件架构之一,一般MVC分为:Model(模型),View(视图),Controller(控制器)。
      这主要是基于分层的目的,让彼此的职责分开.View一般用过Controller来和Model进行联系。Controller是Model和View的协调者,View和Model不直接联系。基本都是单向联系。M和V指的意思和MVVM中的M和V意思一样。C即Controller指的是页面业务逻辑。MVC是单向通信。也就是View跟Model，必须通过Controller来承上启下。
    </p>
    <p>
      <img
        alt=""
        height="334"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/1423f84151e518cdd4dd13d85e7fe32c.png"
        width="649"
      />
    </p>
    <p>Model（模型）表示应用程序核心（如数据库）。</p>
    <p>View（视图）显示效果（HTML页面）。</p>
    <p>Controller（控制器）处理输入（业务逻辑）。</p>
    <p>MVC 模式同时提供了对 HTML、CSS 和 JavaScript 的完全控制。</p>
    <p>
      Model（模型）是应用程序中用于处理应用程序数据逻辑的部分。（通常模型对象负责在数据库中存取数据)
    </p>
    <p>
      View（视图）是应用程序中处理数据显示的部分。(通常视图是依据模型数据创建的)
    </p>
    <p>
      Controller（控制器）是应用程序中处理用户交互的部分。(通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据）
    </p>
    <p>
      <span style="color: #0d0016"><strong>优点:</strong></span>
    </p>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">1、低耦合</span></span
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">2、重用性高</span></span
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">3、生命周期成本低</span></span
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">4、部署快</span></span
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">5、可维护性高</span></span
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0"
          >6、有利软件工程化管理</span
        ></span
      ><br />
      3、MVC与MVVM的区别？
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MVC和MVVM的区别并不是VM完全取代了C，ViewModel存在目的在于抽离Controller中展示的业务逻辑，而不是替代Controller，其它视图操作业务等还是应该放在Controller中实现。也就是说MVVM实现的是业务逻辑组件的重用。
    </p>
    <ul>
      <li>MVC中Controller演变成MVVM中的ViewModel</li>
      <li>MVVM通过数据来显示视图层而不是节点操作</li>
      <li>
        MVVM主要解决了MVC中大量的dom操作使页面渲染性能降低,加载速度变慢,影响用户体验
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
