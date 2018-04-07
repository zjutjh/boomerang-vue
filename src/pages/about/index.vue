<template>
  <div class="container">
    <div class="m-define-list">
      <div class="item">
        <div class="title">Boomerang - 失物招领</div>
        <div class="content">v0.1.0</div>
      </div>
      <div class="item">
        <div class="title">开发成员</div>
        <div class="content">xxx、xxx、xxx、xxx</div>
      </div>
    </div>
    <div class="m-markdown">
      <div class="h4">我们的失物招领项目 - Boomerang</div>
      <div class="comment">Boomerang译为『回力标』<br/>
        我们项目的意思的就是『回力标』，回力标是古代的打猎工具。将回力标掷出后，将会飞回来，回到原持有者手中。<br/>
        而我们最大的期望就是希望所有丢失的物品都能像回力标一样回到失主的手中。</div>
      <div class="h4">你一定要知道的</div>
      <ol>
        <li>可发布的栏目有『寻找失物』和『寻找失主』。</li>
        <li>在失主关注了『浙江工业大学精弘网络』微信公众号的前提下，被拾到的校园卡可以直接推送给失主。</li>
        <li>在搜索框内输入你想找的物品名/地点/时段，可以更精确地找到目标物。</li>
        <li>刚完善的『我的页面』中可以对已发布的内容进行编辑。</li>
        <li>每个账号在24小时之内只可收到一次推送。</li>
      </ol>
      <div class="h4">你也许想知道的</div>
      <div class="text">
        <p>这个项目源于一个夜晚的头脑风暴，由一群（热心的）大一在两位技术特别优秀的学长带领下（/提供了技术指导的情况下）开发完成，目前还有很多需要改进的地方，我们在期待每一位失主通过这个平台找到自己的失物的同时，包容我们现有的缺陷，为我们提出宝贵的意见。</p>
        <p>也请和我们一起相信，精弘在未来的日子里将会做出更多更好的产品。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
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

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
  .container {
    background-color: #eeeeee;
  }

  .m-markdown {
    flex: 1;
    margin-top: 1.4rem;
  }
</style>
