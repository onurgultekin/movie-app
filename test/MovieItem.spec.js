import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import MovieItem from '@/components/MovieItem.vue'

describe('MovieItem', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MovieItem, {
      propsData: {
        movie: { id: 1, title: "Test" }
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
