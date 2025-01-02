<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%913.%20display%3Anone%E5%92%8Cvisibility%3Ahidden%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    3、display:none与visibility:hidden的区别？
  </h5>
  <blockquote>
    <p>这两个属性都是让元素隐藏，不可见。两者区别如下：</p>
    <p>（1）在渲染树中</p>
    <ul>
      <li>
        <span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >display:none会让元素完全从渲染树中消失，渲染时不会占据任何空间；</span
          ></span
        >
      </li>
      <li>
        <span style="color: #be191c"
          ><span style="background-color: #fef2f0"
            >visibility:hidden不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。</span
          ></span
        >
      </li>
    </ul>
    <p>（2）是否是继承属性</p>
    <ul>
      <li>
        display:none是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
      </li>
      <li>
        visibility:hidden是继承属性，子孙节点消失是由于继承了hidden，通过设置visibility:visible可以让子孙节点显示；
      </li>
    </ul>
    <p>
      （3）修改常规文档流中元素的 display
      通常会造成文档的重排，但是修改visibility属性只会造成本元素的重绘；<br />
      （4）如果使用读屏器，设置为display:none的内容不会被读取，设置为visibility:hidden的内容会被读取。
    </p>
    <p>
      （5）display：none
      隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。<br />
      （6）visibility：hidden 隐藏对应的元素，但是在文档布局中仍保留原来的空间。
    </p>
    <p>
      <img
        alt=""
        height="172"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/b00cb599cbc0ea3bcf6260323ff61e76.png"
        width="676"
      />
    </p>
    <p>
      <img
        alt=""
        height="166"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/285fff5bd557c912b5a5cbac885d4771.png"
        width="647"
      />
    </p>
    <p>
      <img
        alt=""
        height="244"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/c05ff7576f9b558e9bb8f8db69befc85.png"
        width="666"
      />
    </p>
  </blockquote>
</template>
<script setup></script>
<style lang=""></style>
