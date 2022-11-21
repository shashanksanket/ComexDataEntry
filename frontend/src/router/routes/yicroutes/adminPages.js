export default [

  {
    path:'/adminDashboard',
    name:'adminDashboard',
    component: () => import("@/yicpages/admin/comex/addSingle.vue"),
    meta: {
      layout: "full",
      
    },
  },
    
      {
        path: '/addSingle',
        name: 'addSingle',
              component: () => import("@/yicpages/admin/comex/addSingle.vue"),
              meta: {
                  layout: 'full',
                  
              },
      },
      {
        path: '/addBulk',
        name: 'addBulk',
              component: () => import("@/yicpages/admin/comex/addBulk.vue"),
              meta: {
                  layout: 'full',
                  
              },
      },
      {
        path: '/downloadLatest',
        name: 'downloadLatest',
              component: () => import("@/yicpages/admin/comex/downloadLatest.vue"),
              meta: {
                  layout: 'full',
                  
              },
      },
      {
        path: '/search',
        name: 'search',
              component: () => import("@/yicpages/admin/comex/search.vue"),
              meta: {
                  layout: 'full',
                  
              },
      },
      {
        path: '/configure',
        name: 'configure',
              component: () => import("@/yicpages/admin/comex/configure.vue"),
              meta: {
                  layout: 'full',
                  
              },
      }
  





]
