<template>
  <HelloWorld
    abc="ABC"
    :c="count" 
    @wow="count += $event" />
  <HelloWorld
    abc="XXX" />
  <button @click="count +=1">
    Increase
  </button>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
  export default {
    components : {
      HelloWorld
    },
    data() {
      return {
        count : 0
      }
  },
  methods : {

  }
}
</script>
<style></style>
