
export const state = {
  show: false,
  status: null,
  title: ''
}

export const getters = {
}

export const mutations = {
  showToast (state, payload) {
    const title = typeof payload === 'string' ? payload : payload.title
    if (!title) {
      return false
    }
    state.status = payload.status || 'error'
    state.show = true
    state.title = title
    state.duration = payload.duration || 1500

    setTimeout(() => {
      this.commit('hideToast')
    }, state.duration)
  },
  showLoading (state, payload) {
    const title = typeof payload === 'string' ? payload : payload.title
    if (!title) {
      return false
    }
    state.status = 'loading'
    state.show = true
    state.title = title
    state.duration = payload.duration || 1500
  },
  hideLoading (state, payload) {
    state.show = false
  },
  hideToast (state, payload) {
    state.show = false
  }
}

export const actions = {
}
