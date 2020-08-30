export const state = () => ({
	device: ''
})

export const getters = {
	getDevice: (state, getters) => {
		if(process.browser) {
      if(window.innerWidth <= 820) {
        return 'MOBILE'
      } else if(window.innerWidth > 820 && window.innerWidth <= 1024) {
        return 'TABLET'
      } else {
        return 'DESKTOP'
      }
    }
	},
	getResolution: (state, getters) => {
		if(process.browser) {
      if(window.innerWidth <= 900) {
        return 'MOBILE'
      } else if(window.innerWidth > 900 && window.innerWidth <= 1024) {
        return 'TABLET'
      } else {
        return 'DESKTOP'
      }
    }
	}
}

export const mutations = {
	setDevice(state, payload) {
		state.items = payload
	}
}

export const actions = {
	async getDeviceMode({ commit }) {
		// let files = await require.context('~/assets/content/home/', false, /\.json$/)
		let data = ''
		await commit('setItems', data)
	}
}