<template>
  <div class="container padding-tabbar">
    <div class="m-form">
      <div class="input-group">
        <input class="input-item" placeholder="请输入标题" />
        <textarea class="input-item" placeholder="详细描述……">
        </textarea>
      </div>
      <div class="input-image-group">
          <ul>
            <li class="input-image-item" v-for="(url,index) in imgList" :key="index">
              <img :src="url.file.src">
              <i class="delete" @click.stop="deleteImg(index)"></i>
            </li>
          </ul>
          <div class="input-image-item" @click="chooseType" v-if="imgList.length < 5">
          </div>
          <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
      </div>
      <div class="form-group">

        <!-- 失物招领类型 -->
        <div class="form-item huge">
          <div class="label">类型</div>
          <div class="content column">
            <div class="radio-group inline">
              <div class="radio-item">
                <input type="radio" id="type-lost" name="type" value="你选择了“寻找失物”，这代表你丢失了某样东西" v-model="abs" checked/>
                <label for="type-lost">寻找失物</label>
              </div>
              <div class="radio-item">
                <input type="radio" id="type-find" value="你选择了“寻找失主”，这代表你找到了某样东西" name="type" v-model="abs"/>
                <label for="type-find">寻找失主</label>
              </div>
            </div>
            <div class="tip">
              {{abs}}
            </div>
          </div>
        </div>

        <!-- 失物招领分类 -->
        <div class="form-item">
          <div class="label">分类</div>
          <div class="content">
            <div class="touchable-input">
              <select>
                <option v-for="(item,index) in types" :key="index">{{types}}</option>
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
        <!--<div class="form-item">
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
        </div>-->

        <!-- 联系方式 -->
        <div class="form-item">
          <div class="label">手机号码</div>
          <div class="content">
            <input placeholder="请输入手机号码"/>
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
      title: '',
      details: '',
      types: [],
      imgList: [],
      abs: '',
      limit: 5,
      size: 0

    }
  },
  created: function () {
    this.$store.dispatch('runAfterLogin')
  },
  methods: {
    chooseType () {
      document.getElementById('upload_file').click()
    },
    fileChange (el) {
      if (!el.target.files[0].size) return
      this.fileList(el.target)
      el.target.value = ''
    },
    fileList (fileList) {
      let files = fileList.files
      for (let i = 0; i < files.length; i++) {
        // 判断是否为文件夹
        if (files[i].type !== '') {
          this.fileAdd(files[i])
        } else {
          // 文件夹处理
          this.folders(fileList.items[i])
        }
      }
    },
    folders (files) {
      let _this = this
      if (files.kind) {
        files = files.webkitGetAsEntry()
      }
      files.createReader().readEntries(function (file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i])
          } else {
            _this.folders(file[i])
          }
        }
      })
    },
    fileAdd (file) {
      if (this.limit !== undefined) this.limit--
      if (this.limit !== undefined && this.limit < 0) return // 总大小
      this.size = this.size + file.size // 判断是否为图片文件
      if (file.type.indexOf('image') === -1) {
        this.message('请选择图片文件')
      } else {
        let reader = new FileReader()
        let image = new Image()
        let _this = this
        reader.readAsDataURL(file)
        reader.onload = function () {
          file.src = this.result
          image.onload = function () {
            let width = image.width
            let height = image.height
            file.width = width
            file.height = height
            _this.imgList.push({
              file
            })
            console.log(_this.imgList)
          }
          image.src = file.src
        }
      }
    },
    foldersAdd (entry) {
      let _this = this
      entry.file(function (file) {
        _this.fileAdd(file)
      })
    },
    deleteImg (index) {
      this.size = this.size - this.imgList[index].file.size // 总大小
      this.imgList.splice(index, 1)
      if (this.limit !== undefined) this.limit = 6 - this.imgList.length
      this.message('移除成功', 'el-icon-check')
    }
    /* showDetails:function () {
      this.&http.get().then(function (res) {
        this.Items=res.body;
      })
    } */
  },
  mounted: function () {
    // this.showDetails()
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
