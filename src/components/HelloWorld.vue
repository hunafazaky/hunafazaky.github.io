<script setup>
import { RouterLink, RouterView } from 'vue-router'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo-zashin.svg" width="200" height="200" />    
  <div class="greetings">
    <h1>
      <span class="magma">Hunafa </span>  
      <span class="ocean">Zaky</span>  
    </h1>
    <h3 class="dark">Frontend Developer</h3>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  font-weight: bolder;
  font-size: 5rem;
  /* top: -10px; */
}

h3 {
  font-weight: lighter;
  font-size: 2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-magma);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  color: var(--color-ocean);
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
