export default [

  
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import("@/yicpages/admin/comex/dashboard.vue"),
    meta: {
      layout: "full",
      authReq: true,

    },
  },

  {
    path: '/addSingle',
    name: 'addSingle',
    component: () => import("@/yicpages/admin/comex/addSingle.vue"),
    meta: {
      layout: 'full',
      authReq: true,

    },
  },
  {
    path: '/addBulk',
    name: 'addBulk',
    component: () => import("@/yicpages/admin/comex/addBulk.vue"),
    meta: {
      layout: 'full',
      authReq: true,

    },
  },
  {
    path: '/downloadLatest',
    name: 'downloadLatest',
    component: () => import("@/yicpages/admin/comex/downloadLatest.vue"),
    meta: {
      layout: 'full',
      authReq: true,

    },
  },
  {
    path: '/search',
    name: 'search',
    component: () => import("@/yicpages/admin/comex/search.vue"),
    meta: {
      layout: 'full',
      authReq: true,

    },
  },
  {
    path: '/configure',
    name: 'configure',
    component: () => import("@/yicpages/admin/comex/configure.vue"),
    meta: {
      layout: 'full',
      authReq: true,

    },
  },
  {
    path: '/createUsers',
    name: 'createUsers',
    component: () => import("@/yicpages/admin/comex/createUsers.vue"),
    meta: {
      layout: 'full',
      authReqAdmin: true,
      authReq: true,


    },
  }






]
