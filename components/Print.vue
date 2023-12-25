<script setup>

function printPage() {
  window.print();
}
</script>

<template>
  <div>
    <Icon 
      name="icon-park:printer"
      data-tooltip-target="tooltip-print"
      data-tooltip-placement="bottom" 
      class="cursor-pointer" 
      @click="printPage">
    </Icon>
  </div>

  <div 
    id="tooltip-print" 
    role="tooltip"
    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
    Print
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
</template>

<style scoped>
.printer {
  cursor: pointer;
}
</style>


