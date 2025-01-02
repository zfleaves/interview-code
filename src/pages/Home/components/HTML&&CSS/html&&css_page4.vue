<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%914%E3%80%81img%20%E7%9A%84%20alt%20%E4%B8%8E%20title%20%E7%9A%84%E5%BC%82%E5%90%8C%EF%BC%8C%E8%BF%98%E6%9C%89%E5%AE%9E%E7%8E%B0%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD%E7%9A%84%E5%8E%9F%E7%90%86%EF%BC%9F"
  >
    <strong>4、</strong
    ><span style="color: #000008"
      >img 的 alt 与 title 的异同，还有实现图片懒加载的原理</span
    ><span style="color: #000000">？</span>
  </h5>
  <blockquote>
    <ul>
      <li>
        <span style="color: #000008"><strong>异同 </strong></span>
      </li>
    </ul>
    <p>
      <span style="color: #000008"
        >alt 是图片加载失败时，显示在网页上的替代文字； title
        是鼠标放上面时显示的文字,title
      </span>
    </p>
    <p><span style="color: #000008">是对图片的描述与进一步说明; </span></p>
    <p>
      <span style="color: #000008"
        >这些都是表面上的区别，alt 是 img 必要的属性，而 title 不是 对于网站 seo
        优化来说，title 与 alt 还有最重要的一点： 搜索引擎对图片意思的判断，主
        要靠 alt 属性。所以在图片 alt
        属性中以简要文字说明，同时包含关键词，也是页面优化的
        一部分。条件允许的话，可以在 title 属性里，进一步对图片说明
        由于过多的图片会严重影响网页的加载速度，并且移动网络下的流量消耗巨大，所以
        说延迟加载几乎是标配了。</span
      >
    </p>
    <ul>
      <li>
        <span style="color: #000008"><strong>原理 </strong></span>
      </li>
    </ul>
    <p>
      <span style="color: #000008"
        >图片懒加载的原理很简单，就是我们先设置图片的 data-set
        属性（当然也可以是其他任意的， 只要不会发送 http
        请求就行了，作用就是为了存取值）值为其图片路径，由于不是 src，所
        以不会发送 http 请求。 然后我们计算出页面 scrollTop
        的高度和浏览器的高度之和， 如果 图片距离页面顶端的坐标
        Y（相对于整个页面，而不是浏览器窗口）小于前两者之和，就说明图片就要显示出来了（合适的时机，当然也可以是
        其他情况），这时候我们再将data-set 属性替换为 src 属性即可。</span
      >
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
