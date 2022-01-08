<template>
  <div>
    <p class="text-black-700 text-xl font-bold">{{ title }}</p>
    <client-only>
      <swiper v-if="movies" class="swiper mt-8" :options="swiperOption">
        <swiper-slide v-for="movie in movies" :key="movie.id">
          <MovieItem :movie="movie" />
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "Movies",
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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
.swiper {
  min-height: 300px;
  display: flex;
  overflow: hidden;
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>