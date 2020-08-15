<template>
  <div class="main">
    <div class="text">
      <h3>ADS goes here</h3>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 70%;
  background-color: blue;
  border-radius: 6rem;
  margin-bottom: 0.3rem;
}

h3 {
  text-align: center;
  padding-bottom: 5rem;
  padding-top: 5rem;
}

@media screen and (max-width: 750px) {
  .main {
    display: none;
  }
}
</style>
