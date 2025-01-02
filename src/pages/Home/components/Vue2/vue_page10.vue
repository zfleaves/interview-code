<template>
  <h5
    id="10%E3%80%81vue%E4%B8%ADhash%E5%92%8Chistory%E7%9A%84%E5%8C%BA%E5%88%AB%C2%A0%EF%BC%9F%C2%A0%C2%A0"
  >
    <strong>10、</strong>vue中hash和history的区别&nbsp;？&nbsp;&nbsp;
  </h5>
  <blockquote>
    <p>Vue-router的路由分为hash和history模式</p>
    <p><strong>1、hash方式</strong></p>
    <ul>
      <li>hash方式是指url中存在 # 的一种方式，是vueRouter的默认模式，</li>
      <li>
        当#后面的url地址发生变化时，浏览器不会向服务器发送请求，故不会刷新页面
      </li>
      <li>
        当#后面的url地址发生变化时，会触发hashChange（hash模式得核心实现原理）事件，从而，我们可以通过监听hashChange事件来知道路由发生变化，从而进一步去更新我们的页面
      </li>
      <li>只可修改hash部分，</li>
      <li>
        当浏览器刷新时，浏览器只会向服务器去请求#
        前面的域名服务器下根目录下的index.html文件
      </li>
      <li>
        hash模式会创建hashHistory对象,hashHistory对象有两个方法，push() 和
        replace()
      </li>
      <li>
        HashHistory.push()会将新的路由添加到浏览器访问的历史的栈顶,而HasHistory.replace()会替换到当前栈顶的路由
      </li>
    </ul>
    <p><strong>2、history模式</strong></p>
    <ul>
      <li>
        history模式得路由和域名之间直接通过/连接，无#符分隔，就是普通url形式
      </li>
      <li>
        history模式当发生路由跳转时，通过HTML5的history.pushState()方法或者history.replaceState()
        方法改变地址栏地址，并将地址的改变记录到浏览器访问栈中。（这里有一点需要注意，它只改变了浏览器地址栏中的地址，但并不会像服务器去发送请求）
      </li>
      <li>
        当浏览器前进，后台，或者调用back(),forward(),
        go()等方法时，会触发popstate事件。故，我们可以通过监听popstate事件来获取最新的路由地址，从而更新页面
      </li>
      <li>通过pushstate() 修改的url可以是与当前url同源的任意url。</li>
      <li>需要和服务器配合使用，否则容易出现页面404的情况</li>
    </ul>
    <p><strong>总结如下：</strong></p>
    <ol>
      <li>hash模式带#号比较丑，history模式比较优雅；</li>
      <li>
        pushState设置的新的URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，故只可设置与当前同文档的URL；
      </li>
      <li>
        pushState设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发记录添加到栈中；
      </li>
      <li>
        pushState通过stateObject可以添加任意类型的数据到记录中；而hash只可添加短字符串；
      </li>
      <li>pushState可额外设置title属性供后续使用；</li>
      <li>hash兼容IE8以上，history兼容IE10以上；</li>
      <li>
        history模式需要后端配合将所有访问都指向index.html，否则用户刷新页面，会导致404错误。
      </li>
    </ol>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
