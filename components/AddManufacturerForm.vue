<template>
  <div class="relative">
    <button
      class="absolute top-[-5.5rem] right-[-2rem] px-[0.8rem] py-[0.5rem] bg-red-500 text-white rounded-md text-md"
      @click="$emit('close')"
    >
      x
    </button>
  </div>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <label for="manufactureName" class="block text-gray-700 font-semibold mb-2"
        >Manufacturer</label
      >
      <input
        id="manufactureName"
        v-model="formData.fullName"
        type="text"
        class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter manufacturer name"
        required
      />
    </div>

    <div>
      <label for="interest" class="block text-gray-700 font-semibold mb-2"
        >Interest</label
      >
      <input
        id="interest"
        v-model="formData.isUser"
        type="text"
        class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter interest"
        required
      />
    </div>

    <div>
      <label for="email" class="block text-gray-700 font-semibold mb-2"
        >Email</label
      >
      <input
        id="email"
        v-model="formData.rating"
        type="email"
        class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter email address"
        required
      />
    </div>

    <div>
      <label for="telephone" class="block text-gray-700 font-semibold mb-2"
        >Phone</label
      >
      <input
        id="telephone"
        v-model="formData.col1"
        type="tel"
        class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter telephone number"
        required
      />
    </div>

    <div>
      <label for="image" class="block text-gray-700 font-semibold mb-2">Image</label>
      <input
        id="image"
        type="file"
        @change="onFileChange"
        accept="image/*"
        class="border border-gray-300 rounded-md p-2"
      />
    </div>

    <div class="flex items-center mt-2">
      <input
        type="submit"
        class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        :value="manufacturer ? 'Update' : 'Submit'" />
    </div>
    
  </form>
  <div
    v-if="payload.message"
    class="mt-4 p-4 rounded-md"
    :class="
      payload.isSuccess
        ? 'bg-green-100 text-green-700'
        : 'bg-red-100 text-red-700'
    "
  >
    {{ payload.message }}
  </div>
</template>

<script>
export default {
  props: {
    manufacturer: null,
  },

  emits: ['close'],
  data() {
    return {
      formData: {
        fullName: "",
        isUser: "",
        rating: "",
        col1: "",
        col2: null,
      },
      payload: {
        message: "",
        isSuccess: false,
      },
    };
  },
  mounted() {
    if (this.manufacturer) {
      this.formData = { ...this.manufacturer };
    }
  },
  methods: {
    // closeModal() {
    //   this.$emit('close');
    // },
    async submitForm() {
      try {
        const response = await fetch(
          "http://localhost:8080/xtralis/api/create.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.formData),
          }
        );

        const data = await response.json();

        if (response.ok) {
          this.payload.message = data.message;
          this.payload.isSuccess = true;
          this.clearForm();
        } else {
          this.payload.message = data.message || "An error occurred";
          this.payload.isSuccess = false;
        }
      } catch (error) {
        this.payload.message = error.message || "An error occurred";
        this.payload.isSuccess = false;
      }
    },

    onFileChange(event) {
      // Update formData.image when file input changes
      this.formData.col2 = event.target.files[0];
    },
    clearForm() {
      this.formData.fullName = "";
      this.formData.isUser = "";
      this.formData.rating = "";
      this.formData.col1 = "";
      this.formData.col2 = null;
    },
  },
};
</script>
