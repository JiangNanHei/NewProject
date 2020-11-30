<template>
    <div class="banner">
      <img class="baneer-img" src="">
      <div class="banner-info">
        <div class="banner-tittle">
          zheshisge
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe635;</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "DetailBanner"
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
