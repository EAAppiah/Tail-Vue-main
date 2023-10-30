<template>
  <div>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-purple-700 to-cyan-400">
      <form class="bg-white rounded-lg p-8 w-96" @submit.prevent="login">
        <img src="../assets/image/rigellogo.png" alt="Logo" class="mx-auto mb-6" width="100" />
        <div class="mb-4">
          <label for="username" class="block text-gray-700">Username</label>
          <input v-model="username" type="text"
            class="w-full py-2 px-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500" id="username"
            aria-describedby="emailHelp" />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-700">Password</label>
          <input v-model="password" type="password"
            class="w-full py-2 px-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500" id="password" />
        </div>

        <div class="flex justify-between">
          <button type="submit" @click="handleLogin" class="py-0.5 px-2 bg-blue-900 text-white rounded-lg">
            Sign In
          </button>
          <button type="button" @click="openSignOutDialog" class="py-0.5 px-2 bg-red-900 text-white rounded-lg">
            Sign Out
          </button>
        </div>
        <div class="feedback-message" v-if="loginError">{{ loginError }}</div>
        <div class="feedback-message" v-if="logoutError">{{ logoutError }}</div>
      </form>

      <!-- Sign Out Confirmation Dialog -->
      <div v-if="showSignOutDialog" class="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50">
        <div class="popup-container">
          <div class="popup-content">
            <h4 class="text-center text-purple-500 text-2xl font-semibold mb-4">
              Confirm Log Out
            </h4>
            <p>Are you sure you want to log out?</p>
            <div class="flex justify-between mt-4">
              <button @click="logOut" class="py-0.5 px-2 bg-red-900 text-white rounded-lg">Confirm</button>
              <button @click="closeSignOutDialog" class="py-0.5 px-2 bg-blue-900 text-white rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Shift Selection Popup -->
      <div v-if="showShiftPopup"
        class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="popup-container">
          <div class="popup-content-large">
            <h4 class="text-center text-purple-500 text-2xl font-semibold mb-4">
              Select Shift
            </h4>
            <input type="radio" id="morning" value="morning" v-model="selectedShift" />
            <label for="morning" class="ml-2">Morning Shift</label><br>
            <input type="radio" id="afternoon" value="afternoon" v-model="selectedShift" />
            <label for="afternoon" class="ml-2">Afternoon Shift</label><br>
            <input type="radio" id="evening" value="evening" v-model="selectedShift" />
            <label for="evening" class="ml-2">Evening Shift</label><br>
            <div class="flex justify-between mt-4">
              <button @click="loginWithShift" class="py-0.5 px-2 bg-blue-900 text-white rounded-lg">Continue</button>
              <button @click="closeShiftPopup" class="py-0.5 px-2 bg-red-900 text-white rounded-lg">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Logout Time Display -->
      <div v-if="logoutTime" class="absolute bottom-0 text-center left-0 right-0 p-4 bg-red-500 text-white">
        Logged out at: {{ logoutTime }}
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: false,

  data() {
    return {
      username: "",
      password: "",
      loginError: null,
      logoutError: null,
      showShiftPopup: false,
      selectedShift: "",
      showSignOutDialog: false,
      logoutTime: null,
    };
  },
  methods: {
    handleLogin() {
      if (this.username === "" && this.password === "") {
        this.showShiftPopup = true;
      } else {
        this.loginError = "Login failed. Please check your credentials.";
      }
    },
    loginWithShift() {
      // Redirect to the desired page based on the selected shift
      if (this.selectedShift === "morning") {
        this.$router.push("/StaffLogs");
      } else if (this.selectedShift === "afternoon") {
        this.$router.push("/CustomerPage");
      } else if (this.selectedShift === "evening") {
        this.$router.push("/StaffLogs");
      }
    },
    openSignOutDialog() {
      if (this.username === "" && this.password === "") {
        this.showSignOutDialog = true;
      } else {
        this.logoutError = "Logout failed. Please check your credentials.";
      }
    },
    logOut() {
      const now = new Date();
      const logoutTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      this.logoutTime = logoutTime;
    },
    closeShiftPopup() {
      this.showShiftPopup = false;
    },
    closeSignOutDialog() {
      this.showSignOutDialog = false;
    },
  },
};
</script>

<style>
.feedback-message {
  color: red;
}

.popup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  transform: translateY(-100%);
  animation: slideIn 0.5s ease-in-out forwards;
}

.popup-content-large {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  transform: translateY(-100%);
  animation: slideIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  to {
    transform: translateY(0);
  }
}
</style>
