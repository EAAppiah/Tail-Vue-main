<script setup>

const props = defineProps({
	users: {
		type: Array,
		required: true,
	},
	shifts: {
		type: Array,
		required: true,
	},
});

// SHIFTS
const users = ref([{
	name: 'Kwame',
	weeklySales: [5, 10, 8, 12, 6, 8, 5, 3, 2, 4]
},
{
	name: 'Doig',
	weeklySales: [8, 12, 10, 8, 7, 9, 6, 4, 3, 5]
},
{
	name: 'Berg',
	weeklySales: [10, 8, 7, 6, 5, 4, 3, 2, 1, 2]
},
{
	name: 'Kofi',
	weeklySales: [7, 5, 6, 7, 8, 10, 12, 9, 8, 6]
}]);

//Loop for generating 10weeks
const weeks = [];
for (let i = 1; i <= 10; i++) {
	weeks.push(i);
}

</script>

<template>
	<div class="block w-full p-3 mt-2 bg-white border border-gray-200 rounded-lg shadow-md">
		<!-- <div class="relative overflow-x-auto shadow-md sm:rounded-lg"> -->
		<div class="text-green-500 cursor-pointer">
			<Icon name="ic:sharp-keyboard-double-arrow-left"></Icon> Back
		</div>

		<div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-end mb-1">
			<div>
				<button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
					class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					type="button">
					<svg class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
						fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
					</svg>
					Last 30 days
					<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						viewBox="0 0 10 6">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m1 1 4 4 4-4" />
					</svg>
				</button>
				<!-- Dropdown menu -->
				<div id="dropdownRadio"
					class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
					data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
					style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
					<ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
						<li>
							<div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
								<input id="filter-radio-example-1" type="radio" value="" name="filter-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
								<label for="filter-radio-example-1"
									class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
									day</label>
							</div>
						</li>
						<li>
							<div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
								<input checked id="filter-radio-example-2" type="radio" value="" name="filter-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
								<label for="filter-radio-example-2"
									class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7
									days</label>
							</div>
						</li>
						<li>
							<div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
								<input id="filter-radio-example-3" type="radio" value="" name="filter-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
								<label for="filter-radio-example-3"
									class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30
									days</label>
							</div>
						</li>
						<li>
							<div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
								<input id="filter-radio-example-4" type="radio" value="" name="filter-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
								<label for="filter-radio-example-4"
									class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
									month</label>
							</div>
						</li>
						<li>
							<div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
								<input id="filter-radio-example-5" type="radio" value="" name="filter-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
								<label for="filter-radio-example-5"
									class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
									year</label>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- WEEKLY SALES BY USERS -->
		<div style="width: 70%;" class="bg-gray-100 p-2 rounded-md text-center mx-auto">
			<h3 class="font-bold text-indigo-600 text-lg">Weekly Sales by Users</h3>
		</div> 

		<table class="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="border-r px-4 py-2">
						Users
					</th>
					<th v-for="week in weeks" :key="week" scope="col" class="border-r px-4 py-2">
						Week {{ week }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users" :key="user.name" class="bg-white border hover:bg-gray-50">
					<th class="border-r px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
						{{ user.name }}
					</th>
					<td v-for="sale in user.weeklySales" class="border-r px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
						{{ sale }}</td>
				</tr>
			</tbody>
		</table>
		<!-- </div> -->

		<!-- Weekly Sales by Shifts -->
  <div style="width: 70%;" class="bg-gray-100 p-2 rounded-md mt-4 text-center border mx-auto">
     <h3 class="font-bold text-red-600 text-lg">Weekly Sales by Shifts</h3>
  </div>

		<table class="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="border-r px-4 py-2">
						Shifts
					</th>
					<th v-for="week in weeks" :key="week" scope="col" class="border-r px-4 py-2">
						Week {{ week }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="shift in shifts" class="bg-white border hover:bg-gray-50">
					<th class="border-r px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
						{{ shift.name }}
					</th>
					<td v-for="sale in shift.weeklySales" class="border-r px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
						{{ sale }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
