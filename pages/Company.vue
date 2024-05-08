<script setup>
const companies = ref([]);

// Fetching data from API
const fetchCompanies = async () => {
  try {
    const response = await fetch("http://localhost:8080/xtralis/api/read.php");
    const data = await response.json();
    companies.value = data.companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
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
    const response = await fetch(`http://localhost:8080/xtralis/api/delete.php?id=${company.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      companies.value.splice(index, 1);
      console.log('Company deleted successfully');
    } else {
      console.error('Error deleting company:', response.status);
    }
  } catch (error) {
    console.error('Error deleting company:', error);
  }
};

// Call fetchCompanies when the component is mounted
onMounted(fetchCompanies);

// Use 'other' Layout
definePageMeta({
  layout: "other",
});
</script>

<template>
  <div class="parent">
    <div class="div1 card bg-white relative border rounded-lg">
      <div class="flex items-center justify-between">
        <!-- Search bar -->
        <SearchForm />
        <!-- Add Company Button -->
        <div class="flex justify-end p-3">
          <button
            @click="addCompany"
            class="mb-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          >
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
            <tr
              v-for="(company, index) in companies"
              :key="company.id"
              class="border-b hover:bg-gray-100 cursor-pointer"
            >
              <td class="px-4 py-3 font-medium">{{ company.name }}</td>
              <td class="px-4 py-3 font-medium">{{ company.telephone }}</td>
              <td class="px-4 py-3 font-medium">{{ company.address }}</td>
              <td class="px-4 py-3 font-medium">{{ company.email }}</td>
              <td class="px-4 py-3 font-medium">
                <Icon
                  name="twemoji:writing-hand-light-skin-tone"
                  @click="editCompany(company, index)"
                  title="Edit"
                >
                </Icon>
                <Icon
                  name="bi:trash3"
                  class="ms-2 text-purple-400"
                  @click="deleteCompany(company, index)"
                  title="Delete"
                >
                </Icon>
              </td>
              <td>
                <button
                  class="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
                >
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
  <div v-if="showModal" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
    <div class="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
      <h2 class="text-2xl font-semibold mb-6 text-center">Add New Company</h2>
    <AddCompanyForm @close="showModal = false" />
  </div>
  </div>

    <!-- Edit CompanyForm Modal -->
    <div v-if="editSelectedCompany" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
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
