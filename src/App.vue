<template>
  <div :class="['theme-container', slideFlag ? 'sidebar-open' : '']">
    <header class="navbar">
      <div class="sidebar-button" @click="toggleFlag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          viewBox="0 0 448 512"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          ></path>
        </svg>
      </div>
      <span class="site-name">web前端面试 - 面试官系列</span>
    </header>
    <div class="sidebar-mask"></div>
    <aside class="sidebar">
      <SideBar></SideBar>
    </aside>
    <main class="page">
      <div class="theme-default-content content__default" @click="closeFlag">
        <router-view :key="route.fullPath" />
      </div>
    </main>
  </div>
</template>

<script setup name="app">
import { ref } from "vue";
import SideBar from "./components/slide/side_bar.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const slideFlag = ref(false);

const toggleFlag = () => {
  slideFlag.value = !slideFlag.value;
};

// 点击其他地方关闭弹窗
const closeFlag = () => {
  slideFlag.value = false;
};
</script>

<style scoped lang="scss">
.theme-container {
  width: 100%;
  height: 100%;
}

.navbar {
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  z-index: 20;
  right: 0;
  height: 3.6rem;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  .site-name {
    font-weight: 600;
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    position: relative;
  }

  .sidebar-button {
    cursor: pointer;
    display: none;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    padding: 0.6rem;
    top: 0.6rem;
    left: 1rem;

    .icon {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}

.sidebar-mask {
  z-index: 9;
  width: 100vw;
  height: 100vh;
  display: none;
}

.navbar,
.sidebar-mask {
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar {
  font-size: 16px;
  background-color: #fff;
  width: 20rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid #eaecef;
  overflow-y: auto;
}

.page {
  padding-top: 3.6rem;
  padding-bottom: 2rem;
  display: block;
  padding-left: 20rem;

  .theme-default-content:not(.custom) {
    max-width: 740px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
  }
}
</style>
