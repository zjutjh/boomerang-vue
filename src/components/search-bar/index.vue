<template>
  <div class="m-search">
    <input class="search" id="search-bar" placeholder="搜索" v-model="searchText">
    <img class="search-icon" src="./img/search-icon.png"/>
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
