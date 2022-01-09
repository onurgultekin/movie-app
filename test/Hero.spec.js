import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Hero from '@/components/Hero.vue'

describe('Hero', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Hero)
    expect(wrapper.vm).toBeTruthy()
  })
})
