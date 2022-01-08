<template>
  <div
    class="
      bg-white
      rounded-lg
      border border-gray-200
      shadow-md
      dark:bg-gray-800 dark:border-gray-700
      mr-4
      movie-item
      text-center
      justify-center
      items-center
      relative
      transition-transform
      hover:scale-105
      transform-gpu
    "
  >
    <nuxt-link :to="'movie/' + movie.id">
      <img
        class="rounded-t-lg"
        :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path"
        alt=""
      />
    </nuxt-link>
    <div class="p-5">
      <nuxt-link :to="'movie/' + movie.id">
        <h5
          class="
            mb-2
            text-2xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          {{ movie.original_title }}
        </h5>
      </nuxt-link>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Release Date: {{ movie.release_date }}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Av. Vote: {{ movie.vote_average }}
      </p>
      <nuxt-link
        :to="'movie/' + movie.id"
        class="
          inline-flex
          items-center
          py-2
          px-3
          text-sm
          font-medium
          text-center text-white
          bg-blue-700
          rounded-lg
          hover:bg-blue-800
          focus:ring-4 focus:ring-blue-300
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
      >
        Learn more
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </nuxt-link>
    </div>
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
};
</script>

<style lang="scss" scoped>
.rounded-t-lg {
  height: 300px;
  width: 500px;
  object-fit: contain;
}
h5.font-bold {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  color: #fff;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>