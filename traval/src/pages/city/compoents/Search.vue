<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="provideShow(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import Bus from 'styles/Bus.js'
export default {
  name: 'CitySearch',
  props: ['cities'],
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    provideShow (city) {
      this.keyword = ''
      Bus.$emit('searchCity', city)
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        const _this = this
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(_this.keyword) > -1 ||
              value.name.indexOf(_this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height: .92rem
    background: $bgColor
    padding: 0 .1rem
    line-height .45rem
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
      border: none
      font-size: .32rem
      padding: 0 .1rem
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
      font-size: .32rem

</style>
