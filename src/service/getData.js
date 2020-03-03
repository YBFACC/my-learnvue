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

/**
 * 获取图片验证码
 */

export const getcaptchas = () => axios.post(baseUrl + '/v1/captchas')

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => {
  let data = {
    username: username,
    password: password,
    captcha_code: captcha_code
  }
  return axios.post(baseUrl + '/v2/login', data)
}
