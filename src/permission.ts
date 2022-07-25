import router from '@/router';
import { PermissionModule } from '@/store/modules/permission';
import { UserModule } from '@/store/modules/user';
import { UserCookie } from '@/utils/cookies';

const userCookie = UserCookie('user-key');

router.beforeEach(async (to, from, next) => {
  debugger;
  const res = userCookie.GET_VALUE();
  // console.log(res);
  // chua dang nhap
  if (UserModule.token !== '' || res) {
    if (!PermissionModule.isSetPermission) {
      UserModule.getAccount();
      PermissionModule.generateRoutes(UserModule.roles);
      PermissionModule.dymamicRouters.forEach((route) => {
        router.addRoute(route);
      });
      // console.log(to, from);
      // console.log({
      //   path: from.redirectedFrom,
      //   replace: true,
      // });
      if (from.redirectedFrom) {
        next({
          path: from.redirectedFrom,
          replace: true,
        });
      } else {
        next({
          path: to.path,
          replace: true,
        });
      }
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
