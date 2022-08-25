<template>
  <section>
    <h1>About?</h1>
    <!-- to="/movies/tt0978759" -->
    <RouterLink 
      :to="{
        name : 'MovieDetails',
        params : { id: 'tt0978759' }
      }">
      Movie Details page
    </RouterLink>
    <RouterView />
  </section>
</template>

<style scoped>
  section {
    height: 3000px;
  }
</style>
