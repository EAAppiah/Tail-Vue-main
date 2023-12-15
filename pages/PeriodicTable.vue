<template>
  <div>
    <LineChart :chart-data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue';

export default {
  components: {
    LineChart,
  },
};
</script>

<style>
* {
  text-align: center;
  margin-top: 60px;
}
</style>
