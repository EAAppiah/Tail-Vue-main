<script setup>
// import {
//   initAccordions,
//   initCarousels,
//   initCollapses,
//   initDials,
//   initDismisses,
//   initDrawers,
//   initDropdowns,
//   initModals,
//   initPopovers,
//   initTabs,
//   initTooltips
// } from 'flowbite'

// onMounted(() => {
//   initAccordions();
//   initCarousels();
//   initCollapses();
//   initDials();
//   initDismisses();
//   initDrawers();
//   initDropdowns();
//   initModals();
//   initPopovers();
//   initTabs();
//   initTooltips();
// })
</script>

<template>
  <SideBar />
  <div class="home-section">
    <div>
      <TopBar />
    </div>
    <div>
    <Options />
  </div>
    <slot />
  </div>
</template>

<style >
.home-section {
  position: relative;
  height: 100vh;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all .5s ease;
}

.sidebar.open~.home-section {
  left: 250px;
  width: calc(100% - 250px);
}
</style>