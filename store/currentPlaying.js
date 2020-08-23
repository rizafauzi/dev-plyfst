export const state = () => ({
	url_video: '',
})

export const mutations = {
	SET_PLAYING(state, payload) {
		state.url_video = payload
	}
}

export const actions = {
  setCurrentPlaying({ commit }, payload) {
    commit('SET_PLAYING', payload)
  }
}