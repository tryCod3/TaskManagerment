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
  isSetPermission: boolean;
}

const isConstanRoles = (roles: string[], rolesRoute: string[]) => {
  for (let i = 0; i < roles.length; i++) {
    if (rolesRoute.includes(roles[i])) {
      return true;
    }
  }
  return false;
};

const splitRouterForRole = (
  arr: RouteConfig[],
  roles: string[]
): RouteConfig[] => {
  const arrSplitRouters: RouteConfig[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].meta && arr[i].meta?.roles) {
      const r = { ...arr[i] };
      const checkRole = isConstanRoles(roles, arr[i].meta?.roles);
      if (checkRole) {
        if (r.children) {
          r.children = splitRouterForRole(r.children, roles);
        }
        arrSplitRouters.push(r);
      }
    }
  }
  return arrSplitRouters;
};

@Module({ dynamic: true, name: 'permission', store })
class Permission extends VuexModule implements IPermissionState {
  routers: RouteConfig[] = [];
  dymamicRouters: RouteConfig[] = [];
  isSetPermission = false;

  @Mutation
  SET_ROUTERS(routers: RouteConfig[]): void {
    this.routers = routes.concat(routers);
    this.dymamicRouters = routers;
  }

  @Mutation
  SET_IS_PERMISSIONS(isPer: boolean): void {
    this.isSetPermission = isPer;
  }

  @Mutation
  REFRESH() {
    this.routers = [];
    this.dymamicRouters = [];
    this.isSetPermission = false;
  }

  @Action
  generateRoutes(roles: string[]) {
    if (roles.includes('admin')) {
      this.SET_ROUTERS(asyncRoutes);
    } else {
      const splitRoles = splitRouterForRole(asyncRoutes, roles);
      console.log('=>', splitRoles);
      this.SET_ROUTERS(splitRoles);
    }
    this.SET_IS_PERMISSIONS(true);
  }

  @Action
  refresh() {
    this.REFRESH();
  }
}

export const PermissionModule = getModule(Permission);
