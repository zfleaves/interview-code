<template>
  <h5
    id="4%E3%80%81Vue3.0%E4%B8%AD%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9Fvue2%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"
  >
    4、Vue3.0中的<a
      href="https://so.csdn.net/so/search?q=%E5%93%8D%E5%BA%94%E5%BC%8F&amp;spm=1001.2101.3001.7020"
      title="响应式"
      target="_blank"
      >响应式</a
    >原理是什么？vue2的响应式原理是什么？
  </h5>
  <p><strong>vue2.x的响应式</strong></p>
  <ul>
    <li>
      实现原理：
      <ul>
        <li>
          对象类型：通过Object.defineProperty()对属性的读取、修改进行拦截（数据劫持）。
        </li>
        <li>
          数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。
        </li>
      </ul>
    </li>
  </ul>
  <p>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; Object.defineProperty(data, 'count', {<br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp;get () {&nbsp; },&nbsp;<br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp;set () {&nbsp;&nbsp;},<br />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; })
  </p>
  <ul>
    <li>
      存在问题：
      <ul>
        <li>新增属性、删除属性, 界面不会更新。</li>
        <li>直接通过下标修改数组, 界面不会自动更新。</li>
      </ul>
    </li>
  </ul>
  <p><strong>Vue3.0的响应式</strong></p>
  <ul>
    <li>
      实现原理:
      <ul>
        <li>
          通过Proxy（代理）: 拦截对象中任意属性的变化,
          包括：属性值的读写、属性的添加、属性的删除等。
        </li>
        <li>通过Reflect（反射）: 对源对象的属性进行操作。</li>
        <li>
          MDN文档中描述的Proxy与Reflect：
          <ul>
            <li>Proxy：Proxy - JavaScript | MDN</li>
            <li>Reflect：Reflect - JavaScript | MDN</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p>
    new Proxy(data, {<br />
    &nbsp; &nbsp; // 拦截读取属性值<br />
    &nbsp; &nbsp; get (target, prop) {<br />
    &nbsp; &nbsp; &nbsp; &nbsp; return Reflect.get(target, prop)<br />
    &nbsp; &nbsp; },<br />
    &nbsp; &nbsp; // 拦截设置属性值或添加新属性<br />
    &nbsp; &nbsp; set (target, prop, value) {<br />
    &nbsp; &nbsp; &nbsp; &nbsp; return Reflect.set(target, prop, value)<br />
    &nbsp; &nbsp; },<br />
    &nbsp; &nbsp; // 拦截删除属性<br />
    &nbsp; &nbsp; deleteProperty (target, prop) {<br />
    &nbsp; &nbsp; &nbsp; &nbsp; return Reflect.deleteProperty(target, prop)<br />
    &nbsp; &nbsp; }<br />
    })<br />
    &ZeroWidthSpace;<br />
    proxy.name = 'tom' &nbsp;&nbsp;
  </p>
  <ul>
    <li>
      vue3响应式数据的判断
      <ul>
        <li>isRef: 检查一个值是否为一个 ref 对象</li>
        <li>isReactive: 检查一个对象是否是由 reactive 创建的响应式代理</li>
        <li>isReadonly: 检查一个对象是否是由 readonly 创建的只读代理</li>
        <li>
          isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
