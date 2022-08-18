<template>
  <h1>{{ movie.Title }}</h1>
  <img
    :src="movie.Poster"
    alt="poster" />
</template>

<script>
export default {
  data() {
    return {
      movie : {}
    }
  },
  async created(){
        // this.$route
        // this.$router
        // console.log('this.$route : ',this.$route)
        // console.log('this.$router : ',this.$router)
        // console.log('this.$route : ',this.$route.params.abc)
        //  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
        const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&i=${this.$route.params.abc}`)
        const movie = await res.json()
        this.movie = movie

     }    
}
</script>

