<template>
  <div class="nav-bar">
    <div class="nav-header">
      <h2 class="class-header-text">CoolerBot.ai</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style scoped>
* {
    font-family: "Urbanist", sans-serif;
    color: #fff !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.nav-bar {
  position: fixed;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #13191f !important;
  backdrop-filter: blur(10px);
  height: 3em;
  padding: 2.3em;
}
.nav-header {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>