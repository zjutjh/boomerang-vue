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
  font-family: 'PingFang SC', Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
  overflow: hidden;
}

.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
}

@media (min-width: 560px) {
  #app {
    margin: 0 auto;
    max-width: 560px;
    border-style: dashed;
    border-color: rgba(0, 0, 0, .1);
    border-width: 0 1px;
  }
  .container {
    margin: 0 auto;
    max-width: 560px;
  }
}
</style>
