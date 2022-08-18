<template>
  <TheHeader />
  <RouterView />
</template>
<script>

import TheHeader from './components/TheHeader.vue'

export default {
  components : {
    TheHeader
  },
  data() {
      return {
       message : 'Hello?!'
     }
    },
}
</script>
<style></style>
