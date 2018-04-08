<template>
  <div class="m-announcement" v-if="canShowAnnouncement">
    <span class="summary">公告：{{summary}}</span><span class="check-detail" @click="showModal">点击查看</span>
    <modal :show="canShowModal" :confirm="hideModal" :title="title" :content="content"/>
  </div>
</template>

<script>
import Modal from '../modal'

export default {
  name: 'announcement',
  components: {
    Modal
  },
  created: async function () {
    const res = await this.fetch(this.API('announcement'))
    const data = this.getValue(res, 'data', null)
    this.summary = data.summary || (data.content.slice(0, 12) + '...')
    this.title = data.title || '公告'
    this.content = data.content
    this.canShowAnnouncement = true
  },
  data: () => ({
    canShowAnnouncement: false,
    title: '',
    content: '',
    summary: '难忘今宵~难忘今宵~难忘今宵~',
    canShowModal: false
  }),
  methods: {
    showModal: function () {
      this.canShowModal = true
    },
    hideModal: function () {
      this.canShowModal = false
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
