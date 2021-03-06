const env = process.env.NODE_ENV

export const state = {
  token: null,
  userInfo: null
}

export const getters = {
  token: (state, getters) => {
    return state.token
  },
  userInfo: (state, getters) => {
    return state.userInfo
  }
}

export const mutations = {
  updateUserToken: (state, payload) => {
    state.token = payload
  },
  updateUserInfo: (state, payload) => {
    state.userInfo = payload
  }
}

export const actions = {
  /**
   * 获取用户信息操作（有token的情况下）
   * @param context
   * @param vue
   * @returns {Promise<void>}
   */
  async login (context, vue) {
    const res = await vue.fetch(vue.API('getUserInfo'))

    context.commit('updateUserInfo', res.data)
  },
  /**
   * 如果已登录就运行函数，否则跳转认证页面
   * @param context
   * @param func 如果已登录执行的函数
   * @returns {Promise<void>}
   */
  async runAfterLogin (context, func) {
    const token = context.state.token
    const userInfo = context.state.userInfo
    // 如果未登录，跳转微信认证页面
    if (!token || !userInfo) {
      if (env === 'development') {
        location.href = '/#/auth?code=12345'
      } else {
        location.href = 'https://boomerang.zhutianyu.top/oauth'
      }

      return
    }

    // 否则执行函数
    if (typeof func === 'function') {
      func()
    }
  }
}
