import Logo from '@/components/Logo.vue'
import { mount } from '@vue/test-utils'
import test from 'ava'

test('is a Vue instance', (t) => {
  const wrapper = mount(Logo)
  t.is(wrapper.isVueInstance(), true)
})
