<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="listLength()">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: ['list'],
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  methods: {
    listLength () {
      const listArray = this.list
      const arrayList = Array.from (listArray)
      const arrayListLength = arrayList.length
      return arrayListLength
    }
  }
}
</script>

<style lang="stylus" scoped>
  //>>>样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff
  .wrapper
    width: 100%
    height: 0
    overflow:hidden
    padding-bottom:37%
    background:#eee
    .swiper-img
      width:100%
</style>
