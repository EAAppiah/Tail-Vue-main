<template>
  <div class="parent">
    <div class="div1 card bg-white relative border rounded-lg">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-semibold text-gray-800">Users</h3>
        <div class="flex space-x-4">
          <button
            data-bs-toggle="modal"
            data-bs-target="#addUserModal"
            class="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add User
          </button>
        </div>
      </div>

      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left text-gray-700 font-semibold">
              User
            </th>
            <th class="px-4 py-2 text-left text-gray-700 font-semibold">
              Manage
            </th>
            <th class="px-4 py-2 text-left text-gray-700 font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in userlist"
            :key="user.id"
            class="hover:bg-gray-100 transition duration-200"
          >
            <td class="px-4 py-2 flex items-center">
              <img
                role="button"
                :src="user.user.img"
                class="w-10 h-10 rounded-full mr-2"
              />
              {{
                user.user.lname + " " + user.user.sname + " " + user.user.mname
              }}
            </td>
            <td class="px-4 py-2">
              <div class="relative">
                <button
                  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                  type="button"
                  @click="toggleUser(user)"
                  aria-expanded="false"
                >
                  Manage User
                </button>
                <ul v-if="showModal[user.id]"
                  class="absolute bg-white shadow-md rounded-md mt-2 py-2 w-48 z-10"
                >
                  <li @click="editUser(user)">
                    <span
                      class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >Edit user info</span
                    >
                  </li>
                  <li
                    @click="editUserRole(user)"
                  >
                    <span
                      class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >Edit user roles</span
                    >
                  </li>
                  <li @click="delUser(user)">
                    <span
                      class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >Delete user</span
                    >
                  </li>
                </ul>
              </div>
            </td>
            <td class="px-4 py-2">
              <button
                v-if="!user.active.issystemadmin"
                :class="[
                  user.active.isactive
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-red-500 hover:bg-red-600',
                  'px-4 py-2 text-white rounded-md transition duration-200',
                ]"
                @click="toggle(user)"
              >
                {{ user.active.isactive ? "ACTIVE" : "INACTIVE" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


  <!-- Edit User Info Modal -->
  <div v-if="showUser" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
    <div class="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
      <h5 class="text-2xl font-semibold mb-6 text-center">{{ user.lname }}</h5>
    <EditUserInfo @close="showUser = false" />
    </div>
  </div>

</template>

<script setup>
definePageMeta({ layout: "other" });

// const showUser = ref(false); 

const showModal = ref({});


const userlist = ref([
  {
    id: 1,
    user: {
      id: 1,
      lname: "Monkey",
      sname: "Luffy",
      mname: "D.",
      img: 'https://i.pinimg.com/236x/09/3c/48/093c4838360d6d06501e98fdc32f4648.jpg'
    },
    active: {
      issystemadmin: false,
      isactive: true,
      roleid: 1,
    },
  },
  {
    id: 2,
    user: {
      id: 2,
      lname: "Roronoa",
      sname: "Zorro",
      mname: "",
      img: 'https://i.pinimg.com/236x/4f/c9/a8/4fc9a8f367904f75774752d3938938f6.jpg',

    },
    active: {
      issystemadmin: false,
      isactive: false,
      roleid: 2,
    },
  },
  {
    id: 3,
    user: {
      id: 3,
      lname: "Eren",
      sname: "Yeager",
      mname: "",
      img: 'https://i.pinimg.com/236x/7d/c3/85/7dc38555ed77d58b3ef836f0e7a087b8.jpg'

    },
    active: {
      issystemadmin: true,
      isactive: true,
      roleid: 3,
      isManager: true,
    },
  },
]);


const toggleUser = (user) =>  {
  showModal.value[user.id] = !showModal.value[user.id];
};

const editUser = () =>  {
  showUser.value = true;
};

const editUserRole = (user) => {
  console.log("Editing user role:", user);
};

const delUser = (user) => {
  console.log("Deleting user:", user);
};

const toggle = (user) => {
  user.active.isactive = !user.active.isactive;
};
</script>

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

.card {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  padding: 30px;
  border-radius: 10px;
}

.tableFixHead {
  max-height: 60vh; /* Adjust the height as needed */
  overflow-y: auto;
}

.tableFixHead table {
  border-spacing: 0;
}

.tableFixHead thead th {
  top: 0;
  z-index: 1;
  background-color: #e5e7eb;
}

[title] {
  position: relative;
  cursor: pointer;
}
</style>
