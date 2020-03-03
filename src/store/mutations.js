import { RECORD_USERINFO } from './mutation-types'


export default{
  [RECORD_USERINFO](state,info){
    state.userInfo = info;
		state.login = true;
  }
}