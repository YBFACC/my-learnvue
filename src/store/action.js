import {getUser} from '@/service/getData.js'
import {GET_USERINFO} from '@/store/mutation-types.js'
//Uncaught TypeError: Object(...) is not a function
export default {
  async getUserInfo({ commit }) {
    let res = await getUser()
    commit(GET_USERINFO, res.data)
  }
}
