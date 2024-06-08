<script setup>
import 'boxicons/css/boxicons.min.css';

const emit = defineEmits(['search']);

const search = (e) => {
  emit('search', e.target.value)
}
</script>

<template>
  <form class="py-3 px-4 flex items-center">
    <label class="sr-only">Search</label>
    <div class="relative w-full">
      <input type="text" id="table-search" @input="search" placeholder="Search..."
        class="block py-1 ps-7 bg-gray-50 rounded-md w-70 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500">
      <i class="bx bx-search absolute left-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-400"></i>
    </div>
  </form>
</template>