<script setup>

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

<style scoped>
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