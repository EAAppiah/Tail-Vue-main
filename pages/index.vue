<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-900 via-blue-700 to-slate-400">
    <form @submit.prevent="login" class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <div class="flex items-center justify-center mb-6">
        <img src="/assets/image/AdonisJS.png" alt="Logo" class="w-12 h-12">
        <h4 class="ml-4 text-2xl font-semibold text-gray-800">X~tralis</h4>
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 font-semibold text-gray-700">Email</label>
        <input v-model="email" type="email" id="email"
          class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Enter your email">
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 font-semibold text-gray-700">Password</label>
        <input v-model="password" type="password" id="password"
          class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Enter your password">
      </div>
      <button type="submit"
        class="w-full px-4 py-2 font-semibold text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700">
        Login
      </button>
    </form>
  </div>
</template>

<script setup>

const email = ref('');
const password = ref('');

const login = () => {
  if (email.value === '' && password === '') {
    window.location.href = '/dashboard';
  } else {
    alert('Invalid email or password');
  };
}

</script>