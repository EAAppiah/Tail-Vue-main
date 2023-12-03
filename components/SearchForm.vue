<script setup>

const emit = defineEmits(['search']);

const search = (e) => {
  emit('search', e.target.value)
}
</script>

<template>
  <form class="py-3 px-4 flex items-center">
    <label class="sr-only">Search</label>
    <div class="relative w-full">
      <input type="text" id="table-search" @input="search" placeholder="Search..." class="block py-1 ps-6 bg-gray-50 rounded-md w-80 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500">
      <Icon name="uiw:search" class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"></Icon>
    </div>
  </form>
</template>