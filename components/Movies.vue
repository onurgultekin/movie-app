<template>
  <div>
    <p class="text-black-700 text-xl font-bold">{{ title }}</p>
    <div v-if="movies" class="container home-slider mt-4">
      <VueSlickCarousel v-if="movies.length > 0" v-bind="settings">
        <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
      </VueSlickCarousel>
      <div v-else class="text-white px-4 py-4 text-center">
        {{ title }} are loading...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movies",
  data() {
    return {
      settings: {
        dots: true,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 5,
        touchThreshold: 7,
        pauseOnDotsHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      },
    };
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    movies: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>