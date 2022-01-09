<template>
  <figure class="bg-gray-100 p-4 dark:bg-gray-800 w-1/2 lg:w-1/3 border">
    <img
      class="w-24 h-24 rounded-full mx-auto"
      :src="'https://image.tmdb.org/t/p/w300/' + cast.profile_path"
      alt=""
    />
    <div class="pt-6 space-y-4 text-center">
      <blockquote>
        <p class="text-lg font-medium">
          {{ cast.name }}
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          as {{ cast.character }}
        </div>
      </figcaption>
    </div>
  </figure>
</template>

<script>
export default {
  name: "CastItem",
  props: {
    cast: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="sass" scoped>
</style>