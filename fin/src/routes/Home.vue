<template>
  <h1 class="abc">
    Home!
  </h1>
</template>

<script>
export default {
     created(){
        // this.$route
        // this.$router
        console.log('this.$route : ',this.$route) // 페이지 정보들
        console.log('this.$router : ',this.$router) // 페이지 제어 명령들
     }    
}
</script>
