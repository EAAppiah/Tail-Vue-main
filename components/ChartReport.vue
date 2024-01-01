<template>
  <div class="parent">
    <div class="card">
      <Barchart />
    </div>

    <div class="card">
      <RevenueTrend />
    </div>

    <div class="card">
      <Barchart />
    </div>

    <div class="card">
      <Barchart />
    </div>
</div>

</template>


<style scoped>
.parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
margin: 1rem;
}


</style>
