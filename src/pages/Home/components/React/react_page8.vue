<template>
  <h5
    id="8%E3%80%81%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3React%20State%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%80%A7%E7%9A%84%E5%8E%9F%E5%88%99"
  >
    8、如何理解React State不<a
      href="https://so.csdn.net/so/search?q=%E5%8F%AF%E5%8F%98%E6%80%A7&amp;spm=1001.2101.3001.7020"
      title="可变性" target="_blank"
      >可变性</a
    >的原则
  </h5>
  <p>
    在 React 中，不可变性是指数据一旦被创建，就不能被修改。React
    推崇使用不可变数据的原则，这意味着在更新数据时，应该创建新的数据对象而不是直接修改现有的数据。
  </p>
  <p><strong>以下是理解 React 中不可变性原则的几个关键点：</strong></p>
  <ol>
    <li>
      <strong>数据一旦创建就不能被修改：</strong>在 React 中，组件的状态（<span
        style="color: #be191c"
        ><span style="background-color: #fef2f0">state</span></span
      >）和属性（<span style="color: #be191c"
        ><span style="background-color: #fef2f0">props</span></span
      >）应该被视为不可变的。一旦创建了状态或属性对象，就不应该直接修改它们的值。这样可以确保组件的数据在更新时是不可变的，从而避免意外的数据改变和副作用。
    </li>
    <li>
      <strong>创建新的数据对象：</strong
      >当需要更新状态或属性时，应该创建新的数据对象。这可以通过使用对象展开运算符、数组的
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">concat()、slice()</span></span
      >
      等方法，或者使用不可变数据库（如<span style="color: #be191c"
        ><span style="background-color: #fef2f0">Immutable.js</span></span
      >、<span style="color: #be191c"
        ><span style="background-color: #fef2f0">Immer </span></span
      >等）来创建新的数据副本。
    </li>
    <li>
      <strong>比较数据变化：</strong>React 使用
      <span style="color: #be191c"
        ><span style="background-color: #fef2f0">Virtual DOM </span></span
      >来比较前后两个状态树的差异，并仅更新需要更新的部分。通过使用不可变数据，React
      可以更高效地进行比较，因为它可以简单地比较对象引用是否相等，而不必逐个比较对象的属性。
    </li>
    <li>
      <strong>性能优化：</strong>使用不可变数据可以带来性能上的优势。由于 React
      可以更轻松地比较前后状态的差异，可以减少不必要的重新渲染和组件更新，提高应用的性能和响应性。
    </li>
  </ol>
  <p><strong>不可变性的原则在 React 中有以下好处：</strong></p>
  <ol>
    <li>
      <strong>简化数据变更追踪：</strong
      >由于数据不可变，可以更轻松地追踪数据的变化。这样可以更好地理解代码的行为和数据的流动。
    </li>
    <li>
      <strong>避免副作用：</strong>可变数据容易引发副作用和难以追踪的
      bug。通过使用不可变数据，可以避免许多与副作用相关的问题。
    </li>
    <li>
      <strong>方便的历史记录和回滚：</strong
      >不可变数据使得记录和回滚应用状态的历史变得更容易。可以在不改变原始数据的情况下，创建和保存不同时间点的数据快照
    </li>
  </ol>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
