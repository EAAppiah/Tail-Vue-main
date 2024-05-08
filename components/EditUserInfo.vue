<template>
    <div class="container mx-auto">
      <div class="bg-white p-6 rounded-md shadow-md">
        <form @submit.prevent="handleSubmit">
          <!-- Name -->
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="fname">First Name</label>
              <input v-model="lname" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fname" placeholder="First Name">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="lname">Last Name</label>
              <input v-model="sname" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lname" placeholder="Last Name">
            </div>
          </div>
  
          <!-- Contact -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Email -->
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
              <input v-model="email" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="user@email.com">
            </div>
            <!-- Telephone Number -->
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="mnumber">Mobile Number</label>
              <input v-model="tel" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mnumber" placeholder="0201231231">
            </div>
          </div>
  
          <fieldset class="border-t border-gray-300 pt-4">
            <legend class="text-lg font-bold">Login Details</legend>
            <div class="flex justify-center mt-4">
              <div class="flex items-center mr-8">
                <input type="checkbox" v-model="changepass" class="mr-2" id="changepass">
                <label for="changepass" class="text-gray-700">Change Login Password</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" v-model="changeuserid" class="mr-2" id="changeuserid">
                <label for="changeuserid" class="text-gray-700">Change Login ID</label>
              </div>
            </div>
  
            <!-- User ID -->
            <div v-if="changeuserid" class="mt-4">
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="nuserid">New User ID</label>
                <input v-model="userid" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nuserid">
              </div>
            </div>
  
            <!-- Password -->
            <div v-if="changepass" class="grid grid-cols-2 gap-4">
              <!-- Password 1 -->
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="passw">New Password</label>
                <input v-model="newpassword" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="passw" placeholder="Enter password here">
              </div>
  
              <!-- Password 2 -->
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="cpassw">Confirm Password</label>
                <input v-model="confirmpasswd" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cpassw" placeholder="Enter password again here">
              </div>
            </div>
          </fieldset>
  
          <div class="flex justify-center mt-6">
            <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Edit User">
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        changepass: false,
        userid: null,
        changeuserid: false,
        confirmpasswd: '',
        oldpassw: '',
        newpassword: '',
        selectedRole: '',
        userRole: '',
        basic: '',
        supervisor: '',
        manager: '',
        admin: '',
        tel: null,
        email: '',
        sname: '',
        lname: '',
  
        responseMessageTrue: 'User added successfully.',
        responseMessageFalse: 'User not added.'
      }
    },
    mounted() {
      // Initialize form data from props or API
    },
    methods: {
      validatePassword() {
        // Validate password logic
      },
      setUserRole() {
        // Set user role logic
      },
      handleSubmit() {
        // Handle form submission logic
        // Make API call to update user data
      }
    }
  }
  </script>