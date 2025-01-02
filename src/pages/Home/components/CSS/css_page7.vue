<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%917.CSS3%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B"
  >
    7、<strong>CSS3盒子模型：</strong
    ><span style="color: #000008"><strong>标准盒模型、怪异盒模型</strong></span>
  </h5>
  <p>
    <span style="color: #be191c"
      ><strong
        ><span style="background-color: #fef2f0"
          >盒子模型分为两种:
        </span></strong
      ></span
    >
  </p>
  <ul>
    <li>
      <span style="color: #000008"
        >第一种是 W3C 标准的盒子模型（标准盒模型）
      </span>
    </li>
    <li>
      <span style="color: #000008"
        >第二种 IE 标准的盒子模型（怪异盒模型）
      </span>
    </li>
  </ul>
  <p>
    <span style="color: #000008"
      ><strong>标准盒模型与怪异盒模型的表现效果的区别之处： </strong></span
    >
  </p>
  <p>
    <span style="color: #000008"
      >1、标准盒模型中 width 指的是内容区域 content 的宽度
    </span>
  </p>
  <p>
    <span style="color: #000008">height 指的是内容区域 content 的高度 </span>
  </p>
  <p>
    <span style="color: #be191c"
      ><strong
        ><span style="background-color: #fef2f0"
          >标准盒模型下盒子的大小 = content + border + padding + margin</span
        ></strong
      ></span
    >
  </p>
  <p style="text-align: center">
    <img
      alt=""
      height="445"
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/df364113825ef32a634fb6fe3dc57d76.png"
      width="730"
    />
  </p>
  <p></p>
  <p>
    <span style="color: #000008"
      >2、怪异盒模型中的 width 指的是内容、边框、内边距总的宽度（content +
      border + padding）；height 指的是内容、边框、内边距总的高度</span
    >
  </p>
  <p>
    <span style="color: #be191c"
      ><span style="background-color: #fef2f0"
        >怪异盒模型下盒子的大小=width（content + border + padding） +
        margin</span
      ></span
    >
  </p>
  <p style="text-align: center">
    <img
      alt=""
      height="413"
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/f3e8227cbb0ebfe001563e0216df364b.png"
      width="707"
    />
  </p>
  <p>
    <span style="color: #000008"
      >除此之外，我们还可以通过属性 box-sizing 来设置盒子模型的解析模式
    </span>
  </p>
  <p><span style="color: #000008">可以为 box-sizing 赋两个值：</span></p>
  <p>
    <span style="color: #000008">1、</span
    ><span style="color: #be191c"
      ><strong
        ><span style="background-color: #fef2f0"
          >box-sizing: content-box</span
        ></strong
      ></span
    ><span style="color: #000008"
      >：默认值，border 和 padding 不算到 width 范围内，可以理解为是 W3c
      的标准模型(default)。<strong
        >总宽=width+padding+border+margin
      </strong></span
    >
  </p>
  <p>
    <span style="color: #000008">2、</span
    ><span style="color: #be191c"
      ><strong
        ><span style="background-color: #fef2f0"
          >box-sizing: border-box</span
        ></strong
      ></span
    ><span style="color: #000008"
      >：border 和 padding 划归到 width 范围内，可以理解为是 IE
      的怪异盒模型，<strong>总宽=width+margin</strong></span
    >
  </p>
  <ul>
    <li>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >相邻块元素垂直外边距的合并
          </span></strong
        ></span
      >
    </li>
  </ul>
  <p style="margin-left: 0.0001pt; text-align: justify">
    <img
      alt=""
      height="267"
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/7787f921ebd42f643c5d30c884bc7b86.png"
      width="710"
    />
  </p>
  <ul>
    <li
      id="2.%E5%B5%8C%E5%A5%97%E5%9D%97%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%A4%96%E8%BE%B9%E8%B7%9D%E7%9A%84%E5%A1%8C%E9%99%B7"
      style="text-align: justify"
    >
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >嵌套块元素垂直外边距的塌陷</span
          ></strong
        ></span
      >
    </li>
  </ul>
  <p>
    <img
      alt=""
      height="218"
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/0dcc15e63b2372bace293e0a950c8228.png"
      width="679"
    />
  </p>
</template>
<script setup></script>
<style lang=""></style>
