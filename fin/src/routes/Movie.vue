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
      movie: {},
    }
  },
  async created() {
    // this.$route
    // this.$router
    // console.log('this.$route : ', this.$route) // 페이지의 정보
    // console.log('this.$router : ', this.$router)
    // console.log('this.$route : ',this.$route.params.id)
    //  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
    const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&i=${this.$route.params.id}`)
    const movie = await res.json()
    this.movie = movie
  }
}
</script>
