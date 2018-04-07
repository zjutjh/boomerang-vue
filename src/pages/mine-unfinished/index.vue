<template>
  <div class="container">
    <huge-image-list :source="itemList" tyoe="lost" badge="未完成" :description="fixDescription" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HugeImageList from '../../components/huge-image-list'

export default {
  name: 'mine-unfinished',
  components: {
    HugeImageList
  },
  data () {
    return {
    }
  },
  mounted: async function () {
    const res = await this.fetch(this.API('mine/unfinished'))
    this.updateMineUnfinishedItemList(this.getValue(res, 'data.items', null))
  },
  methods: {
    ...mapMutations([
      'updateMineUnfinishedItemList'
    ]),
    fixDescription: function (data) {
      return `发帖于${data}`
    }
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      itemList: (state) => state.mineUnfinished.itemList
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
</style>
