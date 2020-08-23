export const state = () => ({
  onLogin: false,
	isLogin: false,
  email: '',
  password: '',
  token: ''
})

export const mutations = {
	SET_USER(state, payload) {
		state.user = payload
  },
  LOGIN_MODAL(state, payload) {
    state.onLogin = payload
  }
}

export const actions = {
	async setOpenLogin({ commit }, payload) {
    console.log('payload; ', payload)
    commit('LOGIN_MODAL', payload)
	}
}