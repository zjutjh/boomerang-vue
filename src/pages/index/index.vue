<template>
  <div class="container">
    <tab :list="tabList"/>
    <div class="tab-container">
      <transition
        name="custom-classes-transition"
        :enter-active-class="enterTransitionName"
        :leave-active-class="leaveTransitionName"
      >
        <keep-alive>
            <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import tab from './com/tab'

export default {
  name: 'index',
  components: {
    tab
  },
  data () {
    return {
      enterTransitionName: 'next animated fadeInRight',
      leaveTransitionName: 'animated fadeOutLeft'
    }
  },
  methods: {
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'lost') {
        this.enterTransitionName = 'next animated fadeInLeft'
        this.leaveTransitionName = 'animated fadeOutRight'
      } else {
        this.enterTransitionName = 'next animated fadeInRight'
        this.leaveTransitionName = 'animated fadeOutLeft'
      }
    }
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
  .tab-container {
    position: relative;
  }
</style>
