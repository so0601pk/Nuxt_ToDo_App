import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe("Index.vue's test", async () => {
  const wrapper = mount(Index)
  await wrapper.get('button').trigger('click')
  expect(wrapper.text()).toContain("currentTab: 'All'")
})
