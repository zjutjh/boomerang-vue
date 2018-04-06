<template>
  <div class="container">
    <tab :list="tabList"/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import * as Constants from './constant'
import tab from './com/tab'

export default {
  name: 'index',
  components: {
    tab
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
      tabIndex: (state) => state.index.tabIndex,
      tabList: (state) => state.index.tabList
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
</style>
