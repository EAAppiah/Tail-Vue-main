<template>
    <div class="p-4">
      <div class="bg-white rounded-lg shadow-lg">
        <div class="flex justify-end mt-1 mr-1">
          <!-- Print Button -->
          <div class="ml-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="printPage('print')"
            >
              Print
            </button>
            <!-- <PrintToPdf elementToExportId="parent" pdfname="taxes"/> -->
          </div>
        </div>
  
        <div id="print" class="p-4">
          <h3 class="text-center text-blue-600 text-2xl font-bold mb-4">
            Taxes Summary
          </h3>
  
          <div class="w-11/12 mx-auto">
            <div class="flex justify-between mt-4">
              <div class="w-2/5">
                <label for="week" class="mr-2">From:</label>
                <input id="dInpt" type="date" class="border rounded-md py-1 px-2 mr-2" />
                <label for="week" class="mr-2">To:</label>
                <input id="dInpt" type="date" class="border rounded-md py-1 px-2 mr-2" />
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex items-center"
                >
                  <i class="bi bi-search"></i>
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
                  class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded flex items-center"
                >
                  <i class="bi bi-search"></i>
                </button>
              </div>
  
              <div class="w-1/4 flex justify-end">
                <div class="mr-4">
                  <span class="font-bold text-lg">Total Paid:</span>
                  <span class="font-bold text-lg text-blue-500">{{ totalPaid }}</span>
                </div>
                <div>
                  <span class="font-bold text-lg">Total Unpaid:</span>
                  <span class="font-bold text-lg text-orange-500">{{ totalUnpaid }}</span>
                </div>
              </div>
            </div>
          </div>
  
          <div class="w-11/12 mx-auto mt-8">
            <table class="w-full border-2 border-gray-500 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gray-100">
                  <th
                    scope="col"
                    class="py-2 px-4 text-left font-medium flex justify-between"
                  >
                    <span>Taxes</span>
                    <!-- Search Filter -->
                    <div class="component-to-hide">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex items-center"
                        type="button"
                        id="filterDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bx bx-filter-alt"></i>
                        Filter
                      </button>
                      <ul
                        class="dropdown-menu absolute bg-white rounded-md shadow-lg mt-1"
                        aria-labelledby="filterDropdown"
                      >
                        <li>
                          <label class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <input
                              v-model="filters.getFund"
                              class="form-check-input mr-2"
                              type="checkbox"
                            />
                            GetFund
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <input
                              v-model="filters.nHIL"
                              class="form-check-input mr-2"
                              type="checkbox"
                            />
                            NHIL
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <input
                              v-model="filters.covid19"
                              class="form-check-input mr-2"
                              type="checkbox"
                            />
                            Covid 19
                          </label>
                        </li>
                        <li>
                          <label class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
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
                  </th>
                  <th scope="col" class="py-2 px-4 font-medium">Total Taxable Amount</th>
                  <th scope="col" class="py-2 px-4 font-medium">Tax Due</th>
                  <th scope="col" class="py-2 px-4 font-medium text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="tax in filteredTaxes"
                  :key="tax.name"
                  class="odd:bg-gray-100 even:bg-white"
                >
                  <th scope="row" class="py-2 px-4 font-medium">{{ tax.name }}</th>
                  <td class="py-2 px-4">{{ tax.totalTaxableAmount }}</td>
                  <td class="py-2 px-4">{{ tax.taxDue }}</td>
                  <td class="py-2 px-4 text-center">
                    <span
                      :class="{
                        'text-green-500': tax.status === 'Paid',
                        'text-red-500': tax.status === 'Unpaid',
                      }"
                    >
                      {{ tax.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="bg-gray-100">
                  <th scope="col" colspan="2" class="py-2 px-4 font-medium">Total</th>
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

import { ref, computed } from 'vue';
import "boxicons/css/boxicons.min.css";

definePageMeta({
    layout: 'other'
})

const taxes = ref([
  { name: "GetFund", totalTaxableAmount: 5000, taxDue: 1200, status: "Paid" },
  { name: "NHIL", totalTaxableAmount: 8000, taxDue: 2500, status: "Unpaid" },
  { name: "Covid 19", totalTaxableAmount: 3500, taxDue: 800, status: "Paid" },
  { name: "VAT", totalTaxableAmount: 10000, taxDue: 2000, status: "Unpaid" },
]);

const filters = ref({
  getFund: true,
  nHIL: true,
  covid19: true,
  vat: true,
});

const filteredTaxes = computed(() => {
  return taxes.value.filter(tax => {
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