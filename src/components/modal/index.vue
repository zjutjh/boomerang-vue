<template>
  <div class="m-modal" v-if="show">
    <div class="modal-wrap">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="confirm" @click="confirm">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: [ 'title', 'content', 'show', 'confirm' ],
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
