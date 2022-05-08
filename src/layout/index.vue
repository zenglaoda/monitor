<template>
  <header class="wa-navbar">

  </header>
  <aside class="wa-sidebar">
    <sidebar/>
  </aside>
  <main class="wa-main">
    <router-view/>
  </main>
</template>

<script>
import sidebar from './sidebar.vue';

export default {
  components: {
    sidebar,
  },
  data() {
    return {};
  },
  setup() {
    const name = 'demp'
    return {
      name
    };
  }
}
</script>

<style scoped lang="less">
.wa {
  &-navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--wa-layout-index);
    width: 100%;
    height: var(--wa-header-height);
    background: #fff;
    border: 1px solid #eee;
  }
  &-sidebar {
    position: fixed;
    bottom: 0;
    left: 0;
    top: var(--wa-header-height);
    width: var(--wa-aside-width);
    z-index: var(--wa-layout-index);
    overflow: auto;
  }
  &-main {
    margin: calc(var(--wa-header-height) + var(--wa-main-padding)) 
            var(--wa-main-padding) 
            0 
            calc(var(--wa-aside-width) + var(--wa-main-padding));
  
  }
}
</style>
