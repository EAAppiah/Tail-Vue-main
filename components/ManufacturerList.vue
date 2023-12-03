<script setup>
// const searchFilter = ref('');

defineProps({
	manufacturers: {
		type: Array,
		required: true
	}
});

// const filteredItems = computed(() => {
// 	let manufacturers = props.manufacturers;

// 	if (searchFilter.value !== '') {
// 		manufacturers = manufacturers.filter(manufacturer =>
// 			manufacturer.fullName.includes(searchFilter.value));
// 	}

// 	return manufacturers;
// });

// const handleSearch = (search) => {
// 	searchFilter.value = search;
// 	if(!search) {
//     searchFilter.value = '';
//   };
// }
</script>


<template>
	<div class="parent">
		<div class="div1 card bg-white relative border rounded-lg">

			<!-- Search bar -->
			<div class="flex items-center justify-between">
				<SearchForm @search="handleSearch" />


				<!-- Add Manufacturer Btn-->
				<div class="flex items-center justify-end">
					<button class="py-1.5 px-2 bg-indigo-700 text-white font-medium rounded-lg mr-2">Add
						Manufacturer</button>
				</div>
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
							<th scope="col" class="px-4 py-3 text-center">Payment Details</th>
							<th scope="col" class="px-4 py-3 text-center"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="manufacturer in manufacturers" :key="manufacturer.id"
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600">
							<!-- Show no results -->
							<!-- <div v-if="!filteredItems.length">
								No results
							</div> -->
							<td class="p-2">
								<div class="flex space-x-2 items-center">
									<div class="flex-shrink-0 w-10 h-10">
										<img class="w-full h-full rounded-full" :src="manufacturer.col2" alt="" />
									</div>
									<div class="px-4 py-3 font-medium text-gray-900">
										<p>{{ manufacturer.fullName }}</p>
									</div>
								</div>
							</td>
							<td class="px-4 py-3 font-medium text-gray-900">{{ manufacturer.isUser }}</td>
							<td class="px-4 py-3 font-medium text-gray-900">{{ manufacturer.rating }}</td>
							<td class="px-4 py-3 font-medium text-gray-900">{{ manufacturer.col1 }}</td>
							<td class="text-center">
								<a class="text-indigo-600 hover:text-indigo-700 font-medium" href="#">
									View
								</a>
							</td>
							<td>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
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
  position: sticky;
  top: 0px;
	z-index: 1; 
	background: #E5E7EB;
}

</style>