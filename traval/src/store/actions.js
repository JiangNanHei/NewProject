import {
  getCityData,
  getDetailData,
  getIndexData
} from '../api'

import {
  CITY_DATA,
  INDEX_DATA,
  DETAIL_DATA
} from './mutation-type'
export default {
  actionIndex (ctx) {
    getIndexData().then(res => {
      if (res.ret === true) {
        const result = res.data
        // 根据结果提交一个mutation
        ctx.commit(INDEX_DATA, {result})
      }
    })
  },
  actionCity (ctx) {
    getCityData().then(res => {
      if (res.ret === true) {
        const result = res.data
        // 根据结果提交一个mutation
        ctx.commit(CITY_DATA, {result})
      }
    })
  },
  actionDetail (ctx) {
    getDetailData().then(res => {
      if (res.ret === true) {
        const result = res.data
        // 根据结果提交一个mutation
        ctx.commit(DETAIL_DATA, {result})
      }
    })
  }
}
