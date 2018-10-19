<template>
  <div class="container padding-tabbar">
    <div class="m-form">
      <div class="input-group">
        <input class="input-item" placeholder="请输入标题" name="title" v-model="title" />
        <textarea class="input-item" placeholder="详细描述……" name="details" v-model="details">
        </textarea>
      </div>
      <div class="input-image-group">
          <ul>
            <li class="input-image-item" v-for="(url,index) in imgList" :key="index">
              <img :src="url.file.src">
              <i class="delete" @click.stop="deleteImg(index)"></i>
            </li>
          </ul>
          <div class="input-image-item" v-on:click="chooseType" v-if="imgList.length < 5">
          </div>
          <input @change="fileChange()" type="file" id="file" ref="files" multiple style="display: none"/>
      </div>
      <div class="form-group">

        <!-- 失物招领类型 -->
        <div class="form-item huge">
          <div class="label">类型</div>
          <div class="content column">
            <div class="radio-group inline">
              <div class="radio-item" >
                <input type="radio" id="type-lost" name="type" value="0" v-model="abs" checked/>
                <label for="type-lost">寻找失物</label>
              </div>
              <div class="radio-item">
                <input type="radio" id="type-find" name="type" value="1" v-model="abs"/>
                <label for="type-find">寻找失主</label>
              </div>
            </div>
            <div class="tip" v-if="abs === '0'">
              你选择了“寻找失物”，这代表你丢失了某样东西
            </div>
            <div class="tip" v-else>
              你选择了“寻找失主”，这代表你找到了某样东西
            </div>
          </div>
        </div>

        <!-- 失物招领分类 -->
        <div class="form-item">
          <div class="label">分类</div>
          <div class="content">
            <div class="touchable-input">
              <select v-model="selected">
                <option>请选择</option>
                <option v-for="item in items" :key="item.index" :source="itemList">{{item.type}}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 地点 -->
        <div class="form-item">
          <div class="label">地点</div>
          <div class="content">
            <input placeholder="请输入地点" name="place" v-model="place" />
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
            <input placeholder="请输入手机号码" name="contact" v-model="contact" />
          </div>
        </div>
      </div>

      <div class="u-button" @click="upDate">发帖</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'add',
  components: {
  },
  data () {
    return {
      title: '',
      details: '',
      items: [],
      selected: '',
      imgList: [],
      abs: '0',
      place: '',
      contact: '',
      limit: 5,
      size: 0
    }
  },
  created: function () {
    this.$store.dispatch('runAfterLogin')
  },
  methods: {
    // import toast
    ...mapMutations([
      'showToast',
      'showLoading',
      'hideLoading',
      'hideToast',
      'updateAddItemList'
    ]),
    // image upload
    chooseType () {
      this.$refs.files.click()
    },
    fileChange () {
      if (!this.$refs.files.files[0].size) return
      this.fileList(this.$refs.files)
      this.$refs.files.value = ''
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
        this.showToast('请选择图片文件')
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
      this.showToast('移除成功')
    },
    // 上传文件
    async upDate () {
      let formData = new FormData()
      if (this.title === '') {
        this.showToast('标题不能为空')
        return
      }
      if (this.details === '') {
        this.showToast('描述不能为空')
        return
      }
      if (this.selected === '') {
        this.showToast('请选择分类')
        return
      }
      if (this.place === '') {
        this.showToast('地点不能为空')
        return
      }
      if (!/^1\d{10}$/.test(this.contact)) {
        this.showToast('请输入正确的手机号码')
        return
      }
      formData.append('title', this.title)
      formData.append('description', this.details)
      let imgList = this.imgList
      if (imgList.length > 0) {
        for (var i = 0; i <= imgList.length; i++) {
          formData.append('image', imgList[i])
        }
      }
      formData.append('type', this.abs)
      formData.append('item', this.selected)
      formData.append('lost_place', this.place)
      formData.append('contact', this.contact)
      const option = {
        method: 'post',
        body: formData
      }
      fetch(this.API('add/lists'), option).then(function (res) {
        console.log(res)
        this.showToast('发布成功！')
        return res.json()
      }).catch((err) => {
        console.log('err', err)
      })
    }
  },

  mounted: async function () {
    const res = await this.fetch(this.API('add/lists'))
    this.updateAddItemList(this.getValue(res, 'data.items', null))
  },
  computed: {
    // 使用对象展开运算符将 state 混入 computed 对象中
    ...mapState({
      itemList: (state) => state.add.itemList
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./style.scss";

  .container {
    background: rgba(238, 238, 238, 0.50);
  }
</style>
