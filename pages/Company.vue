<script setup>
const companies = ref([]);

const isLoading = ref(true);
// curl "https://api-generator.retool.com/KHdO0G/companies"
// Fetching data from API
const fetchCompanies = async () => {
  try {
    const response = await fetch("https://api-generator.retool.com/LnKhVI/companies");
    companies.value = await response.json();
    console.log(companies.value);
  } catch (error) {
    console.error("Error fetching companies:", error);
  } finally {
    isLoading.value = false;
  }
};

const showModal = ref(false);

const addCompany = () => {
  showModal.value = true;
};

const editSelectedCompany = ref(null);

const editCompany = (company) => {
  editSelectedCompany.value = { ...company };
};

const deleteCompany = async (company, index) => {
  try {
    const response = await fetch(`https://api-generator.retool.com/LnKhVI/companies/${company.id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      companies.value.splice(index, 1);
    } else {
      console.error('Error deleting company:', response.status);
    }
  } catch (error) {
    console.error('Error deleting company:', error);
  }
};

// Call fetchCompanies when the component is mounted
onMounted(
  fetchCompanies
);

// Use 'other' Layout
definePageMeta({
  layout: "other",
});
</script>

<template>
  <div class="parent">
    <div v-if="isLoading">
      <div class="flex justify-center items-center h-screen">
        <div role="status">
          <svg aria-hidden="true" class="inline w-16 h-16 text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else class="div1 card bg-white relative border rounded-lg">
      <div class="flex items-center justify-between">
        <!-- Search bar -->
        <SearchForm />
        <!-- Add Company Button -->
        <div class="flex justify-end p-3">
          <button @click="addCompany"
            class="mb-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
            Add Company
          </button>
        </div>
      </div>

      <!-- Company MODE -->
      <div class="tableFixHead">
        <table class="w-full text-sm text-center text-gray-500">
          <thead class="text-xs text-indigo-700 uppercase bg-gray-50">
            <tr>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Telephone</th>
              <th class="px-4 py-3">Address</th>
              <th class="px-4 py-3">Email</th>
              <th class="px-4 py-3">Actions</th>
              <th class="px-4 py-3">Sub-Companies</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(company, index) in companies" :key="company.id"
              class="border-b hover:bg-gray-100 cursor-pointer">
              <td class="px-4 py-3 font-medium">{{ company.name }}</td>
              <td class="px-4 py-3 font-medium">{{ company.phone }}</td>
              <td class="px-4 py-3 font-medium">{{ company.address }}</td>
              <td class="px-4 py-3 font-medium">{{ company.email }}</td>
              <td class="px-4 py-3 font-medium">
                <Icon name="twemoji:writing-hand-light-skin-tone" @click="editCompany(company, index)" title="Edit">
                </Icon>
                <Icon name="bi:trash3" class="ms-2 text-purple-400" @click="deleteCompany(company, index)"
                  title="Delete">
                </Icon>
              </td>
              <td>
                <button
                  class="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- AddCompanyForm Modal -->
  <div v-if="showModal" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
    <div class="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
      <h2 class="text-2xl font-semibold mb-6 text-center">Add New Company</h2>
      <AddCompanyForm @close="showModal = false" />
    </div>
  </div>

  <!-- Edit CompanyForm Modal -->
  <div v-if="editSelectedCompany" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
    <div class="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
      <h5 class="text-2xl font-semibold mb-6 text-center">{{ editSelectedCompany.name }} </h5>
      <AddCompanyForm :company=editSelectedCompany @close="editSelectedCompany = null" />
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

.card {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
}

.tableFixHead {
  overflow-y: auto;
  height: 72vh;
}

.tableFixHead thead th {
  top: 0px;
  z-index: 1;
  background: #e5e7eb;
}
</style>
