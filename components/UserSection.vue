<script setup>

const props = defineProps({
	users: {
		type: Array,
		required: true
	}
});

const date = ref(new Date())

const calculateTotal = (user) => {
  return user.hours * user.rate 
}

const formatDate = computed(() => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const dayOfWeek = days[date.value.getDay()]
  const month = months[date.value.getMonth()]
  const dayOfMonth = date.value.getDate()

  return `${dayOfWeek}-${dayOfMonth}-${month}`
})

</script>

<template>

<div class="parent">
  <div class="card div1">
    <h3>Staff Logs</h3>

          <table class="min-w-full text-sm text-left text-gray-300">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th>Name</th>
                <th>Hours</th>
                <th>Rate</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="user in users" :key="user.id">
										<td>{{ user.first_name}} {{ user.last_name}}</td>
                <td>{{ user.hours }}</td>
<!-- 
                <td> 
                  <input
                      class="w-full h-full text-sm leading-5 text-gray-900 bg-transparent border-none focus:outline-none"
                      type="text"
                      v-model="user.rate"
                      @input="user.total = calculateTotal(user)"
                    />
                </td> -->

                <td>{{ calculateTotal(user).toLocaleString() }}</td>

                <!-- Status Button -->
                <td>
                  <button
                    class="border rounded-md w-16 h-8 flex items-center justify-center bg-purple-600 text-white">
                    View
                  </button>
                </td>
              </tr>
              <!-- End of table rows -->
            </tbody>
          </table>
        </div>

  <!-- <div class="card div2">
    </div> -->
  </div>
</template>



<style>
.parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 10px;
grid-row-gap: 10px;
}

.div1 {
	height: 88vh;
}
.div2 {
	height: 88vh;
}

.card {
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	border-radius: 10px;
	padding: 15px;
	border-radius: 10px;
}
</style>
