<template>
  <div class="container">
    <huge-image-list :source="itemList" tyoe="lost" badge="已认领" :description="fixDescription" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HugeImageList from '../../components/huge-image-list'

export default {
  name: 'mine-found',
  components: {
    HugeImageList
  },
  data () {
    return {
    }
  },
  mounted: async function () {
    const res = await this.fetch(this.API('mine/found'))
    this.updateMineFoundItemList(this.getValue(res, 'data.items', null))
  },
  methods: {
    ...mapMutations([
      'updateMineFoundItemList'
    ]),
    fixDescription: function (data) {
      return `已于${data}认领`
    }
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      itemList: (state) => state.mineFound.itemList
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
</style>
