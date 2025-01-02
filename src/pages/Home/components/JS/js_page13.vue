<template>
  <h5
    id="%E2%80%8B%E7%BC%96%E8%BE%9112%E3%80%81js%E4%B8%AD%E2%80%9C%3D%3D%3D%E2%80%9D%20%E5%92%8C%20%E2%80%9C%3D%3D%E2%80%9D%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9F"
  >
    <span style="color: #000000">13、</span>JS中
    “&#61;&#61;“和“&#61;&#61;&#61;“的区别详解
  </h5>
  <blockquote>
    <div>
      <p>
        <span style="color: #000008"><strong>区别 </strong></span>
      </p>
      <ol>
        <li>
          <span style="color: #be191c"
            ><strong
              ><span style="background-color: #fef2f0"
                >&#61;&#61;&#61;</span
              ></strong
            ></span
          ><span style="color: #000008"
            >&#xff1a;三个等号我们称为等同符&#xff0c;当等号两边的值为相同类型的时候&#xff0c;直接比较等号两边 </span
          ><span style="color: #000008"
            >的值&#xff0c;值相同则返回
            true&#xff0c;若等号两边的值类型不同时直接返回 false。</span
          ><span style="color: #000008">也就是说三个等号</span
          ><span style="color: #be191c"
            ><span style="background-color: #fef2f0"
              >既要判断值也要判断类型是否相等</span
            ></span
          ><span style="color: #000008">。</span>
        </li>
        <li>
          <span style="color: #be191c"
            ><strong
              ><span style="background-color: #fef2f0">&#61;&#61;</span></strong
            ></span
          ><span style="color: #000008"
            >&#xff1a;两个等号我们称为等值符&#xff0c;当等号两边的值为相同类型时比较值是否相同&#xff0c;类型不同</span
          ><span style="color: #000008"
            >时会发生类型的自动转换&#xff0c;转换为相同的类型后再作比较。</span
          ><span style="color: #be191c"
            ><span style="background-color: #fef2f0"
              >也就是说两个等号只要值相等就可以</span
            ></span
          ><span style="color: #000008">。</span>
        </li>
      </ol>
    </div>
  </blockquote>
</template>

<script setup name=""></script>

<style lang="scss" scoped></style>
