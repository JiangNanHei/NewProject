<template>
  <div class="header">
    <div class="header-left"><div class="iconfont left-error">&#xe743;</div></div>
    <div class="header-input">
      <span class="iconfont">&#xe7b3;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!--{{this.$store.state.city}}-->
        {{this.defaultCity}}
        <span class="iconfont arrow-icon">&#xe62a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['defaultCity']),

  },
  methods: {
    changCityGo () {
      this.changCity('日本')
    },
    ...mapMutations(['changCity'])
  },
  mounted () {
    this.changCityGo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    font-size: .3rem
    display: flex
    line-height: .86rem
    background: $bgColor
    color:#fff
    .header-left
      width: .64rem
      float: left
      text-align:center
      .left-error
        font-size: .6rem

  .header-input
      flex:1
      height:.64rem
      line-height .64rem
      margin-top:.12rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius .1rem
      background #fff
      color:#ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      text-align center
      float:right
      color:#fff
      .arrow-icon{
        font-size:.2rem
      }

</style>
