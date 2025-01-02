<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%916.HTML5%20%E5%AD%98%E5%82%A8%E7%B1%BB%E5%9E%8B%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    5、<strong>localStorage、sessionStorage、cookie 三者明细区别</strong>？
  </h5>
  <p style="text-align: center">
    <img
      alt=""
      height="267"
      src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/17cf0c07ccca23789dd68b2eb011d59f.webp?x-image-process=image/format,png"
      width="641"
    />
  </p>
  <blockquote>
    <ol>
      <li>
        cookie是网站为了标示用户身份而储存在用户本地终端（Client
        Side）上的数据（通常经过加密）。
      </li>
      <li>
        cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
      </li>
      <li>
        sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
      </li>
    </ol>
    <p><strong>存储大小</strong></p>
    <ul>
      <li>cookie数据大小不能超过4k。</li>
      <li>
        sessionStorage和localStorage
        虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
      </li>
    </ul>
    <p><strong>有期时间</strong></p>
    <ul>
      <li>
        localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
      </li>
      <li>sessionStorage 数据在当前浏览器窗口关闭后自动删除。</li>
      <li>cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭</li>
    </ul>
  </blockquote>
</template>
<script setup></script>
<style lang="scss"></style>
