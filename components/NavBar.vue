<template>
  <div>
    <header class="flex flex-col lg:flex-row items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      <!-- Date Inputs -->
      <div class="flex items-center">
        <div class="relative mx-4 lg:mx-0">
          <label class="mr-2 text-gray-700">From:</label>
          <input
            class="w-32 px-2 py-1 rounded-md form-input sm:w-40 focus:border-indigo-600"
            type="date"
            v-model="fromDate"
          />

          <label class="ml-4 mr-2 text-gray-700">To:</label>
          <input
            class="w-32 px-2 py-1 rounded-md form-input sm:w-40 focus:border-indigo-600"
            type="date"
            v-model="toDate"
          />
        </div>

        <span class="cursor-pointer px-4 py-2 ml-4 text-white bg-purple-600 rounded-md hover:bg-purple-700"
          @click="filterByDateRange"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
  
      <!-- Search Input -->
      <div class="flex items-center">
        <div class="relative mx-4 lg:mx-0">
          <span class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
  
          <input
            class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-purple-600"
            type="text"
            v-model="searchQuery"
            @input="searchUsers"
            placeholder="Search User"
          />
        </div>
      </div>
     
  </header>
  <UserSection :users="filteredUsers" :fromDate="fromDate" :toDate="toDate"/>

</div>
</template>

<script>

export default {
  props: {
    users:{},
    
  },
  data() {
    return {
      fromDate: '',
      toDate: '',
      selectedDate: '',
      searchQuery: '',
      filteredUsers: [] // New array to hold filtered users
    };
  },


  created() {
    // console.log()
    this.filteredUsers = this.users
    this.setDefaultFromMonth();
    this.setDefaultToDate();
  },
  methods: {
    setDefaultFromMonth() {
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const formattedDate = this.formatDate(firstDayOfMonth);

      this.fromDate = formattedDate;
    },
    setDefaultToDate() {
      const now = new Date();
      const formattedDate = this.formatDate(now);

      this.toDate = formattedDate;
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');

      return `${year}-${month}-${day}`;
    },
    filterByDateRange() { // Filter Users based on dateQuery
      this.filteredUsers = this.users.filter(user => {
        const userDate = new Date(user.dateOfBirth);
        return userDate >= new Date(this.fromDate) && userDate <= new Date(this.toDate);
      })
    },

    searchUsers() { // Filter users based on searchQuery
 
    if(this.searchQuery) {
      // console.log(this.searchQuery)
    
      this.filteredUsers = this.users.filter(user => { //searchQuery

        return user.name.toLowerCase().includes(this.searchQuery.toLowerCase());
     });

    //  console.log( this.filteredUsers)

        }
        else{
          this.filteredCustomer = this.customer
        }
  }
},
};
</script>