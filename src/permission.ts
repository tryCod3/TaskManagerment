import router from '@/router';
import { Route } from 'vue-router';
import { PermissionModule } from '@/store/modules/permission';
import { UserModule } from '@/store/modules/user';
import { UserCookie } from '@/utils/cookies';

const userCookie = UserCookie('user-key');

router.beforeEach(async (to: Route, _: Route, next: any) => {
  const res = userCookie.GET_VALUE();
  if (UserModule.token !== '' || res) {
    if (!PermissionModule.isSetPermission) {
      await UserModule.getAccount();
      PermissionModule.generateRoutes(UserModule.roles);
      PermissionModule.dymamicRouters.forEach((route) => {
        router.addRoute(route);
      });
      next({
        ...to,
        replace: true,
      });
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});
