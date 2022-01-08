<template>
  <div class="px-2 sm:px-4 py-2.5">
    <div class="container mx-auto">
      <Hero />
      <Movies class="mt-8" title="Popular Movies" :movies="popularMovies" />
      <Movies
        class="mt-8 mb-8"
        title="Top rated Movies"
        :movies="topRatedMovies"
      />
    </div>
  </div>
</template>

<script>
import Movies from "~/components/Movies.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      popularMovies: [],
      topRatedMovies: [],
    };
  },
  components: {
    Movies,
  },
  methods: {
    async getMovies(type) {
      const moviesRequest = await this.$axios.get("/movie/" + type);
      const data = moviesRequest.data.results;
      if (type === "popular") {
        this.popularMovies = data;
      } else if (type === "top_rated") {
        this.topRatedMovies = data;
      }
    },
  },
  mounted() {
    this.getMovies("popular");
    this.getMovies("top_rated");
  },
};
</script>

<style>
/* Sample `apply
PopularMovies` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
