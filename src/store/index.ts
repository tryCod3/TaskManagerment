import Vue from 'vue';
import Vuex from 'vuex';
import { IPermissionState } from './modules/permission';
import { IUserState } from './modules/user';

Vue.use(Vuex);

interface IRootState {
  permissionState: IPermissionState;
  userState: IUserState;
}

export default new Vuex.Store<IRootState>({});
