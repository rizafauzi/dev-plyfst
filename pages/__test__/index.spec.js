import { shallowMount } from '@vue/test-utils'
import index from '../index.vue'

describe('index.vue', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(index)
	})
	afterEach(() => {
		wrapper.destroy()
	})

	it('should render correctly', () => {
		
		expect(wrapper.element).toMatchSnapshot()
	})

	// it('should change text label when button clicked', () => {
	// wrapper.find('.btn-action').trigger('click.prevent');

	// expect(wrapper.vm.label).toBe('Hello');
	// })
})
