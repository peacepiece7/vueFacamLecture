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
.abc  {
    color : red;
    font-weight: 700;
}
</style>
