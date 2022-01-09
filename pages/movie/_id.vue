<template>
  <div v-if="details && credits">
    <Detail :content="details" :credits="credits" />
  </div>
  <div v-else class="px-4 py-4 text-black text-center">
    Content is loading....
  </div>
</template>

<script>
export default {
  name: "MovieDetailsPage",
  data() {
    return {
      details: null,
      credits: null,
    };
  },
  methods: {
    async getMovieDetails(id) {
      const moviesRequest = await this.$axios.get("/movie/" + id);
      const data = moviesRequest.data;
      this.details = data;
    },
    async getMovieCredits(id) {
      const moviesRequest = await this.$axios.get("/movie/" + id + "/credits");
      const data = moviesRequest.data;
      this.credits = data;
    },
  },
  mounted() {
    this.getMovieDetails(this.$route.params.id);
    this.getMovieCredits(this.$route.params.id);
  },
  head() {
    return {
      title: this.details
        ? this.details.title + " details"
        : "Movie Detail Page",
    };
  },
};
</script>

<style lang="sass" scoped>
</style>