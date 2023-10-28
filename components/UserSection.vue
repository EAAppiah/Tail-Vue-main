<template>
  <div class="mt-8">
    <!-- Table -->
    <div class="flex flex-col mt-8 p-10">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium uppercase tracking-wider"
                >
                <strong>Name</strong>
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium uppercase tracking-wider"
                >
                <strong>Hours</strong>
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                <strong>Rate</strong>
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                <strong>Total</strong>
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                <strong>Status</strong>
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <!-- Table rows -->
              <tr v-for="(user, index) in users" :key="index">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ user.name }}
                      </div>
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ user.hours }}
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="border border-black rounded-md w-10 h-8 flex items-center justify-center">
                    <input
                      class="w-full h-full text-sm leading-5 text-gray-900 bg-transparent border-none focus:outline-none"
                      type="text"
                      v-model="user.rate"
                      @input="user.total = calculateTotal(user)"
                    />
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-black-500">
                  <div class="border rounded-md w-10 h-8 flex items-center justify-center">
                    {{ calculateTotal(user).toLocaleString() }}
                  </div>
                </td>

                <!-- Status Button -->
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-black-500">
                  <button
                    class="border rounded-md w-16 h-8 flex items-center justify-center bg-purple-600 text-white"
                    @click="showStatusPopup(user)"
                  >
                    View
                  </button>
                </td>
              </tr>
              <!-- End of table rows -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Status Popup/Modal -->
<div v-if="isStatusPopupVisible" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div class="bg-white rounded-lg p-8 shadow-md max-w-xlg mx-auto max-h-96 overflow-y-auto">
      <h2 class="text-lg font-semibold">{{ selectedUserForStatus.name }} Status</h2>
      <table class="min-w-full mt-4">
        <thead>
          <tr>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-indigo-500 uppercase tracking-wider">
              Date
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-indigo-500 uppercase tracking-wider">
              Sign In
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-indigo-500 uppercase tracking-wider">
              Sign Out
            </th>
            <th class=" px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-indigo-500 uppercase tracking-wider">
              Total Hours
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through user's status details -->
          <tr v-for="(status, index) in selectedUserForStatus.statusDetails" :key="index">
            <td class="px-6 py-3">{{ status.date }}</td>
            <td class="px-6 py-3">{{ status.signIn }}</td>
            <td class="px-6 py-3">{{ status.signOut }}</td>
            <td class="px-6 py-3">{{ status.totalHours }}</td>
          </tr>
        </tbody>
      </table>
      <button class="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md" @click="closeStatusPopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users:{},
    fromDate: '',
      toDate: '',
  },
  data() {
    return {
     
      isStatusPopupVisible: false,
      selectedUserForStatus: null,
    };
  },
  methods: {
    calculateTotal(user) {
      return user.hours && user.rate ? user.hours * user.rate : '';
    },
    showStatusPopup(user) {
      try{
        console.log(this.toDate)
      console.log(this.fromDate)
      
      user.statusDetails=[
            { date: 'Fri-08', signIn: '10:00 AM', signOut: '06:00 PM', totalHours: '8' },
             { date: 'Fri-08', signIn: '10:00 AM', signOut: '06:00 PM', totalHours: '8' },
            // Add more status details as needed
          ]
      this.selectedUserForStatus = user;
      this.isStatusPopupVisible = true;
      }
      catch(err){
console.error(err)
      }
      
    },
    closeStatusPopup() {
      this.isStatusPopupVisible = false;
      this.selectedUserForStatus = null;
    },
    formatDate(date) {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const dayOfWeek = days[date.getDay()];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[date.getMonth()];
      const dayOfMonth = date.getDate();
      const dayOfMonthFormatted = dayOfMonth + (dayOfMonth === 1 ? 'st' : dayOfMonth === 2 ? 'nd' : dayOfMonth === 3 ? 'rd' : 'th');

        return `${dayOfWeek}-${dayOfMonthFormatted}-${month}`;
    },
  },
};
</script>
