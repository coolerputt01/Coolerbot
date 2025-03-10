<template>
  <nav class="nav-bar" :class="{ navtoggled: isDarkMode }">
    <div class="nav-header" :class="{ navheadtoggled: isDarkMode }">
      <h2 class="class-header-text" :class="{ navtexttoggled: isDarkMode }">CoolerBot.ai</h2>
      <div class="toggle" :class="{ toggled: isDarkMode }" @click="toggleDarkMode"></div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapState(["isDarkMode"])
  },
  methods: {
    ...mapActions(["toggleDarkMode"])
  }
};
</script>

<style scoped>
* {
  font-family: "Urbanist", sans-serif;
  color: #fff !important;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navtexttoggled {
  color: #13191f !important;
}
.toggle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
}
.navtoggled {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: #fff !important;
  height: 3em;
  padding: 2.3em;
  z-index: 1; 
}
.toggled {
  background-color: #13191f;
  z-index: -1;
}
.nav-bar {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: #13191f;
  backdrop-filter: blur(10px);
  height: 3em;
  padding: 2.3em;
  z-index: 1;
  transition: all 250ms;
}
.navheadtoggled {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
  width: 100%;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
  width: 100%;
  transition: all 250ms;
}
</style>
