<template>
  <h5
    id="%C2%A018%E3%80%81%E6%89%93%E5%8D%B0%E6%8E%A7%E5%88%B6%E5%8F%B0%EF%BC%8C%E5%87%BA%E7%8E%B0%E6%A0%88%E6%BA%A2%E5%87%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%EF%BC%9F"
  >
    19、栈溢出及解决方法&#xff1f;
  </h5>
  <blockquote>
    <p><strong>栈溢出(stack Overflow)</strong></p>
    <ul>
      <li>
        缓冲区溢出是由于C语言系列设有内置检查机制来确保复制到缓冲区的数据不得大于缓冲区的大小&#xff0c;因此当这个数据足够大的时候&#xff0c;将会溢出缓冲区的范围。
      </li>
      <li>
        <p>
          <span style="color: #be191c"
            ><span style="background-color: #fef2f0"
              >栈溢出就是缓冲区溢出的一种。</span
            ></span
          >
          由于缓冲区溢出而使得有用的存储单元被改写,
          往往会引发不可预料的后果。程序在运行过程中&#xff0c;为了临时存取数据的需要&#xff0c;一般都要分配一些内存空间&#xff0c;通常称这些空间为缓冲区。如果向缓冲区中写入超过其本身长度的数据&#xff0c;以致于缓冲区无法容纳&#xff0c;就会造成缓冲区以外的存储单元被改写&#xff0c;这种现象就称为缓冲区溢出。缓冲区长度一般与用户自己定义的缓冲变量的类型有关。
        </p>
      </li>
      <li>
        <p>
          <span style="color: #be191c"
            ><span style="background-color: #fef2f0"
              >由于缓冲区溢出而使得有用的存储单元被改写&#xff0c;</span
            ></span
          >往往会引发不可预料的后果。向这些单元写入任意的数据&#xff0c;一般只会导致程序崩溃之类的事故&#xff0c;对这种情况我们也至多说这个程序有Bug。但如果向这些单元写入的是精心准备好的数据&#xff0c;就可能使得程序流程被劫持&#xff0c;致使不希望的代码被执行&#xff0c;落入攻击者的掌控之中&#xff0c;这就不仅仅是bug&#xff0c;而是漏洞(exploit)了。
        </p>
      </li>
    </ul>
    <p><strong>栈溢出的解决方法</strong></p>
    <ul>
      <li>
        减少栈空间的需求&#xff0c;<span style="color: #be191c"
          ><code
            ><span style="background-color: #fef2f0"
              >不要定义占用内存较多的auto变量</span
            ></code
          ></span
        >&#xff0c;应该将此类变量修改成指针&#xff0c;<span style="color: #be191c"
          ><code
            ><span style="background-color: #fef2f0"
              >从堆空间分配内存</span
            ></code
          ></span
        >。
      </li>
      <li>
        函数参数中不要传递大型结构/联合/对象&#xff0c;应该使用<span
          style="color: #be191c"
          ><code
            ><span style="background-color: #fef2f0"
              >引用或指针作为函数参数</span
            ></code
          ></span
        >。
      </li>
      <li>
        减少函数调用层次&#xff0c;<span style="color: #be191c"
          ><code
            ><span style="background-color: #fef2f0">慎用递归函数</span></code
          ></span
        >&#xff0c;例如A-&gt;B-&gt;C-&gt;A环式调用。
      </li>
    </ul>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
