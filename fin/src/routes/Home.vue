<template>
  <section>
    <h1 class="abc">
      Home!
    </h1>
  </section>
</template>

<script>
export default {
     created(){
        // this.$route
        // this.$router
        console.log('this.$route : ',this.$route) // 페이지 정보 객체
        console.log('this.$router : ',this.$router) // 페이지 제어 명령 객체
     }    
}
</script>

<style scoped>
section {
  height: 3000px;
}
</style>
