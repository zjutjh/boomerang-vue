<template>
  <div class="container">
    <huge-image-list :source="itemList" tyoe="lost" badge="已寻回" :description="fixDescription" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HugeImageList from '../../components/huge-image-list'

export default {
  name: 'mine-lost',
  components: {
    HugeImageList
  },
  data () {
    return {
    }
  },
  mounted: async function () {
    const res = await this.fetch(this.API('mine/lost'))
    this.updateMineLostItemList(this.getValue(res, 'data.items', null))
  },
  methods: {
    ...mapMutations([
      'updateMineLostItemList'
    ]),
    fixDescription: function (data) {
      return `已于${data}寻回`
    }
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      itemList: (state) => state.mineLost.itemList
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
</style>
