<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'HomeRecommend',
  props: ['list']
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    line-height: .8rem
    background: #eee
    text-index: .2rem
    font-size: .3rem
  .item
    overflow: hidden
    display:flex
    height: 1.9rem
    /*background:red*/
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex:1
      padding: .1rem
      min-width:0
      .item-title
        /*line-height: .54rem*/
        margin-bottom .1rem
        font-size: .32rem
        ellipse()
      .item-desc
        /*line-height: .2rem*/
        margin-bottom: -.2rem
        font-size: .24rem
        color:#ccc
        ellipse()
      .item-button
        line-height: .44rem
        /*margin-top: .16rem*/
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color:#fff
</style>
