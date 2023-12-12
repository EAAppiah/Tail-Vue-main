<script setup>

const staffs = ref([])

onMounted( async () => {
  const response = await fetch("https://retoolapi.dev/IrtUZC/stafflogs")
  staffs.value = await response.json()
});

</script>


<template>
    <div>
        <UserSection :staffs="staffs"/>
    </div>
</template>
