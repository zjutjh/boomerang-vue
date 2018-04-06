import * as Constants from './constant'

export const state = {
  itemList: null
}

export const getters = {

}

export const mutations = {
  [Constants.FIND_UPDATE_ITEM_LIST]: (state, payload) => {
    state.itemList = payload
  }
}

export const actions = {
  updateFindItemList: function (context, data) {
    context.commit(Constants.FIND_UPDATE_ITEM_LIST, data)
  }
}
