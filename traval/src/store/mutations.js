import {CITY_DATA, DETAIL_DATA, INDEX_DATA} from './mutation-type'

export default{
  [INDEX_DATA] (state, {result}) {
    state.index = result
  },

  [CITY_DATA] (state, {result}) {
    state.city = result
  },

  [DETAIL_DATA] (state, {result}) {
    state.datil = result
  },

  changCity (state, data) {
    state.defaultCity = data
  }
}
