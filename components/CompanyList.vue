<script setup>
const searchFilter = ref('');
const selectedCompany = ref(null);

const props = defineProps({
	companies: {
		type: Array,
		required: true
	}
});
// COMPANY FILTER 
const filteredCompanies = computed(() => {
	if (!searchFilter.value) {
		return props.companies
	}

	return props.companies.filter(company => {
		return companies.fullName.toLowerCase().includes(searchFilter.value.toLowerCase())
	})
})

// SUB-COMPANY FILTER
const filteredSubCompanies = computed(() => {
	if (!selectedCompany.value) {
		return [];
	}

	return selectedCompany.value.subCompanies.filter(subCompany => {
		return subCompany.name.toLowerCase().includes(searchFilter.value.toLowerCase());
	});
})

const handleSearch = (searchText) => {
	searchFilter.value = searchText
}

</script>


<template>
	<div class="parent">
		<div class="div1 card bg-white relative border rounded-lg">
			<div class="flex items-center justify-between">
				<!-- Search bar -->
				<SearchForm @search="handleSearch" />
				<DateRange />
			</div>

			<!-- Company MODE -->
			<div class="tableFixHead">
				<table class="w-full text-sm text-left text-gray-300">
					<thead class="text-xs text-indigo-700 uppercase bg-gray-100">
						<tr @click="selectedCompany = company">
							<th class="px-4 py-3">Name</th>
							<th class="px-4 py-3">Tel</th>
							<th class="px-4 py-3">Address</th>
							<th class="px-4 py-3">Email</th>
							<th class="px-4 py-3">Sub Companies</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="company in filteredCompanies" :key="company.id" class="border-b">
							<td class="px-4 py-3 font-medium">{{ company.fullName }}</td>
							<td class="px-4 py-3 font-medium">{{ company.isUser }}</td>
							<td>{{ company.rating }}</td>
							<td>{{ company.col1 }}</td>
							<td class="text-center">
								<button
									class="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300">
									View
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>


		<!--SUB-COMPANY MODE -->
		<div class="div2 card bg-white relative border rounded-lg">
			<div class="d-flex justify-content-between align-items-right col-12">

				<div class="flex items-center justify-between">
					<h1 class="ms-1 text-lg font-medium italic">Sub-Companies</h1>

					<!-- Search bar -->
					<SearchForm @search="handleSearch" />
				</div>
				<div class="tableFixHead">
					<table class="w-full text-sm text-left text-gray-300">
						<thead class="text-xs text-indigo-700 uppercase bg-gray-100">
							<tr>
								<th class="px-4 py-3">Name</th>
								<th class="px-4 py-3">Tel</th>
								<th class="px-4 py-3">Address</th>
								<th class="px-4 py-3">E-mail</th>
							</tr>
						</thead>

						<tbody v-if="selectedCompany">
							<tr v-for="subCompany in filteredSubCompanies" :key="subCompany.name">
								<td>{{ subCompany.name }}</td>
								<td>{{ subCompany.tel }}</td>
								<td>{{ subCompany.address }}</td>
								<td>{{ subCompany.location }}</td>
								<td>{{ subCompany.email }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.parent {
	display: grid;
	grid-template-columns: 2fr 1.5fr;
	grid-template-rows: 1fr;
	grid-column-gap: 10px;
	grid-row-gap: 0px;
	margin: 1rem;
}

.div1 {
	grid-area: 1 / 1 / 2 / 2;
	height: 88vh;
}

.header-cell {
	border-bottom: 1px solid #000;
}


.div2 {
	grid-area: 1 / 2 / 2 / 3;
	height: 88vh;
}

.card {
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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