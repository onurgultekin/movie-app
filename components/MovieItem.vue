<template>
  <div class="movie-slider">
    <nuxt-link :to="'/movie/' + movie.id">
      <div class="movie-slider__img">
        <img class="img-fluid" :src="imgUrl" :alt="movie.title" />
        <div class="movie-slider__content">
          <h4 class="text-white">
            {{ movie.title }}
          </h4>
          <div class="movie-item__rate flex flex-row justify-between">
            <span class="text-white"
              >{{ movie.vote_average }}/<small>10</small>
            </span>
            <span class="text-white">{{ movie.release_date }}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      required: true,
      type: Object,
    },
  },
  computed: {
    imgUrl() {
      return this.movie.poster_path !== null
        ? "https://image.tmdb.org/t/p/w500" + this.movie.poster_path
        : "/img/defaultposter.png";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>