<template>
  <div class="m-search">
    <input class="search" id="search-bar" placeholder="请输入关键词..." v-model="searchText">
    <label for="search-bar" class="search-icon" @click="search">搜索</label>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  data: () => ({
    searchText: ''
  }),
  methods: {
    search () {
      this.$router.push({
        name: 'search',
        query: {
          searchText: this.searchText
        }
      })
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
