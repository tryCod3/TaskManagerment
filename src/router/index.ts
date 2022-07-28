import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '../layout/index.vue';

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(
        /* webpackChunkName: "dashboard-logio" */ '@/views/Logio/index.vue'
      ),
    meta: { hidden: true },
  },
  {
    path: '/register',
    name: 'register',
    meta: { hidden: true },
  },

  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    meta: {},
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard-logio" */ '@/views/Dashboard.vue'
          ),
        meta: {
          title: 'Dashboard',
          icon: 'dashboard',
          isRoot: true,
        },
      },
    ],
  },
  {
    path: '/404',
    name: 'not-found',
    meta: { hidden: true },
  },
  {
    path: '/401',
    name: 'un-authorized',
    meta: { hidden: true },
  },
  {
    path: '*',
    name: 'error',
    redirect: '/404',
    meta: { hidden: true },
  },
];

export const asyncRoutes: Array<RouteConfig> = [
  {
    path: '/account',
    name: 'account',
    redirect: '/account/my-infor',
    component: Layout,
    meta: {
      title: 'Account',
      roles: ['user', 'admin', 'developer'],
      alwaysShow: true,
      icon: 'user',
    },
    children: [
      {
        path: 'my-infor', // /account/information
        name: 'my-infor',
        component: () =>
          import(
            /* webpackChunkName: "account-myinfor" */ '@/views/Account/component/Infomation/MyInfomation.vue'
          ),
        meta: {
          title: 'my infor',
          roles: ['user', 'admin', 'developer'],
        },
      },
      {
        path: 'manager',
        name: 'manager',
        component: () =>
          import(
            /* webpackChunkName: "account-manager" */ '@/views/Account/component/index.vue'
          ),
        meta: {
          title: 'Manager',
          roles: ['admin'],
        },
        children: [
          {
            path: 'list-user',
            name: 'list-user',
            component: () =>
              import(
                /* webpackChunkName: "account-listuser" */ '@/views/Account/component/Manager/ManagerUser.vue'
              ),
            meta: {
              title: 'list user',
              roles: ['admin'],
            },
          },
          {
            path: 'permission-user',
            name: 'permission-user',
            meta: {
              title: 'permission user',
              roles: ['admin'],
            },
          },
        ],
      },
    ],
  },
  {
    path: '/task',
    name: 'task',
    redirect: '/task/list-task',
    component: Layout,
    meta: {
      icon: 'list',
      title: 'Task',
      roles: ['admin', 'user', 'developer'],
      alwaysShow: true,
    },
    children: [
      {
        path: 'list-task',
        name: 'listtask',
        meta: {
          title: 'List Task',
          roles: ['admin', 'developer'],
        },
      },
      {
        path: 'add-task',
        name: 'addtask',
        meta: {
          title: 'Add Task',
          roles: ['admin'],
        },
      },
      {
        path: 'my-task',
        name: 'mytask',
        meta: {
          title: 'My Task',
          roles: ['admin', 'user', 'developer'],
        },
      },
    ],
  },
];

const createRouter = () => {
  return new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    base: process.env.BASE_URL,
    routes,
  });
};

const router = createRouter();

export default router;
