<script setup>
const companies = ref([]);

onMounted( async () => {
	const response = await fetch("https://api-generator.retool.com/EfUZX7/companylist");
	companies.value = await response.json();
});

</script>
11
<template>
	<CompanyList :companies="companies"/>
</template>