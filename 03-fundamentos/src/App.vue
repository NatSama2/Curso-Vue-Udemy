<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <CounterVue :start="5" title="Entraron" /> -->
  <!-- <CounterVue v-bind:start="15" /> -->
  <!-- <CounterVue title="Salieron" /> -->
  <Indecision />
</template>

<script>
// import Counter from './components/Counter.vue'
import Indecision from "./components/Indecision.vue";

export default {
  name: "App",
  components: {
    // Counter,
    Indecision,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
