export const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Total Cost of Goods sold',
      backgroundColor: '#5891AD',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    },
    {
      label: 'Total Purchases',
      backgroundColor: '#004561',
      data: [15, 30, 45, 60, 25, 10, 35, 20, 45, 30, 25, 40]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: true
}
