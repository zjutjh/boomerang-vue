<template>
  <transition name="fade">
    <div class="toast-block" v-if="show">
      <div class="ui-status-cnt">
        <i class="iconfont" :class="['icon-'+status]" v-if="status"></i>
        <div class="content" v-if="title">{{title}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    show: function () {
      return this.$store.state.toast.show
    },
    status: function () {
      return this.$store.state.toast.status
    },
    title: function () {
      return this.$store.state.toast.title
    }
  },
  mounted: function () {
  },
  methods: {},
  components: {}
}
</script>

<!-- Styles -->

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
