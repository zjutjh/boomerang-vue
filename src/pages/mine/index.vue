<template>
  <div class="container">
    <div class="m-user-info">
      <!--<div class="avatar">-->
        <!--<img :src="userInfo.headImg"/>-->
      <!--</div>-->
      <div class="content">
        <div class="nickname">{{userInfo.name}}</div>
        <!--<div class="sub-info">QQ：{{qq}}</div>-->
        <!--<div class="sub-info">手机号：{{num}}</div>-->
      </div>
    </div>

    <div class="m-setting-list">
      <div class="title">失物招领</div>
      <ul class="list">
        <router-link tag="li" to="/mine/lost" class="item touchable">
          <div class="label">已寻回</div>
          <div class="badge">6</div>
        </router-link>
        <router-link tag="li" to="/mine/found" class="item touchable">
          <div class="label">已认领</div>
          <div class="badge">7</div>
        </router-link>
        <router-link tag="li" to="/mine/unfinished" class="item touchable">
          <div class="label">未完成</div>
          <div class="badge">0</div>
        </router-link>
      </ul>
      <div class="title">设置</div>
      <ul class="list">
        <!--<router-link tag="li" to="/edit-contact" class="item touchable">-->
          <!--<div class="label">更改联系方式</div>-->
        <!--</router-link>-->
        <router-link tag="li" to="/about" class="item touchable">
          <div class="label">关于</div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'mine',
  components: {
  },
  data () {
    return {
    }
  },
  created: function () {
    this.$store.dispatch('runAfterLogin')
  },

  methods: {
    ...mapMutations([

    ])
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      userInfo: (state) => state.auth.userInfo
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
