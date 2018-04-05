<template>
  <div class="m-tab">
    <ul class="tab-list">
      <li v-for="(item, index) in list" :key="'tab_' + index" class="item" :class="{active: item.active}" @click="onClick(index)">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tab',
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
