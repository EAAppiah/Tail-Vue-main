<template>
  <div class="parent">
    <div class="div1 card bg-white relative border rounded-lg">
      <div class="mt-1 mr-1">
        <!-- Filter Button -->
        <div class="ml-2">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex items-center"
            type="button"
            @click="toggle"
            aria-expanded="false"
          >
            <i class="bx bx-filter-alt mr-2"></i>
            Filter
          </button>

          <div class="component-to-hide">
            <ul v-if="showFilter"
              class="dropdown-menu absolute z-10 bg-white rounded-md shadow-lg mt-1"
              aria-labelledby="filterDropdown"
            >
              <li>
                <label
                  class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    v-model="filters.getFund"
                    class="form-check-input mr-2"
                    type="checkbox"
                  />
                  GetFund
                </label>
              </li>
              <li>
                <label
                  class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    v-model="filters.nHIL"
                    class="form-check-input mr-2"
                    type="checkbox"
                  />
                  NHIL
                </label>
              </li>
              <li>
                <label
                  class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    v-model="filters.covid19"
                    class="form-check-input mr-2"
                    type="checkbox"
                  />
                  Covid 19
                </label>
              </li>
              <li>
                <label
                  class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    v-model="filters.vat"
                    class="form-check-input mr-2"
                    type="checkbox"
                  />
                  VAT
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="print" class="p-4">
        <h3 class="text-center text-purple-600 text-2xl font-bold mb-4">
          Taxes Summary
        </h3>

        <div class="w-11/12 mx-auto">
          <div class="flex justify-between mt-4">
            <div class="w-2/5">
              <label for="week" class="mr-2">From:</label>
              <input
                id="dInpt"
                type="date"
                class="border rounded-md py-1 px-2 mr-2"
              />
              <label for="week" class="mr-2">To:</label>
              <input
                id="dInpt"
                type="date"
                class="border rounded-md py-1 px-2 mr-2"
              />
              <button
                class="bx bx-search bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex items-center"
              >
              </button>
            </div>

            <div class="w-1/4">
              <label for="week" class="mr-2">Month</label>
              <input
                id="defaultMonthInput"
                type="month"
                class="border rounded-md py-1 px-2 mr-2"
              />
              <button
                class="bx bx-search bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded flex items-center"
              >
              </button>
            </div>

            <div class="w-1/4 flex justify-end">
              <div class="mr-4">
                <span class="font-bold text-md">Total Paid: </span>
                <span class="font-bold text-lg text-blue-500">{{
                  totalPaid
                }}</span>
              </div>
              <div>
                <span class="font-bold text-md">Total Unpaid: </span>
                <span class="font-bold text-lg text-orange-500">{{
                  totalUnpaid
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-11/12 mx-auto mt-8 tableFixHead">
          <table class="w-full text-center text-gray-500 border-collapse border border-gray-500 rounded-lg">
            <thead class="text-md font-medium text-gray-700 uppercase bg-gray-50">
              <tr class="bg-gray-100">
                <th
                  class="py-2 px-4"
                >
                  <span>Taxes</span>
                  <!-- Search Filter -->
                </th>
                <th class="py-2 px-4">
                  Total Taxable Amount
                </th>
                <th class="py-2 px-4">Tax Due</th>
                <th class="py-2 px-4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="tax in filteredTaxes"
                :key="tax.name"
                class="odd:bg-gray-100 even:bg-white"
              >
                <th scope="row" class="py-2 px-4 font-medium">
                  {{ tax.name }}
                </th>
                <td class="py-2 px-4">{{ tax.totalTaxableAmount }}</td>
                <td class="py-2 px-4">{{ tax.taxDue }}</td>
                <td class="py-2 px-4 text-center">
                  <span
                    :class="{
                      'text-green-500 font-semibold': tax.status === 'Paid',
                      'text-red-500 font-semibold': tax.status === 'Unpaid',
                    }"
                  >
                    {{ tax.status }}
                  </span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-gray-200">
                <th scope="col" colspan="2" class="py-2 px-4 font-bold text-black">
                  Total
                </th>
                <td class="py-2 px-4 font-bold">{{ totalTaxDue }}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script setup>
import "boxicons/css/boxicons.min.css";

definePageMeta({
  layout: "other",
});

const taxes = ref([
  { name: "GetFund", totalTaxableAmount: 5000, taxDue: 1200, status: "Paid" },
  { name: "NHIL", totalTaxableAmount: 8000, taxDue: 2500, status: "Unpaid" },
  { name: "Covid 19", totalTaxableAmount: 3500, taxDue: 800, status: "Paid" },
  { name: "VAT", totalTaxableAmount: 10000, taxDue: 2000, status: "Unpaid" },
]);

const showFilter = ref(false);

const filters = ref({
  getFund: true,
  nHIL: true,
  covid19: true,
  vat: true,
});

const toggle = () => {
  showFilter.value = !showFilter.value;
}

const filteredTaxes = computed(() => {
  return taxes.value.filter((tax) => {
    return (
      (filters.value.getFund || tax.name !== "GetFund") &&
      (filters.value.nHIL || tax.name !== "NHIL") &&
      (filters.value.covid19 || tax.name !== "Covid 19") &&
      (filters.value.vat || tax.name !== "VAT")
    );
  });
});

const totalTaxDue = computed(() => {
  return filteredTaxes.value.reduce((total, tax) => total + tax.taxDue, 0);
});

const totalPaid = computed(() => {
  return filteredTaxes.value.reduce(
    (total, tax) => (tax.status === "Paid" ? total + tax.taxDue : total),
    0
  );
});

const totalUnpaid = computed(() => {
  return filteredTaxes.value.reduce(
    (total, tax) => (tax.status === "Unpaid" ? total + tax.taxDue : total),
    0
  );
});

const printPage = (elementId) => {
  const printContent = document.getElementById(elementId).innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
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
  padding: 15px;
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