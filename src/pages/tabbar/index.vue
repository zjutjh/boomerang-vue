<template>
  <div class="container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar :list="tabbarList"></tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import tabbar from './com/tabbar'

export default {
  components: {
    tabbar
  },
  data () {
    return {
    }
  },
  methods: {
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
