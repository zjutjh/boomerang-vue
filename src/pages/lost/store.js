import * as Constants from './constant'

export const state = {
  itemList: null
}

export const getters = {

}

export const mutations = {
  [Constants.LOST_UPDATE_ITEM_LIST]: (state, payload) => {
    state.itemList = payload
  }
}

export const actions = {
  updateLostItemList: function (context, data) {
    context.commit(Constants.LOST_UPDATE_ITEM_LIST, data)
  }
}
