<template>
  <div class="parent">
    <div class="div1 p-[10px] card">
      <RevenueTrend />
    </div>

    <div class="div2 p-[10px] card">
      <Bar :data="data_2" :options="options_2" />
    </div>

    <div class="div3 p-[10px] card">
      <Barchart />
    </div>

    <div class="div4 p-[10px] card">
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

.card {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  padding: 10px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
  height: 44vh;
}

.div2 {
  grid-area: 1 / 2 / 2 / 3;
  height: 44vh;
}

.div3 {
  grid-area: 2 / 1 / 3 / 2;
  height: 44vh;
}

.div4 {
  grid-area: 2 / 2 / 3 / 3;
  height: 44vh;
}
</style>
