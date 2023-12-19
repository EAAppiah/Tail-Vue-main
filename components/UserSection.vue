<script setup>

// DATA PROPERTIES
const searchFilter = ref('');
const selectedStaff = ref(null)
const staff = ref({ rate: 0, hours: 0 })
import {handleSearch} from './ManufacturerList'

// DEFINING PROPS
const props = defineProps({
  staffs: {
    type: Array,
    required: true
  }
});

// SELECTED STAFF 
const viewStaffDetails = (staff) => {
  selectedStaff.value = staff;
  $('#viewStaff').modal('show');
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
    return props.staffs
  }

  return props.staffs.filter(staff => {
    return staff.fullName.toLowerCase().includes(searchFilter.value.toLowerCase())
  })
})

const handleSearch = (searchText) => {
  searchFilter.value = searchText
}
</script>


<template>
  <div class="parent">
    <div class="div1 card bg-white relative border rounded-lg">
      <div class="flex items-center justify-between">
        <!-- Search bar -->
        <SearchForm @search="handleSearch" />
        <h2 class="fw-medium fs-5">Staff Details</h2>
        <DateRange />
      </div>

      <!-- STAFF MODE -->
      <div class="tableFixHead" style="padding: 0rem 1rem">
        <table class="w-full text-sm text-left text-gray-300">
          <thead class="text-xs text-indigo-700 uppercase bg-gray-100">
            <tr @click="selectedStaff = staffs">
              <th class="px-4 py-3">Date Joined</th>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Branch</th>
              <th class="px-4 py-3">Hours</th>
              <th class="px-4 py-3">Rate</th>
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
              <td class="align-center">
                <input type="number" class="text-gray-900 rounded-sm w-10 h-6" v-model.number="staff.rate"
                  @input="calculateTotal(staff)">
              </td>
              <td class="text-gray-900">
                {{ (total) }}
              </td>
              <td>
                <button class="px-2 py-1 bg-orange-600 text-white rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
                  @click="viewStaffDetails(staff)">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <!-- Main modal -->

      <div id="viewStaff" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                companies around the world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="default-modal" type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                accept</button>
              <button data-modal-hide="default-modal" type="button"
                class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
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
}</style>