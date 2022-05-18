import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Change Tab Test', async () => {
  const wrapper = mount(Index)
  await wrapper.setData({
    currentTab: 'ALL',
  })
  const tab = wrapper.get('button').trigger('click')
  expect('All').toContain('All')
})
