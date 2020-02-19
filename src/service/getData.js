const baseUrl = process.env.VUE_APP_baseUrl

import axios from 'axios'

/**
 * 获取首页热门城市
 */
export const hotcity = () => axios.get(baseUrl + '/v1/cities?type=hot')

/**
 * 获取首页所有城市
 */
export const groupcity = () => axios.get(baseUrl + '/v1/cities?type=group')

/**
 * 获取首页默认地址
 */

export const cityGuess = () => axios.get(baseUrl + '/v1/cities?type=guess')

/**
 * 获取当前所在城市
 */
export const currentcity = number => axios.get(baseUrl + '/v1/cities/' + number)

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) =>
  axios.get(
    baseUrl +
      '/v1/pois?type=search' +
      'city_id=' +
      cityid +
      '&' +
      'keyword=' +
      value
  )
