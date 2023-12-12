<script setup>

// DATA PROPERTIES
const searchFilter = ref('');
const selectedStaff = ref(null)
const staff = ref({ rate: 0, hours: 0 })

// DEFINING PROPS
const props = defineProps({
  staffs: {
    type: Array,
    required: true
  }
});

// SELECTED STAFF 
const viewStaffDetails = (staff) => {
    selectedStaffDetails.value = staff;
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

// Selected Staff Details
const staffLogs = (staff) => {
  selectedStaff.value = staff
}

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
                <input type="number" class="text-gray-900 rounded-sm w-10 h-6" v-model.number="staff.rate" @input="calculateTotal(staff)">
              </td>
              <td class="text-gray-900">
                {{ (total) }}
              </td>
              <td>
                <button class="bg-orange-500 hover:bg-orange-400 text-white font-normal py-1 px-2 rounded-full"
                @click="viewStaffDetails(staff)">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
</style>