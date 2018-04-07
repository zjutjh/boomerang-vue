<template>
  <div class="container">
    <template v-if="detailData">
      <carousel class="m-carousel" perPage="1">
        <slide class="slide" v-for="(image, index) in detailData.images" :key="'detail-image_' + index">
          <img :src="image"/>
        </slide>
      </carousel>
      <div class="m-define-list show-last-border-bottom">
        <div class="item">
          <div class="title">寻找失物</div>
          <div class="content">{{detailData.title}}</div>
        </div>
        <div class="item">
          <div class="title">地点</div>
          <div class="content">{{detailData.lost_place}}</div>
        </div>
        <div class="item">
          <div class="title">联系方式 · 手机号</div>
          <div class="content">{{detailData.lost_place}}</div>
        </div>
        <div class="item">
          <div class="title">详情</div>
          <div class="content">{{detailData.description}}</div>
        </div>
      </div>
      <!-- 如果是当前用户发的贴 -->
      <template>
        <div class="u-button info">编辑</div>
        <div class="u-button">标记为「xxx」</div>
        <div class="u-button danger">删除</div>
      </template>
    </template>
  </div>
</template>

<script>
import './style.scss'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'detail',
  components: {
  },
  data () {
    return {
    }
  },
  mounted: async function () {
    const id = this.$route.params.id
    const res = await this.fetch(this.API('detail'), {
      id
    })
    this.updateDetailData(this.getValue(res, 'data', null))
  },
  methods: {
    ...mapMutations([
      'updateDetailData'
    ])
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      detailData: (state) => state.detail.detailData
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  .container {
    padding-bottom: 10rem;
  }
</style>
