import Vue from 'vue';
import Vuex from 'vuex';
import { IPermissionState } from './modules/permission';

Vue.use(Vuex);

interface IRootState {
  permissionState: IPermissionState;
}

export default new Vuex.Store<IRootState>({});
