<template>
  <div style="width: 95%;" class="bg-gray-100 p-1 flex justify-between rounded-md border mx-auto mt-2">
    <h6 class="bold">Company Name</h6>

    <div>
      <DateRange />
    </div>
  </div>

  <div class="parent">
    <div class="card">
      <RevenueTrend />
    </div>

    <div class="card">
      <Bar :data="data_2" :options="options_2" />
    </div>

    <div class="card">
      <Barchart />
    </div>

    <div class="card">
      <Bar :data="data_3" :options="options_3" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as pvsConfig from '../pvsConfig'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return pvsConfig
  }
}
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 1rem;
}
</style>
