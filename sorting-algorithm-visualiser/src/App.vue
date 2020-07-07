<template>
  <div id="app">
    <app-header></app-header>
    <div id="content">
      <router-view/>
    </div>

  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'app',
  components: {
    AppHeader
  },
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

#app {
  height: 100vh;
  background-color: $bg-basic-dark;
}

#content {
  max-width: 800px;
  margin: auto;
  margin-top: 30px;
}
</style>