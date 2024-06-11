<template>
  <div
    class="fixed top-0 right-0 left-0 z-40 flex items-center justify-center bg-gray-500 w-full h-screen bg-opacity-75">
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <div class="p-4 md:p-5 text-center">
          <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <!-- Modal content -->
          <h3 class="mb-5 text-lg font-normal text-gray-500">
            Are you sure you want to Sign out ?
          </h3>
          <button @click="signOut"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
            Yes, I'm sure
          </button>
          <button @click="$emit('close')" type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            No, cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(["close"]);

const signOut = () => {
  window.location.href = "/";
};
</script>
