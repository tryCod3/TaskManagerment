import router from '@/router';
import { PermissionModule } from '@/store/modules/permission';

router.beforeEach((to, from, next) => {
  PermissionModule.generateRoutes(['admin']);
  PermissionModule.dymamicRouters.forEach((route) => {
    router.addRoute(route);
  });
  next();
});
