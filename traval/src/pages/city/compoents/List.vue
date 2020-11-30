<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClicks(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, content) of cities"
           :key="content"
           :ref="content"
      >
        <div class="title border-topbottom">{{content}}</div>
        <div
          class="item-list"
          v-for="items of item"
          :key="items.id"
          @click="handleCityClicks(items.name)"
        >
          <div class="item border-bottom">{{items.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import Bus from 'styles/Bus.js'
import { mapState , mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: ['hotCities', 'cities'],
  data () {
    return {
      letter: ''
    }
  },
  methods: {
    handleCityClicks (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    const _this = this
    setTimeout(function () {
      _this.scroll = new Bscroll(_this.$refs.wrapper,{click:true})
    },500)
    Bus.$on('change', function (e) {
      _this.letter = e
    })
    Bus.$on('searchCity', function (e) {
      _this.handleCityClicks(e)
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    font-size: .26rem
    position: absolute
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .border-topbottom
      &:before
        border-color: #ccc
      &:after
        border-color: #ccc
    .border-bottom
      &:before
        border-color: #ccc
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          text-align: center
          margin: .1rem
          padding: .1rem 0
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        color: #666
        padding-left: .2rem

</style>
