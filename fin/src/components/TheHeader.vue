<template>
  <header>
    <RouterLink
      active-class="abc"
      to="/">
      home
    </RouterLink>
    <RouterLink
      active-class="abc"
      to="/about">
      about
    </RouterLink>
  </header>
</template>

<!-- scoped 필수 -->
<!-- style hash -->
<style scoped>
header {
  position: fixed;
  top: 0;
}
</style>
