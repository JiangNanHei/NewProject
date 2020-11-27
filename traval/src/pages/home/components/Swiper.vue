<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/202011/bdf238d87ac3aec799a78afa83662172.jpg_890x330_0a85c55b.jpg'
      },
        {
          id: '0002',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/202011/bdf238d87ac3aec799a78afa83662172.jpg_890x330_0a85c55b.jpg'
      }]
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
