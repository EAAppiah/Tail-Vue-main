<template>
  <div>
    <div :class="['sidebar', { active: isSidebarActive }]" @mouseenter="isSidebarActive = true" @mouseleave="isSidebarActive = false">
      <div class="top">
        <div class="logo">
          <nuxt-link to="/company">
            <img src="~/assets/rigellogo.png" class="rlogo" height="60" width="80"/>
          </nuxt-link>
          <span class="rName">X-Vendor</span>
        </div>

        <nuxt-link to="/company">
          <img src="~/assets/rigellogo.png" id="btn" />
        </nuxt-link>
      </div>

      <div class="userRoleContainer">
        <ul v-for="(role, index) in allRoles" :key="index">
          <li>
            <nuxt-link :to="role.address" :class="{
              'nav-link': true,
              active: role.address === selectedRoleAddress,
            }" @click="selectedRoleAddress = role.address">
              <div class="role-wrapper">
                <i class="icon" :class="getRoleIconClass(role.name)"></i>
                <span class="iconName">{{ role.name }}</span>
              </div>
              <span class="tooltip">{{ role.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <ul class="logoutItem">
        <li>
          <nuxt-link to="/" class="nav-link">
            <div class="role-wrapper">
              <i class="icon bx bx-user-circle"></i>
              <span class="iconName">Log Out
                <i class="icon bx bx-log-out"></i>
              </span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarActive: false,
      allRoles: [
        {
          name: "Company",
          address: "/company",
        },
        {
          name: "Product Lists",
          address: "/producttable",
        },
        {
          name: "Manufacturer",
          address: "/manufacturers",
        },
      ],
      selectedRoleAddress: "",
    };
  },
	computed: {
    activeRole() {
      return this.allRoles.find(role => role.address === this.selectedRoleAddress) || {};
    },
  },
  methods: {
    async runLogout() {
      // Your logout logic
    },
    getRoleIconClass(roleName) {
      switch (roleName) {
        case "Company":
          return "bx bxs-dashboard";
        case "Purchase List":
          return "bx bx-calendar-alt";
        case "User Management":
          return "bx bx-bookmark";
        default:
          return "bx bxs-reset";
      }
    },
  },

  mounted() {
    this.selectedRoleAddress = this.$route.path;
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 15px;
  border-radius: 10px;
}
.card2 {
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 8px 15px;
  border-radius: 10px;
}

.navBar {
  margin-top: 0.4rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  z-index: 1;
}
* {
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  overflow-x: hidden;
}

.rlogo {
  width: 50px;
  border-radius: 100%;
  margin: 10px;
}

.rName {
  font-size: 20px;
  font-weight: 700;
}

.user.bottom {
  margin-top: auto;
}

.user-img {
  width: 50px;
  border-radius: 100%;
  border: 1px solid #eee;
}

.user-img2 {
  width: 30px;
  border-radius: 50%;
  border: 1px solid #eee;
}

.sidebar ul li a.active {
  background-color: hsl(264, 39%, 51%);
  color: white;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.4rem;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 3;
}

.top {
  height: 8%;
}

.userRoleContainer {
  height: 95%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 20px;
}

.adminRoleContainer {
  background-color: #f1f1f1;
  margin: 2px;
  border-radius: 10px;
  height: 34%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
}

.user {
  height: 8%;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

/* .sidebar.active ~ .main-content {
  left: 250px;
  width: calc(100% - 250px);
} */

.sidebar.active {
  width: 250px;
}

.sidebar #btn {
  position: absolute;
  top: 0.3rem;
  left: 50%;
  /* color: #12171e;
    font-size: 1.2rem;
    line-height: 50px; */
  height: 50px;
  width: 50px;
  transform: translateX(-50%);
  cursor: pointer;
}

.sidebar.active #btn {
  /* left: 90%; */
  display: none;
}

.sidebar .top .logo {
  color: #12171e;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  pointer-events: none;
  opacity: 0;
}

.sidebar.active .top .logo {
  opacity: 1;
}

.top .logo i {
  font-size: 2rem;
  margin-right: 5px;
}

.user {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.user p {
  color: #12171e;
  opacity: 1;
  margin-left: 1rem;
}

.bold {
  font-weight: 600;
}

.sidebar p {
  opacity: 0;
}

.sidebar.active p {
  opacity: 1;
}

.userLogOut {
  opacity: 0;
  margin-left: 20px;
  font-size: 30px;
  display: flex;
  justify-items: end;
  color: hsl(331, 100%, 50%);
}

.userLogOut2 {
  margin-left: 20px;
  font-size: 30px;
  display: flex;
  justify-items: end;
  color: hsl(331, 100%, 50%);
}

.sidebar.active .userLogOut {
  opacity: 1;
}

/* ===CHANGE THIS==== */
.sidebar ul li {
  position: relative;
  list-style-type: none;
  height: 50px;
  width: 90%;
  margin: 0.4rem auto;
  line-height: 30px;
}

.icon {
  font-size: 20px;
}

.role-wrapper {
  display: flex;
  align-items: center;
}

.iconName {
  display: inline-block;
  vertical-align: middle;
  opacity: 0;
  margin-left: 10px;
}

.sidebar.active ul li a .iconName {
  opacity: 1;
  font-size: 15px;
}

.sidebar ul li a {
  width: 90%;
  color: hsl(264, 39%, 51%);
  display: flex;
  text-decoration: none;
  border-radius: 0.8rem;
}

.sidebar ul li a:hover {
  background-color: hsl(264, 39%, 51%);
  color: #fff;
  font-size: 25px;
}

.sidebar ul li a i {
  text-align: left;
  height: 50px;
  min-width: 50px;
  border-radius: 15px;
  line-height: 50px;
  padding-left: 10px;
}

.sidebar .nav-item {
  opacity: 0;
}

.sidebar.active .nav-item {
  opacity: 1;
}

.sidebar ul li .tooltip {
  background-color: #fff;
  position: absolute;
  left: 125px;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.6rem;
  padding: 0.4rem 1.2rem;
  line-height: 1.8rem;
  opacity: 0;
}

.sidebar ul li:hover .tooltip {
  opacity: 1;
  color: hsl(264, 39%, 51%);
}

.sidebar.active ul li .tooltip {
  display: none;
}

.main-content {
  position: relative;
  height: 100vh;
  top: 0;
  left: 70px;
  transition: all 0.5s ease;
  width: calc(100% - 70px);
  /* background: rgba(254, 255, 255, 0.49);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(17.1px);
    -webkit-backdrop-filter: blur(17.1px); */
}

.logoutItem {
  margin-top: auto;
  margin-bottom: 15px;
}
</style>