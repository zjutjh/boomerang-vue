<template>
  <div class="container">
    <div class="m-user-info">
      <div class="avatar">
        <img src="//up.enterdesk.com/edpic_source/05/74/c7/0574c7377e48358cbfa82bfa1205b99f.jpg"/>
      </div>
      <div class="content">
        <div class="nickname">尼古拉斯</div>
        <div class="sub-info">QQ：未填写</div>
        <div class="sub-info">手机号：1578888888</div>
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
  },
  computed: {
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
