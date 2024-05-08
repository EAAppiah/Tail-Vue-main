<template>
  <div class="bg-gray-100 py-8">
    <div class="container mx-auto">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Users</h3>
          <div class="flex space-x-4">
            <button
              @click="loadUsers"
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Load Users
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#addUserModal"
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
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
                  data-bs-toggle="modal"
                  data-bs-target="#editUserImg"
                  role="button"
                  src="../assets/image/♡ Luffy ♡.jpeg"
                  class="w-10 h-10 rounded-full mr-2"
                />
                {{
                  user.user.lname +
                  " " +
                  user.user.sname +
                  " " +
                  user.user.mname
                }}
              </td>
              <td class="px-4 py-2">
                <div class="relative">
                  <button
                    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manage User
                  </button>
                  <ul
                    class="absolute bg-white shadow-md rounded-md mt-2 py-2 w-48 z-10"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li @click="editUser(user)">
                      <span
                        class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >Edit user info</span
                      >
                    </li>
                    <li
                      v-if="!user.active.issystemadmin"
                      @click="editUserRole(user)"
                    >
                      <span
                        class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >Edit user roles</span
                      >
                    </li>
                    <li
                      v-if="!user.active.issystemadmin"
                      @click="delUser(user)"
                    >
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
  </div>
</template>

<script setup>
definePageMeta({ layout: "other" });
const userlist = ref([
  {
    id: 1,
    user: {
      id: 1,
      lname: "Doe",
      sname: "John",
      mname: "M.",
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
      lname: "Smith",
      sname: "Jane",
      mname: "A.",
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
      lname: "Johnson",
      sname: "Bob",
      mname: "R.",
    },
    active: {
      issystemadmin: true,
      isactive: true,
      roleid: 3,
    },
  },
]);

const loadUsers = () => {
  console.log("Loading users...");
};

const editUser = (user) => {
  console.log("Editing user:", user);
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
