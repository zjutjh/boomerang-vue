<template>
  <div id="app">
    <toast></toast>
    <transition
      name="custom-classes-transition"
      :enter-active-class="enterTransitionName"
      :leave-active-class="leaveTransitionName"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Toast from './components/toast'
export default {
  name: 'App',
  components: {
    Toast
  },
  data () {
    return {
      history: [
        '/'
      ],
      enterTransitionName: 'next animated fadeInRight',
      leaveTransitionName: 'animated fadeOutLeft'
    }
  },
  watch: {
    '$route' (to, from) {
      function isIndexPath (path) {
        return ['/', '/index', '/index/lost', '/index/find', '/add', '/mine'].includes(path)
      }
      const length = this.history.length
      if (isIndexPath(this.history[length - 1])) {
        this.history = [
          '/index/lost',
          '/add',
          '/mine'
        ]
      }
      if (isIndexPath(to.path) && !isIndexPath(from.path)) {
        this.history.pop()
        this.enterTransitionName = 'next animated fadeInLeft'
        this.leaveTransitionName = 'animated fadeOutRight'
        return
      }
      if (this.history.length < 2) {
        this.history.push(to.path)
      } else {
        if (to.path === (this.history[length - 2])) {
          this.history.pop()
          this.enterTransitionName = 'next animated fadeInLeft'
          this.leaveTransitionName = 'animated fadeOutRight'
        } else {
          this.history.push(to.path)
          this.enterTransitionName = 'next animated fadeInRight'
          this.leaveTransitionName = 'animated fadeOutLeft'
        }
      }
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  font-family: 'PingFang SC', Helvetica, Arial, sans-serif;
}

#app {
  position: relative;
  display: flex;
  flex: 1;
  align-self: stretch;
  flex-direction: column;
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
