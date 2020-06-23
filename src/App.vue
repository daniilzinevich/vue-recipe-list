<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/pizza.png">
    <Recipe/>
  </div>
</template>

<script>
import Recipe from './components/Recipe.vue'

export default {
  name: 'App',
  components: {
    Recipe
  }
}
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

.logo {
  max-width: 80%;
}
</style>
