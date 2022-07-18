import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Layout from '../layout/index.vue';

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView,
    meta: { hidden: true },
  },
  {
    path: '/register',
    name: 'register',
    component: HomeView,
    meta: { hidden: true },
  },
  {
    path: '/404',
    name: 'not-found',
    component: HomeView,
    meta: { hidden: true },
  },
  {
    path: '/401',
    name: 'un-authorized',
    component: HomeView,
    meta: { hidden: true },
  },
  {
    path: '*',
    name: 'error',
    redirect: '/404',
    meta: { hidden: true },
  },
  {
    path: '',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    meta: {},
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: HomeView,
        meta: {
          title: 'Dashboard',
          icon: 'dashboard',
        },
      },
    ],
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
      roles: ['user', 'admin'],
      alwaysShow: true,
      icon: 'user',
    },
    children: [
      {
        path: 'my-infor', // /account/information
        name: 'my-infor',
        component: HomeView,
        meta: {
          title: 'my infor',
          roles: ['user', 'admin'],
        },
      },
      {
        path: 'manager',
        name: 'manager',
        component: HomeView,
        meta: {
          title: 'Manager',
          roles: ['admin'],
        },
        children: [
          {
            path: 'list-user',
            name: 'list-user',
            component: HomeView,
            meta: {
              title: 'list user',
              roles: ['admin'],
            },
          },
          {
            path: 'permission-user',
            name: 'permission-user',
            component: HomeView,
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
      roles: ['admin', 'user'],
      alwaysShow: true,
    },
    children: [
      {
        path: 'list-task',
        name: 'listtask',
        component: HomeView,
        meta: {
          title: 'List Task',
          roles: ['admin', 'developer'],
        },
      },
      {
        path: 'add-task',
        name: 'addtask',
        component: HomeView,
        meta: {
          title: 'Add Task',
          roles: ['admin'],
        },
      },
      {
        path: 'my-task',
        name: 'mytask',
        component: HomeView,
        meta: {
          title: 'My Task',
          roles: ['admin', 'user'],
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
