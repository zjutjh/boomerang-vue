<template>
  <div class="m-tab">
    <ul class="tab-list">
      <router-link tag="li" exact :to="item.path" active-class="active" v-for="(item, index) in list" :key="'tab_' + index" class="item" replace>
        {{item.text}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tab-test',
  data () {
    return {
    }
  },
  props: [
    'list'
  ],
  watch: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
