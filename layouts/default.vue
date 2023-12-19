<script setup>
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'
1
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>

<template>
  <SideBar />
  <div class="home-section">
  <slot />
  </div>
</template>

<style>
.home-section {
    position: relative;
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all .5s ease;
    z-index: 2;
  }
  
  .home-section .text {
    display: inline-block;
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }
  
  .sidebar.open~.home-section {
    left: 250px;
    width: calc(100% - 250px);
  }
</style>