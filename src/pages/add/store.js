import * as Constants from './constant'

export const state = {
  tabbarIndex: 0,
  tabbarList: [
    {
      active: true,
      icon: require('./img/lost-hover.png'),
      hover: require('./img/lost.png'),
      text: '寻物'
    },
    {
      active: false,
      icon: require('./img/found-hover.png'),
      hover: require('./img/found.png'),
      text: '招领'
    },
    {
      active: false,
      add: true,
      icon: require('./img/add.png'),
      text: '添加'
    },
    {
      active: false,
      icon: require('./img/search-hover.png'),
      hover: require('./img/search.png'),
      text: '搜索'
    },
    {
      active: false,
      icon: require('./img/mine-hover.png'),
      hover: require('./img/mine.png'),
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
