import * as Constants from './constant'

export const state = {
  tabbarIndex: 0,
  tabbarList: [
    {
      path: '/',
      active: true,
      icon: require('./img/lost.png'),
      hover: require('./img/lost-hover.png'),
      text: '寻物'
    },
    {
      path: '/found',
      active: false,
      icon: require('./img/found.png'),
      hover: require('./img/found-hover.png'),
      text: '招领'
    },
    {
      path: '/add',
      active: false,
      add: true,
      icon: require('./img/add.png'),
      text: '添加'
    },
    {
      path: '/search',
      active: false,
      icon: require('./img/search.png'),
      hover: require('./img/search-hover.png'),
      text: '搜索'
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
  [Constants.INDEX_CHANGE_TABBAR_INDEX]: (state, payload) => {
    state.tabbarIndex = payload.index
    state.tabbarList.forEach((item, index) => {
      item.active = payload.index === index
    })
  }
}

export const actions = {

}
