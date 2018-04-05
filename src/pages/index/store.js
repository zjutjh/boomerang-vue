import * as Constants from './constant'

export const state = {
  tabIndex: 0,
  tabList: [
    {
      path: '/',
      active: true,
      text: '寻找失物'
    },
    {
      path: '/found',
      active: false,
      text: '寻找失主'
    }
  ]
}

export const getters = {

}

export const mutations = {
  [Constants.INDEX_CHANGE_TAB_INDEX]: (state, payload) => {
    state.tabIndex = payload.index
    state.tabList.forEach((item, index) => {
      item.active = payload.index === index
    })
  }
}

export const actions = {

}
