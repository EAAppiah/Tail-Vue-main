<template>
  <div>
    <div class="navBar card2">
      <div style="display: flex; justify-content: space-between">
        <div>
          <h6 class="bold">{{ businessName }}</h6>
          <h6>{{ location }}</h6>
        </div>
        <div>
          <h6 class="bold" style="text-align: center">
            {{ currentTime }} &nbsp; {{ currentDate }}
          </h6>
          <p style="text-align: right; margin-right: 1rem; font-size: 11px">
            &nbsp; Server IP : {{ ip }} Server Name:&nbsp;{{ host }}
          </p>
        </div>
        <div style="display: flex">
          <img style="margin-right: 10px" src="../assets/image/♡ Luffy ♡.jpeg" class="user-img2" />
          <div>
            <h6 class="bold">Welcome {{ getUser }}</h6>
            <p>{{ selectedRoleTag }}</p>
          </div>
          <div>
            <Icon name="lets-icons:sign-out-circle" data-modal-target="popup-modal" data-modal-toggle="popup-modal"
              aria-modal="true" data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom"
              class="ml-2 mt-2 text-red-600 cursor-pointer">
            </Icon>
          </div>

          <!-- Tooltip -->
          <div id="tooltip-bottom" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Logout
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          
          <div>
          </div>
        </div>
      </div>
    </div>

    <!--Logout Modal  -->
    <div id="popup-modal" tabindex="-1"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-4 md:p-5 text-center">
            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to Logout?</h3>
            <button data-modal-hide="popup-modal" type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
              Yes
            </button>
            <button data-modal-hide="popup-modal" type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: "",
      currentDate: "",
      isSidebarActive: false,
      selectedRoleTag: "",
      selectedRoleAddress: "",
      ip: "154.160.14.99",
      host: "EC2AMAZ-7ND18HK",
      getUser: "Captain",
      selectedRoleTag: "ADMIN",
      location: "Accra-Ghana",
      businessName: "Company Name"
    };
  },

  methods: {
    formatTime(date) {
      const hours12 = date.getHours() % 12 || 12;
      const minutes = date.getMinutes();
      const isAm = date.getHours() < 12;
      return `${hours12.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
    },
    formatDate(date) {
      const DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]
        } ${date.getDate()} ${date.getFullYear()}`;
    },
    updateTimeAndDate() {
      const now = new Date();
      console.log('Updating time and date:', now);
      this.currentTime = this.formatTime(now);
      this.currentDate = this.formatDate(now);
    },
  },

  mounted() {
    this.updateTimeAndDate();
    setInterval(() => {
      this.updateTimeAndDate();
    }, 60000);
  },
};
</script>

<style scoped>
@media print {
  .navBar {
    display: none;
  }
}

.navBar {
  margin-top: 0.4rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  z-index: 1;
}

.card2 {
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 5px 10px;
  border-radius: 10px;
}

.bold {
  font-weight: 600;
}

.user-img2 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #eee;
}</style>