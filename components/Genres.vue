<template>
  <div class="flex categories mt-4">
    <p
      v-for="genre in genres"
      :key="genre.id"
      class="
        flex
        items-center
        justify-center
        px-2
        py-1
        text-xs text-white
        bg-green-500
        rounded-full
        cursor-pointer
        mr-4
      "
    >
      {{ genre.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Genres",
  props: {
    genres: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="sass" scoped>
</style>