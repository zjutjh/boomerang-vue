<template>
  <div class="container padding-tabbar">
    <div class="m-form">
      <div class="input-group">
        <input class="input-item" placeholder="请输入标题" />
        <textarea class="input-item" placeholder="详细描述……">
        </textarea>
      </div>
      <div class="input-image-group">
        <div class="input-image-item">
          <img src="//up.enterdesk.com/edpic_source/55/34/ac/5534acffb3f7e6d00de9f40176e68cd9.jpg"/>
          <i class="delete"></i>
        </div>
        <div class="input-image-item">
          <img src="//up.enterdesk.com/edpic_source/59/4f/e8/594fe8bd99b7b1c23bee38dd1b88fda2.jpg"/>
          <i class="delete"></i>
        </div>
        <div class="input-image-item">
        </div>
      </div>
      <div class="form-group">

        <!-- 失物招领类型 -->
        <div class="form-item huge">
          <div class="label">类型</div>
          <div class="content column">
            <div class="radio-group inline">
              <div class="radio-item">
                <input type="radio" id="type-lost" name="type" checked/>
                <label for="type-lost">寻找失物</label>
              </div>
              <div class="radio-item">
                <input type="radio" id="type-find" name="type"/>
                <label for="type-find">寻找失物</label>
              </div>
            </div>
            <div class="tip">
              你选择了“寻找失物”，这代表你丢了某样东西
            </div>
          </div>
        </div>

        <!-- 失物招领分类 -->
        <div class="form-item">
          <div class="label">分类</div>
          <div class="content">
            <div class="touchable-input">
              <select>
                <option value='' disabled selected style='display:none;'>请选择分类</option>
                <option value="1">校园卡</option>
                <option value="2">校园卡1</option>
                <option value="3">校园卡2</option>
                <option value="4">校园卡3</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 地点 -->
        <div class="form-item">
          <div class="label">地点</div>
          <div class="content">
            <input placeholder="请输入地点"/>
          </div>
        </div>

        <!-- 联系类型 -->
        <div class="form-item">
          <div class="label">联系类型</div>
          <div class="content">
            <div class="touchable-input">
              <select>
                <option value='' disabled selected style='display:none;'>请选择类型</option>
                <option value ="1">手机</option>
                <option value ="2">QQ</option>
                <option value="3">微信号</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 联系方式 -->
        <div class="form-item">
          <div class="label">联系方式</div>
          <div class="content">
            <input placeholder="请输入联系方式"/>
          </div>
        </div>
      </div>

      <div class="u-button disable">发帖</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  components: {
  },
  data () {
    return {
    }
  },
  created: function () {
    this.$store.dispatch('runAfterLogin')
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";

  .container {
    background: rgba(238, 238, 238, 0.50);
  }
</style>
