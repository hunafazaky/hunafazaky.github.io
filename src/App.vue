<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeadLine from './components/HeadLine.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About me</RouterLink>
    <RouterLink to="/skills">Skills</RouterLink>
    <RouterLink to="/portfolio">Portfolio</RouterLink>
    <button class="btn">contact me</button>
  </nav>
  <header>
    <img alt="Hunafa Zaky logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HeadLine msg="Hunafa Zaky" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
  border: 2px solid var(--color-text);
}

nav {
  font-size: 12px;
  background-color: #0b0b0b;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: end;
}

.btn {
  margin-left: 1rem;
  margin-right: 1rem;
}

nav a.router-link-exact-active {
  color: gold;
}

nav a {
  display: inline-block;
  color: var(--color-text);
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
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

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
