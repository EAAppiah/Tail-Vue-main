<template>
    <div>
        <NavBar :users="users"/>
    </div>
</template>

<script>

export default {
  data() {
    return {
       

      users: [
        {
          name: 'John Doe',
          hours: '20',
          rate: '0.5',
          total: '',
         
        },
        {
          name: 'Gloria',
          hours: '90',
          rate: '0.5',
          total: '',
        
        },
        {
          name: 'Philip',
          hours: '20',
          rate: '0.5',
          total: '',
      
        },
        {
          name: 'Daniel',
          hours: '60',
          rate: '15',
          total: '',
        
        },
        // Add more users as needed
      ],
     
    };
  },

  methods: {
    formatDate(date) {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const dayOfWeek = days[date.getDay()];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[date.getMonth()];
      const dayOfMonth = date.getDate();
      const dayOfMonthFormatted = dayOfMonth + (dayOfMonth === 1 ? 'st' : dayOfMonth === 2 ? 'nd' : dayOfMonth === 3 ? 'rd' : 'th');

        return `${dayOfWeek}-${dayOfMonthFormatted}-${month}`;
    },
},
};
</script>