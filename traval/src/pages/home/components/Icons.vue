<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages()" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-esc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import {getIndexData} from '../../../api'
export default {
  name: 'HomeIcons',
  props: ['list'],
  data () {
    return {
      swiperOptions: {
        autoplay: false
      },
      // list: {}
    }
  },
  computed: {

  },
  methods: {
    // async getIndex () {
    //   const indexData = await getIndexData()
    //   this.list = indexData.data.iconList
    // },
    pages () {
      const pages = []
      // 返回的数组是一个类数组，本质为object，通过Array.from 将其转化为一个真正的数组
      const ps = this.list
      const ls = Array.from(ps)
      ls.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  mounted () {
    // this.getIndex()
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    /*background: green*/
    font-size: .2rem
    margin-top: .1rem
    margin-bottom: .1rem
    .icon
      float: left
      width: 25%
      padding-bottom: 25%
      /*background: red*/
      position: relative
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        /*background: blue*/
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          height 100%
          display: block
          margin: 0 auto
      .icon-esc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align:center
        color: $darkTextColor
        ellipse()

</style>
