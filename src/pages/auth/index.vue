<template>
  <div class="container">
    <div class="not-found">
      <div class="content">跳转中……</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  name: 'auth',
  components: {
  },
  created: async function () {
    const code = this.getValue(this.$route, 'query.code')
    const res = await this.fetch(this.API('autoLogin'), {
      params: {
        code
      }
    })
    const token = this.getValue(res, 'data.token')
    this.updateUserToken(token)
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'updateUserToken'
    ]),
    ...mapActions([
      'login'
    ])
  },
  watch: {
    token: async function (after, before) {
      if (after) {
        // 登录，并获取用户信息
        await this.login(this)
        // 跳转到首页
        this.$router.push('index')
      }
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token
    })
  }
}
</script>
