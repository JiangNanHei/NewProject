<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="WeekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: ''
    }
  },
  computed: {
    ...mapState({
      WeekendList: state => state.index.weekendList,
      swiperList: state => state.index.swiperList,
      iconsList: state => state.index.iconList,
      recommendList: state => state.index.recommendList
    })

  },
  methods: {
    ...mapActions(['actionIndex'])
    // getHomeInfo () {
    //   axios.get('/api/index.json?city=' + this.city)
    //     .then(this.getHomeInfoSucc)
    // },
    // getHomeInfoSucc (res) {
    //   res = res.data
    //   if (res.ret && res.data) {
    //     this.swiperList = res.data.swiperList
    //     this.iconsList = res.data.iconList
    //     this.recommendList = res.data.recommendList
    //     this.WeekendList = res.data.weekendList
    //   }
    // }
  },
  mounted () {
    this.actionIndex()
    // this.lastCity = th
    // is.city
    // this.getHomeInfo()
  },
  activated () {
    // if (this.lastCity !== this.city) {
    //   this.lastCity = this.city
    //   this.getHomeInfo()
    // }
  }
}
</script>

<style scoped>

</style>
