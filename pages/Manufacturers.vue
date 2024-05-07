<script setup>

definePageMeta({
    layout: 'other'
})

const manufacturers = ref([]);
// const searchFilter = ref('');

onMounted( async () => {
    const response = await fetch("https://retoolapi.dev/iU7LpP/manufacturer0098");
    manufacturers.value = await response.json();
});
</script>

<template>
    <div>
        <ManufacturerList :manufacturers="manufacturers"/>
    </div>
</template>