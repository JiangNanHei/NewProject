<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeWeekend',
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
  .item-img-wrapper
    overflow hidden
    height: 0
    padding-bottom: 33.9%
  .item-img
    width: 100%
  .item-info
    flex:1
    min-width:0
    padding .1rem
    .item-title
      line-height: .34rem
      margin-bottom .1rem
      font-size: .32rem
      ellipse()
    .item-desc
      line-height: .5rem
      margin-bottom: -.2rem
      font-size: .24rem
      color:#ccc
      ellipse()
</style>
