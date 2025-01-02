<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9110%E3%80%81%E5%88%97%E4%B8%BE%E5%92%8C%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C%E7%9B%B8%E5%85%B3%E7%9A%84%E6%96%B9%E6%B3%95"
  >
    11、js列举和数组操作相关的方法(常用)
  </h5>
  <blockquote>
    <p>
      在JavaScript中&#xff0c;数组操作是编程的常见任务之一。JavaScript提供了一系列与数组操作相关的方法&#xff0c;这些方法可以用来操纵数组&#xff0c;如添加、删除、查找、排序和遍历元素等。以下是一些常用的数组方法&#xff1a;
    </p>
    <h4>添加元素</h4>
    <ul>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">push()</span></code
            ></strong
          ></span
        >: 在数组的<span style="color: #fe2c24">末尾</span
        >添加一个或多个元素&#xff0c;并返回新的长度。
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">unshift()</span></code
            ></strong
          ></span
        >: 在数组的<span style="color: #fe2c24">开头</span
        >添加一个或多个元素&#xff0c;并返回新的长度。
      </li>
    </ul>
    <h4>删除元素</h4>
    <ul>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">pop()</span></code
            ></strong
          ></span
        >: 删除数组的<span style="color: #fe2c24">最后一个元素</span
        >&#xff0c;并返回那个元素。
      </li>
      <li>
        <strong
          ><span style="color: #be191c"
            ><code
              ><span style="background-color: #fef2f0">shift()</span></code
            ></span
          ></strong
        >: 删除数组的<span style="color: #fe2c24">第一个元素</span
        >&#xff0c;并返回那个元素。
      </li>
      <li>
        <strong
          ><span style="color: #be191c"
            ><code
              ><span style="background-color: #fef2f0">splice()</span></code
            ></span
          ></strong
        >: 通过删除、替换或添加新元素来改变数组的内容。
      </li>
    </ul>
    <h4>查找元素</h4>
    <ul>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">indexOf()</span></code
            ></strong
          ></span
        >: 查找元素在数组中的<span style="color: #fe2c24">索引</span>。
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0"
                >lastIndexOf()</span
              ></code
            ></strong
          ></span
        >: 从数组的末尾开始查找元素。
      </li>
      <li>
        <strong
          ><span style="color: #be191c"
            ><code
              ><span style="background-color: #fef2f0">find()</span></code
            ></span
          ></strong
        >: 查找<span style="color: #fe2c24">第一个满足测试函数的元素</span>。
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">findIndex()</span></code
            ></strong
          ></span
        >: 查找<span style="color: #fe2c24">第一个满足测试函数的元素的索引</span
        >。
      </li>
    </ul>
    <h4>排序和翻转</h4>
    <ul>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">sort()</span></code
            ></strong
          ></span
        >: 对数组元素进行排序。
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">reverse()</span></code
            ></strong
          ></span
        >: 颠倒反转数组中元素的顺序。
      </li>
    </ul>
    <h4>遍历和过滤</h4>
    <ul>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">forEach()</span></code
            ></strong
          ></span
        >: 对数组的每个元素执行一次提供的函数。
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">map()</span></code
            ></strong
          ></span
        >:
        创建一个新数组&#xff0c;其结果是该数组中的每个元素都调用一次提供的函数后的返回值。
      </li>
      <li>
        <strong
          ><span style="color: #be191c"
            ><code
              ><span style="background-color: #fef2f0">filter()</span></code
            ></span
          ></strong
        >: 创建一个新数组&#xff0c;包含通过所提供函数实现的测试的所有元素。
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">reduce()</span></code
            ></strong
          ></span
        >:
        对数组中的每个元素执行一个由您提供的reducer函数&#xff08;升序执行&#xff09;&#xff0c;将其结果汇总为单个返回值。
      </li>
      <li>
        <code>reduceRight()</code>:
        类似<code>reduce()</code>&#xff0c;但是从数组的末尾开始累加。
      </li>
    </ul>
    <h4>归并数组</h4>
    <ul>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">concat()</span></code
            ></strong
          ></span
        >: 合并两个或多个数组。
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">slice()</span></code
            ></strong
          ></span
        >: 提取原数组的一部分&#xff0c;返回一个新数组。
      </li>
    </ul>
    <h4>其它方法</h4>
    <ul>
      <li>
        <strong
          ><span style="color: #be191c"
            ><code
              ><span style="background-color: #fef2f0">join()</span></code
            ></span
          ></strong
        >:
        将数组&#xff08;或一个类数组对象&#xff09;的所有元素连接成一个字符串并返回这个字符串。
      </li>
      <li>
        <span style="color: #be191c"
          ><strong
            ><code
              ><span style="background-color: #fef2f0">toString()</span></code
            ></strong
          ></span
        >: 返回一个表示数组内容的字符串。
      </li>
      <li>
        <strong
          ><span style="color: #be191c"
            ><span style="background-color: #fef2f0">split</span
            ><code
              ><span style="background-color: #fef2f0">()</span></code
            ></span
          ></strong
        >: 把字符串转换成数组。
      </li>
      <li>
        <code>toLocaleString()</code>: 返回一个表示数组内容的本地化字符串。
      </li>
    </ul>
    <p>
      这些方法可以在日常编程中大大简化数组操作的复杂性。使用这些方法时&#xff0c;需要注意它们的返回值和副作用。例如&#xff0c;<code
        >push</code
      >
      和 <code>pop</code> 方法会改变原数组&#xff0c;而
      <code>concat</code>
      方法则会返回一个新数组。在编写代码时&#xff0c;了解这些方法的特性对于避免不必要的错误和优化性能至关重要。
    </p>
    <p>
      <img
        alt=""
        height="156"
        src="https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/blog_migrate/2742b1d29c9ef51914820711b7085dd5.png"
        width="635"
      />
    </p>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
