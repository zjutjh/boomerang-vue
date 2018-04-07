<template>
  <div class="container">
    <div class="m-user-info">
      <div class="avatar">
        <img src="//up.enterdesk.com/edpic_source/62/7a/6b/627a6ba1dd7bf82738c85bf6660d0a39.jpg"/>
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
        <li class="item touchable">
          <div class="label">已寻回</div>
          <div class="badge">6</div>
        </li>
        <li class="item touchable">
          <div class="label">已认领</div>
          <div class="badge">7</div>
        </li>
        <li class="item touchable">
          <div class="label">未完成</div>
          <div class="badge">0</div>
        </li>
      </ul>
      <div class="title">设置</div>
      <ul class="list">
        <li class="item touchable">
          <div class="label">更改联系方式</div>
        </li>
        <li class="item touchable">
          <div class="label">关于</div>
        </li>
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
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
