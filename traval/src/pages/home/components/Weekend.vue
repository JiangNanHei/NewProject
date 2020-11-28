<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
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
    name: "HomeWeekend",
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
          title: '大连圣亚海洋世界',
          desc: '洞外骄阳似火，洞内清凉温润洞外骄阳似火，洞内清凉温润洞外骄阳似火'
        },{
          id: '0002',
          imgUrl:'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
          title: '大连圣亚海洋世界',
          desc: '洞外骄阳似火，洞内清凉温润洞外骄阳似火'
        },{
          id: '0003',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
          title: '大连圣亚海洋世界',
          desc: '洞外骄阳似火，洞内清凉温润洞外骄阳似火'
        }]
      }
    }
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

