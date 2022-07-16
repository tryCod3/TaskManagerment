import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import { RouteConfig } from 'vue-router';
import store from '@/store';
import { routes, asyncRoutes } from '@/router';

export interface IPermissionState {
  routers: RouteConfig[];
  dymamicRouters: RouteConfig[];
}

@Module({ dynamic: true, name: 'permission', store })
class Permission extends VuexModule implements IPermissionState {
  routers: RouteConfig[] = [];
  dymamicRouters: RouteConfig[] = [];

  @Mutation
  SET_ROUTERS(routers: RouteConfig[]): void {
    this.routers = routes.concat(routers);
    this.dymamicRouters = routers;
  }

  @Action
  generateRoutes(roles: string[]) {
    console.log(roles);
    if (roles.includes('admin')) {
      this.SET_ROUTERS(asyncRoutes);
    } else {
      // find asyncRoutes for roles
    }
  }
}

export const PermissionModule = getModule(Permission);
