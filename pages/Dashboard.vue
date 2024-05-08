<template>
    <div
      style="width: 97%"
      class="bg-gray-100 p-1 flex justify-between rounded-md border mx-auto my-3"
    >
      <DateRange />
        <div>
        <!-- Toggle Button -->
        <button
          class="text-white bg-indigo-600 hover:bg-indigo-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          @click="showChartReport = !showChartReport"
        >
          {{ showChartReport ? "Weekly Sales" : "Chart Report" }}
        </button>
      </div>
    </div>

    <div v-if="showChartReport">
      <ChartReport />
    </div>
    <div v-else>
      <WeeklySales />
    </div>
</template>

<script setup>
definePageMeta({
  layout: "other",
});

const showChartReport = ref(true);
</script>
