<script setup>

definePageMeta({
  layout: 'other'
})

const isLoading = ref(true);

const showModal = ref(false);

const searchFilter = ref("");

const manufacturer = ref({});

const editSelectedManufacturer = ref(null);

const fetchManufacturers = async () => {
  try {
    const response = await fetch('https://retoolapi.dev/iU7LpP/manufacturer0098');
    manufacturer.value = await response.json();
  } catch (error) {
    console.error("Error fetching manufacturers:", error);
  } finally {
    isLoading.value = false;
  }
};
onMounted(
  fetchManufacturers
);

const addManufacturer = () => {
  showModal.value = true;
};

const editManufacturer = (manufacturer) => {
  editSelectedManufacturer.value = { ...manufacturer };
};

const deleteManufacturer = async (manufacturer, index) => {
  try {
    const response = await fetch(`https://retoolapi.dev/iU7LpP/manufacturer0098/${manufacturer.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      manufacturer.value.splice(index, 1);
    } else {
      console.error('Error deleting manufacturer:', response.status);
    }
  } catch (error) {
    console.error('Error deleting manufacturer:', error);
  }
  alert('Manufacturer deleted successfully');
};

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
      <!-- Search bar -->
      <div class="flex items-center justify-between">
        <SearchForm @search="handleSearch" />

        <!-- Add Manufacturer Btn-->
        <button type="button" @click="addManufacturer"
          class="text-white bg-indigo-600 hover:bg-indigo-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
          Add Manufacturer
        </button>
      </div>
      <!-- MANUFACTURER MODE -->
      <div class="tableFixHead" style="padding: 0rem 1rem">
        <table class="w-full text-sm text-left text-gray-300">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th class="px-4 py-3">Manufacturer</th>
              <th class="px-4 py-3">Interest</th>
              <th class="px-4 py-3">Email</th>
              <th class="px-4 py-3">Phone</th>
              <th scope="col" class="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(manufacturer, index) in manufacturer" :key="manufacturer.id"
              class="bg-white border-b hover:bg-blue-50">
              <!-- Show no results -->
              <!-- <div v-if="!filteredItems.length">
								No results
							</div> -->
              <td class="p-2">
                <div class="flex space-x-2 items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-full h-full rounded-full" :src="manufacturer.col2" alt="" />
                  </div>
                  <div class="px-4 py-3 font-medium">
                    <p>{{ manufacturer.fullName }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 font-medium">{{ manufacturer.isUser }}</td>
              <td class="px-4 py-3 font-medium">{{ manufacturer.rating }}</td>
              <td class="px-4 py-3 font-medium">{{ manufacturer.col1 }}</td>
              <td class="text-center d-flex font-medium">
                <Icon name="twemoji:writing-hand-light-skin-tone" @click="editManufacturer(manufacturer, index)"
                  title="Edit">
                </Icon>
                <Icon name="bi:trash3" class="ms-2 text-purple-400" @click="deleteManufacturer(manufacturer, index)"
                  title="Delete">
                </Icon>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Main modal -->
      <div id="addManufacturer" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"></div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Add Manufacturer Form Modal -->
  <div v-if="showModal" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
    <div class="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
      <h2 class="text-2xl font-semibold mb-6 text-center">Add New Manufacturer</h2>
      <AddManufacturerForm @close="showModal = false" />
    </div>
  </div>

  <!-- Edit Manufacturer Form Modal -->
  <div v-if="editSelectedManufacturer"
    class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
    <div class="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
      <h5 class="text-2xl font-semibold mb-6 text-center">{{ editSelectedManufacturer.fullName }} </h5>
      <AddManufacturerForm :manufacturer=editSelectedManufacturer @close="editSelectedManufacturer = null" />
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

.div1 {
  height: 88vh;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  padding: 15px;
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

[title] {
  position: relative;
  cursor: pointer;
}
</style>
