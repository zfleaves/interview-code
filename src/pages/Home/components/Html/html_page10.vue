<template>
  <h5
    id="8%E3%80%81iframe%E6%9C%89%E5%93%AA%E4%BA%9B%E4%BC%98%E7%BC%BA%E7%82%B9%20%EF%BC%9F"
  >
    10、<a
      href="https://so.csdn.net/so/search?q=iframe&amp;spm=1001.2101.3001.7020"
      title="iframe"
       target="_blank"
      >iframe</a
    >的优点和缺点 ？
  </h5>
  <p>
    <span style="color: #be191c"
      ><strong
        ><span style="background-color: #fef2f0">iframe的缺点：</span></strong
      ></span
    >
  </p>
  <ol>
    <li>页面样式调试麻烦，出现多个滚动条；</li>
    <li>浏览器的后退按钮失效；</li>
    <li>过多会增加服务器的HTTP请求；</li>
    <li>小型的移动设备无法完全显示框架；</li>
    <li>产生多个页面，不易管理；</li>
    <li>不容易打印；</li>
    <li>代码复杂，无法被一些搜索引擎解读。</li>
    <li>搜索引擎的检索程序无法解读这种页面，不利于SEO;</li>
  </ol>
  <p>
    <span style="color: #be191c"
      ><strong
        ><span style="background-color: #fef2f0">iframe的优点：</span></strong
      ></span
    >
  </p>
  <ol>
    <li>iframe能够原封不动的把嵌入的网页展现出来。</li>
    <li>
      如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
    </li>
    <li>
      网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
    </li>
    <li>
      如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。
    </li>
    <li>
      重载页面时不需要重载整个页面，只需要重载页面中的一个框架页(减少了数据的传输，增加了网页下载速度)
    </li>
  </ol>
  <p><strong>总而言之：</strong></p>
  <ul>
    <li>运维性网站或继承性开发的网站，可以使用iframe;</li>
    <li>销售内，官网、展示性网站等建议不使用iframe;</li>
    <li>标准的网页设计是不使用iframe的。</li>
  </ul>
</template>
<script setup></script>
<style lang="scss"></style>
