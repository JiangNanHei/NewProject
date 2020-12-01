<template>
  <div>
    <detail-banner :list="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        this.bannerImg = res.data.bannerImg
        this.categoryList = res.data.categoryList
        this.gallaryImgs = res.data.gallaryImgs
        this.sightName = res.data.sightName
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped>

</style>
