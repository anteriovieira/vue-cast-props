import { mount } from '@vue/test-utils'
import CastMixin from '../src/CastMixin'

const CastProps = {
  mixins: [CastMixin],
  props: {
    value: {
      cast: 'array'
    },
    other: String
  },

  render (h) {
    return h('span', `${this.value}`)
  }
}

describe('VueCastProps', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(CastProps, {
      propsData: {
        value: 'fo',
        other: 'hey'
      }
    })
  })

  test('adds values to $c cast', () => {
    expect(wrapper.props().value).toBe('fo')
    expect(wrapper.vm.$c).toBeDefined()
    expect(wrapper.vm.$c.value).toEqual(['f', 'o'])
  })
})
