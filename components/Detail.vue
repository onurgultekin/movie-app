<template>
  <div
    :style="{
      'background-image':
        'url(https://image.tmdb.org/t/p/original' + content.backdrop_path + ')',
    }"
  >
    <div class="flex container mx-auto flex-col lg:flex-row">
      <div class="image">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + content.poster_path"
          alt=""
        />
      </div>
      <div class="content-side py-6 w-4/5 px-6 w-full">
        <div
          class="
            container
            flex flex-wrap
            lg:justify-between lg:items-center
            mx-auto
            flex-row
          "
        >
          <div class="flex flex-col mb-4 lg:mb-0">
            <TitleTextItem :text="content.original_title" />
            <p>{{ content.tagline }}</p>
            <Genres :genres="content.genres" />
          </div>
          <div
            class="
              flex
              lg:flex-col
              flex-row
              w-full
              lg:w-auto
              justify-between
              items-center
            "
          >
            <TitleTextItem :text="content.vote_average + '/ 10'" />
            <span>{{ content.vote_count }} votes</span>
          </div>
        </div>
        <div class="container mt-4 lg:mt-8">
          <blockquote class="p-2 italic border-l-4 border-orange-500">
            {{ content.overview }}
          </blockquote>
        </div>
        <div class="flex credits mt-8 flex-col">
          <TitleTextItem text="Top Casts" />
          <div class="casts flex flex-row flex-wrap">
            <CastItem
              v-for="cast in credits.cast.slice(0, 12)"
              :key="cast.id"
              :cast="cast"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  props: {
    content: {
      required: true,
      type: Object,
    },
    credits: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f2f2f2;
  opacity: 0.95;
}
.backdrop-image {
  background-size: cover;
  opacity: 0.3;
  position: absolute;
  top: 0px;
  z-index: -10;
  margin-top: -3.5rem;
  height: 702px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>