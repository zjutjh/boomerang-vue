<template>
  <div class="container m-tabbar">
    <ul class="list">
      <li v-for="(item, index) in list" v-bind:key="'tabbar_' + index" class="item" :class="{active: item.active}" @click="onClick(index)">
        <template v-if="item.add !== true">
          <img class="icon" :src="item.active ? item.hover : item.icon"/>
          <div class="text">{{item.text}}</div>
        </template>
        <template v-else>
          <img class="icon add" :src="item.icon"/>
        </template>
      </li>
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
    'index',
    'list'
  ],
  watch: {
  },
  methods: {
    onClick: function (index) {
      this.$emit('onClick', index)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
