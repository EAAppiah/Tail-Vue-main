<template>
	<div>
		<h1 class="title">Vue Chart.js Example</h1>
		<div class="chart-div">
			<LineChart :chartData="chartData" :options="chartOptions" class="line-chart" />
		</div>
	</div>
</template>
  
<script>
import { Line } from 'vue-chartjs';

export default {
	extends: Line,
	props: ['chartData', 'options'],
	data() {
		return {
			chartData: {
				labels: ["Jan", "Feb", "Mar", "Apr"],
				datasets: [
					{
						label: 'Number',
						borderColor: "#4bcc96",
						borderWidth: 4,
						pointBackgroundColor: "#000",
						pointRadius: 10,
						fill: false,
						data: [100, 150, 300, 200]
					}
				]
			},
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
				tooltips: {
					backgroundColor: "#000",
					titleFontColor: "#ffffff",
					bodyFontColor: "#ffffff",
					position: "nearest",
					mode: "nearest",
					intersect: 0,
					bodySpacing: 4,
					xPadding: 20,
				}
			},
		};
	},
	mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
  
<style>
.title {
	color: tomato;
}

.line-chart {
	width: 60vw;
	height: 50vh;
}
</style>
  