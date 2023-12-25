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
          <!-- ========= log out ====== -->
          <div>
            <!-- <Download /> -->
            <!-- <Print /> -->
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
}
/* .button_1 {
  position: relative;
} */
</style>