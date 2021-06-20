const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "/tooltips" },
      {
        path: "/home",
        component: () => import("src/pages/Home/Home.vue"),
        children: [
          {
            path: "/home/child",
            component: () => import("src/pages/Home/Child.vue"),
          },
        ],
      },
      {
        path: "/tooltips",
        component: () => import("src/pages/Tooltips/Tooltips.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
