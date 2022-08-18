<template>
  <h1>movies</h1>
  <input
    v-model="title"
    @keydown.enter="searchMovies" />
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.imdbID">
      <RouterLink :to="`/movies/${movie.imdbID}`">
        {{ movie.Title }}
      </RouterLink>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      title : '',
      movies : []
    }
  },
  methods : {
      async  searchMovies() {
      const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${this.title}`)
      const movies = await res.json()
      if(movies.Response == 'True')  this.movies = movies.Search
     
    }
  }
}

</script>
