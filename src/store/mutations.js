import { RECORD_USERINFO,GET_USERINFO } from './mutation-types'


export default{
  [RECORD_USERINFO](state,info){
    state.userInfo = info;
		state.login = true;
  },
  [GET_USERINFO](state,info){
    if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		};
		if (!state.login) {
			return
		}
		if (!info.message) {
			state.userInfo = {...info};
		} else {
			state.userInfo = null;
		}
  }
}