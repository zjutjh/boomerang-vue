<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
}
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
