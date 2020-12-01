<template>
    <div class="container" @click="handleGallaryClick">
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item of imgs" :key="item.id">
            <img class="gallary-img" :src="item"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: ['imgs'],
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      document.removeEventListener('touchmove', this.preventDefault, { passive: false })
      this.$emit('close')
    },
    preventDefault (e) {
      e.preventDefault()
    }
  },
  mounted () {
    document.addEventListener('touchmove', this.preventDefault, { passive: false })
  },
  deactivated () {
    document.removeEventListener('touchmove', this.preventDefault, { passive: false })
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    font-size: .32rem
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem

</style>
