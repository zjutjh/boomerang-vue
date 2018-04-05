<template>
  <div class="container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar :list="tabbarList" :index="tabbarIndex" @onClick="onTabbarClick"></tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import tabbar from './com/tabbar'
import * as Constants from './constant'

export default {
  components: {
    tabbar
  },
  data () {
    return {
    }
  },
  methods: {
    changeTabbar (index) {
      this.$store.commit(Constants.TABBAR_CHANGE_TABBAR_INDEX, {
        index
      })
    },
    onTabbarClick: function (index) {
      const item = this.tabbarList[index]
      if (!item) {
        throw new Error('Cannot find tab-bar item!')
      }
      // 改变tabbar激活状态/序号
      this.changeTabbar(index)
      // 改变路径
      this.$router.push({ path: item.path })
    }
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      tabbarIndex: (state) => state.tabbar.tabbarIndex,
      tabbarList: (state) => state.tabbar.tabbarList
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
</style>
