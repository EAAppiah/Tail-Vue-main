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
      <input type="text" id="table-search" @input="search" placeholder="Search..." class="block py-1 ps-5 bg-gray-50 rounded-md w-80 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500">
    </div>
  </form>
</template>