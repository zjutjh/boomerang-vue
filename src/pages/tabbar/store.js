import * as Constants from './constant'

export const state = {
  tabbarIndex: 0,
  tabbarList: [
    {
      path: '/',
      active: true,
      icon: require('./img/index.png'),
      hover: require('./img/index-hover.png'),
      text: '首页'
    },
    {
      path: '/add',
      active: false,
      icon: require('./img/add.png'),
      hover: require('./img/add-hover.png'),
      text: '添加'
    },
    {
      path: '/mine',
      active: false,
      icon: require('./img/mine.png'),
      hover: require('./img/mine-hover.png'),
      text: '我的'
    }
  ]
}

export const getters = {

}

export const mutations = {
  [Constants.TABBAR_CHANGE_TABBAR_INDEX]: (state, payload) => {
    state.tabbarIndex = payload.index
    state.tabbarList.forEach((item, index) => {
      item.active = payload.index === index
    })
  }
}

export const actions = {

}
