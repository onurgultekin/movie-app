import { shallowMount } from '@vue/test-utils'
import Movies from '@/components/Movies.vue'
import MovieItem from '@/components/MovieItem.vue'

describe('Movies', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Movies, {
      propsData: {
        title: "Test",
        movies: [{ id: 1, title: "Test" }]
      },
      components: {
        MovieItem
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
