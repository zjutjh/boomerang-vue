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
          <div class="input-image-item" @click="chooseType" v-if="imgList.length < 5">
          </div>
          <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
      </div>
      <div class="form-group">

        <!-- 失物招领类型 -->
        <div class="form-item huge">
          <div class="label">类型</div>
          <div class="content column">
            <div class="radio-group inline" @change="tipChoose">
              <div class="radio-item" >
                <input type="radio" id="type-lost" name="type" value="0" v-model="abs" checked/>
                <label for="type-lost">寻找失物</label>
              </div>
              <div class="radio-item">
                <input type="radio" id="type-find" name="type" value="1" v-model="abs"/>
                <label for="type-find">寻找失主</label>
              </div>
            </div>
            <div class="tip">
              {{tips}}
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
                <option v-for="item in items" :key="item.index">{{item.type}}</option>
                <!--<input placeholder="其他" v-model="Else"/>-->
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

      <div v-bind:class="[button , { disable: isActive }]" @click="upDate">发帖</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'add',
  components: {
  },
  data () {
    return {
      isActive: true,
      button: 'u-button',
      title: '',
      details: '',
      items: [
        {type: '校园卡', index: 1},
        {type: '雨伞', index: 2},
        {type: '钥匙', index: 3},
        {type: '图书', index: 4},
        {type: '其它', index: 5}
      ],
      selected: '',
      Else: '',
      imgList: [],
      tips: '',
      abs: '0',
      place: '',
      contact: '',
      limit: 5,
      size: 0,
      titleState: false,
      detailsState: false,
      itemsState: false,
      placeState: false,
      contactState: false
    }
  },
  created: function () {
    this.$store.dispatch('runAfterLogin')
  },
  watch: {
    title: function (newVal, oldVal) {
      if (newVal === '') {
        // alert('标题不能为空')
        this.showToast('标题不能为空')
        console.log('title wrong')
        this.placeState = false
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      } else {
        console.log('title correct')
        this.titleState = true
        console.log(this.title)
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      }
    },
    details: function (newVal, oldVal) {
      if (newVal === '') {
        this.showToast('描述不能为空')
        console.log('details wrong')
        this.detailsState = false
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      } else {
        console.log('details correct')
        this.detailsState = true
        console.log(this.details)
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      }
    },
    selected: function (newVal, oldVal) {
      if (this.selected !== '') {
        this.itemsState = true
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      } else {
        this.itemsState = false
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      }
      console.log(this.selected)
    },
    place: function (newVal, oldVal) {
      if (newVal === '') {
        this.showToast('地点不能为空')
        console.log('place wrong')
        this.placeState = false
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      } else {
        console.log('place correct')
        this.placeState = true
        console.log(this.place)
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      }
    },
    contact: function (newVal, oldVal) {
      if (!/^1\d{10}$/.test(newVal)) {
        console.log('contact wrong')
        this.contactState = false
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      } else {
        console.log('contact correct')
        this.contactState = true
        console.log(this.contact)
        this.isActive = !(this.titleState && this.detailsState && this.placeState && this.contactState && this.itemsState)
      }
    }
  },
  methods: {
    // import toast
    ...mapMutations([
      'showToast',
      'showLoading',
      'hideLoading',
      'hideToast'
    ]),
    // tip control
    tipChoose () {
      var radio = document.getElementsByName('type')
      for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
          console.log(radio[i].id)
          var checkId = radio[i].id
        }
      }
      if (checkId === 'type-lost') {
        this.tips = '你选择了“寻找失物”，这代表你丢失了某样东西'
        console.log(this.tips)
      }
      if (checkId === 'type-find') {
        this.tips = '你选择了“寻找失主”，这代表你找到了某样东西'
        console.log(this.tips)
      }
    },
    // image upload
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
    /* showDetails:function () {
      this.&http.get().then(function (res) {
        this.Items=res.body;
      })
    } */

    // form check

    /* checkForm: function () {
      var Otitle = document.getElementsByName('title')
      var Odetails = document.getElementsByName('details')
      var Oplace = document.getElementsByName('place')
      var Ocontact = document.getElementsByName('contact')
      var titleState = false
      var detailsState = false
      var placeState = false
      var contactState = false
      Otitle.onblur = function () {
        if (this.title === '') {
          alert('标题不能为空')
          console.log('title wrong')
          titleState = false
        } else {
          console.log('title correct')
          titleState = true
        }
        check()
      }
      Odetails.onblur = function () {
        if (this.details === '') {
          alert('描述不能为空')
          console.log('details wrong')
          detailsState = false
        } else {
          console.log('details correct')
          detailsState = true
        }
        check()
      }
      Oplace.onblur = function () {
        if (this.place === '') {
          alert('地点不能为空')
          console.log('place wrong')
          placeState = false
        } else {
          console.log('place correct')
          placeState = true
        }
        check()
      }
      Ocontact.onblur = function () {
        if (!/[1-9][0-9]{4,}/.test(this.contact)) {
          alert('联系方式不正确')
          console.log('contact wrong')
          contactState = false
        } else {
          console.log('contact correct')
          contactState = true
        }
        check()
      }

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
