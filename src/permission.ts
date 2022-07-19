import router from '@/router';
import { PermissionModule } from '@/store/modules/permission';
import { UserModule } from '@/store/modules/user';

router.beforeEach((to, from, next) => {
  // chua dang nhap
  if (UserModule.token !== '') {
    if (!PermissionModule.isSetPermission) {
      PermissionModule.generateRoutes(UserModule.roles);
      PermissionModule.dymamicRouters.forEach((route) => {
        router.addRoute(route);
      });
      next({
        path: to.path,
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
