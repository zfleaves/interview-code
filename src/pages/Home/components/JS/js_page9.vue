<template>
  <h5 id="%F0%9F%8D%878%E3%80%81nextTick%E7%9A%84%E5%AE%9E%E7%8E%B0">
    9、nextTick的实现&#xff1f;
  </h5>
  <blockquote>
    <ul>
      <li>
        <code
          >nextTick是Vue提供的一个全局API,是在下次DOM更新循环结束之后执行延迟回调&#xff0c;在修改数据之后使用$nextTick&#xff0c;<span
            style="color: #1c7331"
            >则可以在回调中获取更新后的DOM。</span
          ></code
        >
      </li>
      <li>
        <code
          >Vue在更新DOM时是异步执行的。只要侦听到数据变化&#xff0c;Vue将开启1个队列&#xff0c;并缓冲在同一事件循环中发生的所有数据变更。如果同一个watcher被多次触发&#xff0c;只会被推入到队列中-次。这种在缓冲时去除重复数据对于避免不必要的计算和DOM操作是非常重要的。nextTick方法会在队列中加入一个回调函数&#xff0c;确保该函数在前面的dom操作完成后才调用</code
        >
      </li>
      <li>
        <code
          >比如&#xff0c;我在干什么的时候就会使用nextTick&#xff0c;传一个回调函数进去&#xff0c;在里面执行dom操作即可。</code
        ><code
          >简单了解nextTick的实现&#xff0c;它会在callbacks里面加入我们传入的函数&#xff0c;然后用timerFunc异步方式调用它们&#xff0c;首选的异步方式会是Promise。这让我明白了为什么可以在nextTick中看到dom操作结果。</code
        >
      </li>
      <li>
        <p>
          <strong>实现原理&#xff1a;</strong>在下次 DOM
          更新循环结束之后执行延迟回调&#xff0c;在修改数据之后立即使用 nextTick
          来获取更新后的 DOM。 nextTick主要使用了宏任务和微任务。
          根据执行环境分别尝试采用Promise、MutationObserver、setImmediate&#xff0c;如果以上都不行则采用setTimeout定义了一个异步方法&#xff0c;多次调用nextTick会将方法存入队列中&#xff0c;通过这个异步方法清空当前队列。
        </p>
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
