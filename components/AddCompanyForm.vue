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
      <label for="companyName" class="block text-gray-700 font-semibold mb-2"
        >Company Name</label
      >
      <input
        id="companyName"
        v-model="formData.name"
        type="text"
        class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter company name"
        required
      />
    </div>

    <div>
      <label for="telephone" class="block text-gray-700 font-semibold mb-2"
        >Telephone</label
      >
      <input
        id="telephone"
        v-model="formData.phone"
        type="tel"
        class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter telephone number"
        required
      />
    </div>

    <div>
      <label for="email" class="block text-gray-700 font-semibold mb-2"
        >Email</label
      >
      <input
        id="email"
        v-model="formData.email"
        type="email"
        class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter email address"
        required
      />
    </div>

    <div>
      <label for="address" class="block text-gray-700 font-semibold mb-2"
        >Address</label
      >
      <input
        id="address"
        v-model="formData.address"
        type="text"
        class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter address"
        required
      />
    </div>

    <div class="flex items-center mt-2">
      <input
        type="submit"
        class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        :value="company ? 'Update' : 'Submit'"
      />
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
    company: {
      type: Object,
      default: null,
    },
  },

  emits: ["close"],

  data() {
    return {
      formData: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
      payload: {
        message: "",
        isSuccess: false,
      },
    };
  },
  mounted() {
    if (this.company) {
      this.formData = { ...this.company };
    }
  },
  methods: {
    async submitForm() {
      try {
        let response;
        if (this.company) {
          response = await fetch(
            "https://api-generator.retool.com/LnKhVI/companies/1",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.formData),
            }
          );
        } else {
          response = await fetch(
            "https://api-generator.retool.com/LnKhVI/companies",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.formData),
            }
          );
        }

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
    clearForm() {
      this.formData.name = "";
      this.formData.address = "";
      this.formData.phone = "";
      this.formData.email = "";
    },
  },
};
</script>
