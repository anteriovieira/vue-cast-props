import { createLocalVue, mount } from '@vue/test-utils'
import VueCastProps, { CastMixin } from '../src'
import ProfileStub from './stubs/Profile'

const CastProps = {
  mixins: [CastMixin],
  props: {
    value: {
      cast: 'array'
    },
    name: {
      cast: 'uppercase'
    },
    username: {
      cast: 'trim'
    },
    date: {
      cast: 'date'
    },
    other: String,
    age: {
      cast: Number
    }
  },

  render (h) {
    return h('span', `${this.value}`)
  }
}

describe('VueCastProps', () => {
  test('should install if using the script tag', () => {
    const localVue = createLocalVue()
    window.Vue = localVue

    expect(window.Vue).toBe(localVue)

    window.Vue.use(window.VueCastProps, {
      dsn: 'http://abc@example.com:80/2',
      disableReport: true
    })

    expect(window.Vue._installedPlugins[0]).toBe(VueCastProps)
  })

  test('adds values to $c cast', () => {
    const wrapper = mount(CastProps, {
      propsData: {
        value: 'fo',
        other: 'hey'
      }
    })

    expect(wrapper.props().value).toBe('fo')
    expect(wrapper.vm.$c).toBeDefined()
    expect(wrapper.vm.$c.value).toEqual(['f', 'o'])
  })

  test('should cast age from type', () => {
    const wrapper = mount(CastProps, {
      propsData: {
        age: '29'
      }
    })

    expect(wrapper.vm.$c.age).toBe(29)
  })

  test('should add custom cast', () => {
    const localVue = createLocalVue()
    localVue.use(VueCastProps, {
      casts: {
        uppercase (v) {
          return v.toUpperCase()
        },
        trim (v) {
          return v.trim()
        }
      }
    })

    const wrapper = mount(CastProps, {
      propsData: {
        name: 'FoBar',
        username: ' fobar ',
        date: '1988-11-05'
      },
      localVue
    })

    expect(wrapper.vm.$c.name).toEqual('FOBAR')
    expect(wrapper.vm.$c.username).toEqual('fobar')
    expect(wrapper.vm.$c.date).toEqual(new Date('1988-11-05'))
  })

  test('should use default casts', () => {
    const localVue = createLocalVue()
    localVue.use(VueCastProps)

    const wrapper = mount(ProfileStub, {
      propsData: {
        age: 28
      },
      localVue
    })

    expect(wrapper.vm.$c.age).toEqual(28)
  })
})
