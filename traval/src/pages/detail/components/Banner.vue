<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="baneer-img" :src="list">
      <div class="banner-info">
        <div class="banner-tittle">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe635;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade>
      <gallary
        :imgs="gallaryImgs"
        v-if="showGallary"
        @close="handleGallaryClose"
      >
      </gallary>
    </fade>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
import Bus from 'styles/Bus.js'
export default {
  name: 'DetailBanner',
  components: {
    Gallary,
    Fade
  },
  props: ['list', 'gallaryImgs', 'sightName'],
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      Bus.$emit('closeHeader')
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  activated () {
    this.showGallary = false
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    font-size: .32rem
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display:flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color:#fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-tittle
        flex: 1
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0,0,0,.8)
        font-size: .24rem
        margin-top: .14rem
        .banner-icon
          font-size: .24rem

</style>
