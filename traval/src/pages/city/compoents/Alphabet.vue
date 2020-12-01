<template>
  <ul class="list">
    <li class="item"
        v-for="(item, key) of cities"
        :key="key"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        :ref="key"
    >
      <!--.prevent--阻止默认行为-->
      {{key}}
    </li>
  </ul>
</template>

<script>
import Bus from 'styles/Bus.js'
export default {
  name: 'CityAlphabet',
  props: ['cities'],
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letter
    }
  },
  methods: {
    handleLetterClick (e) {
      Bus.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop //性能优化
        // const touchY = e.touches[0].clientY - 79
        // const index = Math.floor((touchY - this.startY) / 20)
        // if (index >= 0 && index < this.letter.length) {
        //   Bus.$emit('change', this.letter[index])
        // }
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letter.length) {
            Bus.$emit('change', this.letter[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top:1.78rem
    right: 0
    bottom: 0
    width: .4rem
    font-size: .24rem
    .item
      text-align: center
      line-height: .44rem
      color: $bgColor
</style>
