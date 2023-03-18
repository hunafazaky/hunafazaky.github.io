<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <HelloWorld />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #E4DCCF;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: start;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
