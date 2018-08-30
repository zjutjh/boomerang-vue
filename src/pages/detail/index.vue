<template>
  <div class="container">
    <template v-if="detailData">
      <carousel class="m-carousel" :perPage="1">
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
      <template v-if="detailData.uid === userInfo.id">
        <div class="u-button" @click="lostMarkFinished" v-if="detailData.lost_type === 0 && detailData.status === 0">标记为已寻回</div>
        <div class="u-button" @click="foundMarkFinished" v-if="detailData.lost_type === 1 && detailData.status === 0">标记为已认领</div>
        <div class="u-button danger" @click="sureToDelete">删除</div>
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
    ]),
    lostMarkFinished: async function () {
      const canFinished = confirm('你确定要标记为已寻回吗？')
      if (canFinished) {
        const id = this.$route.params.id
        const res = await this.fetch(this.API('lostMark'), {
          params: {
            id
          }
        })
        this.updateDetailData(this.getValue(res, 'data', null))
        alert('成功标记为已寻回')
      }
    },
    foundMarkFinished: async function () {
      const canFinished = confirm('你确定要标记为已认领吗？')
      if (canFinished) {
        const id = this.$route.params.id
        const res = await this.fetch(this.API('foundMark'), {
          params: {
            id
          }
        })
        this.updateDetailData(this.getValue(res, 'data', id))
        alert('成功标记为已认领')
      }
    },
    sureToDelete: async function () {
      const sureToDelete = confirm('你确定要删除吗')
      if (sureToDelete) {
        const id = this.$route.params.id
        await this.fetch(this.API('delete'), {
          params: {
            id
          }
        })
        alert('删除成功')
        this.$router.go(-1)
      }
    }
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      detailData: (state) => state.detail.detailData,
      userInfo: (state) => state.auth.userInfo || {}
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  .container {
    padding-bottom: 10rem;
  }
</style>
