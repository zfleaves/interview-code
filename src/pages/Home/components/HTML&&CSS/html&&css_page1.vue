<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%911%E3%80%81%20Localstorage%E3%80%81sessionStorage%E3%80%81cookie%20%E7%9A%84%E5%8C%BA%E5%88%AB"
  >
    <strong>1、</strong
    ><span style="color: #000008"
      >Localstorage、sessionStorage、cookie 的区别</span
    >
  </h5>
  <blockquote>
    <p>
      <span style="color: #000008"><strong>共同点：</strong></span
      ><span style="color: #000008">都是保存在浏览器端、且同源的 </span>
    </p>
    <p><span style="color: #000008">三者区别： </span></p>
    <p>
      <span style="color: #000008"
        >1、cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie
        在浏览器和服务器
      </span>
    </p>
    <p>
      <span style="color: #000008"
        >间来回传递，而 sessionStorage 和 localStorage
        不会自动把数据发送给服务器，仅在本地保存。 cookie
        数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下
      </span>
    </p>
    <p>
      <span style="color: #000008"
        >2、存储大小限制也不同，cookie 数据不能超过 4K，同时因为每次 http
        请求都会携带 cookie、 所以 cookie
        只适合保存很小的数据，如会话标识。sessionStorage 和 localStorage
        虽然也有存 储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。</span
      >
    </p>
    <p><span style="color: #000008">3、数据有效期不同</span></p>
    <p>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >sessionStorage：仅在当前浏览器窗口关闭之前有效；</span
          ></strong
        ></span
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；</span
          ></strong
        ></span
      >
    </p>
    <p>
      <span style="color: #be191c"
        ><strong
          ><span style="background-color: #fef2f0"
            >cookie：只在设置的 cookie
            过期时间之前有效，即使窗口关闭或浏览器关闭
          </span></strong
        ></span
      >
    </p>
    <p><span style="color: #000008">4、作用域不同</span></p>
    <p>
      <span style="color: #000008"
        >sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面；</span
      >
    </p>
    <p>
      <span style="color: #000008"
        >localstorage 在所有同源窗口中都是共享的；</span
      >
    </p>
    <p>
      <span style="color: #000008">cookie 也是在所有同源窗口中都是共享的 </span>
    </p>
    <p>
      <span style="color: #000008"
        >5、web Storage
        支持事件通知机制，可以将数据更新的通知发送给监听者。</span
      >
    </p>
    <p>
      <span style="color: #000008">6、web Storage 的 api 接口使用更方便。</span>
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
