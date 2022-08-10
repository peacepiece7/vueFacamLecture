<template>
  <!-- <img src="~assets/capture.png" alt="HHHH" /> -->
  <h1>{{ count }}</h1>
</template>
<script>
  export default {
    data() {
      return {
        count: 0,
        methods: {
          increse: function () {
            this.count += 1
          },
        },
      }
    },
  }
</script>

<style></style>
