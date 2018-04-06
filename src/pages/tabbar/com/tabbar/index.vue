<template>
  <div class="container m-tabbar">
    <ul class="list">
      <router-link tag="li" exact :to="item.path" active-class="active" v-for="(item, index) in list" v-bind:key="'tabbar_' + index" class="item">
        <img class="icon" :src="item.active ? item.hover : item.icon"/>
        <div class="text">{{item.text}}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
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
