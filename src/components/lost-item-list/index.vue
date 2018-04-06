<template>
  <div class="m-lost-item-list">
    <div class="tip" v-if="source === null">
      加载中……
    </div>
    <div class="tip" v-else-if="source.length === 0">
      暂时没有内容哦~
    </div>
    <ul class="list" v-else>
      <li class="item" v-for="(item, index) in source" :key="'lost-item-list_' + type + '_' + index">
        <div class="content">
          <div class="title">{{item.title}}</div>
          <div class="description">{{item.description}}</div>
          <div class="subtitle">{{item.type.name}} · {{item.updated_at}}</div>
        </div>
        <div class="image" :style="{
          backgroundImage: item.images[0] ? `url(${item.images[0]})` : '',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  props: [ 'source', 'type' ],
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";
</style>
