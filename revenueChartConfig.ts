export const data = {
  labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#5891AD',
      data: [18457, 19432, 19782, 20321, 23890, 21245, 22678, 20036, 24109, 22314, 23455, 21943]
    },
    {
      label: 'Gross Profit',
      backgroundColor: '#0E4E69',
      data: [8236, 8925, 9473, 10741, 10125, 9532, 11906, 10897, 11342, 11654, 12108, 11179]
    },
    {
      label: 'Net Profit',
      backgroundColor: '#FF763C',
      data: [4778, 4025, 4901, 3674, 5012, 4198, 4836, 3922, 4543, 5087, 3765, 4983]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: true
}
