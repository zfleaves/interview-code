<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%915%E3%80%81BFC%20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%C2%A0"
  >
    <strong>5、</strong><span style="color: #000008">BFC 是什么？</span>&nbsp;
  </h5>
  <blockquote>
    <ul>
      <li>
        <span style="color: #be191c"
          ><strong
            ><span style="background-color: #fef2f0">定义 </span></strong
          ></span
        >
      </li>
    </ul>
    <p>
      <span style="color: #000008"
        ><strong>BFC (Block formatting context)&nbsp;</strong
        >直译为&nbsp;<strong>"块级格式化上下文"</strong>。它是一个独立的渲染区域，
      </span>
    </p>
    <p>
      <span style="color: #000008"
        >只有 Block-level box 参与，它规定了内部的 Block-level Box
        如何布局，并且与这个区
      </span>
    </p>
    <p><span style="color: #000008">域外部毫不相干。</span></p>
    <p>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0">布局规则 </span></strong
        ></span
      >
    </p>
    <ul>
      <li>
        <span style="color: #000008"
          >1、内部的 Box 会在垂直方向，一个接一个地放置
        </span>
      </li>
      <li>
        <span style="color: #000008"
          >2、Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的
          margin
        </span>
      </li>
      <li><span style="color: #000008">会发生重叠 </span></li>
      <li>
        <span style="color: #000008"
          >3、每个元素的 margin box 的左边， 与包含块 border box
          的左边相接触(对于从左往
        </span>
      </li>
      <li>
        <span style="color: #000008"
          >右的格式化，否则相反)。即使存在浮动也是如此
        </span>
      </li>
      <li>
        <span style="color: #000008">4、BFC 的区域不会与 float box 重叠 </span>
      </li>
      <li>
        <span style="color: #000008"
          >5、BFC
          就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反</span
        ><span style="color: #000008">之也如此 </span>
      </li>
      <li>
        <span style="color: #000008"
          >6、计算 BFC 的高度时，浮动元素也参与计算
        </span>
      </li>
    </ul>
    <p>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >哪些元素会生成 BFC</span
          ></strong
        ></span
      >
    </p>
    <ul>
      <li><span style="color: #000008">1、根元素 </span></li>
      <li><span style="color: #000008">2、float 属性不为 none </span></li>
      <li>
        <span style="color: #000008">3、position 为 absolute 或 fixed </span>
      </li>
      <li>
        <span style="color: #000008"
          >4、display 为 inline-block， table-cell， table-caption， flex，
          inline-flex
        </span>
      </li>
      <li><span style="color: #000008">5、overflow 不为 visible</span></li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
