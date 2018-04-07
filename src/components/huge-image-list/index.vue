<template>

  <div class="m-huge-image-list" v-if="source == null">
    <div class="tip" v-if="source == null">
      加载中……
    </div>
  </div>
  <div class="not-found" v-else-if="source.length === 0">
    <div class="content">sorry😞~找不到相关结果</div>
    <router-link tag="div" class="button" to="/add">发帖试试</router-link>
  </div>
  <div class="m-huge-image-list" v-else>
    <ul class="list">
      <li class="item" v-for="(item, index) in source" :key="'huge-image-list_' + type + '_' + index" >
        <img class="image" :src="item.images[0] ? item.images[0] : ''">
        <div class="mask"></div>
        <div class="title">{{item.title}}</div>
        <div class="subtitle">{{description(item.updated_at)}}</div>
        <div class="status">{{badge}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  props: [ 'source', 'type', 'badge', 'description' ],
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
