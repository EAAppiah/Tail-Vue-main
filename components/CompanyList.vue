<script setup>
defineProps({
	companies: {
		type: Array,
		required: true
	}
});



</script>


<template>
	<div class="parent">
		<div class="div1 card bg-white relative border rounded-lg">
			<div class="flex items-center justify-between">
				<!-- Search bar -->
					<SearchForm @search="handleSearch"/>
			</div>

			<!-- Company MODE -->
			<div>
				<table class="w-full text-sm text-left text-gray-300">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th class="px-4 py-3">Name</th>
							<th class="px-4 py-3">Tel</th>
							<th class="px-4 py-3">Address</th>
							<th class="px-4 py-3">UIId</th>
							<th class="px-4 py-3">Email</th>
							<th class="px-4 py-3">Sub Companies</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="company in companies" :key="company.id" class="border-b">
							<td class="px-4 py-3 font-medium text-gray-900">{{ company.fullName }}</td>
							<td class="px-4 py-3 font-medium text-gray-900">{{ company.isUser }}</td>
							<td>{{ company.rating}}</td>
							<td>{{ company.E }}</td>
							<td>{{ company.col1 }}</td>
							<td class="text-center">
								<button class="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-1 px-2 rounded-full">
									View
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>


		<!--SUB-COMPANY MODE -->
		<div class="div2 card card bg-white relative border rounded-lg">
			<div class="card h-100">
				<div class="card-body">
					<div style="margin-top: 10px" class="d-flex justify-content-between align-items-right col-12">

						<div>
							<h3 class="text-primary">Sub-Companies</h3>
							<table class="table table-responsive table-hover mt-2">
								<thead>
									<tr>
										<th scope="col" class="text-capitalize text-center fw-normal text-primary col">Name
										</th>
										<th scope="col" class="text-capitalize text-center fw-normal text-primary col">Tel
										</th>
										<th scope="col" class="text-capitalize text-center fw-normal text-primary col">
											Address</th>
										<th scope="col" class="text-capitalize text-center fw-normal text-primary col">
											Location</th>
										<th scope="col" class="text-capitalize text-center fw-normal text-primary col">
											E-mail</th>
									</tr>
								</thead>

								<tbody v-if="selectedCompany">
									<tr v-for="subCompany in selectedCompany.subCompanies" :key="subCompany.name">
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
</style>