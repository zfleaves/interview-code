<template>
  <h5
    id="5%E3%80%81uniapp%20%E5%BA%94%E7%94%A8%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E3%80%81%E9%A1%B5%E9%9D%A2%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E3%80%81%E7%BB%84%E4%BB%B6%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"
  >
    5、uniapp 应用的生命周期、页面的生命周期、组件的生命周期
  </h5>
  <blockquote>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">应用的生命周期</span></span
      >
    </p>
    <ul>
      <li>onLaunch——当uni-app 初始化完成时触发（全局只触发一次）</li>
      <li>onShow——当 uni-app 启动，或从后台进入前台显示</li>
      <li>onHide——当 uni-app 从前台进入后台</li>
      <li>onError——当 uni-app 报错时触发</li>
      <li>
        onUniNViewMessage——对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue
        通讯
      </li>
      <li>
        onUnhandledRejection——对未处理的 Promise 拒绝事件监听函数（2.8.1+）
      </li>
      <li>onPageNotFound——页面不存在监听函数</li>
      <li>onThemeChange——监听系统主题变化&nbsp;</li>
    </ul>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">页面的生命周期</span></span
      >
    </p>
    <ul>
      <li>
        onInit——监听页面初始化，其参数同 onLoad
        参数，为上个页面传递的数据，参数类型为
        Object（用于页面传参），触发时机早于 onLoad
      </li>
      <li>
        onLoad——监听页面加载，其参数为上个页面传递的数据，参数类型为
        Object（用于页面传参），参考示例
      </li>
      <li>
        onShow——监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
      </li>
      <li>
        onReady——监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
      </li>
      <li>onHide——监听页面隐藏</li>
      <li>onUnload——监听页面卸载</li>
      <li>onResize——监听窗口尺寸变化</li>
    </ul>
    <p>
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">组件的生命周期</span></span
      ><br />
      uni-app 组件支持的生命周期，与vue标准组件的生命周期相同
    </p>
    <ul>
      <li>beforeCreate——在实例初始化之后被调用。</li>
      <li>created——在实例创建完成后被立即调用。</li>
      <li>beforeMount——在挂载开始之前被调用。</li>
      <li>
        mounted——挂载到实例上去之后调用。详见
        注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTickVue官方文档
      </li>
      <li>beforeUpdate——数据更新时调用，发生在虚拟 DOM 打补丁之前。</li>
      <li>
        updated——由于数据更改导致的虚拟 DOM
        重新渲染和打补丁，在这之后会调用该钩子。
      </li>
      <li>beforeDestroy——实例销毁之前调用。在这一步，实例仍然完全可用。</li>
      <li>
        destroyed——Vue 实例销毁后调用。调用后，Vue
        实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
