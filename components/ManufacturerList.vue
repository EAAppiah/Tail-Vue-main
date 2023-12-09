<script setup>
const searchFilter = ref('');

const props = defineProps({
	manufacturers: {
		type: Array,
		required: true
	}
});

const editManufacturer = (manufacturer) => {
	// Edit logic
}

const deleteManufacturer = (manufacturer) => {
	// Delete logic 
}

const filteredManufacturers = computed(() => {
	if (!searchFilter.value) {
		return props.manufacturers
	}

	return props.manufacturers.filter(manufacturer => {
		return manufacturer.fullName.toLowerCase().includes(searchFilter.value.toLowerCase())
	})
})

const handleSearch = (searchText) => {
	searchFilter.value = searchText
}
</script>


<template>
	<div class="parent">
		<div class="div1 card bg-white relative border rounded-lg">

			<!-- Search bar -->
			<div class="flex items-center justify-between">
				<SearchForm @search="handleSearch" />


				<!-- Add Manufacturer Btn-->
				<button type="button" @click="OpenWallet"
					class="text-white bg-indigo-600 hover:bg-indigo-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
					<svg aria-hidden="true" class="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
						</path>
					</svg>
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
						<tr v-for="manufacturer in filteredManufacturers" :key="manufacturer.id"
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
							<td class="text-center d-flex font-medium">
								<Icon name="twemoji:writing-hand-light-skin-tone" @click="editManufacturer(manufacturer, index)"
									title="Edit">
								</Icon>
								<Icon name="bi:trash3" class="ms-2 text-purple-400" @click="deleteManufacturer(manufacturer)"
									title="Delete">
								</Icon>
							</td>
							<td>
							</td>
						</tr>
					</tbody>
				</table>
			</div>




<!-- Main modal -->
<div id="addManufacturer" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
               </div>
        </div>
    </div>
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

[title] {
	position: relative;
	cursor: pointer;
}
</style>