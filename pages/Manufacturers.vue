<script setup>

const manufacturers = ref([]);
// const searchFilter = ref('');

onMounted( async () => {
    const response = await fetch("https://retoolapi.dev/iU7LpP/manufacturer0098");
    manufacturers.value = await response.json();
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
    <div>
        <ManufacturerList :manufacturers="manufacturers"/>
    </div>
</template>