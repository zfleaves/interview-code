<template>
  <h5
    id="10%E3%80%81%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98webpack%E7%9A%84%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6%EF%BC%9F%C2%A0"
  >
    10、如何提高webpack的构建速度？&nbsp;
  </h5>
  <p>思路1：减少需要构建的文件或代码</p>
  <ul>
    <li>
      HMR(Hot Module Replacement) 模块热替换只重新构建发生变化的模块 –
      开发环境中
    </li>
    <li>
      缩小处理范围:合理利用这两个属性exclude：不需要处理的文件 和
      include：需要处理的文件
    </li>
    <li>babel缓存 第二次构建时，会读取之前的缓存，只重新构建变化的文件</li>
    <li>使用Dll进行分包 --&gt; 分包方便按需加载</li>
  </ul>
  <blockquote>
    <p>
      正常情况下node_module会被打包成一个文件<br />
      使用dll技术，对可以将那些不常更新的框架和库进行单独打包，生成一个chunk<br />
      项目源代码也需要拆分，可以根据路由来划分打包文件 --&gt;
      怎么实现路由懒加载？webpack中如何实现组件异步加载？
    </p>
  </blockquote>
  <p>思路2：多进行进行构建&nbsp;</p>
  <ul>
    <li>多进程打包 thread-loader,将其放在费时的loader之前</li>
  </ul>
  <blockquote>
    <p>进程启动和进程通信都有开销，工作时间比较长，才需要多进程打包</p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
