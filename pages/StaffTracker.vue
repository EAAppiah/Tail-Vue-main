<script setup>

const users = ref([])

onMounted( async () => {
  const response = await fetch('/staff-details.json')
  users.value = await response.json()
});

</script>


<template>
    <div>
        <UserSection :users="users"/>
    </div>
</template>
