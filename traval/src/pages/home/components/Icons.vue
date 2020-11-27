<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
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
export default {
  name: "HomeIcons",
  data () {
    return {
      iconsList: [{
        id: '0001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png',
        desc: '景点门票景点门票景点门票景点门票景点门票景点门票'
      },{
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
        desc: '一日游'
      },{
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '拙政园'
      },{
        id: '0004',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/b7a5e6b1774eda4fc9e32588f1d00c94.png',
        desc: '踏青赏花'
      },{
        id: '0005',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png',
        desc: '景点门票'
      },{
        id: '0006',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
        desc: '一日游'
      },{
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '拙政园'
      },{
        id: '0008',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/b7a5e6b1774eda4fc9e32588f1d00c94.png',
        desc: '踏青赏花'
      },{
        id: '0009',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/b7a5e6b1774eda4fc9e32588f1d00c94.png',
        desc: '踏青赏花'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
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
