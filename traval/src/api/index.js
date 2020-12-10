/**
 * 包含n个借口请求函数的模块
 * 函数的返回值是promise对象
 * */
import ajax from './ajax'
const BASE_URL = '/api'
export const getCityData = () => ajax(BASE_URL + '/api/city.json')

export const getDetailData = () => ajax(BASE_URL + '/api/detail.json')

export const getIndexData = () => ajax(BASE_URL + '/import/index.json')
