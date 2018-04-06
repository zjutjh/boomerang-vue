<template>
  <div class="container padding-tabbar">
    <search-bar />
    <lost-item-list :source="itemList" type="lost"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SearchBar from '../../components/search-bar'
import LostItemList from '../../components/lost-item-list'

export default {
  name: 'lost',
  components: {
    LostItemList,
    SearchBar
  },
  data () {
    return {
    }
  },
  mounted: async function () {
    const res = await this.fetch(this.API('lost/lists'))
    this.updateLostItemList(this.getValue(res, 'data.items', null))
  },
  methods: {
    ...mapMutations([
      'updateLostItemList'
    ])
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      itemList: (state) => state.lost.itemList
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
</style>
