<script setup>

definePageMeta({
  layout: 'other'
})

const users = ref([]);
const shifts = ref([
  {
    name: 'Morning',
    weeklySales: []
  },
  {
    name: 'Afternoon',
    weeklySales: []
  },
  {
    name: 'Evening',
    weeklySales: []
  }
]);

onMounted(() => {

  shifts.value.forEach(shift => {
    shift.weeklySales = getRandomWeeklySales()
  })
})

const getRandomWeeklySales = () => {
  return Array(10).fill(0).map(() => Math.floor(Math.random() * 20))
};

</script>

<template>
  <div>
    <WeeklySales :users="users" :shifts="shifts" />
  </div>
</template>