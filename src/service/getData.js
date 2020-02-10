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
