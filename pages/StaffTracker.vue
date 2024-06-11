<script setup>

definePageMeta({
  layout: 'other'
})

const isLoading = ref(true);
const searchFilter = ref('');
const selectedStaff = ref(null);
const staff = ref({ rate: 0, hours: 0 });
const modal = ref(null);

onMounted(async () => {
  const response = await fetch("https://retoolapi.dev/IrtUZC/stafflogs")
  staff.value = await response.json()
  isLoading.value = false;
});


// SELECTED STAFF 
const open = () => {
  console.log("working");
}

// SETTING RATE
const rate = computed({
  get() {
    return staff.value.rate
  },
  set(value) {
    staff.value.rate = value
    calculateTotal()
  }
})

// CALCULATING TOTALS
const total = ref(0)

function calculateTotal() {
  total.value = staff.value.rate * staff.value.hours
}

// STAFF SEARCH FILTER
const filteredStaffs = computed(() => {
  if (!searchFilter.value) {
    return staff.value
  }

  return staff.filter(staff => {
    return staff.fullName.toLowerCase().includes(searchFilter.value.toLowerCase())
  })
})

const handleSearch = (searchText) => {
  searchFilter.value = searchText
}
</script>


<template>
  <div class="parent">
    <div v-if="isLoading">
      <div class="flex justify-center items-center h-screen">
        <div role="status">
          <svg aria-hidden="true" class="inline w-16 h-16 text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else class="div1 card bg-white relative border rounded-lg">
      <div class="flex items-center justify-between">
        <!-- Search bar -->
        <SearchForm @search="handleSearch" />
        <h2 class="fw-bold fs-5">Staff Details</h2>
        <DateRange />
      </div>

      <!-- STAFF MODE -->
      <div class="tableFixHead" style="padding: 0rem 1rem">
        <table class="w-full text-sm text-left text-gray-300">
          <thead class="text-xs text-indigo-700 uppercase bg-gray-100">
            <tr @click="selectedStaff = staff">
              <th class="px-4 py-3">Date Joined</th>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Branch</th>
              <th class="px-4 py-3">Hours</th>
              <th class="px-4 py-3">Total</th>
              <th class="px-4 py-3">Logs</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="staff in filteredStaffs" :key="staff.id" class="border-b">
              <td class="px-4 py-3 font-medium text-gray-900">{{ staff.date }}</td>
              <td class="px-4 py-3 font-medium text-gray-900">{{ staff.fullName }}</td>
              <td class="px-4 py-3 font-medium text-gray-900">{{ staff.branch }}</td>
              <td class="px-4 py-3 font-medium text-gray-900">{{ staff.hours }}</td>
              <td class="px-4 py-3 text-gray-900 font-medium">
                {{ (total) }}
              </td>
              <td>
                <button data-modal-toggle="default-modal" @click="open()"
                  class="text-center px-2 py-1 bg-orange-600 text-white rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Main modal -->
    <div id="default-modal" data-modal-target="default-modal" tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 modal hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-lg max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 class="text-xl font-medium text-gray-900">
              {{ staff.fullName }}
            </h3>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="flex justify-between p-4 md:p-5 space-y-4">
            <p>Username: {{ staff.username }}</p>
            <p>Password: {{ staff.column6 }}</p>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button data-modal-hide="default-modal" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I
              accept</button>
            <button data-modal-hide="default-modal" type="button"
              class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  margin: 1rem;
}

.div1 {
  height: 88vh;
}

.tableFixHead {
  overflow-y: auto;
  height: 72vh;
}

.tableFixHead thead th {
  position: sticky;
  top: 0px;
  z-index: 1;
  background: #F3F4F6;
}

.card {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
}

.loading-svg {
  width: 4rem;
  height: 4rem;
}
</style>