<template>
  <h5 id="articleContentId">3、React的Hooks详解</h5>
  <ul>
    <li><strong>Hook是什么</strong></li>
  </ul>
  <p>
    Hook 是一些可以让你在函数组件里“钩入” React state
    及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class
    也能使用 React。<br />
    React 内置了一些像 useState 这样的 Hook。你也可以创建你自己的 Hook
    来复用不同组件之间的状态逻辑。
  </p>
  <p>
    React提供了多个常用的Hooks，用于在函数组件中管理状态、处理副作用和访问React的上下文等。以下是React所有的常用Hooks列表：
  </p>
  <ol>
    <li>useState：用于在函数组件中添加状态。</li>
    <li>useEffect：用于在函数组件中执行副作用操作。</li>
    <li>useContext：用于在函数组件中访问React的上下文。</li>
    <li>useReducer：用于在函数组件中使用Reducer模式来管理状态。</li>
    <li>useRef：用于在函数组件中创建可变的引用。</li>
    <li>useMemo：用于在函数组件中缓存计算的值。</li>
    <li>useCallback：用于在函数组件中缓存函数。</li>
    <li>useLayoutEffect：类似于useEffect，但在DOM更新之后同步执行。</li>
    <li>useImperativeHandle：用于在函数组件中自定义外部组件实例的暴露。</li>
    <li>useDebugValue：用于在自定义Hooks中显示自定义的调试值。</li>
  </ol>
  <p>
    这些Hooks可以帮助你更方便地编写和管理React函数组件。同时，你还可以根据需要自定义自己的Hooks来封装和复用逻辑。React的Hooks特性在React
    16.8版本及其之后引入，它们提供了一种更简洁、灵活的方式来编写可复用的React组件逻辑。
  </p>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
